(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,l=i(a("VbXa")),r=i(a("PJYZ")),s=i(a("8OQS")),o=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),m=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t},u=Object.create({}),h=function(e){var t=m(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},f="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,g=p&&window.IntersectionObserver,E=new WeakMap;var v=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+o+a+n+t+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,l=e.style,r=e.onLoad,d=e.onError,m=e.loading,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:n},u,{onLoad:r,onError:d,ref:t,loading:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&h(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!f&&g&&!t.critical&&!a.seenBefore;var i=t.critical||p&&(f||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,l=void 0===n?{}:n,r=e.imgStyle,s=void 0===r?{}:r,d=e.placeholderStyle,u=void 0===d?{}:d,h=e.placeholderClassName,f=e.fluid,p=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,b=e.itemProp,N=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:S?1:0,transition:I?"opacity "+E+"ms":"none"},s),T="boolean"==typeof g?"lightgray":g,R={transitionDelay:E+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&R,s,u),L={title:t,alt:this.state.isVisible?"":a,style:k,className:h};if(f){var O=f;return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),T&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&R)}),O.base64&&c.default.createElement(y,(0,o.default)({src:O.base64},L)),O.tracedSVG&&c.default.createElement(y,(0,o.default)({src:O.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,o.default)({alt:a,title:t,loading:N},O))}}))}if(p){var j=p,C=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},l);return"inherit"===l.display&&delete C.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&c.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},I&&R)}),j.base64&&c.default.createElement(y,(0,o.default)({src:j.base64},L)),j.tracedSVG&&c.default.createElement(y,(0,o.default)({src:j.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,o.default)({alt:a,title:t,loading:N},j))}}))}return null},t}(c.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:N,sizes:S,fixed:N,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=b;t.default=I},cXuA:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidTNMImage",(function(){return v})),a.d(t,"pageQuery",(function(){return w}));var i=a("q1tI"),n=a.n(i),l=a("TJpk"),r=a.n(l),s=a("Bl7J"),o=a("9eSz"),c=a.n(o),d=a("Wbzz"),m=a("OS56"),u=a.n(m),h=(a("tyWD"),a("K7k0"),a("fxeT")),f=a.n(h),p=a("r36O"),g=a.n(p),E={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};t.default=function(e){return n.a.createElement(s.a,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"Service Design - Tech no mad"),n.a.createElement("meta",{name:"Service Design - Tech no mad",content:"Service Design"})),n.a.createElement("div",{id:"main",className:"alt"},n.a.createElement("section",{id:"work-banner"},n.a.createElement("div",null,n.a.createElement("span",{className:"image main"},n.a.createElement(c.a,{fluid:e.data.tnmcover.childImageSharp.fluid,alt:""})))),n.a.createElement("div",{className:"project-wrapper"},n.a.createElement("div",{className:"project-content"},n.a.createElement("header",null,n.a.createElement("span",{className:"tag"},"RESARCH"),n.a.createElement("span",{className:"tag"},"USER EXPERIENCE"),n.a.createElement("span",{className:"tag"},"INTERACTION DESIGN"),n.a.createElement("span",{className:"tag"},"SPATIAL DESIGN"),n.a.createElement("h1",null,"tech.no.mad; ",n.a.createElement("br",null),"feeling at home everywhere."),n.a.createElement("h3",null,"Concerns about data privacy and the use of personal information are becoming one of the most significant issues of out time. Mindlessly we often accept service conditions without really knowing which personal data we are sharing. We asked people to reflect on the value of their personal data, offering fictious services in exchange for different kinds of data. They were asked to agree-or-not to these exchanges.")),n.a.createElement("section",{className:"header-post"},n.a.createElement("div",{className:"headerpost"},n.a.createElement("div",{className:"headerpost-left"},n.a.createElement("p",null,"* This project was carried out while working at the design agency, THINGS, in Milan."),n.a.createElement("p",null,n.a.createElement("a",{href:"/say-hello"},n.a.createElement("u",null,"Get in touch")),"with me for more details related to this project; such as my role, the problems i faced, the processes i used and how i addressed the challenges.")),n.a.createElement("div",{className:"headerpost-right"},n.a.createElement("div",{className:"client-image"},n.a.createElement("img",{className:"span-4",src:f.a,alt:"things logo"})),n.a.createElement("p",null,"Things.is a design and innovation agency for the Internet of Things. We create products & services with their own experiential ecosystems outlined by multi-channel touch points. We envision products and services in the IoT era through a human-centred approach. www.things.is")))),n.a.createElement("section",{className:"challenge-section"},n.a.createElement("span",{className:"project-step-number"},"01"),n.a.createElement("h2",null,"challenge"),n.a.createElement("div",{className:"challenge"},n.a.createElement("div",{className:"challenge-desc"},n.a.createElement("p",null,"The aim was to investigate new scenarios of the digital nomadic lifestyle through an exhibition setting. In addition, create awareness about how this lifestyle is affecting the design of physical products, services & spaces and affecting human behaviours & relationship."),n.a.createElement("p",null,"Awareness and concern about data privacy and specifically the use of personal information by digital service providers and communications channels is becoming one of the most significant issues of our time. Services that draw on multiple, real-time, personal data feeds - blended with third-party information - inevitably raise questions around privacy and ethics.")),n.a.createElement("div",{className:"challenge-credits"},n.a.createElement("div",{className:"topbar"}),n.a.createElement("span",{className:"credits-text"},n.a.createElement("strong",null,"YEAR:")," 2017"),n.a.createElement("span",{className:"credits-text"},n.a.createElement("strong",null,"DURATION:")," 3 months"),n.a.createElement("span",{className:"credits-text"},n.a.createElement("strong",null,"PROJECT TYPE:")," Designing an interactive exhibition at BASE for the Salone del Mobile during the Milan Design Week 2017."),n.a.createElement("span",{className:"credits-text"},n.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),n.a.createElement("span",{className:"credits-text"},n.a.createElement("strong",null,"MY ROLE:")," Desk research to gather inspiration & benchmarking, in-person interviews of digital nomads. Analysing of research to create personas and identify key insights that drove the generation of ideas & main concept. Formulating an exhibition experience that explore the idea/concept. Exhibition design & execution of the design in the physical space. Engaging with visitors during the exhibition. Calculating the answers and creating an infographic for visualising the results."),n.a.createElement("div",{className:"challenge-client"},n.a.createElement("h5",null,"CLIENT"),n.a.createElement("div",{className:"client-image"},n.a.createElement("img",{className:"span-3",src:g.a,alt:"salone logo"}))))),n.a.createElement("div",{className:"two-sidebyside"},n.a.createElement("div",{className:"img left"},n.a.createElement(c.a,{className:"project-process-images",fluid:e.data.tnmchallenge1.childImageSharp.fluid,alt:"",title:""})),n.a.createElement("div",{className:"img right"},n.a.createElement(c.a,{className:"project-process-images",fluid:e.data.tnmchallenge2.childImageSharp.fluid,alt:"",title:""}))),n.a.createElement("p",{className:"full-text"},"The challenge was to design an installation that will allow visitors to explore in a fun and interactive way how comfortable they feel in sharing personal data in different situations. The exhibition will also showcase several interactive products, prototypes and concepts to explore the different aspects & scenarios of the digital nomadic lifestyle.")),n.a.createElement("section",{className:"process-section"},n.a.createElement("span",{className:"project-step-number"},"02"),n.a.createElement("h2",null,"process"),n.a.createElement("div",{className:"process-image"},n.a.createElement(c.a,{fluid:e.data.tecnomad_process.childImageSharp.fluid})),n.a.createElement("p",{className:"full-text"},"An understanding of the digital nomad was established which then allowed us to form a Digital Nomad Persona."),n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.tnmprocess3.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmprocess4.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmprocess5.childImageSharp.fluid})),n.a.createElement("h4",null,"BEHAVIOUR "),n.a.createElement("p",{className:"full-text"},"Keep moving, working, travelling and trying out new things. Growing up with the internet and digital tools means living and working differently."),n.a.createElement("h4",null,"PAINS"),n.a.createElement("p",{className:"full-text"},"Keeping in touch with family & friends. Understanding, adapting and adjusting to the different environments, cultures, people, & lifestyles. Privacy & security issues/expectations for different contexts."),n.a.createElement("h4",null,"NEEDS "),n.a.createElement("p",{className:"full-text"},"Their personal preferences/data to follow them everywhere they go. An space/product/service that is designed for diversity and inclusion Cosy environment that can be easily personalised."),n.a.createElement("h4",null,"GOALS "),n.a.createElement("p",{className:"full-text"},"Getting the most out of the place & from the people around for the time they are there. Feel like home anytime and anywhere they go (every corner of the globe). mad was established which then allowed us to form a Digital Nomad Persona."),n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.tnmprocess6.childImageSharp.fluid})),n.a.createElement("p",{className:"full-text"},"4 Digital Nomadic contexts were explored; Travel, living, work & entertainment. Analysing the research gave us a key insight."),n.a.createElement("h4",null,"MAIN INSIGHT "),n.a.createElement("p",{className:"full-text"},"Data, privacy & security is not ON/OFF, but it is a gradient. There is a trade-off between personal data shared in return for contextual & personalised value. However, it is vital for businesses to be transparent about how their users’ data is being used when providing them value and should allow for user autonomy."," "),n.a.createElement("h4",null,"IDEA/CONCEPT "),n.a.createElement("p",{className:"full-text"},"To understand which kind of data are people willing and comfortable to share in exchange for receiving different value added services, as they move from one context to another."),n.a.createElement("p",{className:"full-text"},"This exhibition would provide people with apparent values they would get in exchange for sharing their data and thus assess how this level of transparency & user autonomy will affect how comfortable they feel in sharing their personal data."," "),n.a.createElement("p",{className:"full-text"},"The values will be centered around the four main goals/needs of a Digital Nomadic person:"),n.a.createElement("div",{className:"full-text"},n.a.createElement("ol",null,n.a.createElement("li",null,"Keeping in touch"),n.a.createElement("li",null,"Personalisation"),n.a.createElement("li",null,"Feeling comfortable & “at home”"),n.a.createElement("li",null,"Getting inspired, finding new ideas and meeting new people"))),n.a.createElement("h4",null,"ADDRESSED TOPICS "),n.a.createElement("p",{className:"full-text"},"Security & Privacy issues, Portability of personal data, provision of Contextually-Aware and Personalised value to users."),n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.tnmprocess7.childImageSharp.fluid})),n.a.createElement("h4",null,"EXHIBITION SETTING "),n.a.createElement("p",{className:"full-text"},"Visitors will get to know the different categories of data they own. The exhibition space will be divided into multiple smaller areas which would represent a typical day (or a month) in the life of a nomadic person."),n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.tnmprocess8.childImageSharp.fluid})),n.a.createElement("p",{className:"full-text"},"Visitors will have to answer some questions related to their data, like they were really embracing a nomadic lifestyle. Finally, they would get to interact with few products that are perfect for a person with a nomadic lifestyle. Visitors should be able to express their thoughts and opinions in regards data sharing and privacy in a fun, interactive and tangible manner."),n.a.createElement("div",{id:"project-images-wrapper"},n.a.createElement(u.a,Object.assign({className:"image-scroll"},E),n.a.createElement(c.a,{fluid:e.data.tnmprocess9.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmprocess10.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmprocess11.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmprocess12.childImageSharp.fluid})))),n.a.createElement("section",{className:"outcome-section"},n.a.createElement("div",{className:"outcome-text-wrapper"},n.a.createElement("span",{className:"project-step-number"},"03"),n.a.createElement("h2",null,"outcome"),n.a.createElement("p",null,"The exhibition explored how privacy & security concerns affected the amount of personal data the user is comfortable sharing at these four contexts."),n.a.createElement("p",null,"Participants were asked to place a stamp on the service or product they would like to use, giving in exchange the stated personal data. 4 groups of data were crossed with 4 contexts, resulting in 16 values that were offered to participants."," "),n.a.createElement("p",null,"The Question? Would you give the following personal data in exchange for different value in each of these contexts (that are encountered by a digital nomad)?"),n.a.createElement("h3",null,"The exhibition was a huge success as it raised awareness amongst people in regards to the value of their personal data. It also showed the relationship between personal data and value different people have in different contexts and how open the visitors are to sharing their personal data in different contexts in exchange for receiving personalised service."),n.a.createElement("p",null,"Visit"," ",n.a.createElement("a",{href:"https://thingsconmilan.com"},"thingsconmilan.com")," to find out more about the entire event.")),n.a.createElement("div",{id:"project-images-wrapper"},n.a.createElement(u.a,Object.assign({className:"image-scroll"},E),n.a.createElement(c.a,{fluid:e.data.tnmoutcome13.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome14.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome15.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome16.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome17.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome18.childImageSharp.fluid}),n.a.createElement(c.a,{fluid:e.data.tnmoutcome19.childImageSharp.fluid}))),n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.tnmoutcome20.childImageSharp.fluid}))),n.a.createElement("section",{id:"footertopcta",className:"inner"},n.a.createElement("p",{className:"text arrow-back"},"head back to",n.a.createElement("br",null),n.a.createElement(d.Link,{to:"/work"},"all my work.")))))),n.a.createElement("div",{className:"footer-top"},n.a.createElement("div",{className:"inner"},n.a.createElement("h2",null,"other projects."),n.a.createElement("div",{id:"work"},n.a.createElement("div",{className:"card-wrapper"},n.a.createElement("a",{href:"/work/service-design-kin"},n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.project1.childImageSharp.fluid,alt:""})),n.a.createElement("div",{className:"card-info"},n.a.createElement("div",{className:"title"},"kin."),n.a.createElement("div",{className:"text"},"Conversational-based service for Type II Diabetes management that leverages on trusted relationships."),n.a.createElement("div",{className:"tags"},n.a.createElement("ul",null,n.a.createElement("li",null,"SERVICE DESIGN"),n.a.createElement("li",null,"UX STRATEGY"),n.a.createElement("li",null,"USER EXPERIENCE")))))),n.a.createElement("div",{className:"card-wrapper"},n.a.createElement("a",{href:"/work/service-design-levico-terme"},n.a.createElement("div",{className:"image"},n.a.createElement(c.a,{fluid:e.data.project2.childImageSharp.fluid,alt:""})),n.a.createElement("div",{className:"card-info"},n.a.createElement("div",{className:"title"},"levico terme medical centre."),n.a.createElement("div",{className:"text"},"Using gamification techniques to provide a holistic & customised sports service performance & rehabilitation."),n.a.createElement("div",{className:"tags"},n.a.createElement("ul",null,n.a.createElement("li",null,"SERVICE DESIGN"),n.a.createElement("li",null,"USER EXPERIENCE"),n.a.createElement("li",null,"UX STRATEGY"),n.a.createElement("li",null,"BUSINESS DESIGN"))))))))))};var v="2382520800",w="1606001074"},fxeT:function(e,t,a){e.exports=a.p+"static/things-logo-faf4015712579c55e89e7e93978cfb03.jpg"},r36O:function(e,t,a){e.exports=a.p+"static/Salone-del-Mobile_FNM-a76e06069712568605d5e64fcae32cee.jpg"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-tech-no-mad-js-6f0fa765f114b0b08897.js.map