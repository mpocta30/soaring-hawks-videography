(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[621],{2846:function(e,t,n){"use strict";n.d(t,{OP:function(){return m},sh:function(){return s}});var o=n(6802),i=n(7294),r=n(9);t.ZP=function(e){var t=e.background,n=e.flipped,o=e.columnOneContent,r=e.columnTwoContent;return n?i.createElement(a,{background:t},i.createElement(d,null,o),i.createElement(l,null,r)):i.createElement(a,{background:t},i.createElement(c,null,o),i.createElement(l,null,r))};var a=r.ZP.div.withConfig({displayName:"DoubleColumn__ContentWrapper",componentId:"sc-1oz91be-0"})(["background-color:",";display:grid;grid-template-columns:1fr 1fr;padding:5rem 2rem;@media screen and (max-width:768px){grid-template-columns:1fr;}"],(function(e){return e.background})),l=r.ZP.div.withConfig({displayName:"DoubleColumn__ColumnContainer",componentId:"sc-1oz91be-1"})(["margin:2rem 4rem;position:relative;padding-top:1rem;padding-right:2rem;display:flex;justify-content:center;align-items:center;@media screen and (max-width:768px){text-align:center;padding:0;margin:2rem 0rem;}"]),c=(0,r.ZP)(l).withConfig({displayName:"DoubleColumn__ColumnOneContainer",componentId:"sc-1oz91be-2"})(["@media screen and (max-width:768px){order:2;}"]),d=(0,r.ZP)(l).withConfig({displayName:"DoubleColumn__FlippedColumnOneContainer",componentId:"sc-1oz91be-3"})(["order:2;"]),m=r.ZP.div.withConfig({displayName:"DoubleColumn__TextWrapper",componentId:"sc-1oz91be-4"})(["justify-content:center;align-items:center;h2{margin-bottom:1rem;font-size:clamp(1rem,5vw,2rem);}p{color:#3b3b3b;margin-bottom:2rem;font-size:clamp(1rem,1.5vw,1.5rem);}"]),s=(0,r.ZP)(o.G).withConfig({displayName:"DoubleColumn__ColumnImage",componentId:"sc-1oz91be-5"})(["display:flex;border-radius:10px;width:100%;max-width:550px;height:auto;"])},199:function(e,t,n){"use strict";var o=n(5444),i=n(7294),r=n(9),a=n(2846),l=n(3201),c=function(e,t,n){return i.createElement(d,null,i.createElement(m,null,n),i.createElement("h3",null,e),i.createElement("p",null,t))};t.Z=function(e){var t=e.background,n=(0,o.useStaticQuery)("1657065233").allContentfulComponentSection.edges[0].node,r=n.columns[0],d=n.columns[1];return i.createElement(a.ZP,{background:t,columnOneContent:c(r.heading,r.text.text,i.createElement(l.Dmm,null)),columnTwoContent:c(d.heading,d.text.text,i.createElement(l.KoQ,null))})};var d=r.ZP.div.withConfig({displayName:"IconSection__ContentWrapper",componentId:"zw06ei-0"})(["text-align:center;justify-content:center;align-items:center;h3{margin-bottom:1rem;font-size:1.5rem;font-style:italic;}p{color:#3b3b3b;}"]),m=r.ZP.div.withConfig({displayName:"IconSection__IconWrapper",componentId:"zw06ei-1"})(["background-color:#263b46;position:relative;border:none;margin:auto;border-radius:50%;color:white;cursor:pointer;border-radius:50%;border-radius:50%;font-size:clamp(2rem,4vw,3rem);line-height:clamp(3.5rem,6vw,6rem);width:clamp(3.5rem,6vw,6rem);height:clamp(3.5rem,6vw,5rem);justify-content:center;align-items:center;margin-bottom:1rem;> svg{position:absolute;margin:0;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}"])},3998:function(e,t,n){"use strict";var o=n(7294),i=n(9);t.Z=function(e){var t=e.heading,n=e.headerBg;return o.createElement(r,{headerBg:n},o.createElement(a,null,o.createElement(l,null,o.createElement(c,null,t))))};var r=i.ZP.div.withConfig({displayName:"PhotoHero__HeroContainer",componentId:"dhrri4-0"})(["background:linear-gradient( 180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.2) 35%,rgba(0,0,0,0.01) 100% ),url(",') no-repeat center;background-size:cover;height:60vh;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:white;display:flex;justify-content:center;align-items:center;position:relative;:before{content:"";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);}'],(function(e){return e.headerBg})),a=i.ZP.div.withConfig({displayName:"PhotoHero__HeroContent",componentId:"dhrri4-1"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2);"]),l=i.ZP.div.withConfig({displayName:"PhotoHero__HeroItems",componentId:"dhrri4-2"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:white;line-height:1.1;font-weight:bold;"]),c=i.ZP.h1.withConfig({displayName:"PhotoHero__HeroH1",componentId:"dhrri4-3"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:3px;padding:0 1rem;"])},8827:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var o=n(7294),i=n(3088),r=n(3552),a=n(9),l=n(6802),c=n(3201),d=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={showLightbox:!1,selectedImage:0},t.componentDidMount=function(){window.addEventListener("keyup",t.handleKeyUp,!1)},t.componentWillUnmount=function(){window.removeEventListener("keyup",t.handleKeyUp,!1)},t.handleClick=function(e,n){e.preventDefault(),t.setState({showLightbox:!t.state.showLightbox,selectedImage:n})},t.closeModal=function(){t.setState({showLightbox:!1})},t.goBack=function(){t.state.selectedImage>0?t.setState({selectedImage:t.state.selectedImage-1}):t.setState({selectedImage:t.props.images.length-1})},t.goForward=function(){t.state.selectedImage<t.props.images.length-1?t.setState({selectedImage:t.state.selectedImage+1}):t.setState({selectedImage:0})},t.handleKeyUp=function(e){e.preventDefault();var n=e.keyCode;t.state.showLightbox&&(37===n&&t.goBack,39===n&&t.goForward,27===n&&t.setState({showLightbox:!1}))},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=this.props.images,n=this.state,i=n.showLightbox,r=n.selectedImage;return o.createElement(o.Fragment,null,o.createElement(s,null,t.map((function(t,n){return o.createElement(p,{key:t.gatsbyImageData},o.createElement("a",{href:t.gatsbyImageData,alt:t.title,onClick:function(t){return e.handleClick(t,n)}},o.createElement(m,{image:(0,l.d)(t),alt:t.title})))}))),o.createElement(f,{visible:i,onKeyUp:function(t){return e.handleKeyDown(t)}},o.createElement(g,{onClick:this.closeModal}),o.createElement(b,null,o.createElement(m,{image:(0,l.d)(t[r]),alt:t[r].title,objectFit:"contain"}),o.createElement(u,{onClick:this.goBack,disabled:0===r}),o.createElement(h,{onClick:this.goForward,disabled:r===t.length-1}))))},t}(o.Component),m=(0,a.ZP)(l.G).withConfig({displayName:"LightBox__StyledImg",componentId:"tcxr8h-0"})(["position:relative;top:0;left:0;width:100%;height:100%;& > img{object-position:0% 0% !important;object-fit:contain;}"]),s=((0,a.ZP)(l.G).withConfig({displayName:"LightBox__GalleryImg",componentId:"tcxr8h-1"})(["box-shadow:0 2px 8px 0 rgba(0,0,0,0.2),0 3px 20px 0 rgba(0,0,0,0.19);&:hover{filter:blur(4px);transition:all ease 0.5s;cursor:pointer;}&:nth-child(6n + 3){grid-column:span 1;grid-row:span 2;}&:nth-child(6n + 2),&:nth-child(6n + 5),&:nth-child(6n + 6){grid-column:span 2;grid-row:span 2;}"]),a.ZP.div.withConfig({displayName:"LightBox__Gallery",componentId:"tcxr8h-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:16vw;grid-gap:0.5em;padding:5rem calc((100vw - 1600px) / 2);margin:0 2rem;color:white;@media screen and (max-width:1200px){grid-template-columns:repeat(2 1fr);}.gatsby-image-outer-wrapper{height:100%;}"])),p=a.ZP.div.withConfig({displayName:"LightBox__GalleryItem",componentId:"tcxr8h-3"})(["position:relative;box-shadow:0 2px 8px 0 rgba(0,0,0,0.2),0 3px 20px 0 rgba(0,0,0,0.19);&:hover{filter:blur(4px);transition:all ease 0.5s;cursor:pointer;}&:nth-child(6n + 3){grid-column:span 1;grid-row:span 2;}&:nth-child(6n + 2),&:nth-child(6n + 5),&:nth-child(6n + 6){grid-column:span 2;grid-row:span 2;}"]),g=(0,a.ZP)(c.aHS).withConfig({displayName:"LightBox__CloseButton",componentId:"tcxr8h-4"})(["color:white;position:absolute;top:2rem;right:2rem;font-size:clamp(1.5rem,5vw,2.5rem);font-weight:bold;&:hover{color:#999;text-decoration:none;cursor:pointer;}"]),h=(0,a.ZP)(c.H_v).withConfig({displayName:"LightBox__NavRight",componentId:"tcxr8h-5"})(["color:#cccccc;position:absolute;right:0;top:50%;width:auto;font-size:clamp(1.5rem,5vw,3rem);font-weight:bold;transition:0.6s ease;border-radius:3px 0 0 3px;&:hover{color:white;background-color:rgba(0,0,0,0.8);text-decoration:none;cursor:pointer;}"]),u=(0,a.ZP)(c._HU).withConfig({displayName:"LightBox__NavLeft",componentId:"tcxr8h-6"})(["color:#cccccc;position:absolute;left:0;top:50%;width:auto;font-size:clamp(1.5rem,5vw,3rem);font-weight:bold;transition:0.6s ease;border-radius:0 3px 3px 0;&:hover{color:white;background-color:rgba(0,0,0,0.8);text-decoration:none;cursor:pointer;}"]),f=a.ZP.div.withConfig({displayName:"LightBox__LightboxModal",componentId:"tcxr8h-7"})(["display:",";position:fixed;z-index:200;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background:rgba(0,0,0,0.8);opacity:",";visibility:",";"],(function(e){return e.visible?"block":"none"}),(function(e){return e.visible?"1":"0"}),(function(e){return e.visible?"visible":"hidden"})),b=a.ZP.div.withConfig({displayName:"LightBox__LightboxContent",componentId:"tcxr8h-8"})(["position:relative;display:block;background-color:#000;margin:auto;padding:0;width:90%;max-width:1200px;height:85vh;"]),w=d,x=n(3998),v=n(2846),y=function(e){var t=e.videoSrcURL,n=e.videoTitle;return o.createElement(C,null,o.createElement("iframe",{src:t,title:n,width:"560",height:"315",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))},C=a.ZP.div.withConfig({displayName:"Video__StyledVideo",componentId:"sc-12dz2aj-0"})(["position:relative;width:100%;padding-bottom:56.25%;height:0;z-index:10;> iframe{position:absolute;top:0;left:0;width:100%;height:100%;}"]),_=n(199),I=n(3751),E=function(e){return o.createElement(v.OP,null,o.createElement("h2",null,e.title),o.createElement("p",null,e.description.description))},k=function(e){var t=e.pageContext.project,n=t.sections[0],r=t.sections[1];return o.createElement(i.Z,null,o.createElement(I.Z,{seo:n}),o.createElement(x.Z,{heading:r.title,headerBg:r.hero.headerBg.file.url}),o.createElement(_.Z,null),o.createElement(v.ZP,{background:"#efeff2",columnOneContent:E(r),columnTwoContent:o.createElement(y,{videoSrcURL:r.video.videoUrl,videoTitle:r.video.title})}),o.createElement(w,{images:r.photoGallery.photos}))}}}]);
//# sourceMappingURL=component---src-templates-project-page-js-b6fafd2762331da98979.js.map