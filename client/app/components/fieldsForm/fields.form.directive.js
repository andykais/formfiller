export function FieldsFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/fieldsForm/fieldsForm.html',
    scope: {
        fields: '='
    },
    controller: FieldsFormController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class FieldsFormController {
  constructor () {
    'ngInject';
  }
}
