import { useEffect, useMemo, useState } from "react";

export default function useVisibilityCheck(element: HTMLDivElement) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), []);

  useEffect(() => {
    observer.observe(element);
    return () => { observer.disconnect(); };
  }, [element, observer]);

  return isIntersecting;
}