import appleAppLink from "../images/apple-app-link.png";
import androidAppLink from "../images/android-app-link.png";

function DownloadApps() {
  return (
    <div id="downloadable-apps">
      <div>
        <p>Téléchargez l'application.</p>
      </div>
      <div id="appLinks">
        <a
          target="_blank"
          href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          rel="noreferrer"
        >
          <img
            id="appleAppLink"
            src={appleAppLink}
            alt="Link to download the apple app"
          ></img>
        </a>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D05864384-AFB8-468D-9251-E6D4CD4689B9%26utm_content%3Dlo%26utm_medium%3Dbadge"
          rel="noreferrer"
        >
          <img
            id="androidAppLink"
            src={androidAppLink}
            alt="Link to download the android app"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default DownloadApps;
