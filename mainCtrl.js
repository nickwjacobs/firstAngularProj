angular.module('myApp').controller('mainCtrl', function($scope){
   $scope.test = 'hello';

   $scope.guests = [
     {name: 'Scott', color: 'Black'},
     {name: 'Tom'},
     {name: 'Doug', color: 'blue'},
     {name: 'Pepperoni', color: 'red'}
   ];
   $scope.addGuest = function(){
   var newGuest = {
     name: $scope.newName,
     color: $scope.newColor,
   };
   $scope.guests.push(newGuest);
 };

});
