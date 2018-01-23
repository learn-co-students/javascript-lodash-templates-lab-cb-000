function createPost() {
  //Grab form data
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  var author = document.getElementById('author').value;

  //Build page
  var pageTemp = document.getElementById('page-template').innerHTML;
  var pageTempFn = _.template(pageTemp);
  var pageTempHTML = pageTempFn();
  console.log(pageTempHTML);
  var pageDiv = document.getElementById('page');
  pageDiv.innerHTML += pageTempHTML;
}
