 // Load the combined data from the JSON file
 fetch('combined_data.json')
 .then(response => response.json())
 .then(data => {
     // Process the data
     const years = data.Year;
     const historicalBalances = data['Historical Global Trade Balance'];
     const predictedBalances = data['Predicted Global Trade Balance'];

     // Create the chart
     const ctx = document.getElementById('predictiontradeBalanceChart').getContext('2d');
     const tradeBalanceChart = new Chart(ctx, {
         type: 'line',
         data: {
             labels: years,
             datasets: [
                 {
                     label: 'Historical Global Trade Balance',
                     data: historicalBalances,
                     borderColor: 'blue',
                     backgroundColor: 'rgba(0, 0, 255, 0.1)',
                     fill: true,
                     spanGaps: true // Connects gaps in the data
                 },
                 {
                     label: 'Predicted Global Trade Balance',
                     data: predictedBalances,
                     borderColor: 'red',
                     backgroundColor: 'rgba(255, 0, 0, 0.1)',
                     fill: true,
                     borderDash: [5, 5], // Dashed line for predictions
                     spanGaps: true // Connects gaps in the data
                 }
             ]
         },
         options: {
             scales: {
                 x: {
                     title: {
                         display: true,
                         text: 'Year'
                     }
                 },
                 y: {
                     title: {
                         display: true,
                         text: 'Global Trade Balance'
                     }
                 }
             },
             plugins: {
                 legend: {
                     display: true
                 }
             }
         }
     });
 })
 .catch(error => console.error('Error loading the JSON file:', error));