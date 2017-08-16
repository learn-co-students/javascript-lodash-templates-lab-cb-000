function createPost() {
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var postBody = document.getElementById("postBody").value;

  var mainBody = document.getElementById("page-body");
  mainBody.innerHTML += pageTemplate();

  var postSection = document.getElementById("post");
  postSection.innerHTML += postTemplate({ 'title': postTitle, 'author': postAuthor, 'body': postBody });
  postSection.innerHTML += commentsTemplate();
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commenter = document.getElementById("commenter").value;
  var comment = document.getElementById("commentText").value;

  var commentsSection = document.getElementById("comments");

  commentsSection.innerHTML += commentTemplate({ 'comment': comment, 'commenter': commenter });
}
