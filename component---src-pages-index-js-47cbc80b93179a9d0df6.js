(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7567:function(e,t,n){"use strict";var i=n(7294),a=n(9),o=n(7004);t.Z=function(e){var t=e.sectionBg,n=e.title,a=e.subtitle;return i.createElement(r,{sectionbg:t},i.createElement(d,null,i.createElement("h1",null,n),i.createElement("p",null,a),i.createElement("form",{method:"post","netlify-honeypot":"bot-field","data-netlify":"true",name:"contact"},i.createElement(l,null,i.createElement(m,null,i.createElement("input",{type:"hidden",name:"bot-field"}),i.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),i.createElement("input",{type:"text",placeholder:"Enter your first name",id:"firstname",name:"firstname",required:!0}),i.createElement("input",{type:"text",placeholder:"Enter your last name",id:"lastname",name:"lastname",required:!0})),i.createElement("input",{type:"email",placeholder:"Enter your email",id:"email",name:"email",required:!0}),i.createElement("input",{type:"text",placeholder:"Enter the subject",id:"subject",name:"subject",required:!0}),i.createElement("textarea",{id:"message",placeholder:"Enter Message",name:"message",required:!0}),i.createElement(s,{as:"button",primary:"true",type:"submit"},"Sign Up")))))};var r=a.ZP.div.withConfig({displayName:"Contact__ContactContainer",componentId:"sc-22n935-0"})(["background:",";background-size:cover;height:550px;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:",";display:flex;justify-content:center;align-items:center;"],(function(e){return e.sectionbg?"linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.5) 0%,\n      rgba(0, 0, 0, 0.5) 35%,\n      rgba(0, 0, 0, 0.1) 100%\n    ),\n    url("+e.sectionbg+") no-repeat center;":"none"}),(function(e){return e.sectionbg?"white":"#263b46"})),d=a.ZP.div.withConfig({displayName:"Contact__ContactContent",componentId:"sc-22n935-1"})(["display:flex;flex-direction:column;align-items:center;h1{text-align:center;margin-bottom:1rem;font-size:clamp(1rem,5vw,3rem);padding:0 1rem;}p{text-align:center;margin-bottom:2rem;font-size:clamp(1rem,2.5vw,1.5rem);padding:0 1rem;}form{width:100%;z-index:10;}"]),l=a.ZP.div.withConfig({displayName:"Contact__FormWrap",componentId:"sc-22n935-2"})(["display:flex;flex-direction:column;padding:0 1rem;width:100%;input,textarea{padding:1rem 1.5rem;outline:none;width:100%;border:",";margin-bottom:1rem;}input{height:48px;}textarea{height:100px;}"],(function(e){return e.sectionbg?"none":"1px solid #e5e6e9"})),m=a.ZP.div.withConfig({displayName:"Contact__FormName",componentId:"sc-22n935-3"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem;@media screen and (max-width:768px){display:flex;flex-direction:column;grid-gap:0;}"]),s=(0,a.ZP)(o.z).withConfig({displayName:"Contact__FormButton",componentId:"sc-22n935-4"})(["height:48px;@media screen and (max-width:768px){width:100%;min-width:350px;}@media screen and (max-width:400px){width:100%;min-width:250px;}"])},8095:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(7294),a=n(5444),o=n(9),r=function(e){var t=e.background,n=e.products,a=e.name,o=e.animation;return i.createElement("div",null,i.createElement(d,{id:a,background:t},i.createElement(l,{style:{textTransform:"capitalize"},"data-sal":o,"data-sal-duration":"2000","data-sal-delay":"300","data-sal-easing":"ease"},a),i.createElement(m,null,n)))},d=o.ZP.div.withConfig({displayName:"Products__ProductsContainer",componentId:"sc-1ml2jo2-0"})(["background-color:",";min-height:100vh;padding:5rem calc((100vw - 1600px) / 2);color:black;"],(function(e){return e.background})),l=o.ZP.div.withConfig({displayName:"Products__ProductsHeading",componentId:"sc-1ml2jo2-1"})(["font-size:clamp(1.2rem,6vw,3rem);text-align:center;margin-bottom:3rem;color:#000;"]),m=o.ZP.div.withConfig({displayName:"Products__ProductsWrapper",componentId:"sc-1ml2jo2-2"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:3rem;justify-items:center;padding:0 2rem;@media screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media screen and (max-width:868px){grid-template-columns:1fr;}"]),s=n(6802),c=n(7004),p=(0,o.ZP)(c.z).withConfig({displayName:"Services___StyledButton",componentId:"sc-1she30b-0"})(["font-size=14px;"]),g=function(e){var t=e.background,n=e.animation,o=(0,a.useStaticQuery)("3438242500");return i.createElement("div",null,i.createElement(r,{background:t,products:function(e,t){var n=[];return e.forEach((function(e,a){n.push(i.createElement(u,{key:a,"data-sal":t,"data-sal-duration":"2000","data-sal-delay":(300+200*a).toString(),"data-sal-easing":"ease"},i.createElement(f,{image:e.node.hero.headerBg.gatsbyImageData,alt:e.title}),i.createElement(h,null,i.createElement(y,null,i.createElement(w,null,e.node.title),i.createElement(b,null,e.node.shortDescription.shortDescription)),i.createElement(p,{to:e.node.slug,primary:"true"},"Learn More"))))})),n}(o.allContentfulService.edges,n),name:"services",animation:n}))},u=o.ZP.div.withConfig({displayName:"Services__ProductCard",componentId:"sc-1she30b-1"})(["line-height:2;width:100%;height:60%;position:relative;border-radius:10px;transition:0.2s ease;"]),f=(0,o.ZP)(s.G).withConfig({displayName:"Services__ProductImg",componentId:"sc-1she30b-2"})(["height:100%;max-width:100%;position:relative;border-radius:10px;filter:brightness(70%);transition:0.4s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%);}"]),h=o.ZP.div.withConfig({displayName:"Services__ProductInfo",componentId:"sc-1she30b-3"})(["display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 1rem;@media screen and (max-width:280px){padding:0 1rem;}"]),y=o.ZP.div.withConfig({displayName:"Services__TextWrap",componentId:"sc-1she30b-4"})([""]),w=o.ZP.h2.withConfig({displayName:"Services__ProductTitle",componentId:"sc-1she30b-5"})(["font-weight:600;font-size:1.5rem;margin:0.5rem 3rem;"]),b=o.ZP.p.withConfig({displayName:"Services__ProductDescription",componentId:"sc-1she30b-6"})(["font-style:italic;margin:0.5rem 0 1rem 0;"])},5700:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var i=n(7294),a=n(7567),o=n(9),r=n(2349),d=function(e){var t=e.videoBg,n=e.heading,a=e.subHeading,o=e.buttonText,r=e.buttonSlug;return i.createElement(l,null,i.createElement(m,null,i.createElement(s,{src:t,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})),i.createElement(c,null,i.createElement(p,null,i.createElement(g,null,n),i.createElement(u,null,a),i.createElement(f,{to:r,smooth:!0,spy:!0,offset:-80,duration:1e3},o))))},l=o.ZP.div.withConfig({displayName:"VideoHero__HeroContainer",componentId:"uy41pp-0"})(['background:#0c0c0c;display:flex;justify-content:center;align-items:center;height:100vh;padding:0 1rem;position:relative;margin-top:-80px;color:white;:before{content:"";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);}']),m=o.ZP.div.withConfig({displayName:"VideoHero__HeroBg",componentId:"uy41pp-1"})(["position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;overflow:hidden;"]),s=o.ZP.video.withConfig({displayName:"VideoHero__VideoBg",componentId:"uy41pp-2"})(["width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),c=o.ZP.div.withConfig({displayName:"VideoHero__HeroContent",componentId:"uy41pp-3"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2);"]),p=o.ZP.div.withConfig({displayName:"VideoHero__HeroItems",componentId:"uy41pp-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:white;line-height:1.1;font-weight:bold;"]),g=o.ZP.h1.withConfig({displayName:"VideoHero__HeroH1",componentId:"uy41pp-5"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:3px;padding:0 1rem;"]),u=o.ZP.p.withConfig({displayName:"VideoHero__HeroP",componentId:"uy41pp-6"})(["font-size:clamp(1rem,2vw,2rem);margin-bottom:2rem;font-weight:400;"]),f=(0,o.ZP)(r.rU).withConfig({displayName:"VideoHero__HeroButton",componentId:"uy41pp-7"})(['position:relative;overflow:hidden;background:none;border:2px solid #ffffff;border-radius:0rem;color:#ffffff;padding:clamp(8px,3vw,16px) clamp(32px,3vw,40px);font-size:clamp(12px,3vw,20px);cursor:pointer;text-decoration:none;text-transform:uppercase;transition:0.08s ease-in;-o-transition:0.08s ease-in;-ms-transition:0.08s ease-in;-moz-transition:0.08s ease-in;-webkit-transition:0.08s ease-in;&:hover{color:#263b46;}&:before{content:"";position:absolute;background:#ffffff;top:0;left:0;right:0;bottom:100%;z-index:-1;-webkit-transition:bottom 0.25s ease-in;}&:hover:before{bottom:0;}']),h=n(3088),y=n(8095),w=n(3751),b=n(2775),_=n(7244),x=n(1279),v=(0,o.ZP)(x.Wt0).withConfig({displayName:"StatsData___StyledAiOutlineIdcard",componentId:"sc-1us6jm1-0"})(["color:#047bf1;"]),C=(0,o.ZP)(b.EGB).withConfig({displayName:"StatsData___StyledMdTouchApp",componentId:"sc-1us6jm1-1"})(["color:#f3a82e;"]),P=(0,o.ZP)(_.b3O).withConfig({displayName:"StatsData___StyledBiTimer",componentId:"sc-1us6jm1-2"})(["color:#f34f2e;"]),I=[{icon:i.createElement(v,null),title:"Certified",desc:"Part 107 certified pilot"},{icon:i.createElement(C,null),title:"Personal Touch",desc:"Located locally, available onsite"},{icon:i.createElement(P,null),title:"Fast Turnaround",desc:"Quick response and time to production"}],E=function(e){var t=e.animation;return i.createElement(Z,null,i.createElement(N,{"data-sal":t,"data-sal-duration":"2000","data-sal-delay":"300","data-sal-easing":"ease"},"Why Choose Us?"),i.createElement(k,null,I.map((function(e,n){return i.createElement(S,{key:n,"data-sal":t,"data-sal-duration":"2000","data-sal-delay":(300+200*n).toString(),"data-sal-easing":"ease"},i.createElement(T,null,e.icon),i.createElement(z,null,e.title),i.createElement(H,null,e.desc))}))))},Z=o.ZP.div.withConfig({displayName:"Stats__StatsContainer",componentId:"q2oe7y-0"})(["width:100%;background:white;color:#000;display:flex;flex-direction:column;justify-content:center;padding:5rem calc((100vw - 1500px) / 2);@media screen and (max-width:768px){text-align:center;}"]),N=o.ZP.h1.withConfig({displayName:"Stats__Heading",componentId:"q2oe7y-1"})(["font-size:clamp(1.5rem,6vw,2rem);margin-bottom:3rem;padding:0 2rem;text-align:center;@media screen and (max-width:768px){text-align:center;}"]),k=o.ZP.div.withConfig({displayName:"Stats__Wrapper",componentId:"q2oe7y-2"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;text-align:center;@media screen and (max-width:768px){grid-template-columns:1fr;}@media screen and (max-width:500px){grid-template-columns:1fr;}"]),S=o.ZP.div.withConfig({displayName:"Stats__StatsBox",componentId:"q2oe7y-3"})(["height:100%;width:100%;padding:2rem;"]),T=o.ZP.div.withConfig({displayName:"Stats__Icon",componentId:"q2oe7y-4"})(["font-size:3rem;margin-bottom:1rem;"]),z=o.ZP.p.withConfig({displayName:"Stats__Title",componentId:"q2oe7y-5"})(["font-size:clamp(1rem,2.5vw,1.5rem);margin-bottom:0.5rem;"]),H=o.ZP.p.withConfig({displayName:"Stats__Description",componentId:"q2oe7y-6"})([""]),j=n(6802),B=n(1424),q=n(3201),D=n(5444),V=((0,o.ZP)(B.osu).withConfig({displayName:"Testimonials___StyledIoMdCheckmarkCircleOutline",componentId:"sc-12ktwpi-0"})(["color:#3fffa8;font-size:2rem;margin-bottom:1rem;"]),(0,o.ZP)(q.UZO).withConfig({displayName:"Testimonials___StyledFaRegLightbulb",componentId:"sc-12ktwpi-1"})(["color:#f9b19b;font-size:2rem;margin-bottom:1rem;"]),(0,o.ZP)("div").withConfig({displayName:"Testimonials___StyledDiv",componentId:"sc-12ktwpi-2"})(["overflow-x:hidden;"]),o.ZP.div.withConfig({displayName:"Testimonials__TestimonialsContainer",componentId:"sc-12ktwpi-3"})(["background-color:",";width:100%;color:#000;padding:5rem calc((100vw - 1500px) / 2);height:100%;"],(function(e){return e.background})),o.ZP.p.withConfig({displayName:"Testimonials__TopLine",componentId:"sc-12ktwpi-4"})(["color:#077bf1;font-size:1rem;padding-left:2rem;margin-bottom:0.75rem;"]),o.ZP.p.withConfig({displayName:"Testimonials__Description",componentId:"sc-12ktwpi-5"})(["text-align:start;padding-left:2rem;margin-bottom:4rem;font-size:clamp(1.5rem,5vw,2rem);font-weight:bold;"])),W=((0,o.ZP)(V).withConfig({displayName:"Testimonials___StyledDescription",componentId:"sc-12ktwpi-6"})(["overflow-x:hidden;"]),o.ZP.div.withConfig({displayName:"Testimonials__ContentWrapper",componentId:"sc-12ktwpi-7"})(["display:grid;grid-template-columns:1fr 1fr;padding:0 2rem;@media screen and (max-width:768px){grid-template-columns:1fr;}"]),o.ZP.div.withConfig({displayName:"Testimonials__ColumnOne",componentId:"sc-12ktwpi-8"})(["display:grid;grid-template-rows:1fr 1fr;"]),o.ZP.div.withConfig({displayName:"Testimonials__Testimonial",componentId:"sc-12ktwpi-9"})(["padding-top:1rem;padding-right:2rem;h3{margin-bottom:1rem;font-size:1.5rem;font-style:italic;}p{color:#3b3b3b;}"])),O=((0,o.ZP)(W).withConfig({displayName:"Testimonials___StyledTestimonial2",componentId:"sc-12ktwpi-10"})(["overflow-x:hidden;"]),(0,o.ZP)(W).withConfig({displayName:"Testimonials___StyledTestimonial",componentId:"sc-12ktwpi-11"})(["overflow-x:hidden;"]),o.ZP.div.withConfig({displayName:"Testimonials__ColumnTwo",componentId:"sc-12ktwpi-12"})(["display:grid;grid-template-columns:1fr 1fr;margin-top:2rem;grid-gap:10px;@media screen and (max-width:500px){grid-template-columns:1fr;}"]),(0,o.ZP)(j.G).withConfig({displayName:"Testimonials__Images",componentId:"sc-12ktwpi-13"})(["border-radius:10px;height:100%;"]),n(5064)),F=function(e){var t=e.background,n=e.animation;return i.createElement(A,{background:t,"data-sal":n,"data-sal-duration":"2000","data-sal-delay":"300","data-sal-easing":"ease"},i.createElement(G,null,"Aerial Photography and Video"),i.createElement(L,null,"Our professional drone services ensure the highest quality output for whatever project you have in mind. Aerial views help to increase visibility, separate your property from the rest of the pack. Contact us today to see how we can accomplish your mission together."))},A=o.ZP.div.withConfig({displayName:"InformationSection__InfoContainer",componentId:"xklais-0"})(["justify-content:center;align-items:center;text-align:center;background-color:",";width:100%;color:#000;padding:5rem calc((100vw - 1600px) / 2);height:100%;"],(function(e){return e.background})),G=o.ZP.h2.withConfig({displayName:"InformationSection__Heading",componentId:"xklais-1"})(["font-size:clamp(1.2rem,5vw,2.5rem);text-align:center;margin-bottom:2rem;"]),L=o.ZP.p.withConfig({displayName:"InformationSection__Body",componentId:"xklais-2"})(["margin:0 10em;font-size:20px;color:#3b3b3b;@media screen and (max-width:768px){margin:0 4em;}"]),M=function(){var e=(0,D.useStaticQuery)("3543489159").allContentfulComponentPage.edges[0].node,t=e.sections[0],n=e.sections[1],o=e.sections[2].columns[0];return i.createElement(h.Z,null,i.createElement(w.Z,{title:n.title}),i.createElement(d,{videoBg:t.headerBg.file.url,heading:t.heading,subHeading:t.subHeading,buttonText:t.buttonText,buttonSlug:t.buttonSlug}),i.createElement(F,{heading:o.heading,text:o.text.text,animation:"slide-right"}),i.createElement(y.Z,{background:"#efeff2",animation:"slide-right"}),i.createElement(E,{animation:"slide-right"}),i.createElement(a.Z,{sectionBg:O.Z,title:"Get a Quote",subtitle:"Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur."}))}},5064:function(e,t,n){"use strict";t.Z=n.p+"static/email-24ac3f702aecceb5a1a2d0b57e7a0d99.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-47cbc80b93179a9d0df6.js.map