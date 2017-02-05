(function () {
  'use strict';

  angular
    .module('webAdminUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');

    //todo:optimize later
    $(window).on('DOMContentLoaded load hashchange', function () {
      $.AdminLTE.layout.activate();
    })
  }

})();
