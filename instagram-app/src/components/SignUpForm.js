import instagramTitle from "../images/instagram-title.png";
import gmailLogo from "../images/gmail-logo.png";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
import DownloadApps from "./DownloadApps";

const firebaseConfig = {
  apiKey: "AIzaSyBdMTy_-WwjSSBNvLjYW_iT1_AGQBD0M8M",
  authDomain: "instagramclone-a15ab.firebaseapp.com",
  projectId: "instagramclone-a15ab",
  storageBucket: "instagramclone-a15ab.appspot.com",
  messagingSenderId: "884201600876",
  appId: "1:884201600876:web:f289f72d171277d7b52549",
};

const app = initializeApp(firebaseConfig);
const Googleprovider = new GoogleAuthProvider();
const auth = getAuth(app);

function SignUpForm() {
  const gmailLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        window.location.href = `profile/${user.email}`;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        const email = error.customData.email;
        alert(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(credential);
      });
  };

  const next = (e) => {
    e.preventDefault();
  };

  return (
    <div id="signUpForm">
      <form id="newAccountForm">
        <div id="instaLogo">
          <Link to="/">
            <img src={instagramTitle} alt="Logo of instagram title"></img>
          </Link>
        </div>
        <div id="formdescription">
          <span>
            Inscrivez-vous pour voir les photos et vidéos de vos amis.
          </span>
        </div>
        <div id="gmailConnexion">
          <button onClick={gmailLogin} id="gmailButton">
            <img
              src={gmailLogo}
              alt="Mini logo of gmail"
              className="gmailLogo"
            ></img>
            <span>Se connecter avec Gmail</span>
          </button>
        </div>
        <span>OU</span>
        <div id="inputs">
          <input type="email" id="emailInput"></input>
          <input type="text" id="fullName"></input>
          <input type="text" id="userName"></input>
          <input type="password" id="passwordInput"></input>
        </div>
        <div id="warningNote">
          <span>
            Les personnes qui utilisent notre service ont pu importer vos
            coordonnées sur Instagram. En savoir plus
          </span>
        </div>
        <div id="generalConditions">
          <span>
            En vous inscrivant, vous acceptez nos Conditions générales.
            Découvrez comment nous recueillons, utilisons et partageons vos
            données en lisant notre Politique d’utilisation des données et
            comment nous utilisons les cookies et autres technologies similaires
            en consultant notre Politique d’utilisation des cookies.
          </span>
        </div>
        <div id="next">
          <button onClick={next} id="nextButton">
            Suivant
          </button>
        </div>
      </form>
      <div id="connexion">
        <span>Vous avez un compte ?</span>
        <Link to="/">Connectez-vous</Link>
      </div>
      <div id="downloadableApps">
        <DownloadApps />
      </div>
    </div>
  );
}

export default SignUpForm;
