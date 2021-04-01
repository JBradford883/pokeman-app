//IIFE with Pokemon Repository
let pokemonRepository = (function createPokemonRepository () {
    }
  ];
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
    console.log(pokemon.name);
  });

}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
}

})();

//Adds Pokemon to main Array in the IIFE
pokemonRepository.add( {name: 'Wartorle', height: 1, type: 'water'});


pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});
