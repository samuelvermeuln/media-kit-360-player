import React, {useCallback, useEffect, useRef, useState} from "react";
import {AnimationImage} from "./animate";
import {StyledDiv} from "./style";
import { CustomIconSvg } from "./Icon";

const iconUrlEncoded = encodeURIComponent(CustomIconSvg);

function moduloWithoutNegative(value, n) {
    return ((value % n) + n) % n;
}

const SpinImages360 = ({
  imagesBaseUrl = [],
  mouseDragSpeed = 5,
  reverse = false,
  autoplaySpeed = 1,
  autoplay = true,
  width = 400,
  height = 300,
  imageInitialIndex = 0,
  shouldNotifyEvents = false,
  icon = `cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer`,
  notifyOnPointerDown,
  notifyOnPointerUp,
  notifyOnPointerMoved,
}) => {
  const elementRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState(0);
  const [startingImageIndexOnPointerDown, setStartingImageIndexOnPointerDown] =
    useState(0);
  const [currentMousePosition, setCurrentMousePosition] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [useAutoplay, setUseAutoplay] = useState(autoplay);

  const imagesCount = imagesBaseUrl.length;

  useEffect(() => {
    setUseAutoplay(autoplay);
  }, [autoplay]);

  useEffect(() => {
    if (typeof imageInitialIndex === "undefined") return;
    if (imageInitialIndex < 0 || imageInitialIndex >= imagesCount) {
      setSelectedImageIndex(imageInitialIndex);
      console.log(
        `ImageInitialIndex of ${imageInitialIndex} was out of bounds of 0 and count: ${imagesCount}`
      );
    }

    setSelectedImageIndex(imageInitialIndex);
  }, [imageInitialIndex, imagesCount]);

  useEffect(() => {
    if (!useAutoplay) return;

    const timer = setTimeout(() => {
      incrementImageIndex(1);
    }, 1000 / autoplaySpeed);

    return () => clearTimeout(timer);
  }, [selectedImageIndex, useAutoplay, autoplaySpeed]);

  useEffect(() => {
    const imageIndexWithOffset = (start, offset) => {
      let index = moduloWithoutNegative(
        start + (reverse ? -1 : 1) * Math.floor(offset),
        imagesCount
      );
      setSelectedImageIndex(index);
    };

    if (!isScrolling) return;

    const scaleFactor = 100;
    let speedFactor =
      (1 / mouseDragSpeed) * ((imagesCount * width) / scaleFactor);
    const changeInX = currentMousePosition - initialMousePosition;

    let difference = changeInX / speedFactor;

    imageIndexWithOffset(startingImageIndexOnPointerDown, difference);
  }, [
    currentMousePosition,
    imagesCount,
    startingImageIndexOnPointerDown,
    initialMousePosition,
    isScrolling,
    mouseDragSpeed,
    width,
    reverse,
  ]);

  const incrementImageIndex = useCallback(
    (change) => {
      let index = moduloWithoutNegative(
        selectedImageIndex + (reverse ? -1 : 1) * Math.floor(change),
        imagesCount
      );

      setSelectedImageIndex(index);
    },
    [selectedImageIndex, reverse, imagesCount]
  );

  const onMouseDown = useCallback(
    (e) => {
      setInitialMousePosition(e.clientX);
      setCurrentMousePosition(e.clientX);
      setStartingImageIndexOnPointerDown(selectedImageIndex);
      setUseAutoplay(false);
      setIsScrolling(true);

      document.addEventListener(
        "mouseup",
        () => {
          onMouseUp();
        },
        { once: true }
      );

      if (shouldNotifyEvents) notifyOnPointerDown?.(e.clientX, e.clientY);
    },
    [selectedImageIndex, shouldNotifyEvents, notifyOnPointerDown]
  );

  const onMouseUp = useCallback(
    (e) => {
      setIsScrolling(false);

      if (!shouldNotifyEvents) return;

      if (typeof e !== "undefined") notifyOnPointerUp?.(e?.clientX, e.clientY);
      else {
        notifyOnPointerUp?.(0, 0);
      }
    },
    [shouldNotifyEvents, notifyOnPointerUp]
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!isScrolling) return;

      setCurrentMousePosition(e.clientX);

      if (shouldNotifyEvents) notifyOnPointerMoved?.(e.clientX, e.clientY);
    },
    [isScrolling, shouldNotifyEvents, notifyOnPointerMoved]
  );

  return (
    <StyledDiv
      ref={elementRef}
      isGrabbing={isScrolling}
      icon={icon}
      onPointerDown={onMouseDown}
      onPointerMove={onMouseMove}
      onMouseLeave={() => {
        if (!useAutoplay && autoplay) setUseAutoplay(true);
      }}
    >
      {imagesBaseUrl?.map((value, index) => (
        <AnimationImage
          src={value}
          width={width}
          height={height}
          isVisible={index === selectedImageIndex}
          key={index}
        />
      ))}
    </StyledDiv>
  );
};

export { SpinImages360 }