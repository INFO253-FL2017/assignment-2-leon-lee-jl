// Send message functin, alert corressponding alert according to user's input.
function sendMessage() {
	closeAlert();
	var name = document.getElementById("nameInput").value;
	var email = document.getElementById("emailInput").value;
	var subject = document.getElementById("subjectInput").value;
	var message = document.getElementById("messageInput").value;

	if (name == "" || email == "" || subject == "" || message == "") {
			var fields = ""
			if (name == "") {
				fields += ", Name";
			}
			if (email == "") {
				fields += ", Email";
			}

			if (subject == "") {
				fields += ", Subject";
			}

			if (message == "") {
				fields += ", Message";
			}

			fields = fields.substr(1);

			var div = '<div class="alert alert-danger alert-dismissable"> \
						<a href="#" onclick="closeAlert()" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
						<strong>You need to fill out ' + fields + '!</strong>\
						</div>';
			var alertDiv = document.getElementsByClassName("alert")[0];
			alertDiv.innerHTML += div;
			return
	}


	if (name != "" && email != "" && subject != "" && message != "") {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'send-email', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			name: name,
			email: email,
			subject: subject,
			message: message
		}));

		xhr.onload = function() {
		  var data = JSON.parse(this.responseText);
		  if (data['status'] == 200) {
		  	var div = '<div class="alert alert-success alert-dismissable"> \
						<a href="#" onclick="closeAlert()" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
						<strong>Hey ' + name + ', your message has been\
						 sent!</strong>\
						</div>';
		  } else {
		  	var div = '<div class="alert alert-danger alert-dismissable"> \
						<a href="#" onclick="closeAlert()" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
						<strong>Email sent error!</strong>\
						</div>';
		  }
		  var alertDiv = document.getElementsByClassName("alert")[0];
		  closeAlert();
		  alertDiv.innerHTML += div;
		  document.getElementById("nameInput").value = "";
		  document.getElementById("emailInput").value = "";
		  document.getElementById("subjectInput").value = "";
		  document.getElementById("messageInput").value = "";
		  return;
		};
	}
}

// Close alert box.
function closeAlert() {
	var alertDiv = document.getElementsByClassName("alert")[0];
	alertDiv.innerHTML = "";
}

// Write comment to local file and append it to comment div.
function submitComment(blogId) {
	var name = document.getElementById("nameInput2").value;
	var comment = document.getElementById("commentInput").value;

	if (name != "" && comment != "") {
		// Construct commnet in JSON format
		var thisComment= {
			"id": blogId,
			"name": name,
			"comment": comment
		};
		// Init local storage if not set before.
		if (! localStorage.getItem('comments')) {
			var emptyArray = [];
			localStorage.setItem('comments', JSON.stringify(emptyArray));
		}
		// Store the new comment in local storage.
		var pre_comments = JSON.parse(localStorage.getItem('comments'));
		pre_comments.push(thisComment);
		localStorage.setItem('comments', JSON.stringify(pre_comments));

		// Append the new comment to comments section.
		var newCommentdiv = '<div class="previous-comments"> \
							<p class="commentor"><b>Name:</b> ' + name + '</p> \
							<p class="comment-message"><b>Comment:</b> ' + comment +'</p> \
							<hr></div>';
		var commentsDiv = document.getElementsByClassName("comments")[0];
		commentsDiv.innerHTML += newCommentdiv;
		document.getElementById("nameInput2").value = "";
		document.getElementById("commentInput").value = "";
		return;
	}
	// Promote an alert when some fields are missing.
	var fields = "";
	if (name == "") {
		fields += ", Name";
	}
	if (comment == "") {
		fields += ", Comment";
	}
	fields = fields.substr(1);
	var div = '<div class="alert alert-danger alert-dismissable"> \
				<a href="#" onclick="closeAlert()" class="close" data-dismiss="alert" aria-label="close">&times;</a> \
				<strong>You need to fill out ' + fields + '!</strong>\
				</div>';
	var alertDiv = document.getElementsByClassName("alert")[0];
	alertDiv.innerHTML += div;
	return;
}


function loadComments(blogId) {
	getWeatherAsync();

	if (localStorage.getItem('comments')) {
		allComments = JSON.parse(localStorage.getItem('comments'));
		for (var i = 0; i <allComments.length; i++) {
			if (allComments[i]['id'] == blogId) {
				var thisComment = '<div class="previous-comments"> \
							<p class="commentor"><b>Name:</b> ' + allComments[i]["name"] + '</p> \
							<p class="comment-message"><b>Comment:</b> ' + allComments[i]["comment"] +'</p> \
							<hr></div>';
				var commentsDiv = document.getElementsByClassName("comments")[0];
				commentsDiv.innerHTML += thisComment;
			}
		}
	}
}


function getWeatherAsync()
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            displayWeather(xmlHttp.responseText);
    }
    xmlHttp.open("GET", 'http://api.openweathermap.org/data/2.5/weather?id=4376623&appid=6f176f770005bb971935e584b5c4688c', true); // true for asynchronous
    xmlHttp.send(null);
}

function displayWeather(data) {
	var newData = JSON.parse(data);
	// console.log(newData);

	var div = '<h2>Weather of Berkeley</h2> \
				<p>' + newData['weather'][0]['main']+'</p>\
				<p>' + newData['main']['temp_min'] + ' ~ ' + newData['main']['temp_max'] +' F</p>' ;
	var weathertDiv = document.getElementsByClassName("weather")[0];
	weathertDiv.innerHTML += div;

}