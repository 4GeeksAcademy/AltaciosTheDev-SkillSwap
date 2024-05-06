"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Category, Skill, User_Skill_Association, Session, Favorite
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from random import sample, choice, randint
from datetime import datetime, timedelta
from sqlalchemy import or_, and_
import requests




api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#create a User 👤
@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    name=request.json.get("name", None)
    password = request.json.get("password", None)
    number=request.json.get("number",None)
    


    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "User are registered"}), 403

    password_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")

    new_user = User(email=email, password=password_hash,number=number, is_active=True)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(msg="user created successful")

#login a user 🦍
@api.route("/login", methods=["POST"])
def login():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email,password=password).one_or_none()
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

    
    response = requests.get(f"https://newsapi.org/v2/everything?q=technology&from=2024-04-15&sortBy=publishedAt&apiKey={os.environ.get('NEWS_API_KEY')}")

    return jsonify(response.json()), 200


#Routes for receiving back end info 
#Route for receiving USERS
@api.route("/users", methods=["GET"])
def get_users():

    users = User.query.all()
    return jsonify([user.serialize() for user in users]),200

#Route for receiving specific user info 
@api.route("/users/<int:id>", methods=["GET"])
# @jwt_required()
def get_user(id):

    user = User.query.filter_by(id=id).one_or_none()

    if user == None:
        return jsonify({"msg": "User not found"}), 404
    
    return jsonify(user.serialize()),200


#edit profile
@api.route("/profile", methods=["PUT"])
@jwt_required()
def update_user():
    # Fetch the user from the database
    email = get_jwt_identity()

    usuario = User.query.filter_by(email=email).first()

    # Check if the user exists
    if usuario is None:
        return jsonify({"msg": "User not found"}), 404

    # Get the updated data from the request
    datos_usuario = request.get_json()

    # Update the user's attributes

    for key in datos_usuario:
        for col in usuario.serialize():
            if key == col and key != "id":
                setattr(usuario, key, datos_usuario[key])

    # Commit the changes to the database
    db.session.commit()
    db.session.refresh(usuario)

    # Return a response
    return jsonify({
        'mensaje': 'Usuario actualizado con éxito',
        'usuario': usuario.serialize()})



    # email = request.json.get("email", None)
    # user = User.query.filter_by(id=id).one_or_none()

    # if user == None:
    #     return jsonify({"msg": "User not found"}), 404
    
    # return jsonify(user.serialize()),200
  
    
#Route for receiving CATEGORIES
@api.route("/categories", methods=["GET"])
def get_categories():

    categories = Category.query.all()
    return jsonify([category.serialize() for category in categories]),200
    
#Route for receiving SKILLS
@api.route("/skills", methods=["GET"])
def get_skills():

    skills = Skill.query.all()
    return jsonify([skill.serialize() for skill in skills]),200

#Route for receiving ASSOCIATIONS
@api.route("/associations", methods=["GET"])
@jwt_required()
def get_users_skills_associations():

    level = request.args.get("level")
    role = request.args.get("role")

    if level and role:
        associations = User_Skill_Association.query.filter_by(level=level, role=role)

    elif level: 
        associations = User_Skill_Association.query.filter_by(level=level)

    elif role: 
        associations = User_Skill_Association.query.filter_by(role=role)

    else: 
        associations = User_Skill_Association.query.all()


    return jsonify([association.serialize() for association in associations]),200




@api.route("/associations/<int:id>", methods=["PUT"])
@jwt_required()
def update_user_status(id):
    # Fetch the user from the database
    

    email = get_jwt_identity()

    usuario = User.query.filter_by(email=email).first()

    info_associations = User_Skill_Association.query.filter_by(user_id = usuario.id, id = id ).first()

    # Check if the user exists
    if info_associations is None:
        return jsonify({"msg": "User not found"}), 404

    # Get the updated data from the request
    datos_usuario = request.get_json()

    # Update the user's attributes

    for key in datos_usuario:
        for col in info_associations.serialize():
            if key == col and key != "id":
                setattr(info_associations, key, datos_usuario[key])

    # skill_id = datos_usuario.get("skill_id", None)

    # if skill_id != None:
    #     usuario.skill_id = skill_id

    # Commit the changes to the database
    db.session.commit()
    db.session.refresh(info_associations)

    # Return a response
    return jsonify({
        'mensaje': 'Skill actualizada con éxito',
        'usuario': info_associations.serialize()})




