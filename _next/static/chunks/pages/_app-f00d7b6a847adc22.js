(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5195)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(4532),a=n(3353),i=n(1410),f=n(9064),c=n(370),s=n(9955),d=n(4224),p=n(508),h=n(1516),y=n(4266);let v=new Set;function b(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let _=l.default.forwardRef(function(e,t){let n,o;let{href:i,as:v,children:_,prefetch:x,passHref:j,replace:m,shallow:C,scroll:k,locale:M,onClick:E,onMouseEnter:w,onTouchStart:O,legacyBehavior:P=!1}=e,L=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let R=!1!==x,S=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),I=null!=S?S:T,N=!S,{href:A,as:U}=l.default.useMemo(()=>{if(!S){let e=g(i);return{href:e,as:v?g(v):e}}let[e,t]=u.resolveHref(S,i,!0);return{href:e,as:v?u.resolveHref(S,v):t||e}},[S,i,v]),D=l.default.useRef(A),H=l.default.useRef(U);P&&(o=l.default.Children.only(n));let K=P?o&&"object"==typeof o&&o.ref:t,[z,B,F]=p.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(H.current!==U||D.current!==A)&&(F(),H.current=U,D.current=A),z(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,A,F,z]);l.default.useEffect(()=>{I&&B&&R&&b(I,A,U,{locale:M},N)},[U,A,B,M,R,null==S?void 0:S.locale,I,N]);let Z={ref:X,onClick(e){P||"function"!=typeof E||E(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,r,u,i,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:f,scroll:i}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};c?l.default.startTransition(h):h()}(e,I,A,U,m,C,k,M,N,R)},onMouseEnter(e){P||"function"!=typeof w||w(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(R||!N)&&b(I,A,U,{locale:M,priority:!0,bypassPrefetchedCheck:!0},N)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(R||!N)&&b(I,A,U,{locale:M,priority:!0,bypassPrefetchedCheck:!0},N)}};if(f.isAbsoluteUrl(U))Z.href=U;else if(!P||j||"a"===o.type&&!("href"in o.props)){let e=void 0!==M?M:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&h.getDomainLocale(U,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);Z.href=t||y.addBasePath(c.addLocale(U,e,null==S?void 0:S.defaultLocale))}return P?l.default.cloneElement(o,Z):l.default.createElement("a",Object.assign({},L,Z),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,f=i||!l,[c,s]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(f||c)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!c){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[f,n,t,c,d.current]);let h=o.useCallback(()=>{s(!1)},[]);return[p,c,h]};var o=n(7294),r=n(29);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5195:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(5893),r=n(1664),l=n.n(r),u=n(1163);function a(){return(0,u.useRouter)(),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",backgroundColor:"wheat"},children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",height:"80px",width:"80%",backgroundColor:"wheat",alignItems:"center"},children:[(0,o.jsx)("div",{style:{margin:"10px",padding:"10px",color:"black",fontSize:"20px"},children:(0,o.jsx)(l(),{href:"/",children:"Home"})}),(0,o.jsx)("div",{style:{margin:"10px",color:"black",fontSize:"20px",padding:"10px"},children:(0,o.jsx)(l(),{href:"/about",children:"About"})})]})})})}function i(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{}),(0,o.jsx)(t,{...n})]})}n(3814)},3814:function(){},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);