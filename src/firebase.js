import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBo7TKZ1xh93Jt52Ww2aMJIhpZdjd5LaAw",
    authDomain: "disney-clone-61f55.firebaseapp.com",
    projectId: "disney-clone-61f55",
    storageBucket: "disney-clone-61f55.appspot.com",
    messagingSenderId: "625712953058",
    appId: "1:625712953058:web:e87902f11b28ecd8a9d0bb",
    measurementId: "G-6GGG3YC11E"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;