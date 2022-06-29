import exampleImage from "../images/home-insta.png";

function ExampleImage() {
  return (
    <div id="exampleDiv">
      <img
        src={exampleImage}
        alt="example of the main page of the app"
        id="exampleImage"
      ></img>
    </div>
  );
}

export default ExampleImage;
