import React, {useCallback, useEffect, useRef, useState} from "react";
import styled, { css } from "styled-components";
import {StyledRotateIcon} from "./Icon/style";
import {AnimationImage} from "./animate";
import { uuid } from 'uuidv4';

function moduloWithoutNegative(value, n) {
    return ((value % n) + n) % n;
}

const CustomIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.693 25" xml:space="preserve" width="37.354" height="20">
        <path d="M5.082 11.901c-8.448 4.636 14.306 7.452 19.432 7.407v-2.827l4.258 4.257-4.258 4.264v-2.648c-10.302.389-34.549-6.241-19.965-11.743q.208.646.494 1.216zm36.095-8.743q0-1.488.535-2.083c.535-.593.901-.592 1.634-.592q.528.002.866.13.337.13.551.337t.337.438a2 2 0 0 1 .197.535q.146.582.144 1.22 0 1.423-.483 2.078-.478.656-1.656.658-.656-.002-1.064-.21a1.75 1.75 0 0 1-.665-.615 2.3 2.3 0 0 1-.292-.786 5.3 5.3 0 0 1-.107-1.109m-31.117.829-3.42-.607Q7.062 1.748 8.274.878 9.484 0 11.703 0q2.545 0 3.683.949 1.133.953 1.133 2.391-.004.844-.459 1.523-.459.685-1.388 1.197.755.187 1.152.438.648.401 1.006 1.053t.362 1.558q0 1.138-.592 2.185-.598 1.043-1.714 1.607c-1.117.564-1.726.563-2.94.563q-1.774 0-2.798-.418a4.2 4.2 0 0 1-1.687-1.223q-.662-.806-1.013-2.025l3.623-.483q.212 1.095.662 1.523.446.424 1.14.424.726 0 1.208-.531c.483-.531.483-.829.483-1.423q0-.907-.465-1.401c-.465-.496-.729-.498-1.261-.498q-.423-.002-1.168.212l.187-2.588q.298.045.465.045.703 0 1.171-.452c.467-.452.473-.653.473-1.068q0-.599-.354-.948-.356-.354-.969-.354a1.4 1.4 0 0 0-1.033.385q-.403.378-.543 1.341m18.499-.844-3.603.44q-.142-.749-.473-1.057-.337-.308-.821-.308-.878-.004-1.364.885-.356.642-.525 2.733.65-.659 1.329-.973.685-.315 1.582-.315 1.743 0 2.946 1.241 1.203 1.249 1.204 3.158 0 1.288-.607 2.356-.609 1.068-1.687 1.615-1.08.547-2.71.547-1.955.002-3.134-.669-1.179-.668-1.889-2.123c-.71-1.455-.706-2.261-.706-3.868q0-3.523 1.487-5.163Q21.06 0 23.697 0q1.554-.002 2.455.358c.901.36 1.101.592 1.496 1.048q.599.694.908 1.735m-6.662 5.806q0 1.06.531 1.656.535.599 1.308.599a1.53 1.53 0 0 0 1.194-.543q.478-.543.478-1.618 0-1.101-.498-1.679a1.58 1.58 0 0 0-1.239-.578q-.753 0-1.268.563-.504.558-.504 1.599m7.71-2.273q0-3.71 1.337-5.194T35.012 0q1.315.002 2.158.323.844.327 1.376.844.537.519.838 1.092.306.576.494 1.337.364 1.453.364 3.041.002 3.543-1.203 5.183-1.194 1.64-4.13 1.642-1.642 0-2.656-.525a4.3 4.3 0 0 1-1.662-1.539q-.469-.718-.733-1.965a14 14 0 0 1-.259-2.755m3.583.008q-.004 2.484.44 3.397.44.908 1.277.908a1.36 1.36 0 0 0 .953-.385q.407-.389.592-1.223.193-.837.191-2.603c0-1.729-.144-2.888-.44-3.488q-.44-.891-1.319-.893-.897.002-1.3.908-.393.917-.395 3.378m9.424-3.522q-.002.996.175 1.362t.512.364a.53.53 0 0 0 .385-.156q.159-.153.239-.49.076-.337.076-1.041.002-1.039-.175-1.399c-.177-.36-.292-.358-.528-.358q-.36 0-.519.364-.165.366-.163 1.353m-1.08 8.325c4.012 2.041 3.054 4.936-4.051 6.694a41 41 0 0 1-6.786 1.136v2.298c2.778-.194 5.362-.833 7.623-1.379 10.685-2.588 10.312-7.208 3.557-9.815a10 10 0 0 1-.343 1.064" style="fill-rule:evenodd;clip-rule:evenodd"/>
    </svg>
