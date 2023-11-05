import React, { useRef } from "react";
import { useEffect } from "react";

// Assets
import Logo from "../Assets/logo.svg";

const Navbar = () => {
  const links = ["Features", "Team", "SignIn"];
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        console.log(headerRef);
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "64px 16px";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="transition-all duration-200 px-4 py-14 fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto  ms-auto flex justify-between items-center">
        <div className="logo w-[140px] sm:w-fit">
          <img src={Logo} alt="Logo_image" className="max-w-full" />
        </div>
        <nav className="">
          <ul className="flex gap-3 sm:gap-6">
            {links.map((e) => {
              return (
                <li
                  key={e}
                  className="text-[#bdc4cc] border-b-0 border-b-transparent transition-all duration-200 hover:text-white hover:border-b-[1px] hover:border-b-white"
                >
                  <a href={`#${e}`} className="">
                    {e}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
