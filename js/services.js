angular
    .module('app')
    .service('SpinnerService', function () {
        var count = 0;

        var showSpinner = function(){
            console.log('----showSpinner-----');
        }

        var hideSpinner = function(){
            console.log('----hideSpinner-----');
        }

        return {
            transitionStart: function () { if (++count > 0) showSpinner(); },
            transitionEnd: function () { if (--count <= 0) hideSpinner(); },
        }
    });