$(function() {
    var userLang = navigator.language || navigator.userLanguage;
    var langSelectedKey = 'langSelected';
    var locale = 'en';
    var langSelected = localStorage.getItem(langSelectedKey);

    if (langSelected) {
        locale = langSelected;
     } else if (userLang === 'pt-BR') {
        locale = 'pt-BR';
    }
    
    $.i18n( {
        locale: locale
    });
    $('body').i18n();

    changeLocale = function(localeArg) {
        $.i18n().locale = localeArg;
        $('body').i18n();
        localStorage.setItem(langSelectedKey, localeArg);
    };
});
