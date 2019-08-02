const userUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = $('#gallery');
const searchContainer = $('.search-container');


  
function fetchAPI(url){
  return fetch(url)
    .then((resp) => resp.json())
    .catch(error => console.log(error))
}

Promise.all([fetchAPI(userUrl)])
  .then(data => createCards(data.results));











