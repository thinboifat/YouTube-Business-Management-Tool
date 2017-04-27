//Javascript functions for the dashboard page

//Init variables for filter
var completeFilter = 'complete';
var thirtydaysFilter = 0;
var alltimeFilter = 0;

//Change the database query when the user selects a filter
function filterToggle(filter) {
    
    if (filter == 'alltime') {
        if (alltimeFilter === 1) { alltimeFilter = 0; $('#' + filter).css('background-color', 'white'); }
        else {
            alltimeFilter = 1;
            $('#' + filter).css('background-color', '#ddddff');
            
        }
        getProjectContent();
    }
    if (filter == 'thirtydays') {
        if (thirtydaysFilter === 1) { thirtydaysFilter = 0; $('#' + filter).css('background-color', 'white');}
        else {
            thirtydaysFilter = 1;
            $('#' + filter).css('background-color', '#ddddff');
            
        }
        getProjectContent();
    }
    if (filter == 'complete') {
        if (completeFilter === "complete") { completeFilter = 'filter'; $('#' + filter).css('background-color', 'white'); }
        else {
            completeFilter = 'complete';
            $('#' + filter).css('background-color', '#ddddff');
        }
        getProjectContent();
    }
    if (filter === 'reset') {
        completeFilter = 'complete';
        thirtydaysFilter = 0;
        alltimeFilter = 0;
        $('#complete').css('background-color', '#ddddff');
        $('#thirtydays').css('background-color', 'white');
        $('#alltime').css('background-color', 'white');
        getProjectContent();
    }
}

//load the list of items from the database for display
function refreshItems() {
    getProjectContent();
    $('#itemForm')[0].reset();
}

//get the list of items
function getProjectContent() {
    var filter = ('completeFilter=' + completeFilter + '&thirtydaysFilter=' + thirtydaysFilter + '&alltimeFilter=' + alltimeFilter);

    $.ajax({
        type: "POST",
        url: '../includes/getActiveProjects.php',
        data: filter,
        success: function (projects)          //on recieve of reply
        {
            $("#currentProjects").html(projects);

        },
        error: function () {
            alert("Failure loading projects")
        }

    });
}

//On page load, get list of active projects
$(document).ready(function () {
    $.ajax({
        url: '../includes/dashboard.php',   
        
        success: function (data)          //on recieve of reply
        {
            //var project_name = data[0];              //get id
            //var category = data[1];
            var json = JSON.parse(data);

            // test code
            //$("#test").html(json["url"]);

            $("#activeProjects").html(json["activeProjects"]);
            $("#nonArchived").html(json["UnarchivedItems"]);
        }
    })
    getProjectContent();
});

