$(function(){
    var year = new Date().getFullYear().toString();
    $('footer .footer-info').append('<p>&copy; ' + year + ', Remains of Life. <span data-i18n="rights-message"></span></p>');
});  