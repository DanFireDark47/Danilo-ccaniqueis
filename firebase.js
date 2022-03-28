import firebase from 'firebase';

// Your web app's Firebase configuration
/*var firebaseConfig = {
    apiKey: "AIzaSyAQyUR4T4V1Es7q7XTLve56TR7ygGEN820",
    authDomain: "crud-firebase-react-native-exp.firebaseapp.com",
    databaseURL: "https://crud-firebase-react-native-exp.firebaseio.com",
    projectId: "crud-firebase-react-native-exp",
    storageBucket: "crud-firebase-react-native-exp.appspot.com",
    messagingSenderId: "756661446225",
    appId: "1:756661446225:web:48f8057601d0072d7bfa70",
    measurementId: "G-MXCGYQB4HM"
};*/

var firebaseConfig = {
apiKey: "AIzaSyC44dsyTW6dFVED2gwsUDxohu9uj5IQK9M",
authDomain: "reactfirebase-prof.firebaseapp.com",
databaseURL: "https://reactfirebase-prof-default-rtdb.firebaseio.com",
projectId: "reactfirebase-prof",
storageBucket: "reactfirebase-prof.appspot.com",
messagingSenderId: "619171633719",
appId: "1:619171633719:web:b96d6d71170dd1f765bdb2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;