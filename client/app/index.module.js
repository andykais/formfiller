/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { FieldInputController } from './fieldInput/fieldInput.controller.js';
import { FormCreationController } from './formCreation/formCreation.controller';
import { AboutController } from './about/about.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { FieldsFormDirective } from '../app/components/fieldsForm/fields.form.directive';
import { FormsDisplayDirective } from '../app/components/formsDisplay/forms.display.directive';

angular.module('formfiller', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('FieldInputController', FieldInputController)
  .controller('FormCreationController', FormCreationController)
  .controller('AboutController', AboutController)
  .directive('customNavbar', NavbarDirective)
  .directive('fieldsForm', FieldsFormDirective)
  .directive('formsDisplay', FormsDisplayDirective);
