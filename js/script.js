const searchContainer = $('.search-container');
<<<<<<< HEAD
const gallery = $('#gallery');
=======
const gallary = $('.gallary');
>>>>>>> bb68082d6b0e3751fc30e6b33afee62bfb7b6816
const card = $('.card');
const cardImageContainer = $(".card-img-container");
const cardInfoContainer = $(".card-info-container");
const cardImg = $(".card-img");
const cardName = $(".card-name");
const cardEmail = $("card-text");
const cardCity = $(".card-text, .cap")
// const modalContainer;
// const modalButton;
// const modal; 


function searchBox(){
	searchContainer.html($('<form>', {action: '#', method: 'get'}));
	$('form').html($('<input>', {type: 'search', id: "search-input", class: "search-input", placeholder: 'Search...'}));
	$('form').append($('<input>', {type: 'submit', value: '&#x1F50D;',id: "search-submit", class: "search-submit"}));
}

<<<<<<< HEAD
function galleryMarkup(){
	gallery.html($('<div>', {class: 'card'}));
	card.html($('<div>', {class: "card-img-container"}));
	card.append($('<div>', {class: "card-info-container"}));
	cardImageContainer.html($('<img>', {class: 'card-img', src: "https://placehold.it/90x90", alt: "profile picture"}));
	cardInfoContainer.html($('<h3>', {id: 'name', class: 'card-name cap'}));
	cardInfoContainer.append($('<p>', {class: 'card-text cap'}));
	cardCity.prepend($('<p>', {class: 'card-text'}));
}



galleryMarkup();


=======
function gallaryMarkup(){
	gallary.html($('<div>'), {class: 'card'});
	card.html($('<div>', {class: "card-img-container"}));
	card.append($('<div>', {class: "card-info-container"}));
}
>>>>>>> bb68082d6b0e3751fc30e6b33afee62bfb7b6816
