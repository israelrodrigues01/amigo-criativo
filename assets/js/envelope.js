$('#card').on('click', function () {
    $('#envelope').addClass('active');

    setTimeout(()=>{
        $('.presente-extra').removeClass('d-none');
        $('.rubber').text('Para Raquel')
    }, 60000)
});

$('.closed-envelope').on('click', function () {
    $('#envelope').removeClass('active');
    $('.button-extra').addClass('d-none');
});