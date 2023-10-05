'use client'
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Check if window is defined (client-side) before accessing localStorage
  const isClient = typeof window !== "undefined";

  const [value, setValue] = useState<T>(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key);

      if (storedValue != null) return JSON.parse(storedValue);

      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      return initialValue;
    }
  }); 

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [isClient, key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
