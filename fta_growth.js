const labels = [
    "SAFTA (2006) Pre-FTA", "SAFTA (2006) Post-FTA", 
    "AIFTA (2009) Pre-FTA", "AIFTA (2009) Post-FTA", 
    "ISLFTA (2000) Pre-FTA", "ISLFTA (2000) Post-FTA", 
    "CECA Singapore (2005) Pre-FTA", "CECA Singapore (2005) Post-FTA", 
    "CEPA South Korea (2010) Pre-FTA", "CEPA South Korea (2010) Post-FTA",
    "CEPA Japan (2011) Pre-FTA", "CEPA Japan (2011) Post-FTA",
    "CECPA Mauritius (2021) Pre-FTA", "CECPA Mauritius (2021) Post-FTA",
    "CEPA UAE (2022) Pre-FTA", "CEPA UAE (2022) Post-FTA",
    "ECTA Australia (2022) Pre-FTA", "ECTA Australia (2022) Post-FTA",
    "CECA Malaysia (2011) Pre-FTA", "CECA Malaysia (2011) Post-FTA",
    "EHS Thailand (2004) Pre-FTA", "EHS Thailand (2004) Post-FTA"
];

const allData = [
    202.93, 354.55, // SAFTA
    -1667.11, -3084.13, // AIFTA
    52.88, 50.64, // ISLFTA
    229.68, 623.88, // CECA Singapore
    -3219.94, -4236.73, // CEPA South Korea
    -651.4, -2043.59, // CEPA Japan
    42.43, 64.95, // CECPA Mauritius
    -8605.45, -11816.63, // CEPA UAE
    -8697.48, -12766.68, // ECTA Australia
    -651.4, -2043.59, // CECA Malaysia
    26.19, 49.58 // EHS Thailand
];

const colors = [
    '#1f77b4', '#1f77b4', '#ff7f0e', '#ff7f0e', '#2ca02c', '#2ca02c', '#d62728', '#d62728', 
    '#9467bd', '#9467bd', '#8c564b', '#8c564b', '#e377c2', '#e377c2', '#7f7f7f', '#7f7f7f',
    '#bcbd22', '#bcbd22', '#17becf', '#17becf', '#1f77b4', '#1f77b4'
];

const ctx_fta = document.getElementById('ftaChart').getContext('2d');
const ftaChart = new Chart(ctx_fta, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Trade Balance (in million USD)',
            data: allData,
            backgroundColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            labels: {
                color: 'white'  // Legend labels color
            },
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} million USD`;
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 45,
                    minRotation: 45
                },
                ticks: {
                    color: '#fff'
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Trade Balance (in million USD)',
                    color: '#fff'

                },
                ticks: {
                    color: '#fff'
                }
            }
        }
    }
});

// Function to calculate Growth % and CAGR and display it in the side panel
function displayGrowthAndCagr() {
    const growthCagrList = document.getElementById('growthCagrList');

    for (let i = 1; i < allData.length; i += 2) {
        const preValue = allData[i - 1];
        const postValue = allData[i];
        const growth = ((postValue - preValue) / Math.abs(preValue)) * 100; // Growth %
        const n = 3; // Number of years for CAGR
        const cagr = (((postValue / preValue) ** (1 / n)) - 1) * 100; // CAGR %

        // Create the color block div
        const colorBlock = document.createElement('div');
        colorBlock.className = 'color-block';

        const colorBox = document.createElement('div');
        colorBox.style.backgroundColor = colors[i]; // Use the post-FTA bar color
        colorBlock.appendChild(colorBox);

        const label = document.createElement('span');
        label.innerHTML = `
            <span class="growth-label">Growth: ${growth.toFixed(2)}%</span><br>
            <span class="cagr-label">CAGR: ${cagr.toFixed(2)}%</span>
        `;

        colorBlock.appendChild(label);

        growthCagrList.appendChild(colorBlock);
    }
}

// Call the function to display Growth and CAGR values in the side panel
displayGrowthAndCagr();

ftaChart.update();