import { useEffect, useState, useRef } from "react";

export default function useOnScreen(id: string) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const el = document.getElementById(id);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { threshold: 1 }
    );
  }, []);

  useEffect(() => {
    if (el) observerRef.current?.observe(el);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [el]);

  return isOnScreen;
}
