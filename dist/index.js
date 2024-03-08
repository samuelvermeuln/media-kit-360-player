var ae=Object.create;var j=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var de=(e,r)=>{for(var a in r)j(e,a,{get:r[a],enumerable:!0})},N=(e,r,a,d)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of le(r))!ue.call(e,c)&&c!==a&&j(e,c,{get:()=>r[c],enumerable:!(d=ce(r,c))||d.enumerable});return e};var y=(e,r,a)=>(a=e!=null?ae(ie(e)):{},N(r||!e||!e.__esModule?j(a,"default",{value:e,enumerable:!0}):a,e)),me=e=>N(j({},"__esModule",{value:!0}),e);var ye={};de(ye,{RenderVideo:()=>R,SpinImages360:()=>se});module.exports=me(ye);var t=y(require("react")),u=y(require("styled-components")),pe=u.default.div`
    position: relative;
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
    padding-top: 56.25%; /* Aspect ratio (16:9) for responsive video */
`,ge=u.default.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire container */
`,fe=u.default.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: ${({showControls:e})=>e?"flex":"none"};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`,he=u.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    opacity: 0.8; /* tornando levemente transparente */
    width: 10%;
`,ve=u.default.input`
    display: ${({showProgressBar:e})=>e?"block":"none"};
    width: 80%;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({progressBarColor:e})=>e};
`,be=u.default.input`
    display: ${({showVolumeControl:e})=>e?"block":"none"};
    width: 80px;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({volumeControlColor:e})=>e};
