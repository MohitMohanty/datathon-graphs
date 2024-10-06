  // Define the data
  const commodities = [
    "MINERAL FUELS, MINERAL OILS AND PRODUCTS",
    "PEARLS, PRECIOUS STONES, METALS, JEWELRY",
    "NUCLEAR REACTORS, BOILERS, MACHINERY",
    "VEHICLES AND PARTS",
    "ORGANIC CHEMICALS",
    "PHARMACEUTICAL PRODUCTS",
    "ELECTRICAL MACHINERY, RECORDERS, TV PARTS",
    "IRON AND STEEL",
    "CEREALS",
    "APPAREL AND CLOTHING ACCESSORIES"
].reverse();

const values = [
    573781.24, 484859.9, 189003.07, 174616.34, 170491.42, 
    156859.86, 139396.39, 120904.29, 97642.07, 96902.61
].reverse();

// Initialize the chart
const ctx_exp = document.getElementById('barChart-export').getContext('2d');

new Chart(ctx_exp, {
    type: 'bar',
    data: {
        labels: commodities,
        datasets: [{
            label: 'Value in USD Million',
            data: values,
            backgroundColor: 'skyblue',
            borderColor: 'blue',
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
                    text: 'Value in USD Million'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Commodities'
                }
            }
        },
        plugins: {
            legend: {
                display: false // Disable legend since we only have one dataset
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});