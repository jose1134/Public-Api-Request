
///General variables that is used throughout the project
const userUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = $('#gallery');
const searchContainer = $('.search-container');



///This function works to fetch the api and the process any functions and errors
function fetchAPI(url){
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => createCards(data.results))
    .catch(error => console.log(error))
}
///This makes sure the api comes back resolved by running promises through it and fetching the api after its resolved
Promise.all([fetchAPI(userUrl)]);



///This function creates all the cards that is needed based on the results coming back form the api
/// Both the cards on the dom and the modal will be created based on the results
function createCards(data){
  data.map((employee, index) =>{  ///This maps out the data that is received and then creates the cards
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `<div class="card-img-container">  
                        <img class="card-img" src='${employee.picture.large}' alt="profile picture">
                    </div>
                        <div class="card-info-container"> 
                        <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="card-text">${employee.email}</p> 
                        <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
                    </div>`;
    gallery.append(cardDiv);   ///after all the right data is received, the card is then appened the its rightful place in the DOM 
    cardDiv.addEventListener('click',() => modalCards(employee, index));  ///The event handler is for when the card is clicked so that the modal window can open up
  });
/// This function creates the modal card based on which card was clicked, it then creates the modal with the correct information given from the results of the api
  function modalCards(employee, index){
    const modalContainer = document.createElement('div');
    const birthdayDate = new Date(employee.dob.date); ///This command creates a new date, which then it is formated to a US date structure, so it can be easily read
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = ` <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                      <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                      <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                      <p class="modal-text">${employee.email}</p>
                      <p class="modal-text cap">${employee.location.city}</p>
                      <hr>
                      <p class="modal-text">${employee.phone}</p>
                      <p class="modal-text">${employee.location.street}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                      <p class="modal-text">Birthday: ${birthdayDate.toLocaleDateString('en-US')}</p>
                  </div>
                   <div class="modal-btn-container">
                  <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                  <button type="button" id="modal-next" class="modal-next btn">Next</button>
              </div>`;
    gallery.after(modalContainer); ///After the data is received based on what card is clicked the modal window is then added to the DOM after the gallery div

    ///For the prev and next buttons, these commands hides one of the button based on their placement. I.E if you click the first card, the prev button is hidden. 
    if (index > 0){
     }
      if (index === 0){
        $('.modal-prev.btn').remove();
      }
     
    if (index <11){
      }

      if (index === 11){
        $('.modal-next.btn').remove(); 
       }

    $('.modal-close-btn').click(function(event) {
      $('.modal-container').remove();
    }); 

    ///These functions down below are for the prev and next buttons, for when they are clicked, new modal windows need to be generated based on the data
    /// that is first received and in its correct order. 
    function nextButton(){
      $('.modal-container').remove()
      modalCards(data[index +1], index+1);
    }


    function prevButton(){
      $('.modal-container').remove()
      modalCards(data[index -1], index-1);
    }

    ///These event handlers are for when each button is clicked, it then triggers the functions to put together a new modal window based on who is next or previous
    $('#modal-prev').click(prevButton);
    $('#modal-next').click(nextButton);
  }

}

/// The variable is created to store the search bar html 
const searchBar = `<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                        </form>`;

///In which this command appends the search bar html to its rightful place under the search container div
searchContainer.append(searchBar);


// / These variables creates the element for a purposing user error statement
// /for when a user is searching a name within the users that was generated, for if there is no user matching what they inputted
// / all the card will be hidden and an error message will show, informing the user that there is no one with the match they entered
const noName = document.createElement('div');
noName.className = 'no-name'
noName.innerHTML = 'Sorry, No Matches Found...';
noName.style.fontFamily = "'Courier New', Courier, monospace";
noName.style.color = "red";
gallery.append(noName);
$('.no-name').hide();

/// The function is for when the user inputs a value, which it is then run through the array of results from the api, to find a match 
/// if a match is found, all other cards will be hidden except for the users that match the value of the search input. 
/// if no match is found the error message will then be shown after hiding all the cards informing the user of no match
function searchResults(){
  const card = document.querySelectorAll('.card');
  const cardArr = Array.from(card);
  let searchValue = document.getElementById('search-input').value.toLowerCase();
  const results = [];
  for (let i = 0; i < cardArr.length; i++){
    card[i].style.display = 'none';
    const cardName = card[i].getElementsByTagName('h3')[0]; 
    if(cardName.innerHTML.toLowerCase().includes(searchValue)){
      results.push(card[i]);
      card[i].style.display = '';
    }
    if (results.length === 0){
        $('.no-name').show();
        $('.card').hide();
      } else {
        $('.no-name').hide();
      }
  }
}

/// these handlers below are for when a value is added in the input, it then calls for the search results function to run 
/// and look for the match that is found within the cards
$('.search-submit').on('click', function(event) {
  searchResults();
});
$('.search-input').on('keyup', function(event) {
  searchResults();
});
