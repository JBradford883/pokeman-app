//Array of Pokemon Name,Height,Type

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

return {
  add: add,
  getAll: getAll
}

})();

// Added forEach loop for Pokemon List
function pokemonDescription(pokemon) {
  if (pokemon.height > 1.8) {
    document.write(`<p class="pokemon-list"> ${pokemon.name} - ${pokemon.height}m - Wow! That is a big Pokemon!</p>`);
  } else {
    document.write(`<p class="pokemon-list"> ${pokemon.name} - ${pokemon.height}m</p>`)
  }
}

pokemonRepository.add( {name: 'Wartorle', height: 1, type: 'water'});
pokemonRepository.getAll().forEach(pokemonDescription);
