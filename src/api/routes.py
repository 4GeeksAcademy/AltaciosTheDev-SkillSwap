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

import firebase_admin
from firebase_admin import credentials, storage

cred = credentials.Certificate("./google-services.json")
firebase_admin.initialize_app(cred, {"storageBucket": "skillswap-b3c76.appspot.com"}) #STORAGE BUCKET 
bucket = storage.bucket() 
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/image', methods=['POST'])
def upload_file():
    image = request.files.get('image', None)

    if image ==  None:
        return 'No image in the request', 400
    
    # Subir la imagen al Bucket / permite almacenar datos binarios como imagenes o archivos documentos 
    blob = bucket.blob(image.filename)
    blob.upload_from_file(image, content_type=image.content_type)
    blob.make_public()

    # Generar la URL permanente
    url = blob.public_url
    from urllib.parse import quote

    # Generar la URL permanente manualmente
    bucket_name = "skillswap-b3c76.appspot.com"

    encoded_image_name = quote(image.filename)
    url = f'https://storage.googleapis.com/{bucket_name}/{encoded_image_name}'   

    # Retornar la URL permanente
    return jsonify({"success": "Image loaded successfully", "url": url}), 201    


#create a User 👤
@api.route("/signup", methods=["POST"])
def signup():
   email = request.json.get("email", None)
   name=request.json.get("name", None)
   password = request.json.get("password", None)
   number=request.json.get("number",None)
   gender=request.json.get("gender",None)
   country=request.json.get("country",None)
   city=request.json.get("city",None)

   if email is None:
       return jsonify({"msg": "missing email"}), 404
       
   if name is None:
       return jsonify({"msg": "missing name"}), 404

   if password is None:
       return jsonify({"msg": "missing password"}), 404
   
   if number is None:
       return jsonify({"msg": "missing number"}), 404
       
   if gender is None:
       return jsonify({"msg": "missing gender"}), 404

   if country is None:
       return jsonify({"msg": "missing country"}), 404

   if city is None:
       return jsonify({"msg": "missing city"}), 404
   
   user = User.query.filter_by(email=email).first()
   if user:
        return jsonify({"msg": "User are registered"}), 403

#    password_hash = current_app.bcrypt.generate_password_hash(password).decode("utf-8")
   new_user = User(email=email, name=name,password=password,number=number, gender=gender,country=country,city=city)
   db.session.add(new_user)
   db.session.commit()
   access_token=create_access_token(identity = new_user.email, expires_delta=timedelta(hours=3))
   return jsonify({"msg":"user created successful", "token": access_token})

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

    access_token = create_access_token(identity = user.email, expires_delta=timedelta(hours=3))
    return jsonify(user=user.serialize(), access_token=access_token)


@api.route("/protected", methods=["GET"])
@jwt_required()
def private():
    email = get_jwt_identity()

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "User not found"}), 404
    
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

#Route for receiving CATEGORIES
@api.route("/categories/<int:id>", methods=["PUT"])
def upload_image_to_category(id):

    image_url = request.json.get("image_url", None)                  

    category = Category.query.filter_by(id=id).first()               

    if category is None:
        return jsonify({"msg": "Category not found"}), 404

    category.image = image_url
    db.session.commit()
    
    return jsonify({"msg": "category modified successfully"}),200
    
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


