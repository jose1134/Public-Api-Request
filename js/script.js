const searchContainer = $('.search-container');
const gallery = $('.gallary');
// const card;
// const cardImage;
// const cardInfo;
// const modalContainer;
// const modalButton;
// const modal; 


function searchBox(){
	searchContainer.html($('<form>', {action: '#', method: 'get'}));
	$('form').html($('<input>', {type: 'search', id: "search-input", class: "search-input", placeholder: 'Search...'}));
	$('form').append($('<input>', {type: 'submit', value: '&#x1F50D;',id: "search-submit", class: "search-submit"}));
}


searchContainer.append(searchBox);