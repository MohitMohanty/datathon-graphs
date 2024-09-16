   // Load the data from the JSON file
   fetch('combined_data_ss.json')
   .then(response => response.json())
   .then(data => {
       const historicalData = data.historical;
       const predictionsData = data.predictions;
       const events = data.events;

       const ctx = document.getElementById('tradeBalanceChartss').getContext('2d');

       // Prepare datasets for historical and predicted data
       const datasets = [
           {
               label: 'Global Trade Balance (Historical)',
               data: historicalData.map(d => ({x: d.Year, y: d["Global Trade Balance"]})),
               borderColor: '#39FF14',
               fill: false,
               tension: 0.1,
               borderWidth: 2
           },
           {
               label: 'Global Trade Balance (Predicted)',
               data: predictionsData.map(d => ({x: d.Year, y: d["Predicted Global Trade Balance"]})),
               borderColor: '#FF5733',
               fill: false,
               tension: 0.1,
               borderWidth: 2
           }
       ];

       // Prepare event lines for annotations
       const eventLines = events.map(event => ({
           type: 'line',
           scaleID: 'x',
           value: event.year,
           borderColor: '#ff0000',
           borderWidth: 1,
           borderDash: [10, 5],
           label: {
               content: event.event,
               enabled: true,
               position: 'top',
               rotation: 90,
               backgroundColor: 'rgba(255, 99, 132, 0.25)',
               color: '#ffffff'
           },
           order: 10
       }));

       new Chart(ctx, {
           type: 'line',
           data: {
               datasets: datasets
           },
           options: {
               scales: {
                   x: {
                       type: 'linear',
                       position: 'bottom',
                       min: 1997,
                       max: 2040,
                       ticks: {
                           stepSize: 1,
                           callback: function(value, index, values) {
                               const event = events.find(e => e.year === value);
                               return event ? `${value}\n${event.event}` : value;
                           },
                           color: '#ffffff' // White text color
                       }
                   },
                   y: {
                       title: {
                           display: true,
                           text: 'Trade Balance (in billions)',
                           color: '#ffffff' // White text color
                       },
                       ticks: {
                           color: '#ffffff' // White text color
                       }
                   }
               },
               plugins: {
                   legend: {
                       display: true // Show the legend
                   },
                   annotation: {
                       annotations: eventLines
                   },
                   tooltip: {
                       enabled: true,
                       mode: 'nearest',
                       intersect: false,
                       callbacks: {
                           label: function(context) {
                               const event = events.find(e => e.year === context.raw.x);
                               return event ? event.event : context.dataset.label + ': ' + context.raw.y;
                           }
                       }
                   }
               },
               elements: {
                   line: {
                       tension: 0.1,
                       borderWidth: 2,
                       borderColor: '#00aaff',
                       backgroundColor: 'rgba(0, 170, 255, 0.2)'
                   }
               }
           }
       });

       // Positioning labels manually
       const canvas = document.getElementById('tradeBalanceChart');
       const rect = canvas.getBoundingClientRect();
       const eventLabelsContainer = document.getElementById('eventLabels');

       events.forEach(event => {
           const x = (event.year - 1997) / (2040 - 1997) * canvas.width;
           const y = 20;

           const label = document.createElement('div');
           label.className = 'event-label';
           label.style.left = `${rect.left + x}px`;
           label.style.top = `${rect.top + y}px`;
           label.textContent = event.event;

           eventLabelsContainer.appendChild(label);
       });
   })
   .catch(error => console.error('Error loading the data:', error));