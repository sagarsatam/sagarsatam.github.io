(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"9eSz":function(e,a,t){"use strict";var r=t("TqRt");a.__esModule=!0,a.default=void 0;var l,s=r(t("VbXa")),n=r(t("PJYZ")),i=r(t("8OQS")),c=r(t("pVnL")),o=r(t("q1tI")),d=r(t("17x9")),m=function(e){var a=(0,c.default)({},e),t=a.resolutions,r=a.sizes,l=a.critical;return t&&(a.fixed=t,delete a.resolutions),r&&(a.fluid=r,delete a.sizes),l&&(a.loading="eager"),a},u=Object.create({}),p=function(e){var a=m(e),t=a.fluid?a.fluid.src:a.fixed.src;return u[t]||!1},f="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,E=new WeakMap;var v=function(e,a){var t=(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var a=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),E.delete(e.target),a())}}))}),{rootMargin:"200px"})),l);return t&&(t.observe(e),E.set(e,a)),function(){t.unobserve(e),E.delete(e)}},b=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+i+c+t+l+a+n+s+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=o.default.forwardRef((function(e,a){var t=e.sizes,r=e.srcSet,l=e.src,s=e.style,n=e.onLoad,d=e.onError,m=e.loading,u=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:t,srcSet:r,src:l},u,{onLoad:n,onError:d,ref:a,loading:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=h&&p(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!f&&g&&!a.critical&&!t.seenBefore;var r=a.critical||h&&(f||!t.useIOSupport);return t.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,s.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=p(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=m(e),t=a.fluid?a.fluid.src:a.fixed.src,u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=m(this.props),a=e.title,t=e.alt,r=e.className,l=e.style,s=void 0===l?{}:l,n=e.imgStyle,i=void 0===n?{}:n,d=e.placeholderStyle,u=void 0===d?{}:d,p=e.placeholderClassName,f=e.fluid,h=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,N=e.itemProp,S=e.loading,w=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,A=(0,c.default)({opacity:w?1:0,transition:I?"opacity "+E+"ms":"none"},i),L="boolean"==typeof g?"lightgray":g,x={transitionDelay:E+"ms"},M=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&x,i,u),C={title:a,alt:this.state.isVisible?"":t,style:M,className:p};if(f){var z=f;return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&x)}),z.base64&&o.default.createElement(y,(0,c.default)({src:z.base64},C)),z.tracedSVG&&o.default.createElement(y,(0,c.default)({src:z.tracedSVG},C)),this.state.isVisible&&o.default.createElement("picture",null,z.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),o.default.createElement(y,{alt:t,title:a,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:S},z))}}))}if(h){var T=h,j=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},s);return"inherit"===s.display&&delete j.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},L&&o.default.createElement(v,{title:a,style:(0,c.default)({backgroundColor:L,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&x)}),T.base64&&o.default.createElement(y,(0,c.default)({src:T.base64},C)),T.tracedSVG&&o.default.createElement(y,(0,c.default)({src:T.tracedSVG},C)),this.state.isVisible&&o.default.createElement("picture",null,T.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),o.default.createElement(y,{alt:t,title:a,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:A,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:S})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:t,title:a,loading:S},T))}}))}return null},a}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});N.propTypes={resolutions:S,sizes:w,fixed:S,fluid:w,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=N;a.default=I},OKhS:function(e,a,t){e.exports=t.p+"static/bintang1-ef390abd5fc85636d5c7dca28bad5c73.mp4"},VV3Z:function(e,a,t){e.exports=t.p+"static/bintang2-96822ba6659e6a517f6381219c7237d8.mp4"},a0mx:function(e,a){e.exports="data:image/png;base64,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"},fxDH:function(e,a,t){e.exports=t.p+"static/tecne-logo-018d2bc36dfd0a8646f41825abffe9c1.jpg"},hGpX:function(e,a,t){"use strict";t.r(a),t.d(a,"fluidTecneImage",(function(){return N})),t.d(a,"pageQuery",(function(){return S}));var r=t("q1tI"),l=t.n(r),s=t("TJpk"),n=t.n(s),i=t("Bl7J"),c=t("9eSz"),o=t.n(c),d=(t("Wbzz"),t("OS56")),m=t.n(d),u=(t("tyWD"),t("K7k0"),t("a0mx")),p=t.n(u),f=(t("fxDH"),t("hi9Z")),h=t.n(f),g=t("OKhS"),E=t.n(g),v=t("VV3Z"),b=t.n(v),y=(t("rFLF"),{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1});a.default=function(e){var a=Object(r.useRef)(null);return l.a.createElement(i.a,null,l.a.createElement(n.a,null,l.a.createElement("title",null,"Service Design - Progression system"),l.a.createElement("meta",{name:"Service Design - Progression system",content:"Service Design"})),l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"work-banner"},l.a.createElement("div",null,l.a.createElement("span",{className:"image main"},l.a.createElement(o.a,{fluid:e.data.tecnecover.childImageSharp.fluid,alt:""})))),l.a.createElement("div",{className:"project-wrapper"},l.a.createElement("div",{className:"project-content"},l.a.createElement("header",null,l.a.createElement("p",{className:"maisontags"},"Research, UX Strategy, User Experience, Digital UX/UI"),l.a.createElement("h1",null,"A multi-component ‘Progression System’ that engages users in a variety of ways"),l.a.createElement("h3",null,"We created a Progression System that encourages user engagement and enables Jiva to automate systems and processes based on user performance. This system helps reward top users and identify those underperforming for additional support or removal.",l.a.createElement("br",null),l.a.createElement("br",null),"An improvement in SLA compliance and credit recovery timelines have been observed post its implementation.")),l.a.createElement("section",{className:"header-post"},l.a.createElement("div",{className:"headerpost"},l.a.createElement("div",{className:"headerpost-right"},l.a.createElement("div",{className:"client-image"},l.a.createElement("img",{className:"span-4",src:p.a,alt:"things logo"})),l.a.createElement("br",null),l.a.createElement("p",null,"I worked on this project while working at Jiva Ag, an AgriTtech product company.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"/about-jiva"},l.a.createElement("u",null,"know more about Jiva")))))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Context of the project"),l.a.createElement("p",null,"We had to design a physical-digital product for athletes training for combat sports of MMA and Kickboxing."),l.a.createElement("p",null,"Our aim was to develop a product for semi-professionals who regularly train in a gym in preparation for a match.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("h4",null,"Industry"),l.a.createElement("span",{className:"credits-text"},"AgriTech"),l.a.createElement("br",null),l.a.createElement("h4",null,"My role"),l.a.createElement("span",{className:"credits-text"},"🔍 The Researcher, 🎯 the UX Strategist, ✍️ the Experience Designer, 🎬 the Orchestrator and 📱the UX/UI Designer.",l.a.createElement("br",null),l.a.createElement("br",null),"I collaborated with Users, Leadership team, Field-ops teams, Operations leads, Business Strategist, Front & Back-end Developers, Product Managers, Researchers and Data Science team."),l.a.createElement("br",null))),l.a.createElement("section",{className:"challenge-section"},l.a.createElement("span",{className:"project-step-number"},"01"),l.a.createElement("h2",null,"the challenge"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("p",{className:"half-textlarge"},"We had users (MCs) in our system that were performing well and others not so much.",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",null,"Poor performing MCs do not contribute enough by transacting or complying to credit SLAs, which is required to meet business outcomes."),l.a.createElement("p",null,"Poor performing MCs aren't able to extend Jiva's value to our farmers effectively.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"There wasn't an effective way to holistically measure how MCs were performing."),l.a.createElement("p",null,"Some MCs who had the potential, but since they were not supported, it made them lose interest and churn out."),l.a.createElement("p",null,"We were unable to optimally manage our internal costs and efforts on the right MCs.")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecnechallenge1.childImageSharp.fluid}))),l.a.createElement("div",{className:"project-outcome"},l.a.createElement("span",{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.scrollIntoView({block:"start",behavior:"smooth"})},className:"project-outcome-link"},"see project outcomes >>"))),l.a.createElement("section",{className:"process-section"},l.a.createElement("span",{className:"project-step-number"},"02"),l.a.createElement("h2",null,"the approach"),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Dealing with uncertainty; riskiest assumptions we were making which needed to be tested. ")),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess3.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Next, we came up with various ideas for the progression system experience.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"These were made into prototypes of different fidelity; in order to learn about their desirability, feasibility and viability; whilst minimising the identified risks."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess4.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess5.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess6.childImageSharp.fluid}))),l.a.createElement("p",{className:"full-textlarge"},"prototype and research learnings were synthesised to come up with guiding principles & UX strategy for design"),l.a.createElement(m.a,Object.assign({className:"image-scroll"},y),l.a.createElement(o.a,{fluid:e.data.tecneprocess7.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess8.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess9.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"Based on the research sysnthesis, user (MC) archetypes were defined"),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess10.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"How progression should feel to the MCs - approach"))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess11.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Strategic considerations for the progression system design"))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess12.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Inspiration for ideation")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Played games for inspiration on slow, step-by-step onboarding to the rules and nuances of the progression system."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess13.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"We ran a remote ideation workshop with different team in the org."),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess14.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"System design & rules")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"With leadership team we debated pros and cons of the different system designs based on desirability for user, viability for business and feasibility fof execution."))),l.a.createElement(m.a,Object.assign({className:"image-scroll"},y),l.a.createElement(o.a,{fluid:e.data.tecneprocess15.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess16.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess17.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Designing the reward system")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Growth means different things for different MC's; financial, operational, social, personal."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess18.childImageSharp.fluid})),l.a.createElement("p",{className:"full-textlarge"},"To ensure MCs are engaged continuously and stay committed we need to do more than 'Tiers' — we designed an 'Engagement Framework'."),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess19.childImageSharp.fluid})),l.a.createElement(m.a,Object.assign({className:"image-scroll"},y),l.a.createElement(o.a,{fluid:e.data.tecneprocess191.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess192.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess193.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess194.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess195.childImageSharp.fluid}),l.a.createElement(o.a,{fluid:e.data.tecneprocess196.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess197.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"End to end experience")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"End-to-end Service value proposition and experience for the progression system."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess20.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess21.childImageSharp.fluid}))),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Testing")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"We decided to run a pilot in Soppeng regency in Indonesia on WhatsApp."),l.a.createElement("p",null,"We kept the MCs updated on a weekly basis. We sent them their points, their penalties, and their current star rating."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess22.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess23.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-right"},l.a.createElement("p",{className:"half-textlarge"},"We made quick wireframes of the progression system and did a usability testing with users."),l.a.createElement("p",null,"The goal of the digital touchpoint was to allow users to keep track of their current level, understand when and how they have gained & lost points, and gain awareness of the latest schemes to earn more points."))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess24.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess27.childImageSharp.fluid})),l.a.createElement("div",{className:"changebg"},l.a.createElement("p",{className:"full-textlarge"},"The development and implementation of the Progression System was planned out together with product managers and operations teams"),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneprocess25.childImageSharp.fluid})),l.a.createElement("div",{className:"process"},l.a.createElement("div",{className:"process-left"},l.a.createElement("h4",null,"Metrics & KPIs to track - feedback loop post release of the progression system on the app.")),l.a.createElement("div",{className:"process-right"},l.a.createElement("p",null,"Operational metrics: KPI — Progression system results in higher volume and better quality/control of transactions"),l.a.createElement("ol",null,l.a.createElement("li",null,"Improve % of loans recovery within the defined time frame of 150 days."),l.a.createElement("br",null),l.a.createElement("li",null,"Reduce the number of overdue days of loan."),l.a.createElement("br",null),l.a.createElement("li",null,"Improve % of MC cash advance repayment within the defined time frame of 7 days."),l.a.createElement("br",null),l.a.createElement("li",null,"Cash advance overdue amount (past 7 days)."),l.a.createElement("br",null),l.a.createElement("li",null,"Improve % of Input orders delivered to farmers fully within committed SLA.")))))),l.a.createElement("section",{ref:a,className:"outcome-section"},l.a.createElement("div",{className:"outcome-text-wrapper"},l.a.createElement("span",{className:"project-step-number"},"03"),l.a.createElement("h2",null,"the outcome"),l.a.createElement("div",{className:"outcome"},l.a.createElement("div",{className:"outcome-left"},l.a.createElement("h3",null,"The Progression System was designed in a multi-faceted way that enabled Jiva to tailor engagement experiences at an individual MCs level."),l.a.createElement("p",null,"On top of the five Tiers; engagement elemets such as Challenges, Achievements, Side quests and Milestones gave flexibility to tailor engagement experiences at")),l.a.createElement("div",{className:"outcome-right"},l.a.createElement("h3",null,"Jiva was able to automate its internal systems to optimally reward, support or penalise MCs depending on performance."),l.a.createElement("p",null,"It helped us reward high-performing MCs to keep them engaged while identifying low performers for additional support or removal, saving costs."))),l.a.createElement("div",{className:"video"},l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:b.a,type:"video/mp4"}))),l.a.createElement("h3",null,"We successfully motivated MCs to transact and comply to our SLAs, this was reflected by an increase in the number of input orders delivered within the SLA and a reducting in the time taken for MCs to deliver inputs to farmers.",l.a.createElement("br",null),l.a.createElement("br",null),"Additionally, we shortened the credit recovery time from MCs, allowing faster cash rotation and positively impacting our bottom line."))),l.a.createElement("section",{className:"process-section"},l.a.createElement("div",{className:"video"},l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:E.a,type:"video/mp4"}))),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneoutcome45.childImageSharp.fluid})),l.a.createElement("div",{className:"image"},l.a.createElement(o.a,{fluid:e.data.tecneoutcome46.childImageSharp.fluid}))))),l.a.createElement("div",{className:"project-wrapper"},l.a.createElement("div",{className:"project-content"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"full-text"},"Thank you & keep earning points! ",l.a.createElement("span",{role:"img","aria-labelledby":"tecneemoji"},"⭐🎁")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"full-text"},l.a.createElement("div",{className:"hp-featured__hr-line"}),l.a.createElement("h5",null,"NEXT PROJECT")),l.a.createElement("br",null))),l.a.createElement("section",{id:"two",className:"tiles inner"},l.a.createElement("div",{className:"tiles__wrapper"},l.a.createElement("a",{href:"/work/service-design-mercedes"},l.a.createElement("div",{className:"tiles__content"},l.a.createElement("div",{className:"tiles__info"},l.a.createElement("div",{className:"tiles__text"},"Improving the accessibility and usability of the electric-car charging infrastructure for Mercedes Benz & Smart Electric Car owners."),l.a.createElement("br",null),l.a.createElement("p",{className:"maisontags-card"},"Research, Service Design, User Experience, Digital UX/UI, Interaction design"))),l.a.createElement("div",{className:"tiles__image"},l.a.createElement("img",{src:h.a,alt:""})))))))};var N="2813491239",S="2109155039"},hi9Z:function(e,a,t){e.exports=t.p+"static/3-7a4400fa41156c6d216a84598fa36aa5.png"},rFLF:function(e,a,t){e.exports=t.p+"static/progression-casestudy-96b275c0046aff371aafc71c1e84f28a.pdf"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-progression-js-efe08592b07f5f4060a7.js.map