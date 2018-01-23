function createPost() {
  //Grab form data
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  var author = document.getElementById('author').value;

  //Build page
  var pageTemp = document.getElementById('page-template').innerHTML;
  var pageTempFn = _.template(pageTemp);
  var pageTempHTML = pageTempFn();
  var pageDiv = document.getElementById('page');
  pageDiv.innerHTML += pageTempHTML;

  //Build post
  var postTemp = document.getElementById('post-template').innerHTML;
  var postTempFn = _.template(postTemp);
  var postTempHTML = postTempFn({'title': title, 'body': body, 'author': author});
  var postDiv = document.getElementById('post');
  postDiv.innerHTML += postTempHTML;

  //Build comments section
  var commentsTemp = document.getElementById('comments-template').innerHTML;
  var commentsTempFn = _.template(commentsTemp);
  var commentsTempHTML = commentsTempFn();
  var pageDiv = document.getElementById('page');
  pageDiv.innerHTML += commentsTempHTML;
}

function postComment() {
  var comment = document.getElementById('comment').value;
  var commenter = document.getElementById('commenter').value;

  var commentTemp = document.getElementById('comment-template').innerHTML;
  var commentTempFn = _.template(commentTemp);
  var commentTempHTML = commentTempFn({'comment': comment, 'commenter': commenter});
  var commentsDiv = document.getElementById('comments');
  commentsDiv.innerHTML += commentTempHTML;
}
