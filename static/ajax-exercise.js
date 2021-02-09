"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $('#get-fortune-button').on('click', showFortune);
}
$.get('/fortune')


// PART 2: SHOW WEATHER
function replaceForecast(results) {
    $("#weather-info").html(results.forecast);
}
function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = { "zipcode": $("#zipcode-field").val() };


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, replaceForecast)
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function changeMelonLst(res) {
    if (res.code === "OK") {
        $('#order-status').html("<p>" + res.msg + "</p>");
    }
    else {
        $('#order-status').addClass('order-error');
        $('#order-status').html("<p>" + res.msg + "</p>")
    }
}


function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    let formInput = {
        'kind_of_melon': $("#melon-type-field").val(),
        'quantity': $("#qty-field").val(),
    };
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    $.post("/order-melons.json", formInput, changeMelonLst);

}

$("#order-form").on('submit', orderMelons);
