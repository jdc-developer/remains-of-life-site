$(function() {
    $.i18n( {
        locale: 'en'
    });

    $('body').i18n();

    changeLocale = function(localeArg) {
        $.i18n().locale = localeArg;
        $('body').i18n();
    };
});
