$('#card').on('click', function () {
    $('#envelope').addClass('active');

    setTimeout(()=>{
        $('.presente-extra').removeClass('d-none');
        $('.rubber').text('Para Raquel')
    }, 1)
});

$('.closed-envelope').on('click', function () {
    $('#envelope').removeClass('active');
    $('.button-extra').addClass('d-none');
});