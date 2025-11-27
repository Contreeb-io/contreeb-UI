import { useEffect, useState } from "react";

export function useScroll() {
  const [changeBg, setChangeBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setChangeBg(true);
      } else {
        setChangeBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {};
  }, []);

  return changeBg;
}
