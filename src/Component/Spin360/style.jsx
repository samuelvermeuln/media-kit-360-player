import styled, {css} from "styled-components";


const StyledDiv = styled.div`
  position: relative;
  border: none;
  padding: 5px;
  display: inline-block;
  user-select: none;
  touch-action: none;
  ${(props) =>
    props.isGrabbing
      ? css`
          ${props.icon}
        `
      : css`
          ${props.icon}
        `};
`;


const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  transition: transform 0.3s ease; /* Add transition for smooth zoom effect */
  transform-origin: ${({ zoomOrigin }) =>
    zoomOrigin}; /* Set transform origin for zoom effect */
  transform: ${({ zoom }) =>
    zoom ? "scale(1.5)" : "scale(1)"}; /* Apply zoom effect */
  -moz-transform: ${({ zoom }) => (zoom ? "scale(1.5)" : "scale(1)")};
  -webkit-transform: ${({ zoom }) => (zoom ? "scale(1.5)" : "scale(1)")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const StyledImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;
  touch-action: none;
  cursor: ${({ zoomActive }) => zoomActive && "none"};
`;

const StyledImage = styled.img.attrs((props) => ({
  style: {
    userSelect: "none",
    touchAction: "none",
    WebkitUserDrag: "none",
  },
}))``;

const ZoomedArea = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
`;

const ZoomedImage = styled.img`
  position: absolute;
  top: ${({ offsetY }) => -offsetY}px;
  left: ${({ offsetX }) => -offsetX}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;


export { StyledDiv, ModalContainer, Image, CloseButton, StyledImageWrapper, StyledImage, ZoomedArea, ZoomedImage };