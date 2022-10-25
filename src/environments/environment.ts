// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//FIREBASE DATOS
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu8eRYo0pFUDP7HB4dJT1uA_sMQ4qQirQ",
  authDomain: "web-portfolio-matias-storoni.firebaseapp.com",
  projectId: "web-portfolio-matias-storoni",
  storageBucket: "web-portfolio-matias-storoni.appspot.com",
  messagingSenderId: "714557995490",
  appId: "1:714557995490:web:38b7a4ddcbbd3ec0f461bb",
  measurementId: "G-LB6XXC3ZS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: true,
  educacionURL: 'https://matias-storoni-portfolio.herokuapp.com/educacion/',
  experienciaURL: 'https://matias-storoni-portfolio.herokuapp.com/experiencia/',
  proyectoURL: 'https://matias-storoni-portfolio.herokuapp.com/proyecto/',
  skillURL: 'https://matias-storoni-portfolio.herokuapp.com/skill/',
  authURL: 'https://matias-storoni-portfolio.herokuapp.com/auth/',
  firebaseConfig:  {
    apiKey: "AIzaSyDu8eRYo0pFUDP7HB4dJT1uA_sMQ4qQirQ",
    authDomain: "web-portfolio-matias-storoni.firebaseapp.com",
    projectId: "web-portfolio-matias-storoni",
    storageBucket: "web-portfolio-matias-storoni.appspot.com",
    messagingSenderId: "714557995490",
    appId: "1:714557995490:web:38b7a4ddcbbd3ec0f461bb",
    measurementId: "G-LB6XXC3ZS1"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
