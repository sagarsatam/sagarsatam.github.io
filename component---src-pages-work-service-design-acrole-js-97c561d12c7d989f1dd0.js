(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"9eSz":function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=l(a("VbXa")),i=l(a("PJYZ")),s=l(a("8OQS")),c=l(a("pVnL")),o=l(a("q1tI")),m=l(a("17x9")),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,l=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),l&&(t.fluid=l,delete t.sizes),r&&(t.loading="eager"),t},u=Object.create({}),p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,f="undefined"!=typeof window,g=f&&window.IntersectionObserver,E=new WeakMap;var v=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+l+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+c+a+r+t+i+n+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=o.default.forwardRef((function(e,t){var a=e.sizes,l=e.srcSet,r=e.src,n=e.style,i=e.onLoad,m=e.onError,d=e.loading,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:l,src:r},u,{onLoad:i,onError:m,ref:t,loading:d,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));w.propTypes={style:m.default.object,onError:m.default.func,onLoad:m.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=f&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!h&&g&&!t.critical&&!a.seenBefore;var l=t.critical||f&&(h||!a.useIOSupport);return a.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,l=e.className,r=e.style,n=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,m=e.placeholderStyle,u=void 0===m?{}:m,p=e.placeholderClassName,h=e.fluid,f=e.fixed,g=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,N=e.itemProp,y=e.loading,A=!1===this.state.fadeIn||this.state.imgLoaded,S=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:A?1:0,transition:S?"opacity "+E+"ms":"none"},s),k="boolean"==typeof g?"lightgray":g,I={transitionDelay:E+"ms"},M=(0,c.default)({opacity:this.state.imgLoaded?0:1},S&&I,s,u),x={title:t,alt:this.state.isVisible?"":a,style:M,className:p};if(h){var j=h;return o.default.createElement(v,{className:(l||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(v,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),k&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&I)}),j.base64&&o.default.createElement(w,(0,c.default)({src:j.base64},x)),j.tracedSVG&&o.default.createElement(w,(0,c.default)({src:j.tracedSVG},x)),this.state.isVisible&&o.default.createElement("picture",null,j.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),o.default.createElement(w,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:y},j))}}))}if(f){var T=f,L=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete L.display,o.default.createElement(v,{className:(l||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&o.default.createElement(v,{title:t,style:(0,c.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},S&&I)}),T.base64&&o.default.createElement(w,(0,c.default)({src:T.base64},x)),T.tracedSVG&&o.default.createElement(w,(0,c.default)({src:T.tracedSVG},x)),this.state.isVisible&&o.default.createElement("picture",null,T.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),o.default.createElement(w,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,c.default)({alt:a,title:t,loading:y},T))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var y=m.default.shape({width:m.default.number.isRequired,height:m.default.number.isRequired,src:m.default.string.isRequired,srcSet:m.default.string.isRequired,base64:m.default.string,tracedSVG:m.default.string,srcWebp:m.default.string,srcSetWebp:m.default.string}),A=m.default.shape({aspectRatio:m.default.number.isRequired,src:m.default.string.isRequired,srcSet:m.default.string.isRequired,sizes:m.default.string.isRequired,base64:m.default.string,tracedSVG:m.default.string,srcWebp:m.default.string,srcSetWebp:m.default.string});N.propTypes={resolutions:y,sizes:A,fixed:y,fluid:A,fadeIn:m.default.bool,durationFadeIn:m.default.number,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),critical:m.default.bool,crossOrigin:m.default.oneOfType([m.default.string,m.default.bool]),style:m.default.object,imgStyle:m.default.object,placeholderStyle:m.default.object,placeholderClassName:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,onError:m.default.func,onStartLoad:m.default.func,Tag:m.default.string,itemProp:m.default.string,loading:m.default.oneOf(["auto","lazy","eager"])};var S=N;t.default=S},PJQ5:function(e,t,a){e.exports=a.p+"static/19-ff9f7a28b95a42cb4ab8bdc69c0773ac.png"},Yy6m:function(e,t,a){e.exports=a.p+"static/acrole-casestudy-96b275c0046aff371aafc71c1e84f28a.pdf"},a0mx:function(e,t){e.exports="data:image/png;base64,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"},zppf:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidTecneImage",(function(){return g})),a.d(t,"pageQuery",(function(){return E}));var l=a("q1tI"),r=a.n(l),n=a("TJpk"),i=a.n(n),s=a("Bl7J"),c=a("9eSz"),o=a.n(c),m=(a("Wbzz"),a("OS56"),a("tyWD"),a("K7k0"),a("a0mx")),d=a.n(m),u=a("PJQ5"),p=a.n(u),h=a("Yy6m"),f=a.n(h);t.default=function(e){var t=Object(l.useRef)(null);return r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Service Design - Tecne"),r.a.createElement("meta",{name:"Service Design - Redesign internal team role",content:"Service Design"})),r.a.createElement("div",{id:"main",className:"alt"},r.a.createElement("section",{id:"work-banner"},r.a.createElement("div",null,r.a.createElement("span",{className:"image main"},r.a.createElement(o.a,{fluid:e.data.tecnecover.childImageSharp.fluid,alt:""})))),r.a.createElement("div",{className:"project-wrapper"},r.a.createElement("div",{className:"project-content"},r.a.createElement("header",null,r.a.createElement("p",{className:"maisontags"},"Research, Service Design, User Experience, Digital UX/UI, UX & Business Strategy, Interaction Design"),r.a.createElement("h1",null,"Redesigning role of internal stakeholder"),r.a.createElement("h3",null,"Prototyping and piloting multiple initiatives to re-design the role of a field-ops employee (Activation Coordinator, AC) to reduce the cost to serve users, improve retention and quality of service delivery.")),r.a.createElement("section",{className:"header-post"},r.a.createElement("div",{className:"headerpost"},r.a.createElement("div",{className:"headerpost-left"},r.a.createElement("p",null,"A summarised version of the project is presented here.",r.a.createElement("br",null)," For a much more in-depth information, feel free to download the detailed case study document for this project.",r.a.createElement("br",null),r.a.createElement("div",{className:"resume-download"},r.a.createElement("a",{href:f.a,target:"_blank",rel:"noopener noreferrer",className:"resume-download-link",download:!0},"📘 Download case study")))),r.a.createElement("div",{className:"headerpost-right"},r.a.createElement("div",{className:"client-image"},r.a.createElement("img",{className:"span-4",src:d.a,alt:"things logo"})),r.a.createElement("br",null),r.a.createElement("p",null,"I worked on this project while working at Jiva Ag, an agri-tech product company.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"/about-jiva"},r.a.createElement("u",null,"Click here to know more about Jiva")))))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Context of the project"),r.a.createElement("p",null,"We had to design a physical-digital product for athletes training for combat sports of MMA and Kickboxing."),r.a.createElement("p",null,"Our aim was to develop a product for semi-professionals who regularly train in a gym in preparation for a match.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("h4",null,"Project overview"),r.a.createElement("span",{className:"credits-text"},r.a.createElement("strong",null,"PROJECT TYPE:")," Designing a physical-digital product that assists athletes who are training for combat sports."),r.a.createElement("br",null),r.a.createElement("span",{className:"credits-text"},r.a.createElement("strong",null,"TEAM MEMBERS:")," Design team of THINGS, Milan"),r.a.createElement("br",null),r.a.createElement("span",{className:"credits-text"},r.a.createElement("strong",null,"MY ROLE:")," Benchmarking competitors, planning & preparing for contextual interviews, mapping current & future user journey, user flows of the mobile app, wireframing of mobile app & website, Visual UI design, prototyping mobile app on Adobe XD."),r.a.createElement("div",{className:"challenge-client"},r.a.createElement("br",null)))),r.a.createElement("section",{className:"challenge-section"},r.a.createElement("span",{className:"project-step-number"},"01"),r.a.createElement("h2",null,"challenge"),r.a.createElement("div",{className:"challenge"},r.a.createElement("div",{className:"challenge-desc"},r.a.createElement("h4",null,"The Activation Coordinator (AC)"),r.a.createElement("p",null,"Mardiana, an AC, graduated with a degree in Agriculture. She used to be a Demo Plot Controller back in 2021 and now she is an AC for Bontoramba, sub-district."),r.a.createElement("p",null,"She is passionate about making better lives for farmers as she understands the same struggles her family has been through in agriculture."),r.a.createElement("p",null,r.a.createElement("a",{href:"/about-jiva"},r.a.createElement("u",null,"Click here to know more about Jiva"))))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecnechallenge1.childImageSharp.fluid})),r.a.createElement("div",{className:"project-outcome"},r.a.createElement("span",{className:"project-outcome-link",onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.scrollIntoView({block:"start",behavior:"smooth"})}},"see project outcomes >>"))),r.a.createElement("section",{className:"process-section"},r.a.createElement("p",{className:"full-textlarge"},"What the Activation Coordinator’s (ACs) role was envisioned to be... and what it became organically..."),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecnechallenge2.childImageSharp.fluid})),r.a.createElement("div",{className:"changebg"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("p",{className:"half-textlarge"},"Our ACs have taken on multiple roles which bottlenecks their ability to support a larger pool of MCs.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("h4",null,"Impact for MC"),r.a.createElement("p",null,"MCs find their ACs an easy and simple go to person to troubleshoot all challenges with Jiva."),r.a.createElement("h4",null,"Impact for Jiva"),r.a.createElement("p",null,"ACs can only support a handful of MCs to push them to be active. ACs might also be doing jobs that they not best suited for. ACs are the only effective means of serving our MC across multiple touchpoints for a MC."))))),r.a.createElement("section",{className:"process-section"},r.a.createElement("span",{className:"project-step-number"},"02"),r.a.createElement("h2",null,"process"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"process-image"},r.a.createElement(o.a,{fluid:e.data.tecne_process.childImageSharp.fluid})),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Defining the project canvas for redesigning the AC’s role; UX and Business needs")),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess3.childImageSharp.fluid}))),r.a.createElement("div",{className:"changebg"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Planning, scoping and defining objectives of research to be carried out on-ground.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"A research plan was put together outlining the research objective, methodologies, line of inquiry, participant criteria & timelines."))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess4.childImageSharp.fluid})),r.a.createElement("p",{className:"full-textlarge"},"We started with understanding the AC’s context; their day-to-day tasks & challenges. We conducted on-ground discussions with 6 ACs."),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess5.childImageSharp.fluid})),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"We dug deeper to understand how ACs are currently managing their network of MCs. We wanted to learn about the following things")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"Time spent visiting MCs.",r.a.createElement("br",null),"Time spent remotely interacting MCs.",r.a.createElement("br",null),"Reasons for them initiating visits MCs.",r.a.createElement("br",null),"Reasons for MCs requesting AC visits.",r.a.createElement("br",null),"Their actions and role while visiting MCs.",r.a.createElement("br",null),"Challenges to doing certain tasks remotely."))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess6.childImageSharp.fluid}))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("p",{className:"half-textlarge"},"We looked at quant data to understand how the AC’s network of MCs are performing — activation rate, transactions, etc.")),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess7.childImageSharp.fluid})),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"70% volume contribution by 17% MC.",r.a.createElement("br",null),"40% of AC’s MC network is low-volume.",r.a.createElement("br",null),"Average AC span is 12 transacting MCs i.e. 1 big, 1 medium, 1 small and 9 tail-end MCs.",r.a.createElement("br",null),"A considerable amount of AC’s capacity could be freed up if low-volume MCs were to be managed by a remote team instead.",r.a.createElement("br",null)))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"We simulated the possible effort & time distribution of ACs across their MC network (new MCs, mid vol MCs and high vol MCs), in order to meet 2024 targets."))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess8.childImageSharp.fluid})),r.a.createElement("div",{className:"changebg"},r.a.createElement("p",{className:"full-textlarge"},"Research synthesis resulted in mapping of the current experience of the AC to identify pains, inefficiency points & opportunities for redesign."),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess9.childImageSharp.fluid}))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-right"},r.a.createElement("p",{className:"half-textlarge"},"Strategic approach & guiding principles for redesign"))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess10.childImageSharp.fluid})),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("p",{className:"half-textlarge"},"Proposed service system map & strategic planks"))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess11.childImageSharp.fluid}))),r.a.createElement("div",{className:"process-right"},r.a.createElement("h4",null,"Field AC capacity"),r.a.createElement("ol",null,r.a.createElement("li",null,"Transition field AC’s in-person activities to remote ways of interaction."),r.a.createElement("br",null),r.a.createElement("li",null,"Remote AC team to allow Field AC focus to dedicate focus to mid & high-value MCs."),r.a.createElement("br",null),r.a.createElement("li",null,"Transaction support team to assist Field AC with executing low-impact functional work such as verifying and editing mistakes in transaction data."),r.a.createElement("br",null),r.a.createElement("li",null,"Recovery team to follow-up on escalation use-cases.")),r.a.createElement("h4",null,"Quality of service provision to user (MC)"),r.a.createElement("ol",null,r.a.createElement("li",null,"SOPs & guideline to standardise on-ground processes and usage of tools."),r.a.createElement("br",null),r.a.createElement("li",null,"Bringing visibility & monitoring to AC’s on-ground activities to enable data-informed follow-up actions."),r.a.createElement("br",null),r.a.createElement("li",null,"Field & remote ACs to have access to knowledge team for providing better quality advice to MCs."),r.a.createElement("br",null),r.a.createElement("li",null,"Enable field & remote ACs with accurate & real-time data to proactively support MCs."),r.a.createElement("br",null),r.a.createElement("li",null,"Field AC to provide a lower barrier experience for new MCs to begin working with Jiva."),r.a.createElement("br",null),r.a.createElement("li",null,"Identify high-value MCs and provide them premium services that eliminate their high-friction points.")))),r.a.createElement("div",{className:"changebg"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Validate initial ideas and initiatives we have came up with.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",{className:"half-textlarge"},"Next we ran an ideation workshop with users - AC, FC in Makassar, Indonesia."))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Present different scenarios which ACs find themselves in; and for each scenario:"),r.a.createElement("ol",null,r.a.createElement("li",null,"ideate ways to make the visit productive, remote interaction, remove it from their plate with support from tool or people."),r.a.createElement("br",null),r.a.createElement("li",null,"break ideas - identify risks, constraints, cons"),r.a.createElement("br",null),r.a.createElement("li",null,"fix ideas - go around and fix ideas by derisking them, overcoming constraints, turning cons to pros."))),r.a.createElement("div",{className:"process-right"},r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess12.childImageSharp.fluid}))))),r.a.createElement("p",{className:"full-textlarge"},"The Ideas were consolidated & synthesised; and the different initiatives across the entire AC’s journey was laid out."),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess13.childImageSharp.fluid})),r.a.createElement("div",{className:"changebg"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Service blueprint of proposed experience.")),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess14.childImageSharp.fluid}))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-right"},r.a.createElement("p",{className:"half-textlarge"},"We facilitated multiple working sessions to take internal stakeholders, leadership team and users through the future service proposal and initiatives.")),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess15.childImageSharp.fluid}))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("p",{className:"half-textlarge"},"We debated pros and cons of the different initiatives based on desirability for user, viability for business and feasibility for execution.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("h4",null,"Our goal was to —"),r.a.createElement("ol",null,r.a.createElement("li",null,"Present our point of view"),r.a.createElement("br",null),r.a.createElement("li",null,"Open up the space for critique, feedback, discussion & debate"),r.a.createElement("br",null),r.a.createElement("li",null,"Get initial reactions & quick validation from users"),r.a.createElement("br",null),r.a.createElement("li",null,"Create ownership with internal team (ACs) who will be delivering the experience to users (MCs)."))))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Prirotise")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"All initiatives & ideas were presented to key stakeholders for alignment and prioritisation based on confidence level."),r.a.createElement("p",null,'Ideas and initiatives that would require prototyping & piloting were then structured in "proto cards" as shown below'))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneprocess16.childImageSharp.fluid}))),r.a.createElement("div",{className:"process-right"},r.a.createElement(o.a,{fluid:e.data.tecneprocess17.childImageSharp.fluid})))),r.a.createElement("section",{id:"outcome-section",ref:t,className:"outcome-section"},r.a.createElement("div",{className:"outcome-text-wrapper"},r.a.createElement("span",{className:"project-step-number"},"03"),r.a.createElement("h2",null,"outcome"),r.a.createElement("h3",null,"We have designed a perfect combo to help fighters and trainers really understand how they are training so that they can make actual gains in combat sports training."),r.a.createElement("div",{className:"outcome"},r.a.createElement("div",{className:"outcome-left"},r.a.createElement("p",null,"The Tecne Sensor Wraps MK II is a state of the art underglove laced with sensors with exceptionally comfy and snug fit. They collect real-time data on the fighter’s training routine. Built-in gesture capability make the gloves functional & fit naturally to training routines.")),r.a.createElement("div",{className:"outcome-right"},r.a.createElement("p",null,"These are accompanied with the Tecne mobile app; where the data collected from the gloves are visualised. We track movements over a variety of data parameters and characteristics to give a complete assessment of the fighter's training sessions."))),r.a.createElement("h3",null,"Overall, we have enriched the training sessions of combat sports by giving fighters and trainers access to data & insights, thus equipping them to take immediate actions based on real-accurate data which they wouldn't have known by simply observing."))),r.a.createElement("p",{className:"full-textlarge"},"Ideas and initiatives that would require prototyping & piloting."),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Touchpoint interaction (physical, digital product) level:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Sales pitch guidebook"),r.a.createElement("br",null),r.a.createElement("li",null,"Moisture meter renting"),r.a.createElement("br",null),r.a.createElement("li",null,"Low friction experience for new MCs"),r.a.createElement("br",null),r.a.createElement("li",null,"Quality assessment cards"),r.a.createElement("br",null),r.a.createElement("li",null,"Visit verification through image recognition of pics"),r.a.createElement("br",null),r.a.createElement("li",null,"Recording visit details through voice interaction"))),r.a.createElement("div",{className:"process-right"},r.a.createElement("h4",null,"Service process level:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Field AC visit prioritisation & optimisation"),r.a.createElement("br",null),r.a.createElement("li",null,"Remote AC service model for low-value MCs"),r.a.createElement("br",null),r.a.createElement("li",null,"No AC model"),r.a.createElement("br",null),r.a.createElement("li",null,"On-demand trainer to build capability"),r.a.createElement("br",null),r.a.createElement("li",null,"Farmer document collection event")))),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome45.childImageSharp.fluid})),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome46.childImageSharp.fluid})),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome47.childImageSharp.fluid})),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome48.childImageSharp.fluid})),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome49.childImageSharp.fluid})),r.a.createElement("div",{className:"image"},r.a.createElement(o.a,{fluid:e.data.tecneoutcome50.childImageSharp.fluid})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"project-wrapper"},r.a.createElement("div",{className:"project-content"},r.a.createElement("div",{className:"changebg"},r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Problems faced during the project and how they were solved")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"The challenge was to identify ways in which our product assists the coaches to do their job better and not to replace their role."),r.a.createElement("p",null,"After collaborating with the coaches we found out our USP which was to equip them with factual data which they could not know during their training sessions; such as data about impact strength and area of impact of each hit."))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"Another challenge was to ensure that our product did not interfere or distract the current training routines and sessions."),r.a.createElement("p",null,"The insights from our research allowed us to design various micro & macro interactions that made sure our product complimented the workflow of coaches and trainers. For e.g. Highlight-cards gave quick data insights."))),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"Coaches during training need to see live feed of data of their trainers and also see data of the elapsed time. The use of bluetooth (to connect and exchange data/information between the gloves and mobile app) meant putting considerable strain on the database, resulting in slow loading time."),r.a.createElement("p",null,"Our solution was to take snapshots (pictures) of the data during training and store that data locally. So  if the user was to scroll back in the timeline, either during or at the end of the training session, instead of calling the data from the server we simply showed the snapshots thus eliminating any loading time."))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"process"},r.a.createElement("div",{className:"process-left"},r.a.createElement("h4",null,"Reflection - what I learnt during the project & what I could have done better.")),r.a.createElement("div",{className:"process-right"},r.a.createElement("p",null,"Getting people to talk about an important, but highly complex topic was difficult."),r.a.createElement("p",null,"We approached people in different ways (short survey, contextual interview, phone conversation, in-person chats) depending on their comfort. Our strategy involved raising awareness around the topic, and being open to listening to stories about people's personal experiences.")))),r.a.createElement("br",null),r.a.createElement("p",{className:"full-text"},"Thank you & keep optimising internal team workflows ",r.a.createElement("span",{role:"img","aria-labelledby":"tecneemoji"},"🙌🛠️")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"full-text"},r.a.createElement("div",{className:"hp-featured__hr-line"}),r.a.createElement("h5",null,"NEXT PROJECT")),r.a.createElement("br",null))),r.a.createElement("section",{id:"two",className:"tiles inner"},r.a.createElement("div",{className:"tiles__wrapper"},r.a.createElement("a",{href:"/work/service-design-progression"},r.a.createElement("div",{className:"tiles__content"},r.a.createElement("div",{className:"tiles__info"},r.a.createElement("div",{className:"tiles__text"},"Improving the credit recovery timelines, motivation and loyalty of users by designing a multi-component Progression System that engages users in a variety of ways."),r.a.createElement("br",null),r.a.createElement("p",{className:"maisontags-card"},"Research, Service Design, User Experience, Digital UX/UI, UX Strategy"))),r.a.createElement("div",{className:"tiles__image"},r.a.createElement("img",{src:p.a,alt:""})))))))};var g="2813491239",E="3646449248"}}]);
//# sourceMappingURL=component---src-pages-work-service-design-acrole-js-97c561d12c7d989f1dd0.js.map