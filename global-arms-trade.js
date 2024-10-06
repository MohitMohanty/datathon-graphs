
const importCtxA = document.getElementById('importAPieChart').getContext('2d');
const importAPieChart = new Chart(importCtxA, {
    type: 'pie',
    data: {
        labels: ['India', 'China', 'Saudi Arabia', 'Egypt', 'Japan'],
        datasets: [{
            label: 'Import Share (%)',
            data: [6.5, 4, 3.7, 3.5, 3.4],
            backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56', '#4bc0c0', '#9966ff'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'  // Legend labels color
                },
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                formatter: (value) => `${value}%`
            }
        }
    },
    plugins: [ChartDataLabels] // Register the datalabels plugin
});

// Export Pie Chart
const exportCtxA = document.getElementById('exportAPieChart').getContext('2d');
const exportAPieChart = new Chart(exportCtxA, {
    type: 'pie',
    data: {
        labels: ['United States', 'Soviet Union', 'Russia', 'United Kingdom', 'France'],
        datasets: [{
            label: 'Export Share (%)',
            data: [36, 22, 7.6, 7.1, 6.7],
            backgroundColor: ['#ff9f40', '#ffcd56', '#36a2eb', '#4bc0c0', '#9966ff'],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'  // Legend labels color
                },
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.label || '';
                        const value = tooltipItem.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                formatter: (value) => `${value}%`
            },
            font: {
                weight: 'bold',
                size: 16
            }
        }
    },
    plugins: [ChartDataLabels] // Register the datalabels plugin
});