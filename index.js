function createPage() {
  var pageContent = "" //document.getElementById("pageCon").value;
  var pageTemplate = document.getElementById("page-template").innerHTML;

  var templateFn = _.template(pageTemplate);
  //execute template function with JSON object for the interpolated values

  var templateHTML = templateFn({ 'pageContent': pageContent});

  var pageDiv = document.getElementById("page");
  pageDiv.innerHTML += templateHTML;
}

function createPost() {
  createPage();
  var postTitle = document.getElementById("title").value;
  var postBody = document.getElementById("body").value;
  var postAuthor = document.getElementById("author").value;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);
  //execute template function with JSON object for the interpolated values

  var templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor' : postAuthor});


  var postDiv = document.getElementById("post");
  postDiv.innerHTML += templateHTML;
}


function createComSec() {
  var pageContent = "" //document.getElementById("pageCon").value;
  var pageTemplate = document.getElementById("comments-template").innerHTML;

  var templateFn = _.template(pageTemplate);
  //execute template function with JSON object for the interpolated values

  var templateHTML = templateFn({ 'pageContent': pageContent});

  var pageDiv = document.getElementById("ender");
  pageDiv.innerHTML += templateHTML;
}


function postComment() {
  createComSec();
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentsDiv = document.getElementById("comments");
  //execute template function with JSON object for the interpolated values
  //append rather than replace!
  var templateFn = _.template(commentTemplate);
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;

}
