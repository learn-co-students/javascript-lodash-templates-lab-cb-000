function createPost() {
  var pageTemplate = _.template(document.getElementID("page-template").innerHTML);
  var postTemplate = _.template(document.getElementID("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementID("comments-template").innerHTML);

  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("postAuthor").value;
  var body = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': title, 'body': body, 'author': author });
  var commentsSection = commentsTemplate();
  var postElement = document.getElementById("post");

  postElement.innerHTML = blogSection;
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
  }


function postComment(){
  var commentTemplate = _.template(document.getElementId("comment-template").innerHTML);

  var comment = document.getElementById("commentName").value;
  var commenter = document.getElementById("commenterText").value;

  var commentSection = document.getElementId("comments");
  commentSection.innterHTML += commentTemplate({"comment": comment, "commenter": commenter });

}
