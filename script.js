let allPokemon = [];
let displayedPokemon = [];
let firstShownPokemon = 20;
let numberOfPokemon = 20;
let currentPokemon;

const pokedex = document.getElementById('pokedex');


async function init() {
  await loadAllPokemon();
  loadDisplayedPokemon();
}

async function fetchPokemon() {
  
}

async function loadAllPokemon() {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  let response = await fetch(url);
  currentPokemon = await response.json();

  allPokemon.push(currentPokemon['results']);
}

async function loadDisplayedPokemon() {
  for (let i = 0; i < firstShownPokemon; i++) {
    let pokemonUrl = allPokemon['0'][i]['url'];
    let response = await fetch(pokemonUrl);
    currentPokemon = await response.json();

    displayedPokemon.push(currentPokemon);
  }
  renderPokemonCard();
}

async function loadMorePokemon() {
  for (let i = numberOfPokemon; i < numberOfPokemon+20; i++) {
    let pokemonUrl = allPokemon['0'][i]['url'];
    let response = await fetch(pokemonUrl);
    currentPokemon = await response.json();

    displayedPokemon.push(currentPokemon);
  }
  numberOfPokemon = numberOfPokemon + 20;
  renderPokemonCard();
}

function renderPokemonCard() {
  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';

  for (let i = 0; i < displayedPokemon.length; i++) {
    pokedex.innerHTML += pokemonCardTemplate(i);

    //setBackground(i);
    //setPokemonType(i);
  }

}

