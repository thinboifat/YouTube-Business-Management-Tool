

//$(document).ready(function () {
//    $('input.projSub').typeahead({
//        name: 'typeahead',
//        remote: '../includes/subSearch.php?key=%QUERY',
//        limit: 10
//    });
//});

$(document).ready(function () {
    $('input.projClient').typeahead({
        name: 'typeahead',
        remote: '../includes/clientSearch.php?key=%QUERY',
        limit: 10
    });
});

//$(document).ready(function () {
//    $('input.projCat').typeahead({
//        name: 'typeahead',
//        remote: '../includes/catSearch.php?key=%QUERY',
//        limit: 10
//    });
//});

$(document).ready(function () {
    $("#submit").click(function () {

        var projectName = $("#projectName").val();
        var projectCategory = $("#projectCategory").val();
        var projectSubCategory = $("#projectSubCategory").val();
        var projectClient = $("#projectClient").val();
        var productionDate = $("#productionDate").val();
        var projectDetails = $("#projectDetails").val();
        //Insert query

        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'projectName=' + projectName + '&projectCategory=' + projectCategory + '&projectSubCategory=' + projectSubCategory + '&projectClient=' + projectClient + '&productionDate=' + productionDate + '&projectDetails=' + projectDetails;
        if (projectName == '' || projectCategory == '' || projectSubCategory == '') {
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
                    alert(result);
                }
            });
        }
        return false;
    });
});