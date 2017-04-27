//Pie chart for items pie chart
$(function () {

    var graph = Morris.Donut({
        element: 'morris-donut-chart',
        data: [{ label: 'No Items!', value: 1 }],
        colors: ["#AF2222", "#22AF22", "#2222AF", "#7F70c0", "#707F70", "#70007F"],
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

    //Morris bar chart for item stats (in and out).
    $.ajax({
        url: '../includes/itemsBarChart.php',
        'dataType': "json",
        success: function (response)          //on recieve of reply
        {
            Morris.Bar({
                element: 'morris-bar-chart',
                data: response,
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Items In', 'Items Out'],
                hideHover: 'auto',
                resize: true
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(
              'status:' + XMLHttpRequest.status +
              ', status text: ' + XMLHttpRequest.statusText
            );
            console.log(errorThrown);
        }

    });


    
});
