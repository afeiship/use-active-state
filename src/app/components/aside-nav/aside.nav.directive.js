(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .directive('asideNav', asideNav);

  /** @ngInject */
  function asideNav($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/aside-nav/aside.nav.html',
      link: function (scope, element, attr) {
        scope.active = attr.active;
        scope.select = function (type) {
          if (type === 'task') {
            $state.go('task.list');
          } else if (type === 'store') {
            $state.go('store.list');
          } else if (type === 'permission') {
            $state.go('permission.list')
          }
        }
      }
    };
  }

})();
