import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzwBeMJEPN5MZalm8j7Xv8rd68R-Iw96I",
  authDomain: "crwn-db-93a10.firebaseapp.com",
  projectId: "crwn-db-93a10",
  storageBucket: "crwn-db-93a10.appspot.com",
  messagingSenderId: "105542561685",
  appId: "1:105542561685:web:054fbc55920cc3938d109c"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const signInWithGoogle=()=>signInWithPopup(auth, provider)
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;const user = result.user;
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});
export default app;

// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import'firebase/firestore';
// import 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBzwBeMJEPN5MZalm8j7Xv8rd68R-Iw96I",
//   authDomain: "crwn-db-93a10.firebaseapp.com",
//   projectId: "crwn-db-93a10",
//   storageBucket: "crwn-db-93a10.appspot.com",
//   messagingSenderId: "105542561685",
//   appId: "1:105542561685:web:054fbc55920cc3938d109c"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const auth=firebase.auth();
// export const firestore=firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt:'select_account'});
// export const signInWithGoogle =() => auth.signInWithPopup(provider);

// export default firebase;