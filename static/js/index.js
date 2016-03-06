/**
 * Created by congyuandong on 16/3/6.
 */
chartOption = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
    },
    title: {
        text: null
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    credits: {
        enabled:false
    },
    series: [{
        type: 'pie',
        data: []

    }]
}

$(document).ready(function() {

    $.ajax({
        url:'/d/chart/',
        method:'get',
        dateType:'json',
        success: function(data){
            chartOption.series[0].data = data['knn'];
            $('#knnchart').highcharts(chartOption);
            chartOption.series[0].data = data['nb'];
            $('#nbchart').highcharts(chartOption);
            chartOption.series[0].data = data['lr'];
            $('#lrchart').highcharts(chartOption);
            chartOption.series[0].data = data['rf'];
            $('#rfchart').highcharts(chartOption);
            chartOption.series[0].data = data['svm'];
            $('#svmchart').highcharts(chartOption);
        },
    });
});