@api.route("/associations", methods=["POST"])
@jwt_required()
def create_association():
    email = get_jwt_identity()

    user = User.query.filter_by(email = email).first()

    if user is None:
        return jsonify({"msg": "User not found"}),404
    
    level = request.json.get("level", None)
    role = request.json.get("role", None)
    skill = request.json.get("skill", None)

    if level is None:
        return jsonify({"msg": "Missing level"}), 404

    if role is None:
        return jsonify({"msg": "Missing role"}), 404
    
    if skill is None:
        return jsonify({"msg": "Missing skill"}), 404

    if isinstance(skill, int) and isinstance(level, str) and isinstance(role, str):
        new_association = User_Skill_Association(level = level, role = role, user_id = user.id, skill_id = skill)
        db.session.add(new_association)
        db.session.commit()
        return jsonify({"msg": "Association created successfully", "details": new_association.serialize()})
    
    elif isinstance(skill, list) and isinstance(level, list) and isinstance(role, str):
        associations = []
        for i in range(len(skill)):
            new_association = User_Skill_Association(level = level[i], role = role, user_id = user.id, skill_id = skill[i])
            db.session.add(new_association)
            db.session.commit()
            associations.append(new_association.serialize())
        return jsonify({"msg": "Initial associations for user created succesfully", "associations_created": associations})
    
    else:
        return jsonify({"msg": "Invalid data type"}), 400



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
        Category.image.label('category_image'),
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
            "category_name": row.category_name,
            "category_image": row.category_image,

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


@api.route("/sessions/<int:id>", methods=["PUT"])
@jwt_required()
def update_user_session(id):
    # Fetch the user from the database
    email = get_jwt_identity()
    status = request.json.get("status")

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User not found"}), 404

    user_session = Session.query.filter_by(id = id).first()

    # Check if the user exists
    if user_session is None:
        return jsonify({"msg": "Session not found"}), 404

    user_session.status = status 

    # Commit the changes to the database
    db.session.commit()

    if status == "Rejected":
        # Return a response
        return jsonify({'msg': 'Session was rejected successfully'})
        
    elif status == "Accepted":
        # Return a response
        return jsonify({'msg': 'Session was accepted successfully'})

@api.route("/achievements", methods=["GET"])
@jwt_required()
def get_achievements():
    # Fetch the user from the database
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User not found"}), 404

    # Query for counting sessions learned by Enzo Altamirano
    sessions_learned_count = Session.query.filter(Session.status == 'Accepted', Session.learner_id == user.id).count()

    # Query for counting sessions taught by Enzo Altamirano
    sessions_taught_count = Session.query.filter(Session.status == 'Accepted', Session.tutor_id== user.id).count()

    connections = db.session.query(
        db.func.distinct(db.case([(Session.tutor_id == user.id, Session.learner_id)], else_=Session.tutor_id))
    ).filter(
        ((Session.tutor_id == user.id) & (Session.learner_id != user.id) & (Session.status == "Accepted")) |
        ((Session.learner_id == user.id) & (Session.tutor_id != user.id) & (Session.status == "Accepted"))
    ).subquery()

    unique_connections_count = db.session.query(db.func.count()).select_from(connections).scalar()

    return jsonify({'msg': 'Achievements retrieved successfully',
        'details': {'sessions_learned': sessions_learned_count,
                    'sessions_taught': sessions_taught_count,
                    'users_connected': unique_connections_count}                
        })

@api.route("/statistics", methods=["GET"])
@jwt_required()
def get_statistics():
    # Retrieve the logged-in user
    user_email = get_jwt_identity()
    user = User.query.filter_by(email=user_email).first()

    if user is None:
        return jsonify({"msg": "User not Found"}), 404

    # Cuando ocupo cambiar columnas se puede hacer asi
    sessions_learned = db.session.query(
        Session.skill_id,
        db.func.count(Session.skill_id).label('count')  # de esta manera puedo darle nombre y accesarla despues 
    ).filter(
        Session.status == 'Accepted',
        Session.learner_id == user.id
    ).group_by(
        Session.skill_id
    ).all()

    #When you execute a query using SQLAlchemy, each row in the result set is returned as an object
    # Serialize the results
    skill_learned_counts = []
    for session in sessions_learned:
        skill_id = session.skill_id
        count = session.count  # Accessing the count property directly
        skill_name = Skill.query.filter_by(id=skill_id).first().name
        skill_learned_counts.append({"skill_id": skill_id, "skill_name": skill_name, "count": count})

        # Cuando ocupo cambiar columnas se puede hacer asi
    sessions_taught = db.session.query(
        Session.skill_id,
        db.func.count(Session.skill_id).label('count')  # de esta manera puedo darle nombre y accesarla despues 
    ).filter(
        Session.status == 'Accepted',
        Session.tutor_id == user.id
    ).group_by(
        Session.skill_id
    ).all()

    #When you execute a query using SQLAlchemy, each row in the result set is returned as an object
    # Serialize the results
    skill_taught_counts = []
    for session in sessions_taught:
        skill_id = session.skill_id
        count = session.count  # Accessing the count property directly
        skill_name = Skill.query.filter_by(id=skill_id).first().name
        skill_taught_counts.append({"skill_id": skill_id, "skill_name": skill_name, "count": count})

    return jsonify({"msg": "User statistics loaded successfully","details": {"skill_taught_counts": skill_taught_counts, "skill_learned_counts": skill_learned_counts}}), 200

