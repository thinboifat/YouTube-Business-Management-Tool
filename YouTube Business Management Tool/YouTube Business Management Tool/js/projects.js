
$(document).ready(function () {
    $("#submit").click(function () {

        var projStatus = $("#projStatus").val();
        var details = $("#details").val();

        var actType = "Update";
        var projName = $("#videoList").val();
        //Insert query

        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'projName=' + projName + '&details=' + details + '&actType=' + actType + '&projStatus=' + projStatus;

        if (details == '') {
            alert("Please add details");
        }
        else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "../includes/activitySubmit.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    alert(result);
                }
            });
        }
        return false;
    });
});

//Update the video elements on initial page load
$(document).ready(function() {
    updateVideoElements()

});

// When the user changes the project selection, update the page
$(document).ready(function () {
    $("#videoList").change(function () {
        updateVideoElements();
    });
});

//Update all the div elements that use video project data
function updateVideoElements() {
    var videoList = $("#videoList").val();
    var projectStatus = "test";

    $("#projectName").html(videoList);
    getSelectionStatus(videoList);


}

function getSelectionStatus(input) {
   
    $.ajax({
        url: '../includes/projectStatus.php',                  //the script to call to get data          
        data: "project=" + $("#videoList").val(),                        //you can insert url arguments here to pass to php
        //contentType: "application/json",//note the contentType defintion
        //dataType: JSON,
        //for example "id=5&parent=6"
        success: function (data)          //on recieve of reply
        {
            //var project_name = data[0];              //get id
            //var category = data[1];
            var json = JSON.parse(data);

            // test code
            //$("#test").html(json["url"]);

            var videoURL = json["url"];
            var ProjectStatus = json["status"];
            var publishStatus = json["is_live"];
            var category = json["category"];
            var subcategory = json["subcategory"];
            var created = json["created"];

            //Prepare the output string for filling the ProjStatus div
            var output = "";

            // Add project status
            output = output + "<div class='col-lg-8'> <h4> Project Status: </h4></div> <div class='col-lg-4'><h4>" + ProjectStatus + "</h4> </div>";

            // Add project category
            output = output + "<div class='col-lg-8'> <h4> Category:  </h4></div> <div class='col-lg-4'><h4>" + category + "</h4> </div>";

            // Add project category
            output = output + "<div class='col-lg-8'> <h4> Subcategory:  </h4></div> <div class='col-lg-4'><h4>" + subcategory + "</h4> </div>";

            //If the video has been created, mark as created
            if (created == "y") {
                createStatus = "<i class='fa fa-check fa-fw'></i>"
                output = output + "<div class='col-lg-8'> <h4> Created? </h4></div> <div class='col-lg-4'><h4>" + createStatus + "  </h4> </div>";
        
            }
                //Else just state uncreated
            else {
                createStatus = "<i class='fa fa-times fa-fw'></i>"
                output = output + "<div class='col-lg-8'> <h4> Created? </h4></div> <div class='col-lg-4'><h4>" + createStatus + "  </h4> </div>";
            }

            //If the video has been published, mark as published and add the link
            if (publishStatus == "Y") {
                publishStatus = "<i class='fa fa-check fa-fw'></i>"
                output = output + "<div class='col-lg-8'> <h4> Published? </h4></div> <div class='col-lg-4'><h4>" + publishStatus + "  </h4> </div>";
                //If video has a publish URL, post the link;
                if (videoURL != "" && videoURL != null) {
                    output = output + "<iframe width='100%' height='200px;' src='https://www.youtube.com/embed/" + videoURL + "' frameborder='0' allowfullscreen></iframe>";
                }

            }
            //Else just state unpublished
            else {
                publishStatus = "<i class='fa fa-times fa-fw'></i>"
                output = output + "<div class='col-lg-8'> <h4> Published? </h4></div> <div class='col-lg-4'><h4>" + publishStatus + "  </h4> </div>";
            }

    
            $("#projectStatus").html(output);

        },
        error: function () {
            alert("Fail")
        }

    });
}