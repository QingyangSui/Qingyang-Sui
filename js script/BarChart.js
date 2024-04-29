document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Samoyed', 'Border Collie', 'Alaskan Malamute', 'Bernese Mountain', 'Golden Retriever'],
            datasets: [{
                label: 'Number of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
        
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                    
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,  // Make sure chart is responsive
            maintainAspectRatio: false,  // Adjust aspect ratio according to the size of container
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});