import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component
import Brand from "./components/Brand"; // Import the Brand component
import Audience from "./components/Audience"; // Import the Audience component
import Egg from "../src/assets/images/desktop/image-transform.jpg"; // Import the image-transform.jpg file
import Cup from "../src/assets/images/desktop/image-stand-out.jpg"; // Import the image-stand-out.jpg file

function App() {
  return (
    <>
      <Navbar />
      <SplashPage />
      <div>
        <Brand />
        <img src={Egg} alt="Egg" />
        <img src={Cup} alt="Salmon colored cup"/>
        <Audience />
      </div>
    </>
  );
}

export default App;
