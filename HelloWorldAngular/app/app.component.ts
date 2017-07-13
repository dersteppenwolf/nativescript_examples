import { Component } from "@angular/core";

import firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My Apple" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  constructor() {
    console.dir({
      type: "Apple",
      color: "Red"
    });

    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.

    }).then(
      (instance) => {

        console.log("firebase.init done");
        firebase.setValue(
            '/companies',
            {
              foo: 'bar',
              updateTs: firebase.ServerValue.TIMESTAMP
            }
        );

        firebase.push(
            '/MyData',
            {
              'first': 'Eddy',
              'last': 'Verbruggen',
              'birthYear': 1977,
              'isMale': true,
              'address': {
                'street': 'foostreet',
                'number': 123
              }
            }
        ).then(
            function (result) {
              console.log("created key:   " + result.key);
            }
        );

      },
      (error) => {
        console.log("firebase.init error: " + error);
      }
    );
  }
}
