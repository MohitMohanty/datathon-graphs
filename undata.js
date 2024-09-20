  // Function to fetch and process CSV data
  function fetchCSVData() {
    Papa.parse('chartjs-combined_export_import_data.csv', {
        download: true,
        header: true,
        complete: function (results) {
            processData(results.data);
        }
    });
}

// Function to process CSV data and plot chart
function processData(data) {
    const years = [];
    const ironSteelExport = [];
    const ironSteelImport = [];
    const pharmaExport = [];
    const pharmaImport = [];
    const silkExport = [];
    const silkImport = [];

    // Processing the CSV rows
    data.forEach(row => {
        const year = row['Year'];
        const flow = row['Flow'];
        const ironSteelValue = parseFloat(row['Iron & Steel (USD)']) || 0;
        const pharmaValue = parseFloat(row['Pharmaceuticals (USD)']) || 0;
        const silkValue = parseFloat(row['Silk (USD)']) || 0;

        if (!years.includes(year)) {
            years.push(year);
        }

        if (flow === 'Export') {
            ironSteelExport.push(ironSteelValue);
            pharmaExport.push(pharmaValue);
            silkExport.push(silkValue);
        } else if (flow === 'Import') {
            ironSteelImport.push(ironSteelValue);
            pharmaImport.push(pharmaValue);
            silkImport.push(silkValue);
        }
    });

    // Calling function to draw chart
    drawChart(years, ironSteelExport, ironSteelImport, pharmaExport, pharmaImport, silkExport, silkImport);
}

// Function to draw Chart.js graph
function drawChart(years, ironSteelExport, ironSteelImport, pharmaExport, pharmaImport, silkExport, silkImport) {
    const ctx = document.getElementById('exportImportChart').getContext('2d');

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Iron & Steel Export (USD)',
                data: ironSteelExport,
                borderColor: 'blue',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Iron & Steel Import (USD)',
                data: ironSteelImport,
                borderColor: 'blue',
                borderDash: [5, 5],
                fill: false,
                tension: 0.1
            },
            {
                label: 'Pharmaceuticals Export (USD)',
                data: pharmaExport,
                borderColor: 'green',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Pharmaceuticals Import (USD)',
                data: pharmaImport,
                borderColor: 'green',
                borderDash: [5, 5],
                fill: false,
                tension: 0.1
            },
            {
                label: 'Silk Export (USD)',
                data: silkExport,
                borderColor: 'red',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Silk Import (USD)',
                data: silkImport,
                borderColor: 'red',
                borderDash: [5, 5],
                fill: false,
                tension: 0.1
            }
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Export & Import Trends'
                },
                legend: {
                    position: 'top',
                }
            },
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
                        text: 'Trade Value (USD)'
                    }
                }
            }
        }
    };

    // Create the chart
    const exportImportChart = new Chart(ctx, config);
}

// Fetch and plot CSV data after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    fetchCSVData();
});