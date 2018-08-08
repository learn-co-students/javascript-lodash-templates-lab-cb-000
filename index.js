function createPost () {

  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
var postTemplate = _.template(document.getElementById("post-template").innerHTML);
var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);


  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();



  var blogSection = postTemplate({ 'title': postTitle, 'body': post, 'poster': postAuthor });

  var commentsSection = commentsTemplate();
 var postElement = document.getElementById("post");

 postElement.innerHTML = blogSection;
postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;




}
function postComment () {
 //  var commenter = document.getElementById("commenter").value;
 // var comment = document.getElementById("commentText").value;
 //
 //  var commentTemplate = document.getElementById("comment-template").innerHTML;
 //
 //  var templateFn = _.template(commentTemplate);
 //
 // var commentsDiv = document.getElementById("comments");
 //
 // var templateHTML = templateFn({ 'commentText': comment, 'commenter': commenter });
 //
 //  //append rather than replace!
 //  commentsDiv.innerHTML += templateHTML;

 var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

var commentText = document.getElementById("commentText").value;
var commenterName = document.getElementById("commenter").value;

var commentsSection = document.getElementById("comments");
commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
