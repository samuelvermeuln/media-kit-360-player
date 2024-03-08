import styled, {css} from "styled-components";
import {CustomIconSvg} from "./Icon";

const iconUrlEncoded = encodeURIComponent(CustomIconSvg);

export const StyledDiv = styled.div`
    position: relative;
    border: none;
    padding: 5px;
    display: inline-block;
    user-select: none;
    touch-action: none;
    ${(props) =>
    props.isGrabbing
        ? css`
                cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer;
            `
        : css`
                cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer;
            `};
    `;
