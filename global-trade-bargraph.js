 // Correlation data calculated (mockup, replace with real data)
 const eventCorrelations = {
    "Russia-Ukraine War": -0.6326,
    "India-UAE CEPA & Israel-Hamas Conflict": -0.5587,
    "9/11 Attacks": 0.1783,
    "Kargil War": 0.1757,
    "Arab Spring & Fukushima Nuclear Disaster": -0.0946,
    "Abrogation of Article 370": -0.0604,
    "Brexit & COVID-19 Pandemic": 0.0308,
    "Modi's Economic Reforms & Collapse of Global Oil Prices": -0.0235,
    "Taper Tantrum": -0.0207,
    "Demonetization": 0.0195,
    "Global Financial Crisis & Mumbai Attacks": 0.0063,
    "China’s Economic Slowdown": 0.0040,
    "Eurozone Debt Crisis": 0.0039
};

// // Extract event names and correlation values
// const eventLabels = Object.keys(eventCorrelations);
// const eventValues = Object.values(eventCorrelations);

// // Create the heatmap using Chart.js
// const ctx = document.getElementById('correlationChart').getContext('2d');
// const chart = new Chart(ctx, {
//     type: 'bar',  // Using a bar chart for simplicity
//     data: {
//         labels: eventLabels,
//         datasets: [{
//             label: 'Correlation with Trade Balance',
//             data: eventValues,
//             backgroundColor: eventValues.map(value => value > 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'),
//             borderColor: eventValues.map(value => value > 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 min: -1,
//                 max: 1,
//                 title: {
//                     display: true,
//                     text: 'Correlation Coefficient'
//                 }
//             }
//         },
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Correlation between Geopolitical Events and India\'s Trade Balance'
//             }
//         }
//     }
// });




        // // Extract event names and correlation values
        // const eventLabels = Object.keys(eventCorrelations);
        // const eventValues = Object.values(eventCorrelations);

        // // Create the horizontal bar chart using Chart.js
        // const ctx = document.getElementById('correlationChart').getContext('2d');
        // const chart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: eventLabels,
        //         datasets: [{
        //             label: 'Correlation with Trade Balance',
        //             data: eventValues,
        //             backgroundColor: eventValues.map(value => value > 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'),
        //             borderColor: eventValues.map(value => value > 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         indexAxis: 'y', // This makes it a horizontal bar chart
        //         responsive: true,
        //         scales: {
        //             x: {
        //                 beginAtZero: true,
        //                 min: -1,
        //                 max: 1,
        //                 ticks: {
        //                     color: '#ffffff' // White x-axis labels
        //                 },
        //                 title: {
        //                     display: true,
        //                     text: 'Correlation Coefficient',
        //                     color: '#ffffff' // White axis title
        //                 }
        //             },
        //             y: {
        //                 ticks: {
        //                     color: '#ffffff' // White y-axis labels
        //                 }
        //             }
        //         },
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'Correlation between Geopolitical Events and India\'s Trade Balance',
        //                 color: '#ffffff' // White chart title
        //             },
        //             legend: {
        //                 labels: {
        //                     color: '#ffffff' // White legend labels
        //                 }
        //             }
        //         }
        //     }
        // });




        // Extract event names and correlation values
        const eventLabels = Object.keys(eventCorrelations);
        const eventValues = Object.values(eventCorrelations);

        // Separate positive and negative values
        const positiveEventValues = eventValues.map(value => value > 0 ? value : 0);
        const negativeEventValues = eventValues.map(value => value < 0 ? value : 0);

        // Create the horizontal bar chart using Chart.js
        const ctx = document.getElementById('correlationChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: eventLabels,
                datasets: [
                    {
                        label: 'Positive Correlation',
                        data: positiveEventValues,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green for positive values
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 3
                    },
                    {
                        label: 'Negative Correlation',
                        data: negativeEventValues,
                        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red for negative values
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 3
                    }
                ]
            },
            options: {
                indexAxis: 'y', // This makes it a horizontal bar chart
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        min: -0.8,
                        max: 0.6,
                        ticks: {
                            color: '#ffffff' // White x-axis labels
                        },
                        title: {
                            display: true,
                            text: 'Correlation Coefficient',
                            color: '#ffffff' // White axis title
                        }
                    },
                    y: {
                        ticks: {
                            color: '#ffffff' // White y-axis labels
                        }
                    }
                },
                plugins: {
                    // title: {
                    //     display: true,
                    //     text: '',
                    //     color: '#ffffff' // White chart title
                    // },
                    legend: {
                        labels: {
                            color: '#ffffff' // White legend labels
                        }
                    }
                }
            }
        });