let allPokemonLinks = [];
let allPokemon = [];
let displayedPokemon = [];
let firstShownPokemon = 20;
let numberOfPokemon = 20;
let numberOfAllPokemon = 1302;
let currentPokemon;

async function init() {
  await loadAllPokemonLinks();
  await loadAllPokemon();
  loadDisplayedPokemon();
}

async function loadAllPokemonLinks() {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  let response = await fetch(url);
  currentPokemon = await response.json();

  allPokemonLinks.push(currentPokemon['results']);
}

async function loadAllPokemon() {
  for (let i = 0; i < numberOfAllPokemon; i++) {
    let pokemonUrl = allPokemonLinks['0'][i]['url'];
    let response = await fetch(pokemonUrl);
    currentPokemon = await response.json();

    allPokemon.push(currentPokemon);
  }
}

async function loadDisplayedPokemon() {
  for (let i = 0; i < firstShownPokemon; i++) {
    let pokemon = allPokemon[i];
    displayedPokemon.push(pokemon);
  }
  renderPokemonCard();
}

function loadMorePokemon() {
  for (let i = numberOfPokemon; i < numberOfPokemon+20; i++) {
    let pokemon = allPokemon[i];
    displayedPokemon.push(pokemon);
  }
  numberOfPokemon = numberOfPokemon + 20;
  renderPokemonCard();
}

function renderPokemonCard() {
  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';

  for (let i = 0; i < displayedPokemon.length; i++) {
    pokedex.innerHTML += pokemonCardTemplate(i);
    
    setCardColors(i);
    setPokemonTypeTwo(i);
  }
}

function openInfoCard(i) {
  const infoCard = document.getElementById('info-container');
  infoCard.classList.remove('d-none');
  infoCard.innerHTML = infoCardTemplate(i);
  renderChart(i);

  setInfoCardColors(i);
  setPokemonTypeTwoInfoCard(i);
}

function closeInfoCard() {
  const infoCard = document.getElementById('info-container');
	infoCard.classList.add('d-none');
	infoCard.innerHTML = '';
}

function previousPokemon(i) {
	if(i == -1) {
		openInfoCard(displayedPokemon.length - 1);
	} else {
		openInfoCard(i);
	}
}

function nextPokemon(i) {
	if(i == displayedPokemon.length) {
		openInfoCard(0);
	} else {
		openInfoCard(i);
	}
}

function searchPokemon() {
  let search = document.getElementById('search').value;
  search = search.toLowerCase();

  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';

  for (let i = 0; i < displayedPokemon.length; i++) {
    if(displayedPokemon[i].includes(search)) {
    pokedex.innerHTML = pokemonCardTemplate(i);
    
    setBackground(i);
    setPokemonTypeTwo(i);
    }
  }
}