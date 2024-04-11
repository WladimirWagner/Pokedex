function pokemonCardTemplate(i) {
  return `
  <div class="pokedex-card" id="pokedex-card${i}" onclick="openInfoCard(${i})">
    <div>
      <img id="image" src="${allPokemon[i]['sprites']['other']['official-artwork']['front_default']}">
    </div>
    <span id="id">#${i+1}</span>
    <span id="name"><b>${allPokemon[i]['name']}</b></span>
    <div class="type-container">
      <div class="padding"><button id="type1-button${i}"><b>${allPokemon[i]['types']['0']['type']['name']}</b></button></div>
      <div class="padding" id="type2-container${i}"></div>    
  </div>
`;
}

function infoCardTemplate(i) {
  return `
  <div id="info-card${i}" class="info-card">
    <div class="info-top-section">
      <div class="data">
        <span><b>${allPokemon[i]['name']}</b></span>
        <span>#${i+1}</span>
      </div>
      <div>
        <button class="close-button" onclick="closeInfoCard()"><img src="./icon/buchstabe-x.png"></button>
      </div>
    </div>
    <div class="info-image-container">
      <img id="info-image" src="${allPokemon[i]['sprites']['other']['official-artwork']['front_default']}">
    </div>
    <div class="info-type-container">
      <div class="type-button-container">
        <div><button id="info-type1-button${i}"><b>${allPokemon[i]['types']['0']['type']['name']}</b></button></div>
        <div id="info-type2-container${i}"></div>
      </div>
      <span><b>${allPokemon[i]['weight']/10} KG</b></span>   
    </div>
    <div class="chart">
      <canvas  id="myChart${i}"></canvas>
    </div>
    <div class="left-arrow">
      <img src="./icon/linker-pfeil.png" onclick="previousPokemon(${i - 1})">
    </div>
    <div class="right-arrow">
      <img src="./icon/rechter-pfeil.png" onclick="nextPokemon(${i + 1})">
    </div>
  </div>
  `;
}

