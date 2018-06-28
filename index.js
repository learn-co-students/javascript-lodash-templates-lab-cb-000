function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string
  var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  //create template function
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById("postBody").value;
  var postComment = document.getElementById("postAuthor").value;

  //var pageTemplate = document.getElementById('page-template').innerHTML;

  var postTemplate = document.getElementById('post-template').innerHTML;

  var templateFn = _.template(postTemplate);

  var templateHTML = templateFn({'postTitle' : postTitle, 'postAuthor' : postAuthor, 'postBody' : postBody});

  document.getElementById("post").innerHTML += templateHTML;
}
