//Init variables for filter
var unassignedFilter = true;
var assignedFilter = true;
var archivedFilter = true;
var searchFilter = '';
var rowLock = 0;
var activeRow = 0;

//Change the database query when the user selects a filter
function filterToggle(filter) {
    if (filter === 'unassign') {
        if (unassignedFilter === true) { unassignedFilter = false; $('#' + filter).css('background-color', 'white'); }
        else {
            unassignedFilter = true;
            $('#' + filter).css('background-color', '#ddddff');
        }
        getManagerContent();
    }
    if (filter === 'assign') {
        if (assignedFilter === true) { assignedFilter = false; $('#' + filter).css('background-color', 'white'); }
        else {
            assignedFilter = true;
            $('#' + filter).css('background-color', '#ddddff');
        }
        
        getManagerContent();
    }
    if (filter === 'archive') {
        if (archivedFilter === true) { archivedFilter = false; $('#' + filter).css('background-color', 'white'); }
        else {
            archivedFilter = true;
            $('#' + filter).css('background-color', '#ddddff');
        }
        getManagerContent();
    }
    if (filter === 'reset') {
        unassignedFilter = true;
        archivedFilter = true;
        assignedFilter = true;
        searchFilter = '';
        $('#archive').css('background-color', '#ddddff');
        $('#assign').css('background-color', '#ddddff');
        $('#unassign').css('background-color', '#ddddff');
        $('#itemSearch').val('');
        getManagerContent();
    }
}

//load the list of items from the database for display
function refreshItems() {
    getManagerContent();
    $('#itemForm')[0].reset();
}

//on initial load, set up the page for item display, and form submission
$(document).ready(function () {
    $('#itemSearch').on('keyup', function () {
        
            searchFilter = this.value;
            //alert(searchFilter);
            getManagerContent();
        
    });

    $.ajax({
        url: '../includes/itemsDashboard.php',

        success: function (data)          //on recieve of reply
        {
            //var project_name = data[0];              //get id
            //var category = data[1];
            var json = JSON.parse(data);

            // test code
            //$("#test").html(json["url"]);

            $("#unassigned").html(json['UnassignedItems']);
            $("#assigned").html(json['AssignedItems']);
            $("#published").html(json['PublishedItems']);
            $("#archived").html(json['ArchivedItems']); 


        }
    })

    getManagerContent();
    $("#newItemSubmit").click(function () {

        var newItemName = $("#newItemName").val();
        var newItemCategory = $("#newItemCategory").val();
        var newItemSubCategory = $("#newItemSubCategory").val();
        var newItemBrand = $("#newitemBrand").val();
        var newItemSender = $("#newItemSender").val();
        var newItemShipDate = $("#newItemShipDate").val();
        var newItemReturnDate = $("#newItemReturnDate").val();
        var newItemDetails = $("#newItemDetails").val();
        //Insert query

        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'newItemName=' + newItemName + '&newItemCategory=' + newItemCategory + '&newItemSubCategory=' + newItemSubCategory + '&newItemBrand=' + newItemBrand + '&newItemSender=' + newItemSender + '&newItemShipDate=' + newItemShipDate + '&newItemReturnDate=' + newItemReturnDate + '&newItemDetails=' + newItemDetails;
        if (newItemName == '' || newItemCategory == '' || newItemSubCategory == '') {
            alert("Please Fill All Fields");
        }
        else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST",
                url: "../includes/itemSubmit.php",
                data: dataString,
                cache: false,
                success: function (result) {
                    refreshItems();
                    alert(newItemName + ' added to inventory.')
                }
            });
        }
        return false;
    });
});

//get the list of items
function getManagerContent() {
    var filter = ('unassignedFilter=' + unassignedFilter + '&assignedFilter=' + assignedFilter + '&archivedFilter=' + archivedFilter + '&searchFilter=' + searchFilter);

    $.ajax({
        type: "POST",
        url: '../includes/itemsTable.php',
        data: filter,
        success: function (table)          //on recieve of reply
        {
            $("#itemsTable").html(table);

        },
        error: function () {
            alert("Fail")
        }

    });
}

