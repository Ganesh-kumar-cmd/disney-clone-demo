import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1MUWkia70ShZyYN1a6AcaYzVw_MfpAOI",
  authDomain: "disneyplus-clone-2123c.firebaseapp.com",
  projectId: "disneyplus-clone-2123c",
  storageBucket: "disneyplus-clone-2123c.appspot.com",
  messagingSenderId: "930612412157",
  appId: "1:930612412157:web:cf8d421a450713ae19c894",
  measurementId: "G-1JBCJ7DZTG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
