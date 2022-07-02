import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Profile from "./components/Profile";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/profile/:email" element={<Profile />}></Route>
        <Route path="/signupform" element={<SignUpForm />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
