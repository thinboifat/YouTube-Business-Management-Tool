
$(function () {

    var graph = Morris.Donut({
        element: 'morris-donut-chart',
        data: [{ label: 'No Items!', value: 1 }],
        colors: ["#AF2222", "#22AF22", "#2222AF", "#7F7000", "#707F00", "#70007F"],
        resize: true
    });

    $.ajax({
        url: '../includes/itemsPieChart.php',
        'dataType': "json",
        success: function (response)          //on recieve of reply
        {
            graph.setData(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              'status:' + XMLHttpRequest.status +
              ', status text: ' + XMLHttpRequest.statusText
            );
            console.log(errorThrown);
        }

    });


    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
