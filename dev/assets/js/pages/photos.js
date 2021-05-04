$(function(){
    for (var i = 1; i < 19; i++) {
        $('.photos').append(
        '<div class="col-md-4 mt-2">' +
            '<a href="assets/img/img-' + i + '.jpg" data-lightbox="photo-' + i + '" data-title="Photo ' + i + '">' +
                '<img class="img-album" src="assets/img/img-' + i + '.jpg" alt="Remains of Life Img ' + i + '">' +
            '</a>' +
        '</div>');
    }
});  