//side bar
document.getElementById("toggleSidebar")?.addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("open");
});
//
Highcharts.chart('application-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    subtitle: {
        text:
            ''
    },
    credits:{
        enabled: false
    },
    colors: ['#4b4bd4', '#586069'],
    exporting: {
         enabled: false
    }, 

    xAxis: {
        categories: ['Mar', 'Apr', 'May', 'June', 'Jul', 'Aug' , 'Sep','Oct'],
        crosshair: true,
        accessibility: {
            description: 'Months'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        borderRadius: '10',
        valueSuffix: ' (Applicants)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Applicants',
            data: [3873, 2800, 1290, 6430, 5400, 3430]
        },
       
    ],
    //responsive
    responsive:{
        rules:[{
            condition:{
                maxWidth:500
            },
            chartOptions:{
                legend:{enabled:false},
                xAxis: {
                    labels: {
                        style: { fontSize: '10px' }
                    }
                },
                 yAxis: {
                    labels: {
                        style: { fontSize: '10px' }
                    }
                }

            
            }

        }]
    }
});

Highcharts.chart('pie-chart', {
    chart: { type: 'pie', height: 250 },
    title: { text: '' },
    credits: { enabled: false },
    exporting: { enabled: false },

    plotOptions: {
        pie: {
            innerSize: '70%',   // BIG donut like image 2
            borderWidth: 0,
            dataLabels: { enabled: false }
        }
    },

    colors: ['#4b4bd4', '#7b7be8', '#a3a3f0', '#5b5bc5', '#6b6be2'],

    series: [{
        data: [
            ['Development', 35],
            ['Design', 25],
            ['Marketing', 20],
            ['Product', 10],
            ['Others', 10]
        ]
    }]
});



