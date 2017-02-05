(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .directive('mainSidebar', mainSidebar);

  /** @ngInject */
  function mainSidebar($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-sidebar/main-sidebar.html',
      link: function (scope, element, attr) {

      }
    };
  }

})();

