$('#main').hide();
$('.logoMain').hide();
$('.centerDiv').hide();
$('.buttons').hide();
$('.boutonGris').hide();

$('#grosBouton').on('click', fonction (){
  $('#grosBouton').hide();
  $('#main').fadeIn(2000);
  $('.logoMain').fadeIn(2000);
  $('.centerDiv').fadeIn(2000);
  $('.buttons').fadeIn(2000);
  $('.boutonGris').fadeIn(2000);
  $('#grosBouton').width = 0;
  $('#grosBouton').height = 0;
});
