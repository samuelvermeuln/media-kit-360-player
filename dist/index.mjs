import n,{useRef as ie,useState as L,useCallback as z,useEffect as O}from"react";import h from"styled-components";var le=h.div`
    position: relative;
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
    padding-top: 56.25%; /* Aspect ratio (16:9) for responsive video */
`,ue=h.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire container */
`,de=h.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: ${({showControls:e})=>e?"flex":"none"};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`,me=h.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    opacity: 0.8; /* tornando levemente transparente */
    width: 10%;
`,pe=h.input`
    display: ${({showProgressBar:e})=>e?"block":"none"};
    width: 80%;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({progressBarColor:e})=>e};
`,ge=h.input`
    display: ${({showVolumeControl:e})=>e?"block":"none"};
    width: 80px;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({volumeControlColor:e})=>e};
`,fe=h.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`,he=h.div`
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
`,ve=h.div`
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
`,xe=n.memo(({src:e="",autoplay:r=!1,loop:s=!0,muted:p=!1,width:a="100%",height:v="100%",showControls:x=!0,showRetryButton:c=!0,showVolumeControl:i=!0,showProgressBar:y=!0,showPlayPauseButton:l=!0,showLoadingOverlay:q=!0,RetryButtonComponent:g=fe,srcFallback:u="",LoadingOverlayComponent:f=ve,LoadingErrorOverlayComponent:I=he,TextLoadingOverlayComponent:M,playPauseButtonComponent:E=me,progressBarColor:F="#ffffff",volumeControlColor:T="#ffffff"})=>{let t=ie(null),[b,k]=L(!1),[V,$]=L(0),[d,G]=L(0),[B,P]=L(.5),[A,o]=L(!1),[w,j]=L(!1),X=z(()=>{t.current.paused?(t.current.play(),k(!0),t.current.muted&&(t.current.muted=!1)):(t.current.pause(),k(!1))},[]);O(()=>{var N,R;let C=()=>{o(!0)},m=_=>{j(!0)};if(window==null||window.addEventListener("online",()=>X()),window==null||window.addEventListener("offline",()=>X()),t.current)return(N=t==null?void 0:t.current)==null||N.addEventListener("loadeddata",C),(R=t==null?void 0:t.current)==null||R.addEventListener("error",m),()=>{var _,U;(_=t==null?void 0:t.current)==null||_.removeEventListener("loadeddata",C),(U=t==null?void 0:t.current)==null||U.removeEventListener("error",m)}},[]),O(()=>{r&&(t.current.muted=!0)},[]);let Q=z(()=>{let{currentTime:C,duration:m}=t.current;$(C),G(m)},[]),H=z(C=>{let m=C.target.value;t.current.currentTime=m,$(m)},[$]),J=z(C=>{let m=C.target.value;t.current.volume=m,P(m)},[P]),K=z(()=>{t.current.load(),j(!1),o(!1)},[]);return n.createElement(n.Fragment,null,n.createElement(le,{width:a,height:v},n.createElement(ue,{ref:t,src:e,controls:!1,autoPlay:r,loop:s,muted:p,volume:B,onTimeUpdate:Q,preload:"metadata",onClick:X}),w&&n.createElement(I,{srcFallback:u,loaded:A},n.createElement(g,{showRetryButton:c,onClick:K},"Retry")),!w&&!A&&n.createElement(f,{loaded:A,showLoadingOverlay:q},M&&n.createElement(M,null)),n.createElement(de,{showControls:x},n.createElement(E,{showPlayPauseButton:l,onClick:X},b?"||":"Play"),n.createElement(pe,{showProgressBar:y,type:"range",min:0,max:d,value:V,onChange:H,progressBarColor:F}),n.createElement(ge,{showVolumeControl:i,type:"range",min:0,max:1,step:.1,value:B,onChange:J,volumeControlColor:T}))))});import ae,{useCallback as Z,useEffect as D,useRef as ke,useState as S}from"react";import Y,{useState as ee}from"react";import W from"styled-components";var be=W.div`
    position: relative;
    display: inline-block;
    user-select: none;
    touch-action: none;
    cursor: ${({zoomActive:e})=>e&&"none"};
`,we=W.img.attrs(e=>({style:{userSelect:"none",touchAction:"none",WebkitUserDrag:"none"}}))``,Ce=W.div`
    position: absolute;
    top: ${({y:e})=>e}px;
    left: ${({x:e})=>e}px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
`,ye=W.img`
    position: absolute;
    top: ${({offsetY:e})=>-e}px;
    left: ${({offsetX:e})=>-e}px;
    width: ${({width:e})=>e}px;
    height: ${({height:e})=>e}px;
`,te=({src:e,isVisible:r,width:s,height:p})=>{let[a,v]=ee(!1),[x,c]=ee({x:0,y:0}),i=g=>{let f=g.currentTarget.getBoundingClientRect(),I=g.pageX-window.pageXOffset-f.left,M=g.pageY-window.pageYOffset-f.top;return{x:I,y:M}};return Y.createElement(be,{onMouseMove:g=>{if(a){let{x:u,y:f}=i(g);c({x:u,y:f})}},onClick:()=>{r&&v(!a)},zoomActive:a,onMouseLeave:()=>{v(!1)},style:{display:r?"block":"none"}},Y.createElement(we,{src:e,alt:"Rotating object",width:s,height:p}),a&&Y.createElement(Ce,{x:x.x-100,y:x.y-100},Y.createElement(ye,{src:e,alt:"Zoomed object",width:s*2,height:p*2,offsetX:x.x/s*(s*2)-100,offsetY:x.y/p*(p*2)-100})))};import qe,{css as ne}from"styled-components";var oe=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.693 25" xml:space="preserve" width="37.354" height="20">
        <path d="M5.082 11.901c-8.448 4.636 14.306 7.452 19.432 7.407v-2.827l4.258 4.257-4.258 4.264v-2.648c-10.302.389-34.549-6.241-19.965-11.743q.208.646.494 1.216zm36.095-8.743q0-1.488.535-2.083c.535-.593.901-.592 1.634-.592q.528.002.866.13.337.13.551.337t.337.438a2 2 0 0 1 .197.535q.146.582.144 1.22 0 1.423-.483 2.078-.478.656-1.656.658-.656-.002-1.064-.21a1.75 1.75 0 0 1-.665-.615 2.3 2.3 0 0 1-.292-.786 5.3 5.3 0 0 1-.107-1.109m-31.117.829-3.42-.607Q7.062 1.748 8.274.878 9.484 0 11.703 0q2.545 0 3.683.949 1.133.953 1.133 2.391-.004.844-.459 1.523-.459.685-1.388 1.197.755.187 1.152.438.648.401 1.006 1.053t.362 1.558q0 1.138-.592 2.185-.598 1.043-1.714 1.607c-1.117.564-1.726.563-2.94.563q-1.774 0-2.798-.418a4.2 4.2 0 0 1-1.687-1.223q-.662-.806-1.013-2.025l3.623-.483q.212 1.095.662 1.523.446.424 1.14.424.726 0 1.208-.531c.483-.531.483-.829.483-1.423q0-.907-.465-1.401c-.465-.496-.729-.498-1.261-.498q-.423-.002-1.168.212l.187-2.588q.298.045.465.045.703 0 1.171-.452c.467-.452.473-.653.473-1.068q0-.599-.354-.948-.356-.354-.969-.354a1.4 1.4 0 0 0-1.033.385q-.403.378-.543 1.341m18.499-.844-3.603.44q-.142-.749-.473-1.057-.337-.308-.821-.308-.878-.004-1.364.885-.356.642-.525 2.733.65-.659 1.329-.973.685-.315 1.582-.315 1.743 0 2.946 1.241 1.203 1.249 1.204 3.158 0 1.288-.607 2.356-.609 1.068-1.687 1.615-1.08.547-2.71.547-1.955.002-3.134-.669-1.179-.668-1.889-2.123c-.71-1.455-.706-2.261-.706-3.868q0-3.523 1.487-5.163Q21.06 0 23.697 0q1.554-.002 2.455.358c.901.36 1.101.592 1.496 1.048q.599.694.908 1.735m-6.662 5.806q0 1.06.531 1.656.535.599 1.308.599a1.53 1.53 0 0 0 1.194-.543q.478-.543.478-1.618 0-1.101-.498-1.679a1.58 1.58 0 0 0-1.239-.578q-.753 0-1.268.563-.504.558-.504 1.599m7.71-2.273q0-3.71 1.337-5.194T35.012 0q1.315.002 2.158.323.844.327 1.376.844.537.519.838 1.092.306.576.494 1.337.364 1.453.364 3.041.002 3.543-1.203 5.183-1.194 1.64-4.13 1.642-1.642 0-2.656-.525a4.3 4.3 0 0 1-1.662-1.539q-.469-.718-.733-1.965a14 14 0 0 1-.259-2.755m3.583.008q-.004 2.484.44 3.397.44.908 1.277.908a1.36 1.36 0 0 0 .953-.385q.407-.389.592-1.223.193-.837.191-2.603c0-1.729-.144-2.888-.44-3.488q-.44-.891-1.319-.893-.897.002-1.3.908-.393.917-.395 3.378m9.424-3.522q-.002.996.175 1.362t.512.364a.53.53 0 0 0 .385-.156q.159-.153.239-.49.076-.337.076-1.041.002-1.039-.175-1.399c-.177-.36-.292-.358-.528-.358q-.36 0-.519.364-.165.366-.163 1.353m-1.08 8.325c4.012 2.041 3.054 4.936-4.051 6.694a41 41 0 0 1-6.786 1.136v2.298c2.778-.194 5.362-.833 7.623-1.379 10.685-2.588 10.312-7.208 3.557-9.815a10 10 0 0 1-.343 1.064" style="fill-rule:evenodd;clip-rule:evenodd"/>
    </svg>
