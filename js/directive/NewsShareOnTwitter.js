

app.directive('newsShareOnTwitter', function ($rootScope, $timeout) {

    return {
        link : function (scope, elem) {
            $rootScope.$on('shareOnTwitter', function () {
                console.log("Un essai");
            });
        }
    };
});