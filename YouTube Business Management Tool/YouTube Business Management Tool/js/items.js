//Init variables for filter
var unassignedFilter = true;
var assignedFilter = true;
var archivedFilter = true;
var searchFilter = '';

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