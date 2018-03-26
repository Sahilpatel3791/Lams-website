/* global angular */

'use strict';
var lams = angular.module('lams',
        [
            'ui.router'
        ]);
        
lams.config(["$stateProvider", "$controllerProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $controllerProvider, $urlRouterProvider, $locationProvider) {

        angular.module("lams").controller = $controllerProvider.register;

        // Dont Remove
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('home');

        $stateProvider.state('menu', {
            url: '/',
            templateUrl: 'app/pages/menu.html'
        }).state('menu.home', {
            url: 'home',
            templateUrl: 'app/pages/home.html'
        }).state('menu.page1', {
            url: 'page1',
            templateUrl: 'app/pages/page1.html'
        }).state('menu.partnerspage', {
            url: 'partnerspage',
            templateUrl: 'app/pages/partners.html'
        }).state('menu.aboutus', {
            url: 'aboutus',
            templateUrl: 'app/pages/aboutus.html'
        }).state('menu.faq', {
            url: 'faq',
            templateUrl: 'app/pages/faq.html'
        });
    }]);