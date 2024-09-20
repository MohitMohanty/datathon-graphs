const ctxs = document.getElementById('radarChart').getContext('2d');

const labels = [
    'India-US Strategic Partnership',
    'Operation Neptune Spear',
    'India-China Border Tensions',
    'Modi’s Defense Reforms',
    'India-France Rafale Deal',
    'Uri Attack and Surgical Strikes',
    'Doklam Standoff',
    'India-US COMCASA Agreement',
    'Balakot Air Strikes & Pulwama Attack',
    'India-China Galwan Valley Clash',
    'Quad Summit',
    'Russia-Ukraine War Impact',
    'India’s Indigenous Defense Expansion'
];

// Values for each event
const exportValues = [
    -0.143313056225476,
    -0.105834030706842,
    -0.0941807296132453,
    -0.0960593245287212,
    -0.140028103713517,
    -0.13199951233238,
    -0.110670833504176,
    -0.0838040528145444,
    -0.0934453548297768,
    -0.119656810828559,
    -0.0178711687105678,
    0.332510504384556,
    0.908811931129205
];

const importValues = [
    -0.14884596514266,
    -0.0947221776075162,
    -0.0966242204573137,
    -0.10743724651825,
    -0.14641735757227,
    -0.140470400448183,
    -0.10535813439904,
    -0.0689753652438175,
    -0.0838362923216701,
    -0.131698583478653,
    -0.0352908020819164,
    0.347588362796424,
    0.901881256906945
];

const tradeBalance = [
    0.154692192361399,
    0.0822657115313458,
    0.0991499471832953,
    0.119820479533648,
    0.153214701220435,
    0.149579831201166,
    0.0992933974085802,
    0.052456667955722,
    0.0730609677515653,
    0.14477162482062,
    0.0544843524931868,
    -0.36362551734602,
    -0.89258033203793
];

// const radarChart = new Chart(ctxs, {
//     type: 'radar',
//     data: {
//         labels: labels,
//         datasets: [
//             {
//                 label: 'Export Values',
//                 data: exportValues,
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Import Values',
//                 data: importValues,
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//             },
//             {
//                 label: 'Trade Balance',
//                 data: tradeBalance,
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 1,
//             }
//         ]
//     },
//     options: {
//         scales: {
//             r: {
//                 min: -1,
//                 max: 1, // Adjust as needed to fit your data range
//                 ticks: {
//                     stepSize: 0.5 // Adjust step size as needed
//                 }
//             }
//         },
//         elements: {
//             line: {
//                 tension: 0 // Disable bezier curves
//             }
//         },
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             tooltip: {
//                 mode: 'index',
//                 intersect: false,
//             }
//         }
//     }
// });
const radarChart = new Chart(ctxs, {
    type: 'radar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Export Values',
                data: exportValues,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
            {
                label: 'Import Values',
                data: importValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
            },
            {
                label: 'Trade Balance',
                data: tradeBalance,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            }
        ]
    },
    options: {
        scales: {  
            r: {
                min: -1,
                max: 1,
                ticks: {
                    stepSize: 0.5,
                    color: '#000' // Axis text color
                },
                grid: {
                    color: '#fff' // Optional: grid color
                },
                pointLabels: {
                    color: '#FFFFFF', // Labels color set to white
                    font: {
                        size: 12 // Optional: adjust the font size if needed
                    }
                },
                title: {
                    color: '#FFFFFF' // Axis title color (if any)
                }
            }
        },
        elements: {
            line: {
                tension: 0 // Disable bezier curves
            }
            
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#FFFFFF', // Legend text color
                    padding: 5 // Adjust padding to reduce gap
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                titleColor: '#FFFFFF', // Tooltip title color
                bodyColor: '#FFFFFF' // Tooltip body color
            }
        }
    }
});
