// Define the data for top import commodities
const commodities_import = [
    "MINERAL FUELS, MINERAL OILS, BITUMINOUS SUBSTANCES",
    "PEARLS, PRECIOUS STONES, METALS, JEWELRY",
    "ELECTRICAL MACHINERY, SOUND RECORDERS, TV PARTS",
    "NUCLEAR REACTORS, BOILERS, MACHINERY",
    "ORGANIC CHEMICALS",
    "PLASTIC AND ARTICLES",
    "IRON AND STEEL",
    "OPTICAL, PHOTOGRAPHIC, MEDICAL INSTRUMENTS",
    "FERTILISERS",
    "INORGANIC CHEMICALS, PRECIOUS METALS"
].reverse();

const values_import = [
    1756299.54, 813961.33, 485408.24, 441796.29, 218286.99, 
    147087.63, 133851.71, 94703.59, 83587.98, 71737.2
].reverse();

// Initialize the chart
const ctx_imp = document.getElementById('importBarChart').getContext('2d');

new Chart(ctx_imp, {
    type: 'bar',
    data: {
        labels: commodities_import,
        datasets: [{
            label: 'Value in USD Million',
            data: values_import,
            backgroundColor: 'lightcoral',
            borderColor: 'darkred',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Display bars horizontally
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value in USD Million',
                    color: '#fff'
                },
                ticks: {
                    color: '#fff'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Commodities',
                    color: '#fff'

                },
                ticks: {
                    color: '#fff'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff'  // Legend labels color
                },
                display: false // Disable legend since we only have one dataset
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});