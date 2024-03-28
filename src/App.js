import React from "react";
import { RenderVideo, SpinImages360 } from "./Component";

function App() {

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

  const src =
      'https://www.w3schools.com/html/mov_bbb.mp4';

  const srcFallback = 'https://encurtador.com.br/eilHP';

  return (
    <div className="App" style={{display:'flex'}}>
      <SpinImages360 imagesBaseUrl={images}/>

      {/* <div style={{width: '600px', height:'200px'}}>
        <RenderVideo src={src} srcFallback={srcFallback}/>
      </div> */}
    </div>
  );
}

export default App;
