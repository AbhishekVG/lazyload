var app=angular.module('lazyLoad',['oc.lazyLoad']);
function lazyCtrl($scope,$ocLazyLoad){
$scope.test="sample";
  $ocLazyLoad.load('app/bower_components/bootstrap/dist/css/bootstrap.min.css');
  $ocLazyLoad.load('app/bower_components/bootstrap/dist/js/bootstrap.min.js');
  $ocLazyLoad.load('app/bower_components/jquery/dist/jquery.min.js');
//   $ocLazyLoad.load('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');
//   $ocLazyLoad.load('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
//   $ocLazyLoad.load('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
}
lazyCtrl.$inject=['$scope','$ocLazyLoad'];
app.controller('lazyCtrl',lazyCtrl);