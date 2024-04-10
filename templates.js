function pokemonCardTemplate(i) {
  return `
  <div class="pokedex-card" id="pokedex-card${i}">
    <div>
      <img id="image" src="${displayedPokemon[i]['sprites']['other']['official-artwork']['front_default']}">
    </div>
    <span id="id">#${i+1}</span>
    <span id="name">${displayedPokemon[i]['name']}</span>
    <div class="type-container" id="type-container${i}">
      <button id="type">${displayedPokemon[i]['types']['0']['type']['name']}</button>    
  </div>
`;
}
/*
function setBackground(i) {
  if(displayedPokemon[i]['types']['0']['type']['name'] === 'fire') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'red';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'grass') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'green';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'water') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'blue';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'normal') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'grey';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'bug') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'yellow';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'poison') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'lightgreen';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'electric') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'yellow';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'ground') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'brown';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'fighting') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'beige';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'psychic') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'grey';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'rock') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'brown';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'ghost') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'white';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'ice') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'blue';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'dragon') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'yellow';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'fairy') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'yellow';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'dark') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'black';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'steel') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'white';
  } else if(displayedPokemon[i]['types']['0']['type']['name'] === 'flying') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = 'yellow';
  }
}
*/

function setPokemonType(i) {
  if (displayedPokemon[i]['types']['1'] != 'undefined') {
    document.getElementById(`type-container${i}`).innerHTML = `<button>${displayedPokemon[i]['types']['1']['type']['name']}</button>`;
  }
}