function enableEdit(element) {
    var ID = "#row" + element;
    var icon = "#icon" + element;
    var itemID = $(icon).attr('name')

    if (rowLock === 1) {
        rowLock --;
        $(ID).prop('contentEditable', false);
        $(ID).css('font-weight', "normal");
        $(ID).children().removeClass("highlight");
        if (element % 2 == 0) {
            $(ID).css("background-color", "#f8f8f8");
        }
        else { $(ID).css("background-color", "#fff") }
        $(icon).removeClass("fa-save");
        $(icon).addClass("fa-pencil");
        $(icon).click(saveChanges(itemID, ID));

        var date = $(ID).children().eq(7).children(0).val();
        var archived = $(ID).children().eq(8).children(0).val();
        var project = $(ID).children().eq(3).children(0).val();

        if (date === "" || date === null)
        { date = '-' }

        if (project === "" || project === null)
        { project = '-' }

        $(ID).children().eq(7).html(date)
        $(ID).children().eq(8).html(archived)
        $(ID).children().eq(3).html(project)
    }

        // Lock editing to prevent multiple rows from being edited
    else {
        rowLock++;
        $(ID).prop('contentEditable', true);
        $(ID).prop('spellcheck', false);
        $(ID).css('font-weight', "bolder");
        $(ID).children().addClass("highlight");
        $(ID).css("background-color", "#e9e9ff");
        $(icon).removeClass("fa-pencil");
        $(icon).addClass("fa-save");

        var archive = $(ID).children().eq(8).text();
        var project = $(ID).children().eq(3).text();
        var date = $(ID).children().eq(7).text();

        $(ID).children().eq(7).html('<input type="date" class="form-control">')
        $(ID).children().eq(8).html('<select class="form-control"><option value="N">N</option><option value="Y">Y</option></select')
        $(ID).children().eq(3).html('<select id="projects" class="form-control"></select')

        $(ID).children().eq(8).children(0).val(archive);
        $(ID).children().eq(7).children(0).attr('value', date);
        
        $.ajax({
            url: '../includes/getActiveProjectSelect.php',
            success: function (selectors)          //on recieve of reply
            {
                $("#projects").html(selectors);
                $(ID).children().eq(3).children(0).val(project);

            },
            error: function () {
                alert("Fail")
            }

        });

    }
}

function saveChanges(element, id) {
    
    var Item_Name = $(id).children().eq(0).text();
    var Brand = $(id).children().eq(1).text();
    var Sender = $(id).children().eq(2).text();
    var ProjectName = $(id).children().eq(3).children(0).val();
    var Category          = $(id).children().eq(4).text();
    var Subcategory       = $(id).children().eq(5).text();
    var Brand             = $(id).children().eq(1).text();
    var Sender            = $(id).children().eq(2).text();
    var Details           = $(id).children().eq(6).text();
    var Date_Returnable   = $(id).children().eq(7).children(0).val();
    var Archived = $(id).children().eq(8).children(0).val();
    if (Date_Returnable === "" || Date_Returnable === null)
    { Date_Returnable = '-' }
    var data = ('item_id=' + element + '&Item_Name=' + Item_Name + '&Category=' + Category + '&Subcategory=' + Subcategory + '&Brand=' + Brand + '&Sender=' + Sender + '&Details=' + Details + '&Date_Returnable=' + Date_Returnable + '&Archived=' + Archived + '&ProjectName=' + ProjectName);
    console.log(data);

    $.ajax({
        type: "POST",
        url: '../includes/updateItem.php',
        data: data,
        success: function (response)          //on recieve of reply
        {
            console.log(response);

        },
        error: function () {
            alert("Failure updating items")
        }

    });
}
