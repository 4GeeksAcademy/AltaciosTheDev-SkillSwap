"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from datetime import timedelta
import requests



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#create a User 👤
@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "User are registered"}), 403

    password_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")

    new_user = User(email=email, password=password_hash, is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(msg="user created successful")

#login a user 🦍
@api.route("/login", methods=["POST"])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).one_or_none()
    if user is None:
        return jsonify({"msg": "User not Found"}), 404

    # decrypted_password = current_app.bcrypt.check_password_hash(user.password, password)

    # if email != user.email or decrypted_password is False:
    #     return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    create_access_token(identity = user.email, expires_delta=timedelta(hours=3))
    return jsonify(user=user.serialize(), access_token=access_token)


@api.route("/protected", methods=["GET"])
@jwt_required()
def private():
    email = get_jwt_identity()

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "user not Found 🙁"}), 404
    
    return jsonify(user.serialize())


#api news
@api.route('/news', methods=['GET'])
def news():

    response = requests.get(f"https://newsapi.org/v2/everything?q=technology&from=2024-03-25&sortBy=publishedAt&apiKey={os.environ.get('NEWS_API_KEY')}")

    return jsonify(response.json()), 200


#Routes for receiving back end info 
#Route for receiving USERS
@api.route("/users", methods=["GET"])
def get_users():

    users = User.query.all()
    return jsonify([user.serialize() for user in users]),200
    

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
