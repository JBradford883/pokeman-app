//Array of Pokemon Name,Height,Type
let pokemonRepository = (function () {
let pokemonList = [
  {
    name: "Charizard",
    height: 1.7,
    type: ["fire","flying"]
  },

  {
    name: "Pikachu",
    height: 0.4,
    type: ["electric"]
  },

  {
    name: "Rhydon",
    height: 1.9,
    type: ["rock","ground"]
  },

  {
    name: "Squirtle",
    height: 0.5,
    type: ["water"]
  },

  {
    name: "Zapdos",
    height: 1.6,
    type: ["electric","flying"]
  }
];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


// Added forEach loop for Pokemon List
function pokemonDescription(pokemonList) {
  if (pokemon.height > 1.8){
  document.write(pokemon.name + ' - ' + pokemon.height + ' m - Wow! That is a big Pokemon! <br>');
}else {document.write(pokemon.name + ' - ' + pokemon.height + ' m <br>')
}
}

pokemonRepository.add({ name: 'Wartorle', height: 1, type: 'water' });
console.log(pokemonRepository.getAll());
