const searchContainer = $('.search-container');
const gallery = $('#gallery');
const gallary = $('.gallary');
const card = $('.card');
const cardImageContainer = $(".card-img-container");
const cardInfoContainer = $(".card-info-container");
const cardImg = $(".card-img");
const cardName = $(".card-name");
const cardEmail = $("card-text");
const cardCity = $(".card-text, .cap");
// const modalContainer;
// const modalButton;
// const modal; 


function newElements(){
	searchContainer.html($('<form>', {action: '#', method: 'get'}));
	$('form').html($('<input>', {type: 'search', id: "search-input", class: "search-input", placeholder: 'Search...'}));
	$('form').append($('<input>', {type: 'submit', value: '&#x1F50D;',id: "search-submit", class: "search-submit"}));
	
}
function galleryElements(){
	gallery.html($('<div>', {class: 'card'}));
	$('.card').html($('<div>', {class: "card-img-container"}));
	$('.card').append($('<div>', {class: "card-info-container"}));
	$(".card-img-container").html($('<img>', {class: 'card-img', src: "https://placehold.it/90x90", alt: "profile picture"}));
	$(".card-info-container").html($('<h3>', {id: 'name', class: 'card-name cap'}));
	$(".card-info-container").append($('<p>', {class: 'card-text'}));
	$(".card-info-container").append($('<p>', {class: 'card-text cap'}));
	
}


newElements();
galleryElements();

