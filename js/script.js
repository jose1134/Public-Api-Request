

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
	$('<p>', {class: 'modal-text'}).insertAfter('.modal-name');
	$('<p>', {class: 'modal-text cap'}).insertAfter('.modal-text');
	$('.modal-info-container').append($('<hr>'));
	for (let i = 0; i < 3; i++){
		$('<p>', {class: 'modal-text'}).insertAfter('hr');
	}
	$('.modal-btn-container').html($('<button>', {type: 'button', id: 'modal-prev', class: 'modal-prev btn'}));
	$('#modal-prev').html('Prev');
	$('.modal-btn-container').append($('<button>', {type: 'button', id: 'modal-next', class: 'modal-next btn'}));
	$('#modal-next').html('Next');
}

formElements();
galleryElements();
modalElements();


const modalContainer = $('.modal-container');
modalContainer.hide();

$('.card').click(function(event) {
	modalContainer.fadeIn('slow');
});
$('.modal-close-btn').click(function(event) {
	modalContainer.fadeOut('slow');
});

const userUrl = 'https://randomuser.me/api/?results=1';


fetch(userUrl)
	.then((resp) => resp.json())
	.then(function(data){
		let users = data.results;
		return users.map(function(users){
			$('.card-img').attr('src', users.picture.thumbnail);
		})
		

	})
	.catch(error => console.log(error));







