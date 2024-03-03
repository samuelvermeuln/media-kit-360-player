import styled, { css } from "styled-components";
import {Icon} from "./Rotate";

const StyledRotateIcon = styled(Icon)`
  position: absolute;
  fill: #eee;
  text-shadow: 4px 5px black;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  opacity: 0.8;
  ${(props) =>
    css`
      top: calc(50% - ${props.widthInEm / 2}em);
      left: calc(50% - ${props.widthInEm / 2}em);
      width: ${props.widthInEm}em;
      transform: scaleX(${props.isReverse ? "-1" : "1"});
    `};
`;

export {StyledRotateIcon};
