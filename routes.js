define(["navigo"], function (navigo) {
    var router = new navigo();
    return {
        init: function () {

            router.on('/', function () {
                require(["components/hello-world"], function (helloWorld) {
                    helloWorld.init();
                });
            });

            router.resolve();
        }
    }
});