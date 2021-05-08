$(function() {
    var portugueseLocales = ['pt-BR', 'pt-PT', 'pt-AO', 'pt-MZ', 'pt-GW', 'pt-GQ', 'pt-ST',
        'pt-TL', 'pt-CV', 'pt'];
    var langSelectedKey = 'langSelected';
    var locale = 'en';
    var langSelected = localStorage.getItem(langSelectedKey);
    var userLang = navigator.language || navigator.userLanguage;

    if (langSelected) {
        locale = langSelected;
     } else if (portugueseLocales.includes(userLang)) {
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
