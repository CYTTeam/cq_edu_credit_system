require('./app.less');
require('babel-core/polyfill');
const angular = require('angular');
require('../common/service.js');
require('../login/login.js');


module.exports = angular.module('cq_edu_credit_system', [
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'angular-storage',
  'sanya.login',
]).config(moduleConfig).run(moduleRun);

/* @ngInject */
function moduleConfig($urlRouterProvider, $locationProvider, RestangularProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');
  RestangularProvider.setBaseUrl('/apis');
  RestangularProvider.setRestangularFields({
    id: '_id',
  });
}

/* @ngInject */
function moduleRun($rootScope, $timeout, store, $state) {
  $rootScope.nullListMsg = '暂无数据';
  if (!$rootScope.auth || !$rootScope.auth.profile || !$rootScope.auth.accessToken) {
    if (store.get('auth.profile') && store.get('auth.accessToken')) {
      $rootScope.auth = {
        profile: store.get('auth.profile'),
        accessToken: store.get('auth.accessToken'),
      };
    } else {
      $state.go('login');
    }
  }
  window.state = $state;
}
