import React from "react";
import {SpinImages360} from "../Component/Spin360/RotateComponent";

export default {
    title: 'SpinImages360',
    component: SpinImages360,
    tags: ['autodocs'],
};

const images = [
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-side-view.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-right-rear-three-quarter.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-rear-view.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-rear-three-quarter.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-side-view.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-left-front-three-quarter.jpeg?q=80",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/27074/civic-exterior-front-view.jpeg?q=80",
]

export const Primary = (args) => <SpinImages360 {...args} />;

Primary.args = {
    imagesBaseUrl:images
}
