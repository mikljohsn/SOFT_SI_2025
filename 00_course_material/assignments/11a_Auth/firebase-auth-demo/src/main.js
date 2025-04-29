import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHORqjLHLpY3XJDCC1lJAGQecAIQ7daM4",
  authDomain: "a-auth-14375.firebaseapp.com",
  projectId: "a-auth-14375",
  storageBucket: "a-auth-14375.firebasestorage.app",
  messagingSenderId: "220032615320",
  appId: "1:220032615320:web:42cee2702313677cefa1ed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signupBtn").addEventListener("click", async () => {
  console.log("Sign up button clicked");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signed up as: " + userCred.user.email);
  } catch (e) {
    alert(e.message);
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in as: " + userCred.user.email);
  } catch (e) {
    alert(e.message);
  }
});
