import "./App.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component

function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="top-0">
            <Navbar />
            <SplashPage />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
