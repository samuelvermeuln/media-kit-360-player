var ae=Object.create;var Z=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty;var de=(e,r)=>{for(var a in r)Z(e,a,{get:r[a],enumerable:!0})},U=(e,r,a,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of ie(r))!ue.call(e,c)&&c!==a&&Z(e,c,{get:()=>r[c],enumerable:!(i=ce(r,c))||i.enumerable});return e};var A=(e,r,a)=>(a=e!=null?ae(le(e)):{},U(r||!e||!e.__esModule?Z(a,"default",{value:e,enumerable:!0}):a,e)),me=e=>U(Z({},"__esModule",{value:!0}),e);var Ie={};de(Ie,{RenderVideo:()=>O,SpinImages360:()=>se});module.exports=me(Ie);var t=A(require("react")),f=A(require("styled-components")),pe=f.default.div`
    position: relative;
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
    padding-top: 56.25%; /* Aspect ratio (16:9) for responsive video */
`,ge=f.default.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire container */
`,fe=f.default.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: ${({showControls:e})=>e?"flex":"none"};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`,he=f.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    opacity: 0.8; /* tornando levemente transparente */
    width: 10%;
`,ve=f.default.input`
    display: ${({showProgressBar:e})=>e?"block":"none"};
    width: 80%;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({progressBarColor:e})=>e};
`,xe=f.default.input`
    display: ${({showVolumeControl:e})=>e?"block":"none"};
    width: 80px;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({volumeControlColor:e})=>e};
