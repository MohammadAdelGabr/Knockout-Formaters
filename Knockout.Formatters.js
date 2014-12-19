/// <reference path="knockout-3.2.0.js" />
/// <reference path="jquery-2.1.1.min.js" />

ko.bindingHandlers.Format = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value) || {datatype:'text'};
        var datatype = valueUnwrapped.datatype.toLowerCase();
        var targetvalue = allBindings().value();
        var strvalue = targetvalue.toString();

        switch (datatype) {
            case 'decimal':
                var temp = "";
                var counter = 0;
                var dotfound = false;
                for (var i = 0, j = strvalue.length ; i < j; i++) {
                    if (strvalue[i] != '.') {
                        temp += strvalue[i];
                        counter++;
                        if (counter == 3) {
                            temp += ",";
                            counter = 0;
                        }
                        else {
                            if (dotfound == true) {
                                if (counter == 2)
                                    break;
                            }
                           
                                
                        }
                    }
                    else
                    {
                        console.log("Found");
                        temp += strvalue[i];
                        dotfound = true;
                        counter = 0;
                    }

                }

                $(element).val(temp);
                break;
            default:

        }
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
    }
};