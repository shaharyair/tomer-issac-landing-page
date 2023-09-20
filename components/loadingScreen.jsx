"use client";

import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Use a setTimeout to hide the component after 3 seconds
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {visible && (
        <div className=" animate-loading-screen fixed left-0 top-0 z-[999] flex h-screen w-screen flex-col items-center justify-center gap-10 bg-navbarBlack">
          <h1 className="text-5xl font-extralight tracking-wider text-main lg:text-6xl">
            Cashiyado
          </h1>
          <BarLoader
            color="#6D9886"
            cssOverride={{
              width: "60vw",
              maxWidth: "300px",
            }}
          />
        </div>
      )}
    </>
  );
}
