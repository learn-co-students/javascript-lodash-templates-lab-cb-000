function createPost() {
  // create template functions
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  // get blog values
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}

// window.onload = function() {
//   // document.getElementById('main').innerHTML += "<div>ss</div>";
// };
//
// function createPost() {
//   var title = document.getElementById('title').value;
//   var body = document.getElementById('body').value;
//   var author = document.getElementById('author').value;
//
//   var postTemplate = _.template(document.getElementById("post-template").innerHTML);
//   // alert(templateHTML);
//   var templateHTML = postTemplate({ 'title': title, 'body': body, 'author': author });
//   var posts = document.getElementById('posts');
//   posts.innerHTML += templateHTML;
// }
//
// function postComment() {
//   var commenter = document.getElementById('commenter').value;
//   var comment = document.getElementById('commentContent').value;
//   // document.getElementById('comments').innerHTML += comment;
//   alert("templateFn");
//   //  alert(commenter + comment
//   // var commentTemplate = document.getElementById('comment-template').innerHTML;
//
//   var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
//
//   var comments = document.getElementById('comments');
//   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
//
//   comments.innerHTML += templateHTML;
//
// }
