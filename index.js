'use strict';

function getDogImage() {
    let answer = document.getElementById("numDogs").value;
    for (let i = 0; i < answer; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
    }
}


function watchForm() {
  $('.dog-form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});