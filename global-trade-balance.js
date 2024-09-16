// Load the data from the JSON file
fetch('global.json')
.then(response => response.json())
.then(data => {
    const events = [
    {"year": 1998, "event": "Kargil War", "countries": ["Global", "Pakistan"]},

{"year": 2001, "event": "9/11 Attacks", "countries": ["USA", "EU", "Middle East"]},

{"year": 2008, "event": "Global Financial Crisis & Mumbai Attacks", "countries": ["USA", "EU", "Global"]},


{"year": 2010, "event": "Eurozone Debt Crisis", "countries": ["EU", "India"]},
{"year": 2011, "event": "Arab Spring & Fukushima Nuclear Disaster", "countries": ["Middle East", "India"]},

{"year": 2013, "event": "Taper Tantrum", "countries": ["USA", "India"]},
{"year": 2014, "event": "Modi's Economic Reforms & Collapse of Global Oil Prices", "countries": ["Global", "India"]},

{"year": 2015, "event": "China’s Economic Slowdown", "countries": ["China", "India"]},


{"year": 2016, "event": "Demonetization", "countries": ["India"]},
{"year": 2019, "event": "Abrogation of Article 370", "countries": ["India", "Pakistan"]},
{"year": 2020, "event": "Brexit & COVID-19 Pandemic", "countries": ["Global", "India", "USA", "EU"]},

{"year": 2022, "event": "Russia-Ukraine War", "countries": ["Russia", "Ukraine", "EU"]},
{"year": 2023, "event": "India-UAE CEPA & Israel-Hamas Conflict", "countries": ["India", "UAE"]},

{"year": 2014, "event": "EU Sanctions on Russia", "countries": ["Russia", "EU"]}
    ];

    const ctx = document.getElementById('tradeBalanceChart').getContext('2d');

    const datasets = Object.keys(data).map((country, index) => {
        return {
            label: country,
            data: data[country].map(d => ({x: d.Year, y: d[`${country} Trade Balance`]})),
            borderColor: `#39FF14`,
            fill: false,
            tension: 0.1,
            borderWidth: 2
        };
    });

    const eventLines = events.map((event, index) => {
        return {
            type: 'line',
            scaleID: 'x',
            value: event.year,
            borderColor: '#f0f2f5',
            borderWidth: 2,
            borderDash: [5, 5],
            label: {
                content: event.event,
                enabled: true,
                position: 'top',
                rotation: 90,
                backgroundColor: 'rgba(255, 99, 132, 0.25)',
                color: '#ffffff' // White text color
            },
            order: index + 10
        };
    });

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
    max: 2024,
    ticks: {
        stepSize: 1,
        callback: function(value, index, values) {
            const event = events.find(e => e.year === value);
            return event ? `${value} (${event.event})` : value;
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
    display: false // Hide the legend
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
    borderColor: '#00aaff', // Example color for lines
    backgroundColor: 'rgba(0, 170, 255, 0.2)' // Example background color for the lines
}
},
annotation: {
annotations: eventLines.map(line => ({
    ...line,
    borderColor: '#ff0000', // Example color for annotation lines
    borderWidth: 1,
    borderDash: [10, 5] // Example dash pattern
}))
}
}
}).update();

    // Positioning labels manually
    const canvas = document.getElementById('tradeBalanceChart');
    const rect = canvas.getBoundingClientRect();
    const eventLabelsContainer = document.getElementById('eventLabels');
    
    events.forEach(event => {
        const x = ctx.canvas.width * (event.year - ctx.scales['x-axis-0'].min) / (ctx.scales['x-axis-0'].max - ctx.scales['x-axis-0'].min);
        const y = 10;

        const label = document.createElement('div');
        label.className = 'event-label';
        label.style.left = `${rect.left + x}px`;
        label.style.top = `${rect.top + y}px`;
        label.textContent = event.event;

        eventLabelsContainer.appendChild(label);
    });
})
.catch(error => console.error('Error loading the data:', error));