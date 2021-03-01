import firebase from "firebase"
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBSd9cITVuOxaBEYhSdw-xLIxtgp05cXw0",
    authDomain: "bartersystem-4d8b5.firebaseapp.com",
    projectId: "bartersystem-4d8b5",
    storageBucket: "bartersystem-4d8b5.appspot.com",
    messagingSenderId: "294047494534",
    appId: "1:294047494534:web:1689099cc1b82e3d347c07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();