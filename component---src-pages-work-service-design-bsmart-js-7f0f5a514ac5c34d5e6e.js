(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"9eSz":function(e,a,t){"use strict";var n=t("TqRt");a.__esModule=!0,a.default=void 0;var s,l=n(t("VbXa")),r=n(t("PJYZ")),i=n(t("8OQS")),c=n(t("pVnL")),o=n(t("q1tI")),d=n(t("17x9")),m=function(e){var a=(0,c.default)({},e),t=a.resolutions,n=a.sizes,s=a.critical;return t&&(a.fixed=t,delete a.resolutions),n&&(a.fluid=n,delete a.sizes),s&&(a.loading="eager"),a},u=Object.create({}),h=function(e){var a=m(e),t=a.fluid?a.fluid.src:a.fixed.src;return u[t]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,g=f&&window.IntersectionObserver,E=new WeakMap;var v=function(e,a){var t=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var a=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),E.delete(e.target),a())}}))}),{rootMargin:"200px"})),s);return t&&(t.observe(e),E.set(e,a)),function(){t.unobserve(e),E.delete(e)}},b=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+i+c+t+s+a+r+l+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=o.default.forwardRef((function(e,a){var t=e.sizes,n=e.srcSet,s=e.src,l=e.style,r=e.onLoad,d=e.onError,m=e.loading,u=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:t,srcSet:n,src:s},u,{onLoad:r,onError:d,ref:a,loading:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));w.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=f&&h(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!p&&g&&!a.critical&&!t.seenBefore;var n=a.critical||f&&(p||!t.useIOSupport);return t.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)((0,r.default)(t))),t.handleRef=t.handleRef.bind((0,r.default)((0,r.default)(t))),t}(0,l.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=h(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=m(e),t=a.fluid?a.fluid.src:a.fixed.src,u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=m(this.props),a=e.title,t=e.alt,n=e.className,s=e.style,l=void 0===s?{}:s,r=e.imgStyle,i=void 0===r?{}:r,d=e.placeholderStyle,u=void 0===d?{}:d,h=e.placeholderClassName,p=e.fluid,f=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,N=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,c.default)({opacity:S?1:0,transition:I?"opacity "+E+"ms":"none"},i),k="boolean"==typeof g?"lightgray":g,T={transitionDelay:E+"ms"},j=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&T,i,u),L={title:a,alt:this.state.isVisible?"":t,style:j,className:h};if(p){var O=p;return o.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),k&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&T)}),O.base64&&o.default.createElement(w,(0,c.default)({src:O.base64},L)),O.tracedSVG&&o.default.createElement(w,(0,c.default)({src:O.tracedSVG},L)),this.state.isVisible&&o.default.createElement("picture",null,O.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),o.default.createElement(w,{alt:t,title:a,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:N},O))}}))}if(f){var R=f,W=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},l);return"inherit"===l.display&&delete W.display,o.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},k&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:k,width:R.width,opacity:this.state.imgLoaded?0:1,height:R.height},I&&T)}),R.base64&&o.default.createElement(w,(0,c.default)({src:R.base64},L)),R.tracedSVG&&o.default.createElement(w,(0,c.default)({src:R.tracedSVG},L)),this.state.isVisible&&o.default.createElement("picture",null,R.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),o.default.createElement(w,{alt:t,title:a,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:N},R))}}))}return null},a}(o.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:N,sizes:S,fixed:N,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=y;a.default=I},fxeT:function(e,a,t){e.exports=t.p+"static/things-logo-faf4015712579c55e89e7e93978cfb03.jpg"},o2rt:function(e,a,t){"use strict";t.r(a),t.d(a,"fluidTecneImage",(function(){return b})),t.d(a,"pageQuery",(function(){return w}));var n=t("q1tI"),s=t.n(n),l=t("TJpk"),r=t.n(l),i=t("Bl7J"),c=t("9eSz"),o=t.n(c),d=(t("Wbzz"),t("OS56")),m=t.n(d),u=(t("tyWD"),t("K7k0"),t("fxeT")),h=t.n(u),p=t("pE93"),f=t.n(p),g=t("s1fT"),E=t.n(g),v={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};a.default=function(e){return s.a.createElement(i.a,null,s.a.createElement(r.a,null,s.a.createElement("title",null,"Service Design - bsmart"),s.a.createElement("meta",{name:"Service Design - bsmart",content:"Service Design"})),s.a.createElement("div",{id:"main",className:"alt"},s.a.createElement("section",{id:"work-banner"},s.a.createElement("div",null,s.a.createElement("span",{className:"image main"},s.a.createElement(o.a,{fluid:e.data.tecnecover.childImageSharp.fluid,alt:""})))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("header",null,s.a.createElement("p",{className:"maisontags"},"Workshop, Research, Digital UX/UI, Interaction design, User experience, Business design, Product design"),s.a.createElement("h1",null,"b-smart."),s.a.createElement("h3",null,"b-smart is an ecosystem of physical & digital products that empower users to manage their personal data and privacy in a human-centric way; by making their choices about data explicit, deliberate, transparent & reversible."),s.a.createElement("br",null),s.a.createElement("h3",null,"Augmented Reality (AR) feature of the mobile app provides a transparent & engaging way to track data habits and grasp the technicalities regarding this complex topic."),s.a.createElement("br",null),s.a.createElement("h3",null,"Furthermore, physical products give users a simple way to control how and when their data is collected by their IoT devices at home.")),s.a.createElement("br",null),s.a.createElement("section",{className:"header-post"},s.a.createElement("div",{className:"headerpost"},s.a.createElement("div",{className:"headerpost-left"},s.a.createElement("p",null,"*This project was carried out while working at the design agency, THINGS, in Milan."),s.a.createElement("p",null,s.a.createElement("a",{href:"/say-hello"},s.a.createElement("u",null,"Get in touch"))," with me for more details related to this project; such as my role, the problems i faced, the processes i used and how i addressed the challenges.")),s.a.createElement("div",{className:"headerpost-right"},s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-4",src:h.a,alt:"things logo"})),s.a.createElement("br",null),s.a.createElement("p",null,"Things.is a design and innovation agency for the Internet of Things. We create products and services with their own experiential ecosystems outlined by multi-channel touch points. We envision products and services in the IoT era through a human-centred approach. www.things.is")))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Context of the project"),s.a.createElement("p",null,"This project has 2 phases. Phase 1 involved an exploratory research and conceptualisation of IoT products. In phase 2, the concepts defined in phase 1 will be developed into working prototypes for pilot testing."),s.a.createElement("p",null,"Below, only phase 1 of the project is described.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("h4",null,"Project overview"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"PROJECT TYPE:")," Designing a human-centric approach towards privacy & data transparency while using IoT devices at home."),s.a.createElement("br",null),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),s.a.createElement("br",null),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"MY ROLE:")," Desk research, preparing & conducting user interviews and surveys, preparing & facilitating workshops, ideation & finalising of concept, mapping customer journey & user flows, wireframing, visual design and business design."),s.a.createElement("div",{className:"challenge-client"},s.a.createElement("br",null),s.a.createElement("h5",null,"CLIENT"),s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-5",src:f.a,alt:"bsmart logo"}))))),s.a.createElement("section",{className:"challenge-section"},s.a.createElement("span",{className:"project-step-number"},"01"),s.a.createElement("h2",null,"challenge"),s.a.createElement("div",{className:"challenge"},s.a.createElement("div",{className:"challenge-desc"},s.a.createElement("p",null,"In a tech-driven world, the economy runs on our personal data. No one likes to feel as if they’re being watched, yet with technology continuing to mature, the power of digital is so great that brands have started to abuse it."),s.a.createElement("p",null,"Consumers’ personal data is being used and monetized without their knowledge or consent. And with this abuse of power has come the erosion of the trust that once existed between businesses and consumers."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecnechallenge.childImageSharp.fluid})),s.a.createElement("div",{className:"challenge"},s.a.createElement("div",{className:"challenge-desc"},s.a.createElement("p",{className:"half-textlarge"},"Privacy and data protection can no longer be an afterthought, but it should be a core component of the user’s experience."),s.a.createElement("p",null,"With the advent of a large number of connected objects, able to sense our environment, it is of fundamental importance to give to all users means to control the privacy settings."),s.a.createElement("p",null,"On top of it, several connected objects may not even have displays (or just very basic ones), making this task even more difficult.")))),s.a.createElement("section",{className:"process-section"},s.a.createElement("span",{className:"project-step-number"},"02"),s.a.createElement("h2",null,"process"),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The b-smart project started with an exploration around three main questions:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Is there a possibility to develop a user-centric interface for setting up privacy controls & tracking data collected by connected devices?"),s.a.createElement("br",null),s.a.createElement("li",null,"Could we create a clear user experience that propagates the values of transparency of personal data collected by IoT devices & brands?"),s.a.createElement("br",null),s.a.createElement("li",null,"Does this make any sense, business wise?")))),s.a.createElement("div",{className:"process-image"},s.a.createElement(o.a,{fluid:e.data.tecne_process.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Desk research on IoT devices")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"In order to better understand the problem we uncovered areas for research by exploring the different forces that might influence the problem. This involved deep diving on the context where IoT devices are present."),s.a.createElement("p",{className:"half-textlarge"},"The smart home context was found to be a place where users have a close and private relationship with IoT devices."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess3.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We examined various things in the home context such as:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Types of Iot devices used and their data collection behaviours."),s.a.createElement("li",null,"How users are managing these devices and how much control they have over it."),s.a.createElement("li",null,"Scenarios where personal data is used and its effect on privacy and transparency."),s.a.createElement("li",null,"Reasons for data collection & type of data collected by devices & brands."),s.a.createElement("li",null,"Main concerns of users, brands & other stakeholders in this context.")))),s.a.createElement(m.a,Object.assign({className:"image-scroll"},v),s.a.createElement(o.a,{fluid:e.data.tecneprocess4.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess5.childImageSharp.fluid})),s.a.createElement("p",{className:"full-textlarge"},"We dug deeper by analysing the smart home ecosystem so as to get a bigger picture of the relationship IoT device(s) have with users, other objects and its surroundings. And the types of interactions, data, information and material flows that occur between them."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess6.childImageSharp.fluid}))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Contextual interviews")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The desk research gave us the foundational understanding, which was used to explore quantitively about this topic."),s.a.createElement("p",null,"We conducted contextual interviews in the homes of smart device owners."))),s.a.createElement("p",{className:"full-textlarge"},"Our goal was to understand deeply the needs, pain points and the different causes & relationships that influence users' approach, mindset and behaviour towards IoT devices at home."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess7.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Some of the assumptions we validated were:"),s.a.createElement("ol",null,s.a.createElement("li",null,"People want to understand the complex world/mechanisms of personal data and privacy."),s.a.createElement("br",null),s.a.createElement("li",null,"People want to take that extra steps/effort to make choices to control what data they share and when they share it, with whom they share it with. More choices can mean more confusion."),s.a.createElement("br",null),s.a.createElement("li",null,"People want to monetise their data.")))),s.a.createElement("p",{className:"full-textlarge"},'"We have concerns about security and privacy but do not know how to adapt and adjust device settings in a way that might reduce these fears"'),s.a.createElement("p",{className:"full-textlarge"},'"This topic is very important to me, but it is too complex for me to understand, which makes me not interested to know more... maybe there is a simple, non geeky way to know what\'s happening"'),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Quantitative data")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",{className:"half-textlarge"},"Quantitative data to support our findings from desk research and interviews."),s.a.createElement("p",null,"We decided to conduct a survey to further help us re-confirm our assumptions over a large number of users"))),s.a.createElement(m.a,Object.assign({className:"image-scroll"},v),s.a.createElement(o.a,{fluid:e.data.tecneprocess8.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess9.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess10.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess11.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess12.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess13.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",{className:"half-textlarge"},"71% of people are unclear about which third parties their data is being given or sold to.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",{className:"half-textlarge"},"76% find it difficult to understand, find, manage and control preferences related to their personal data.")))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Analysing research to formulate insights")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Following all the research, we came back to our lab and mapped out our findings."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess14.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The problem lied in what’s happening with users’ data; taken together over time, intimate digital patterns emerge."),s.a.createElement("p",null,"People's habits, movements, relationships, preferences, beliefs, and secrets are revealed to those who analyze and profit from them, like businesses and data brokers."))),s.a.createElement(m.a,Object.assign({className:"image-scroll"},v),s.a.createElement(o.a,{fluid:e.data.tecneprocess15.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess16.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess17.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess18.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess19.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"So, what’s the right way to navigate these complexities?"),s.a.createElement("p",null,"We mapped out a high level end-to-end journey highlighting the key phases of the user’s experience. This allowed us to identify instances where the user gives their personal data in exchange for value they receive from the device/service."))),s.a.createElement("p",{className:"full-textlarge"},"We singled out points when users data is collected when they are aware of compared to when its taken in the background without their knowledge. Furthermore we defined how this data transfer happens; physical, digital or spatial touchpoints and the context of the user at the point of the data exchange."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess20.childImageSharp.fluid})),s.a.createElement("div",{className:"bluebg"},s.a.createElement("p",{className:"full-textlargebluebg"},"It’s a tricky situation: Consumers want personalized services that are relevant to their past behavior and future needs. In order to execute on this level of personalization, companies must collect large amounts of data. However, consumers only want some of their data used and only in a way that they are comfortable with.")),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",{className:"half-textlarge"},"6 key research insights"),s.a.createElement("p",null,"We created clusters of similar problems & opinions, which after cross checking with interviews and quantitative data allowed us to come up with actionable insights."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess21.childImageSharp.fluid})),s.a.createElement("p",{className:"full-textlarge"},"For each insight we translated them into opportunities by reframing them as “How Might We” questions. These questions formed the basis for idea generation workshops."),s.a.createElement(m.a,Object.assign({className:"image-scroll"},v),s.a.createElement(o.a,{fluid:e.data.tecneprocess22.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess23.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess24.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess25.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess26.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess27.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Idea generation & insight validation workshops")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"After understanding what is the thing that we are trying to solve, we organised workshops from October till December 2019 where we aimed to seek multiple directions where we could explore our solutions."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess28.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",{className:"half-textlarge"},"We carried our workshop in different cities from southern to northern Europe, with participants from  various backgrounds. This was done to ensure that we get a diverse and inclusive point of view.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We relied on co-creation practices to guide our design process as we believe that co-designing a sustainable solution through discussion and brainstorming was the best solution to achieve our goal."),s.a.createElement("p",null,"People from different parts of Europe have a varied outlooks, mindset and behaviours towards this topic."),s.a.createElement("p",null,"As facilitators we planned different formats of workshops and prepared canvases and exercises for the participants."),s.a.createElement("p",null,"We invited participants who had a variety of backgrounds; from privacy & policy experts and researchers to brand managers, product owners and consumers; everyone shared their thoughts and ideas for the smart home context."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess29.childImageSharp.fluid})))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess30.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The co-creation workshops allowed us to:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Raise awareness about how personal data is used and its value"),s.a.createElement("br",null),s.a.createElement("li",null,"Identify current user behaviours and their data sharing practices"),s.a.createElement("br",null),s.a.createElement("li",null,"Understand businesses' and experts' opinion on how they handle user’s data and its privacy & transparency"),s.a.createElement("br",null),s.a.createElement("li",null,"Validate and receive guidance around our insights & assumptions"),s.a.createElement("br",null),s.a.createElement("li",null,"Define a common vision/strategy around the IoT Privacy in the UX context"),s.a.createElement("br",null),s.a.createElement("li",null,"Get initial ideas to our problem"))))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Concept definition & prototyping the b-smart ecosystem")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",{className:"half-textlarge"},"4 idea directions from our workshops"),s.a.createElement("p",null,"After our workshops we clustered our findings into various ideas:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Raising awareness and knowledge about the topic in a simple way that is easy to digest."),s.a.createElement("br",null),s.a.createElement("li",null,"Managing & controlling data settings and exchanges in an intuitive manner."),s.a.createElement("br",null),s.a.createElement("li",null,"Increasing data transparency to improve trust between brands and users."),s.a.createElement("br",null),s.a.createElement("li",null,"Creating a personal data and value exchange channel that is fair, flexible and personalized.")))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess31.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",null,"After another round of internal ideation session, we decided to focus on the top 3 idea directions and develop them further into a holistic concept."))),s.a.createElement("p",{className:"full-textlarge"},"We went back to our user journey to understand how our concept fits across the entire user's journey; from awareness, setting up of device, usage and end of device life."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess32.childImageSharp.fluid})),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess33.childImageSharp.fluid})),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess34.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Business model explorations")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Finally we went to Valencia to explore how we could sustain our design solution with a viable business model."),s.a.createElement("p",null,"By outlining the values of our solution/concept, the target users, channels and touchpoints in the ecosystem, we defined multiple business models and its possible evolution roadmap."))),s.a.createElement(m.a,Object.assign({className:"image-scroll"},v),s.a.createElement(o.a,{fluid:e.data.tecneprocess35.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess36.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess37.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess38.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess39.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess40.childImageSharp.fluid})))),s.a.createElement("section",{className:"outcome-section"},s.a.createElement("div",{className:"outcome-text-wrapper"},s.a.createElement("span",{className:"project-step-number"},"03"),s.a.createElement("h2",null,"outcome"),s.a.createElement("div",{className:"outcome"},s.a.createElement("div",{className:"outcome-right"},s.a.createElement("p",null,"With the advent of a large number of connected objects it is of fundamental importance to give to all users a means to control their data, and help create an experience that users can trust. B-smart does this!"),s.a.createElement("p",null,"Our solution is based on 3 key strategies values:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Transparency - let me see what is happening to my data"),s.a.createElement("li",null,"Tangibility - making the invisible; visible"),s.a.createElement("li",null,"Autonomy - let me control my data")),s.a.createElement("p",null,"These strategies were implemented across the entire journey of the user where we developed a clear & positive user experience in setting the privacy controls of connected objects, by realising an easy, understandable yet complete UX."))),s.a.createElement("h3",null,"b-smart allows users to control their digital privacy, security, and wellbeing in ways that feels right to them. It helps them make more informed choices and change their habits in ways that suit them; this in-turn results in an experience that users can trust."),s.a.createElement("br",null),s.a.createElement("div",{className:"outcome"},s.a.createElement("div",{className:"outcome-right"},s.a.createElement("p",null,"In the next phase of the project, we had planned to create a MVP of the concept, which unfortunately got delayed due to the COVID-19 pandemic."))))))),s.a.createElement("section",{className:"fullspan"},s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneoutcome41.childImageSharp.fluid}))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Problems faced during the project and how they were solved")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Getting people to talk about an important, but highly complex topic was difficult."),s.a.createElement("p",null,"We approached people in different ways (short survey, contextual interview, phone conversation, in-person chats) depending on their comfort. Our strategy involved raising awareness around the topic, and being open to listening to stories about people's personal experiences."))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Facilitating workshops in different cities and with people (academics) who knew more about this topic than us was a challenging task."),s.a.createElement("p",null,"We understood our strength and weaknesses, and depending on the participants, we planned our workshops accordingly in terms of what we aimed to gain from it. We were humble and willing to learn from these experts during the workshop and in exchange we equipped these academics with design thinking tools to design user-centric solutions together."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Reflection - what I learnt during the project & what I could have done better.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"It was an eye-opening experience for me to see the different mindset and outlook that people from different regions in Europe have towards this topic."),s.a.createElement("p",null,"The intitial presentation of the concepts behind the complex topic like privacy and data transparency could have been presented in a more engaging and interesting way rather than a simple slide presentation.")))),s.a.createElement("br",null),s.a.createElement("p",{className:"full-text"},"Thank you & have a secure digital life! ",s.a.createElement("span",{role:"img"},"🔒🔑")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"full-text"},s.a.createElement("div",{className:"hp-featured__hr-line"}),s.a.createElement("h5",null,"NEXT PROJECT")),s.a.createElement("br",null))),s.a.createElement("section",{id:"two",className:"tiles inner"},s.a.createElement("div",{className:"tiles__wrapper"},s.a.createElement("a",{href:"/work/service-design-mercedes"},s.a.createElement("div",{className:"tiles__content"},s.a.createElement("div",{className:"tiles__info"},s.a.createElement("div",{className:"tiles__text"},"Bringing a complete charging experience to Mercedes Benz & Smart Electric Car owners  living in urban areas."),s.a.createElement("br",null),s.a.createElement("p",{className:"maisontags-card"},"Service Design, User Experience, Digital UX/UI, Interaction design"))),s.a.createElement("div",{className:"tiles__image"},s.a.createElement("img",{src:E.a,alt:""})))))))};var b="2813491239",w="1010276887"},pE93:function(e,a,t){e.exports=t.p+"static/bsmart-logo-d50023b4865a4860bc3e8af2cfecd40f.jpg"},s1fT:function(e,a,t){e.exports=t.p+"static/19-ff9f7a28b95a42cb4ab8bdc69c0773ac.png"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-bsmart-js-7f0f5a514ac5c34d5e6e.js.map