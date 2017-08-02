import Pokemon from 'pokemon-images';
import $ from 'jquery';

$(function() {
  $('button').on('click', function() {
    $('.sprite').remove();
    $('.pokemon-name').empty();
    
    $('.pokeball').addClass('pokeballanimate');
    $('.pokeball__button').addClass('pokeball_buttonanimate');
    // Random Number Generator
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }

    $.ajax({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+ getRandomInt(1,150)
    })
    .done(function(data) {
      // Clear Field 
      $('.results p, .results .pokemon-name').empty();   
      
      // Add pokemon name to H1
      $('.results .pokemon-name').append(data.name);
      // console.log(data.name); // used to debug

      // Add pokemon sprite
      var pokeImg = Pokemon.getSprite(data.name);
      // console.log(pokeImg); // used to debug
      $('.results .pokeSprite').append('<img src='+pokeImg+' class="sprite">');
  
    })
    .fail(function(){
      // Adding Error Message
      $('.results .pokemon-name').append('No pokemon for you.');
    })
    .always(function(){
      $('.results p').append('Your pokemon spirit animal is:');
      $('.pokeball').removeClass('pokeballanimate');
    $('.pokeball__button').removeClass('pokeball_buttonanimate');
    });
  });
});