`;

const iconUrlEncoded = encodeURIComponent(CustomIconSvg);

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
                cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer;
            `
            : css`
                cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer;
            `};
    `;

const SpinImages360 = ({
        imagesBaseUrl = [],
        mouseDragSpeed = 5,
        reverse = false,
        autoplaySpeed = 1,
        autoplay = true,
        width = 400,
        height = 300,
        showRotationIconOnStartup = false,
        imageInitialIndex = 0,
        shouldNotifyEvents = false,
        notifyOnPointerDown,
        notifyOnPointerUp,
        notifyOnPointerMoved,
    }) => {
    const elementRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [initialMousePosition, setInitialMousePosition] = useState(0);
    const [startingImageIndexOnPointerDown, setStartingImageIndexOnPointerDown] = useState(0);
    const [currentMousePosition, setCurrentMousePosition] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showRotationIcon, setShowRotationIcon] = useState(showRotationIconOnStartup);
    const [useAutoplay, setUseAutoplay] = useState(autoplay);
    const [imageSources, setImageSources] = useState([]);

    const imagesCount = imagesBaseUrl.length;

    useEffect(() => {
        setUseAutoplay(autoplay);
        setShowRotationIcon(!autoplay && showRotationIconOnStartup);
    }, [autoplay, showRotationIconOnStartup]);

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
    });

    useEffect(() => {
        const createImageSources = () => {
            return imagesBaseUrl.map((value) => ({
                src: value,
                index: uuid()
            }));
        };

        setImageSources(createImageSources());
    }, [imagesBaseUrl]);

    const incrementImageIndex = useCallback((change) => {
        let index = moduloWithoutNegative(
            selectedImageIndex + (reverse ? -1 : 1) * Math.floor(change),
            imagesCount
        );

        setSelectedImageIndex(index);
    }, [selectedImageIndex, reverse, imagesCount]);

    const onMouseDown = useCallback((e) => {
        setInitialMousePosition(e.clientX);
        setCurrentMousePosition(e.clientX);
        setStartingImageIndexOnPointerDown(selectedImageIndex);
        setUseAutoplay(false);
        setIsScrolling(true);
        setShowRotationIcon(false);

        document.addEventListener(
            "mouseup",
            () => {
                onMouseUp();
            },
            { once: true }
        );

        if (shouldNotifyEvents) notifyOnPointerDown?.(e.clientX, e.clientY);
    }, [selectedImageIndex, shouldNotifyEvents, notifyOnPointerDown]);

    const onMouseUp = useCallback((e) => {
        setIsScrolling(false);

        if (!shouldNotifyEvents) return;

        if (typeof e !== "undefined") notifyOnPointerUp?.(e?.clientX, e.clientY);
        else {
            notifyOnPointerUp?.(0, 0);
        }
    }, [shouldNotifyEvents, notifyOnPointerUp]);

    const onMouseMove = useCallback((e) => {
        if (!isScrolling) return;

        setCurrentMousePosition(e.clientX);

        if (shouldNotifyEvents) notifyOnPointerMoved?.(e.clientX, e.clientY);
    }, [isScrolling, shouldNotifyEvents, notifyOnPointerMoved]);

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

    return (
        <StyledDiv
            ref={elementRef}
            isGrabbing={isScrolling}
            onPointerDown={onMouseDown}
            onPointerMove={onMouseMove}
        >
            {showRotationIcon ? (
                <StyledRotateIcon widthInEm={2} isReverse={reverse}></StyledRotateIcon>
            ) : null}
            {imageSources?.map((s, index) => (
                <AnimationImage
                    src={s.src}
                    width={width}
                    height={height}
                    isVisible={index === selectedImageIndex}
                    key={index}
                ></AnimationImage>
            ))}
        </StyledDiv>
    );
};

export { SpinImages360 }