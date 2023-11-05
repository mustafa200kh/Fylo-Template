import React from "react";

// Assets
import landing from "../Assets/illustration-intro.png";

const Landing = () => {
  return (
    <div className="w-full p-5 sm:w-[50vw] mt-[164px] mx-auto text-center">
      <div className="w-full mb-3">
        <img src={landing} alt="Landing-image" className="max-w-full" />
      </div>
      <div className="">
        <h2 className="text-3xl font-bold text-white mb-5">
          All your files in on secure location,
          <br /> accessible anywhere.
        </h2>
        <p className="text-[#bdc3cf] mb-5">
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with friends
          <br />
          family, and co-workers.
        </p>
        <button className="rounded-full p-2 text-white bg-primary w-[200px] transition-colors duration-200 hover:bg-hoverColor">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Landing;
