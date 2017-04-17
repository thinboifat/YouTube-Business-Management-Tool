$(document).ready(function () {
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
                    alert('Success');
                }
            });
        }
        return false;
    });
});