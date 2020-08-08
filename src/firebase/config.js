import firebase  from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCMfKy_NOnDg6ToInovmNH2PmQ-0lzpDe8",
    authDomain: "userapp-e38a6.firebaseapp.com",
    databaseURL: "https://userapp-e38a6.firebaseio.com",
    projectId: "userapp-e38a6",
    storageBucket: "userapp-e38a6.appspot.com",
    messagingSenderId: "286422910719",
    appId: "1:286422910719:web:fc4c02618a048111c2aeca"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;