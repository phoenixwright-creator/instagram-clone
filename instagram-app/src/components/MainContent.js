import ExampleImage from "./ExampleImage";
import ConnexionForm from "./ConnexionForm";
import SignUp from "./SignUp";
import DownloadApps from "./DownloadApps";

function MainContent() {
  return (
    <div id="main">
      <div id="connexion-div">
        <div id="left-side">
          <ExampleImage />
        </div>
        <div id="right-side">
          <ConnexionForm />
          <SignUp />
          <DownloadApps />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
