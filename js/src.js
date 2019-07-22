const userUrl = 'https://randomuser.me/api/?results=10&nat=us,gb';
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