`,be=f.default.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`,we=f.default.div`
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
`,Ce=f.default.div`
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
`,O=t.default.memo(({src:e="",autoplay:r=!1,loop:a=!0,muted:i=!1,width:c="100%",height:x="100%",showControls:b=!0,showRetryButton:l=!0,showVolumeControl:u=!0,showProgressBar:k=!0,showPlayPauseButton:d=!0,showLoadingOverlay:$=!0,RetryButtonComponent:h=be,srcFallback:m="",LoadingOverlayComponent:v=Ce,LoadingErrorOverlayComponent:L=we,TextLoadingOverlayComponent:S,playPauseButtonComponent:V=he,progressBarColor:D="#ffffff",volumeControlColor:B="#ffffff"})=>{let o=(0,t.useRef)(null),[w,I]=(0,t.useState)(!1),[P,M]=(0,t.useState)(0),[p,F]=(0,t.useState)(0),[j,Y]=(0,t.useState)(.5),[X,n]=(0,t.useState)(!1),[C,W]=(0,t.useState)(!1),z=(0,t.useCallback)(()=>{o.current.paused?(o.current.play(),I(!0),o.current.muted&&(o.current.muted=!1)):(o.current.pause(),I(!1))},[]);(0,t.useEffect)(()=>{var _,N;let y=()=>{n(!0)},g=K=>{W(!0)};if(window==null||window.addEventListener("online",()=>z()),window==null||window.addEventListener("offline",()=>z()),o.current)return(_=o==null?void 0:o.current)==null||_.addEventListener("loadeddata",y),(N=o==null?void 0:o.current)==null||N.addEventListener("error",g),()=>{var K,R;(K=o==null?void 0:o.current)==null||K.removeEventListener("loadeddata",y),(R=o==null?void 0:o.current)==null||R.removeEventListener("error",g)}},[]),(0,t.useEffect)(()=>{r&&(o.current.muted=!0)},[]);let G=(0,t.useCallback)(()=>{let{currentTime:y,duration:g}=o.current;M(y),F(g)},[]),Q=(0,t.useCallback)(y=>{let g=y.target.value;o.current.currentTime=g,M(g)},[M]),H=(0,t.useCallback)(y=>{let g=y.target.value;o.current.volume=g,Y(g)},[Y]),J=(0,t.useCallback)(()=>{o.current.load(),W(!1),n(!1)},[]);return t.default.createElement(t.default.Fragment,null,t.default.createElement(pe,{width:c,height:x},t.default.createElement(ge,{ref:o,src:e,controls:!1,autoPlay:r,loop:a,muted:i,volume:j,onTimeUpdate:G,preload:"metadata",onClick:z}),C&&t.default.createElement(L,{srcFallback:m,loaded:X},t.default.createElement(h,{showRetryButton:l,onClick:J},"Retry")),!C&&!X&&t.default.createElement(v,{loaded:X,showLoadingOverlay:$},S&&t.default.createElement(S,null)),t.default.createElement(fe,{showControls:b},t.default.createElement(V,{showPlayPauseButton:d,onClick:z},w?"||":"Play"),t.default.createElement(ve,{showProgressBar:k,type:"range",min:0,max:p,value:P,onChange:Q,progressBarColor:D}),t.default.createElement(xe,{showVolumeControl:u,type:"range",min:0,max:1,step:.1,value:j,onChange:H,volumeControlColor:B}))))});var s=A(require("react"));var q=A(require("react")),E=A(require("styled-components")),ye=E.default.div`
    position: relative;
    display: inline-block;
    user-select: none;
    touch-action: none;
    cursor: ${({zoomActive:e})=>e&&"none"};
`,qe=E.default.img.attrs(e=>({style:{userSelect:"none",touchAction:"none",WebkitUserDrag:"none"}}))``,ke=E.default.div`
    position: absolute;
    top: ${({y:e})=>e}px;
    left: ${({x:e})=>e}px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
`,$e=E.default.img`
    position: absolute;
    top: ${({offsetY:e})=>-e}px;
    left: ${({offsetX:e})=>-e}px;
    width: ${({width:e})=>e}px;
    height: ${({height:e})=>e}px;
`,ee=({src:e,isVisible:r,width:a,height:i})=>{let[c,x]=(0,q.useState)(!1),[b,l]=(0,q.useState)({x:0,y:0}),u=h=>{let v=h.currentTarget.getBoundingClientRect(),L=h.pageX-window.pageXOffset-v.left,S=h.pageY-window.pageYOffset-v.top;return{x:L,y:S}};return q.default.createElement(ye,{onMouseMove:h=>{if(c){let{x:m,y:v}=u(h);l({x:m,y:v})}},onClick:()=>{r&&x(!c)},zoomActive:c,onMouseLeave:()=>{x(!1)},style:{display:r?"block":"none"}},q.default.createElement(qe,{src:e,alt:"Rotating object",width:a,height:i}),c&&q.default.createElement(ke,{x:b.x-100,y:b.y-100},q.default.createElement($e,{src:e,alt:"Zoomed object",width:a*2,height:i*2,offsetX:b.x/a*(a*2)-100,offsetY:b.y/i*(i*2)-100})))};var T=A(require("styled-components"));var te=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.693 25" xml:space="preserve" width="37.354" height="20">
        <path d="M5.082 11.901c-8.448 4.636 14.306 7.452 19.432 7.407v-2.827l4.258 4.257-4.258 4.264v-2.648c-10.302.389-34.549-6.241-19.965-11.743q.208.646.494 1.216zm36.095-8.743q0-1.488.535-2.083c.535-.593.901-.592 1.634-.592q.528.002.866.13.337.13.551.337t.337.438a2 2 0 0 1 .197.535q.146.582.144 1.22 0 1.423-.483 2.078-.478.656-1.656.658-.656-.002-1.064-.21a1.75 1.75 0 0 1-.665-.615 2.3 2.3 0 0 1-.292-.786 5.3 5.3 0 0 1-.107-1.109m-31.117.829-3.42-.607Q7.062 1.748 8.274.878 9.484 0 11.703 0q2.545 0 3.683.949 1.133.953 1.133 2.391-.004.844-.459 1.523-.459.685-1.388 1.197.755.187 1.152.438.648.401 1.006 1.053t.362 1.558q0 1.138-.592 2.185-.598 1.043-1.714 1.607c-1.117.564-1.726.563-2.94.563q-1.774 0-2.798-.418a4.2 4.2 0 0 1-1.687-1.223q-.662-.806-1.013-2.025l3.623-.483q.212 1.095.662 1.523.446.424 1.14.424.726 0 1.208-.531c.483-.531.483-.829.483-1.423q0-.907-.465-1.401c-.465-.496-.729-.498-1.261-.498q-.423-.002-1.168.212l.187-2.588q.298.045.465.045.703 0 1.171-.452c.467-.452.473-.653.473-1.068q0-.599-.354-.948-.356-.354-.969-.354a1.4 1.4 0 0 0-1.033.385q-.403.378-.543 1.341m18.499-.844-3.603.44q-.142-.749-.473-1.057-.337-.308-.821-.308-.878-.004-1.364.885-.356.642-.525 2.733.65-.659 1.329-.973.685-.315 1.582-.315 1.743 0 2.946 1.241 1.203 1.249 1.204 3.158 0 1.288-.607 2.356-.609 1.068-1.687 1.615-1.08.547-2.71.547-1.955.002-3.134-.669-1.179-.668-1.889-2.123c-.71-1.455-.706-2.261-.706-3.868q0-3.523 1.487-5.163Q21.06 0 23.697 0q1.554-.002 2.455.358c.901.36 1.101.592 1.496 1.048q.599.694.908 1.735m-6.662 5.806q0 1.06.531 1.656.535.599 1.308.599a1.53 1.53 0 0 0 1.194-.543q.478-.543.478-1.618 0-1.101-.498-1.679a1.58 1.58 0 0 0-1.239-.578q-.753 0-1.268.563-.504.558-.504 1.599m7.71-2.273q0-3.71 1.337-5.194T35.012 0q1.315.002 2.158.323.844.327 1.376.844.537.519.838 1.092.306.576.494 1.337.364 1.453.364 3.041.002 3.543-1.203 5.183-1.194 1.64-4.13 1.642-1.642 0-2.656-.525a4.3 4.3 0 0 1-1.662-1.539q-.469-.718-.733-1.965a14 14 0 0 1-.259-2.755m3.583.008q-.004 2.484.44 3.397.44.908 1.277.908a1.36 1.36 0 0 0 .953-.385q.407-.389.592-1.223.193-.837.191-2.603c0-1.729-.144-2.888-.44-3.488q-.44-.891-1.319-.893-.897.002-1.3.908-.393.917-.395 3.378m9.424-3.522q-.002.996.175 1.362t.512.364a.53.53 0 0 0 .385-.156q.159-.153.239-.49.076-.337.076-1.041.002-1.039-.175-1.399c-.177-.36-.292-.358-.528-.358q-.36 0-.519.364-.165.366-.163 1.353m-1.08 8.325c4.012 2.041 3.054 4.936-4.051 6.694a41 41 0 0 1-6.786 1.136v2.298c2.778-.194 5.362-.833 7.623-1.379 10.685-2.588 10.312-7.208 3.557-9.815a10 10 0 0 1-.343 1.064" style="fill-rule:evenodd;clip-rule:evenodd"/>
    </svg>
