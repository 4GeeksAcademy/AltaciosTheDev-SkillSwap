from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    number = db.Column(db.String(120), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(120), nullable=False)
    city = db.Column(db.String(120), nullable=False)
    bio = db.Column(db.Text, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'
    
    def __init__(self, name,email,password,number,gender,country,city,is_active,bio=None):
        self.name = name
        self.email = email
        self.password = password
        self.number = number
        self.gender = gender
        self.country = country
        self.city = city
        self.bio = bio
        self.is_active = is_active

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
            "skills": [skill.serialize() for skill in self.skills] if self.skills else None
            # do not serialize the password, its a security breach
        }
    
class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    def __repr__(self):
        return f'<Category {self.name}>'

    def serialize(self):
        return {
            "id": self.id,  
            "name": self.name,
            "skills": [skill.serialize() for skill in self.skills] if self.skills else None
        }
    
class Skill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),  unique=True, nullable=False)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship("Category", backref="skills") #helps with a bi directional relationship in which we don't have to specify another and can access the residents of each planet, on the planet object.

    def __repr__(self):
        return f'<Skill {self.name}>'
    
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