`;var re=encodeURIComponent(oe),se=qe.div`
    position: relative;
    border: none;
    padding: 5px;
    display: inline-block;
    user-select: none;
    touch-action: none;
    ${e=>e.isGrabbing?ne`
                cursor: url("data:image/svg+xml,${re}") 16 16, pointer;
            `:ne`
                cursor: url("data:image/svg+xml,${re}") 16 16, pointer;
            `};
    `;function ce(e,r){return(e%r+r)%r}var $e=({imagesBaseUrl:e=[],mouseDragSpeed:r=5,reverse:s=!1,autoplaySpeed:p=1,autoplay:a=!0,width:v=400,height:x=300,imageInitialIndex:c=0,shouldNotifyEvents:i=!1,notifyOnPointerDown:y,notifyOnPointerUp:l,notifyOnPointerMoved:q})=>{let g=ke(null),[u,f]=S(!1),[I,M]=S(0),[E,F]=S(0),[T,t]=S(0),[b,k]=S(0),[V,$]=S(a),d=e.length;D(()=>{$(a)},[a]),D(()=>{typeof c>"u"||((c<0||c>=d)&&(k(c),console.log(`ImageInitialIndex of ${c} was out of bounds of 0 and count: ${d}`)),k(c))},[c,d]),D(()=>{if(!V)return;let o=setTimeout(()=>{G(1)},1e3/p);return()=>clearTimeout(o)},[b,V,p]),D(()=>{let o=(H,J)=>{let K=ce(H+(s?-1:1)*Math.floor(J),d);k(K)};if(!u)return;let j=1/r*(d*v/100),Q=(T-I)/j;o(E,Q)},[T,d,E,I,u,r,v,s]);let G=Z(o=>{let w=ce(b+(s?-1:1)*Math.floor(o),d);k(w)},[b,s,d]),B=Z(o=>{M(o.clientX),t(o.clientX),F(b),$(!1),f(!0),document.addEventListener("mouseup",()=>{P()},{once:!0}),i&&(y==null||y(o.clientX,o.clientY))},[b,i,y]),P=Z(o=>{f(!1),i&&(typeof o<"u"?l==null||l(o==null?void 0:o.clientX,o.clientY):l==null||l(0,0))},[i,l]),A=Z(o=>{u&&(t(o.clientX),i&&(q==null||q(o.clientX,o.clientY)))},[u,i,q]);return ae.createElement(se,{ref:g,isGrabbing:u,onPointerDown:B,onPointerMove:A,onMouseLeave:()=>{a&&$(!0)}},e==null?void 0:e.map((o,w)=>ae.createElement(te,{src:o,width:v,height:x,isVisible:w===b,key:w})))};export{xe as RenderVideo,$e as SpinImages360};
//# sourceMappingURL=index.mjs.map