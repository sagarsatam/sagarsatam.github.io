(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"9eSz":function(e,a,t){"use strict";var r=t("TqRt");a.__esModule=!0,a.default=void 0;var i,s=r(t("VbXa")),l=r(t("PJYZ")),n=r(t("8OQS")),c=r(t("pVnL")),o=r(t("q1tI")),d=r(t("17x9")),m=function(e){var a=(0,c.default)({},e),t=a.resolutions,r=a.sizes,i=a.critical;return t&&(a.fixed=t,delete a.resolutions),r&&(a.fluid=r,delete a.sizes),i&&(a.loading="eager"),a},u=Object.create({}),p=function(e){var a=m(e),t=a.fluid?a.fluid.src:a.fixed.src;return u[t]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,f=h&&window.IntersectionObserver,E=new WeakMap;var v=function(e,a){var t=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var a=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),a())}}))}),{rootMargin:"200px"})),i);return t&&(t.observe(e),E.set(e,a)),function(){t.unobserve(e),E.delete(e)}},b=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+n+c+t+i+a+l+s+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=o.default.forwardRef((function(e,a){var t=e.sizes,r=e.srcSet,i=e.src,s=e.style,l=e.onLoad,d=e.onError,m=e.loading,u=(0,n.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:t,srcSet:r,src:i},u,{onLoad:l,onError:d,ref:a,loading:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));N.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=h&&p(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!g&&f&&!a.critical&&!t.seenBefore;var r=a.critical||h&&(g||!t.useIOSupport);return t.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,l.default)((0,l.default)(t))),t.handleRef=t.handleRef.bind((0,l.default)((0,l.default)(t))),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=p(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=m(e),t=a.fluid?a.fluid.src:a.fixed.src,u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=m(this.props),a=e.title,t=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,l=e.imgStyle,n=void 0===l?{}:l,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,f=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,w=e.itemProp,y=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,c.default)({opacity:S?1:0,transition:I?"opacity "+E+"ms":"none"},n),k="boolean"==typeof f?"lightgray":f,R={transitionDelay:E+"ms"},x=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&R,n,u),B={title:a,alt:this.state.isVisible?"":t,style:x,className:p};if(g){var j=g;return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),k&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&R)}),j.base64&&o.default.createElement(N,(0,c.default)({src:j.base64},B)),j.tracedSVG&&o.default.createElement(N,(0,c.default)({src:j.tracedSVG},B)),this.state.isVisible&&o.default.createElement("picture",null,j.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),o.default.createElement(N,{alt:t,title:a,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:y},j))}}))}if(h){var z=h,G=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete G.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},k&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:k,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&R)}),z.base64&&o.default.createElement(N,(0,c.default)({src:z.base64},B)),z.tracedSVG&&o.default.createElement(N,(0,c.default)({src:z.tracedSVG},B)),this.state.isVisible&&o.default.createElement("picture",null,z.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),o.default.createElement(N,{alt:t,title:a,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:y},z))}}))}return null},a}(o.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:y,sizes:S,fixed:y,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=w;a.default=I},"Uq/u":function(e,a,t){e.exports=t.p+"static/15-7270c0fbc8d7fac9b39a697aae8a1780.png"},kfb6:function(e,a,t){e.exports=t.p+"static/things-logo-c7dcd0e8465e66b20c74346cd65073ba.png"},nlp2:function(e,a,t){"use strict";t.r(a),t.d(a,"fluidM1Image",(function(){return E})),t.d(a,"pageQuery",(function(){return v}));var r=t("q1tI"),i=t.n(r),s=t("TJpk"),l=t.n(s),n=t("Bl7J"),c=t("9eSz"),o=t.n(c),d=t("OS56"),m=t.n(d),u=(t("tyWD"),t("K7k0"),t("kfb6"),t("rR6g")),p=t.n(u),g=(t("yb/d"),t("Uq/u")),h=t.n(g),f={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};a.default=function(e){var a=Object(r.useRef)(null);return i.a.createElement(n.a,null,i.a.createElement(l.a,null,i.a.createElement("title",null,"Service Design - Electric car charging service"),i.a.createElement("meta",{name:"Service Design - Mercedes",content:"Service Design"})),i.a.createElement("div",{id:"main",className:"alt"},i.a.createElement("section",{id:"work-banner"},i.a.createElement("div",null,i.a.createElement("span",{className:"image main"},i.a.createElement(o.a,{fluid:e.data.mercedescover.childImageSharp.fluid,alt:""})))),i.a.createElement("div",{className:"project-wrapper"},i.a.createElement("div",{className:"project-content"},i.a.createElement("header",null,i.a.createElement("p",{className:"maisontags"},"Research, Service Design, User Experience, Digital UX/UI, Brand Identity"),i.a.createElement("h1",null,"From uncertainty to confidence: how we simplified EV mobility through a better parking and charging experience."),i.a.createElement("h3",null,"We developed a comprehensive service for Mercedes Smart Electric car owners, allowing them to easily find, book, track, and pay for parking and charging sessions. Additionally, we empowered car park operators with digital tools to efficiently manage their parking and charging facilities."),i.a.createElement("br",null),i.a.createElement("h3",null,"By providing easy and stress-free access to electric charging infrastructure, we built trust and encouraged more people to confidently transition to EV mobility.")),i.a.createElement("br",null),i.a.createElement("section",{className:"header-post"},i.a.createElement("div",{className:"headerpost"})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("h4",null,"Context of the project"),i.a.createElement("span",{className:"credits-text"},"Mercedes' Smart division in Italy set a goal to transition to an electric-only brand starting in 2022."),i.a.createElement("br",null),i.a.createElement("span",{className:"credits-text"},"They envisioned a comprehensive charging ecosystem that would offer seamless end-to-end services for EV owners to park and charge their Mercedes-Benz and Smart Electric drive vehicles."),i.a.createElement("br",null),i.a.createElement("span",{className:"credits-text"},"Their primary business goal was to convert existing internal combustion engine customers to electric vehicles.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("h4",null,"Industry"),i.a.createElement("span",{className:"credits-text"},"Smart Mobility"),i.a.createElement("br",null),i.a.createElement("h4",null,"My role"),i.a.createElement("span",{className:"credits-text"},"🔍 The Researcher, ✍️ the Service Experience Designer, and 📱the UX/UI Designer.",i.a.createElement("br",null),i.a.createElement("br",null),"I collaborated with Users, Mercedes-Benz Leadership team, Parking Operators, Front & Back-end Developers, and Service & Product Designer."),i.a.createElement("br",null),i.a.createElement("h4",null,"Client"),i.a.createElement("div",{className:"client-image"},i.a.createElement("img",{className:"span-5",src:p.a,alt:"bsmart logo"})))),i.a.createElement("section",{className:"challenge-section"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m2challenge.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1challenge.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"First we understood EVs & Italian parking regulations, along with their constraints.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",null,"We consulted with technical teams and subject matter experts to gain insights into EVs, including their batteries, performance, and specific nuances."),i.a.createElement("p",null,"We also examined various types of parking and charging facilities, both on-street and off-street, as well as the rules, regulations, and stakeholders involved in providing these services."))),i.a.createElement("div",{className:"project-outcome"},i.a.createElement("span",{className:"project-outcome-link",onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.scrollIntoView({block:"start",behavior:"smooth"})}},"see project outcomes >>"))),i.a.createElement("section",{className:"process-section"},i.a.createElement("div",{className:"changebg"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process53.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",null,"Experiencing firsthand the process of driving and finding parking and charging in the city was crucial for understanding the current experience and its nuances."))),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process3.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"Parking is one of the most difficult and dysfunctional parts of Italian city life.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("h4",null,"We simulated various scenarios:"),i.a.createElement("p",null,"→ Finding spots near destinations",i.a.createElement("br",null),"→ Using charging spots on & off-street",i.a.createElement("br",null),"→ Plugging car into a charging station",i.a.createElement("br",null),"→ Paying by SMS, meter, or smart card",i.a.createElement("br",null)),i.a.createElement("p",null,"We also used various apps that we discovered during benchmarking study."),i.a.createElement("p",null,"Simultaneously, we interviewed both electric and non-electric car owners to understand how they plan their journeys, make decisions about where to park and charge, and identify pain points in their overall experience of using EVs in urban areas.")),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process4.childImageSharp.fluid}))),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",null,"We discovered that most car journeys into the city involve daily parking challenges"))),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"Uncertainty about spot availability, time wasted searching, and inefficient payment options.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",{className:"half-textlarge"},"Inconvenience of full car parks and confusion about pricing and facility restrictions.")))),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process55.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process5.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",null,"We returned to observe and speak with parking operators to understand their current workflow.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",null,"We examined their use of digital or offline tools for managing facilities and identified their constraints, needs, and pain points in service delivery."))),i.a.createElement("div",{className:"bluebg"},i.a.createElement("p",{className:"full-textlargebluebg"},"We discovered a major service constraint: parking operators and charging providers had different rules for reserving services.")),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"I noticed differing ideas during a team discussion, so I drew user flow diagrams & paper wireframes to align our thinking.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",null,"Parking spots could be reserved for 60 minutes, while charging stations could only be reserved for 30 minutes."),i.a.createElement("p",null,"We needed to simplify our design around this constraint so that users could easily understand it and its impacts."),i.a.createElement("p",null,"These and other complexities were considered to map out an end-to-end service journey for EV users and parking and charging operators."))),i.a.createElement("section",{className:"fullspan"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process7.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process12.childImageSharp.fluid}))),i.a.createElement("div",{className:"process"},i.a.createElement("p",null,"Mapping the future service journeys revealed the various touchpoints that needed to be orchestrated to deliver a seamless experience:"),i.a.createElement("div",{className:"process-left"},i.a.createElement("ul",null,i.a.createElement("li",null,"Human — EV car owners, parking and charging operators"),i.a.createElement("br",null),i.a.createElement("li",null,"Physical - Electric car, charging cables, RFID charging card, charging stations"))),i.a.createElement("div",{className:"process-right"},i.a.createElement("ul",null,i.a.createElement("li",null,"Digital - Mobile app, back-office management system"),i.a.createElement("br",null),i.a.createElement("li",null,"Space - Manual and automatic parking facilities, on-street charging stations")))),i.a.createElement("div",{className:"changebg"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process56.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process20.childImageSharp.fluid}))),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process58.childImageSharp.fluid})),i.a.createElement("div",{className:"process"}),i.a.createElement("div",{id:"project-images-wrapper"},i.a.createElement(m.a,Object.assign({className:"image-scroll"},f),i.a.createElement(o.a,{fluid:e.data.m1process23.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process24.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process25.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process16.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process51.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process47.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process59.childImageSharp.fluid}),i.a.createElement(o.a,{fluid:e.data.m1process60.childImageSharp.fluid}))),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process26.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"The transition between digital and offline experience was disjointed and confusing."),i.a.createElement("p",null,"We addressed this by integrating physical space elements into the mobile app."),i.a.createElement("p",null,"Aditionally, the booked charging station to blink when the user’s smartphone is nearby, making it easier to identify and park the car accordingly.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",{className:"half-textlarge"},"We also had to better design the experince when user's faced problems with their charging."),i.a.createElement("p",null,"For example, we included illustrations to guide users to the correct charging station and help them start, track, and end their sessions."),i.a.createElement("p",null,"We also provided step-by-step instructions to assist users in interacting with the physical infrastructure to start and end their charging sessions."))),i.a.createElement("section",{className:"fullspan"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process61.childImageSharp.fluid}))),i.a.createElement("p",null,"We encountered pushback from the engineering team. I walked him through the user journey based on our research and testing. After considering the user’s perspective, they realized the reason for the design decision."),i.a.createElement("section",{className:"fullspan"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process65.childImageSharp.fluid}))),i.a.createElement("div",{className:"changebg"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process62.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process63.childImageSharp.fluid})),i.a.createElement("div",{className:"process"},i.a.createElement("div",{className:"process-left"},i.a.createElement("p",{className:"half-textlarge"},"The back-office was to designed to be an operational and analytical dashboard.")),i.a.createElement("div",{className:"process-right"},i.a.createElement("p",null,"We wanted to empower parking operators to effectively manage their offerings and service delivery while making a profit."),i.a.createElement("p",null,"A hierarchy system depending on their roles, skills, level of visibility and control in the back-office system was created."),i.a.createElement("p",null,"For each stakeholder we understood their access restrictions, jobs-to-do, goals and needs"))),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1process64.childImageSharp.fluid})),i.a.createElement("div",{className:"process"}))),i.a.createElement("section",{id:"outcome-section",ref:a,className:"outcome-section"},i.a.createElement("div",{className:"outcome-text-wrapper"},i.a.createElement("section",{className:"fullspan"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1outcome56.childImageSharp.fluid}))),i.a.createElement("h3",null,"We designed two innovative mobility services, Ready to Park & Charge and Mercedes EQ Charge, for EV owners, transforming how users interact with charging infrastructure."),i.a.createElement("div",{className:"outcome"},i.a.createElement("div",{className:"outcome-left"},i.a.createElement("p",null,"Through a mobile app, users can now search and book parking and charging spots near their destinations in advance.",i.a.createElement("br",null),i.a.createElement("br",null),"Upon arrival, they are seamlessly guided to plug in and start their charging session, with real-time monitoring of their vehicle’s charge status and make payments with a single tap.")),i.a.createElement("div",{className:"outcome-right"},i.a.createElement("p",null,"We also developed a white-label web app for parking facility owners to track occupancy, monitor charging station status, and generate usage reports.",i.a.createElement("br",null),i.a.createElement("br",null),"By providing a customizable interface, parking facility owners can brand the platform according to their business requirements and improve their operational efficiency.")),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1outcome53.childImageSharp.fluid})),i.a.createElement("div",{className:"outcome"},i.a.createElement("h3",null,"hese efforts have significantly improved the accessibility and convenience of charging for Mercedes-Smart EV owners, making the process stress-free. This has not only enhanced the user experience but also reduced travel time to final destinations by 10-15 minutes."))))))),i.a.createElement("section",{className:"fullspan"},i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1outcome55.childImageSharp.fluid}))),i.a.createElement("section",{className:"fullspan"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1outcome54.childImageSharp.fluid})),i.a.createElement("div",{className:"image"},i.a.createElement(o.a,{fluid:e.data.m1outcome57.childImageSharp.fluid}))),i.a.createElement("div",{className:"project-wrapper"},i.a.createElement("div",{className:"project-content"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",{className:"full-text"},"Thank you & happy charging! ",i.a.createElement("span",{role:"img","aria-labelledby":"mercedesemoji"},"⚡🚙")),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"full-text"},i.a.createElement("div",{className:"hp-featured__hr-line"}),i.a.createElement("h5",null,"NEXT PROJECT")),i.a.createElement("br",null))),i.a.createElement("section",{id:"two",className:"tiles inner"},i.a.createElement("div",{className:"tiles__wrapper"},i.a.createElement("a",{href:"/work/service-design-tecne"},i.a.createElement("div",{className:"tiles__content"},i.a.createElement("div",{className:"tiles__info"},i.a.createElement("div",{className:"tiles__text"},"Next gen combat training with an underglove fitted with sensors & an app that gives precise feedback to improve."),i.a.createElement("br",null),i.a.createElement("p",{className:"maisontags-card"},"Research, UX Strategy, User Experience, Product Design, Digital UX/UI, Brand Identity"))),i.a.createElement("div",{className:"tiles__image"},i.a.createElement("img",{src:h.a,alt:""})))))))};var E="1941005109",v="1676762302"},rR6g:function(e,a){e.exports="data:image/png;base64,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"},"yb/d":function(e,a,t){e.exports=t.p+"static/adobe_logo-9e4972ce74f87ff2ecffbb51385a9faf.png"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-mercedes-js-4e14ef54c8ba2bca7afc.js.map