import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import loader from "./assets/loader.png";
import loader1 from "./assets/loader_1.webp";
import loader2 from "./assets/loader_2.webp";
import loader3 from "./assets/loader_3.webp";
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
      <div>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={loader} alt="" className="logo " /> */}
          {/* <img src={loader1} alt="" className=" " />
          <img src={loader2} alt="" className=" " />{" "}
          <img src={loader3} alt="" className=" " /> */}
          {/* <img src={loader4} alt="" className="logo " /> */}
        </a>
        <div className="loader_set f a-c j-c" id="loaderWrap">
          <div className="x_padding">
            <div className="main_logo">
              <svg
                width="69"
                height="60"
                viewBox="0 0 69 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.5637 23.4437C40.8079 22.7108 39.8038 22.3068 38.738 22.3068C37.6722 22.3068 36.6587 22.7135 35.9016 23.4531C35.3285 24.0129 34.6076 24.3216 33.872 24.3216C32.1122 24.3216 30.6799 22.637 30.6799 20.5657V4.95158C30.6799 2.80383 28.8839 1.05609 26.6757 1.05609C24.4675 1.05609 22.6715 2.80383 22.6715 4.95158V9.18266H19.4982C17.29 9.18266 15.494 10.9304 15.494 13.0781C15.494 15.2259 17.29 16.9736 19.4982 16.9736H22.6715V20.5657C22.6715 26.9325 27.6959 32.1113 33.872 32.1113C36.7513 32.1113 39.487 30.9891 41.5744 28.9514C42.3288 28.2144 42.7436 27.2359 42.7422 26.1955C42.7409 25.1552 42.3221 24.178 41.565 23.4437H41.5637ZM43.3248 26.1942C43.3262 27.3862 42.8523 28.5071 41.9865 29.3514C39.7891 31.4965 36.9071 32.6777 33.872 32.6777C27.3751 32.6777 22.0889 27.2439 22.0889 20.5657V17.5401H19.4982C16.9692 17.5401 14.9114 15.5387 14.9114 13.0781C14.9114 10.6176 16.9692 8.61619 19.4982 8.61619H22.0889V4.95158C22.0889 2.49106 24.1467 0.489624 26.6757 0.489624C29.2047 0.489624 31.2625 2.49106 31.2625 4.95158V20.5657C31.2625 22.3242 32.433 23.7538 33.872 23.7538C34.4506 23.7538 35.0251 23.5055 35.4882 23.0531C36.3554 22.2074 37.5084 21.7403 38.7367 21.7403C39.9649 21.7403 41.1086 22.2021 41.9744 23.0424C42.8416 23.884 43.3208 25.0035 43.3235 26.1942H43.3248ZM29.5872 13.0781V4.95158C29.5872 3.38909 28.2811 2.11789 26.6744 2.11789C25.0676 2.11789 23.7628 3.38909 23.7628 4.95158V10.2458H19.4982C17.8927 10.2458 16.5866 11.517 16.5866 13.0781C16.5866 14.6393 17.8927 15.9105 19.4982 15.9105H26.6757C28.2811 15.9105 29.5886 14.6393 29.5886 13.0781H29.5872ZM41.6509 26.1969C41.6509 26.954 41.3502 27.6654 40.8012 28.201C38.9206 30.0373 36.4601 31.0481 33.8734 31.0481C28.2999 31.0481 23.7641 26.3459 23.7641 20.5644V19.7764C23.7641 18.214 25.0703 16.9441 26.6757 16.9441C28.2811 16.9441 29.5886 18.2153 29.5886 19.7764V20.5644C29.5886 23.2209 31.5108 25.3821 33.8734 25.3821C34.9003 25.3821 35.8963 24.9633 36.6762 24.2022C37.2252 23.6666 37.9554 23.3699 38.734 23.3686H38.7394C39.5152 23.3686 40.2441 23.6612 40.7945 24.1941C41.3462 24.7284 41.6496 25.4385 41.6509 26.1955"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.6654 11.9854C35.6654 10.3343 37.0225 8.99599 38.6964 8.99599C40.3703 8.99599 41.7274 10.3343 41.7274 11.9854C41.7274 13.6365 40.3703 14.9748 38.6964 14.9748C37.0225 14.9748 35.6654 13.6365 35.6654 11.9854ZM34.711 12.0015C34.711 14.1358 36.5044 15.8715 38.7098 15.8715C40.9153 15.8715 42.7087 14.1358 42.7087 12.0015C42.7087 9.86718 40.9153 8.13287 38.7098 8.13287C36.5044 8.13287 34.711 9.86852 34.711 12.0015ZM34.0962 12.0015C34.0962 9.53965 36.1661 7.53821 38.7098 7.53821C41.2536 7.53821 43.3235 9.54099 43.3235 12.0015C43.3235 14.462 41.2536 16.4662 38.7098 16.4662C36.1661 16.4662 34.0962 14.4634 34.0962 12.0015Z"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.3404 39.4015C29.8732 39.4015 29.4732 39.5653 29.1416 39.8928C28.9108 40.121 28.7617 40.3827 28.6919 40.6767C27.8167 40.1787 26.865 39.925 25.8341 39.925C23.6984 39.925 21.9453 40.6123 20.5748 41.9855C19.2029 43.3587 18.5183 45.2044 18.5183 47.5213C18.5183 49.8382 19.1157 51.6477 20.3103 52.9229C21.505 54.1982 23.1601 54.8358 25.2784 54.8358C26.708 54.8358 27.8302 54.6116 28.645 54.1646V58.1017C28.645 58.5648 28.8101 58.9595 29.1416 59.287C29.4732 59.6159 29.8732 59.7783 30.3404 59.7783C30.8075 59.7783 31.2075 59.6145 31.5391 59.287C31.8706 58.9595 32.0357 58.5648 32.0357 58.1017V41.0794C32.0357 40.6163 31.8706 40.2217 31.5391 39.8941C31.2075 39.5666 30.8075 39.4028 30.3404 39.4028V39.4015ZM28.6436 51.3081C27.9912 51.7739 27.1644 52.0061 26.1603 52.0061C23.4179 52.0061 22.0473 50.5121 22.0473 47.524C22.0473 46.0837 22.4205 44.932 23.1669 44.0675C23.9132 43.2044 24.9468 42.7721 26.2677 42.7721C27.2449 42.7721 28.0369 43.05 28.6436 43.6044V51.3081Z"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.3278 39.9263C47.5787 39.9263 46.8297 40.0686 46.0807 40.3505C45.333 40.6338 44.7491 41.0123 44.3303 41.4875C43.3678 40.4458 41.9369 39.9263 40.0388 39.9263C38.7515 39.9263 37.6722 40.3183 36.8011 41.1022V41.0835C36.8011 40.619 36.6386 40.223 36.3124 39.8941C35.9863 39.5653 35.593 39.4015 35.1312 39.4015C34.6694 39.4015 34.2761 39.5653 33.9499 39.8941C33.6237 40.223 33.46 40.619 33.46 41.0835V53.178C33.46 53.6424 33.6237 54.0384 33.9499 54.3673C34.2761 54.6962 34.6708 54.8599 35.1312 54.8599C35.5916 54.8599 35.9849 54.6948 36.3124 54.3673C36.6386 54.0384 36.8024 53.6424 36.8024 53.178V44.2474C37.0252 43.8702 37.3836 43.5252 37.879 43.2111C38.3743 42.897 38.8307 42.7399 39.2495 42.7399C40.0428 42.7399 40.6576 42.948 41.0952 43.3654C41.5315 43.7829 41.7503 44.3453 41.7503 45.0541V53.1753C41.7503 53.6411 41.9141 54.0371 42.2402 54.366C42.5664 54.6948 42.9611 54.8586 43.4215 54.8586C43.8819 54.8586 44.2766 54.6935 44.6028 54.366C44.9303 54.0371 45.0927 53.6411 45.0927 53.1766V44.2057C45.2793 43.8205 45.6055 43.4795 46.0686 43.1829C46.5331 42.8876 47.0136 42.7386 47.513 42.7386C49.1976 42.7386 50.0393 43.6849 50.0393 45.5776V53.1753C50.0393 53.6398 50.2017 54.0357 50.5292 54.3646C50.8554 54.6935 51.2501 54.8573 51.7105 54.8573C52.1709 54.8573 52.5656 54.6921 52.8918 54.3646C53.2179 54.0357 53.3817 53.6398 53.3817 53.1753V45.093C53.3817 43.4876 52.9387 42.2244 52.0514 41.3049C51.1642 40.3854 49.9225 39.925 48.3278 39.925"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.9074 40.5614C15.8846 40.556 15.8618 40.548 15.8389 40.5439C15.8349 40.5439 15.8295 40.5439 15.8255 40.5412C15.7181 40.5198 15.6067 40.5063 15.494 40.5063H15.4872C14.5328 40.5104 13.7583 41.3279 13.7583 42.3346V53.46C13.7583 54.2963 14.3221 54.9956 15.0805 55.1876C15.1033 55.193 15.1261 55.201 15.149 55.205C15.1543 55.205 15.1584 55.205 15.1637 55.2077C15.2711 55.2292 15.3812 55.2413 15.494 55.2413H15.5007C16.4551 55.2373 17.2296 54.4198 17.2296 53.4117V42.2863C17.2296 41.45 16.6672 40.7507 15.9087 40.5587"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.48167 51.6505C9.33938 51.7659 9.10179 51.9042 8.77157 51.9042C8.1447 51.9042 7.6346 51.382 7.6346 50.7404V43.379H9.96894C10.6616 43.379 11.2401 42.9132 11.3999 42.2849C11.4052 42.2662 11.4106 42.2474 11.4147 42.2286C11.4147 42.2245 11.4146 42.2219 11.416 42.2178C11.4348 42.1292 11.4442 42.0366 11.4442 41.9426V41.9373C11.4402 41.1466 10.765 40.5063 9.93002 40.5063H7.6346V37.7169C7.6346 36.7062 6.83456 35.8873 5.8466 35.8873C4.85863 35.8873 4.05859 36.7062 4.05859 37.7169V40.5063H2.46388C2.29475 40.5063 2.13233 40.5345 1.98199 40.5855C1.97796 40.5855 1.97527 40.5869 1.97124 40.5882H1.96856C1.55109 40.7251 1.21819 41.0554 1.07187 41.4755C1.07053 41.4809 1.06785 41.4863 1.0665 41.4903C1.05577 41.5198 1.04771 41.5507 1.03966 41.5816C1.03831 41.5883 1.03563 41.5936 1.03429 41.6004C1.02892 41.6191 1.02355 41.6379 1.01953 41.6567C1.01953 41.6608 1.01952 41.6648 1.01818 41.6688C0.99939 41.7574 0.98999 41.8487 0.98999 41.9426V41.948C0.98999 41.948 0.98999 41.9561 0.98999 41.9588C0.98999 42.7521 1.61955 43.3964 2.39409 43.3964H4.05993V50.7404C4.05993 53.3982 6.17413 55.5621 8.77291 55.5621C9.84007 55.5621 10.8871 55.1862 11.718 54.5043C12.4885 53.8721 12.612 52.7217 11.9945 51.9337C11.3771 51.1458 10.2522 51.0183 9.48167 51.6505Z"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M67.1421 41.4888C65.9031 40.1277 64.1647 39.4471 61.9244 39.4471C59.684 39.4471 58.0812 40.1559 56.7832 41.5721C55.4851 42.9882 54.8354 44.8232 54.8354 47.0757C54.8354 49.3281 55.4569 51.2678 56.7013 52.6693C57.9443 54.072 59.6853 54.7727 61.9244 54.7727C64.1634 54.7727 65.8454 54.0787 67.1072 52.6894C68.369 51.3001 68.9999 49.4302 68.9999 47.0757C68.9999 44.7212 68.3811 42.85 67.1421 41.4888ZM64.4789 50.6893C63.8506 51.535 62.9996 51.9591 61.9257 51.9591C59.586 51.9591 58.4168 50.3309 58.4168 47.0757C58.4168 45.5588 58.7336 44.3762 59.3659 43.5306C59.9995 42.6849 60.8518 42.262 61.9257 42.262C64.2574 42.262 65.4225 43.8661 65.4225 47.0757C65.4225 48.6395 65.1084 49.8436 64.4789 50.6893Z"
                  fill="#ccc"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.494 36.1423C14.5355 36.1423 13.7583 36.9088 13.7583 37.8538C13.7583 38.7988 14.5355 39.5653 15.494 39.5653C16.4524 39.5653 17.2296 38.7988 17.2296 37.8538C17.2296 36.9088 16.4524 36.1423 15.494 36.1423Z"
                  fill="#ccc"
                />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516 516">
                <path
                  d="M451.56,364.7c-11.78-11.42-27.42-17.72-44.03-17.72s-32.4,6.34-44.2,17.86c-8.93,8.72-20.16,13.53-31.62,13.53-27.42,0-49.74-26.25-49.74-58.52V76.57c0-33.46-27.98-60.7-62.39-60.7s-62.39,27.23-62.39,60.7v65.93h-49.45c-34.41,0-62.39,27.23-62.39,60.7s27.98,60.7,62.39,60.7h49.45v55.97c0,99.2,78.29,179.89,174.52,179.89,44.86,0,87.49-17.49,120.01-49.23,11.76-11.48,18.22-26.73,18.2-42.94-.02-16.21-6.55-31.44-18.34-42.88h-.02ZM107.75,247.32c-25.01,0-45.37-19.81-45.37-44.13s20.35-44.13,45.37-44.13h66.45V76.57c0-24.35,20.33-44.15,45.36-44.15s45.39,19.81,45.39,44.15v126.62h.02c0,24.33-20.37,44.13-45.39,44.13H107.75Zm345.17,160.28c0,11.8-4.68,22.88-13.24,31.23-29.3,28.61-67.64,44.36-107.95,44.36-86.84,0-157.51-73.27-157.51-163.35v-12.28c0-24.35,20.35-44.13,45.36-44.13s45.39,19.81,45.39,44.13v12.28c0,41.39,29.95,75.07,66.76,75.07,16,0,31.52-6.52,43.67-18.38,8.55-8.35,19.93-12.97,32.06-12.99h.08c12.09,0,23.45,4.56,32.02,12.86,8.6,8.32,13.32,19.39,13.34,31.18v.02Z"
                  fill="#f2f2f2"
                  fillRule="evenodd"
                />
                <path
                  d="M0,0V516H516V0H0ZM407.09,116.87c39.63,0,71.89,31.21,71.89,69.54s-32.25,69.57-71.89,69.57-71.89-31.21-71.89-69.57,32.25-69.54,71.89-69.54Zm51.05,339.88c-34.24,33.42-79.14,51.83-126.43,51.83-101.23,0-183.6-84.67-183.6-188.72v-47.14h-40.37c-39.4,0-71.47-31.18-71.47-69.52s32.06-69.52,71.47-69.52h40.37v-57.1c0-38.34,32.06-69.52,71.47-69.52s71.47,31.18,71.47,69.52v243.29c0,27.4,18.24,49.67,40.66,49.67,9.02,0,17.97-3.87,25.18-10.92,13.51-13.18,31.48-20.46,50.62-20.46s36.96,7.2,50.45,20.29c13.51,13.11,20.98,30.56,21.02,49.11h.02c.02,18.57-7.36,36.04-20.85,49.19Z"
                  fill="#f2f2f2"
                  fillRule="evenodd"
                />
              </svg>
              <div className="mask mask_a"></div>
              <div className="mask mask_b"></div>
            </div>
            <div className="loader_progress full_bg" id="progress">
              {/* <svg xmlns="http://www.w3.org/2000/svg">
                <g>
                  <ellipse
                    ry="40%"
                    rx="40%"
                    className="bar"
                    cy="50%"
                    cx="50%"
                    strokeWidth="10%"
                    stroke="#fff"
                    fill="transparent"
                  />
                </g>
              </svg> */}
            </div>
          </div>
        </div>
        <div className="loader_set" id="iniLoaderWrap">
          <div className="spinner"></div>
        </div>
        <img src={currentImage} className="bg-image" />
      </div>
    </>
  );
}

export default App;