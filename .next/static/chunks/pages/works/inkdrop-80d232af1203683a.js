(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{4651:function(g,b,a){"use strict";a.d(b,{Ee:function(){return f},d9:function(){return k}});var c=a(6052),d=a(5031),e=a(7294),h=a(4697);function i(){return(i=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function j(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}function k(a){var g=a.loading,b=a.src,i=a.srcSet,j=a.onLoad,k=a.onError,l=a.crossOrigin,m=a.sizes,c=a.ignoreFallback,d=(0,e.useState)("pending"),f=d[0],o=d[1];(0,e.useEffect)(function(){o(b?"loading":"pending")},[b]);var p=(0,e.useRef)(),n=(0,e.useCallback)(function(){if(b){q();var a=new Image;a.src=b,l&&(a.crossOrigin=l),i&&(a.srcset=i),m&&(a.sizes=m),g&&(a.loading=g),a.onload=function(a){q(),o("loaded"),null==j||j(a)},a.onerror=function(a){q(),o("failed"),null==k||k(a)},p.current=a}},[b,l,i,m,j,k,g]),q=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,h.a)(function(){if(!c)return"loading"===f&&n(),function(){q()}},[f,n,c]),c?"loaded":f}var l=["htmlWidth","htmlHeight","alt"],m=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],n=e.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,f=a.alt,g=j(a,l);return e.createElement("img",i({width:c,height:d,ref:b,alt:f},g))}),f=(0,c.Gp)(function(a,p){var b=a.fallbackSrc,f=a.fallback,q=a.src,r=a.srcSet,s=a.align,t=a.fit,g=a.loading,u=a.ignoreFallback,v=a.crossOrigin,h=j(a,m),l=null!=g||u|| void 0===b&& void 0===f,w=k(i({},a,{ignoreFallback:l})),o=i({ref:p,objectFit:t,objectPosition:s},l?h:(0,d.CE)(h,["onError","onLoad"]));return"loaded"!==w?f||e.createElement(c.m$.img,i({as:n,className:"chakra-image__placeholder",src:b},o)):e.createElement(c.m$.img,i({as:n,src:q,srcSet:r,crossOrigin:v,loading:g,className:"chakra-image"},o))});d.Ts&&(f.displayName="Image")},20:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/inkdrop",function(){return c(3766)}])},8598:function(e,b,a){"use strict";a.d(b,{Et:function(){return l},P4:function(){return k},Pg:function(){return m}});var f=a(5893),c=a(1664),g=a.n(c),d=a(5675),h=a.n(d),i=a(8527),j=a(917),k=function(a){var c=a.children,d=a.href,b=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:b,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,f.jsx)(i.AB,{href:d,target:"_blank",children:(0,f.jsx)(i.xv,{mt:2,children:b})}),(0,f.jsx)(i.xv,{fontSize:14,children:c})]})})},l=function(a){var d=a.children,b=a.id,c=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsx)(g(),{href:"/works/".concat(b),scroll:!1,children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:c,className:"grid-item-thumbnail",placeholder:"blur"}),(0,f.jsx)(i.AB,{href:"/works/".concat(b),children:(0,f.jsx)(i.xv,{mt:2,fontSize:20,children:c})}),(0,f.jsx)(i.xv,{fontSize:14,children:d})]})})})},m=function(){return(0,f.jsx)(j.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},951:function(c,b,a){"use strict";var d=a(5893),e=a(3319),f=a(9008),g=a(8598),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(b){var c=b.children,a=b.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[a&&(0,d.jsxs)(f.default,{children:[(0,d.jsxs)("title",{children:[a," - Kevin Adu-Poku"]}),(0,d.jsx)("meta",{name:"twitter:title",content:a}),(0,d.jsx)("meta",{property:"og:title",content:a})]}),c,(0,d.jsx)(g.Pg,{})]})})}},5930:function(f,a,b){"use strict";var c=b(5934);function d(){var a,b,c=(a=["\n  text-align: justify;\n  text-indent: 1em;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var e=c.Z.p(d());a.Z=e},8808:function(d,b,a){"use strict";a.d(b,{Dx:function(){return j},WZ:function(){return k},h_:function(){return l}});var e=a(5893),c=a(1664),f=a.n(c),g=a(8527),h=a(4651),i=a(9876),j=function(a){var b=a.children;return(0,e.jsxs)(g.xu,{children:[(0,e.jsx)(f(),{href:"/works",children:(0,e.jsx)(g.rU,{children:"Works"})}),(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(i.XC,{})," "]}),(0,e.jsx)(g.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},k=function(a){var b=a.src,c=a.alt;return(0,e.jsx)(h.Ee,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},l=function(a){var b=a.children;return(0,e.jsx)(g.Ct,{colorScheme:"green",mr:2,children:b})}},3766:function(c,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return j}});var d=a(5893),e=a(8527),f=a(9876),g=a(8808),h=a(5930),i=a(951),j=!0;b.default=function(){return(0,d.jsx)(i.Z,{title:"Project Negus",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(g.Dx,{children:["Project Negus ",(0,d.jsx)(e.Ct,{children:"2016-2017"})]}),(0,d.jsx)(h.Z,{children:"The negus project was the exploration of the cultures and people of the diaspora through various art mediums, encouraging the rediscovery and collaboration of African roots."}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:"Website"}),(0,d.jsxs)(e.rU,{href:"https://cdn.jwplayer.com/videos/6jA04nfn-U1u6Qq09.mp4",children:["Intro ",(0,d.jsx)(f.h0,{mx:"2px"})]})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:"Goal"}),(0,d.jsx)("span",{children:"Celebration of our people, by our people; The Unification of Us"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:"Events"}),(0,d.jsxs)(e.rU,{href:"https://cdn.jwplayer.com/videos/raSnFGs6-U1u6Qq09.mp4",children:["Panel disussion on Childish Gambino's revolutionary album, ","Awaken My Love!",(0,d.jsx)(f.h0,{mx:"2px"})]})]})]}),(0,d.jsx)("iframe",{src:"https://cdn.jwplayer.com/players/Ts5mrWep-TcKAhMMJ.html",width:"640",height:"360",alt:"Negus"}),(0,d.jsx)("iframe",{src:"https://cdn.jwplayer.com/players/wvc5C6yF-TcKAhMMJ.html",width:"640",height:"360",alt:"Negus"})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=20)}),_N_E=a.O()}])