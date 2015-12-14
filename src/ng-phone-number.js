/**
  * @ngdoc directive
  * @name deopard.ngPhoneNumber:phoneNumber
  * @description
  * Makes text inputs to take only phone-number-valid characters (number, +, -)
  */
(function () {
  angular
    .module('deopard.ngPhoneNumber', [])
    .directive('phoneNumber', PhoneNumber);

  function PhoneNumber () {
    var directive = {
      restrict: 'A',
      require: 'ngModel',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {
      ctrl.$parsers.push(function (inputValue) {
        if (inputValue === undefined) return '';
        var transformedInput = inputValue.replace(/[^0-9\-+]/g, '');
        if (transformedInput != inputValue) {
          ctrl.$setViewValue(transformedInput);
          ctrl.$render();
        }

        return transformedInput;
      });
    }
  }
})();
