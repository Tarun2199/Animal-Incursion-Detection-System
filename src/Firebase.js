import * as firebase from 'firebase';

const app = {
    apiKey: "AIzaSyDRiYuiQpVfnMsQEtaugSeAe6SmV9G-19g",
    authDomain: "objectdetection-c7d8d.firebaseapp.com",
    databaseURL: "https://objectdetection-c7d8d.firebaseio.com",
    projectId: "objectdetection-c7d8d",
    storageBucket: "objectdetection-c7d8d.appspot.com",
    messagingSenderId: "265364664349",
    appId: "1:265364664349:web:018ddf486b4a27fccb16f4",
    measurementId: "G-GSRTCSVE9Y"
};

firebase.initializeApp(app);
firebase.analytics();

export default firebase;