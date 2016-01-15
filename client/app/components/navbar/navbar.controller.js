export class NavbarController {
  constructor (moment) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
/**
 * Created by andrew on 1/14/16.
 */
