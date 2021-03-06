/*
 * Localized default methods for the jQuery validation plugin.
 * Locale: PT_BR
 * http://cleytonferrari.com/validacao-de-data-e-moeda-asp-net-mvc-jquery-validation-em-portugues/
 */
$.extend($.validator.methods, {    
    number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
    }
});

$.validator.unobtrusive.adapters.add('cpfBR', {}, function (options) {
    options.rules['cpfBR'] = true;
    options.messages['cpfBR'] = options.message;
});