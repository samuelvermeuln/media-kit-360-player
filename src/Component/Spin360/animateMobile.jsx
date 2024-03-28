import React, { useState } from "react";
import {
  StyledImageWrapper,
  StyledImage,
  ModalContainer,
  CloseButton,
  Image,
} from "./style";

const AnimationImageMobile = ({ src, isVisible, width, height }) => {
  const [showModal, setShowModal] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x: `${x}%`, y: `${y}%` });
    toggleModal();
  };

  return (
    <StyledImageWrapper style={{ display: isVisible ? "block" : "none" }}>
      <StyledImage
        src={src}
        alt="Rotating object"
        width={width}
        height={height}
        onClick={handleImageClick}
      />
      {showModal && (
        <ModalContainer onClick={toggleModal}>
          <CloseButton onClick={toggleModal}>X</CloseButton>
          <Image
            src={src}
            alt="Rotating object"
            width={width}
            height={height}
            onClick={toggleModal}
            zoom={showModal}
            zoomOrigin={`${zoomPosition.x} ${zoomPosition.y}`}
          />
        </ModalContainer>
      )}
    </StyledImageWrapper>
  );
};

export { AnimationImageMobile };
