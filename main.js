(function () {
    "use strict";

    requirejs.config({
        paths: {
            require: 'lib/require',
            jquery: 'lib/jquery-3.2.1.min',
            navigo: 'lib/navigo.min'
        }
    });

    require(['app'], function (app) {
        app.init();
    });
})();