import instagramTitle from "../images/instagram-title.png";
import gmailLogo from "../images/gmail-logo.png";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdMTy_-WwjSSBNvLjYW_iT1_AGQBD0M8M",
  authDomain: "instagramclone-a15ab.firebaseapp.com",
  projectId: "instagramclone-a15ab",
  storageBucket: "instagramclone-a15ab.appspot.com",
  messagingSenderId: "884201600876",
  appId: "1:884201600876:web:f289f72d171277d7b52549",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function ConnexionForm() {
  const checkInputs = () => {
    const login = document.getElementById("login-input").value;
    const password = document.getElementById("password-input").value;
    const connexionButton = document.getElementById("connexionButton");
    if (login && password !== "") {
      connexionButton.disabled = false;
    } else {
      connexionButton.disabled = true;
    }
  };

  const connexion = (e) => {
    e.preventDefault();
    const email = document.getElementById("login-input").value;
    console.log(email);
    const password = document.getElementById("password-input").value;
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const gmailLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        const email = error.customData.email;
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      });
  };

  return (
    <div id="formDiv">
      <form id="loginForm">
        <div id="formLogo">
          <a href="/">
            <img
              src={instagramTitle}
              alt="logo of the instagram title"
              id="instagramTitle"
            />
          </a>
        </div>
        <div id="inputsDiv">
          <input
            type="email"
            id="login-input"
            onChange={checkInputs}
            required
          />
          <input
            type="password"
            id="password-input"
            onChange={checkInputs}
            required
          />
          <button id="connexionButton" onClick={connexion}>
            Se connecter
          </button>
        </div>
      </form>
      <div id="alternativeLogin">
        <p>OU</p>
      </div>
      <div id="gmailDiv">
        <button id="gmailLogin" onClick={gmailLogin}>
          <img src={gmailLogo} alt="logo of gmail" id="gmailLogo" />
          <span>Se connecter avec Gmail</span>
        </button>
      </div>
      <div id="resetPwdDiv">
        <a
          target="_blank"
          href="https://www.instagram.com/accounts/password/reset/"
          rel="noreferrer"
        >
          Mot de passe oublié ?
        </a>
      </div>
    </div>
  );
}

export default ConnexionForm;
