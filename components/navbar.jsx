"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { Fade as Hamburger } from "hamburger-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setMobileNavbar(!mobileNavbar);
  };

  useEffect(() => {
    const closeMobileNavbarOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavbar(false);
      }
    };

    const handleLinkClick = (event) => {
      // Check if the click target is a link or a descendant of a link
      const isLinkClicked = event.target.closest("a");

      // If a link was clicked, close the mobile navbar
      if (isLinkClicked) {
        setMobileNavbar(false);
      }
    };

    const handleOutsideClick = (event) => {
      // Check if the click target is outside the navbar container
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileNavbar(false);
      }
    };

    document.addEventListener("click", handleLinkClick);
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", closeMobileNavbarOnResize);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", closeMobileNavbarOnResize);
    };
  }, [mobileNavbar]);

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex h-navbarHeight w-full items-center justify-center bg-navbarBlack/80 drop-shadow-lg backdrop-blur-sm">
        <div
          ref={navbarRef}
          className="container flex items-center justify-between px-3 text-white lg:px-5"
        >
          <ComponentLinks mobileNavbar={mobileNavbar} />
          <Link
            href="#home"
            className="p-2 text-2xl text-main lg:order-3 lg:p-0 lg:text-3xl"
          >
            <h1 className="font-extralight tracking-widest">Cashiyado</h1>
          </Link>
          <SocialLinks />
          <HamburgerButton
            mobileNavbar={mobileNavbar}
            handleToggle={handleToggle}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

function SocialLinks() {
  return (
    <>
      <div className=" flex items-center justify-center gap-2 text-xl text-white lg:gap-3">
        <Link href="https://www.instagram.com/cashiyado/">
          <div className="rounded-full bg-black p-2 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaInstagram />
          </div>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100013457760835&mibextid=nW3QTL">
          <div className="rounded-full bg-black p-2 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaFacebookF />
          </div>
        </Link>
        <Link href="https://youtube.com/@Cashiyado?si=rbU4LP1UypUNhEvw">
          <div className="rounded-full bg-black p-2 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaYoutube />
          </div>
        </Link>
        <Link href="https://www.tiktok.com/@cashiyado?_t=8fexZHKpoMT&_r=1">
          <div className="rounded-full bg-black p-2 transition-colors duration-300 hover:bg-white hover:text-black">
            <FaTiktok />
          </div>
        </Link>
      </div>
    </>
  );
}

function ComponentLinks({ mobileNavbar }) {
  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className={` ${
          mobileNavbar && "right-0"
        } absolute -right-3/4 top-navbarHeight flex h-screen w-3/4 flex-col items-center justify-start divide-y divide-white/20 whitespace-nowrap bg-navbarBlack pt-2 text-center text-lg font-extralight text-white backdrop-blur-sm transition-mobileNavbar duration-150 lg:static lg:right-auto lg:top-auto lg:order-2 lg:mr-5 lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:gap-3 lg:divide-y-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:transition-none `}
      >
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors duration-300  hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          ראשי
        </Link>
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors duration-300  hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          ראשי
        </Link>
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors duration-300  hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          ראשי
        </Link>
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors duration-300  hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          ראשי
        </Link>
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors duration-300  hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          Mashups
        </Link>
        <Link
          href="#home"
          className="w-[95%] p-5 transition-colors  duration-300 hover:bg-main lg:rounded-sm lg:px-4 lg:py-2"
        >
          צור קשר
        </Link>
      </div>
    </>
  );
}

function HamburgerButton({ mobileNavbar, handleToggle }) {
  return (
    <>
      <div className="block lg:hidden">
        <Hamburger
          toggled={mobileNavbar}
          toggle={handleToggle}
          size={20}
          direction="right"
          duration={0.15}
          rounded
        />
      </div>
    </>
  );
}
