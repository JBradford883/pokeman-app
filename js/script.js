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

// List of Pokemon name and height
for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 1.8){
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow! That is a big Pokemon!<br>`)
  }
  else { document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`)}
}
