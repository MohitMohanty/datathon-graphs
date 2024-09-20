// // Function to fetch and parse CSV data
// async function fetchCSVData() {
//     const response = await fetch('trade_data.csv');  // CSV file should be in the same folder as HTML
//     const data = await response.text();
//     const parsedData = parseCSV(data);
//     return parsedData;
// }

// // Function to parse CSV text data into usable format
// function parseCSV(data) {
//     const rows = data.split('\n').slice(1);  // Remove headers
//     const years = [];
//     const exportValues = [];
//     const importValues = [];
//     const exportGrowth = [];
//     const importGrowth = [];

//     rows.forEach(row => {
//         const cols = row.split(',');
//         years.push(cols[0]);
//         exportValues.push(parseFloat(cols[1]));
//         importValues.push(parseFloat(cols[2]));
//         exportGrowth.push(parseFloat(cols[3]));
//         importGrowth.push(parseFloat(cols[4]));
//     });

//     return { years, exportValues, importValues, exportGrowth, importGrowth };
// }


// // Function to create a combined bar and line chart using Chart.js
// function createCombinedChart(data) {
//     const ctx = document.getElementById('tradeChart').getContext('2d');

//     new Chart(ctx, {
//         type: 'bar',  // Primary chart type is 'bar'
//         data: {
//             labels: data.years,
//             datasets: [
//                 {
//                     label: 'Exports (in millions)',
//                     backgroundColor: 'rgba(54, 162, 235, 0.7)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1,
//                     data: data.exportValues,
//                     yAxisID: 'y',  // Linked to the first y-axis
//                 },
//                 {
//                     label: 'Imports (in millions)',
//                     backgroundColor: 'rgba(255, 99, 132, 0.7)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: data.importValues,
//                     yAxisID: 'y',  // Linked to the first y-axis
//                 },
//                 {
//                     label: 'Export Growth (%)',
//                     type: 'line',  // Second chart type is 'line'
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     data: data.exportGrowth,
//                     fill: false,
//                     tension: 0.1,
//                     yAxisID: 'y1',  // Linked to the second y-axis
//                 },
//                 {
//                     label: 'Import Growth (%)',
//                     type: 'line',  // Line chart for import growth
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     data: data.importGrowth,
//                     fill: false,
//                     tension: 0.1,
//                     yAxisID: 'y1',  // Linked to the second y-axis
//                 }
//             ]
//         },
//         options: {
//             scales: {
//                 x: { title: { display: true, text: 'Year', color: 'white' },ticks: { color: 'white' } },
//                 y: { 
//                     title: { display: true, text: 'Trade Values (in millions)', color: 'white' },ticks: { color: 'white' },
//                     beginAtZero: true
//                 },
//                 y1: {
//                     position: 'right',
//                     title: { display: true, text: 'Growth Rate (%)', color: 'white' },ticks: { color: 'white' },
//                     beginAtZero: true,
//                     grid: { drawOnChartArea: false }  // Separate growth rate axis visually
//                 }
//             },
//             plugins: {
//                 legend: {
//                     labels: {
//                         color: 'white'  // Legend labels color
//                     }
//                 }
//             },
//             datalabels: {
//                 color: 'white',  // Color of the data values
//                 anchor: 'end',   // Position of the data label relative to the bar/line
//                 align: 'top',    // Aligns the label on top of the bar/line
//                 font: {
//                     weight: 'bold'
//                 }
//             },
//             responsive: true,
//         }
//     });
// }

// // Load and plot data when the page loads
// fetchCSVData().then(data => {
//     createCombinedChart(data);
// });

  // Function to fetch and parse CSV data
  async function fetchCSVData() {
    const response = await fetch('trade_data.csv');  // CSV file should be in the same folder as HTML
    const data = await response.text();
    const parsedData = parseCSV(data);
    return parsedData;
}

