(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7567:function(e,t,n){"use strict";var i=n(5444),a=n(7294),o=n(9),r=n(7004);t.Z=function(e){var t,n=e.sectionBg,o=e.title,r=e.subtitle,u=(0,i.useStaticQuery)("1897215765");return a.createElement(l,{sectionbg:n},a.createElement(d,null,a.createElement("h1",null,o),a.createElement("p",null,r),a.createElement("form",{method:"post","netlify-honeypot":"bot-field","data-netlify":"true",name:"contact"},a.createElement(c,null,a.createElement(m,null,a.createElement("input",{type:"hidden",name:"bot-field"}),a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),a.createElement("input",{type:"text",placeholder:"Enter your first name",id:"firstname",name:"firstname",required:!0}),a.createElement("input",{type:"text",placeholder:"Enter your last name",id:"lastname",name:"lastname",required:!0})),a.createElement("input",{type:"email",placeholder:"Enter your email",id:"email",name:"email",required:!0}),a.createElement("select",{id:"subject",name:"subject",required:!0},a.createElement(p,{disabled:!0,selected:!0,value:""},"-- Select a Service --"),(t=[],u.allContentfulService.edges.forEach((function(e,n){t.push(a.createElement(p,{key:n,value:e.node.title.replace(/\s+/g,"-").toLowerCase()},e.node.title))})),t)),a.createElement("textarea",{id:"message",placeholder:"Enter Message",name:"message",required:!0}),a.createElement(s,{as:"button",primary:"true",type:"submit"},"Sign Up")))))};var l=o.ZP.div.withConfig({displayName:"Contact__ContactContainer",componentId:"sc-22n935-0"})(["background:",";background-size:cover;height:550px;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:",";display:flex;justify-content:center;align-items:center;"],(function(e){return e.sectionbg?"linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.5) 0%,\n      rgba(0, 0, 0, 0.5) 35%,\n      rgba(0, 0, 0, 0.1) 100%\n    ),\n    url("+e.sectionbg+") no-repeat center;":"none"}),(function(e){return e.sectionbg?"white":"#263b46"})),d=o.ZP.div.withConfig({displayName:"Contact__ContactContent",componentId:"sc-22n935-1"})(["display:flex;flex-direction:column;align-items:center;h1{text-align:center;margin-bottom:1rem;font-size:clamp(1rem,5vw,3rem);padding:0 1rem;}p{text-align:center;margin-bottom:2rem;font-size:clamp(1rem,2.5vw,1.5rem);padding:0 1rem;}form{width:100%;z-index:10;}"]),c=o.ZP.div.withConfig({displayName:"Contact__FormWrap",componentId:"sc-22n935-2"})(["display:flex;flex-direction:column;padding:0 1rem;width:100%;input,textarea,select{padding:1rem 1.5rem;outline:none;width:100%;border:",";margin-bottom:1rem;}input,select{height:48px;}select{-webkit-appearance:none padding:7px 40px 7px 12px width:100% border:1px solid #E8EAED border-radius:5px background-color:white box-shadow:0 1px 3px -2px #9098A9 cursor:pointer font-family:inherit font-size:16px transition:all 150ms ease}textarea{height:100px;}"],(function(e){return e.sectionbg?"none":"1px solid #e5e6e9"})),m=o.ZP.div.withConfig({displayName:"Contact__FormName",componentId:"sc-22n935-3"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem;@media screen and (max-width:768px){display:flex;flex-direction:column;grid-gap:0;}"]),s=(0,o.ZP)(r.z).withConfig({displayName:"Contact__FormButton",componentId:"sc-22n935-4"})(["height:48px;@media screen and (max-width:768px){width:100%;min-width:350px;}@media screen and (max-width:400px){width:100%;min-width:250px;}"]),p=o.ZP.option.withConfig({displayName:"Contact__FormOption",componentId:"sc-22n935-5"})(["color:#223254 background-color:#263b46;"])},1658:function(e,t,n){"use strict";var i=n(7294),a=n(9);t.Z=function(e){var t=e.background,n=e.animation;return i.createElement(o,{background:t,"data-sal":n,"data-sal-duration":"1000","data-sal-delay":"300","data-sal-easing":"ease"},i.createElement(r,null,"Aerial Photography and Video"),i.createElement(l,null,"Our professional drone services ensure the highest quality output for whatever project you have in mind. Aerial views help to increase visibility, separate your property from the rest of the pack. Contact us today to see how we can accomplish your mission together."))};var o=a.ZP.div.withConfig({displayName:"InformationSection__InfoContainer",componentId:"xklais-0"})(["justify-content:center;align-items:center;text-align:center;background-color:",";width:100%;color:#000;padding:5rem calc((100vw - 1600px) / 2);height:100%;"],(function(e){return e.background})),r=a.ZP.h2.withConfig({displayName:"InformationSection__Heading",componentId:"xklais-1"})(["font-size:clamp(1.2rem,5vw,2.5rem);text-align:center;margin-bottom:2rem;"]),l=a.ZP.p.withConfig({displayName:"InformationSection__Body",componentId:"xklais-2"})(["margin:0 10em;font-size:20px;color:#3b3b3b;@media screen and (max-width:768px){margin:0 1em;}"])},4971:function(e,t,n){"use strict";var i=n(7294),a=n(9),o=n(6802),r=n(7004),l=(0,a.ZP)(r.z).withConfig({displayName:"Products___StyledButton",componentId:"sc-1ml2jo2-0"})(["font-size=14px;"]);t.Z=function(e){var t=e.background,n=e.products,a=e.name,o=e.animation;return i.createElement("div",null,i.createElement(d,{id:a,background:t},i.createElement(c,{style:{textTransform:"capitalize"},"data-sal":o,"data-sal-duration":"1000","data-sal-delay":"300","data-sal-easing":"ease"},a),i.createElement(m,null,function(e,t){var n=[];return e.forEach((function(e,a){n.push(i.createElement(s,{key:a,"data-sal":t,"data-sal-duration":"1000","data-sal-delay":(300+200*a).toString(),"data-sal-easing":"ease"},i.createElement("a",{href:e.slug},i.createElement(p,{image:e.image,alt:e.title})),i.createElement(u,null,i.createElement(g,null,i.createElement(f,null,e.title),i.createElement(h,null,e.description)),i.createElement(l,{to:e.slug,primary:"true"},"Learn More"))))})),n}(n,o))))};var d=a.ZP.div.withConfig({displayName:"Products__ProductsContainer",componentId:"sc-1ml2jo2-1"})(["background-color:",";min-height:100vh;padding:5rem calc((100vw - 1600px) / 2);color:black;"],(function(e){return e.background})),c=a.ZP.div.withConfig({displayName:"Products__ProductsHeading",componentId:"sc-1ml2jo2-2"})(["font-size:clamp(1.2rem,6vw,3rem);text-align:center;margin-bottom:3rem;color:#000;"]),m=a.ZP.div.withConfig({displayName:"Products__ProductsWrapper",componentId:"sc-1ml2jo2-3"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:3rem;justify-items:center;padding:0 2rem;@media screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media screen and (max-width:768px){grid-template-columns:1fr;grid-gap:3.5rem;}"]),s=a.ZP.div.withConfig({displayName:"Products__ProductCard",componentId:"sc-1ml2jo2-4"})(["line-height:2;width:100%;height:100%;position:relative;border-radius:10px;transition:0.2s ease;@media screen and (max-width:768px){padding-top:1rem;}@media screen and (max-width:400px){min-height:600px;}"]),p=(0,a.ZP)(o.G).withConfig({displayName:"Products__ProductImg",componentId:"sc-1ml2jo2-5"})(["height:50%;max-width:100%;position:relative;border-radius:10px;filter:brightness(70%);transition:0.4s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%);}"]),u=a.ZP.div.withConfig({displayName:"Products__ProductInfo",componentId:"sc-1ml2jo2-6"})(["display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 1rem;@media screen and (max-width:768px){padding:0 1rem;display:block;}"]),g=a.ZP.div.withConfig({displayName:"Products__TextWrap",componentId:"sc-1ml2jo2-7"})([""]),f=a.ZP.h2.withConfig({displayName:"Products__ProductTitle",componentId:"sc-1ml2jo2-8"})(["font-weight:600;font-size:1.5rem;margin:0.5rem 3rem;"]),h=a.ZP.p.withConfig({displayName:"Products__ProductDescription",componentId:"sc-1ml2jo2-9"})(["font-style:italic;margin:0.5rem 0 1rem 0;"])},7227:function(e,t,n){"use strict";var i=n(7294),a=n(5444),o=n(4971);t.Z=function(e){var t,n,r=e.background,l=e.animation,d=(0,a.useStaticQuery)("3438242500");return i.createElement("div",null,i.createElement(o.Z,{background:r,products:(t=d.allContentfulService.edges,n=[],t.forEach((function(e,t){var i={};i.image=e.node.hero.headerBg.gatsbyImageData,i.title=e.node.title,i.description=e.node.shortDescription.shortDescription,i.slug=e.node.slug,n.push(i)})),n),name:"services",animation:l}))}},8435:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(7294),a=n(7567),o=n(9),r=n(2349),l=function(e){var t=e.videoBg,n=e.heading,a=e.subHeading,o=e.buttonText,r=e.buttonSlug;return i.createElement(d,null,i.createElement(c,null,i.createElement(m,{src:t,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})),i.createElement(s,null,i.createElement(p,null,i.createElement(u,null,n),i.createElement(g,null,a),i.createElement(f,{to:r,smooth:!0,spy:!0,offset:-80,duration:1e3},o))))},d=o.ZP.div.withConfig({displayName:"VideoHero__HeroContainer",componentId:"uy41pp-0"})(['background:#0c0c0c;display:flex;justify-content:center;align-items:center;height:100vh;padding:0 1rem;position:relative;margin-top:-80px;color:white;:before{content:"";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);}']),c=o.ZP.div.withConfig({displayName:"VideoHero__HeroBg",componentId:"uy41pp-1"})(["position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;overflow:hidden;"]),m=o.ZP.video.withConfig({displayName:"VideoHero__VideoBg",componentId:"uy41pp-2"})(["width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),s=o.ZP.div.withConfig({displayName:"VideoHero__HeroContent",componentId:"uy41pp-3"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2);"]),p=o.ZP.div.withConfig({displayName:"VideoHero__HeroItems",componentId:"uy41pp-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:white;line-height:1.1;font-weight:bold;"]),u=o.ZP.h1.withConfig({displayName:"VideoHero__HeroH1",componentId:"uy41pp-5"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:3px;padding:0 1rem;"]),g=o.ZP.p.withConfig({displayName:"VideoHero__HeroP",componentId:"uy41pp-6"})(["font-size:clamp(1rem,2vw,2rem);margin-bottom:2rem;font-weight:400;"]),f=(0,o.ZP)(r.rU).withConfig({displayName:"VideoHero__HeroButton",componentId:"uy41pp-7"})(['position:relative;overflow:hidden;background:none;border:2px solid #ffffff;border-radius:0rem;color:#ffffff;padding:clamp(8px,3vw,16px) clamp(32px,3vw,40px);font-size:clamp(12px,3vw,20px);cursor:pointer;text-decoration:none;text-transform:uppercase;transition:0.08s ease-in;-o-transition:0.08s ease-in;-ms-transition:0.08s ease-in;-moz-transition:0.08s ease-in;-webkit-transition:0.08s ease-in;&:hover{color:#263b46;}&:before{content:"";position:absolute;background:#ffffff;top:0;left:0;right:0;bottom:100%;z-index:-1;-webkit-transition:bottom 0.25s ease-in;}&:hover:before{bottom:0;}']),h=n(3088),y=n(7227),x=n(3751),b=n(2775),w=n(7244),v=n(1279),_=(0,o.ZP)(v.Wt0).withConfig({displayName:"StatsData___StyledAiOutlineIdcard",componentId:"sc-1us6jm1-0"})(["color:#047bf1;"]),E=(0,o.ZP)(b.EGB).withConfig({displayName:"StatsData___StyledMdTouchApp",componentId:"sc-1us6jm1-1"})(["color:#f3a82e;"]),C=(0,o.ZP)(w.b3O).withConfig({displayName:"StatsData___StyledBiTimer",componentId:"sc-1us6jm1-2"})(["color:#f34f2e;"]),P=[{icon:i.createElement(_,null),title:"Certified",desc:"Part 107 certified pilot"},{icon:i.createElement(E,null),title:"Personal Touch",desc:"Located locally, available onsite"},{icon:i.createElement(C,null),title:"Fast Turnaround",desc:"Quick response and time to production"}],I=function(e){var t=e.animation;return i.createElement(Z,null,i.createElement(N,{"data-sal":t,"data-sal-duration":"1000","data-sal-delay":"300","data-sal-easing":"ease"},"Why Choose Us?"),i.createElement(k,null,P.map((function(e,n){return i.createElement(S,{key:n,"data-sal":t,"data-sal-duration":"1000","data-sal-delay":(300+200*n).toString(),"data-sal-easing":"ease"},i.createElement(j,null,e.icon),i.createElement(z,null,e.title),i.createElement(H,null,e.desc))}))))},Z=o.ZP.div.withConfig({displayName:"Stats__StatsContainer",componentId:"q2oe7y-0"})(["width:100%;background:white;color:#000;display:flex;flex-direction:column;justify-content:center;padding:5rem calc((100vw - 1500px) / 2);@media screen and (max-width:768px){text-align:center;}"]),N=o.ZP.h1.withConfig({displayName:"Stats__Heading",componentId:"q2oe7y-1"})(["font-size:clamp(1.5rem,6vw,2rem);margin-bottom:3rem;padding:0 2rem;text-align:center;@media screen and (max-width:768px){text-align:center;}"]),k=o.ZP.div.withConfig({displayName:"Stats__Wrapper",componentId:"q2oe7y-2"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;text-align:center;@media screen and (max-width:768px){grid-template-columns:1fr;}@media screen and (max-width:500px){grid-template-columns:1fr;}"]),S=o.ZP.div.withConfig({displayName:"Stats__StatsBox",componentId:"q2oe7y-3"})(["height:100%;width:100%;padding:2rem;"]),j=o.ZP.div.withConfig({displayName:"Stats__Icon",componentId:"q2oe7y-4"})(["font-size:3rem;margin-bottom:1rem;"]),z=o.ZP.p.withConfig({displayName:"Stats__Title",componentId:"q2oe7y-5"})(["font-size:clamp(1rem,2.5vw,1.5rem);margin-bottom:0.5rem;"]),H=o.ZP.p.withConfig({displayName:"Stats__Description",componentId:"q2oe7y-6"})([""]),B=n(1658),q=n(5444),T=function(){var e=(0,q.useStaticQuery)("297161204"),t=e.allContentfulComponentPage,n=e.allContentfulImageWithAiTags,o=t.edges[0].node,r=o.sections[0],d=o.sections[1],c=o.sections[2].columns[0],m=n.edges[0].node.image.file.url;return i.createElement(h.Z,null,i.createElement(x.Z,{title:d.title}),i.createElement(l,{videoBg:r.headerBg.file.url,heading:r.heading,subHeading:r.subHeading,buttonText:r.buttonText,buttonSlug:r.buttonSlug}),i.createElement(B.Z,{heading:c.heading,text:c.text.text,animation:"slide-right"}),i.createElement(y.Z,{background:"#efeff2",animation:"slide-right"}),i.createElement(I,{animation:"slide-right"}),i.createElement(a.Z,{sectionBg:m,title:"Get a Quote",subtitle:"Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur."}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-68fdb130490c9dd4572d.js.map