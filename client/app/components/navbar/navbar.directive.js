export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    //Left here for reference
    //scope: {
    //    creationDate: '='
    //},
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($state) {
    'ngInject';

    this.stateService = $state;
    this.states = this.getStates();
  }

  getStates() {
    return this.stateService.get();
  }
}
