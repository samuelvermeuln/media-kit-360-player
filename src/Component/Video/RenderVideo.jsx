import React, {useRef, useState, useCallback, useEffect} from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
    position: relative;
    width: ${({width}) => width};
    height: ${({height}) => height};
`;

const Video = styled.video`
    width: 100%;
    cursor: pointer;
`;

const Controls = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: ${({showControls}) => (showControls ? 'flex' : 'none')};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`;

const PlayPauseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    opacity: 0.8; /* tornando levemente transparente */
    width: 10%;
`;

const ProgressBar = styled.input`
    display: ${({showProgressBar}) => (showProgressBar ? 'block' : 'none')};
    width: 80%;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({progressBarColor}) => progressBarColor};
`;

const VolumeControl = styled.input`
    display: ${({showVolumeControl}) => (showVolumeControl ? 'block' : 'none')};
    width: 80px;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({volumeControlColor}) => volumeControlColor};
`;

const RetryButton = styled.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const LoadingErrorOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: ${({loaded}) => (loaded ? 0 : 1)};
    transition: opacity 0.5s ease;
    background-image: url(${({srcFallback}) => (srcFallback)});
    background-repeat: no-repeat;
    background-size: cover;
`;

const LoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: ${({loaded}) => (loaded ? 0 : 1)};
    transition: opacity 0.5s ease;
`;


const RenderVideo = React.memo(({
    src = '',
    autoplay = false,
    loop = true,
    muted = false,
    width = '100%',
    height = '100%',
    showControls = true,
    showRetryButton = true,
    showVolumeControl = true,
    showProgressBar = true,
    showPlayPauseButton = true,
    showLoadingOverlay = true,
    RetryButtonComponent = RetryButton,
    srcFallback = '',
    LoadingOverlayComponent = LoadingOverlay,
    LoadingErrorOverlayComponent = LoadingErrorOverlay,
    TextLoadingOverlayComponent ,
    playPauseButtonComponent: PlayPauseButtonComponent = PlayPauseButton,
    progressBarColor = '#ffffff',
    volumeControlColor = '#ffffff',
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const togglePlayPause = useCallback(() => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            if (videoRef.current.muted) {
                videoRef.current.muted = false;
            }
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    useEffect(() => {
        const handleLoadedData = () => {
            setLoaded(true);
        };

        const handleError = (event) => {
            setError(true);
        };

        window?.addEventListener('online', () => togglePlayPause());
        window?.addEventListener('offline', () => togglePlayPause());

        if (videoRef.current) {
            videoRef?.current?.addEventListener('loadeddata', handleLoadedData);
            videoRef?.current?.addEventListener('error', handleError);
            return () => {
                videoRef?.current?.removeEventListener('loadeddata', handleLoadedData);
                videoRef?.current?.removeEventListener('error', handleError);
            };
        }
    }, []);

    useEffect(() => {
        if (autoplay) {
            videoRef.current.muted = true;
        }
    }, []);

    const handleTimeUpdate = useCallback(() => {
        const {currentTime, duration} = videoRef.current;
        setCurrentTime(currentTime);
        setDuration(duration);
    }, []);

    const handleProgressChange = useCallback(
        (e) => {
            const newTime = e.target.value;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        },
        [setCurrentTime]
    );

    const handleVolumeChange = useCallback(
        (e) => {
            const newVolume = e.target.value;
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
        },
        [setVolume]
    );

    const handleRetry = useCallback(() => {
        videoRef.current.load();
        setError(false);
        setLoaded(false);
    }, []);

    return (
        <>
            <VideoContainer width={width} height={height}>
                <Video
                    ref={videoRef}
                    src={src}
                    controls={false}
                    autoPlay={autoplay}
                    loop={loop}
                    muted={muted}
                    volume={volume}
                    onTimeUpdate={handleTimeUpdate}
                    preload="metadata"
                    onClick={togglePlayPause}
                />
                {error && (
                    <LoadingErrorOverlayComponent srcFallback={srcFallback} loaded={loaded}>
                        <RetryButtonComponent
                            showRetryButton={showRetryButton}
                            onClick={handleRetry}
                        >
                            Retry
                        </RetryButtonComponent>
                    </LoadingErrorOverlayComponent>

                )}
                {!error && !loaded && (
                    <LoadingOverlayComponent loaded={loaded} showLoadingOverlay={showLoadingOverlay}>
                        {TextLoadingOverlayComponent && <TextLoadingOverlayComponent />}
                    </LoadingOverlayComponent>
                )}
                <Controls showControls={showControls}>
                    <PlayPauseButtonComponent
                        showPlayPauseButton={showPlayPauseButton}
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? '||' : 'Play'}
                    </PlayPauseButtonComponent>
                    <ProgressBar
                        showProgressBar={showProgressBar}
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                        progressBarColor={progressBarColor}
                    />
                    <VolumeControl
                        showVolumeControl={showVolumeControl}
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        value={volume}
                        onChange={handleVolumeChange}
                        volumeControlColor={volumeControlColor}
                    />
                </Controls>
            </VideoContainer>
        </>
    );
});

export {RenderVideo};
