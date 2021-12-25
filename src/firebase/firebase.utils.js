import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAVIheqshvgEipxmMRTmzByB5wtugxBGcA",
    authDomain: "crwn-db-36a61.firebaseapp.com",
    projectId: "crwn-db-36a61",
    storageBucket: "crwn-db-36a61.appspot.com",
    messagingSenderId: "282079396770",
    appId: "1:282079396770:web:19bdc3405220b94fc468fb",
    measurementId: "G-28LMB4KWH7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

  