

app.directive('newsShareOnTwitter', function ($rootScope, $timeout) {

    return {
        function (scope, elem) {
            $rootScope.$on('shareOnTwitter', function (events, args) {

                console.log("Un essai");
            });
        }
    };
});