// Function to parse CSV text data into usable format
function parseCSV(data) {
    const rows = data.split('\n').slice(1);  // Remove headers
    const years = [];
    const exportValues = [];
    const importValues = [];
    const exportGrowth = [];
    const importGrowth = [];

    rows.forEach(row => {
        const cols = row.split(',');
        years.push(cols[0]);
        exportValues.push(parseFloat(cols[1]));
        importValues.push(parseFloat(cols[2]));
        exportGrowth.push(parseFloat(cols[3]));
        importGrowth.push(parseFloat(cols[4]));
    });

    return { years, exportValues, importValues, exportGrowth, importGrowth };
}

// Event data
const event_years = [2011, 2013, 2014, 2015, 2016, 2017, 2019, 2020, 2021, 2022];
const event_labels = [
    "India-US Strategic Partnership", "Depsang Incident", "Make in India", "Rafale Deal", 
    "Uri Attack", "Doklam Standoff", "Balakot Strike", "Galwan Clash", 
    "Quad Summit", "Russia-Ukraine War Impact"
];

// Function to create a combined bar and line chart using Chart.js
function createCombinedChart(data) {
    const ctx = document.getElementById('tradeChart').getContext('2d');

    const labelsWithEvents = data.years.map(year => {
        const index = event_years.indexOf(parseInt(year));  // Check if the year matches an event year
        return index !== -1 ? `${year} (${event_labels[index]})` : year;
    });

    // Create vertical lines for each event
    const verticalLines = event_years.map((eventYear, index) => {
        const xPosition = data.years.indexOf(eventYear.toString());  // Find index in the labels
        return {
            type: 'line',
            xMin: xPosition,
            xMax: xPosition,
            borderColor: 'rgba(135, 206, 235, 0.7)',  // Light grey-blue color
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
                content: event_labels[index],
                enabled: true,
                position: 'start',
                rotation: 90,
                color: 'white',
                font: {
                    style: 'bold'
                }
            }
        };
    });

    new Chart(ctx, {
        type: 'bar',  // Primary chart type is 'bar'
        data: {
            labels: labelsWithEvents,
            datasets: [
                {
                    label: 'Exports (in millions)',
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: data.exportValues,
                    yAxisID: 'y',  // Linked to the first y-axis
                },
                {
                    label: 'Imports (in millions)',
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: data.importValues,
                    yAxisID: 'y',  // Linked to the first y-axis
                },
                {
                    label: 'Export Growth (%)',
                    type: 'line',  // Second chart type is 'line'
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    data: data.exportGrowth,
                    fill: false,
                    tension: 0.1,
                    yAxisID: 'y1',  // Linked to the second y-axis
                },
                {
                    label: 'Import Growth (%)',
                    type: 'line',  // Line chart for import growth
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    data: data.importGrowth,
                    fill: false,
                    tension: 0.1,
                    yAxisID: 'y1',  // Linked to the second y-axis
                }
            ]
        },
        options: {
            scales: {
                x: { 
                    title: { display: true, text: 'Year', color: 'white' },
                    ticks: { color: 'white' }
                },
                y: { 
                    title: { display: true, text: 'Trade Values (in millions)', color: 'white' },
                    ticks: { color: 'white' },
                    beginAtZero: true
                },
                y1: {
                    position: 'right',
                    title: { display: true, text: 'Growth Rate (%)', color: 'white' },
                    ticks: { color: 'white' },
                    beginAtZero: true,
                    grid: { drawOnChartArea: false }  // Separate growth rate axis visually
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'  // Legend labels color
                    }
                },
                annotation: {
                    annotations: verticalLines
                }
            },
            datalabels: {
                color: 'white',  // Color of the data values
                anchor: 'end',   // Position of the data label relative to the bar/line
                align: 'top',    // Aligns the label on top of the bar/line
                font: {
                    weight: 'bold'
                }
            },
            responsive: true,
        }
    });
}

// Load and plot data when the page loads
fetchCSVData().then(data => {
    createCombinedChart(data);
});