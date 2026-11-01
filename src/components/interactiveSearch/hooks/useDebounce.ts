import { useState, useEffect } from "react";

export function useDebounce(search: string): string {
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [search]);

  return debouncedSearch;
}
