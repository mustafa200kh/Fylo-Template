import React from "react";

// Svgs
import logoImage from "../Assets/logo.svg";
import loctionIcon from "../Assets/icon-location.svg";
import phoneIcon from "../Assets/icon-phone.svg";
import emailIcon from "../Assets/icon-email.svg";
import facebookIcon from "../Assets/facebook.svg";
import instagramIcon from "../Assets/instagram.svg";
import twitterIcon from "../Assets/twitter.svg";

const Footer = () => {
  return (
    <div className="footer bg-[#0c1524] pt-[200px] pb-[70px]">
      <div className="container mx-auto">
        <div className="image-image mb-5">
          <img className="mx-auto md:ml-0" src={logoImage} alt="image-logo" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-[30%]">
            <div className="caption flex gap-3 items-start p-[14px]">
              <div className="basis-[20%]">
                <img className="" src={loctionIcon} alt="location-icon" />
              </div>
              <p className=" text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="conatact basis-[25%] text-white p-5">
            <div className="flex gap-5 mb-5">
              <img src={phoneIcon} alt="icon" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex gap-5">
              <img src={emailIcon} alt="icon" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="links basis-[12%] text-white p-5">
            <ul>
              <li className="mb-3">About us</li>
              <li className="mb-3"> Jobs</li>
              <li className="mb-3">Press</li>
              <li className="mb-3">Blog</li>
            </ul>
          </div>
          <div className="links basis-[12%] text-white p-5">
            <ul>
              <li className="mb-3"> Contact us</li>
              <li className="mb-3"> Terms</li>
              <li className="mb-3">Privacy</li>
            </ul>
          </div>
          <div className="Social basis-[20%] flex gap-5 p-5">
            <div className="basis-[10%] md:basis-[27%]">
              <img src={facebookIcon} alt="social" className="max-w-full" />
            </div>
            <div className="basis-[10%] md:basis-[27%]">
              <img src={instagramIcon} alt="social" className="max-w-full" />
            </div>
            <div className="basis-[10%] md:basis-[27%]">
              <img src={twitterIcon} alt="social" className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
