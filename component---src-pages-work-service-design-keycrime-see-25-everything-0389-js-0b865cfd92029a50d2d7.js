(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var s,n=i(a("VbXa")),l=i(a("PJYZ")),r=i(a("8OQS")),o=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),m=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,s=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),s&&(t.loading="eager"),t},f=Object.create({}),h=function(e){var t=m(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},u="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,g=p&&window.IntersectionObserver,E=new WeakMap;var y=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),s);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+r+o+a+s+t+l+n+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,s=e.src,n=e.style,l=e.onLoad,d=e.onError,m=e.loading,f=(0,r.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:s},f,{onLoad:l,onError:d,ref:t,loading:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));w.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&h(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!u&&g&&!t.critical&&!a.seenBefore;var i=t.critical||p&&(u||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=m(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=m(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,n=void 0===s?{}:s,l=e.imgStyle,r=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,h=e.placeholderClassName,u=e.fluid,p=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,b=e.itemProp,N=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:S?1:0,transition:k?"opacity "+E+"ms":"none"},r),x="boolean"==typeof g?"lightgray":g,T={transitionDelay:E+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},k&&T,r,f),L={title:t,alt:this.state.isVisible?"":a,style:R,className:h};if(u){var O=u;return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),x&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&T)}),O.base64&&c.default.createElement(w,(0,o.default)({src:O.base64},L)),O.tracedSVG&&c.default.createElement(w,(0,o.default)({src:O.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(w,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:N},O))}}))}if(p){var C=p,j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},n);return"inherit"===n.display&&delete j.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},x&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:x,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},k&&T)}),C.base64&&c.default.createElement(w,(0,o.default)({src:C.base64},L)),C.tracedSVG&&c.default.createElement(w,(0,o.default)({src:C.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement(w,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,o.default)({alt:a,title:t,loading:N},C))}}))}return null},t}(c.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:N,sizes:S,fixed:N,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var k=b;t.default=k},DMb8:function(e,t,a){e.exports=a.p+"static/keycrime-logo-b8813d31c560d15d28b1a54c6b7031d3.png"},bAQ4:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidKCImage",(function(){return w})),a.d(t,"pageQuery",(function(){return b}));var i=a("q1tI"),s=a.n(i),n=a("TJpk"),l=a.n(n),r=a("Bl7J"),o=a("9eSz"),c=a.n(o),d=a("Wbzz"),m=a("OS56"),f=a.n(m),h=(a("tyWD"),a("K7k0"),a("fxeT")),u=a.n(h),p=a("DMb8"),g=a.n(p),E=a("hAy+"),y=a.n(E),v={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};t.default=function(e){var t=Object(i.useRef)(null);return s.a.createElement(r.a,null,s.a.createElement(l.a,null,s.a.createElement("title",null,"Keycrime"),s.a.createElement("meta",{name:"Service Design - Keycrime",content:"Redesigning web application for criminal investigation"})),s.a.createElement("div",{id:"main",className:"alt"},s.a.createElement("section",{id:"work-banner"},s.a.createElement("div",null,s.a.createElement("span",{className:"image main"},s.a.createElement(c.a,{fluid:e.data.kccover.childImageSharp.fluid,alt:""})))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("header",null,s.a.createElement("span",{className:"tag"},"INTERACTION DESIGN"),s.a.createElement("span",{className:"tag"},"DIGITAL UX"),s.a.createElement("span",{className:"tag"},"DIGITAL UI"),s.a.createElement("h1",null,"keycrime."),s.a.createElement("h3",null,"We redesigned an operative and analytical web application of Predictive Policing that improved the workflow efficiency & effectiveness of police officers. It allowed them to fully focus on the investigation and predict when, where and how a criminal is likely to hit next, thus improving their safety and optimising the dispatch of resources.")),s.a.createElement("section",{className:"header-post"},s.a.createElement("div",{className:"headerpost"},s.a.createElement("div",{className:"headerpost-left"},s.a.createElement("p",null,"* This project was carried out while working at the design agency, THINGS, in Milan."),s.a.createElement("p",null,s.a.createElement("a",{href:"/say-hello"},s.a.createElement("u",null,"Get in touch")),"with me for more details related to this project; such as my role, the problems i faced, the processes i used and how i addressed the challenges.")),s.a.createElement("div",{className:"headerpost-right"},s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-4",src:u.a,alt:"things logo"})),s.a.createElement("p",null,"Things.is a design and innovation agency for the Internet of Things. We create products & services with their own experiential ecosystems outlined by multi-channel touch points. We envision products and services in the IoT era through a human-centred approach. www.things.is")))),s.a.createElement("section",{className:"challenge-section"},s.a.createElement("span",{className:"project-step-number"},"01"),s.a.createElement("h2",null,"the challenge"),s.a.createElement("div",{className:"challenge"},s.a.createElement("div",{className:"challenge-desc"},s.a.createElement("p",null,"Keycrime was created and developed to fight robberies in the metropolitan area of Milan. It combines the investigation and analytical experience of police officers with complex algorithms to provide them with accurate crime forecasting, allowing them to track criminal behaviour and catch them before the next crime.")),s.a.createElement("div",{className:"challenge-credits"},s.a.createElement("div",{className:"topbar"}),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"YEAR:")," 2018 - 2019"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"DURATION:")," 5 months"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"PROJECT TYPE:")," Redesigning a web application and a dashboard for criminal investigation."),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"MY ROLE:")," Researching of inspiration on UX & UI elements, mapping of Information Architecture, wireframing of screens, writing script and sketching storyboard for video, visual design consultation and prototyping of application on Adobe XD."),s.a.createElement("div",{className:"challenge-client"},s.a.createElement("h5",null,"CLIENT"),s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-4",src:g.a,alt:"keycrime logo"}))))),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.kcchallenge.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"Our aim was to redesign the interaction, user experience and visual design of the existing web application so that all its product functionalities are easy to use. This improvement in the workflow will also allow for the product to be scaled and used by police officers in different cities in the world."),s.a.createElement("div",{className:"project-outcome"},s.a.createElement("span",{className:"project-outcome-link",onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.scrollIntoView({block:"start",behavior:"smooth"})}},"see project outcomes >>"))),s.a.createElement("section",{className:"process-section"},s.a.createElement("span",{className:"project-step-number"},"02"),s.a.createElement("h2",null,"the approach"),s.a.createElement("div",{className:"process-image"},s.a.createElement(c.a,{fluid:e.data.kc_process.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"A complex software & technology, it was important to start by fully understanding the mission and reason behind why KeyCrime came into existence."),s.a.createElement("p",{className:"full-text"},"KeyCrime was born about ten years ago founded by a policeman, today CEO of the company, Mario Venturi. A step up in crime analysis & investigation, it analyses different kind of crimes such as robbery, sexual violence, theft, homicide and scam. To get a comprehensive explanation about how KeyCrime works check the video: https://youtu.be/zIjnNtE93MU"),s.a.createElement(f.a,Object.assign({className:"image-scroll"},v),s.a.createElement(c.a,{fluid:e.data.kcprocess2.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess3.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess4.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess5.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess6.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"This followed a deep dive session to understand how the existing software worked both from the front and back-end side. The old interface of the application is shown in the pictures above. After understanding all the functionalities and the workflow of the police officers; an information architecture of the product was mapped out."),s.a.createElement("p",{className:"full-text"},"This structure formed the basis for making the wireframes. The design of each screen took into account the hierarchy of information and functionalities according to the needs of the police officers to carry out their tasks."),s.a.createElement("h4",null,"Data input of information into the system"),s.a.createElement("p",{className:"full-text"},"KeyCrime works by first entering already committed crime information into the system, such as time, date, place & type of crime. The forms were designed to allow for logical and quick insertion of data. This meant grouping related information in one card, showing all selection options if under 6, using field length as an affordance, using auto-complete for longer fields and correctly using radio buttons, dropdowns & checkboxes depending on the type of information that had to be inputted."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.kcprocess7.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.kcprocess8.childImageSharp.fluid}))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",null,"Other types of information such as facial appearance, body, clothes, accessories, weapons & vehicles can then be added for the criminal event. The input of these type of data required a kind of interaction which had a quick navigation between the different information categories; in this case parts of the body.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"Tags were used as interaction design elements to simplify the experience of first inserting high level information, then showing the contingent section of the form to insert more detailed information with clear communication of the next step the user has to take. Different colours were used to show the different states of tags such as empty, selected & filled."))),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.kcprocess9.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.kcprocess10.childImageSharp.fluid}))),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.kcprocess11.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"This same design consistency was maintained for inputting data related to weapons and vehicles. In addition to that the input fields were also made keyboard-friendly to increase its accessibility; “tab” was used to quickly move through the different fields. As this was a desktop-only product, mouse hover-over interaction was used to show more info and right-click interaction showed secondary actions that could be taken."),s.a.createElement("p",{className:"full-text"},"Media gallery is a key part of KeyCrime product. Police officers upload images and videos from the crime event into the system to see, analyse and identify different elements for clues/evidence."),s.a.createElement("p",{className:"full-text"},"They needed to do this in a way where they could identify the same element in all of the pictures & videos at once. To meet this requirement, a custom tagging interaction was designed; where they had to choose the element to identify (e.g. red cap) and then the “red cap” tag can be added to parts of the image and video they click on."),s.a.createElement(f.a,Object.assign({className:"image-scroll"},v),s.a.createElement(c.a,{fluid:e.data.kcprocess12.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess13.childImageSharp.fluid})),s.a.createElement("h4",null,"Visual Design"),s.a.createElement("p",{className:"full-text"},"After wireframes of key screens were finalised, the visual language was defined. 2 concepts for the look & feel of the product were made; dark and light. Finally the light theme was chosen as it made the insertion of data fields, scannability of information and visualisation of data easier on the eye."),s.a.createElement(f.a,Object.assign({className:"image-scroll"},v),s.a.createElement(c.a,{fluid:e.data.kcprocess14.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess15.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess16.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.kcprocess17.childImageSharp.fluid})),s.a.createElement("h4",null,"Speech to text input of information & review"),s.a.createElement("p",{className:"full-text"},"In order to predict behavior of criminals, KeyCrime collects data from reports as well as from interviews designed by psychologists."," "),s.a.createElement("p",{className:"full-text"},"In order to make this process seamless and natural, voice recognition was used so that witness interviews could be automatically converted from speech to text. This functionality sped up the process and reduced the chance of human error that used to occur while listening, remembering and typing the information they heard."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.kcprocess18.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.kcprocess19.childImageSharp.fluid}))),s.a.createElement("div",{className:"process"},s.a.createElement("div",{className:"process-left"},s.a.createElement("p",null,"We went one step beyond by designing a user experience where keywords in the interview were detected and auto-filled directly into the forms. The design then gave the officers the ability to accept the automatically filled information with a single click.")),s.a.createElement("div",{className:"process-right"},s.a.createElement("p",null,"We further designed a system that suggests officers behavioural questions to ask based on the conversation flow it hears between them & witness. Overall this UX and interaction design saved the officer time and mental effort allowing to focus on other things related to the interview."))),s.a.createElement("h4",null,"Designing of search results and map visualisations"),s.a.createElement("p",{className:"full-text"},"Keycrime’s strategic partnership with IBM watson for its AI capabilities has enabled efficient & reliable analysis of all the data in the database. The software formulates links between different events and data sets to help link crimes and identify criminal series."),s.a.createElement("p",{className:"full-text"},"To allow officers to do this effectively, the search results were made up of tabs that grouped information into categories allowing for large amount of information to be concisely represented and easily accessible."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.kcprocess20.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.kcprocess21.childImageSharp.fluid}))),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.kcprocess22.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"A custom method was designed to facilitate the comparison of the different search results. By changing the tabs or scrolling down in any of the search result; the same thing is seen on all other search results. This interaction made it quick to analyse and compare between events at a glance."),s.a.createElement("h4",null,"Storyboard"),s.a.createElement("p",{className:"full-text"},"Finally, we made a 90 second explanation video about KeyCrime which could be shown to police agencies of other cities and potential investors."),s.a.createElement("p",{className:"full-text"},"We started by first listing down the main functionalities and values we had to communicate in this video. This was followed by making rough sketches of the frames in the storyboard and writing voice over script. Inspiration research regarding the visual style of the video and illustrations was then made. Finally, the rough sketches were illustrated and all the scenes were animated."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.kcprocess23.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.kcprocess24.childImageSharp.fluid})))),s.a.createElement("section",{id:"outcome-section",ref:t,className:"outcome-section"},s.a.createElement("div",{className:"outcome-text-wrapper"},s.a.createElement("span",{className:"project-step-number"},"03"),s.a.createElement("h2",null,"the outcome"),s.a.createElement("p",null,"We successfully improved the usability of the KeyCrime web application enhancing the workflow of the police officers so that they can fully focus on the investigation and predict when, where and how the criminal is likely to hit next."),s.a.createElement("h3",null,"The user experience of the application was completely redesigned to make it easy to organise the huge amount of criminal event data in a easy-to-consult database."),s.a.createElement("h3",null,"The simplified Interface allowed for easy usage of the various features of the application such as quick input different types of information & tagging of Video/Photo & Documents and and optimal navigability to access different sections and details of the application."),s.a.createElement("h3",null,"In certain sections of the application custom interactions were designed to meet the specific needs of the police officers to do their job effectively and efficiently."),s.a.createElement("p",null,"Finally, we also made sure that the newly designed application had a short learning curve so that it can be easily adopted by the current police forces in Milan and in other cities globally."),s.a.createElement("p",null,"Visit ",s.a.createElement("a",{href:"https://keycrime.com "},"keycrime.com ")," to find out more.")),s.a.createElement("div",{className:"video"},s.a.createElement("video",{controls:!0},s.a.createElement("source",{src:y.a,type:"video/mp4"}))),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.kcoutcome27.childImageSharp.fluid}))))),s.a.createElement("section",{className:"fullspan"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.kcoutcome25.childImageSharp.fluid}))),s.a.createElement("section",{id:"footertopcta",className:"inner"},s.a.createElement("p",{className:"text arrow-back"},"head back to",s.a.createElement("br",null),s.a.createElement(d.Link,{to:"/work"},"all my work.")))),s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"inner"},s.a.createElement("h2",null,"other projects."),s.a.createElement("div",{id:"work"},s.a.createElement("div",{className:"card-wrapper"},s.a.createElement("a",{href:"/work/service-design-hive-part-1"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.project1.childImageSharp.fluid,alt:""})),s.a.createElement("div",{className:"card-info"},s.a.createElement("div",{className:"title"},"hive (part 1)"),s.a.createElement("div",{className:"text"},"Unique experiences that bring people together over home cooked meals hosted by local chefs in neighbourhoods."),s.a.createElement("div",{className:"tags"},s.a.createElement("ul",null,s.a.createElement("li",null,"SERVICE DESIGN"),s.a.createElement("li",null,"USER EXPERIENCE"),s.a.createElement("li",null,"UX STRATEGY"),s.a.createElement("li",null,"BUSINESS DESIGN")))))),s.a.createElement("div",{className:"card-wrapper"},s.a.createElement("a",{href:"/work/service-design-muvisi-private"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.project2.childImageSharp.fluid,alt:""})),s.a.createElement("div",{className:"card-info"},s.a.createElement("div",{className:"title"},"muvisi"),s.a.createElement("div",{className:"text"},"A mobility service that makes it stress-free & convenient to find parking spots in the city."),s.a.createElement("div",{className:"tags"},s.a.createElement("ul",null,s.a.createElement("li",null,"SERVICE DESIGN"),s.a.createElement("li",null,"USER EXPERIENCE"),s.a.createElement("li",null,"DIGITAL UX/UI"),s.a.createElement("li",null,"INTERACTION DESIGN"),s.a.createElement("li",null,"BRANDING"))))))))))};var w="3193777942",b="1252789523"},fxeT:function(e,t,a){e.exports=a.p+"static/things-logo-faf4015712579c55e89e7e93978cfb03.jpg"},"hAy+":function(e,t,a){e.exports=a.p+"static/26-40bd7d2f9b049f124d71e86ecdae6c10.mp4"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-keycrime-see-25-everything-0389-js-0b865cfd92029a50d2d7.js.map