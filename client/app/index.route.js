export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $stateProvider
    .state('Field Input', {
      url: '/input',
      templateUrl: 'app/fieldInput/fieldInput.html',
      controller: 'FieldInputController',
      controllerAs: 'fieldInput'
    })
    .state('Form Creation', {
      url: '/create',
      templateUrl: 'app/formCreation/formCreation.html',
      controller: 'FormCreationController',
      controllerAs: 'about'
    })
    .state('About', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
}
