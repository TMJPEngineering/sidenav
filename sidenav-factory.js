(function(){
    'use strict';

    angular.module('myApp')
    .factory('sideNavFactory', sideNavFactory);

    function sideNavFactory() {
        var factory = {
            addSideNav: addSideNav,
            showSideNav: showSideNav,
        }
        var sideNav;
        return factory;

        function addSideNav(newSideNav){
            sideNav = newSideNav;
        }

        function showSideNav(newSideNav) {
            sideNav.isSideNavVisible = !sideNav.isSideNavVisible;
        }

    }
})();