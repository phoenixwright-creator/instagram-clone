import exampleImage from "./images/home-insta.png";
import instagramTitle from "./images/instagram-title.png";
import gmailLogo from "./images/gmail-logo.png";
import appleAppLink from "./images/apple-app-link.png";
import androidAppLink from "./images/android-app-link.png";
import "./App.css";

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdMTy_-WwjSSBNvLjYW_iT1_AGQBD0M8M",
  authDomain: "instagramclone-a15ab.firebaseapp.com",
  projectId: "instagramclone-a15ab",
  storageBucket: "instagramclone-a15ab.appspot.com",
  messagingSenderId: "884201600876",
  appId: "1:884201600876:web:f289f72d171277d7b52549"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {

  const checkLogin = (event) => {};
  const checkPassword = (event) => {};
  const connexion = (e) => {
    e.preventDefault();
    const email = document.getElementById('login-input').value;
    console.log(email);
    const password = document.getElementById('password-input').value;
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('User has been signed ! Check Firebase console to manage users');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  };

  return (
    <div className="App">
      <div id="main">
        <div id="connexion-div">
          <div id="left-side">
            <div id="exampleDiv">
              <img
                src={exampleImage}
                alt="example of the main page of the app"
                id="exampleImage"
              ></img>
            </div>
          </div>
          <div id="right-side">
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
                    onChange={checkLogin}
                    required
                  ></input>
                  <input
                    type="password"
                    id="password-input"
                    onChange={checkPassword}
                    required
                  ></input>
                  <button id="connexionButton" onClick={connexion}>
                    Se connecter
                  </button>
                </div>
                <div id="alternativeLogin">
                  <p>Ou</p>
                </div>
                <div id="gmailDiv">
                  <a href="/gmail" id="gmailLink">
                    <img src={gmailLogo} alt="logo of gmail" id="gmailLogo"></img>
                    <p>Se connecter avec Gmail</p>
                  </a>
                </div>
                <div id="resetPwdDiv">
                  <a href="https://www.instagram.com/accounts/password/reset/">Mot de passe oublié ?</a>
                </div>
                </form>
            </div>
              <div id="sign-up-div">
                <p>
                  Vous n'avez pas de compte ? <a href="https://www.instagram.com/accounts/emailsignup/">Inscrivez-vous</a>
                </p>
              </div>
              <div id="downloadable-apps">
                <div>
                  <p>Téléchargez l'application.</p>
                </div>
                <div id="appLinks">
                  <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                    <img
                      id="appleAppLink"
                      src={appleAppLink}
                      alt="Link to download the apple app"
                    ></img>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D05864384-AFB8-468D-9251-E6D4CD4689B9%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img
                      id="androidAppLink"
                      src={androidAppLink}
                      alt="Link to download the android app"
                    ></img>
                  </a>
                </div>
              </div>
            
          </div>
        </div>
      </div>
      <footer id="footer">
        <nav id="footer-links">
          <a href="https://about.facebook.com/">Meta</a>
          <a href="https://about.instagram.com/">A propos</a>
          <a href="https://about.instagram.com/blog">Blog</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
