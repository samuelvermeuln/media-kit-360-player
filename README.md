```markdown
## SpinImages360 Component Documentation

##[Example]()

| Parameter               | Type        | Description                                        |
| :---------------------- | :---------- | :------------------------------------------------- |
| `imagesBaseUrl`         | `Array`     | An array of URLs representing the base URLs for the images. |
| `mouseDragSpeed`        | `Number`    | The speed factor for mouse drag. Higher values mean slower dragging. |
| `reverse`               | `Boolean`   | Determines whether the images should rotate in reverse order. |
| `autoplaySpeed`         | `Number`    | The speed of autoplay rotation in seconds per image. |
| `autoplay`              | `Boolean`   | Determines whether the gallery should autoplay.    |
| `width`                 | `Number`    | The width of the gallery container in pixels.      |
| `height`                | `Number`    | The height of the gallery container in pixels.     |
| `showRotationIconOnStartup` | `Boolean` | Determines whether the rotation icon should be shown initially. |
| `imageInitialIndex`     | `Number`    | The initial index of the image to be displayed in the gallery. |
| `shouldNotifyEvents`    | `Boolean`   | Determines whether event notifications should be enabled. |
| `notifyOnPointerDown`   | `Function`  | A function to be called when a pointer down event occurs. |
| `notifyOnPointerUp`     | `Function`  | A function to be called when a pointer up event occurs. |
| `notifyOnPointerMoved`  | `Function`  | A function to be called when a pointer move event occurs. |

### Example Usage:

```javascript
<SpinImages360
    imagesBaseUrl={[
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
    ]}
    autoplay={true}
    width={600}
    height={400}
    showRotationIconOnStartup={true}
    imageInitialIndex={1}
    shouldNotifyEvents={true}
    notifyOnPointerDown={(x, y) => console.log('Pointer down at:', x, y)}
    notifyOnPointerUp={(x, y) => console.log('Pointer up at:', x, y)}
    notifyOnPointerMoved={(x, y) => console.log('Pointer moved to:', x, y)}
/>
```
```

```markdown
## RenderVideo Component Documentation

##[Example]()

| Parameter               | Type        | Description                                      |
| :---------------------- | :---------- | :----------------------------------------------- |
| `src`                   | `String`    | The URL of the video to be played.              |
| `autoplay`              | `Boolean`   | Determines whether the video should autoplay.   |
| `loop`                  | `Boolean`   | Determines whether the video should loop.       |
| `muted`                 | `Boolean`   | Determines whether the video should be muted.    |
| `width`                 | `String` or `Number` | The width of the video container.         |
| `height`                | `String` or `Number` | The height of the video container.        |
| `showControls`          | `Boolean`   | Determines whether video controls should be shown. |
| `showRetryButton`       | `Boolean`   | Determines whether the retry button should be shown when an error occurs. |
| `showVolumeControl`     | `Boolean`   | Determines whether the volume control should be shown. |
| `showProgressBar`       | `Boolean`   | Determines whether the progress bar should be shown. |
| `showPlayPauseButton`   | `Boolean`   | Determines whether the play/pause button should be shown. |
| `showLoadingOverlay`    | `Boolean`   | Determines whether the loading overlay should be shown. |
| `RetryButtonComponent`  | `Component` | The component used for the retry button.         |
| `srcFallback`           | `String`    | The fallback URL of the video in case of loading errors. |
| `LoadingOverlayComponent` | `Component` | The component used for the loading overlay.    |
| `LoadingErrorOverlayComponent` | `Component` | The component used for the loading error overlay. |
| `TextLoadingOverlayComponent` | `Component` | The component used for the text loading overlay. |
| `playPauseButtonComponent` | `Component` | The component used for the play/pause button.   |
| `progressBarColor`      | `String`    | The color of the progress bar.                   |
| `volumeControlColor`    | `String`    | The color of the volume control.                 |

### Example Usage:

```javascript
<RenderVideo
    src="https://example.com/video.mp4"
    autoplay={true}
    loop={true}
    muted={false}
    width={500}
    height={300}
    showControls={true}
    showRetryButton={true}
    showVolumeControl={true}
    showProgressBar={true}
    showPlayPauseButton={true}
    showLoadingOverlay={true}
    RetryButtonComponent={CustomRetryButton}
    srcFallback="https://example.com/fallback-video.mp4"
    LoadingOverlayComponent={CustomLoadingOverlay}
    LoadingErrorOverlayComponent={CustomErrorOverlay}
    TextLoadingOverlayComponent={CustomTextLoadingOverlay}
    playPauseButtonComponent={CustomPlayPauseButton}
    progressBarColor="#ff0000"
    volumeControlColor="#00ff00"
/>
```

## Running Locally

Clone the project

```bash
  git clone https://link-to-the-project
```

Navigate to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```