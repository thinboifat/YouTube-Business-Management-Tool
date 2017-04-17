$(function() {

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


    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'December',
            a: 2016.33,
            b: 1846.96
        },
       
        {
            y: 'January',
            a: 2104.77,
            b: 1858.28
        },
        {
            y: 'February',
            a: 2075.09,
            b: 1765.53
        }, {
            y: 'March',
            a: 2350.09,
            b: 1940.01
        }, {
            y: 'April',
            a: 2575.91,
            b: 2065.43
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Income', 'Expenditure'],
        hideHover: 'auto',
        resize: true
    });
    
});
