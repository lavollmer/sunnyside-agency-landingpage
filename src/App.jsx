import "./App.css"; // Import the App.css file
import Navbar from "./components/Navbar"; // Import the Navbar component
import SplashPage from "./components/SplashPage"; // Import the SplashPage component
import Brand from "./components/Brand"; // Import the Brand component
import Audience from "./components/Audience"; // Import the Audience component
import Egg from "../src/assets/images/desktop/image-transform.jpg"; // Import the image-transform.jpg file
import Cup from "../src/assets/images/desktop/image-stand-out.jpg"; // Import the image-stand-out.jpg file
import Cherry from "../src/assets/images/desktop/image-graphic-design.jpg"; // Import the image-graphic-design.jpg file
import Oranges from "../src/assets/images/desktop/image-photography.jpg"; // Import the image-photography.jpg file
import Testimonials from "./components/Testimonials"; // Import the Testimonials component
import Cone from "../src/assets/images/desktop/image-gallery-cone.jpg"; // Import the image-gallery-cone.jpg file
import Milk from "../src/assets/images/desktop/image-gallery-milkbottles.jpg"; // Import the image-gallery-milkbottles.jpg file
import Sugar from "../src/assets/images/desktop/image-gallery-sugarcubes.jpg"; // Import the image-gallery-sugar-cubes.jpg file
import Orange from "../src/assets/images/desktop/image-gallery-orange.jpg"; // Import the image-gallery-orange.jpg file
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <>
      <Navbar />
      <SplashPage />
      <div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <Brand />
          <img src={Egg} alt="Egg" className=" w-full h-full" />
          <img src={Cup} alt="Salmon colored cup" className="w-full h-full" />
          <Audience />
          <div className="relative">
            <img src={Cherry} alt="Cherry image" className="w-full h-full" />
            <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-[#377165]">
              <h1 className="flex flex-col items-center text-sm md:text-3xl font-fraunces font-bold font-700 ">
                Graphic Design
              </h1>
              <p className="text-sm font-bold pt-5 text-center px-10">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={Oranges} alt="Orange image" className="w-full h-full" />
            <div className="absolute inset-0 top-1/2 flex-col p-4 md:p-20 text-custom-color">
              <h1 className="flex flex-col items-center text-md md:text-3xl font-fraunces font-bold font-700 ">
                Photography
              </h1>
              <p className="font-bold text-sm text-center pt-5 px-10">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Testimonials />
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2">
          <img src={Milk} alt="Three Milk Bottles" />
          <img src={Orange} alt="Orange in bowl" />
          <img src={Cone} alt="Ice Cream Cone" />
          <img src={Sugar} alt="Sugar Cubes" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
