/* global angular */

var demoApp= angular.module("demoApp",[]);

demoApp.controller('simpleController',function($scope){
    
    $scope.customers=[
        {name: 'Dave Jones',city: 'Phoenix'},
        {name: 'Jamie Riley',city:'Atlanta'},
        {name: 'Heedy Wahlin',city:'Chandler'},
        {name: 'Thomas Winter',city:'Seattle'}
    ];
});