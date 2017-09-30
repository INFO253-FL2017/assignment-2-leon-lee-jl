from flask_script import Server, Manager
import os

from webarc import app

app.config.from_object('settings')

manager = Manager(app)

manager.add_command('runserver', Server(host=app.config['HOST'],
                                        port=app.config['PORT'],
                                        use_debugger=app.config['DEBUGGER']))

if __name__ == '__main__':
    manager.run()
