import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#comicButton').click(function() {
    let pokemonName = $('#enteredPokemonName').val();
    $('#enteredPokemonName').val("");

      let request = new XMLHttpRequest();
      const url = `https://CORS-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon-form/${pokemonName}/
      `;

      request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        }
      }

      request.open("GET", url, true);
      request.send();

      const getElements = function(response) {
      $('.showDefault').html(`<img src="${response.sprites.front_default}">`);
      $('.showShiny').html(`<img src="${response.sprites.front_shiny}">`);




    }
  });
});
