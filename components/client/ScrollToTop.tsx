"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-24 border right-6 size-12 flex justify-center items-center cursor-pointer bg-white z-50 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <i className="fa-solid fa-arrow-up-long text-lg text-black" style={{opacity:"0.8"}}></i>
        </div>
      )}
    </>
  );
}