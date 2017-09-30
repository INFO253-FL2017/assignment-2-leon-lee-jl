from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

# flask extensions
toolbar = DebugToolbarExtension(app)

# register blueprints
from webarc.main.views import main_blueprint
from webarc.blog.views import blog_blueprint

app.register_blueprint(main_blueprint)
app.register_blueprint(blog_blueprint)