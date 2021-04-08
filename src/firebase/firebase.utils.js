import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPcQuyt94LRjDopoUiAFWNvE8Otwo2sjY",
  authDomain: "jd-clothing-store.firebaseapp.com",
  projectId: "jd-clothing-store",
  storageBucket: "jd-clothing-store.appspot.com",
  messagingSenderId: "358068279194",
  appId: "1:358068279194:web:7f1bb66ad217d545020c23",
  measurementId: "G-4TSXKV6HPG",
};

export const createUserProfileDocument = async (userAuth, adicionalData) => {
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
        ...adicionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
