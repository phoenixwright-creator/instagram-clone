import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div id="sign-up-div">
      <p>
        Vous n'avez pas de compte ? <Link to="/signupform">Inscrivez-vous</Link>
      </p>
    </div>
  );
}

export default SignUp;
