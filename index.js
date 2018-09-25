const creatPost = () => {
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innterHTML);

  let postTitle = document.getElementById("postTitle").value;
  let postAuthor = document.getElementById("postAuthor").value;
  let post = document.getElementById("postBody")

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate()

  let blogSection = postTemplate({title: postTitle, body: post, poster: postAuthor})
  let commentsSeciton = commentsTemplate();

  let postElement = document.getElementById("post")
  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
}

const postComment = () => {
  let commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  let commentText = document.getElementbyId("commentText").value;
  let commenterName = document.getElementbyId("commenter").value;

  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate{commenter: commenterName, comment: commentText}
}
