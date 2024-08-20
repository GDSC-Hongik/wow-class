import type { RefObject } from "react";
import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(
  onClickOutside: (event: MouseEvent) => void
) => {
  const notClickableRef: RefObject<T> = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isOutside =
        notClickableRef.current && !notClickableRef.current.contains(target);
      if (!isOutside) return;

      onClickOutside(e);
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [notClickableRef, onClickOutside]);

  return notClickableRef;
};

export default useClickOutside;
