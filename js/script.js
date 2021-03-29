//Array of Pokemon Name,Height,Type
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

// Added forEach loop for Pokemon List
function myLoopFunction(pokemon) {
  if (pokemon.height > 1.8){
  document.write(pokemon.name + ' - ' + pokemon.height + ' m - Wow! That is a big Pokemon! <br>');
}else {document.write(pokemon.name + ' - ' + pokemon.height + ' m <br>')
}
}

pokemonList.forEach(myLoopFunction);
