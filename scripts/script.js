let allPokemon = [];
let firstShownPokemon = 20;
let numberOfAllPokemon = 1024;
let currentPokemon;

async function init() {
  showLoader();
  await loadFirstTwentyPokemon();
  hideLoader();
  loadAllPokemon();
}

async function loadFirstTwentyPokemon() {
  for (let i = 1; i <= firstShownPokemon; i++) {
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(pokemonUrl);
    currentPokemon = await response.json();
    allPokemon.push(currentPokemon);
  }
  renderPokedex();
}

async function loadAllPokemon() {
  for (let i = firstShownPokemon + 1; i <= numberOfAllPokemon; i++) {
    let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(pokemonUrl);
    currentPokemon = await response.json();
    allPokemon.push(currentPokemon);
  }
}

function renderPokedex() {
  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';

  for (let i = 0; i < firstShownPokemon && i < allPokemon.length; i++) {
    pokedex.innerHTML += pokemonCardTemplate(i);
    setCardColors(i);
    setPokemonTypeTwo(i);
  }
}

function loadMorePokemon() {
  firstShownPokemon = firstShownPokemon + 20;
  renderPokedex();
}

function openInfoCard(i) {
  const infoCard = document.getElementById('info-container');
  const background = document.getElementById('container');
  infoCard.classList.remove('d-none');
  background.classList.add('blurred');
  infoCard.innerHTML = infoCardTemplate(i);
  renderChart(i);
  setInfoCardColors(i);
  setPokemonTypeTwoInfoCard(i);
}

function closeInfoCard() {
  const infoCard = document.getElementById('info-container');
  const background = document.getElementById('container');
	infoCard.classList.add('d-none');
  background.classList.remove('blurred');
	infoCard.innerHTML = '';
}

function previousPokemon(i) {
	if(i == -1) {
		openInfoCard(allPokemon.length - 1);
	} else {
		openInfoCard(i);
	}
}

function nextPokemon(i) {
	if(i == allPokemon.length) {
		openInfoCard(0);
	} else {
		openInfoCard(i);
	}
}

function searchPokemon() {
  let searchValue = document.getElementById('search').value.trim().toLowerCase();
  document.getElementById('more-pokemon-button').classList.add('d-none');
  let pokedex = document.getElementById('pokedex');
  pokedex.innerHTML = '';

  if (searchValue.length >= 1) {
    for (let i = 0; i < allPokemon.length; i++) {
      let pokemon = allPokemon[i];
      if (pokemon['name'].includes(searchValue) || pokemon['id'].toString() === searchValue) {
        pokedex.innerHTML += pokemonCardTemplate(i);
        setCardColors(i);
        setPokemonTypeTwo(i);
      }
    }
  } else {
    renderPokedex();
    document.getElementById('more-pokemon-button').classList.remove('d-none');
  }
}

function showLoader() {
  document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
  document.getElementById('loader').style.display = 'none';
}