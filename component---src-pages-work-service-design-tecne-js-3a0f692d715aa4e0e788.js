(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var s,n=r(a("VbXa")),l=r(a("PJYZ")),i=r(a("8OQS")),c=r(a("pVnL")),o=r(a("q1tI")),d=r(a("17x9")),m=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,s=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),s&&(t.loading="eager"),t},h=Object.create({}),u=function(e){var t=m(e),a=t.fluid?t.fluid.src:t.fixed.src;return h[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,g=f&&window.IntersectionObserver,E=new WeakMap;var v=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),s);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+i+c+a+s+t+l+n+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,s=e.src,n=e.style,l=e.onLoad,d=e.onError,m=e.loading,h=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:s},h,{onLoad:l,onError:d,ref:t,loading:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));w.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=f&&u(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&g&&!t.critical&&!a.seenBefore;var r=t.critical||f&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=u(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=t.fluid?t.fluid.src:t.fixed.src,h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,r=e.className,s=e.style,n=void 0===s?{}:s,l=e.imgStyle,i=void 0===l?{}:l,d=e.placeholderStyle,h=void 0===d?{}:d,u=e.placeholderClassName,p=e.fluid,f=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,N=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,c.default)({opacity:S?1:0,transition:I?"opacity "+E+"ms":"none"},i),T="boolean"==typeof g?"lightgray":g,x={transitionDelay:E+"ms"},j=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&x,i,h),L={title:t,alt:this.state.isVisible?"":a,style:j,className:u};if(p){var W=p;return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),T&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&x)}),W.base64&&o.default.createElement(w,(0,c.default)({src:W.base64},L)),W.tracedSVG&&o.default.createElement(w,(0,c.default)({src:W.tracedSVG},L)),this.state.isVisible&&o.default.createElement("picture",null,W.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:W.srcSetWebp,sizes:W.sizes}),o.default.createElement(w,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:N},W))}}))}if(f){var O=f,R=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete R.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},T&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:T,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},I&&x)}),O.base64&&o.default.createElement(w,(0,c.default)({src:O.base64},L)),O.tracedSVG&&o.default.createElement(w,(0,c.default)({src:O.tracedSVG},L)),this.state.isVisible&&o.default.createElement("picture",null,O.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),o.default.createElement(w,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:N})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:N},O))}}))}return null},t}(o.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:N,sizes:S,fixed:N,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var I=y;t.default=I},DnsP:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidTecneImage",(function(){return y})),a.d(t,"pageQuery",(function(){return N}));var r=a("q1tI"),s=a.n(r),n=a("TJpk"),l=a.n(n),i=a("Bl7J"),c=a("9eSz"),o=a.n(c),d=(a("Wbzz"),a("OS56")),m=a.n(d),h=(a("tyWD"),a("K7k0"),a("fxeT")),u=a.n(h),p=a("fxDH"),f=a.n(p),g=a("yb/d"),E=a.n(g),v=a("PJQ5"),b=a.n(v),w={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};t.default=function(e){return s.a.createElement(i.a,null,s.a.createElement(l.a,null,s.a.createElement("title",null,"Service Design - Tecne"),s.a.createElement("meta",{name:"Service Design - Tecne",content:"Service Design"})),s.a.createElement("div",{id:"main",className:"alt"},s.a.createElement("section",{id:"work-banner"},s.a.createElement("div",null,s.a.createElement("span",{className:"image main"},s.a.createElement(o.a,{fluid:e.data.tecnecover.childImageSharp.fluid,alt:""})))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("header",null,s.a.createElement("p",{className:"maisontags"},"Research, UX Strategy, Interaction Design, Digital UX/UI, Product Design, Brand identity"),s.a.createElement("h1",null,"tecne."),s.a.createElement("h3",null,"A physical-digital IoT product to unlock a new chapter in training for combat sports."),s.a.createElement("br",null),s.a.createElement("h3",null,"An underglove, to captures real-time data of athletes during their training, accompanied by a mobile app that provides athletes with actionable insights so that they can make actual gains from their training routines and improve quickly as they prepare for their upcoming fights.")),s.a.createElement("section",{className:"header-post"},s.a.createElement("div",{className:"headerpost"},s.a.createElement("div",{className:"headerpost-left"},s.a.createElement("p",null,"*This project was carried out while working at the design agency, THINGS, in Milan."),s.a.createElement("p",null,s.a.createElement("a",{href:"/say-hello"},s.a.createElement("u",null,"Get in touch"))," with me for more details related to this project; such as my role, the problems i faced, the processes i used and how i addressed the challenges.")),s.a.createElement("div",{className:"headerpost-right"},s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-4",src:u.a,alt:"things logo"})),s.a.createElement("br",null),s.a.createElement("p",null,"Things.is a design and innovation agency for the Internet of Things. We create products and services with their own experiential ecosystems outlined by multi-channel touch points. We envision products and services in the IoT era through a human-centred approach. www.things.is")))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Context of the project"),s.a.createElement("p",null,"We had to design a physical-digital product for athletes training for combat sports of MMA and Kickboxing."),s.a.createElement("p",null,"Our aim was to develop a product for semi-professionals who regularly train in a gym in preparation for a match.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("h4",null,"Project overview"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"PROJECT TYPE:")," Designing a physical-digital product that assists athletes who are training for combat sports."),s.a.createElement("br",null),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),s.a.createElement("br",null),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"MY ROLE:")," Benchmarking competitors, planning & preparing for contextual interviews, mapping current & future user journey, user flows of the mobile app, wireframing of mobile app & website, Visual UI design, prototyping mobile app on Adobe XD."),s.a.createElement("div",{className:"challenge-client"},s.a.createElement("br",null),s.a.createElement("h5",null,"CLIENT"),s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-3",src:f.a,alt:"bsmart logo"}))))),s.a.createElement("section",{className:"challenge-section"},s.a.createElement("span",{className:"project-step-number"},"01"),s.a.createElement("h2",null,"challenge"),s.a.createElement("div",{className:"challenge"},s.a.createElement("div",{className:"challenge-desc"},s.a.createElement("p",null,"Using IoT technology as an enabler, we aimed to design a product that would give these fighters access to meaningful & actionable insights on how they are training, which otherwise would be inaccessible to them and their trainers."),s.a.createElement("p",null,"To do this successfully, it was crucial that we designed an experience that would blend in with their training routine with ease."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecnechallenge.childImageSharp.fluid}))),s.a.createElement("section",{className:"process-section"},s.a.createElement("span",{className:"project-step-number"},"02"),s.a.createElement("h2",null,"process"),s.a.createElement("div",{className:"process-image"},s.a.createElement(o.a,{fluid:e.data.tecne_process.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Understanding the sport ")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Our clients were 2 retired professional MMA & Kickboxing fighters from Italy, who gave us a crash course on the sport."),s.a.createElement("p",{className:"half-textlarge"},"We were invited to watch a Bellator Main Event that involved multiple professional fights of MMA and Kickboxing."))),s.a.createElement(m.a,Object.assign({className:"image-scroll"},w),s.a.createElement(o.a,{fluid:e.data.tecneprocess2.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess3.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess4.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess5.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess6.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess7.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess8.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We took note of the different elements of the sport; things such as peculiar entrances of fighters, types of announcement made by judges, preparation before combat & from various ring sounds to feeling the main event atmosphere; and of course we enjoyed the matches :)")))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Competitor research")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We came back to our design lab and started understanding the market by looking at our direct & indirect competitors; which were Piq by Everlast, Hykso, Corner and StrikeTec."))),s.a.createElement("p",{className:"full-textlarge"},"We bought some of our competitor products and tried them out first hand; everything from the unboxing of the product, the setting up of the sensors/wearable gloves to tracking of data on the mobile app."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess9.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We also looked took inspiration from other sports that used similar IoT driven technology to provide performance data to the athletes. This gave us great insights into what worked well & what didn't."))),s.a.createElement("p",{className:"full-textlarge"},"We learned that the initial product set-up and the subsequent times of connecting the product with the mobile app were critical areas of the experience."),s.a.createElement(m.a,Object.assign({className:"image-scroll"},w),s.a.createElement(o.a,{fluid:e.data.tecneprocess11.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess10.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess12.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Field research and interviews")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",{className:"half-textlarge"},"Consolidation of the desk research was made by visiting a gym to observe and interview the fighters & trainers."),s.a.createElement("p",null,"We saw their training session; their preparation, warm up, equipment they wear and the various technical training exercises they do."),s.a.createElement("p",null,"Their behaviour in-between activity breaks and the dynamics the trainers had with the fighters, such as the use of stopwatch with audio to keep time and the type of instructions & motivation they gave."),s.a.createElement("p",null,"Finally, the context of the gym such as the type of space and surrounding noise was noted."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess13.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",null,"After this, we interviewed both the fighters and trainers."))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",null,"From the trainers we wanted to know:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Various elements of the training sessions"),s.a.createElement("li",null,"Data that is hard to track with their eye"),s.a.createElement("li",null,"How they track fighter's current level"),s.a.createElement("li",null,"How they track improvement & goals"),s.a.createElement("li",null,"Type of feedback they give the fighters ",s.a.createElement("br",null),"and others..."))),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"From the fighters we wanted to know:"),s.a.createElement("ol",null,s.a.createElement("li",null,"Dynamics between them & their trainer"),s.a.createElement("li",null,"Types of gloves & under-glove they wear"),s.a.createElement("li",null,"Usage of any mobile app for fitness"),s.a.createElement("li",null,"Types of training data useful to track"),s.a.createElement("li",null,"What motivations & training goals they set ",s.a.createElement("br",null),"and others...")))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess18.childImageSharp.fluid})),s.a.createElement("p",{className:"full-textlarge"},"Key learnings: ",s.a.createElement("br",null),"Beginners have to focus on developing their technique & know if they are doing the right moves.",s.a.createElement("br",null),s.a.createElement("br",null),"For semi-pro/pro, endurance is more important & how long they can keep their best performance.",s.a.createElement("br",null),s.a.createElement("br",null),"Visualising data insights quickly and easily - differentiate data shown in real-time (during the session) with that shown after the session.")),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Research analysis & Strategy")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Information from the research activities was organised and analysed to identify insights. We did this by mapping the current journey for the fighters and trainers."))),s.a.createElement("p",{className:"full-textlarge"},"This allowed us to develop insights about behaviours, problem areas & possible opportunity gaps where our product could provide value to fighters & trainers and meet their needs."),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess19.childImageSharp.fluid})),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",{className:"half-textlarge"},"We outlined a UX Strategy to align our priorities and guide decision making."),s.a.createElement("p",null,"This entailed creating a shared vision of the product, outlining anticipated gains from UX design, identifying metrics to measure success and finally ensuring that the experience offered by the product achieved the stated business goals. Few elements of our UX Strategy are outlined in the picture below."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess20.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"User experience design")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We designed the whole experience and ecosystem surrounding the Tecne product."))),s.a.createElement("p",{className:"full-textlarge"},"We mapped the user flow for various use cases; from initial awareness, unboxing of packaging, set-up of gloves, onboarding, product usage and even user support."),s.a.createElement(m.a,Object.assign({className:"image-scroll"},w),s.a.createElement(o.a,{fluid:e.data.tecneprocess21.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess22.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess23.childImageSharp.fluid}),s.a.createElement(o.a,{fluid:e.data.tecneprocess24.childImageSharp.fluid})),s.a.createElement("p",{className:"full-textlarge"},"By considering the entirety of the customer journey and all the touchpoints, both offline & online, along the way we created a more robust & connected experiences."),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Next, various Task Map were made from the steps of the userflow."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess25.childImageSharp.fluid})),s.a.createElement("div",{className:"bluebg"},s.a.createElement("p",{className:"full-textlargebluebg"},"This design tool was used to identify the features, elements and different app screens that we had to design based on the user needs."),s.a.createElement("p",{className:"full-textlargebluebg"},"It was used as a framework to sketch low-fidelity wireframes on paper and then consolidated digitally.")),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess26.childImageSharp.fluid})),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess27.childImageSharp.fluid}))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Defining visual identity")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The brand identity of the Tecne product was made with the values; Strong, Sporty, Solid & Dynamic."),s.a.createElement("p",null,"This language was to be reflected all the various touchpoints such as the mobile app, website, gloves and communication materials."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess28.childImageSharp.fluid})),s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Product design of the gloves")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"As a starting point we were given an underglove equipped with 13 sensors that captured various data. We had to select appropriate material that gave a comfortable feel & design its external look."))),s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess29.childImageSharp.fluid})),s.a.createElement("p",{className:"full-textlarge"},"To give athletes an experience that felt natural & efficient meant designing the Gloves that interacted with the mobile app through gestures and haptic feedback.")),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Testing gloves & mobile app")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The first prototype of the gloves and developed mobile app was integrity tested to understand what worked and what didn't."))),s.a.createElement("p",{className:"full-textlarge"},"First we made sure that the gloves and app were properly communicating with each other, with regards to charging, pairing, data transfer and data visualisation on the app while using the gloves."),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneprocess30.childImageSharp.fluid}))),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Next any technical issues and bugs within the app were identified. The gloves were also tested for its material strength, quality and comfort."),s.a.createElement("p",null,"Finally we considered the entire experience from the design point of view to identify elements that can be further consolidated."),s.a.createElement("p",null,"Before the launch of the product we planned to give the gloves & app to few professional fighters to get more feedback from them in order to further refine the product.")))),s.a.createElement("section",{className:"outcome-section"},s.a.createElement("div",{className:"outcome-text-wrapper"},s.a.createElement("span",{className:"project-step-number"},"03"),s.a.createElement("h2",null,"outcome"),s.a.createElement("h3",null,"We have designed a perfect combo to help fighters and trainers really understand how they are training so that they can make actual gains in combat sports training."),s.a.createElement("div",{className:"outcome"},s.a.createElement("div",{className:"outcome-left"},s.a.createElement("p",null,"The Tecne Sensor Wraps MK II is a state of the art underglove laced with sensors with exceptionally comfy and snug fit. They collect real-time data on the fighter’s training routine. Built-in gesture capability make the gloves functional & fit naturally to training routines.")),s.a.createElement("div",{className:"outcome-right"},s.a.createElement("p",null,"These are accompanied with the Tecne mobile app; where the data collected from the gloves are visualised. We track movements over a variety of data parameters and characteristics to give a complete assessment of the fighter's training sessions."))),s.a.createElement("h3",null,"Overall, we have enriched the training sessions of combat sports by giving fighters and trainers access to data & insights, thus equipping them to take immediate actions based on real-accurate data which they wouldn't have known by simply observing."),s.a.createElement("p",null,"Visit ",s.a.createElement("a",{href:"https://tecne.pro"},"tecne.pro")," to find out more."))))),s.a.createElement("section",{className:"fullspan"},s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneoutcome46.childImageSharp.fluid}))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("section",{className:"process-section"},s.a.createElement("div",{className:"changebg"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Prototype of the mobile app")),s.a.createElement("div",{className:"process-right"},s.a.createElement("div",null,s.a.createElement("img",{className:"protologo",src:E.a,alt:""})),s.a.createElement("div",{className:"resume-download"},s.a.createElement("a",{href:"https://medium.com/@sagarsatam",target:"_blank",rel:"noopener noreferrer",className:"resume-download-link",download:!0},"See Prototype")))))))),s.a.createElement("section",{className:"fullspan"},s.a.createElement("div",{className:"image"},s.a.createElement(o.a,{fluid:e.data.tecneoutcome45.childImageSharp.fluid}))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("div",{className:"changebg"},s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Problems faced during the project and how they were solved")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"The challenge was to identify ways in which our product assists the coaches to do their job better and not to replace their role."),s.a.createElement("p",null,"After collaborating with the coaches we found out our USP which was to equip them with factual data which they could not know during their training sessions; such as data about impact strength and area of impact of each hit."))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Another challenge was to ensure that our product did not interfere or distract the current training routines and sessions."),s.a.createElement("p",null,"The insights from our research allowed us to design various micro & macro interactions that made sure our product complimented the workflow of coaches and trainers. For e.g. Highlight-cards gave quick data insights."))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Coaches during training need to see live feed of data of their trainers and also see data of the elapsed time. The use of bluetooth (to connect and exchange data/information between the gloves and mobile app) meant putting considerable strain on the database, resulting in slow loading time."),s.a.createElement("p",null,"Our solution was to take snapshots (pictures) of the data during training and store that data locally. So  if the user was to scroll back in the timeline, either during or at the end of the training session, instead of calling the data from the server we simply showed the snapshots thus eliminating any loading time."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("h4",null,"Reflection - what I learnt during the project & what I could have done better.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Getting people to talk about an important, but highly complex topic was difficult."),s.a.createElement("p",null,"We approached people in different ways (short survey, contextual interview, phone conversation, in-person chats) depending on their comfort. Our strategy involved raising awareness around the topic, and being open to listening to stories about people's personal experiences.")))),s.a.createElement("br",null),s.a.createElement("p",{className:"full-text"},"Thank you & keep training hard and smart! ",s.a.createElement("span",{role:"img"},"💪📈")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"full-text"},s.a.createElement("div",{className:"hp-featured__hr-line"}),s.a.createElement("h5",null,"NEXT PROJECT")),s.a.createElement("br",null))),s.a.createElement("section",{id:"two",className:"tiles inner"},s.a.createElement("div",{className:"tiles__wrapper"},s.a.createElement("a",{href:"/work/service-design-muvisi-project03full2589"},s.a.createElement("div",{className:"tiles__content"},s.a.createElement("div",{className:"tiles__info"},s.a.createElement("div",{className:"tiles__text"},"A smart mobility service that makes it stress-free & convenient to find on-street parking spots in the city."),s.a.createElement("br",null),s.a.createElement("p",{className:"maisontags-card"},"Research, Service Design, User Experience, Digital UX/UI, UX Strategy, Interaction Design, Brand Identity"))),s.a.createElement("div",{className:"tiles__image"},s.a.createElement("img",{src:b.a,alt:""})))))))};var y="2813491239",N="1235973156"},PJQ5:function(e,t,a){e.exports=a.p+"static/19-ff9f7a28b95a42cb4ab8bdc69c0773ac.png"},fxDH:function(e,t,a){e.exports=a.p+"static/tecne-logo-018d2bc36dfd0a8646f41825abffe9c1.jpg"},fxeT:function(e,t,a){e.exports=a.p+"static/things-logo-faf4015712579c55e89e7e93978cfb03.jpg"},"yb/d":function(e,t,a){e.exports=a.p+"static/adobe_logo-9e4972ce74f87ff2ecffbb51385a9faf.png"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-tecne-js-3a0f692d715aa4e0e788.js.map