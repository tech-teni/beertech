import { useCallback, useRef } from "react";

export const useInfiniteScroll = ({ isFetching, hasMore, onLastIndexScrollView }) => {
  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !!hasMore) {
          onLastIndexScrollView();
        }
      });
      if (node) observer.current.observe(node);
    },
    [onLastIndexScrollView, hasMore, isFetching]
  );

  return lastItemRef;
};