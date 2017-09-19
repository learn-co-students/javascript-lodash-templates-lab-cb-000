function createPost() {
  var title = $('#title');
  var content = $('#content');
  var author = $('#author');

  var postTemplate = $('#post-template');
  var templateFn = _.template(postTemplate);
  //var headerDiv = $('.header');
  //var bodyDiv = $('.body');
  //var footerDiv = $('.footer');
  var postDiv = $('#post');
  var templateHTML = templateFn({
    'title': title,
    'content': content,
    'author': author
  });
  postDiv.innerHTML += templateHTML;

}
