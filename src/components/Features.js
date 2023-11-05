import React, { useState } from "react";

// Assets
import featOne from "../Assets/icon-access-anywhere.svg";
import featTwo from "../Assets/icon-security.svg";
import featThree from "../Assets/icon-collaboration.svg";
import featFour from "../Assets/icon-any-file.svg";

const Features = () => {
  const [feature, setFeature] = useState([
    {
      id: 1,
      image: featOne,
      title: "Access your files, anywhere",
      description:
        "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      id: 2,
      image: featTwo,
      title: "Security you can trust",
      description:
        "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      id: 3,
      image: featThree,
      title: " Real-time collaboration",
      description:
        "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      id: 4,
      image: featTwo,
      title: "Store any type of file",
      description:
        "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ]);
  return (
    <div id="Features" className="features bg-bgSecond">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center gap-[100px] mx-auto text-center pb-[100px]">
        {feature.map((e) => {
          return (
            <div key={e.id} className="p-3">
              <div className="">
                <img
                  src={e.image}
                  alt="feature-image"
                  className="max-w-full mx-auto mb-4"
                />
              </div>
              <h3 className="font-medium text-white text-xl mb-2">{e.title}</h3>
              <p className="text-[#bdc3cf]"> {e.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
