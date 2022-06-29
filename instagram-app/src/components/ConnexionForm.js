import instagramTitle from "../images/instagram-title.png";
import gmailLogo from "../images/gmail-logo.png";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdMTy_-WwjSSBNvLjYW_iT1_AGQBD0M8M",
  authDomain: "instagramclone-a15ab.firebaseapp.com",
  projectId: "instagramclone-a15ab",
  storageBucket: "instagramclone-a15ab.appspot.com",
  messagingSenderId: "884201600876",
  appId: "1:884201600876:web:f289f72d171277d7b52549",
};

const app = initializeApp(firebaseConfig);
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
  return (
    <div id="formDiv">
      <form id="loginForm">
        <div id="formLogo">
          <a href="/">
            <img
              src={instagramTitle}
              alt="logo of the instagram title"
              id="instagramTitle"
            ></img>
          </a>
        </div>
        <div id="inputsDiv">
          <input
            type="email"
            id="login-input"
            onChange={checkInputs}
            required
          ></input>
          <input
            type="password"
            id="password-input"
            onChange={checkInputs}
            required
          ></input>
          <button id="connexionButton" onClick={connexion}>
            Se connecter
          </button>
        </div>
        <div id="alternativeLogin">
          <p>OU</p>
        </div>
        <div id="gmailDiv">
          <a href="/gmail" id="gmailLink" target="_blank">
            <img src={gmailLogo} alt="logo of gmail" id="gmailLogo"></img>
            <p>Se connecter avec Gmail</p>
          </a>
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
      </form>
    </div>
  );
}

export default ConnexionForm;
