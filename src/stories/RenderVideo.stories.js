import React from 'react';
import { RenderVideo } from '../Component/Video/RenderVideo';

export default {
    title: 'RenderVideo',
    component: RenderVideo,
    parameters: {
        docs: {
            description: {
                component: 'Componente para renderização de vídeos com várias opções de personalização.',
            },
        },
    },
    argTypes: {
        autoplay: {
            control: 'boolean',
        },
        loop: {
            control: 'boolean',
        },
        muted: {
            control: 'boolean',
        },
        width: {
            control: 'text',
        },
        height: {
            control: 'text',
        },
        showControls: {
            control: 'boolean',
        },
        showRetryButton: {
            control: 'boolean',
        },
        showVolumeControl: {
            control: 'boolean',
        },
        showProgressBar: {
            control: 'boolean',
        },
        showPlayPauseButton: {
            control: 'boolean',
        },
        showLoadingOverlay: {
            control: 'boolean',
        },
        progressBarColor: {
            control: 'color',
        },
        volumeControlColor: {
            control: 'color',
        },
        playPauseButtonComponent: {
            control: null,
        },
    },
};

const src =
    'https://www.w3schools.com/html/mov_bbb.mp4';

const srcFallback = 'https://encurtador.com.br/eilHP';

export const Default = (args) => <RenderVideo src={src} {...args} />;

export const AutoplayGreenButton = (args) => <RenderVideo src={src} {...args} />;

AutoplayGreenButton.args = {
    autoplay: true,
    playPauseButtonComponent: () => <button style={{ backgroundColor: 'green', color: 'white' }}>Play/Pause</button>,
};

export const RedProgressBar = (args) => <RenderVideo src={src} {...args} />;

RedProgressBar.args = {
    showProgressBar: true,
    progressBarColor: 'red',
};

export const LoadingOverlayOnly = (args) => <RenderVideo {...args} />;

LoadingOverlayOnly.args = {
    showLoadingOverlay: true,
    showControls: false,
    showRetryButton: false,
    src: '',
    srcFallback
};

export const RetryButtonVisible = (args) => <RenderVideo src={src} {...args} />;

RetryButtonVisible.args = {
    showRetryButton: true,
};

export const NoControlButtons = (args) => <RenderVideo src={src} {...args} />;

NoControlButtons.args = {
    showControls: false,
    showRetryButton: false,
};
