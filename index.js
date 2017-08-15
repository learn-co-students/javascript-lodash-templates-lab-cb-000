
function createPost() {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postContent").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postHTML = postTemplate({ 'title': postTitle, 'body': post, 'author': postAuthor });
  var commentsHTML = commentsTemplate();
  var postDiv = document.getElementById("post");

  postDiv.innerHTML = postHTML;
  postDiv.getElementsByTagName("footer")[0].innerHTML = commentsHTML;
}

function postComment(){
	var commentTemplate = _.template(document.getElementById("comment-template").innerHTML)

	var commentContent = document.getElementById("commentContent").value
	var commenter = document.getElementById("commenterName").value

	var commentHTML = commentTemplate({'comment': commentContent, 'commenter': commenter})

	document.getElementById("comments").innerHTML += commentHTML
}

