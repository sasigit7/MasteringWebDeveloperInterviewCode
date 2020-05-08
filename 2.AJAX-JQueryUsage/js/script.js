$(function () {
    $('.load-info').on('click', function () {
        $.ajax({
            method: 'GET',
            url: 'js/data_artists.json',
            dataType: 'json'
        }).done(function (data) {
            $.each(data.artists, function (key, val) {
                $('.artists-info')
                    .append('<li>' + 'My name is ' + val.name +  '</li>');
                $('.artists-info')
                    .append('<li>' + val.bio + '</li>');
                $('.artists-info')
                    .append('<li>' + val.shortname + '</li>');
                $('.artists-info')
                    .append('<li>' + val.reknown + '</li>');
            }); // each
        }); // ajax done
    }); // click event 
}); // JQuery ready

