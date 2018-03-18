// function loadPage () {
//   var sidebar = "sidebar"
//   var post = "Posts"
//   var comments = "Comments"
//
//   var pageTemplate = document.getElementById("page-template").innerHTML;
//   var pageTemplateFn = _.template(pageTemplate);
//
//   var pageElement = document.getElementById("page");
//   var pageTemplateHTML = pageTemplateFn({"sidebar": sidebar, "post": post, "comments": comments});
//
//   pageElement.innerHTML += pageTemplateHTML
// }
// document.addEventListener("DOMContentLoaded", function(event) {
//   loadPage()
// })

var sidebar = "Sidebar";

function createPost () {
  var title = document.getElementById("postTitle").value;
  var text = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var postTemplate = document.getElementById("post-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var templateFn = _.template(postTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  var templateHTML = templateFn({'title': title, 'post': text, 'author': author});
  var pagetemplateHTML = pageTemplateFn({'sidebar': sidebar, 'post': templateHTML, "comments": " "});

  var pageDiv = document.getElementById('page').innerHTML;

  pageDiv.innerHTML += pagetemplateHTML;
};

function postComment() {
  var commenter = document.getElementById("commenterName");
  var comment = document.getElementById("commentText");

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var templateFn = _.template(commentTemplate);
  var pageTemplateFn = _.template(pageTemplate);

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  var pagetemplateHTML = pageTemplateFn({"sidebar": sidebar, 'post': " ", "comments": templateHTML});

  var pageDiv = document.getElementById('page').innerHTML;

  pageDiv.innerHTML += pagetemplateHTML;
};
