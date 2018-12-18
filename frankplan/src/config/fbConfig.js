import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDoS4W0HsfRNvKm_9jRC1mnfWUtZZJfp2g",
    authDomain: "frankplan-react.firebaseapp.com",
    databaseURL: "https://frankplan-react.firebaseio.com",
    projectId: "frankplan-react",
    storageBucket: "frankplan-react.appspot.com",
    messagingSenderId: "77017160924"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;