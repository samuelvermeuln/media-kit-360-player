import n,{useRef as ae,useState as C,useCallback as z,useEffect as U}from"react";import m from"styled-components";var ce=m.div`
    position: relative;
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
`,le=m.video`
    width: 100%;
    cursor: pointer;
`,ie=m.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: ${({showControls:e})=>e?"flex":"none"};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
`,ue=m.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    opacity: 0.8; /* tornando levemente transparente */
    width: 10%;
`,de=m.input`
    display: ${({showProgressBar:e})=>e?"block":"none"};
    width: 80%;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({progressBarColor:e})=>e};
`,me=m.input`
    display: ${({showVolumeControl:e})=>e?"block":"none"};
    width: 80px;
    margin: 0 10px;
    opacity: 0.8; /* tornando levemente transparente */
    accent-color: ${({volumeControlColor:e})=>e};
`,pe=m.button`
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`,ge=m.div`
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
`,fe=m.div`
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
`,he=n.memo(({src:e="",autoplay:s=!1,loop:c=!0,muted:I=!1,width:h="100%",height:k="100%",showControls:Q=!0,showRetryButton:$=!0,showVolumeControl:l=!0,showProgressBar:p=!0,showPlayPauseButton:x=!0,showLoadingOverlay:i=!0,RetryButtonComponent:b=pe,srcFallback:W="",LoadingOverlayComponent:w=fe,LoadingErrorOverlayComponent:X=ge,TextLoadingOverlayComponent:S,playPauseButtonComponent:H=ue,progressBarColor:M="#ffffff",volumeControlColor:J="#ffffff"})=>{let t=ae(null),[A,g]=C(!1),[v,E]=C(0),[j,K]=C(0),[L,q]=C(.5),[V,a]=C(!1),[F,P]=C(!1),y=z(()=>{t.current.paused?(t.current.play(),g(!0),t.current.muted&&(t.current.muted=!1)):(t.current.pause(),g(!1))},[]);U(()=>{var Y,D;let d=()=>{a(!0)},r=B=>{P(!0)};if(window==null||window.addEventListener("online",()=>y()),window==null||window.addEventListener("offline",()=>y()),t.current)return(Y=t==null?void 0:t.current)==null||Y.addEventListener("loadeddata",d),(D=t==null?void 0:t.current)==null||D.addEventListener("error",r),()=>{var B,R;(B=t==null?void 0:t.current)==null||B.removeEventListener("loadeddata",d),(R=t==null?void 0:t.current)==null||R.removeEventListener("error",r)}},[]),U(()=>{s&&(t.current.muted=!0)},[]);let Z=z(()=>{let{currentTime:d,duration:r}=t.current;E(d),K(r)},[]),o=z(d=>{let r=d.target.value;t.current.currentTime=r,E(r)},[E]),u=z(d=>{let r=d.target.value;t.current.volume=r,q(r)},[q]),_=z(()=>{t.current.load(),P(!1),a(!1)},[]);return n.createElement(n.Fragment,null,n.createElement(ce,{width:h,height:k},n.createElement(le,{ref:t,src:e,controls:!1,autoPlay:s,loop:c,muted:I,volume:L,onTimeUpdate:Z,preload:"metadata",onClick:y}),F&&n.createElement(X,{srcFallback:W,loaded:V},n.createElement(b,{showRetryButton:$,onClick:_},"Retry")),!F&&!V&&n.createElement(w,{loaded:V,showLoadingOverlay:i},S&&n.createElement(S,null)),n.createElement(ie,{showControls:Q},n.createElement(H,{showPlayPauseButton:x,onClick:y},A?"||":"Play"),n.createElement(de,{showProgressBar:p,type:"range",min:0,max:j,value:v,onChange:o,progressBarColor:M}),n.createElement(me,{showVolumeControl:l,type:"range",min:0,max:1,step:.1,value:L,onChange:u,volumeControlColor:J}))))});import N,{useCallback as G,useEffect as T,useRef as ye,useState as f}from"react";import Ce,{css as ne}from"styled-components";import we,{css as xe}from"styled-components";import O from"react";function ee({className:e=""}){return O.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},O.createElement("path",{d:"M12 6C6.3 6 2 8.15 2 11c0 2.45 3.19 4.38 7.71 4.88l-.42.41a1 1 0 000 1.42 1 1 0 001.42 0l2-2a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-2-2a1 1 0 00-1.42 1.42l.12.11C6 13.34 4 12 4 11c0-1.22 3.12-3 8-3s8 1.78 8 3c0 .83-1.45 2-4.21 2.6a1 1 0 00-.79 1.19 1 1 0 001.19.77c3.65-.8 5.81-2.5 5.81-4.56 0-2.85-4.3-5-10-5z"}))}var te=we(ee)`
  position: absolute;
  fill: #eee;
  text-shadow: 4px 5px black;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  opacity: 0.8;
  ${e=>xe`
      top: calc(50% - ${e.widthInEm/2}em);
      left: calc(50% - ${e.widthInEm/2}em);
      width: ${e.widthInEm}em;
      transform: scaleX(${e.isReverse?"-1":"1"});
    `};
`;import be from"react";import ve from"styled-components";var qe=ve.img`
  user-select: none;
  touch-action: none;
  //cursor: inherit;
  -webkit-user-drag: none;
`,oe=({src:e,isVisible:s,width:c,height:I})=>be.createElement(qe,{alt:"Rotating object",src:e,width:c,height:I,style:{display:s?"block":"none"},loading:"lazy"});import{uuid as Ie}from"uuidv4";function re(e,s){return(e%s+s)%s}var ke=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.693 25" xml:space="preserve" width="37.354" height="20">
        <path d="M5.082 11.901c-8.448 4.636 14.306 7.452 19.432 7.407v-2.827l4.258 4.257-4.258 4.264v-2.648c-10.302.389-34.549-6.241-19.965-11.743q.208.646.494 1.216zm36.095-8.743q0-1.488.535-2.083c.535-.593.901-.592 1.634-.592q.528.002.866.13.337.13.551.337t.337.438a2 2 0 0 1 .197.535q.146.582.144 1.22 0 1.423-.483 2.078-.478.656-1.656.658-.656-.002-1.064-.21a1.75 1.75 0 0 1-.665-.615 2.3 2.3 0 0 1-.292-.786 5.3 5.3 0 0 1-.107-1.109m-31.117.829-3.42-.607Q7.062 1.748 8.274.878 9.484 0 11.703 0q2.545 0 3.683.949 1.133.953 1.133 2.391-.004.844-.459 1.523-.459.685-1.388 1.197.755.187 1.152.438.648.401 1.006 1.053t.362 1.558q0 1.138-.592 2.185-.598 1.043-1.714 1.607c-1.117.564-1.726.563-2.94.563q-1.774 0-2.798-.418a4.2 4.2 0 0 1-1.687-1.223q-.662-.806-1.013-2.025l3.623-.483q.212 1.095.662 1.523.446.424 1.14.424.726 0 1.208-.531c.483-.531.483-.829.483-1.423q0-.907-.465-1.401c-.465-.496-.729-.498-1.261-.498q-.423-.002-1.168.212l.187-2.588q.298.045.465.045.703 0 1.171-.452c.467-.452.473-.653.473-1.068q0-.599-.354-.948-.356-.354-.969-.354a1.4 1.4 0 0 0-1.033.385q-.403.378-.543 1.341m18.499-.844-3.603.44q-.142-.749-.473-1.057-.337-.308-.821-.308-.878-.004-1.364.885-.356.642-.525 2.733.65-.659 1.329-.973.685-.315 1.582-.315 1.743 0 2.946 1.241 1.203 1.249 1.204 3.158 0 1.288-.607 2.356-.609 1.068-1.687 1.615-1.08.547-2.71.547-1.955.002-3.134-.669-1.179-.668-1.889-2.123c-.71-1.455-.706-2.261-.706-3.868q0-3.523 1.487-5.163Q21.06 0 23.697 0q1.554-.002 2.455.358c.901.36 1.101.592 1.496 1.048q.599.694.908 1.735m-6.662 5.806q0 1.06.531 1.656.535.599 1.308.599a1.53 1.53 0 0 0 1.194-.543q.478-.543.478-1.618 0-1.101-.498-1.679a1.58 1.58 0 0 0-1.239-.578q-.753 0-1.268.563-.504.558-.504 1.599m7.71-2.273q0-3.71 1.337-5.194T35.012 0q1.315.002 2.158.323.844.327 1.376.844.537.519.838 1.092.306.576.494 1.337.364 1.453.364 3.041.002 3.543-1.203 5.183-1.194 1.64-4.13 1.642-1.642 0-2.656-.525a4.3 4.3 0 0 1-1.662-1.539q-.469-.718-.733-1.965a14 14 0 0 1-.259-2.755m3.583.008q-.004 2.484.44 3.397.44.908 1.277.908a1.36 1.36 0 0 0 .953-.385q.407-.389.592-1.223.193-.837.191-2.603c0-1.729-.144-2.888-.44-3.488q-.44-.891-1.319-.893-.897.002-1.3.908-.393.917-.395 3.378m9.424-3.522q-.002.996.175 1.362t.512.364a.53.53 0 0 0 .385-.156q.159-.153.239-.49.076-.337.076-1.041.002-1.039-.175-1.399c-.177-.36-.292-.358-.528-.358q-.36 0-.519.364-.165.366-.163 1.353m-1.08 8.325c4.012 2.041 3.054 4.936-4.051 6.694a41 41 0 0 1-6.786 1.136v2.298c2.778-.194 5.362-.833 7.623-1.379 10.685-2.588 10.312-7.208 3.557-9.815a10 10 0 0 1-.343 1.064" style="fill-rule:evenodd;clip-rule:evenodd"/>
    </svg>
