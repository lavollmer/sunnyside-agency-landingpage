import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component
import Content from "./components/Content";

function App() {
  return (
    <>
        <Navbar />
        <SplashPage />
        <Content />
    </>
  );
}

export default App;
