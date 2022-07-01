
function makeChart(players) {


  var playerLabels = players.map(function(d) {
    return d.Name;
  });
  var weeksData = players.map(function(d) {
    return +d.Einkommen;
  });

  var chart = new Chart('chart', {
    type: "horizontalBar",
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData
        }
      ]
    }
  });
}
  
  // Request data using D3
  d3
    .csv('https://raw.githubusercontent.com/Apollon425/Visualisierung_DH_interactive_map/main/data/Einkommen/test.csv')
    .then(makeChart);
