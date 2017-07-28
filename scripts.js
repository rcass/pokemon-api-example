// import Pokemon from 'pokemon-images';
// const Pokemon = require("pokemon-images");

$(function() {
  $('button').on('click', function() {
    $('.sprite').remove();
    $('.pokeball').addClass('.pokeballanimate');
    $('.pokeball__button').addClass('.pokeball_buttonanimate');
    // Random Number Generator
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }
    var number = getRandomInt(1,150)

    $.ajax({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+ number 
    })
    .done(function(data) {
      // Clear Field 
      $('.results p, .results .pokemon-name').empty();   
      
      // Add pokemon name to H1
      $('.results .pokemon-name').append(data.name);
      console.log(data.name);

      // Add pokemon sprite
      // var pokeImg = Pokemon.getSprite(data.name);
      // console.log(pokeImg);
      var pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + number + '.png';
      $('.results .pokeSprite').append('<img src='+pokeImg+' class="sprite">');
  
    })
    .fail(function(){
      // Adding Error Message
      $('.results .pokemon-name').append('No pokemon for you.');
    })
    .always(function(){
      
      $('.results p').append('Your pokemon spirit animal is:');
    });
  });
});