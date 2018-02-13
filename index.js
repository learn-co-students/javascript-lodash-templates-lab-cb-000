function createPost(){
  var pageTemplate = document.getElementById('page-template').innerHTML;
  var pageDiv = document.getElementById('page');
  var pageFn = _.template(pageTemplate);
  var pageHTML = pageFn({'postsTitle': "Matija Posts"});
  pageDiv.innerHTML += pageHTML;

  //get values from form post
  var postTitle = document.getElementById('postTitle').value;
  var postBody = document.getElementById('postBody').value;
  var postAuthor = document.getElementById('postAuthor').value;

  var postTemplate = document.getElementById('post-template').innerHTML;
  var pagePostDiv = document.getElementById('post');
  var postFunction = _.template(postTemplate);
  var postHTML = postFunction({'postTitle':postTitle,'postBody':postBody,'postAuthor': postAuthor});
  pagePostDiv.innerHTML += postHTML;

  //dodamo se formo za komentarje
  var commentsFormTemplate = document.getElementById('comments-template').innerHTML;
  var postCommentDiv = document.getElementById('comment-form');
  var commentsFn = _.template(commentsFormTemplate);
  var commentsHTML = commentsFn({'formTitle':'Add Comment:'});
  postCommentDiv.innerHTML += commentsHTML;

}

function postComment(){
  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentsDiv = document.getElementById('comments');
  var commentFn = _.template(commentTemplate);
  var commentHTML = commentFn({'commenter':commenter,'comment':comment});
  commentsDiv.innerHTML += commentHTML;
}
