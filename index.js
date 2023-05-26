// Universal module definition
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // Browser
        root.jsXOR = factory();
    }
})(this, function() {
    'use strict';

    var exec = function(str, salt) {
        var result = "", i = 0, j = 0, l = salt.length - 1, a, b;
        while(i < str.length) {
            if (j > l) {
                j = 0;
            }
            a = str.charAt(i).charCodeAt(0);
            b = salt.charAt(j).charCodeAt(0);
            result += String.fromCharCode(a ^ b);
            i++;
            if (j < l) {
                j++;
            } else {
                j = 0;
            }
        }
        return result;
    }

    return {
        exec: exec,
    }
});