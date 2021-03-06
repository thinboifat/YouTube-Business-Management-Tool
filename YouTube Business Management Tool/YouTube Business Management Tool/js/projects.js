﻿//init global variables
var selectLoaded = 0;

// Set up the box to submit an update
function setUpSubmit() {
    $(document).ready(function () {
        $("#submit").click(function () {

            var projStatus = $("#projStatus").val();
            var details = $("#details").val();
            var actType = "Update";

            var newVideoURL = $("#videoURL").val();
            var linkedItemName = $("#item_name").val();
            var returnStatus = $("#itemStatus").val();

            if (projStatus === 'Production' || projStatus === 'Filmed' || projStatus === 'Edited') { actType = "Production" };
            if (projStatus === 'Published') { actType = "Publish" };
            if (projStatus === 'Complete') { actType = "Completion" };


            var projName = $("#videoList").val();
            //Insert query

            // Returns successful data submission message when the entered information is stored in database.
            var dataString = 'projName=' + projName + '&details=' + details + '&actType=' + actType + '&projStatus=' + projStatus + '&videoURL=' + newVideoURL + '&linkedItemName=' + linkedItemName + '&returnStatus=' + returnStatus;

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
                        getSelectionTimeline(videoList);
                        getSelectionStatus(videoList);
                        getActivityBar();
                        setUpSubmit();
                    }
                });
            }
            return false;
        });
    });
};

//Update the video elements on initial page load
$(document).ready(function () {
    $.ajax({
        url: '../includes/projectsDisplayBar.php',

        success: function (data)          //on recieve of reply
        {
            //var project_name = data[0];              //get id
            //var category = data[1];
            var json = JSON.parse(data);

            // test code
            //$("#test").html(json["url"]);

            $("#inProgress").html(json["incompleteProjects"]);
            $("#published").html(json["publishedVideos"]);
            $("#completed").html(json["completeProjects"]);

        }
    })
    updateVideoElements();

});

// When the user changes the project selection, update the page
function contentSwitch() {
    $(document).ready(function () {
        $("#videoList").change(function () {
                var videoList = $("#videoList").val();
                $("#projectName").html(videoList);
                getSelectionStatus(videoList);
                getSelectionTimeline(videoList);
                getActivityBar();
                setUpSubmit();
            
        });
    });
}

// On toggle switch, initialise the page
$(document).ready(function () {
    $('#contentSwitch').change(function () {
            var isProjectManager = $(this).prop('checked');

            if (isProjectManager === true) {
                updateVideoElements("true")
            }
            else {
                updateVideoElements("false")
            }


        })
    })


//Update all the div elements that use video project data
function updateVideoElements(isProjectManager) {

    if (isProjectManager === "false") {
        $("#projectName").html("New Project");
        $("#mainSectionHeader").html('<i class="fa fa-plus fa-fw"></i>');
        getProjectCreationHelp();
        getNewProjectContent();
        getCalendarContent();

        //$("#mainSectionHeader").html("New Project");

    }
    else {
        // Load project manager into HTML
        getManagerContent();
    }

}

//Load the sidebar for trends and video suggestions
function getProjectCreationHelp() {
    $("#upperPanel").html('<i class="fa fa-calendar fa-fw"></i> Trend Spotter');
    $("#projectStatus").html("<img src='../img/trends.png' width='100%' ></img>");
}

