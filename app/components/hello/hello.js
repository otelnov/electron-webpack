export default ngModule => {
  ngModule.directive('hello', [
    function () {
      return {
        restrict: 'E',
        template: require('./hello.html'),
        controller: 'HelloCtrl',
        controllerAs: 'vm'
      };
    }
  ]);

  ngModule.controller('HelloCtrl', [
    function () {

    }
  ]);
};
