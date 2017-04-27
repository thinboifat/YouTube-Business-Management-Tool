//Javascript for the live serach function

$(document).ready(function () {
    $('input.typeahead').typeahead({
        name: 'typeahead',
        remote: '../includes/search.php?key=%QUERY',
        limit: 10
    });
});
