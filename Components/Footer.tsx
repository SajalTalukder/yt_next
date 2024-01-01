import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-[7rem] pb-[2rem] bg-gray-100">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 border-b-2 pb-[2rem] md:grid-cols-2 lg:grid-cols-4 gap-[3rem] ">
        {/* First */}
        <div>
          <h1 className="footer__heading">Support</h1>
          <div>
            <a href="#_" className="footer__link">
              Help Center
            </a>
            <a href="#_" className="footer__link">
              Safety information
            </a>
            <a href="#_" className="footer__link">
              Cancellation options
            </a>
            <a href="#_" className="footer__link">
              Medical Doctor
            </a>
          </div>
        </div>
        {/* Second */}
        <div>
          <h1 className="footer__heading">Company</h1>
          <div>
            <a href="#_" className="footer__link">
              About us
            </a>
            <a href="#_" className="footer__link">
              Community Blog
            </a>
            <a href="#_" className="footer__link">
              Careers
            </a>
            <a href="#_" className="footer__link">
              Privacy policy
            </a>
            <a href="#_" className="footer__link">
              Terms of service
            </a>
          </div>
        </div>
        {/* Thired */}
        <div>
          <h1 className="footer__heading">Contact</h1>
          <div>
            <a href="#_" className="footer__link">
              Partnerships
            </a>
            <a href="#_" className="footer__link">
              FAQ
            </a>
            <a href="#_" className="footer__link">
              Get in Touch
            </a>
          </div>
        </div>
        <div>
          <h1 className="footer__heading">Social</h1>
          <div className="flex items-center space-x-4  text-white text-[1.3rem]">
            <div className="footer__icon bg-[#0165E1] ">
              <FaFacebookF />
            </div>
            <div className="footer__icon bg-[#cd486b]">
              <FaInstagram />
            </div>
            <div className="footer__icon bg-[#1DA1F2]">
              <FaTwitter />
            </div>
            <div className="footer__icon bg-[#CD201F]">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[1rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto">
        <p className="text-[17px] text-black] opacity-60 font-semibold">
          &#169; Copyright webdevwarrior 2023
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
