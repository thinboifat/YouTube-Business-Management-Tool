//Morris area chart for views and channel stats on analytics page
$(function () {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016-11',
            Views: 482738,
            subscribers: 2102
        }, {
            period: '2016-12',
            Views: 457384,
            subscribers: 2294
        }, {
            period: '2017-01',
            Views: 391232,
            subscribers: 1969
        }, {
            period: '2017-02',
            Views: 504912,
            subscribers: 2932
        }, {
            period: '2017-03',
            Views: 404912,
            subscribers: 2149
        }, {
            period: '2017-04',
            Views: 603767,
            subscribers: 3597
        }],
        xkey: 'period',
        ykeys: ['Views', 'subscribers' ],
        labels: ['Views', 'subscribers'],
        xLabels: 'month',
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    //Morris area chart for revenue stats on analytics page
    Morris.Area({
        element: 'morris-revenue-chart',
        data: [{
            period: '2017-04-01',
            Revenue: 378.44
        }, {
            period: '2017-04-02',
            Revenue: 457.84
        }, {
            period: '2017-04-03',
            Revenue: 391.32
        }, {
            period: '2017-04-04',
            Revenue: 504.92
        }, {
            period: '2017-04-05',
            Revenue: 404.12
        }, {
            period: '2017-04-06',
            Revenue: 603.77
        }],
        xkey: 'period',
        ykeys: ['Revenue'],
        labels: ['Revenue'],
        lineColors: ['#33aa33'],
        xLabels: 'day',
        preUnits: ['$'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });
});
