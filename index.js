function createPost() {
  var pageTemplate = _.template(document.getElementById('page-template').innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var title = document.getElementById('postTitle').value;
  var post = document.getElementById("postContent").value;
  var author = document.getElementById("postAuthor").value;

  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var postsDiv = document.getElementById("post");

  var postHTML = postTemplate({ "post": post, "title": title, "author": author});

  postsDiv.innerHTML += postHTML;
  postsDiv.getElementsByTagName("footer")[0].innerHTML += commentsTemplate();
}

  function postComment() {
    var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

    var content = document.getElementById("content").value;
    var commenter = document.getElementById("commenters").value;

    var commentHTML = commentTemplate({ "content": content, "commenter": commenter })

    document.getElementById("comments").innerHTML += commentHTML;
  }
