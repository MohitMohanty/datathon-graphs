const colors = {
    low: '#4575b4',   // Dark blue for low values
    medium: '#ffffbf', // Yellowish for mid values
    high: '#d73027'   // Dark red for high values
  };
  
  // Exact Data Matrix from the Image
  const dataMatrix = [
    { x: 0, y: 12, v: -0.14 }, // India-US Strategic Partnership
    { x: 1, y: 12, v: -0.15 },
    { x: 2, y: 12, v: 0.15 },
  
    { x: 0, y: 11, v: -0.11 }, // Operation Neptune Spear
    { x: 1, y: 11, v: -0.095 },
    { x: 2, y: 11, v: 0.082 },
  
    { x: 0, y: 10, v: -0.094 }, // India-China Border Tensions
    { x: 1, y: 10, v: -0.097 },
    { x: 2, y: 10, v: 0.099 },
  
    { x: 0, y: 9, v: -0.096 },  // Modi’s Defense Reforms
    { x: 1, y: 9, v: -0.11 },
    { x: 2, y: 9, v: 0.12 },
  
    { x: 0, y: 8, v: -0.14 },  // India-France Rafale Deal
    { x: 1, y: 8, v: -0.15 },
    { x: 2, y: 8, v: 0.15 },
  
    { x: 0, y: 7, v: -0.13 },  // Uri Attack and Surgical Strikes
    { x: 1, y: 7, v: -0.14 },
    { x: 2, y: 7, v: 0.15 },
  
    { x: 0, y: 6, v: -0.11 },  // Doklam Standoff
    { x: 1, y: 6, v: -0.11 },
    { x: 2, y: 6, v: 0.099 },
  
    { x: 0, y: 5, v: -0.084 },  // India-US COMCASA Agreement
    { x: 1, y: 5, v: -0.069 },
    { x: 2, y: 5, v: 0.052 },
  
    { x: 0, y: 4, v: -0.093 },  // Balakot Air Strikes & Pulwama Attack
    { x: 1, y: 4, v: -0.084 },
    { x: 2, y: 4, v: 0.073 },
  
    { x: 0, y: 3, v: -0.12 },   // India-China Galwan Valley Clash
    { x: 1, y: 3, v: -0.13 },
    { x: 2, y: 3, v: 0.14 },
  
    { x: 0, y: 2, v: -0.018 },  // Quad Summit
    { x: 1, y: 2, v: -0.035 },
    { x: 2, y: 2, v: 0.054 },
  
    { x: 0, y: 1, v: 0.33 },    // Russia-Ukraine War Impact
    { x: 1, y: 1, v: 0.35 },
    { x: 2, y: 1, v: -0.36 },
  
    { x: 0, y: 0, v: 0.91 },    // India’s Indigenous Defense Expansion
    { x: 1, y: 0, v: 0.9 },
    { x: 2, y: 0, v: -0.89 }
  ];
  
  // Define labels for x and y axes
  const xLabels = ['Export Values', 'Import Values', 'Trade Balance'];
  const yLabels = [
    "India’s Indigenous Defense Expansion", "Russia-Ukraine War Impact", "Quad Summit",
    "India-China Galwan Valley Clash", "Balakot Air Strikes & Pulwama Attack",
    "India-US COMCASA Agreement", "Doklam Standoff", "Uri Attack and Surgical Strikes",
    "India-France Rafale Deal", "Modi’s Defense Reforms", "India-China Border Tensions",
    "Operation Neptune Spear", "India-US Strategic Partnership"
  ];
  
  // Create the heatmap chart
  const ctx = document.getElementById('heatmapCanvas').getContext('2d');
  new Chart(ctx, {
    type: 'matrix',
    data: {
      datasets: [{
        label: 'Heatmap',
        data: dataMatrix,
        backgroundColor(context) {
          const value = context.dataset.data[context.dataIndex].v;
          if (value < -0.5) return colors.low;
          else if (value < 0.5) return colors.medium;
          return colors.high;
        },
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        width: ({ chart }) => (chart.chartArea || {}).width / xLabels.length - 5,
        height: ({ chart }) => (chart.chartArea || {}).height / yLabels.length - 5,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label({ raw }) {
              return `Value: ${raw.v.toFixed(2)}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          labels: xLabels,
          offset: true,
          grid: {
            display: false
          }
        },
        y: {
          type: 'category',
          labels: yLabels,
          offset: true,
          grid: {
            display: false
          }
        }
      }
    }
  });
  