`,xe=u.default.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`,qe=u.default.div`
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
    opacity: ${({loaded:e})=>e?0:1};
    transition: opacity 0.5s ease;
    background-image: url(${({srcFallback:e})=>e});
    background-repeat: no-repeat;
    background-size: cover;
`,we=u.default.div`
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
    opacity: ${({loaded:e})=>e?0:1};
    transition: opacity 0.5s ease;
`,R=t.default.memo(({src:e="",autoplay:r=!1,loop:a=!0,muted:d=!1,width:c="100%",height:k="100%",showControls:F=!0,showRetryButton:m=!0,showVolumeControl:g=!0,showProgressBar:q=!0,showPlayPauseButton:p=!0,showLoadingOverlay:w=!0,RetryButtonComponent:P=xe,srcFallback:b="",LoadingOverlayComponent:S=we,LoadingErrorOverlayComponent:V=qe,TextLoadingOverlayComponent:E,playPauseButtonComponent:T=he,progressBarColor:D="#ffffff",volumeControlColor:X="#ffffff"})=>{let o=(0,t.useRef)(null),[f,x]=(0,t.useState)(!1),[z,C]=(0,t.useState)(0),[l,Y]=(0,t.useState)(0),[M,A]=(0,t.useState)(.5),[I,n]=(0,t.useState)(!1),[h,B]=(0,t.useState)(!1),$=(0,t.useCallback)(()=>{o.current.paused?(o.current.play(),x(!0),o.current.muted&&(o.current.muted=!1)):(o.current.pause(),x(!1))},[]);(0,t.useEffect)(()=>{var K,Z;let v=()=>{n(!0)},i=J=>{B(!0)};if(window==null||window.addEventListener("online",()=>$()),window==null||window.addEventListener("offline",()=>$()),o.current)return(K=o==null?void 0:o.current)==null||K.addEventListener("loadeddata",v),(Z=o==null?void 0:o.current)==null||Z.addEventListener("error",i),()=>{var J,_;(J=o==null?void 0:o.current)==null||J.removeEventListener("loadeddata",v),(_=o==null?void 0:o.current)==null||_.removeEventListener("error",i)}},[]),(0,t.useEffect)(()=>{r&&(o.current.muted=!0)},[]);let G=(0,t.useCallback)(()=>{let{currentTime:v,duration:i}=o.current;C(v),Y(i)},[]),Q=(0,t.useCallback)(v=>{let i=v.target.value;o.current.currentTime=i,C(i)},[C]),W=(0,t.useCallback)(v=>{let i=v.target.value;o.current.volume=i,A(i)},[A]),H=(0,t.useCallback)(()=>{o.current.load(),B(!1),n(!1)},[]);return t.default.createElement(t.default.Fragment,null,t.default.createElement(pe,{width:c,height:k},t.default.createElement(ge,{ref:o,src:e,controls:!1,autoPlay:r,loop:a,muted:d,volume:M,onTimeUpdate:G,preload:"metadata",onClick:$}),h&&t.default.createElement(V,{srcFallback:b,loaded:I},t.default.createElement(P,{showRetryButton:m,onClick:H},"Retry")),!h&&!I&&t.default.createElement(S,{loaded:I,showLoadingOverlay:w},E&&t.default.createElement(E,null)),t.default.createElement(fe,{showControls:F},t.default.createElement(T,{showPlayPauseButton:p,onClick:$},f?"||":"Play"),t.default.createElement(ve,{showProgressBar:q,type:"range",min:0,max:l,value:z,onChange:Q,progressBarColor:D}),t.default.createElement(be,{showVolumeControl:g,type:"range",min:0,max:1,step:.1,value:M,onChange:W,volumeControlColor:X}))))});var s=y(require("react"));var U=y(require("react")),O=y(require("styled-components")),Ce=O.default.img`
  user-select: none;
  touch-action: none;
  //cursor: inherit;
  -webkit-user-drag: none;
`,ee=({src:e,isVisible:r,width:a,height:d})=>U.default.createElement(Ce,{alt:"Rotating object",src:e,width:a,height:d,style:{display:r?"block":"none"}});var L=y(require("styled-components"));var te=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.693 25" xml:space="preserve" width="37.354" height="20">
        <path d="M5.082 11.901c-8.448 4.636 14.306 7.452 19.432 7.407v-2.827l4.258 4.257-4.258 4.264v-2.648c-10.302.389-34.549-6.241-19.965-11.743q.208.646.494 1.216zm36.095-8.743q0-1.488.535-2.083c.535-.593.901-.592 1.634-.592q.528.002.866.13.337.13.551.337t.337.438a2 2 0 0 1 .197.535q.146.582.144 1.22 0 1.423-.483 2.078-.478.656-1.656.658-.656-.002-1.064-.21a1.75 1.75 0 0 1-.665-.615 2.3 2.3 0 0 1-.292-.786 5.3 5.3 0 0 1-.107-1.109m-31.117.829-3.42-.607Q7.062 1.748 8.274.878 9.484 0 11.703 0q2.545 0 3.683.949 1.133.953 1.133 2.391-.004.844-.459 1.523-.459.685-1.388 1.197.755.187 1.152.438.648.401 1.006 1.053t.362 1.558q0 1.138-.592 2.185-.598 1.043-1.714 1.607c-1.117.564-1.726.563-2.94.563q-1.774 0-2.798-.418a4.2 4.2 0 0 1-1.687-1.223q-.662-.806-1.013-2.025l3.623-.483q.212 1.095.662 1.523.446.424 1.14.424.726 0 1.208-.531c.483-.531.483-.829.483-1.423q0-.907-.465-1.401c-.465-.496-.729-.498-1.261-.498q-.423-.002-1.168.212l.187-2.588q.298.045.465.045.703 0 1.171-.452c.467-.452.473-.653.473-1.068q0-.599-.354-.948-.356-.354-.969-.354a1.4 1.4 0 0 0-1.033.385q-.403.378-.543 1.341m18.499-.844-3.603.44q-.142-.749-.473-1.057-.337-.308-.821-.308-.878-.004-1.364.885-.356.642-.525 2.733.65-.659 1.329-.973.685-.315 1.582-.315 1.743 0 2.946 1.241 1.203 1.249 1.204 3.158 0 1.288-.607 2.356-.609 1.068-1.687 1.615-1.08.547-2.71.547-1.955.002-3.134-.669-1.179-.668-1.889-2.123c-.71-1.455-.706-2.261-.706-3.868q0-3.523 1.487-5.163Q21.06 0 23.697 0q1.554-.002 2.455.358c.901.36 1.101.592 1.496 1.048q.599.694.908 1.735m-6.662 5.806q0 1.06.531 1.656.535.599 1.308.599a1.53 1.53 0 0 0 1.194-.543q.478-.543.478-1.618 0-1.101-.498-1.679a1.58 1.58 0 0 0-1.239-.578q-.753 0-1.268.563-.504.558-.504 1.599m7.71-2.273q0-3.71 1.337-5.194T35.012 0q1.315.002 2.158.323.844.327 1.376.844.537.519.838 1.092.306.576.494 1.337.364 1.453.364 3.041.002 3.543-1.203 5.183-1.194 1.64-4.13 1.642-1.642 0-2.656-.525a4.3 4.3 0 0 1-1.662-1.539q-.469-.718-.733-1.965a14 14 0 0 1-.259-2.755m3.583.008q-.004 2.484.44 3.397.44.908 1.277.908a1.36 1.36 0 0 0 .953-.385q.407-.389.592-1.223.193-.837.191-2.603c0-1.729-.144-2.888-.44-3.488q-.44-.891-1.319-.893-.897.002-1.3.908-.393.917-.395 3.378m9.424-3.522q-.002.996.175 1.362t.512.364a.53.53 0 0 0 .385-.156q.159-.153.239-.49.076-.337.076-1.041.002-1.039-.175-1.399c-.177-.36-.292-.358-.528-.358q-.36 0-.519.364-.165.366-.163 1.353m-1.08 8.325c4.012 2.041 3.054 4.936-4.051 6.694a41 41 0 0 1-6.786 1.136v2.298c2.778-.194 5.362-.833 7.623-1.379 10.685-2.588 10.312-7.208 3.557-9.815a10 10 0 0 1-.343 1.064" style="fill-rule:evenodd;clip-rule:evenodd"/>
    </svg>
