import type { RefObject } from "react";
import { useEffect } from "react";

const useResizeTextarea = <T>(
  refList: RefObject<HTMLTextAreaElement>[],
  data: T
) => {
  const autoResizeTextarea = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  useEffect(() => {
    refList.map((ref) => autoResizeTextarea(ref.current));
  }, [data, refList]);
};

export default useResizeTextarea;
