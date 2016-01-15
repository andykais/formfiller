export class FormCreationController {
  constructor () {
    'ngInject';

    this.forms = this.getForms();
    this.fields = this.getFields();

  }

  //Fill in with logic to get information from the backend
  getFields() {
    return [
      {
        id: 0,
        title: "First Name",
        inputType: "text"
      },
      {
        id: 1,
        title: "Last Name",
        inputType: "text"
      }
    ]
  }

  getForms() {
    return [
      {
        id: 0,
        title: "Test Form",
        previewLocation: "./favicon.ico",
        fields: [
          {
            id: 0,
            title: "First Name",
            inputType: "text"
          },
          {
            id: 1,
            title: "Last Name",
            inputType: "text"
          }
        ]
      },
      {
        id: 0,
        title: "Test Form",
        previewLocation: "../../favicon.ico",
        fields: [
          {
            id: 0,
            title: "First Name",
            inputType: "text"
          },
          {
            id: 1,
            title: "Last Name",
            inputType: "text"
          }
        ]
      },
      {
        id: 0,
        title: "Test Form",
        previewLocation: "../../favicon.ico",
        fields: [
          {
            id: 0,
            title: "First Name",
            inputType: "text"
          },
          {
            id: 1,
            title: "Last Name",
            inputType: "text"
          }
        ]
      },
      {
        id: 0,
        title: "Test Form",
        previewLocation: "../../favicon.ico",
        fields: [
          {
            id: 0,
            title: "First Name",
            inputType: "text"
          },
          {
            id: 1,
            title: "Last Name",
            inputType: "text"
          }
        ]
      }
    ]
  }
}
