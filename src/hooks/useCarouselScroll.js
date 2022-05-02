import { useState } from "react";
import {
  MAX_INLINE_SIZE,
  CATEGORIES_MOVIES_DB,
  CLASS_CAROUSEL_DOM,
} from "./../utils/constants";

export const useCarouselScroll = (indexCarousel) => {
  //const [scrollRight, setScrollRight] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [sizeScrollX, setSizeScrollX] = useState(MAX_INLINE_SIZE);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [path, setPath] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [counterScroll, setCounterScroll] = useState(MAX_INLINE_SIZE);

  const handleScroll = (scrollOffset) => {
    const carousel =
      document.getElementsByClassName(CLASS_CAROUSEL_DOM)[indexCarousel];

    const pathByIndex = CATEGORIES_MOVIES_DB.filter(
      (category) => category.id === indexCarousel
    );

    carousel.scrollLeft += scrollOffset;
    setScrollLeft(carousel.scrollLeft);

    /*carousel.scrollWidth === carousel.scrollLeft + MAX_INLINE_SIZE
      ? setScrollRight(true)
      : setScrollRight(false);*/

    if (carousel.scrollWidth === carousel.scrollLeft + sizeScrollX) {
      setPage(page + 1);
      setCount(count + 1);
      setSizeScrollX(sizeScrollX * count);
    }

    setCounterScroll(carousel.scrollLeft + sizeScrollX);

    setScrollWidth(carousel.scrollWidth);
    setPath(pathByIndex[0].path);
  };

  return {
    scrollLeft,
    // scrollRight,
    handleScroll,
    scrollWidth,
    counterScroll,
    path,
    page,
  };
};
