import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6gJQjhU4KtrcFm2U5e_gYNElOPGntQwc",
    authDomain: "fir-bookshelf-37fa2.firebaseapp.com",
    databaseURL: "https://fir-bookshelf-37fa2.firebaseio.com",
    projectId: "fir-bookshelf-37fa2",
    storageBucket: "fir-bookshelf-37fa2.appspot.com",
    messagingSenderId: "743312582679"
};
firebase.initializeApp(config);

// This exports the configured version of firebase
export default firebase;