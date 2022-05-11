import React, { useRef } from "react";

const useEndOfScroll = (onEndOfScroll: () => void) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const onScroll = (sectionRef: React.UIEvent<HTMLElement>) => {
    if (!sectionRef || !sectionRef.currentTarget) return;

    if (
      sectionRef.currentTarget.scrollTop +
        sectionRef.currentTarget.clientHeight ===
      sectionRef.currentTarget.scrollHeight
    ) {
      onEndOfScroll();
    }
  };

  return { onScroll, sectionRef };
};

export default useEndOfScroll;
