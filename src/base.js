import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWvaZNVYJCkPmJp9T9Mj9UxR9RlCGe2UM",
    authDomain: "todos-sakib.firebaseapp.com",
    databaseURL: "https://todos-sakib.firebaseio.com"
});

export { firebaseApp };