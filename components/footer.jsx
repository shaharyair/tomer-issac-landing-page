import Link from "next/link";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-12 w-full items-center justify-center bg-navbarBlack font-thin">
      <h1 style={{ direction: "rtl" }} className="text-white">
        נבנה על ידי{" "}
        <Link href="https://api.whatsapp.com/send?phone=972586520441">
          <u>Shahar Yair</u>
        </Link>{" "}
        &copy; {currentYear}
      </h1>
    </div>
  );
}

export default Footer;
