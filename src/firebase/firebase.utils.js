import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGyCbjTXjB7kCVyYAanIqBBEbbtVHl0ck",
  authDomain: "crown-clothes.firebaseapp.com",
  databaseURL: "https://crown-clothes.firebaseio.com",
  projectId: "crown-clothes",
  storageBucket: "",
  messagingSenderId: "565132904913",
  appId: "1:565132904913:web:2093443fa6a40887"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  try {
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    }
  } catch (error) {
    console.log("user error :", error);
  }
  return userRef;
};

export default firebase;
