import { useParams } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function Profile() {
  const params = useParams();

  const deconnexion = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/";
        alert("User: " + params.email + " disconnected successfully");
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <div>
      <h1>Hi {params.email} ! You are connected !</h1>
      <button onClick={deconnexion}>Se déconnecter</button>
    </div>
  );
}

export default Profile;
