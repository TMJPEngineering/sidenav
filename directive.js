(function(){
    'use strict';

    angular.module('myApp')
    .directive('sideNav', sideNav);
    sideNav.$inject = ['sideNavFactory'];

    function sideNav(sideNavFactory) {
        var directive = {
            restrict: 'E',
            templateUrl: 'template/side-nav.html',
            transclude: true,
            controller: sideNavCtrl,
            controllerAs: 'sc',
            link: linkFn,
            scope: {},
            bindToController: {
                id: '@',
                sideNavPosition: '@'
            }
        }
        return directive;

        function sideNavCtrl() {
            var vm = this;

            vm.isSideNavVisible = false;
            vm.sideNavPosition = '';
            vm.hideSideNav = hideSideNav;

            function hideSideNav() {
                vm.isSideNavVisible = false;
            }
        }

        function linkFn(scope, element, attr, ctrl) {
            sideNavFactory.addSideNav(ctrl);
            console.log(ctrl);
        }
    }
})();