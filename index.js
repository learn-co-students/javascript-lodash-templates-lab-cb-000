function createPost() {


  var title = document.getElementById('title').value; //$('#title');
  var content = document.getElementById('content').value; //$('#content');
  var author = document.getElementById('author').value; //$('#author');


  var postTemplate = document.getElementById('post-template').innerHTML; //$('#post-template');
  var pageTemplate = document.getElementById('page-template').innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);

  var postDiv = document.getElementById('posts'); //$('#post');

  var pageTemplateHTML = pageTemplateFn({
    'post': postTemplate
  });

  var postTemplateHTML = postTemplateFn({
    'title': title,
    'content': content,
    'author': author
  });



  postDiv.innerHTML += postTemplateHTML; // templateHTML;


}

function postComment() {

  var comment = document.getElementById('comment').value;
  var by = document.getElementById('commenter').value;


  var commentTemplate = document.getElementById('comment-template').innerHTML;
  var commentsTemplate = document.getElementById('comments-template').innerHTML;

  var commentTemplateFn = _.template(commentTemplate);
  var commentsTemplateFn = _.template(commentsTemplate);

  var commentsTemplateHTML = commentsTemplateFn({
    'comment': commentTemplate
  });
  var postCommentHTML = commentTemplateFn({
    'comment': comment,
    'commenter': by
  });
  var comments = document.getElementById('comments');
  comments.innerHTML += commentsTemplateHTML;

}
