$(document).ready(function(){

 // $('button').on('click',function(){
 //   var search = $('#search').val();
 //   searchReddit(search);
 // });
  // function searchReddit(redditData){
$.get('http://www.reddit.com/r/owls/.json').done(function(response){
  console.log(response.data.children[0].data);
//
 // var reddits =['author','thumbnail',]
  for(i = 0; i < 11; i++){
    var container = $('#container');
    var image = $('.image');
    var wrap = $('.wrap');
    // var theme = [container + image + wrap];


    var title = response.data.children[i].data.title;
    var author = response.data.children[i].data.author;
    var thumbnail = response.data.children[i].data.thumbnail;
    var score = response.data.children[i].data.score;
    var date = response.data.children[i].data.date;
    // console.log(author );
    // var div = $("<div>");
    // div.css('')
   container.append('<img class="image" src = ' + thumbnail + '>').draggable();
   container.append("<div class='wrap' ><li> " + author  + " <li><li> " + title + "</li><li>" + score + "</li><li>" + date + "<li></div>");

   image.draggable();
   wrap.draggable();
    // theme.draggable();
  }
});
});
