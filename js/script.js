const searchContainer = $('.search-container');
const galleryId = $('#gallery');
const galleryClass = $('.gallary');
const card = $('.card');
const cardImageContainer = $(".card-img-container");
const cardInfoContainer = $(".card-info-container");
const cardImg = $(".card-img");
const cardName = $(".card-name");
const cardEmail = $("card-text");
const cardCity = $(".card-text, .cap");
const modalContainer = $(".modal-container");
const modalCloseButton = $("#modal-close-btn");
const modalButtonContainer = $(".modal-btn-container");
const modal = $(".modal");
const modalInfoContainer = $('.modal-info-container');
const modalImage = $(".modal-img")


function formElements(){
	$('.search-container').html($('<form>', {action: '#', method: 'get'}));
	$('form').html($('<input>', {type: 'search', id: "search-input", class: "search-input", placeholder: 'Search...'}));
	$('form').append($('<input>', {type: 'submit', value: '&#x1F50D;',id: "search-submit", class: "search-submit"}));
	
}
function galleryElements(){
	$('#gallery').html($('<div>', {class: 'card'}));
	$('.card').html($('<div>', {class: "card-img-container"}));
	$('.card').append($('<div>', {class: "card-info-container"}));
	$(".card-img-container").html($('<img>', {class: 'card-img', src: "https://placehold.it/90x90", alt: "profile picture"}));
	$(".card-info-container").html($('<h3>', {id: 'name', class: 'card-name cap'}));
	$(".card-info-container").append($('<p>', {class: 'card-text'}));
	$(".card-info-container").append($('<p>', {class: 'card-text cap'}));
	
}

function modalElements(){
	$('<div>', {class: 'modal-container'}).insertAfter('#gallery');
	$(".modal-container").html($('<div>', {class: 'modal'}));
	$(".modal-container").append($('<div>', {class: "modal-btn-container"}));
	$(".modal").html($('<button>', {type: 'button', id: "modal-close-btn", class: "modal-close-btn"}));
	$(".modal").append($('<div>', {class: "modal-info-container"}));
	$("#modal-close-btn").html('<strong>X</strong>');
	$('.modal-info-container').html($('<img>', {class: "modal-img", src: "https://placehold.it/125x125", alt: 'profile picture'}));
	$('<h3>', {id: 'name', class: 'modal-name cap'}).insertAfter('.modal-img');
	$('<p>', {class: 'modal-text cap'}).insertAfter('h3');
	$('<p>', {class: 'modal-text'}).insertAfter('.modal-name');
	$('<hr>').insertAfter('p.cap')
	for (let i = 0; i < 3; i++){
		$('<p>', {class: 'modal-text'}).insertAfter('hr');
	}
	$('.modal-btn-container').html($('<button>', {type: 'button', id: 'modal-prev', class: 'modal-prev btn'}));
	$('#modal-prev').html('Prev');
	$('.modal-btn-container').append($('<button>', {type: 'button', id: 'modal-next', class: 'modal-next btn'}));
	$('#modal-next').html('Next');
}

modalElements();

