/// <reference path="knockout-3.2.0.js" />
/// <reference path="jquery-2.1.1.min.js" />

ko.bindingHandlers.formattedInput = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var options = valueAccessor();
        

        switch (options.type) {
            case "number":
                ko.utils.registerEventHandler(element, "keypress", function (event) {
                    var keynum;

                    if (window.event) {
                        keynum = event.keyCode;
                    } else
                        if (event.which) {
                            keynum = event.which;
                        }
                    var charatercode = String.fromCharCode(keynum)
                    var re5digit = /^\d*$/
                    if (charatercode.search(re5digit) == -1)
                        event.preventDefault();
                });
                break;
            default:

        }

      
      

    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
    }
};