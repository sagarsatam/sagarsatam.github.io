(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"9eSz":function(e,a,t){"use strict";var i=t("TqRt");a.__esModule=!0,a.default=void 0;var s,r=i(t("VbXa")),n=i(t("PJYZ")),l=i(t("8OQS")),o=i(t("pVnL")),c=i(t("q1tI")),d=i(t("17x9")),m=function(e){var a=(0,o.default)({},e),t=a.resolutions,i=a.sizes,s=a.critical;return t&&(a.fixed=t,delete a.resolutions),i&&(a.fluid=i,delete a.sizes),s&&(a.loading="eager"),a},u=Object.create({}),h=function(e){var a=m(e),t=a.fluid?a.fluid.src:a.fixed.src;return u[t]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,g=f&&window.IntersectionObserver,v=new WeakMap;var E=function(e,a){var t=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var a=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),v.delete(e.target),a())}}))}),{rootMargin:"200px"})),s);return t&&(t.observe(e),v.set(e,a)),function(){t.unobserve(e),v.delete(e)}},b=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+t+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+o+t+s+a+n+r+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef((function(e,a){var t=e.sizes,i=e.srcSet,s=e.src,r=e.style,n=e.onLoad,d=e.onError,m=e.loading,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,o.default)({sizes:t,srcSet:i,src:s},u,{onLoad:n,onError:d,ref:a,loading:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var w=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=f&&h(a),t.addNoScript=!(a.critical&&!a.fadeIn),t.useIOSupport=!p&&g&&!a.critical&&!t.seenBefore;var i=a.critical||f&&(p||!t.useIOSupport);return t.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=c.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,n.default)((0,n.default)(t))),t.handleRef=t.handleRef.bind((0,n.default)((0,n.default)(t))),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=h(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=m(e),t=a.fluid?a.fluid.src:a.fixed.src,u[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=m(this.props),a=e.title,t=e.alt,i=e.className,s=e.style,r=void 0===s?{}:s,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,u=void 0===d?{}:d,h=e.placeholderClassName,p=e.fluid,f=e.fixed,g=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,w=e.itemProp,N=e.loading,k=!1===this.state.fadeIn||this.state.imgLoaded,S=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,o.default)({opacity:k?1:0,transition:S?"opacity "+v+"ms":"none"},l),x="boolean"==typeof g?"lightgray":g,T={transitionDelay:v+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},S&&T,l,u),L={title:a,alt:this.state.isVisible?"":t,style:R,className:h};if(p){var O=p;return c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),x&&c.default.createElement(E,{title:a,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&T)}),O.base64&&c.default.createElement(y,(0,o.default)({src:O.base64},L)),O.tracedSVG&&c.default.createElement(y,(0,o.default)({src:O.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(y,{alt:t,title:a,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,o.default)({alt:t,title:a,loading:N},O))}}))}if(f){var j=f,W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete W.display,c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},x&&c.default.createElement(E,{title:a,style:(0,o.default)({backgroundColor:x,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},S&&T)}),j.base64&&c.default.createElement(y,(0,o.default)({src:j.base64},L)),j.tracedSVG&&c.default.createElement(y,(0,o.default)({src:j.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(y,{alt:t,title:a,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,o.default)({alt:t,title:a,loading:N},j))}}))}return null},a}(c.default.Component);w.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});w.propTypes={resolutions:N,sizes:k,fixed:N,fluid:k,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var S=w;a.default=S},DMPF:function(e,a,t){e.exports=t.p+"static/interparking-logo-2730c8953ad5b24310f7ad95cc1ee3bd.jpg"},a3ox:function(e,a,t){"use strict";t.r(a),t.d(a,"fluidMuvisiImage",(function(){return y})),t.d(a,"pageQuery",(function(){return w}));var i=t("q1tI"),s=t.n(i),r=t("TJpk"),n=t.n(r),l=t("Bl7J"),o=t("9eSz"),c=t.n(o),d=t("Wbzz"),m=t("OS56"),u=t.n(m),h=(t("tyWD"),t("K7k0"),t("fxeT")),p=t.n(h),f=t("ubiv"),g=t.n(f),v=t("DMPF"),E=t.n(v),b={dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1};a.default=function(e){return s.a.createElement(l.a,null,s.a.createElement(n.a,null,s.a.createElement("title",null,"Service Design - Muvisi Private"),s.a.createElement("meta",{name:"Service Design - Muvisi Private",content:"Service Design"})),s.a.createElement("div",{id:"main",className:"alt"},s.a.createElement("section",{id:"work-banner"},s.a.createElement("div",null,s.a.createElement("span",{className:"image main"},s.a.createElement(c.a,{fluid:e.data.muvisi_cover.childImageSharp.fluid,alt:""})))),s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("div",{className:"project-content"},s.a.createElement("header",null,s.a.createElement("span",{className:"tag"},"SERVICE DESIGN"),s.a.createElement("span",{className:"tag"},"USER EXPERIENCE"),s.a.createElement("span",{className:"tag"},"INTERACTION DESIGN"),s.a.createElement("span",{className:"tag"},"DIGITAL UX"),s.a.createElement("span",{className:"tag"},"DIGITAL UI"),s.a.createElement("span",{className:"tag"},"BRAND IDENTITY"),s.a.createElement("h1",null,"muvisi."),s.a.createElement("h3",null,"A mobility service that streamlines parking across the entire ecosystem of drivers, operators and municipality. For drivers it provides an end-to-end solution through reliable parking availability data; which makes it stress-free and convenient to find & navigate to on-street parking spots, track sessions and pay seamlessly for actual parked time – whilst assisting parking operators & cities to manage their assets more effectively.")),s.a.createElement("section",{className:"header-post"},s.a.createElement("div",{className:"headerpost"},s.a.createElement("div",{className:"headerpost-left"},s.a.createElement("p",null,"* This project was carried out while working at the design agency, THINGS, in Milan."),s.a.createElement("p",null,s.a.createElement("a",{href:"/say-hello"},s.a.createElement("u",null,"Get in touch")),"with me for more details related to this project; such as my role, the problems i faced, the processes i used and how i addressed the challenges.")),s.a.createElement("div",{className:"headerpost-right"},s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-4",src:p.a,alt:"things logo"})),s.a.createElement("p",null,"Things.is a design and innovation agency for the Internet of Things. We create products & services with their own experiential ecosystems outlined by multi-channel touch points. We envision products and services in the IoT era through a human-centred approach. www.things.is")))),s.a.createElement("section",{className:"challenge-section"},s.a.createElement("span",{className:"project-step-number"},"01"),s.a.createElement("h2",null,"challenge"),s.a.createElement("div",{className:"challenge"},s.a.createElement("div",{className:"challenge-desc"},s.a.createElement("p",null,"Parking is one of the most difficult and dysfunctional parts of Italian city life. Most car journeys in cities involve parking pain on daily basis; from uncertainty (parking availability, prices, restrictions) to inconvenience (full car parks, slow payments, unfair fines)."),s.a.createElement("p",null,"We aimed to solve these parking problems by creating a fully digitalized parking ecosystem that address all sides of the market; drivers (B2C), private parking operators (B2B) and city municipalities as a white-label (B2G).")),s.a.createElement("div",{className:"challenge-credits"},s.a.createElement("div",{className:"topbar"}),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"YEAR:")," 2019"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"DURATION:")," 5 months"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"PROJECT TYPE:")," An urban mobility service that assists users to find parking availability.."),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),s.a.createElement("span",{className:"credits-text"},s.a.createElement("strong",null,"MY ROLE:")," Benchmarking competitors, Blue-sky research to gather inspiration from other industries, preparing for on-field interviews, carrying out service safaris, user-behaviour observation and interviews, research analysis, brand strategy, experience mapping front & back office, wireframing digital product, visual design consultation and prototyping of digital touchpoints."),s.a.createElement("div",{className:"challenge-client"},s.a.createElement("h5",null,"CLIENT"),s.a.createElement("div",{className:"client-image"},s.a.createElement("img",{className:"span-6",src:E.a,alt:"interparking logo"}),s.a.createElement("img",{className:"span-4",src:g.a,alt:"sis logo"}))))),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisichallenge.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"Scope: In phase 1 of the project, we considered only on-street parking scenario. The later phases were planned to include off-street parking and a multi-modal mobility service to be scaled to multiple cities. The challenge was thus to design phase 1 in a way that allowed for this evolution & expansion of the service.")),s.a.createElement("section",{className:"process-section"},s.a.createElement("span",{className:"project-step-number"},"02"),s.a.createElement("h2",null,"process"),s.a.createElement("div",{className:"process-image"},s.a.createElement(c.a,{fluid:e.data.muvisi_process.childImageSharp.fluid})),s.a.createElement("h4",null,"Understanding the current parking landscape "),s.a.createElement("p",{className:"full-text"},"We initiated the project by learning about different on-street parking typologies, their rules & regulations set by city municipality. The city’s parking consists of white lines (free parking), yellow lines (resident parking) and blue lines (paid parking), the later is the only parking typology we considered for phase 1 of the project (scope)."),s.a.createElement("h4",null,"Existing competitors in Italy, Europe and beyond "),s.a.createElement("p",{className:"full-text"},"This followed a benchmarking study to analyse the industry. Identified competitors were then mapped across 2 independent variables to understand their positioning and how we could strategically place ourselves in the market."),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess2.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess3.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess4.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess5.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess6.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess7.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess8.childImageSharp.fluid})),s.a.createElement("h4",null,"Getting out onto the streets "),s.a.createElement("p",{className:"full-text"},"It was vital to step into the shoes of the drivers and experience first hand what it is like to drive and find parking in the city. We came up with various proto scenarios & contexts such as finding parking in known vs. unknown location, finding parking at different times of the day, paying using sms vs. parking meter & others. We also tried the various apps that were discovered during benchmarking."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess9.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess10.childImageSharp.fluid}))),s.a.createElement("h4",null,"Contextual interviews and behavioural observations"),s.a.createElement("p",{className:"full-text"},"Next, we prepared for field research by outlining the goals of user-observation & interview questions. We carefully selected 3 contexts/scenarios (time & surrounding-based) for its unique characteristics, which would give us as many insights as possible."),s.a.createElement("p",{className:"full-text"},"We met with users face to face to learn about their behaviours and what drives their current choices when it comes to going from point A to B in the city. We understood their needs & pains regarding their parking decisions and usage of other parking apps."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess11.childImageSharp.fluid})),s.a.createElement("h4",null,"Research analysis "),s.a.createElement("p",{className:"full-text"},"Findings were put on the table from which we started making clusters & analysis to extract insights & opportunities. We also created user Archetypes based on behaviours, beliefs & mindset."),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess12.childImageSharp.fluid})),s.a.createElement("div",{className:"img right"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess13.childImageSharp.fluid}))),s.a.createElement("h4",null,"UX strategy and Brand personality"),s.a.createElement("p",{className:"full-text"},"Next, we defined our strategy to ensure that the business vision, user needs, and technical capabilities are aligned to our priorities & focus on delivering the best possible experience in the areas that matter the most to our users. This involved laying down the guiding principles of our brand & its positioning, our challenges & desired outcomes, key values, contexts & users we would focus on, short-long term goals, KPIs, and service evolution strategy."),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess14.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess15.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess16.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess17.childImageSharp.fluid})),s.a.createElement("h4",null,"Experience design of mobile app "),s.a.createElement("p",{className:"full-text"},"The identified strategy, research insights and opportunities were used to outline the overall concept we want to offer to users and the back-office stakeholders. Next, followed ideation of various functionalities and its prioritisation based on user needs, business goals & project timeline."),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess18.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess19.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"This work formed the basis for mapping the end-to-end service; that included both online & offline user experience and its corresponding technical requirement in the back-end. We faced many challenges from technical constraints, business requirements to city regulations and after a few iterations we started making wireframes of the mobile app."),s.a.createElement("h4",null,"Responsible UX design "),s.a.createElement("p",{className:"full-text"},"The Terms & Conditions section was made user-friendly by summarising key points on top of the page so that they will more likely be read & understood by the user. Also, each time the user opens the app, a toast message appears on the map to warn them about not using the app while driving."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess20.childImageSharp.fluid})),s.a.createElement("h4",null,"Real-time parking availability data and parking details "),s.a.createElement("p",{className:"full-text"},"The green spots show users parking spaces where someone has recently left with the timer to indicate how recently it got available. At a higher zoom-in level blue Parking Availability lines appear that show users the real-time probability of finding a parking in that area. This availability information is translated into 'mins to find parking' to make it easier & relatable for users."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess21.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"When tapped on this parking area, the small & big modal shows detailed parking information. Also with a single tap interaction users can compare prices for an hour or a defined time period."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess22.childImageSharp.fluid})),s.a.createElement("h4",null,"In-app navigation with one-tap interaction to find another parking spot"),s.a.createElement("p",{className:"full-text"},"This feature was a strategic decision made based on research insights. During navigation, when users are near their destination, they get suggestion on alternative parking areas nearby, with better availability, which they have 5 seconds to accept if they wish."),s.a.createElement("p",{className:"full-text"},"In addition to that, if users after reaching the navigated area haven't found parking, then simply by a single tap they will be re-navigated to the another parking spot close to their current location."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess23.childImageSharp.fluid})),s.a.createElement("h4",null,"Best-route navigation guides users for finding available parking"),s.a.createElement("p",{className:"full-text"},'Once the user has set their destination, the "best parking route" will guide them to their destination passing through different parking areas along the way. Before starting the navigation, users can swipe through and get details of these parking areas.'),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess24.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"During navigation as the user approaches a parking area, they will be alerted to be on the look for a parking spot; also the perspective of the map changes to catch their attention. After parking, the drivers are further navigated by foot to their destination."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess25.childImageSharp.fluid})),s.a.createElement("h4",null,"Experience design of back-office system "),s.a.createElement("p",{className:"full-text"},"Based on the functionalities & user flow of the front-office, the back-office features were defined and the required stakeholders identified. A hierarchy system depending on their roles, skills, level of visibility and control in the back-office system was created."),s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisiprocess26.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"Next, for each stakeholder we understood their tasks, goals and needs while also taking into account their technical knowledge and familiarity with the parking system. This allowed us to map out the touchpoint flows for various use-cases. We then created wireframes of various sections and prioritised the layout according to information hierarchy based on each stakeholder's needs."),s.a.createElement("h4",null,"Dashboard, detailed graphs and time-lapse mode"),s.a.createElement("p",{className:"full-text"},"We designed an analytical dashboard that showed key information at a glance allowing for users to focus on details that matter the most. Various data parameters can be selected to be visualised on the map, which enriches the graphical data shown on the right."),s.a.createElement("p",{className:"full-text"},"Accounting for everyday usage, trend data, in the form positive or negative changes over time period, is shown. Plus, accessible filters allow additional customisation of the type & time period to visualise the data."),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess27.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess28.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess29.childImageSharp.fluid})),s.a.createElement("p",{className:"full-text"},"The dashboard acts as a gateway for progressive disclosure of detailed information through easy navigation to various areas of the back-office system such as full-view of graphs, data comparison, time-lapse mode and others."," "),s.a.createElement("p",{className:"full-text"},"For data visualisation, typology of graphs were carefully selected depending on what the user would like to see. Also users can interact with them by hover-over to get more information, allowing easy comparison and identification of patterns."),s.a.createElement("h4",null,"Setting up of new city on the system"),s.a.createElement("p",{className:"full-text"},"We designed a system that gives users the operative ability of setting up new cities, inviting and managing client & user profiles. A wizard was designed to guide users step by step to create new city profiles. Special attention was given to making data input easy and quick."," "),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess30.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess31.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess32.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess33.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess34.childImageSharp.fluid})),s.a.createElement("h4",null,"Visual language of the digital touchpoints "),s.a.createElement("p",{className:"full-text"},"Our goal was to create a language that was unique and memorable. To achieve this we came up a visual concept that was calm & minimal, while at the same time stood out for its futuristic elements; this also tied-in perfectly with the overall values of our service."),s.a.createElement(u.a,Object.assign({className:"image-scroll"},b),s.a.createElement(c.a,{fluid:e.data.muvisiprocess35.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess36.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess37.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess38.childImageSharp.fluid}),s.a.createElement(c.a,{fluid:e.data.muvisiprocess39.childImageSharp.fluid}))),s.a.createElement("section",{className:"outcome-section"},s.a.createElement("div",{className:"outcome-text-wrapper"},s.a.createElement("span",{className:"project-step-number"},"03"),s.a.createElement("h2",null,"outcome"),s.a.createElement("p",{className:"full-text"},"We have designed a suite of fully integrated and comprehensive parking management solution for Drivers, City Municipalities (as white-label) and Private operators to manage their parking assets."),s.a.createElement("h3",null,'Muvisi helps users simplify their parking experience by leveraging on various data sources and IoT technology. Real-time parking availability info is represented as relatable "mins to find parking" data. Whereas the "Best-route" feature reduces parking search time & effort as it takes the optimised route to their destination passing through different parking areas.'),s.a.createElement("h3",null,"The back-office system & dashboard provides a macro-view of the entire parking ecosystem bringing insights into parking behavior so that quick data-informed decisions can be made."),s.a.createElement("div",{className:"outcome"},s.a.createElement("div",{className:"outcome-left"},s.a.createElement("p",null,"Back-office stakeholders can track various data parameters; in real-time or selected time period. The dashboard UX provides necessary information at a glace so that analysis paralysis is avoided; improving their workflow.")),s.a.createElement("div",{className:"outcome-right"},s.a.createElement("p",null,"The timelapse section captures navigational information in a video format that give insights on busy routes, popular parking locations and top POI destinations."))),s.a.createElement("p",{className:"full-text"},"The product was first currently launched in the market as a pilot for 3 month in the Italian Province of Pesaro and Urbino. We aimed to collect feedback during the pilot study to consolidate the on-street parking service. At the same time, evolve our service offering by adding off-street parking garages to the Muvisi ecosystem."),s.a.createElement("p",{className:"full-text"},"In the final phase, our goal is to further evolve the service into a multi-modal transport ecosystem by integrating with public & private modalities such as trains, metros, buses and floating transportation."),s.a.createElement("p",null,"Visit ",s.a.createElement("a",{href:"https://muvisi.app"},"muvisi.app")," to find out more."))))),s.a.createElement("section",{className:"fullspan"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.muvisioutcome40.childImageSharp.fluid}))),s.a.createElement("section",{id:"footertopcta",className:"inner"},s.a.createElement("p",{className:"text arrow-front"},"check out my",s.a.createElement("br",null),s.a.createElement(d.Link,{to:"/#one"},"featured work.")))),s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"inner"},s.a.createElement("h2",null,"other projects."),s.a.createElement("div",{id:"work"},s.a.createElement("div",{className:"card-wrapper"},s.a.createElement("a",{href:"/work/service-design-tecne"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.project1.childImageSharp.fluid,alt:""})),s.a.createElement("div",{className:"card-info"},s.a.createElement("div",{className:"title"},"tecne."),s.a.createElement("div",{className:"text"},"Next gen combat training with an underglove fitted with sensors & an app that gives precise feedback to improve."),s.a.createElement("div",{className:"tags"},s.a.createElement("ul",null,s.a.createElement("li",null,"UX STRATEGY"),s.a.createElement("li",null,"INTERACTION DESIGN"),s.a.createElement("li",null,"DIGITAL UX/UI"),s.a.createElement("li",null,"PRODUCT DESIGN"),s.a.createElement("li",null,"BRANDING")))))),s.a.createElement("div",{className:"card-wrapper"},s.a.createElement("a",{href:"/work/service-design-hive-part-2"},s.a.createElement("div",{className:"image"},s.a.createElement(c.a,{fluid:e.data.project2.childImageSharp.fluid,alt:""})),s.a.createElement("div",{className:"card-info"},s.a.createElement("div",{className:"title"},"hive (part 2)."),s.a.createElement("div",{className:"text"},"A mobile application to find & book food experiences; and a backend dashboard for management of listings."),s.a.createElement("div",{className:"tags"},s.a.createElement("ul",null,s.a.createElement("li",null,"UX STRATEGY"),s.a.createElement("li",null,"USER EXPERIENCE"),s.a.createElement("li",null,"DIGITAL UX/UI"),s.a.createElement("li",null,"INTERACTION DESIGN"))))))))))};var y="2982693314",w="2982092812"},fxeT:function(e,a,t){e.exports=t.p+"static/things-logo-faf4015712579c55e89e7e93978cfb03.jpg"},ubiv:function(e,a,t){e.exports=t.p+"static/sis-logo-69cc30ec696f2ccd513dc0b5a5a86ef0.png"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-muvisi-project-03-full-2589-js-9456e9c9a9358ee28605.js.map