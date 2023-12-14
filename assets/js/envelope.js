$('#card').on('click', function () {
    $('#envelope').addClass('active');
});

$('.closed-envelope').on('click', function () {
    $('#envelope').removeClass('active');
});