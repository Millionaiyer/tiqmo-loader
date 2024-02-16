import { useEffect, useState } from 'react';
import loader from './assets/loader.png';
import loader1 from './assets/loader_1.webp';
import loader2 from './assets/loader_2.webp';
import loader3 from './assets/loader_3.webp';
import { mainLogo, tLogo } from './assets';
// import loader4 from "./assets/loader_4.webp";
import './App.css';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Hello, World!');
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
      <div className="loader_set" id="loaderWrap">
        <div className="x_padding">
          <div className="main_logo">
            <img src={mainLogo} alt="" />
          </div>
        </div>
        <div className="loader_shape_set" id="loaderShape">
          <div className="loader_images">
            <i
              className="full_bg cover active"
              data-src="./assets/loader_1.webp?v=2"
            ></i>
            <i
              className="full_bg cover"
              data-src="./assets/loader_2.webp?v=2"
            ></i>
            <i
              className="full_bg cover"
              data-src="./assets/loader_3.webp?v=2"
            ></i>
            <i
              className="full_bg cover"
              data-src="./assets/loader_4.webp?v=2"
            ></i>
          </div>
          <div className="loader_shape full_bg">
            <img src={tLogo} alt="" />
          </div>
        </div>
        <div className="bg-image">
          <img src={currentImage} />
        </div>
        <div className="spinner "></div>
      </div>
    </>
  );
}

export default App;
