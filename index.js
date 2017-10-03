function createPost() {
  var title = document.getElementById('postTitle').value
  var author = document.getElementById('postAuthor').value
  var body = document.getElementById('postBody').value

  var pageTemplate = document.getElementById('page-template').innerHTML
  var pageDiv = document.getElementById('page')
  var pageTemplateFn = _.template(pageTemplate)
  var pageTemplateHTML = pageTemplateFn()
  pageDiv.innerHTML = pageTemplateHTML

  var postTemplate = document.getElementById('post-template').innerHTML
  var commentsTemplate = document.getElementById('comments-template').innerHTML
  var templateFn = _.template(postTemplate)
  var postDiv = document.getElementById('post')
  var templateHTML = templateFn({
                                  'title': title,
                                  'author': author,
                                  'body': body
                                })

  postDiv.innerHTML = templateHTML
  postDiv.innerHTML += commentsTemplate
}

function postComment() {
  var comment = document.getElementById('commentText').value
  var commenter = document.getElementById('commenterName').value

  var commentTemplate = document.getElementById('comment-template').innerHTML
  var templateFn = _.template(commentTemplate)
  var commentsDiv = document.getElementById('comments')
  var templateHTML = templateFn({
                                  'comment': comment,
                                  'commenter': commenter
                                })

  commentsDiv.innerHTML += templateHTML
}
