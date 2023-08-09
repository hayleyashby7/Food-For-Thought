import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const contentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const footerHeight = document.querySelector("footer")?.clientHeight || 0;

    if (contentHeight > viewportHeight + footerHeight) {
      setIsFixed(false);
    } else {
      setIsFixed(true);
    }

    window.addEventListener("resize", () => {
      if (contentHeight > viewportHeight + footerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <footer
      className={`bg-yellow-400 text-green-800 flex items-center justify-center p-2 text-center text-xs sm:text-sm md:text-base ${
        isFixed ? "fixed bottom-0 inset-x-0" : ""
      }`}
    >
      <div className="flex items-center">
        <span className="custom-shadow">
          <strong>@ Food For Thought 2023</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
