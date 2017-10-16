
**To run my code, please use**

```shell
python3 manage.py runserver
```

**All configurations are in settings.py.**

# Q/A

1. What is the function of the following technologies in your assignment:
    1. HTML: html serves as template
    2. CSS: Css is for styling web pages
    3. Javascript: Js is for get/post data from web server and dynamiclly change the content (handling DOM) of web pages according to the data.
    4. Python: Python is the programming language that I used to write web server.
    5. Flask: Flask is a python based web server framework, which I used to develop my own web server.
    6. HTTP: http is a communication protocol, which servers as the mechanism between client(browser) and server(web server).
    7. Get and POST requests: They are two main methods of HTTP protocol. Mostly Get is used to retrieve data from web server, while POST is mostly used to send data to web server.

2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?

HTML is like the skeleton of web pages. In this assignment I separated html into multiple templates, including base, header, footer, to escape duplication of html codes. CSS is the decoration of HTML file, which makes web page more beautiful. And JS is a handy tool to manipulate HTML DOM and browser behavior, which I used in this assignment to check form input, send contact data to web server, alert messages according to users' input.


3. How does Python and Flask work together in the server for this assignment?
Flask is the web server framework written in Python. In this assignment, I used Flask's interfaces to mostly implement viewers. The codes were then interpreted by python interpretation engine, which finally opened a port to listen to client requests and respond with corresponding resources.




4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request.

 - POST contact form data to server. The page promotes a "successfully sending email" message when server responds 200, and a "email sent error" message if status code is not 200.
