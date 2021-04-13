//IIFE with Pokemon Repository
let pokemonRepository = (function createPokemonRepository () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=300';
  let searchInput = document.querySelector('#search-bar');

  // Add Pokemon from Api
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //Creates List and Buttons in the DOM
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listItem = document.createElement('li');

    listItem.classList.add('list-group-item', 'list-group-item-action', 'list-group-bg', 'col-md-3');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btn-modal');
    button.classList.add('btn-block');
    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

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

  //Loads List Details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      //Add Details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

// Function to log Pokemon Details to console
function showDetails(pokemon) {

  loadDetails(pokemon).then(function() {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalTitle.empty();
    modalBody.empty();

    //Pokemon Name
    let pokemonName = $('<h1>' + pokemon.name + '</h1>');

    //Pokemon Image
    let pokemonImage = $('<img class="modal-img">');
    pokemonImage.attr('src', pokemon.imageUrl);

    //Pokemon Height
    let pokemonHeight = $(`<p>Height: ${pokemon.height}m</p>`,);

    //Pokemon Weight
    let pokemonWeight = $(`<p>Weight ${pokemon.weight}kg</p>`,);

    //Append Elements
    modalTitle.append(pokemonName);
    modalBody.append(pokemonImage, pokemonHeight, pokemonWeight);
  });
}

searchInput.addEventListener('input', function(){
  let pokemonList = document.querySelectorAll('.list-group-item');
  let filterValue = searchInput.value.toUpperCase();

  pokemonList.forEach(function(pokemon){
    console.log(pokemon.innerText);
    if(pokemon.innerText.toUpperCase().indexOf(filterValue) > -1){
      pokemon.style.display = '';
    } else{
      pokemon.style.display = 'none';
    }
  })
});


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }

})();

// Displays Pokedex on the Website
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
