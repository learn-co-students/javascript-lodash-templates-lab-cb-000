var post_id = 0 ;


function createPost(event){

  if(event){ // to pass test
    event.preventDefault()
  }

  var title  = document.getElementById('title').value
  var body   = document.getElementById('body').value
  var author = document.getElementById('author').value

  var postHTML = createPostHTML(title, body, author)
  var commentsHTML = createComments()
  var pageHTML = createPage(postHTML, commentsHTML, "sidebar")

  var pagesDiv = document.getElementById('pages')
  pagesDiv.innerHTML += pageHTML

}

function createPage(postHTML, commentsHTML, sidebarHTML)
{

  var pageTemplate = document.getElementById('page-template').innerHTML
  var pageTemplateFn = _.template(pageTemplate)
  post_id++
  return pageTemplateFn({'post': postHTML, 'comments':commentsHTML, 'sidebar' : sidebarHTML})
}



function createPostHTML(title, body, author)
{
  var postTemplate = document.getElementById('post-template').innerHTML
  var postTemplateFn = _.template(postTemplate)
  return postTemplateFn({'title': title, 'body': body, 'author' : author})
}


function createComments() {
  var commentsTemplate = document.getElementById('comments-template').innerHTML
  var commentsTemplateFn = _.template(commentsTemplate)
  return  commentsTemplateFn({'post_id' :post_id})
}

function postComment() {


/*  var commentTextInput = document.getElementById(`commentText_${post_id}`)
  var commenterInput = document.getElementById(`commenter_${post_id}`)
*/

  var commentTextInput = document.getElementById("commentText")
  var commenterInput = document.getElementById("commenter")


  var commentText = commentTextInput.value
  var commenter = commenterInput.value
  var commentTemplate = document.getElementById("comment-template").innerHTML
  var commentTemplateFn = _.template(commentTemplate)


  var commentHTML = commentTemplateFn({'commentText': commentText, 'commenter': commenter})
  //var commentsDiv = document.getElementById(`comments_${post_id}`)
  var commentsDiv = document.getElementById("comments")
  commentsDiv.innerHTML += commentHTML

}
