function createPost(){
  var title = document.getElementById('title').value
  var body = document.getElementById('body').value
  var author = document.getElementById('author').value
  var postTemplate = document.getElementById('post-form').innerHTML
  var templateFn = _.template(postTemplate)

  var templateHTML = templateFn({'title': title,
  'body': body, 'author': author})

}

function postComment(){
  var commenter = document.getElementById('commenterName').value
  var comment = document.getElementById('commentText').value

  var commentTemplate = document.getElementById('comment-template').innerHTML

  var templateFn = _.template(commentTemplate)

  var commentsDiv = document.getElementId('comments')

  var templateHTML = templateFn({'comment': comment,
    'commenter': commenter})

  commentsDiv.innerHTML += templateHTML
}
