export class MainController {
  constructor () {
    'ngInject';

    this.fields = this.getFields();
    this.forms = this.getForms();

  }

  //Fill in with logic to get information from the backend
  getFields() {
    return [
      {
        id: 0,
        title: "First Name",
        inputType: "Text"
      },
      {
        id: 1,
        title: "Last Name",
        inputType: "Text"
      }
    ]
  }

  getForms() {
    return [
      {
        id: 0,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 1,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 2,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 3,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 4,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 5,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 6,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 7,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 8,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      },
      {
        id: 9,
        title: "Test Form",
        previewLocation: "../../favicon.ico"
      }
    ]
  }
}
