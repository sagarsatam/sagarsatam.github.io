(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"9eSz":function(e,a,t){"use strict";var r=t("TqRt");a.__esModule=!0,a.default=void 0;var l,s=r(t("VbXa")),n=r(t("PJYZ")),i=r(t("8OQS")),c=r(t("pVnL")),o=r(t("q1tI")),d=r(t("17x9")),m=function(e){var a=(0,c.default)({},e),t=a.resolutions,r=a.sizes,l=a.critical;return t&&(a.fixed=t,delete a.resolutions),r&&(a.fluid=r,delete a.sizes),l&&(a.loading="eager"),a},u=Object.create({}),p=function(e){var a=m(e),t=a.fluid?a.fluid.src:a.fixed.src;return u[t]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,g=f&&window.IntersectionObserver,E=new WeakMap;var v=function(e,a){var t=(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var a=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),E.delete(e.target),a())}}))}),{rootMargin:"200px"})),l);return t&&(t.observe(e),E.set(e,a)),function(){t.unobserve(e),E.delete(e)}},b=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+i+c+t+l+a+n+s+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=o.default.forwardRef((function(e,a){var t=e.sizes,r=e.srcSet,l=e.src,s=e.style,n=e.onLoad,d=e.onError,m=e.loading,u=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:t,srcSet:r,src:l},u,{onLoad:n,onError:d,ref:a,loading:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=f&&p(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!h&&g&&!a.critical&&!t.seenBefore;var r=a.critical||f&&(h||!t.useIOSupport);return t.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=p(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=m(e),t=a.fluid?a.fluid.src:a.fixed.src,u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=m(this.props),a=e.title,t=e.alt,r=e.className,l=e.style,s=void 0===l?{}:l,n=e.imgStyle,i=void 0===n?{}:n,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,f=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,N=e.itemProp,w=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,c.default)({opacity:S?1:0,transition:I?"opacity "+E+"ms":"none"},i),x="boolean"==typeof g?"lightgray":g,k={transitionDelay:E+"ms"},L=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&k,i,u),T={title:a,alt:this.state.isVisible?"":t,style:L,className:p};if(h){var j=h;return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),x&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&k)}),j.base64&&o.default.createElement(y,(0,c.default)({src:j.base64},T)),j.tracedSVG&&o.default.createElement(y,(0,c.default)({src:j.tracedSVG},T)),this.state.isVisible&&o.default.createElement("picture",null,j.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),o.default.createElement(y,{alt:t,title:a,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:w})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:w},j))}}))}if(f){var M=f,z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},s);return"inherit"===s.display&&delete z.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},I&&k)}),M.base64&&o.default.createElement(y,(0,c.default)({src:M.base64},T)),M.tracedSVG&&o.default.createElement(y,(0,c.default)({src:M.tracedSVG},T)),this.state.isVisible&&o.default.createElement("picture",null,M.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:M.srcSetWebp,sizes:M.sizes}),o.default.createElement(y,{alt:t,title:a,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:w})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:w},M))}}))}return null},a}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});N.propTypes={resolutions:w,sizes:S,fixed:w,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=N;a.default=I},OKhS:function(e,a,t){e.exports=t.p+"static/bintang1-c321bd6a8e187c8f26367e61265151ed.mp4"},VV3Z:function(e,a,t){e.exports=t.p+"static/bintang2-96822ba6659e6a517f6381219c7237d8.mp4"},a0mx:function(e,a){e.exports="data:image/png;base64,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"},fxDH:function(e,a,t){e.exports=t.p+"static/tecne-logo-018d2bc36dfd0a8646f41825abffe9c1.jpg"},hGpX:function(e,a,t){"use strict";t.r(a),t.d(a,"fluidTecneImage",(function(){return S})),t.d(a,"pageQuery",(function(){return I}));var r=t("q1tI"),l=t.n(r),s=t("TJpk"),n=t.n(s),i=t("Bl7J"),c=t("9eSz"),o=t.n(c),d=(t("Wbzz"),t("OS56")),m=t.n(d),u=(t("tyWD"),t("K7k0"),t("a0mx")),p=t.n(u),h=(t("fxDH"),t("hi9Z")),f=t.n(h),g=t("OKhS"),E=t.n(g),v=t("VV3Z"),b=t.n(v),y=t("rFLF"),N=t.n(y),w={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};a.default=function(e){var a=Object(r.useRef)(null);return l.a.createElement(i.a,null,l.a.createElement(n.a,null,l.a.createElement("title",null,"Service Design - Progression system"),l.a.createElement("meta",{name:"Service Design - Progression system",content:"Service Design"})),l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"work-banner"},l.a.createElement("div",null,l.a.createElement("span",{className:"image main"},l.a.createElement(o.a,{fluid:e.data.tecnecover.childImageSharp.fluid,alt:""})))),l.a.createElement("div",{className:"project-wrapper"},l.a.createElement("div",{className:"project-content"},l.a.createElement("header",null,l.a.createElement("p",{className:"maisontags"},"Research, Service Design, User Experience, Digital UX/UI, UX Strategy"),l.a.createElement("h1",null,"Progression System Design"),l.a.createElement("h3",null,"Improving the credit recovery timelines, motivation and loyalty of users by designing a multi-component ‘Progression System’ that engages users in a variety of ways.")),l.a.createElement("section",{className:"header-post"},l.a.createElement("div",{className:"headerpost"},l.a.createElement("div",{className:"headerpost-left"},l.a.createElement("p",null,"A summarised version of the project is presented here.",l.a.createElement("br",null)," For a much more in-depth information, feel free to download the detailed case study document for this project.",l.a.createElement("br",null),l.a.createElement("div",{className:"resume-download"},l.a.createElement("a",{href:N.a,target:"_blank",rel:"noopener noreferrer",className:"resume-download-link",download:!0},"📘 Download case study")))),l.a.createElement("div",{className:"headerpost-right"},l.a.createElement("div",{className:"client-image"},l.a.createElement("img",{className:"span-4",src:p.a,alt:"things logo"})),l.a.createElement("br",null),l.a.createElement("p",null,"I worked on this project while working at Jiva Ag, an agri-tech product company.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"/about-jiva"},l.a.createElement("u",null,"Click here to know more about Jiva")))))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Context of the project"),l.a.createElement("p",null,"We had to design a physical-digital product for athletes training for combat sports of MMA and Kickboxing."),l.a.createElement("p",null,"Our aim was to develop a product for semi-professionals who regularly train in a gym in preparation for a match.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("h4",null,"Project overview"),l.a.createElement("span",{className:"credits-text"},l.a.createElement("strong",null,"PROJECT TYPE:")," Designing a physical-digital product that assists athletes who are training for combat sports."),l.a.createElement("br",null),l.a.createElement("span",{className:"credits-text"},l.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),l.a.createElement("br",null),l.a.createElement("span",{className:"credits-text"},l.a.createElement("strong",null,"MY ROLE:")," Benchmarking competitors, planning & preparing for contextual interviews, mapping current & future user journey, user flows of the mobile app, wireframing of mobile app & website, Visual UI design, prototyping mobile app on Adobe XD."),l.a.createElement("div",{className:"challenge-client"},l.a.createElement("br",null)))),l.a.createElement("section",{className:"challenge-section"},l.a.createElement("span",{className:"project-step-number"},"01"),l.a.createElement("h2",null,"the challenge"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("p",{className:"half-textlarge"},"We had users (MCs) in our system that are performing well and others not so much."),l.a.createElement("p",null,"Poor performing MCs in Jiva do not contribute enough to the volume or quality that is required for profitability."),l.a.createElement("p",null,"Poor performing MCs won't be able to extend Jiva's value to our farmers effectively.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"There also wasn't an effective way to measure holistically how a MC was performing."),l.a.createElement("p",null,"We were unable to effectively & optimally manage our internal processes & operations. Wasted effort and resources in activating MC."),l.a.createElement("p",null,"Some MCs may have the potential, but since they are not supported it causes them to lose interest in Jiva and be inactive or churn out.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecnechallenge1.childImageSharp.fluid}))),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("p",{className:"half-textlarge"},"The idea was to design an Progression System that would..."),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecnechallenge2.childImageSharp.fluid})))),l.a.createElement("div",{className:"project-outcome"},l.a.createElement("span",{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.scrollIntoView({block:"start",behavior:"smooth"})},className:"project-outcome-link"},"see project outcomes >>"))),l.a.createElement("section",{className:"process-section"},l.a.createElement("span",{className:"project-step-number"},"02"),l.a.createElement("h2",null,"the approach"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"process-image"},l.a.createElement(o.a,{fluid:e.data.tecne_process.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Dealing with uncertainty; riskiest assumptions we were making which needed to be tested. ")),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess3.childImageSharp.fluid}))),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Next, we came up with various ideas for the progression system experience.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"These were made into prototypes of different fidelity; in order to learn about their desirability, feasibility and viability; whilst minimising the identified risks."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess4.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess5.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess6.childImageSharp.fluid}))),l.a.createElement("p",{className:"full-textlarge"},"prototype and research learnings were synthesised to come up with guiding principles & UX strategy for design"),l.a.createElement(m.a,Object.assign({className:"image-scroll"},w),l.a.createElement(o.a,{fluid:e.data.tecneprocess7.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess8.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess9.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"Based on the research sysnthesis, user (MC) archetypes were defined"),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess10.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"How progression should feel to the MCs - approach"))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess11.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Strategic considerations for the progression system design"))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess12.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Inspiration for ideation")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Played games for inspiration on slow, step-by-step onboarding to the rules and nuances of the progression system."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess13.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"We ran a remote ideation workshop with different team in the org."),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess14.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"System design & rules")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"With leadership team we debated pros and cons of the different system designs based on desirability for user, viability for business and feasibility fof execution."))),l.a.createElement(m.a,Object.assign({className:"image-scroll"},w),l.a.createElement(o.a,{fluid:e.data.tecneprocess15.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess16.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess17.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Designing the reward system")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Growth means different things for different MC's; financial, operational, social, personal."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess18.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"To ensure MCs are engaged continuously and stay committed we need to do more than 'Tiers' — we designed an 'Engagement Framework'."),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess19.childImageSharp.fluid})),l.a.createElement(m.a,Object.assign({className:"image-scroll"},w),l.a.createElement(o.a,{fluid:e.data.tecneprocess191.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess192.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess193.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess194.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess195.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess196.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess197.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"End to end experience")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"End-to-end Service value proposition and experience for the progression system."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess20.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess21.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Testing")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"We decided to run a pilot in Soppeng regency in Indonesia on WhatsApp."),l.a.createElement("p",null,"We kept the MCs updated on a weekly basis. We sent them their points, their penalties, and their current star rating."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess22.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess23.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"We made quick wireframes of the progression system and did a usability testing with users."),l.a.createElement("p",null,"The goal of the digital touchpoint was to allow users to keep track of their current level, understand when and how they have gained & lost points, and gain awareness of the latest schemes to earn more points."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess24.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess27.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("p",{className:"full-textlarge"},"The development and implementation of the Progression System was planned out together with product managers and operations teams"),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess25.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Metrics & KPIs to track - feedback loop post release of the progression system on the app.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Operational metrics: KPI — Progression system results in higher volume and better quality/control of transactions"),l.a.createElement("ol",null,l.a.createElement("li",null,"Improve % of loans recovery within the defined time frame of 150 days."),l.a.createElement("br",null),l.a.createElement("li",null,"Reduce the number of overdue days of loan."),l.a.createElement("br",null),l.a.createElement("li",null,"Improve % of MC cash advance repayment within the defined time frame of 7 days."),l.a.createElement("br",null),l.a.createElement("li",null,"Cash advance overdue amount (past 7 days)."),l.a.createElement("br",null),l.a.createElement("li",null,"Improve % of Input orders delivered to farmers fully within committed SLA.")))))),l.a.createElement("section",{ref:a,className:"outcome-section"},l.a.createElement("div",{className:"outcome-text-wrapper"},l.a.createElement("span",{className:"project-step-number"},"03"),l.a.createElement("h2",null,"the outcome"),l.a.createElement("h3",null,"We have designed a perfect combo to help fighters and trainers really understand how they are training so that they can make actual gains in combat sports training."),l.a.createElement("div",{className:"outcome"},l.a.createElement("div",{className:"outcome-left"},l.a.createElement("p",null,"The Tecne Sensor Wraps MK II is a state of the art underglove laced with sensors with exceptionally comfy and snug fit. They collect real-time data on the fighter’s training routine. Built-in gesture capability make the gloves functional & fit naturally to training routines.")),l.a.createElement("div",{className:"outcome-right"},l.a.createElement("p",null,"These are accompanied with the Tecne mobile app; where the data collected from the gloves are visualised. We track movements over a variety of data parameters and characteristics to give a complete assessment of the fighter's training sessions."))),l.a.createElement("h3",null,"Overall, we have enriched the training sessions of combat sports by giving fighters and trainers access to data & insights, thus equipping them to take immediate actions based on real-accurate data which they wouldn't have known by simply observing."))),l.a.createElement("section",{className:"process-section"},l.a.createElement("div",{className:"video"},l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:E.a,type:"video/mp4"}))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneoutcome45.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneoutcome46.childImageSharp.fluid})),l.a.createElement("div",{className:"video"},l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:b.a,type:"video/mp4"})))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"project-wrapper"},l.a.createElement("div",{className:"project-content"},l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Problems faced during the project and how they were solved")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"The challenge was to identify ways in which our product assists the coaches to do their job better and not to replace their role."),l.a.createElement("p",null,"After collaborating with the coaches we found out our USP which was to equip them with factual data which they could not know during their training sessions; such as data about impact strength and area of impact of each hit."))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Another challenge was to ensure that our product did not interfere or distract the current training routines and sessions."),l.a.createElement("p",null,"The insights from our research allowed us to design various micro & macro interactions that made sure our product complimented the workflow of coaches and trainers. For e.g. Highlight-cards gave quick data insights."))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Coaches during training need to see live feed of data of their trainers and also see data of the elapsed time. The use of bluetooth (to connect and exchange data/information between the gloves and mobile app) meant putting considerable strain on the database, resulting in slow loading time."),l.a.createElement("p",null,"Our solution was to take snapshots (pictures) of the data during training and store that data locally. So  if the user was to scroll back in the timeline, either during or at the end of the training session, instead of calling the data from the server we simply showed the snapshots thus eliminating any loading time."))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Reflection - what I learnt during the project & what I could have done better.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Getting people to talk about an important, but highly complex topic was difficult."),l.a.createElement("p",null,"We approached people in different ways (short survey, contextual interview, phone conversation, in-person chats) depending on their comfort. Our strategy involved raising awareness around the topic, and being open to listening to stories about people's personal experiences.")))),l.a.createElement("br",null),l.a.createElement("p",{className:"full-text"},"Thank you & keep earning points! ",l.a.createElement("span",{role:"img","aria-labelledby":"tecneemoji"},"⭐🎁")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"full-text"},l.a.createElement("div",{className:"hp-featured__hr-line"}),l.a.createElement("h5",null,"NEXT PROJECT")),l.a.createElement("br",null))),l.a.createElement("section",{id:"two",className:"tiles inner"},l.a.createElement("div",{className:"tiles__wrapper"},l.a.createElement("a",{href:"/work/service-design-mercedes"},l.a.createElement("div",{className:"tiles__content"},l.a.createElement("div",{className:"tiles__info"},l.a.createElement("div",{className:"tiles__text"},"Improving the accessibility and usability of the electric-car charging infrastructure for Mercedes Benz & Smart Electric Car owners."),l.a.createElement("br",null),l.a.createElement("p",{className:"maisontags-card"},"Research, Service Design, User Experience, Digital UX/UI, Interaction design"))),l.a.createElement("div",{className:"tiles__image"},l.a.createElement("img",{src:f.a,alt:""})))))))};var S="2813491239",I="2109155039"},hi9Z:function(e,a,t){e.exports=t.p+"static/3-7a4400fa41156c6d216a84598fa36aa5.png"},rFLF:function(e,a,t){e.exports=t.p+"static/progression-casestudy-96b275c0046aff371aafc71c1e84f28a.pdf"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-progression-js-9fd4c24b1324780ac6b4.js.map