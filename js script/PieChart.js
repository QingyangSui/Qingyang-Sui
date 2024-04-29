document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Samoyed', 'Border Collie', 'Alaskan Malamute', 'Bernese Mountain', 'Golden Retriever'],
            datasets: [{
                data: [15, 18, 5, 8, 10],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Puppy Love Pie Chart'
                }
            }
        }
    });
});