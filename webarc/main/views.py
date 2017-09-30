from flask import render_template, request, jsonify
from flask import Blueprint

main_blueprint = Blueprint('main', __name__,)


@main_blueprint.route('/index')
def index():
    return render_template('index.html')


@main_blueprint.route('/about')
def about():
    return render_template('about.html')


@main_blueprint.route('/contact')
def contact():
    return render_template('contact.html')


@main_blueprint.route('/send-email', methods=['POST'])
def send_email():
    post_data = request.json

    response = {
        'status': 200
    }
    return jsonify(**response)