// Setup the div content for a new project form
function getNewProjectContent() {

    var projectContent = '<div class="col-lg-8 col-lg-offset-2"><form><div class="form-group"><label for="projectName">Project Name</label><input required type="text" class="form-control" id="newProjectName" placeholder="The name of your project" /></div><div class="form-group"><label for="projectName">Project Category</label><input required type="text" class="form-control projCat" id="newProjectCategory" placeholder="The type of video" name="category" /></div><div class="form-group"><label for="projectName">Project Subcategory</label><input type="text" required class="form-control projSub" id="newProjectSubCategory" placeholder="The sub-category of video" /></div><div class="form-group"><label for="projectName">Video Client</label><input type="text" class="form-control projClient" id="newProjectClient" placeholder="The client - (can be blank)" /></div><div class="form-group"><label for="projectName">Video Production Date</label><input type="date" class="form-control" id="newProductionDate" /></div><div class="form-group"><label for="details">Project Details</label><textarea class="form-control" id="newProjectDetails" rows="3"></textarea></div><button type="button" id="newProjectSubmit" class="btn btn-primary">Submit</button></form></div>'

    $("#mainBody").html(projectContent);

    $(document).ready(function () {
        $("#newProjectSubmit").click(function () {

            var newProjectName = $("#newProjectName").val();
            var newProjectCategory = $("#newProjectCategory").val();
            var newProjectSubCategory = $("#newProjectSubCategory").val();
            var newProjectClient = $("#newProjectClient").val();
            var newProductionDate = $("#newProductionDate").val();
            var newProjectDetails = $("#newProjectDetails").val();
            //Insert query

            // Returns successful data submission message when the entered information is stored in database.
            var dataString = 'projectName=' + newProjectName + '&projectCategory=' + newProjectCategory + '&projectSubCategory=' + newProjectSubCategory + '&projectClient=' + newProjectClient + '&productionDate=' + newProductionDate + '&projectDetails=' + newProjectDetails;
            if (newProjectName == '' || newProjectCategory == '' || newProjectSubCategory == '') {
                alert("Please Fill All Fields");
            }
            else {
                // AJAX Code To Submit Form.
                $.ajax({
                    type: "POST",
                    url: "../includes/ajaxsubmit.php",
                    data: dataString,
                    cache: false,
                    success: function (result) {
                        newManagerContent(newProjectName);
                        
                    }
                });
            }
            return false;
        });
    });
}

//Get the elements for the Project Manager screens of the projects webpage
function getManagerContent() {

    $.ajax({
        url: '../includes/getProjectsSelects.php',
        success: function (selectors)          //on recieve of reply
        {
            $("#mainSectionHeader").html(selectors);

            //check if url contains a link, and change select tab
            
            if (window.location.hash && selectLoaded === 0) {
                // Fragment exists
                var urlTag = window.location.hash.substr(1);
                document.getElementById("videoList").value = urlTag.split('_').join(' ');
                selectLoaded++;}
             else {}
                // Fragment doesn't exist
                var videoList = $("#videoList").val();
                $("#projectName").html(videoList);
            
            getSelectionStatus(videoList);
            getSelectionTimeline(videoList);
            getActivityBar();
            setUpSubmit();
            contentSwitch();
            
        },
        error: function () {
            alert("Fail")
        }

    });
}

//Load the project just made by the user
function newManagerContent(newName) {

    $.ajax({
        url: '../includes/getProjectsSelects.php',
        success: function (selectors)          //on recieve of reply
        {

            $("#mainSectionHeader").html(selectors);
            //$('#contentSwitch').bootstrapToggle('on');
            $("#projectName").html(newName);
            document.getElementById("videoList").value = newName;
            getSelectionStatus(newName);
            getSelectionTimeline(newName);
            getActivityBar();
            setUpSubmit();
            contentSwitch();
            

        },
        error: function () {
            alert("Fail")
        }

    });
}

// Update the Second Side Bar
function getCalendarContent() {
    $("#lowerPanel").html('<i class="fa fa-calendar fa-fw"></i> Calendar');
    $("#newActivity").html('<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=marcuswcole52%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon" style="border-width:0" width="100%" height="350" frameborder="0" scrolling="no"></iframe>');
}

