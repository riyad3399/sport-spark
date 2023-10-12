import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
