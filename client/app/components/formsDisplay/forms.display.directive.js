export function FormsDisplayDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/formsDisplay/formsDisplay.html',
    scope: {
        forms: '='
    },
    controller: FormsDisplayController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class FormsDisplayController {
  constructor () {
    'ngInject';
  }
}