@api.route("/populate", methods=['POST'])
def generate_database():

    # Populate categories
    categories = ['Programming', 'Culinary', 'Creative', 'Interpersonal', 'SportTheory', 'Engineering']
    for category_name in categories:
        category = Category(name=category_name)
        db.session.add(category)
    db.session.commit()

    # Get category IDs
    category_ids = {category.name: category.id for category in Category.query.all()}

    # Populate skills for each category
    skills_data = {
        'Programming': ['Python', 'JavaScript', 'Java', 'C++', 'React', 'Algorithms', 'Golang', 'Django', 'Angular', 'Vue', 'Docker', 'SQL','HTML', 'CSS', 'GIT','Bootstrap', 'Tailwind', 'Kubernetes', 'Azure', 'PHP', 'Laravel', 'Heroku', 'MySQL', 'NodeJS', 'Springboot'],
        'Culinary': ['Baking', 'Cooking', 'Mixology', 'Cutting', 'Roasting', 'Grilling', 'Pastry', 'Deserts', 'Breakfasts'],
        'Creative': ['Drawing', 'Painting', 'Sculpting', 'Figma', 'UI design', 'UX design', 'Adobe'],
        'Engineering': ['Solidworks', 'TiaPortal', 'PLC System', 'Autocad', 'Arduino', 'SCADA', 'Multisim'],
        'Interpersonal': ['Communication', 'Leadership', 'Teamwork', 'Empathy', 'Motivation', 'Ethic'],
        'SportTheory': ['Football', 'Basketball', 'Tennis', 'Swimming', 'Hockey', 'Baseball', 'Soccer']
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
        {"name": "Emma Cueva",        "email": "emma.cueva@gmail.com",        "password": "anakin",              "number": "+43-2554-55044", "gender": "Female", "country": "United States", "city": "Knoxville",        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Jan Turcios",       "email": "jan.turcios@gmail.com",       "password": "romeo",               "number": "+1-252-550-344", "gender": "Male",   "country": "United States", "city": "Cookville",        "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "David Smith",       "email": "david.smith@gmail.com",       "password": "chloe",               "number": "+1-540-396-876", "gender": "Male",   "country": "Canada",        "city": "Ottawa",           "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Thomas Colt",       "email": "thomas.colt@gmail.com",       "password": "thomascolt",          "number": "+1-312-555-866", "gender": "Male",   "country": "Canada",        "city": "Ontario",          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {"name": "Lorena Paz",        "email": "lorena.paz@gmail.com",        "password": "lorepaz",             "number": "+506-3120-2263", "gender": "Female", "country": "Costa Rica",    "city": "San Jose",         "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        # {"name":"Carney Halwell","email":"chalwell0@printfriendly.com","password":"hU6!svdoY","number":"162-216-0770","gender":"Male","country":"Iceland","city":"Stykkishólmur","bio":"in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"},
        # {"name":"Abbie Kits","email":"akits1@skype.com","password":"gA8@{Ne&0|Q","number":"879-356-8720","gender":"Female","country":"Serbia","city":"Novi Bečej","bio":"id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate"},
        # {"name":"Berny Philot","email":"bphilot2@yahoo.com","password":"xU0)2tE=tXH","number":"722-876-2939","gender":"Female","country":"Bulgaria","city":"Kresna","bio":"ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla"},
        # {"name":"Nicolai Cristou","email":"ncristou3@bbb.org","password":"yC1~nE|pAtq","number":"618-784-2406","gender":"Agender","country":"Poland","city":"Jastrzębia","bio":"quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque"},
        # {"name":"Ethelind Melhuish","email":"emelhuish4@nasa.gov","password":"bS2@.B1IioR=_","number":"287-425-5361","gender":"Genderfluid","country":"Czech Republic","city":"Kout na Šumavě","bio":"in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat"},
        # {"name":"Arch Woodcraft","email":"awoodcraft5@privacy.gov.au","password":"jT0{P(A}sbX8%","number":"669-386-4744","gender":"Male","country":"China","city":"Bailingnao","bio":"turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec"},
        # {"name":"Melinde Prout","email":"mprout6@studiopress.com","password":"zS6/2b~pcdB?","number":"201-997-3548","gender":"Female","country":"Mongolia","city":"Tsagaandörvölj","bio":"rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor"},
        # {"name":"Hussein Kummerlowe","email":"hkummerlowe7@printfriendly.com","password":"wC8}9B.SyB3m","number":"503-147-8082","gender":"Male","country":"Czech Republic","city":"Lučina","bio":"purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique"},
        # {"name":"Elwyn Pieterick","email":"epieterick8@hud.gov","password":"tX9$1=69y~E","number":"433-628-1022","gender":"Male","country":"China","city":"Zaozhuang","bio":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere"},
        # {"name":"Hildegarde Bolderoe","email":"hbolderoe9@ucla.edu","password":"lK1'bw,X+|rsV_","number":"846-717-2493","gender":"Female","country":"Myanmar","city":"Pyin Oo Lwin","bio":"donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam"},
        # {"name":"Duffy Wenn","email":"dwenna@so-net.ne.jp","password":"xY3@.=u&7wi","number":"278-882-6858","gender":"Male","country":"Egypt","city":"Arish","bio":"vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur"},
        # {"name":"Rufus Hensmans","email":"rhensmansb@ihg.com","password":"iA1=CcEG_","number":"302-996-3754","gender":"Male","country":"China","city":"Qindu","bio":"pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at"},
        # {"name":"Esme Yansons","email":"eyansonsc@com.com","password":"iU2/PC5V,M","number":"873-660-0660","gender":"Male","country":"Poland","city":"Gostyń","bio":"hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent"},
        # {"name":"Abner Raiker","email":"araikerd@dedecms.com","password":"mF3<W*Iuk36D2","number":"954-433-2915","gender":"Male","country":"China","city":"Yushu","bio":"nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"},
        # {"name":"Emmey Pearlman","email":"epearlmane@4shared.com","password":"oW0>TL`i(K*","number":"751-309-3393","gender":"Female","country":"Malaysia","city":"Kuala Lumpur","bio":"odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique"},
        # {"name":"Bearnard Bellson","email":"bbellsonf@howstuffworks.com","password":"nK0_,jrr8.hEz~","number":"620-753-2469","gender":"Male","country":"Indonesia","city":"Lambangan Kulon","bio":"ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices"},
        # {"name":"Abey Braffington","email":"abraffingtong@chicagotribune.com","password":"uM7(8@2hr82c*s","number":"915-218-6410","gender":"Male","country":"Philippines","city":"Estefania","bio":"orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet"},
        # {"name":"Sandie Czajka","email":"sczajkah@wunderground.com","password":"vH6@GyXZmFxf","number":"492-196-1552","gender":"Female","country":"Russia","city":"Tyoply Stan","bio":"ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio"},
        # {"name":"Nate Bazylets","email":"nbazyletsi@nature.com","password":"zI7~C,,r<mg.ig","number":"501-372-0388","gender":"Male","country":"Japan","city":"Gose","bio":"non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed"},
        # {"name":"Abby Anwell","email":"aanwellj@furl.net","password":"nB4$w<!QQ4oQA","number":"811-797-7136","gender":"Male","country":"Poland","city":"Żernica","bio":"lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate"},
        # {"name":"Dari Aldis","email":"daldisk@utexas.edu","password":"jJ7)$K%p$?KuzH","number":"764-577-3654","gender":"Female","country":"France","city":"Laval","bio":"vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper"},
        # {"name":"Meara Yanyushkin","email":"myanyushkinl@google.com.br","password":"xR5%33Zcl","number":"842-764-0875","gender":"Female","country":"Portugal","city":"Casal das Figueiras","bio":"augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin"},
        # {"name":"Starlene Boundey","email":"sboundeym@parallels.com","password":"rE2&.'*ks_64Zl,","number":"860-225-9819","gender":"Female","country":"Moldova","city":"Briceni","bio":"pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla"},
        # {"name":"Madelina Adam","email":"madamn@squarespace.com","password":"uI3#N!#GxKmpG","number":"287-608-1736","gender":"Female","country":"Colombia","city":"Barranca de Upía","bio":"nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue"},
        # {"name":"Armin Thursfield","email":"athursfieldo@wix.com","password":"mS3SP6cohcsGW`d","number":"331-260-0301","gender":"Male","country":"Tunisia","city":"Skhira","bio":"vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet"},
        # {"name":"Kandace Towle","email":"ktowlep@unc.edu","password":"xS0#X1i)Lj*J9=","number":"895-359-3306","gender":"Female","country":"Serbia","city":"Sombor","bio":"integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam"},
        # {"name":"Cristy Duckerin","email":"cduckerinq@sogou.com","password":"bA0$W8!zm~USDO","number":"213-346-2296","gender":"Female","country":"Russia","city":"Urozhaynoye","bio":"luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus"},
        # {"name":"Agace Digweed","email":"adigweedr@deliciousdays.com","password":"vJ6*E*(xpHcuut","number":"659-881-8474","gender":"Female","country":"Indonesia","city":"Amagarapati","bio":"congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci"},
        # {"name":"Henri Holdren","email":"hholdrens@japanpost.jp","password":"bS0%K*>H8%?SJ","number":"603-837-3910","gender":"Male","country":"Greece","city":"Ampelákia","bio":"habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius"},
        # {"name":"Kylie Pischel","email":"kpischelt@geocities.com","password":"sE9&c6eN@","number":"105-554-3580","gender":"Male","country":"Czech Republic","city":"Morávka","bio":"lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis"}
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
        
    # users = User.query.all()
    # skills = Skill.query.all()
    # associations = User_Skill_Association.query.all()

    # # Define the number of sessions per user for teaching and learning
    # num_accepted_sessions = 20
    # num_pending_sessions = 5
    # num_rejected_sessions = 10

    # # Iterate through each user
    # for user in users:
    #     # Select random associations for teaching and learning
    #     tutor_associations = [assoc for assoc in associations if assoc.user_id == user.id and assoc.role == "Tutor"]
    #     learner_associations = [assoc for assoc in associations if assoc.user_id == user.id and assoc.role == "Learner"]

    #     start_date = datetime.now() - timedelta(days=150)  # Three months ago
    #     end_date = datetime.now() + timedelta(days=30)    # Three months in the future

    #     # Create accepted sessions for teaching
    #     for _ in range(num_accepted_sessions):
    #         random_tutor_assoc = choice(tutor_associations)
    #         learner_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_tutor_assoc.skill_id and assoc.role == "Learner"]
    #         if learner_candidates:
    #             learner_id = choice(learner_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Accepted",
    #                 learner_id=learner_id,
    #                 tutor_id=user.id,
    #                 skill_id=random_tutor_assoc.skill_id
    #             )
    #             db.session.add(session)

    #     # Create accepted sessions for learning
    #     for _ in range(num_accepted_sessions):
    #         random_learner_assoc = choice(learner_associations)
    #         tutor_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_learner_assoc.skill_id and assoc.role == "Tutor"]
    #         if tutor_candidates:
    #             tutor_id = choice(tutor_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Accepted",
    #                 learner_id=user.id,
    #                 tutor_id=tutor_id,
    #                 skill_id=random_learner_assoc.skill_id
    #             )
    #             db.session.add(session)

    #     # Create pending sessions for teaching
    #     for _ in range(num_pending_sessions):
    #         random_tutor_assoc = choice(tutor_associations)
    #         learner_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_tutor_assoc.skill_id and assoc.role == "Learner"]
    #         if learner_candidates:
    #             learner_id = choice(learner_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Pending",
    #                 learner_id=learner_id,
    #                 tutor_id=user.id,
    #                 skill_id=random_tutor_assoc.skill_id
    #             )
    #             db.session.add(session)

    #     # Create pending sessions for learning
    #     for _ in range(num_pending_sessions):
    #         random_learner_assoc = choice(learner_associations)
    #         tutor_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_learner_assoc.skill_id and assoc.role == "Tutor"]
    #         if tutor_candidates:
    #             tutor_id = choice(tutor_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Pending",
    #                 learner_id=user.id,
    #                 tutor_id=tutor_id,
    #                 skill_id=random_learner_assoc.skill_id
    #             )
    #             db.session.add(session)

    #     # Create rejected sessions for teaching
    #     for _ in range(num_rejected_sessions):
    #         random_tutor_assoc = choice(tutor_associations)
    #         learner_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_tutor_assoc.skill_id and assoc.role == "Learner"]
    #         if learner_candidates:
    #             learner_id = choice(learner_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Rejected",
    #                 learner_id=learner_id,
    #                 tutor_id=user.id,
    #                 skill_id=random_tutor_assoc.skill_id
    #             )
    #             db.session.add(session)

    #     # Create rejected sessions for learning
    #     for _ in range(num_rejected_sessions):
    #         random_learner_assoc = choice(learner_associations)
    #         tutor_candidates = [assoc.user_id for assoc in associations if assoc.skill_id == random_learner_assoc.skill_id and assoc.role == "Tutor"]
    #         if tutor_candidates:
    #             tutor_id = choice(tutor_candidates)
    #             random_date = start_date + timedelta(days=randint(0, (end_date - start_date).days))
    #             session = Session(
    #                 date=random_date.strftime("%Y-%m-%d"),
    #                 time="{:02d}:{:02d}".format(randint(0, 23), randint(0, 59)),
    #                 status="Rejected",
    #                 learner_id=user.id,
    #                 tutor_id=tutor_id,
    #                 skill_id=random_learner_assoc.skill_id
    #             )
    #             db.session.add(session)

    # # Commit the changes
    # db.session.commit()







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


#Add a Favorite
@api.route("/favorites", methods=["POST"])
@jwt_required()
def addFavorite():
    favorite_user_id = request.json.get("favorite_user_id", None)
    
    user_email = get_jwt_identity()

    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"msg": "user not Found"}), 404

    new_favorite = Favorite(user_id=user.id, favorite_user_id=favorite_user_id)



    exist = Favorite.query.filter_by(user_id=user.id, favorite_user_id=favorite_user_id).first()
    if exist is not None:
        return jsonify({"msg": "The user is already in your favorites"}), 403
    


    db.session.add(new_favorite)
    db.session.commit()

    return jsonify({"msg":"user favorite added successful"})

#Delete a favorite
@api.route("/favorites/<int:id>", methods=["DELETE"])
@jwt_required()
def deleteFavorite(id):
    
    user_email = get_jwt_identity()

    user = User.query.filter_by(email=user_email).first()
    if user is None:
        return jsonify({"msg": "user not Found"}), 404

    favorite = Favorite.query.filter_by(id=id).first()
    if favorite is None:
        return jsonify({"msg": "favorite not Found"}), 404




    
    db.session.delete(favorite)
    db.session.commit()

    return jsonify({"msg":"user favorite deleted successful"})
