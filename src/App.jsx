import { useEffect, useState } from "react";
import loader1 from "./assets/images/loader_1.webp";
import loader2 from "./assets/images/loader_2.webp";
import loader3 from "./assets/images/loader_3.webp";
import { mainLogo, tLogo } from "./assets";
// import loader4 from "./assets/loader_4.webp";
import "./App.css";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello, World!");
    }, 2000);
    return () => clearTimeout(timer);
  });

  const images = [loader1, loader2, loader3];

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1500);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-[90dvh]">
        <div className="relative m-[0 auto] z-10 w-[40%]">
          <img src={tLogo} alt="" />
          <div className="absolute z-[-1] top-0 left-2">
            <img src={currentImage} />
          </div>
          {/* <div className="spinner"></div> */}
          <div className="loader-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stop-color="#f2f2f2" />
                  <stop offset="100%" stop-color="#f2f2f2" />
                </linearGradient>
              </defs>
              <circle cx="80" cy="80" r="45" stroke-linecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
