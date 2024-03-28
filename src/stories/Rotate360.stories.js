import React from "react";
import {SpinImages360} from "../Component/Spin360/RotateComponent";
import { CustomIconSvg } from "../Component/Spin360/Icon";

export default {
    title: "SpinImages360",
    component: SpinImages360,
    tags: ["autodocs"],
};

    const iconUrlEncoded = encodeURIComponent(CustomIconSvg);

    const images = [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-side-view.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-rear-three-quarter.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-rear-view.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-rear-three-quarter.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-side-view.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-front-three-quarter.jpeg?q=80",
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-front-view.jpeg?q=80",
    ];

export const Rotate360 = {
    args: {
        imagesBaseUrl: images,
        icon :`cursor: url("data:image/svg+xml,${iconUrlEncoded}") 16 16, pointer`,
    },
    render: (args) => <SpinImages360 {...args}/>,
};
