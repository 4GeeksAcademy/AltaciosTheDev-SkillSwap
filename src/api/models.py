from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    _tablename_='user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    number = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(120), nullable=False)
    city = db.Column(db.String(120), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    image = db.Column(db.String(500), nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'    
    
    def __init__(self, name,email,password,number,gender,country,city,bio=None):
        self.name = name
        self.email = email
        self.password = password
        self.number = number
        self.gender = gender
        self.country = country
        self.city = city
        self.bio = bio


    def serialize(self):
        
        return {
            "id": self.id,  
            "name": self.name,  
            "email": self.email,  
            "number": self.number,
            "country": self.country,
            "city": self.city,
            "gender": self.gender,
            "bio":self.bio if self.bio else None,
            "image": self.image if self.image else None,
            "skills": [skill.serialize() for skill in self.skills] if self.skills else None,
            "favorites": [favorite.serialize() for favorite in self.favorites] if self.favorites else None

        }
    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'<Category {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,
            # "skills": [skill.serialize() for skill in self.skills] if self.skills else None
        }
    
class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship("Category", backref="skills") #helps with a bi directional relationship in which we don't have to specify another and can access the residents of each planet, on the planet object.

    def __repr__(self):
        return f'<Skill {self.name}>'

    def __init__(self, name, category_id):
        self.name = name
        self.category_id = category_id

    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,
            "category": self.category.name if self.category else None,  
            # "users": [user.serialize() for user in self.users] if self.users else None  
        }
    
class User_Skill_Association(db.Model):
    id = db.Column(db.Integer, primary_key=True)   
    level = db.Column(db.String(80), nullable=False)  
    role = db.Column(db.String(80),  nullable=False)   

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))    
    user = db.relationship("User", backref="skills")      
    
    skill_id = db.Column(db.Integer, db.ForeignKey('skill.id'))   
    skill = db.relationship("Skill", backref="users")   
 
    def __repr__(self): 
        return f'<User_Skill_Association {self.id}>' 
    
    def __init__(self, level, role, user_id, skill_id): 
        self.level = level           
        self.role = role             
        self.user_id = user_id       
        self.skill_id = skill_id     

    def serialize(self):
        return {
            "id": self.id,  
            "user": self.user.name,
            "skill": self.skill.name,
            "level": self.level,
            "role": self.role,
            "user_id": self.user.id,
            "skill_id": self.skill.id,
            "user_gender": self.user.gender
        }

class Session(db.Model):
    id = db.Column(db.Integer, primary_key=True)   

    date = db.Column(db.String(80), nullable=False)  
    time = db.Column(db.String(80), nullable=False)  
    status = db.Column(db.String(80), nullable=False)  

    tutor_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)    
    tutor = db.relationship("User", foreign_keys=[tutor_id], backref="tutor_sessions")  # Specify foreign_keys

    learner_id = db.Column(db.Integer, db.ForeignKey('user.id'),nullable=False)    
    learner = db.relationship("User", foreign_keys=[learner_id], backref="learner_sessions")  # Specify foreign_keys
    
    skill_id = db.Column(db.Integer, db.ForeignKey('skill.id'),nullable=False)   
    skill = db.relationship("Skill", backref="sessions")
 
    def __repr__(self): 
        return f'<Session {self.id}>' 
    
    def __init__(self, date, time,status, learner_id, tutor_id, skill_id): 
        self.date = date           
        self.time = time             
        self.status = status
        self.learner_id = learner_id
        self.tutor_id = tutor_id
        self.skill_id = skill_id 

    def serialize(self):
        return {
            "id": self.id,  
            "date": self.date,
            "time": self.time,
            "status": self.status,
            "tutor_id": self.tutor.id,
            "tutor_name": self.tutor.name,
            "learner_id": self.learner.id,
            "learner_name": self.learner.name,
            "skill_id": self.skill.id,
            "skill_name": self.skill.name,
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship("User", foreign_keys=[user_id], backref="favorites")  # Added user relationship with backref
    favorite_user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    favorite_user = db.relationship("User", foreign_keys=[favorite_user_id], backref="favorited_by")

    def __init__(self, user_id, favorite_user_id):
        self.user_id = user_id
        self.favorite_user_id = favorite_user_id

    def __repr__(self):
        return f'<Favorite user_id:{self.user_id} favorite_user_id:{self.favorite_user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "favorite_user_id": self.favorite_user_id,
            "favorite_user_name": self.favorite_user.name if self.favorite_user else None,
            "favorite_user_country": self.favorite_user.country if self.favorite_user else None,
            "favorite_user_city": self.favorite_user.city if self.favorite_user else None,
            "favorite_user_gender": self.favorite_user.gender if self.favorite_user else None,
            "favorite_user_image": self.favorite_user.image if self.favorite_user else None

        }