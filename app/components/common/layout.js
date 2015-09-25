export default ngModule => {
  ngModule.directive('layout', [
    function () {
      return {
        restrict: 'E',
        template: require('./layout.html')
      };
    }
  ]);
};
