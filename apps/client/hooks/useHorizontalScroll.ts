import { useRef } from "react";

export default function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (distance: number) => {
    if (!containerRef.current) {
      return;
    }

    containerRef.current.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  };

  return { handleScroll, containerRef };
}
