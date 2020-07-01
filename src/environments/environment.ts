// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailAPI: 'http://XXXXXX.com/contact-form.php',
  database: 'firebase',
  social: {
    role: 'Guest',
    fblink: 'https://www.facebook.com/aqhussaini/',
    linkedin: 'https://www.linkedin.com/in/abdul-quyyum-hussaini-763130178',
    github: 'https://github.com/qhussaini',
    emailid: 'q.hussaini@gmail.com'
  },
  socialAuthEnabled: true,
  firebase : {
     apiKey: "AIzaSyCbeiHnS9MdvRjliev0SFwjebNXKflttk0",
    authDomain: "quyaini-school-webapp.firebaseapp.com",
    databaseURL: "https://quyaini-school-webapp.firebaseio.com",
    projectId: "quyaini-school-webapp",
    storageBucket: "quyaini-school-webapp.appspot.com",
    messagingSenderId: "631301639377",
    appId: "1:631301639377:web:3c08c7933bd63172e089f0",
    measurementId: "G-NHCC3GCGKK"
  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
