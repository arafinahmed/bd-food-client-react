import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// log in with google 
export const fireBaseLoginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      return user;
    }).catch((error) => {
      return {};
    });
}

// sign up with email and password

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      console.log(name);
      updateUserName(name);
      return user;
    })
    .catch((error) => {
      var errorMessage = error.message;
      return {errorMessage: errorMessage};
    });
}

export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      return user;
    })
    .catch((error) => {
      var errorMessage = error.message;
      return {errorMessage: errorMessage};
    });
}

//update user name in firebase
const updateUserName = (name) => {
  console.log(name);
  firebase.auth().currentUser.updateProfile({
    displayName: name
  }).then(function () {
    console.log("Updated display name");
  }).catch(function (error) {
    console.log(error);
  });
}