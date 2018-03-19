function loadPage () {
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);

  var pageElement = document.getElementById("page");

  pageElement.innerHTML += pageTemplateFn();
}

function loadComments () {
  var commentsTemplate = document.getElementById("comments-template").innerHTML;

  var commentsTemplateFn = _.template(commentsTemplate);

  var commentsElement = document.getElementById("comments");

  commentsElement.innerHTML += commentsTemplateFn();
}
// document.addEventListener("DOMContentLoaded", function(event) {
//   loadPage()
// })

var sidebar = "Sidebar";

function createPost () {
  loadPage()

  var title = document.getElementById("postTitle").value;
  var text = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);

  var templateHTML = templateFn({'title': title, 'post': text, 'author': author});

  var postDiv = document.getElementById('post');

  postDiv.innerHTML += templateHTML;
  loadComments();
};

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  var commentDiv = document.getElementById('comment');

  commentDiv.innerHTML += templateHTML;
};
