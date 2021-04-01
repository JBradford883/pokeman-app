//IIFE with Pokemon Repository
let pokemonRepository = (function createPokemonRepository () {
  let repository = [
    {
      name: "Charizard",
      height: 1.7,
      type: ["fire","flying"]
    },

    {
      name: "Pikachu",
      height: 0.4,
      type: ["electric"],
    },

    {
      name: "Rhydon",
      height: 1.9,
      type: ["rock","ground"]
    },

    {
      name: "Squirtle",
      height: 0.5,
      type: ["water"],
    },

    {
      name: "Zapdos",
      height: 1.6,
      type: ["electric","flying"]
    }
  ];

function getAll() {
  return repository;
}

function add(pokemon) {
  repository.push(pokemon);
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
