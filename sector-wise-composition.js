 // Export Pie Chart
 const exportCtx = document.getElementById('exportPieChart').getContext('2d');
 const exportPieChart = new Chart(exportCtx, {
     type: 'pie',
     data: {
        labels: ['Primary (1154532.83)', 'Secondary (1786807.56)', 'Tertiary (99201.76)'],
         datasets: [{
             label: 'Export',
             data: [38.0, 58.8, 3.3],
             backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56'],
             borderWidth: 1,
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: {
                labels: {
                    color: 'white'  // Legend labels color
                },
                 display: true,
                 position: 'top'
             },
             tooltip: {
                 callbacks: {
                     label: function(tooltipItem) {
                         const label = tooltipItem.label || '';
                         const value = tooltipItem.raw || 0;
                         return `${label}: ${value}%`;
                     }
                 }
             },
             datalabels: {
                 color: '#fff',
                 formatter: (value) => {
                     return value + '%';
                 },
                 font: {
                     weight: 'bold',
                     size: 16
                 }
             }
         }
     },
     plugins: [ChartDataLabels]
 });

 // Import Pie Chart
 const importCtx = document.getElementById('importPieChart').getContext('2d');
 const importPieChart = new Chart(importCtx, {
     type: 'pie',
     data: {
        labels: ['Primary (2345994.37)', 'Secondary (2509019.75)', 'Tertiary (169150.17)'],
         datasets: [{
             label: 'Import',
             data: [46.7, 49.9, 3.4],
             backgroundColor: ['#4bc0c0', '#ff9f40', '#9966ff'],
             borderWidth: 1,
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: {
                labels: {
                    color: 'white'  // Legend labels color
                },
                 display: true,
                 position: 'top'
                 
             },
             tooltip: {
                 callbacks: {
                     label: function(tooltipItem) {
                         const label = tooltipItem.label || '';
                         const value = tooltipItem.raw || 0;
                         return `${label}: ${value}%`;
                     }
                 }
             },
             datalabels: {
                 color: '#fff',
                 formatter: (value) => {
                     return value + '%';
                 },
                 font: {
                     weight: 'bold',
                     size: 16
                 }
             }
         }
     },
     plugins: [ChartDataLabels]
 });