
function createPost() {
  var title = document.getElementById("postTitle").value;
  var author = document.getElementById("authorName").value;
  var post = document.getElementById("postText").value;
 
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentsTemplate = document.getElementById("comments-template").innerHTML;
 
  //create template function
  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);
 
  var postDiv = document.getElementById("page");
 
  //execute template function with JSON object for the interpolated values
  var pageTemplateHTML = pageTemplateFn({});
  var commentsTemplateHTML = commentsTemplateFn({});
  var postTemplateHTML = postTemplateFn({ 'title': title, 'post': post, 'author': author });
 
  postDiv.innerHTML = pageTemplateHTML;
  postDiv.innerHTML += postTemplateHTML;
  postDiv.innerHTML += commentsTemplateHTML;
}


function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
 
  var commentTemplate = document.getElementById("comment-template").innerHTML;
 
  //create template function
  var templateFn = _.template(commentTemplate);
 
  var commentsDiv = document.getElementById("comments");
 
  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
 
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

