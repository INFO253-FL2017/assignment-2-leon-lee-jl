from flask import render_template, request, jsonify
from flask import Blueprint
import requests
from webarc import app

main_blueprint = Blueprint('main', __name__,)

@main_blueprint.route('/')
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

    a = requests.post(
        "https://api.mailgun.net/v3/" + app.config['MG_DOMAIN'] + "/messages",
        auth=("api", app.config['MG_KEY']),
        data={"from": "Blogger User " + post_data['name']
                      +"<mailgun@leonlee.com>",
              "to": [app.config['RECIPIENT']],
              "subject": post_data['subject'],
              "text": post_data['message']})
    response = {
        'status': a.status_code
    }
    return jsonify(**response)
