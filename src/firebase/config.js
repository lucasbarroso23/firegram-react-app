import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoLiuAWSdzsdtqaC_qNP74yi9ogBo3cgw",
    authDomain: "firegram-react-app-64de7.firebaseapp.com",
    databaseURL: "https://firegram-react-app-64de7.firebaseio.com",
    projectId: "firegram-react-app-64de7",
    storageBucket: "firegram-react-app-64de7.appspot.com",
    messagingSenderId: "1079862544374",
    appId: "1:1079862544374:web:00dc9f79a78122aa37e9d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };