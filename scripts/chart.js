function renderChart(i) {
  const ctx = document.getElementById(`myChart${i}`);
  const data = {
    labels: [
      allPokemon[i]['stats']['0']['stat']['name'],
      allPokemon[i]['stats']['1']['stat']['name'],
      allPokemon[i]['stats']['2']['stat']['name'],
      allPokemon[i]['stats']['3']['stat']['name'],
      allPokemon[i]['stats']['4']['stat']['name'],
      allPokemon[i]['stats']['5']['stat']['name']
    ],
    datasets: [{
      nolabel: `STATS OF ${allPokemon[i]['name']}`,
      data: [allPokemon[i]['stats']['0']['base_stat'], allPokemon[i]['stats']['1']['base_stat'], allPokemon[i]['stats']['2']['base_stat'], allPokemon[i]['stats']['3']['base_stat'], allPokemon[i]['stats']['4']['base_stat'], allPokemon[i]['stats']['5']['base_stat']],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
  
    new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        scales: {
          r: {
            ticks: {
              font: {
                size: 9
              }
            },
            pointLabels: {
              color: 'black',
              font: {
                size: 11
              }
            },
            grid: {
              color: 'grey'
            },
              suggestedMin: 0,
              suggestedMax: 100
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
      },
    });
}

