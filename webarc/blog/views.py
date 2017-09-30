from flask import render_template
from flask import Blueprint

blog_blueprint = Blueprint('blog', __name__,)

@blog_blueprint.route('/blog/8-experiments-in-motivation')
def blog_1():
	return render_template('blogs/1.html')

@blog_blueprint.route('/blog/a-mindful-shift-of-focus')
def blog_2():
	return render_template('blogs/2.html')

@blog_blueprint.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def blog_3():
	return render_template('blogs/3.html')

@blog_blueprint.route('/blog/training-to-be-a-good-writer')
def blog_4():
	return render_template('blogs/4.html')

@blog_blueprint.route('/blog/what-productivity-systems-wont-solve')
def blog_5():
	return render_template('blogs/5.html')
