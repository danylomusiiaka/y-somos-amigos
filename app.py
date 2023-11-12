from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask import jsonify
from flask_login import UserMixin
from cryptography.fernet import Fernet



app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)


class Discounts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
    title = db.Column(db.String(255))
    description = db.Column(db.Text)
    location = db.Column(db.String(255))
    discount_value = db.Column(db.Integer)
    start_date = db.Column(db.DateTime)
    end_date = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'title': self.title,
            'description': self.description,
            'location': self.location,
            'discount_value': self.discount_value,
            'start_date': self.start_date.isoformat() if self.start_date else None,
            'end_date': self.end_date.isoformat() if self.end_date else None,
            'created_at': self.created_at.isoformat()  # Convert to ISO format for better JSON serialization
        }


class Businesses(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255))
    ipn = db.Column(db.String(20))
    company_name = db.Column(db.String(255))
    contact_name = db.Column(db.String(255))
    contact_phone = db.Column(db.String(15))
    password = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'ipn': self.ipn,
            'company_name': self.company_name,
            'contact_name': self.contact_name,
            'contact_phone': self.contact_phone,
            'password': self.password,
            'created_at': self.created_at.isoformat()  # Convert to ISO format for better JSON serialization
        }

#
# @app.before_request
# def create_tables():
#     db.create_all()
#
#
# @app.before_request
# def add_sample_data():
#     discount1 = Discounts(
#         business_id=1,
#         title='Service A',
#         description='Discount for Service A',
#         location='City X',
#         discount_value=10,
#         start_date=datetime(2023, 12, 12),
#         end_date=datetime(2023, 1, 10)
#     )
#     discount2 = Discounts(
#         business_id=2,
#         title='Service B',
#         description='Discount for Service B',
#         location='City Y',
#         discount_value=15,
#         start_date=datetime(2023, 4, 9),
#         end_date=datetime(2023, 4, 16)
#     )
#     discount3 = Discounts(
#         business_id=1,
#         title='Service C',
#         description='Discount for Service C',
#         discount_value=20)
#     db.session.add_all([discount1, discount2, discount3])
#
#     business1 = Businesses(
#         email='Business1@gmail.com',
#         ipn='1234567890',
#         company_name='Company X',
#         contact_name='Owner X',
#         contact_phone='555-1234',
#         password='123456')
#     business2 = Businesses(
#         email='Business2@gmail.com',
#         ipn='0987654321',
#         company_name='Company Y',
#         contact_name='Owner Y',
#         contact_phone='555-5678',
#         password='1D3gr5t3')
#     db.session.add_all([business1, business2])
#
#     db.session.commit()
#


@app.route('/')
def get_discounts():
    discounts = Discounts.query.all()
    businesses = Businesses.query.all()
    discounts_list = [discount.to_dict() for discount in discounts]
    businesses_list = [business.to_dict() for business in businesses]
    return jsonify(discounts_list, businesses_list)


@app.route('/discounts/<int:discount_id>')
def get_discount(discount_id):
    discount = Discounts.query.get_or_404(discount_id)
    return jsonify(discount.to_dict())


@app.route('/businesses/<int:business_id>')
def get_business(business_id):
    business = Businesses.query.get_or_404(business_id)
    return jsonify(business.to_dict())


@app.route('/businesses/<int:business_id>/discounts')
def get_business_discounts(business_id):
    discounts = Discounts.query.filter_by(business_id=business_id).all()
    discounts_list = [discount.to_dict() for discount in discounts]
    return jsonify(discounts_list)

if __name__ == '__main__':
    app.run(debug=True)

# photo as a field into db
# links to website into db