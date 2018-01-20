window.addEventListener('DOMContentLoaded', function(){
  "use strict";
  // $('#indexIndex').hide();
  // setTimeout(function(){
  //   $('#indexIndex').fadeIn(4000);
  // }, 1000);

  //Seul le gros bouton Vert "Afficher les éléments centraux" apparaît
  $('#main').hide();
  $('.logoMain').hide();
  $('.centerDiv').hide();
  $('.buttons').hide();
  $('.boutonGris').hide();

  // Apparition du bouton vert
  $('#grosBouton').hide();
  setTimeout(function(){
    $('#grosBouton').fadeIn(2000);
  }, 500);


  // Faire apparaître les éléments centraux quand le gros bouton vert est cliqué
  document.getElementById("grosBouton").addEventListener("click", function( event ) {
    $('#grosBouton').hide();
    $('#main').show();
    $('.logoMain').fadeIn(500);
    setInterval(function(){}, 500);
    $('.centerDiv').show(1000);
    setInterval(function(){
    $('.buttons').show();
    $('.boutonGris').fadeIn(3000);
  }, 500);
  
  }, false);


// setInterval(function(){ alert("Hello"); }, 3000);



}); // Fin de window.addEventListener('DOMContentLoaded'
