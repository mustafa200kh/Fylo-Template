import React from "react";

// Assets
import productivityImage from "../Assets/illustration-stay-productive.png";
import arrowRight from "../Assets/icon-arrow.svg";

// css Files
import "./productivity.css";

const Prodctivity = () => {
  return (
    <div className="productivity bg-bgSecond py-5">
      <div className="container flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="basis-[45%] mb-8 p-4 md:mb-0 md:p-0">
          <img src={productivityImage} alt="team_mates" />
        </div>
        <div className="basis-[45%] p-4 md:p-0  text-center md:text-left">
          <h2 className="text-3xl text-white font-semibold mb-5">
            Stay productive,
            <br />
            wherever you are.
          </h2>
          <p className="text-[#bdc4cc] mb-5">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
            <br />
            <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="productive-btn border-b-2 border-b-primary w-fit py-1 transition-all duration-200 hover:border-b-white mx-auto md:ml-0">
            <button className="bg-transparent text-primary transition-all duration-200 mr-3">
              See how Fylo works
            </button>
            <span className="">
              <img
                src={arrowRight}
                alt="arrow-right"
                className="inline-block filter-none transition-all duration-200 animate-[moveRight_1s_ease-in-out_infinite]"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodctivity;
