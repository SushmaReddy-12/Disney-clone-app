import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDowNnuodRpc4ub-w2gOsJE_k3Aj9xOp8A",
  authDomain: "disney-clone-app-6c085.firebaseapp.com",
  projectId: "disney-clone-app-6c085",
  storageBucket: "disney-clone-app-6c085.appspot.com",
  messagingSenderId: "141765847009",
  appId: "1:141765847009:web:e4efa67eb93ab4b36454a0",
  measurementId: "G-EBT57TWGHC"
};


    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();
    ///const firestore = firebase.firestore();
    
    export { auth, provider, storage};
    export default db;
    

