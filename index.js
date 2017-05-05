function createPost() {
	// body...
    
    var pageTemplate = document.getElementById('page-template').innerHTML;
    var postTemplate = document.getElementById('post-template').innerHTML; 
    var commentsTemplate = document.getElementById('comments-template').innerHTML;

	var postTitle  = document.getElementById('titleText').value; 
	var postBody   = document.getElementById('bodyText').value;
	var postAuthor = document.getElementById('authorText').value;
	
    var postFun = _.template(postTemplate);
    var postElements = postFun({'title': postTitle, 'author': postAuthor});

    document.getElementsByTagName('main')[0].innerHTML += pageTemplate;
    document.getElementById('post').innerHTML += postElements;
    
    document.getElementsByTagName('main')[0].innerHTML += commentsTemplate;
};

function postComment() {
	// var commentTemplate = ;
	var commentText= document.getElementById('comment-text').value;
	var commenterName= document.getElementById('commenter').value;

	var commentFun = _.template(document.getElementById('comment-template').innerHTML);
	var comment = commentFun({'comment': commentText, 'commenter': commenterName})
   document.getElementById('comments').innerHTML += comment;
};	