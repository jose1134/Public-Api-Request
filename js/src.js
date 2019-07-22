const userUrl = 'https://randomuser.me/api/?results=10&nat=us';
const gallery = $('#gallery');
const searchContainer = $('.search-container');


  
function fetchAPI(url){
  return fetch(userUrl)
    .then((resp) => resp.json())
    .catch(error => console.log(error))
}

Promise.all([fetchAPI(userUrl)])
  .then(data => data[0].results)
  .then(persons => persons.map(person => profiles(person)));




function profiles(data){
  gallery.append($('<div>', {class: 'card'}));
  $('.card').html($('<div>', {class: "card-img-container"}));
  $('.card').append($('<div>', {class: "card-info-container"}));
  $(".card-img-container").html($('<img>', {class: 'card-img', src: "https://placehold.it/90x90", alt: "profile picture"}));
  $(".card-info-container").html($('<h3>', {id: 'name', class: 'card-name cap'}));
  $('.card-img, .modal-img').attr('src', data.picture.large);
  $('.card-name, .modal-name').html(`${data.name.first} ${data.name.last}`);
  $('<p>', {class: 'card-text'}).insertAfter(".card-name").html(`${data.email}`);
  $('<p>', {class: 'card-text cap'}).insertAfter(".card-text").html(`${data.location.city}, ${data.location.state}`);
}