`,se=encodeURIComponent(ke),$e=Ce.div`
    position: relative;
    border: none;
    padding: 5px;
    display: inline-block;
    user-select: none;
    touch-action: none;
    ${e=>e.isGrabbing?ne`
                cursor: url("data:image/svg+xml,${se}") 16 16, pointer;
            `:ne`
                cursor: url("data:image/svg+xml,${se}") 16 16, pointer;
            `};
    `,Se=({imagesBaseUrl:e=[],mouseDragSpeed:s=5,reverse:c=!1,autoplaySpeed:I=1,autoplay:h=!0,width:k=400,height:Q=300,showRotationIconOnStartup:$=!1,imageInitialIndex:l=0,shouldNotifyEvents:p=!1,notifyOnPointerDown:x,notifyOnPointerUp:i,notifyOnPointerMoved:b})=>{let W=ye(null),[w,X]=f(!1),[S,H]=f(0),[M,J]=f(0),[t,A]=f(0),[g,v]=f(0),[E,j]=f($),[K,L]=f(h),[q,V]=f([]),a=e.length;T(()=>{L(h),j(!h&&$)},[h,$]),T(()=>{typeof l>"u"||((l<0||l>=a)&&(v(l),console.log(`ImageInitialIndex of ${l} was out of bounds of 0 and count: ${a}`)),v(l))},[l,a]),T(()=>{if(!K)return;let o=setTimeout(()=>{F(1)},1e3/I);return()=>clearTimeout(o)}),T(()=>{V(e.map(u=>({src:u,index:Ie()})))},[e]);let F=G(o=>{let u=re(g+(c?-1:1)*Math.floor(o),a);v(u)},[g,c,a]),P=G(o=>{H(o.clientX),A(o.clientX),J(g),L(!1),X(!0),j(!1),document.addEventListener("mouseup",()=>{y()},{once:!0}),p&&(x==null||x(o.clientX,o.clientY))},[g,p,x]),y=G(o=>{X(!1),p&&(typeof o<"u"?i==null||i(o==null?void 0:o.clientX,o.clientY):i==null||i(0,0))},[p,i]),Z=G(o=>{w&&(A(o.clientX),p&&(b==null||b(o.clientX,o.clientY)))},[w,p,b]);return T(()=>{let o=(Y,D)=>{let B=re(Y+(c?-1:1)*Math.floor(D),a);v(B)};if(!w)return;let _=1/s*(a*k/100),r=(t-S)/_;o(M,r)},[t,a,M,S,w,s,k,c]),N.createElement($e,{ref:W,isGrabbing:w,onPointerDown:P,onPointerMove:Z},E?N.createElement(te,{widthInEm:2,isReverse:c}):null,q==null?void 0:q.map((o,u)=>N.createElement(oe,{src:o.src,width:k,height:Q,isVisible:u===g,key:u})))};export{he as RenderVideo,Se as SpinImages360};
//# sourceMappingURL=index.mjs.map