@api.route("/skills-joined-table", methods=["GET"])
@jwt_required()
def get_skills_joined_table():

    # Retrieve query parameters
    level = request.args.get("level")
    role = request.args.get("role")
    category = request.args.get("category")

    # Perform the join using Flask-SQLAlchemy
    joined_table = db.session.query(
        User_Skill_Association.id.label('user_skill_association_id'),
        User_Skill_Association.level,
        User_Skill_Association.role,
        User_Skill_Association.user_id,
        User_Skill_Association.skill_id,
        Skill.name.label('skill_name'),
        Category.id.label('category_id'),
        Category.name.label('category_name'),
        User.name.label('user_name'),  # Include the user name in the query
        User.gender.label('user_gender')  # Include the user gender in the query
    ).join(
        Skill, User_Skill_Association.skill_id == Skill.id
    ).join(
        Category, Skill.category_id == Category.id
    ).join(
        User, User_Skill_Association.user_id == User.id  # Join to User to access name and gender
    )

    # Filter based on query parameters
    if level and role and category:
        filtered_joined_table = joined_table.filter(Category.name == category, User_Skill_Association.level == level, User_Skill_Association.role == role).all()
    elif level and role:
        filtered_joined_table = joined_table.filter(User_Skill_Association.level == level, User_Skill_Association.role == role).all()
    elif level and category:
        filtered_joined_table = joined_table.filter(Category.name == category, User_Skill_Association.level == level).all()
    elif role and category:
        filtered_joined_table = joined_table.filter(Category.name == category, User_Skill_Association.role == role).all()
    elif level:
        filtered_joined_table = joined_table.filter(User_Skill_Association.level == level).all()
    elif role:
        filtered_joined_table = joined_table.filter(User_Skill_Association.role == role).all()
    elif category:
        filtered_joined_table = joined_table.filter(Category.name == category).all()
    else:
        filtered_joined_table = joined_table.all()

    # Serialize each object into a dictionary
    serialized_data = []

    for row in filtered_joined_table:
        serialized_data.append({
            "user_skill_association_id": row.user_skill_association_id,
            "level": row.level,
            "role": row.role,
            "user_id": row.user_id,
            "user_name": row.user_name,
            "user_gender": row.user_gender,
            "skill_id": row.skill_id,
            "skill_name": row.skill_name,
            "category_name": row.category_name
        })

    return jsonify(serialized_data), 200

#Route for receiving SKILLS
@api.route("/sessions", methods=["POST","GET"])
def handle_sessions():
    if request.method == "POST":
        learner_id = request.json.get("learner_id", None)
        tutor_id = request.json.get("tutor_id", None)
        skill_id = request.json.get("skill_id", None)
        date = request.json.get("date", None)
        time = request.json.get("time", None)
        status = request.json.get("status", None)

        if learner_id == None:
            return jsonify({"msg:" "Missing learner_id"}), 400
        
        elif tutor_id == None:
            return jsonify({"msg:" "Missing tutor_id"}), 400

        elif skill_id == None:
            return jsonify({"msg:" "Missing skill_id"}), 400
        
        elif date == None:
            return jsonify({"msg:" "Missing date"}), 400
        
        elif time == None:
            return jsonify({"msg:" "Missing time"}), 400
        
        elif status == None:
            return jsonify({"msg:" "Missing status"}), 400

        else:
            tutor = User.query.get(tutor_id)
            learner = User.query.get(learner_id)
            skill = Skill.query.get(skill_id)

            if tutor is None:
                return jsonify({"msg": "tutor with provided ID not found"}), 404
            
            if learner is None:
                return jsonify({"msg": "learner with provided ID not found"}), 404
            
            if skill is None:
                return jsonify({"msg": "skill with provided ID not found"}), 404
            
            new_session = Session(date=date, time=time, status=status, learner_id=learner.id, tutor_id=tutor.id, skill_id=skill.id)
            db.session.add(new_session)
            db.session.commit()
            return jsonify({"msg": "Session scheduled successfully", "details": new_session.serialize()  }),200

    else:
        sessions = Session.query.all()
        return jsonify([session.serialize() for session in sessions]),200
    
#Route for receiving ASSOCIATIONS
@api.route("/user-sessions", methods=["GET"])
@jwt_required()
def get_user_sessions():
    # Retrieve query parameters
    status = request.args.get("status")

    user_email = get_jwt_identity()

    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"msg": "user not Found"}), 404
    
    if status:
        logged_user_sessions = Session.query.filter(and_(Session.status == status,or_(Session.tutor_id == user.id,Session.learner_id == user.id)))

    else:
        logged_user_sessions = Session.query.filter(or_(Session.tutor_id == user.id,Session.learner_id == user.id))

    return jsonify({"msg": "User sessions loaded successfully", "sessions": [session.serialize() for session in logged_user_sessions]}),200


