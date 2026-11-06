import { useEffect, useState } from "react";

export function useScrolled(area: number) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > area);
    };

    handleScroll(); // выставить начальное значение, если страница уже прокручена
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [area]);

  return isScrolled;
}