`;var oe=encodeURIComponent(te),ne=L.default.div`
    position: relative;
    border: none;
    padding: 5px;
    display: inline-block;
    user-select: none;
    touch-action: none;
    ${e=>e.isGrabbing?L.css`
                cursor: url("data:image/svg+xml,${oe}") 16 16, pointer;
            `:L.css`
                cursor: url("data:image/svg+xml,${oe}") 16 16, pointer;
            `};
    `;function re(e,r){return(e%r+r)%r}var se=({imagesBaseUrl:e=[],mouseDragSpeed:r=5,reverse:a=!1,autoplaySpeed:d=1,autoplay:c=!0,width:k=400,height:F=300,imageInitialIndex:m=0,shouldNotifyEvents:g=!1,notifyOnPointerDown:q,notifyOnPointerUp:p,notifyOnPointerMoved:w})=>{let P=(0,s.useRef)(null),[b,S]=(0,s.useState)(!1),[V,E]=(0,s.useState)(0),[T,D]=(0,s.useState)(0),[X,o]=(0,s.useState)(0),[f,x]=(0,s.useState)(0),[z,C]=(0,s.useState)(c),l=e.length;(0,s.useEffect)(()=>{C(c)},[c]),(0,s.useEffect)(()=>{typeof m>"u"||((m<0||m>=l)&&(x(m),console.log(`ImageInitialIndex of ${m} was out of bounds of 0 and count: ${l}`)),x(m))},[m,l]),(0,s.useEffect)(()=>{if(!z)return;let n=setTimeout(()=>{Y(1)},1e3/d);return()=>clearTimeout(n)},[f,z,d]),(0,s.useEffect)(()=>{let n=(Q,W)=>{let H=re(Q+(a?-1:1)*Math.floor(W),l);x(H)};if(!b)return;let B=1/r*(l*k/100),G=(X-V)/B;n(T,G)},[X,l,T,V,b,r,k,a]);let Y=(0,s.useCallback)(n=>{let h=re(f+(a?-1:1)*Math.floor(n),l);x(h)},[f,a,l]),M=(0,s.useCallback)(n=>{E(n.clientX),o(n.clientX),D(f),C(!1),S(!0),document.addEventListener("mouseup",()=>{A()},{once:!0}),g&&(q==null||q(n.clientX,n.clientY))},[f,g,q]),A=(0,s.useCallback)(n=>{S(!1),g&&(typeof n<"u"?p==null||p(n==null?void 0:n.clientX,n.clientY):p==null||p(0,0))},[g,p]),I=(0,s.useCallback)(n=>{b&&(o(n.clientX),g&&(w==null||w(n.clientX,n.clientY)))},[b,g,w]);return s.default.createElement(ne,{ref:P,isGrabbing:b,onPointerDown:M,onPointerMove:I},e==null?void 0:e.map((n,h)=>s.default.createElement(ee,{src:n,width:k,height:F,isVisible:h===f,key:h})))};0&&(module.exports={RenderVideo,SpinImages360});
//# sourceMappingURL=index.js.map