@api.route("/populate", methods=['POST'])
def generate_database():

    # Populate categories
    categories = ['Programming', 'Culinary', 'Creative', 'Interpersonal', 'Sports']
    for category_name in categories:
        category = Category(name=category_name)
        db.session.add(category)
    db.session.commit()

    # Get category IDs
    category_ids = {category.name: category.id for category in Category.query.all()}

    # Populate skills for each category
    skills_data = {
        'Programming': ['Python', 'JavaScript', 'Java', 'C++', 'React', 'Algorithms', 'Golang', 'Django', 'Angular', 'Vue'],
        'Culinary': ['Baking', 'Cooking', 'Mixology', 'Cutting', 'Roasting', 'Grilling', 'Pastry', 'Deserts', 'Breakfasts'],
        'Creative': ['Drawing', 'Painting', 'Sculpting', 'Figma', 'UI design', 'UX design'],
        'Interpersonal': ['Communication', 'Leadership', 'Teamwork', 'Empathy', 'Motivation', 'Ethic'],
        'Sports': ['Football', 'Basketball', 'Tennis', 'Swimming']
    }

    for category_name, skills in skills_data.items():
        category_id = category_ids.get(category_name)
        if category_id:
            for skill_name in skills:
                skill = Skill(name=skill_name, category_id=category_id)
                db.session.add(skill)
    db.session.commit()

    # Populate users and their skills
    user_data = [
        {"name": "Enzo Altamirano",   "email": "enzo.altamirano@gmail.com",   "password": "elephantgun",         "number": "+504-3355-5344", "gender": "Male",   "country": "Honduras",      "city": "San Pedro Sula",   "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Jean Nounoun",      "email": "jean.nounoun@gmail.com",      "password": "loquetuquieras",      "number": "+504-3340-5432", "gender": "Male",   "country": "Venezuela",     "city": "Caracas",          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Miguel Reyes",      "email": "miguel.reyes@gmail.com",      "password": "cosasbonitas",        "number": "+504-3340-5454", "gender": "Male",   "country": "Mexico",        "city": "Ciudad de Mexico", "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Astrid Altamirano", "email": "astrid.altamirano@gmail.com", "password": "madredeloca",         "number": "+504-3334-5674", "gender": "Female", "country": "Costa Rica",    "city": "San Jose",         "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "LeAnn Turcios",     "email": "leaan.turcios@gmail.com",     "password": "justinandkarlton",    "number": "+1-250-550-234", "gender": "Female", "country": "United States", "city": "Thompson Station", "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Emma Cueva",        "email": "emma.cueva@gmail.com",        "password": "anakin",              "number": "+43-2554-55044", "gender": "Female", "country": "United States", "city": "Thompson Station", "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    ]

    for user_info in user_data:
        user = User(**user_info)
        db.session.add(user)

    db.session.commit()

    # Define roles and levels
    roles = ["Tutor", "Learner"]
    levels = ["Beginner", "Intermediate", "Advanced"]

    # Get all users and skills
    users = User.query.all()
    skills = Skill.query.all()

    # Iterate through each user
    for user in users:
        # Randomly select 5 skills for learning and 5 skills for tutoring
        learn_skills = sample(skills, 5)
        tutor_skills = sample(skills, 5)

        # Create User_Skill_Associations for learning
        for skill in learn_skills:
            level = choice(levels)  # Randomly select a level
            association = User_Skill_Association(level=level, role="Learner", user_id=user.id, skill_id=skill.id)
            db.session.add(association)

        # Create User_Skill_Associations for tutoring
        for skill in tutor_skills:
            level = choice(levels)  # Randomly select a level
            association = User_Skill_Association(level=level, role="Tutor", user_id=user.id, skill_id=skill.id)
            db.session.add(association)

    # Commit the changes
    db.session.commit()
        
    # Get all users
    users = User.query.all()
    
    # Get all skills
    skills = Skill.query.all()

    # Define the number of sessions per user
    num_sessions = 10

    # Iterate through each user
    for user in users:
        # Generate random dates and times for sessions
        for _ in range(num_sessions):
            # Generate a random date within the next 30 days
            date = datetime.now() + timedelta(days=randint(1, 30))
            date_str = date.strftime("%Y-%m-%d")

            # Generate a random time
            time = "{:02d}:{:02d}".format(randint(0, 23), randint(0, 59))

            # Select a random skill for the session
            skill = choice(skills)

            # Select a random tutor ID
            tutor_id = choice([user.id for user in users])

            # Select a random learner ID not equal to the tutor ID
            while True:
                learner_id = choice([user.id for user in users])
                if learner_id != tutor_id:
                    break

            # Randomly select a status
            status = choice(["Pending", "Accepted", "Rejected"])

            # Create the session
            session = Session(
                date=date_str,
                time=time,
                status=status,
                learner_id=learner_id,
                tutor_id=tutor_id,
                skill_id=skill.id
            )
            db.session.add(session)

    # Commit the changes
    db.session.commit()

    # Get all users
    users = User.query.all()

    # Populate favorites for each user
    for user in users:
        favorite_users = []  # List to store selected favorite users
        available_users = [u for u in users if u != user and u not in user.favorites]  # Filter available users

        # Ensure we don't select more than 3 favorites or run out of available users
        while len(favorite_users) < 3 and available_users:
            fav_user = sample(available_users, 1)[0]  # Select a random user from available users
            favorite_users.append(fav_user)
            available_users.remove(fav_user)  # Remove selected user from available users

        # Add selected favorite users to the favorites table
        for fav_user in favorite_users:
            favorite = Favorite(user_id=user.id, favorite_user_id=fav_user.id)
            db.session.add(favorite)

    # Commit the changes
    db.session.commit()


    return jsonify({"msg": "Created"}), 200
