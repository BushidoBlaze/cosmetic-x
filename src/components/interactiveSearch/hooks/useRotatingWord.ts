import { useState, useEffect } from "react";

export const PLACEHOLDER_WORDS = [
  "perfume",
  "skin care",
  "make-up",
  "accessories",
];

export function useRotatingWord(words: string[]): string {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return words[index];
}
