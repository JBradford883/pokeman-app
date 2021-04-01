//IIFE with Pokemon Repository
let pokemonRepository = (function createPokemonRepository () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


function add(pokemon) {
  repository.push(pokemon);
}
  function getAll() {
    return pokemonList;
  }

function showDetails(pokemon){
    console.log(showDetails);
}
  //Creates List and Buttons in the DOM
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');

    let listPokemon = document.createElement('li');

    let button = document.createElement('button');

    //Adds Pokemon Name to Buttons
    button.innerText = pokemon.name;
    button.classList.add('button-class');

    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    // Event Listener on Button click
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  // Event Listener on Button click
  button.addEventListener('click', function (event) {
    console.log(pokemon.name);
  });
  //Loads List of Pokemon
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

}
  //Loads List Details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      //Add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

})();

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
