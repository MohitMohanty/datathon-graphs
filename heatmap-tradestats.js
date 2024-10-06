// Define the data values
const events = [
    "India-US Strategic Partnership",
    "Operation Neptune Spear",
    "India-China Border Tensions",
    "Modi’s Defense Reforms",
    "India-France Rafale Deal",
    "Uri Attack and Surgical Strikes",
    "Doklam Standoff",
    "India-US COMCASA Agreement",
    "Balakot Air Strikes & Pulwama Attack",
    "India-China Galwan Valley Clash",
    "Quad Summit",
    "Russia-Ukraine War Impact",
    "India’s Indigenous Defense Expansion"
];

const exportValues = [-0.14, -0.11, -0.094, -0.096, -0.14, -0.13, -0.11, -0.084, -0.093, -0.12, -0.018, 0.33, 0.91];
const importValues = [-0.15, -0.095, -0.097, -0.107, -0.146, -0.14, -0.105, -0.069, -0.084, -0.13, -0.035, 0.35, 0.9];
const tradeBalanceValues = [0.15, 0.082, 0.099, 0.12, 0.15, 0.15, 0.099, 0.052, 0.073, 0.145, 0.054, -0.36, -0.89];

const categoriesX = ['Export Values', 'Import Values', 'Trade Balance'];
const categoriesY = events;

const data = [];

for (let i = 0; i < events.length; i++) {
    data.push([0, i, exportValues[i]]);
    data.push([1, i, importValues[i]]);
    data.push([2, i, tradeBalanceValues[i]]);
}

Highcharts.chart('container-correlation', {
    chart: {
        type: 'heatmap',
        backgroundColor: '#333333', // Dark background
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },

    title: {
        display: false,
        text: '',
        style: {
            color: '#ffffff' // White text for the title
        }
    },

    xAxis: {
        categories: categoriesX,
        title: {
            text: 'Trade Types',
            style: {
                color: '#ffffff' // White text for the axis title
            }
        },
        labels: {
            style: {
                color: '#ffffff' // White text for the axis labels
            }
        }
    },

    yAxis: {
        categories: categoriesY,
        title: {
            text: 'Events',
            style: {
                color: '#ffffff' // White text for the axis title
            }
        },
        labels: {
            style: {
                color: '#ffffff' // White text for the axis labels
            }
        },
        reversed: true // Ensures the first event is at the top
    },

    colorAxis: {
        min: -1,
        max: 1,
        stops: [
            [0, '#0000ff'], // Blue for negative values
            [0.5, '#ffffff'], // White for neutral
            [1, '#ff0000'] // Red for positive values
        ]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280,
        itemStyle: {
            color: '#ffffff' // White text for the legend
        }
    },

    tooltip: {
        backgroundColor: '#333333', // Dark background for the tooltip
        borderColor: '#ffffff', // White border for the tooltip
        style: {
            color: '#ffffff' // White text inside the tooltip
        },
        formatter: function () {
            return `<b>${categoriesY[this.point.y]}</b><br><b>${categoriesX[this.point.x]}</b>: ${this.point.value.toFixed(3)}`;
        }
    },

    series: [{
        name: 'Heatmap',
        borderWidth: 1,
        data: data,
        dataLabels: {
            enabled: true,
            color: '#ffffff', // White text inside the heatmap cells
            format: '{point.value:.3f}' // Display the value inside the heatmap cells
        }
    }]
});