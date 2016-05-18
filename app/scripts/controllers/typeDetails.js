'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:TypeDetailsCtrl
 * @description
 * # TypeDetailsCtrl
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('TypeDetailsCtrl', [
    'TypesFactory', '$routeSegment',
    function(typesFactory, $routeSegment) {
      var vm = this;
      vm.details = [];
      vm.date = new Date();

      vm.getTypeName = function(id) {
        // if ($routeSegment.$routeParams.id) {
        //   vm.currentType = typesFactory.getType($routeSegment.$routeParams.id);
        // }

        // vm.setTypeName = function(t) {
        //   vm.currentType.name = t;
        // };

        // return vm.setTypeName;
        return typesFactory.getType(id).name;
      };

      vm.update = function(d) {

        var newStart = moment(d).startOf('month').unix();
        var newEnd = moment(d).endOf('month').unix();

        console.log($routeSegment.$routeParams.id, newStart, newEnd);

        typesFactory.getTypeDetails($routeSegment.$routeParams.id,
          newStart, newEnd).then( function(data) {
          // return data; <-------can't do this!!! no one to receive the object...
          vm.details = data;
        });

      };
    }
]);
