const searchContainer = $('.search-container');
const gallary = $('.gallary');
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

function gallaryMarkup(){
	gallary.html($('<div>'), {class: 'card'});
	card.html($('<div>', {class: "card-img-container"}));
	card.append($('<div>', {class: "card-info-container"}));
}