import React, { useState, useEffect } from "react";
import { AnimationImageMobile } from "./animateMobile";
import {
  StyledImageWrapper,
  StyledImage,
  ZoomedArea,
  ZoomedImage,
} from "./style";

const AnimationImage = ({ src, isVisible, width, height }) => {
  const [zoomActive, setZoomActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCursorPosition = (e) => {
    const img = e.currentTarget;
    const imgRect = img.getBoundingClientRect();
    const x = e.pageX - window.pageXOffset - imgRect.left;
    const y = e.pageY - window.pageYOffset - imgRect.top;
    return { x, y };
  };

  const handleMouseMove = (e) => {
    if (zoomActive) {
      const { x, y } = getCursorPosition(e);
      setMousePosition({ x, y });
    }
  };

  const handleImageClick = () => {
    if (isVisible) {
      setZoomActive(!zoomActive);
    }
  };

  const handleMouseLeave = () => {
    setZoomActive(false);
  };

  return (
    <>
      {isMobile ? (
        <AnimationImageMobile
          src={src}
          isVisible={isVisible}
          width={width}
          height={height}
        />
      ) : (
        <StyledImageWrapper
          onMouseMove={handleMouseMove}
          onClick={handleImageClick}
          zoomActive={zoomActive}
          onMouseLeave={handleMouseLeave}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <StyledImage
            src={src}
            alt="Rotating object"
            width={width}
            height={height}
          />
          {zoomActive && (
            <ZoomedArea x={mousePosition.x - 100} y={mousePosition.y - 100}>
              <ZoomedImage
                src={src}
                alt="Zoomed object"
                width={width * 2}
                height={height * 2}
                offsetX={(mousePosition.x / width) * (width * 2) - 100}
                offsetY={(mousePosition.y / height) * (height * 2) - 100}
              />
            </ZoomedArea>
          )}
        </StyledImageWrapper>
      )}
    </>
  );
};

export { AnimationImage };
