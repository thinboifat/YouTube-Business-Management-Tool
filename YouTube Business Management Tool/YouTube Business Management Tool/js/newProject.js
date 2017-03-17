

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