`;var oe=encodeURIComponent(te),ne=T.default.div`
    position: relative;
    border: none;
    padding: 5px;
    display: inline-block;
    user-select: none;
    touch-action: none;
    ${e=>e.isGrabbing?T.css`
                cursor: url("data:image/svg+xml,${oe}") 16 16, pointer;
            `:T.css`
                cursor: url("data:image/svg+xml,${oe}") 16 16, pointer;
            `};
    `;function re(e,r){return(e%r+r)%r}var se=({imagesBaseUrl:e=[],mouseDragSpeed:r=5,reverse:a=!1,autoplaySpeed:i=1,autoplay:c=!0,width:x=400,height:b=300,imageInitialIndex:l=0,shouldNotifyEvents:u=!1,notifyOnPointerDown:k,notifyOnPointerUp:d,notifyOnPointerMoved:$})=>{let h=(0,s.useRef)(null),[m,v]=(0,s.useState)(!1),[L,S]=(0,s.useState)(0),[V,D]=(0,s.useState)(0),[B,o]=(0,s.useState)(0),[w,I]=(0,s.useState)(0),[P,M]=(0,s.useState)(c),p=e.length;(0,s.useEffect)(()=>{M(c)},[c]),(0,s.useEffect)(()=>{typeof l>"u"||((l<0||l>=p)&&(I(l),console.log(`ImageInitialIndex of ${l} was out of bounds of 0 and count: ${p}`)),I(l))},[l,p]),(0,s.useEffect)(()=>{if(!P)return;let n=setTimeout(()=>{F(1)},1e3/i);return()=>clearTimeout(n)},[w,P,i]),(0,s.useEffect)(()=>{let n=(Q,H)=>{let J=re(Q+(a?-1:1)*Math.floor(H),p);I(J)};if(!m)return;let W=1/r*(p*x/100),G=(B-L)/W;n(V,G)},[B,p,V,L,m,r,x,a]);let F=(0,s.useCallback)(n=>{let C=re(w+(a?-1:1)*Math.floor(n),p);I(C)},[w,a,p]),j=(0,s.useCallback)(n=>{S(n.clientX),o(n.clientX),D(w),M(!1),v(!0),document.addEventListener("mouseup",()=>{Y()},{once:!0}),u&&(k==null||k(n.clientX,n.clientY))},[w,u,k]),Y=(0,s.useCallback)(n=>{v(!1),u&&(typeof n<"u"?d==null||d(n==null?void 0:n.clientX,n.clientY):d==null||d(0,0))},[u,d]),X=(0,s.useCallback)(n=>{m&&(o(n.clientX),u&&($==null||$(n.clientX,n.clientY)))},[m,u,$]);return s.default.createElement(ne,{ref:h,isGrabbing:m,onPointerDown:j,onPointerMove:X,onMouseLeave:()=>{c&&M(!0)}},e==null?void 0:e.map((n,C)=>s.default.createElement(ee,{src:n,width:x,height:b,isVisible:C===w,key:C})))};0&&(module.exports={RenderVideo,SpinImages360});
//# sourceMappingURL=index.js.map