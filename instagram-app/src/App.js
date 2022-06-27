import exampleImage from "./images/home-insta.png";
import instagramTitle from "./images/instagram-title.png";
import gmailLogo from "./images/gmail-logo.png";
import appleAppLink from "./images/apple-app-link.png";
import androidAppLink from "./images/android-app-link.png";
import "./App.css";

function App() {
  const checkLogin = (event) => {};
  const checkPassword = (event) => {};
  const connexion = () => {};

  return (
    <div className="App">
      <div id="connexion-div">
        <div id="left-side">
          <img
            src={exampleImage}
            alt="example of the main page of the app"
            id="exampleImage"
          ></img>
        </div>
        <div id="right-side">
          <div id="form-div">
            <form>
              <img
                src={instagramTitle}
                alt="logo of the instagram title"
                id="instagramTitle"
              ></img>
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
              <button id="connexion-button" onClick={connexion} disabled="true">
                Se connecter
              </button>
              <p>Ou</p>
              <hr></hr>
              <a href="#">
                <img src={gmailLogo} alt="logo of gmail" id="gmailLogo"></img>
                Se connecter avec Gmail
              </a>
              <a href="#">Mot de passe oublié ?</a>
            </form>
            <div id="sign-up-div">
              <p>
                Vous n'avez pas de compte ? <a href="#">Inscrivez-vous</a>
              </p>
            </div>
            <div id="downloadable-apps">
              <p>Téléchargez l'application.</p>
              <a href="#">
                <img
                  id="appleAppLink"
                  src={appleAppLink}
                  alt="Link to download the apple app"
                ></img>
              </a>
              <a href="#">
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
      <footer id="footer">
        <nav id="footer-links">
          <a href="#">Meta</a>
          <a href="#">A propos</a>
          <a href="#">Blog</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
