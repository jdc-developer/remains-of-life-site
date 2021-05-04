$(function(){
    for (var i = 1; i < 19; i++) {
        $('.photos').append(
        '<div class="col-md-4 mt-2">' +
            '<a href="assets/images/img-' + i + '.jpg" data-lightbox="remains-of-life-photos" data-title="Photo ' + i + '">' +
                '<img class="img-album" src="assets/images/img-' + i + '.jpg" alt="Remains of Life Img ' + i + '">' +
            '</a>' +
        '</div>');
    }
});  