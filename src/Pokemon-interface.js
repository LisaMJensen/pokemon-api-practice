// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// import { CoolDate } from './coolDate.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `https://api.adviceslip.com/advice?callback=fortuneCookie
`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.fortuneCookie.slip}`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
//Vopnafjörður


// Y is the year minus 1 for January or February, and the year for any other month
// y is the last 2 digits of Y
// c is the first 2 digits of Y
// d is the day of the month (1 to 31)
// m is the shifted month (March=1,...,February=12)
// w is the day of week (0=Sunday,...,6=Saturday). If w is negative you have to add 7 to it.

// let monthDictionary = ["no", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"]
