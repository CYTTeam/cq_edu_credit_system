require('./login.less');
const angular = require('angular');

module.exports = angular.module('sanya.login', [
    'ui.router',
    'angular-storage',
    'sanya.common.services',
]).config(moduleConfig)
    .controller('LoginController', LoginController);

/* @ngInject */
function moduleConfig($stateProvider) {
    $stateProvider.state('login', {
        url: '/login',
        template: require('./login.html'),
        controller: 'LoginController as scope',
    });
}

/* @ngInject */
function LoginController($rootScope, $location, store, AlertService, $state) {
    const vm = this;
    vm.login = login;

    function login(admin) {
        // LoginService.getToken(admin).$promise
        //     .then(function (res) {
        //         const token = res.access_token;
        //         store.set('auth.accessToken', token);
        //         if (!$rootScope.auth) {
        //             $rootScope.auth = {};
        //         }
        //         $rootScope.auth.accessToken = token;
        //         return LoginService.getProfile().$promise;
        //     }).then(function (profile) {
        //         store.set('auth.profile', profile);
        //         $rootScope.auth.profile = profile;
        //
        //         $state.go('home');
        //     }).catch(function (err) {
        //         AlertService.warning(err.data);
        //     });
    }
}
