function createPost() {
    //get the data
    var title = document.getElementById("postTitle").value;
    var body = document.getElementById("postText").value;
    var poster = document.getElementById("postAuthor").value;

    //clear the input fields for next round
    document.getElementById("postTitle").value = "";
    document.getElementById("postText").value = "";
    document.getElementById("postAuthor").value = "";

    //create the template
    var postTemplate=document.getElementById("post-template").innerHTML;

    //create the template function for Lodash
    var postTemplateFn = _.template(postTemplate);
 
    //get the area where we will post the data
    var postDiv = document.getElementById("post")
    
    //execute Lodash with our template function, passing JSon objects
    var postTemplateHTML = postTemplateFn({'title':title,'body':body, 'poster': poster});

    //set the innerHTML properly formatted string
   postDiv.innerHTML += postTemplateHTML;

    //create the comment template
    var commentsTemplate=document.getElementById("comments-template").innerHTML;
    //create the comment template function for Lodash
    var commentsTemplateFn = _.template(commentsTemplate);
  
    //execute Lodash to generate the HTML
    var commentsTemplateHTML = commentsTemplateFn();
   
    //get the div where the comments input form is going
    //set the innerHTML of the properly formatted string
    postDiv.innerHTML += commentsTemplateHTML;

    //Now hide the form
   var myForm = document.getElementById("post-form")
   myForm.hidden = "true"; 
}

function postComment() {

    //comment-template: comment, commenter
    //get the data
    var comment = document.getElementById("commentText").value;
    var commenter = document.getElementById("commenter").value;
    document.getElementById("commentText").value = "";
    document.getElementById("commenter").value = "";

    //create the template
    var commentTemplate=document.getElementById("comment-template").innerHTML;

    //create the template function for Lodash
    var postCommentFn = _.template(commentTemplate);

    //get the area where we will post the data
    var commentDiv = document.getElementById("comment");

    //execute Lodash with our template function, passing JSon objects
    var postCommentHTML = postCommentFn({'comment':comment,'commenter':commenter});

    //set the innerHTML properly formatted string
    commentDiv.innerHTML += postCommentHTML;

}