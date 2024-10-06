// FDI data
const fdiData = [
    { year: 1970, fdi: 0.072826 },
    { year: 1971, fdi: 0.070763 },
    { year: 1972, fdi: 0.024893 },
    { year: 1973, fdi: 0.044330 },
    { year: 1974, fdi: 0.057241 },
    { year: 1975, fdi: -0.010486 },
    { year: 1976, fdi: -0.007503 },
    { year: 1977, fdi: -0.029682 },
    { year: 1978, fdi: 0.013175 },
    { year: 1979, fdi: 0.031746 },
    { year: 1980, fdi: 0.042484 },
    { year: 1981, fdi: 0.047506 },
    { year: 1982, fdi: 0.035912 },
    { year: 1983, fdi: 0.002584 },
    { year: 1984, fdi: 0.009069 },
    { year: 1985, fdi: 0.045628 },
    { year: 1986, fdi: 0.047284 },
    { year: 1987, fdi: 0.076091 },
    { year: 1988, fdi: 0.030766 },
    { year: 1989, fdi: 0.085157 },
    { year: 1990, fdi: 0.073740 },
    { year: 1991, fdi: 0.027226 },
    { year: 1992, fdi: 0.095942 },
    { year: 1993, fdi: 0.197056 },
    { year: 1994, fdi: 0.297387 },
    { year: 1995, fdi: 0.594986 },
    { year: 1996, fdi: 0.617479 },
    { year: 1997, fdi: 0.860209 },
    { year: 1998, fdi: 0.625286 },
    { year: 1999, fdi: 0.472644 },
    { year: 2000, fdi: 0.765212 },
    { year: 2001, fdi: 1.056380 },
    { year: 2002, fdi: 1.011569 },
    { year: 2003, fdi: 0.605888 },
    { year: 2004, fdi: 0.765597 },
    { year: 2005, fdi: 0.886098 },
    { year: 2006, fdi: 2.130168 },
    { year: 2007, fdi: 2.073394 },
    { year: 2008, fdi: 3.620523 },
    { year: 2009, fdi: 2.651590 },
    { year: 2010, fdi: 1.635034 },
    { year: 2011, fdi: 2.002063 },
    { year: 2012, fdi: 1.312935 },
    { year: 2013, fdi: 1.516276 },
    { year: 2014, fdi: 1.695660 },
    { year: 2015, fdi: 2.092115 },
    { year: 2016, fdi: 1.937364 },
    { year: 2017, fdi: 1.507316 },
    { year: 2018, fdi: 1.558215 },
    { year: 2019, fdi: 1.784826 },
    { year: 2020, fdi: 2.406203 },
    { year: 2021, fdi: 1.412171 },
    { year: 2022, fdi: 1.489211 },
    { year: 2023, fdi: 0.790728 }
];

// Key events
const keyEvents = {
    2020: "COVID-19 Pandemic",
    2006: "Relaxation in Retail Sector",
    2007: "Global Financial Crisis",
    2011: "FDI in Multi-Brand Retail",
    2016: "FDI in Aviation and Defense",
    2019: "FDI in Insurance",
    2014: "Modi Govt Reforms",
    1991: "Economic Liberalization",
    1973: "FERA",
    2017: "GST Implementation",
    2022: "FDI Reforms in Telecom"
};

// Create FDI chart
const ctx_fda = document.getElementById('fdiChartss').getContext('2d');

const fdiDatasets = [
    {
        label: 'Foreign Direct Investment (Net Inflows) as % of GDP',
        data: fdiData.map(d => ({ x: d.year, y: d.fdi })),
        borderColor: '#1E90FF', // Dodger Blue
        backgroundColor: 'rgba(30, 144, 255, 0.1)', // Light blue background
        fill: true,
        tension: 0.2,
        borderWidth: 2
    }
];

// Create event lines for annotations
const fdiEventLines = Object.keys(keyEvents).map(eventYear => ({
    type: 'line',
    scaleID: 'x',
    value: parseInt(eventYear),
    borderColor: '#FF6347', // Tomato
    borderWidth: 1,
    borderDash: [10, 5],
    label: {
        content: keyEvents[eventYear],
        enabled: true,
        position: 'top',
        rotation: 90,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background
        color: '#FF4500' // OrangeRed text color
    },
    order: 10
}));

// Initialize chart
new Chart(ctx_fda, {
    type: 'line',
    data: {
        datasets: fdiDatasets
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 1970,
                max: 2023,
                ticks: {
                    stepSize: 1, // Display every year
                    callback: function(value) {
                        // Display the event name if it matches a key event year
                        return keyEvents[value] ? `${value}\n${keyEvents[value]}` : value;
                    },
                    color: '#666'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'FDI as % of GDP',
                    color: '#333'
                },
                ticks: {
                    color: '#666'
                }
            }
        },
        plugins: {
            legend: {                    
                display: true // Show the legend
            },
            annotation: {
                annotations: fdiEventLines
            },
            title: {
                display: true,
                text: 'FDI Inflows in India and Key Policy Events',
                color: '#333'
            },
            tooltip: {
                enabled: true,
                mode: 'nearest',
                intersect: false,
                callbacks: {
                    label: function(context) {
                        const event = keyEvents[context.raw.x];
                        return event ? event : context.dataset.label + ': ' + context.raw.y;
                    }
                }
            }
        }
    }
});
