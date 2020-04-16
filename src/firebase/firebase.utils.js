import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATZr6KYvoGaxUoN6BUJ9qLK3eZ_IarOZI",
  authDomain: "e-com-as.firebaseapp.com",
  databaseURL: "https://e-com-as.firebaseio.com",
  projectId: "e-com-as",
  storageBucket: "e-com-as.appspot.com",
  messagingSenderId: "384475286500",
  appId: "1:384475286500:web:95239e4f185fc14c6e15f1",
  measurementId: "G-QY42LHDG5B"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
