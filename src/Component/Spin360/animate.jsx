import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  user-select: none;
  touch-action: none;
  //cursor: inherit;
  -webkit-user-drag: none;
`;

const AnimationImage = ({ src, isVisible, width, height }) => {
    let display = isVisible ? "block" : "none";
    return (
        <StyledImage
            alt="Rotating object"
            src={src}
            width={width}
            height={height}
            style={{ display: display }}
        />
    );
};

export {AnimationImage};
