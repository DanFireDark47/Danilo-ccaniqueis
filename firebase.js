import firebase from 'firebase';

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
