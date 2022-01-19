$(document).ready(main());

function main() {
    $('.button-submit').prop('disabled', true);

    /**
     *  Listeners
     */

    $('#addform').submit(function () {
        $('#username').prop('readonly', false);

        $('#password-again').prop('readonly', false);
    });

    $('#password').change(function () {
        checkPasswordMatch();
    });

    $('#password-again').change(function () {
        checkPasswordMatch();
    });

    $('#email').keyup(function () {
        checkEmailFormat();
    });

    /**
     *  Calling functions
     */

    populateUserLists();
    populateStatesList();

    /**
     * If table exists (if popis.html is opened)
     * do the following.
     */
    if ($('#table').length) {
        $('#table').DataTable();
        $('.col-1').css('width', '90%');
        $('.col-1').css('padding', '0 5% 0 5%');
    }
}

/**
 *  Autocomplete
 */

$('#name').autocomplete({
    source: names,
});

$('#surname').autocomplete({
    source: surnames,
});

function populateStatesList() {
    var jsonFilePath = '../json/states.json';

    $.getJSON(jsonFilePath, function (data) {
        $('#state').autocomplete({
            source: data,
        });
    });
}

function checkPasswordMatch() {
    if ($('#password').val() != $('#password-again').val()) {
        setWarningColor('#password');
        setWarningColor('#password-again');
        $('.button-submit').prop('disabled', true);
    } else {
        setNormalColor('#password');
        setNormalColor('#password-again');
        $('.button-submit').prop('disabled', false);
    }
}

/**
 *  Email check
 */

function checkEmailFormat() {
    var pattern = new RegExp(
        '^[a-zA-Z0-9]([a-zA-Z0-9]+.?)+[a-zA-Z0-9]@([a-zA-Z0-9]{2,}.?)+.{1}[a-zA-Z0-9]{2,}$',
    );
    if (!pattern.test($('#email').val())) {
        setWarningColor('#email');
        console.log('Nije dobar');
    } else {
        setNormalColor('#email');
        console.log('Dobro je!');
    }

    if ($('#email').val() == '') {
        setNormalColor('#email');
    }
}

function setWarningColor(id) {
    $(id).css('background-color', '#f44242');
    $(id).css('color', '#ffffff');
}

function setNormalColor(id) {
    $(id).css('background-color', '#ffffff');
    $(id).css('color', '#000000');
}

/*
    Animations
*/

$('.photo').mouseenter(function () {
    $(this).stop().animate({backgroundColor: 'aliceblue'}, 500);
});

$('.photo').mouseleave(function () {
    $(this).stop().animate({backgroundColor: '#fff3c3'}, 500);
});

$('.grid-header').mouseenter(function () {
    $(this).css('box-shadow', '0px 0px 55px -22px rgba(0,0,0,0.4)');
});

$('.grid-header').mouseleave(function () {
    $(this).css('box-shadow', '0px 0px 55px -22px rgba(0,0,0,0)');
});

$('iframe').mouseenter(function () {
    $(this).animate({width: '70%'}, 1000);
});

$('iframe').mouseleave(function () {
    $(this).animate({width: '60%'}, 1000);
});
