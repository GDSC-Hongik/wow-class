import type { MutableRefObject } from "react";
import { useEffect, useState } from "react";

const useScrollCarouselButtonVisibility = (
  containerRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const updateScrollRightButtonVisibility = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const scrollWidth = container.scrollWidth;
        const scrollLeft = container.scrollLeft;

        setShowRightButton(scrollWidth - containerWidth > scrollLeft);
      }
    };

    updateScrollRightButtonVisibility();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollRightButtonVisibility);
    }

    return () => {
      if (container) {
        container.removeEventListener(
          "scroll",
          updateScrollRightButtonVisibility
        );
      }
    };
  }, [containerRef]);

  return showRightButton;
};

export default useScrollCarouselButtonVisibility;
