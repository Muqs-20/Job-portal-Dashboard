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
        valueSuffix: ' (3500 Job Applicants)'
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
        {
            name: 'Total user',
            data: [4532, 1400, 1000, 14050, 1950, 11350]
        }
    ],
    responsive:{
        rules:[{
            condition:{
                maxWidth:500
            },
            chartOptions:{
                legend:{enabled:false}
            }

        }]
    }
});
