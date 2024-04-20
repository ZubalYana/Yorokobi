  // JavaScript code for creating the line chart
  document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myLineChart').getContext('2d');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sales',
                data: [500, 600, 750, 900, 800],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area fill color
                borderColor: 'rgba(54, 162, 235, 1)', // Line color
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});