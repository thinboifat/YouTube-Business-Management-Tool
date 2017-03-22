//On page load, get list of active projects
$(document).ready(function () {
    $.ajax({
        url: '../includes/getActiveProjects.php',

        success: function (projects)          //on recieve of reply
        {
            $("#currentProjects").html(projects);

        },
        error: function () {
            alert("Failure loading projects")
        }

    });
});