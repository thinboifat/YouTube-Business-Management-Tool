
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