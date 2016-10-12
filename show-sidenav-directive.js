(function(){
    'use strict';

    angular.module('myApp')
    .directive('showNav',showNav);
    showNav.$inject = ['sideNavFactory'];

    function showNav(sideNavFactory) {
        var directive = {
            restrict: 'A',
            link: linkFn,
            scope: {
                showEvent:'@'
            }
        }
        return directive;

        function linkFn(scope, element, attr) {
            var sideNav = attr.showSideNav;
            var showEvent = scope.showEvent || 'click';

            element.on(showEvent, function() {
                sideNavFactory.showSideNav(sideNav);
                scope.$evalAsync();
            });

        }
    }
})();