// Update the Second Side Bar
function getActivityBar() {
    var actContent = '<form><div class="form-group"><label>New Status</label><select class="form-control" id="projStatus"><option></option><option>Planning</option><option>Awaiting Item</option><option>Pre-Production</option><option>Production</option><option>Filmed</option><option>Edited</option><option>Published</option><option>Item To Return</option><option>Complete</option></select></div><div id="additionalForms"></div><div class="form-group"><label for="details">Details</label><textarea class="form-control" id="details" rows="4"></textarea></div><button type="button" id="submit" class="btn btn-primary">Submit</button></form>';
    $("#lowerPanel").html('<i class="fa fa-plus fa-fw"></i> New Activity');
    $("#newActivity").html(actContent);
    activityLoader();
}

//get the selection status from the user and load the timeline
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
            output = output + "<div class='col-xs-6 col-md-6'> <h4> Status: </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 pull-right'><h4>" + ProjectStatus + "</h4> </div>";

            // Add project category
            output = output + "<div class='col-xs-6 col-md-6'> <h4> Category:  </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 pull-right'><h4>" + category + "</h4> </div>";

            // Add project category
            output = output + "<div class='col-xs-6 col-md-6'> <h4> Subcategory:  </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 col-md-offset-2 pull-right'><h4>" + subcategory + "</h4> </div>";

            //If the video has been created, mark as created
            if (created == "Y") {
                createStatus = "<i class='fa fa-check fa-fw'></i>"
                output = output + "<div class='col-xs-6 col-md-6 col-xs-6'> <h4> Created? </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 pull-right'><h4>" + createStatus + "  </h4> </div>";
        
            }
                //Else just state uncreated
            else {
                createStatus = "<i class='fa fa-times fa-fw'></i>"
                output = output + "<div class='col-xs-6 col-md-6 col-xs-6'> <h4> Created? </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 pull-right'><h4>" + createStatus + "  </h4> </div>";
            }

            //If the video has been published, mark as published and add the link
            if (publishStatus == "Y") {
                publishStatus = "<i class='fa fa-check fa-fw'></i>"
                output = output + "<div class='col-xs-6 col-md-6'> <h4> Published? </h4></div> <div class='col-xs-6 col-md-4 col-md-offset-2 pull-right'><h4>" + publishStatus + "  </h4> </div>";
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

            $("#upperPanel").html('<i class="fa fa-info-circle fa-fw"></i> Project Status');
            $("#projectStatus").html(output);

        },
        error: function () {
            alert("Failure loading timetime")
        }

    });
}
    function getSelectionTimeline(input) {
        
        $.ajax({
            url: '../includes/projectsTimeline.php',                     
            data: "project=" + $("#videoList").val(),

            success: function (data)          //on recieve of reply
            {
                //Prepare the output string for filling the ProjStatus div
                var output = "<ul class='timeline'>";

                output = output + data;

                //seal off the timeline
                output = output + "</ul>"

                $("#mainBody").html(output);

            },
            error: function () {
                alert("Fail")
            }

        });

    }

// When the user makes an activity selection, update form with additional options
    function activityLoader() {
        $(document).ready(function () {
            $("#projStatus").change(function () {
                var value = "";
                value = $("#projStatus option:selected").text();

                if (value === "Published") {
                    $("#additionalForms").html($('<div class="form-group"><label for="videoURL">YouTube URL</label> <textarea class="form-control" id="videoURL" placeholder="The YouTube Video Code" rows="1"></textarea> </div>'));
                }
                else if (value === "Complete") {
                    $("#additionalForms").html('<div class="form-group"> <label>Item Status</label> <select class="form-control" id="itemStatus"> <option>Returned</option> <option>Archived</option></select></div>')
                }
                else if (value === "Awaiting Item" | value === "Pre-Production") {
                    getItemList();
                }
                else { $("#additionalForms").html($('')); }
            });
        });
    };

// Get the list of items when the user uses the activity selction
    function getItemList() {
        $.ajax({
            url: '../includes/getItemNames.php',

            success: function (returnedItems)          //on recieve of reply
            {
                $("#additionalForms").html(returnedItems);

            },
            error: function () {
                alert("Fail")
            }

        });
    }