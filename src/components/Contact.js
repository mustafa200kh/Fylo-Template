import React from "react";

const Contact = () => {
  return (
    <div className="bg-bgSecond p-5 text-center">
      <div className="relative top-[140px] z-10 bg-[#1c2230] p-10 rounded-md md:w-[800px] mx-auto">
        <h2 className="mb-5 text-white text-2xl font-semibold mt-10">
          Get Early Access Today
        </h2>
        <p className="text-[#bdc4cc] mb-5">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="form flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="example@fylo.com"
            className="p-3 rounded-full caret-primary text-primary md:width-[400px] outline-none md:basis-[70%]"
          />
          <button className="mx-auto rounded-full p-2 text-white bg-primary w-[200px] transition-colors duration-200 hover:bg-hoverColor md:basis-[25%]">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
