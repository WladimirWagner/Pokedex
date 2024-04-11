function setCardColors(i) {
  const typeName1 = checkType1(i);
  if(typeName1 === 'fire') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#FFADAD';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#DB2929';
  } else if(typeName1 === 'grass') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#C9E4DE';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#78AB46';
  } else if(typeName1 === 'water') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#C6DEF1';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#009ACD';
  } else if(typeName1 === 'normal') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#D0CFCF';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#8B8989';
  } else if(typeName1 === 'bug') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#E5B8A2';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#A0522D';
  } else if(typeName1 === 'poison') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#D8E79D';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#859C27';
  } else if(typeName1 === 'electric') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#FFFF99';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#FFFF00';
  } else if(typeName1 === 'ground') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#EAE0DA';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#CDAF95';
  } else if(typeName1 === 'fighting') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#D4C8B9';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#8B7355';
  } else if(typeName1 === 'psychic') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#BBBBFF';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#6666FF';
  } else if(typeName1 === 'rock') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#D0CFCF';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#8B8989';
  } else if(typeName1 === 'ghost') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#C4CAD1';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#6C7B8B';
  } else if(typeName1 === 'ice') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#A3D2FF';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#1E90FF';
  } else if(typeName1 === 'dragon') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#FFD588';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#CD8500';
  } else if(typeName1 === 'fairy') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#FF99CC';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#FF007F';
  } else if(typeName1 === 'dark') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#B7C4D4';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#506987';
  } else if(typeName1 === 'steel') {
    document.getElementById(`pokedex-card${i}`).style.backgroundColor = '#BFCDDB';
    document.getElementById(`type1-button${i}`).style.backgroundColor = '#6183A6';
  }
}

function setPokemonTypeTwo(i) {
  if (allPokemon[i]['types']['1']) {
    const typeName2 = checkType2(i);
    document.getElementById(`type2-container${i}`).innerHTML = `<button id="type2-button${i}"><b>${allPokemon[i]['types']['1']['type']['name']}</b></button>`;
    if (typeName2 === 'fire') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#DB2929';
    } else if(typeName2 === 'grass') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#78AB46';
    } else if(typeName2 === 'water') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#009ACD';
    } else if(typeName2 === 'normal') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#8B8989';
    } else if(typeName2 === 'bug') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#A0522D';
    } else if(typeName2 === 'poison') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#859C27';
    } else if(typeName2 === 'electric') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#FFFF00';
    } else if(typeName2 === 'ground') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#CDAF95';
    } else if(typeName2 === 'fighting') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#8B7355';
    } else if(typeName2 === 'psychic') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#6666FF';
    } else if(typeName2 === 'rock') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#8B8989';
    } else if(typeName2 === 'ghost') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#6C7B8B';
    } else if(typeName2 === 'ice') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#1E90FF';
    } else if(typeName2 === 'dragon') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#CD8500';
    } else if(typeName2 === 'fairy') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#FF007F';
    } else if(typeName2 === 'dark') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#506987';
    } else if(typeName2 === 'steel') {
      document.getElementById(`type2-button${i}`).style.backgroundColor = '#6183A6';
    }
  } 
}

function setInfoCardColors(i) {
  const typeName1 = checkType1(i);
  if(typeName1 === 'fire') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#FFADAD';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#DB2929';
  } else if(typeName1 === 'grass') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#C9E4DE';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#78AB46';
  } else if(typeName1 === 'water') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#C6DEF1';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#009ACD';
  } else if(typeName1 === 'normal') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#D0CFCF';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#8B8989';
  } else if(typeName1 === 'bug') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#E5B8A2';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#A0522D';
  } else if(typeName1 === 'poison') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#D8E79D';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#859C27';
  } else if(typeName1 === 'electric') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#FFFF99';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#FFFF00';
  } else if(typeName1 === 'ground') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#EAE0DA';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#CDAF95';
  } else if(typeName1 === 'fighting') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#D4C8B9';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#8B7355';
  } else if(typeName1 === 'psychic') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#BBBBFF';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#6666FF';
  } else if(typeName1 === 'rock') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#D0CFCF';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#8B8989';
  } else if(typeName1 === 'ghost') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#C4CAD1';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#6C7B8B';
  } else if(typeName1 === 'ice') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#A3D2FF';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#1E90FF';
  } else if(typeName1 === 'dragon') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#FFD588';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#CD8500';
  } else if(typeName1 === 'fairy') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#FF99CC';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#FF007F';
  } else if(typeName1 === 'dark') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#B7C4D4';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#506987';
  } else if(typeName1 === 'steel') {
    document.getElementById(`info-card${i}`).style.backgroundColor = '#BFCDDB';
    document.getElementById(`info-type1-button${i}`).style.backgroundColor = '#6183A6';
  }
}

function setPokemonTypeTwoInfoCard(i) {
  if (allPokemon[i]['types']['1']) {
    const typeName2 = checkType2(i);
    document.getElementById(`info-type2-container${i}`).innerHTML = `<button id="info-type2-button${i}"><b>${allPokemon[i]['types']['1']['type']['name']}</b></button>`;
    if (typeName2 === 'fire') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#DB2929';
    } else if(typeName2 === 'grass') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#78AB46';
    } else if(typeName2 === 'water') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#009ACD';
    } else if(typeName2 === 'normal') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#8B8989';
    } else if(typeName2 === 'bug') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#A0522D';
    } else if(typeName2 === 'poison') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#859C27';
    } else if(typeName2 === 'electric') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#FFFF00';
    } else if(typeName2 === 'ground') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#CDAF95';
    } else if(typeName2 === 'fighting') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#8B7355';
    } else if(typeName2 === 'psychic') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#6666FF';
    } else if(typeName2 === 'rock') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#8B8989';
    } else if(typeName2 === 'ghost') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#6C7B8B';
    } else if(typeName2 === 'ice') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#1E90FF';
    } else if(typeName2 === 'dragon') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#CD8500';
    } else if(typeName2 === 'fairy') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#FF007F';
    } else if(typeName2 === 'dark') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#506987';
    } else if(typeName2 === 'steel') {
      document.getElementById(`info-type2-button${i}`).style.backgroundColor = '#6183A6';
    } 
  }
}

function checkType1(i) {
  return allPokemon[i]['types']['0']['type']['name'];
}

function checkType2(i) {
  return allPokemon[i]['types']['1']['type']['name'];
}