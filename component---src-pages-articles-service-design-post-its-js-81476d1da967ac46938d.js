(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var s,n=i(a("VbXa")),r=i(a("PJYZ")),o=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,s=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),s&&(t.loading="eager"),t},f=Object.create({}),h=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,g=m&&window.IntersectionObserver,w=new WeakMap;var b=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),s);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+s+t+r+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,s=e.src,n=e.style,r=e.onLoad,c=e.onError,u=e.loading,f=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:s},f,{onLoad:r,onError:c,ref:t,loading:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));v.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&h(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&g&&!t.critical&&!a.seenBefore;var i=t.critical||m&&(p||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)((0,r.default)(a))),a.handleRef=a.handleRef.bind((0,r.default)((0,r.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,s=e.style,n=void 0===s?{}:s,r=e.imgStyle,o=void 0===r?{}:r,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,p=e.fluid,m=e.fixed,g=e.backgroundColor,w=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=e.loading,I=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:I?1:0,transition:k?"opacity "+w+"ms":"none"},o),L="boolean"==typeof g?"lightgray":g,x={transitionDelay:w+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&x,o,f),T={title:t,alt:this.state.isVisible?"":a,style:R,className:h};if(p){var z=p;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&x)}),z.base64&&d.default.createElement(v,(0,l.default)({src:z.base64},T)),z.tracedSVG&&d.default.createElement(v,(0,l.default)({src:z.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(v,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:S},z))}}))}if(m){var O=m,_=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},L&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},k&&x)}),O.base64&&d.default.createElement(v,(0,l.default)({src:O.base64},T)),O.tracedSVG&&d.default.createElement(v,(0,l.default)({src:O.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(v,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:a,title:t,loading:S},O))}}))}return null},t}(d.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),I=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:S,sizes:I,fixed:S,fluid:I,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var k=E;t.default=k},nfhU:function(e,t,a){"use strict";a.r(t),a.d(t,"fluidPostItImage",(function(){return c})),a.d(t,"pageQuery",(function(){return u}));var i=a("q1tI"),s=a.n(i),n=a("TJpk"),r=a.n(n),o=a("Bl7J"),l=a("9eSz"),d=a.n(l);t.default=function(e){return s.a.createElement(o.a,null,s.a.createElement(r.a,{title:"Service Design & Post-its",meta:[{name:"Article aboout the use of Post-its in Service Design",content:"Articles"}],bodyAttributes:{class:"articles"}}),s.a.createElement("div",{id:"main",className:"alt"},s.a.createElement("section",{id:"article-banner"},s.a.createElement("div",null,s.a.createElement("span",{className:"image main"},s.a.createElement(d.a,{fluid:e.data.hdBanner.childImageSharp.fluid,alt:""})))),s.a.createElement("div",{class:"post-wrapper"},s.a.createElement("div",{class:"post-content"},s.a.createElement("header",null,s.a.createElement("h1",null,"service design & post-its"),s.a.createElement("h3",null,"Post-its has allowed me to holistically visualise the interconnectedness of the different elements that make up the service ecosystem.")),s.a.createElement("section",null,s.a.createElement("small",null,"JANUARY 2016, 3 min read"),s.a.createElement("p",{className:"full-text"},"As a product designer about to start the service design journey, I had mixed emotions and expectations. As a designer, I was well aware of the design tools and process (double diamond process) and ways to visualise my research/ideas and was expecting to learn new service design tools and felt quite prepared as to what to expect."),s.a.createElement("p",{className:"full-text"},'However, coming into the service designing world, this first thing I noticed was walls filled with post-it notes. That was definitely a surprise to me, as I had not come across the usage of post-it notes to this extent. I guess" Design Thinking" can bear some responsibility for converting conference rooms and studios being plastered with post-it notes after a brainstorming process. When I was studying as a product designer, there was not much talk about design thinking, however, now it\'s the word that is getting all of the attention. Especially with increasing number of organisations realising that creativity is the fuel for the innovation economy and are thus using Design Thinking approaches. As nothing says creativity better than a crazy colourful mess of Post-its smeared onto the wall rather than a bunch of people with suits sitting and talking around the table.'),s.a.createElement("div",{className:"two-sidebyside"},s.a.createElement("div",{className:"img left"},s.a.createElement(d.a,{fluid:e.data.postit1.childImageSharp.fluid,alt:""})),s.a.createElement("div",{className:"img right"},s.a.createElement(d.a,{fluid:e.data.postit2.childImageSharp.fluid,alt:""}))),s.a.createElement("p",{className:"full-text"},"The first time I started using them, it felt a bit odd and different. I was confused as to what and how much to write in that small space, how big/small to write? Or should I only just draw on it? How do I stick it so that its clear and understandable. I started thinking if I really needed to use them? As I could continue to use my own tried and tested method of jotting down all my research/ ideas, and processes on a simple white plain piece of paper or directly on the board? However, I decided why not give using the post-it a honest try before disregarding it."),s.a.createElement("p",{className:"full-text"},"After using it over and over again, I began to realise the benefits of it. Unlike Product Design, Service Design involves intangible/immaterial elements where representing the design process becomes a key activity. And the use of post-its allowed me to represent it visually in a organised manner. This was especially useful in the research phase, as it helped to categorise (colour coordinate) and arrange the different research findings, such as stakeholders and customer journeys, in a more structured way. The easy flexibility of post-its also allow for a quick way to map and capture different elements of a service (for e.g. allows to plot different things in the matrix mapping process and to track any changes). It also allowed me to holistically visualise the interconnectedness (which can often be messy) of the different elements/systems that make up the service."),s.a.createElement("div",{className:"image"},s.a.createElement(d.a,{fluid:e.data.postit3.childImageSharp.fluid,alt:""})),s.a.createElement("p",{className:"full-text"},"Although I was already familiar with the diverging and converging phases of the Double Diamond Process. I had never done it with the use of post-its. The flexibility of post-its meant that I could make mistakes as anything that was written on a post-it and pasted on the board wasn't final as I could easily remove any of the post-it and replace it with another one, as compared to writing it down directly on the board which seemed more final (as i was previously used to doing it when designing products). This flexibility which the post-it provided has changed the way I design, as I am more open now to change, in terms of ideas/concepts. Also during the diverging phase it is very easy to just put all the post-it (good or bad ideas) and paste it on the board, and just pull off the ideas which were not good and keep the good ones on the board and prioritise them.")),s.a.createElement("section",{className:"takeaways"},s.a.createElement("span",{class:"project-step-number"},"01"),s.a.createElement("h2",null,"takeaways"),s.a.createElement("p",{className:"full-text"},"I also feel that the ease of using a post-it and a pen is beneficial to people who do not have a design background and who are not skilled in drawing, visualising (graphic designers), rendering or model-making. Overall, they are low-tech, low-cost tools for modelling complexity and the ways in which people, ideas, objects and technologies flow, which is especially vital in visualising all the elements that make up a service."),s.a.createElement("div",{className:"image"},s.a.createElement(d.a,{fluid:e.data.postit4.childImageSharp.fluid,alt:""}))),s.a.createElement("section",{id:"footertopcta",className:"inner"},s.a.createElement("p",{className:"text arrow-back"},"head back to all",s.a.createElement("br",null),s.a.createElement("a",{href:"/my-thinking"}," my thinking")))))),s.a.createElement("div",{className:"footer-top"},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"tiles__next"},"next story"),s.a.createElement("div",{className:"tiles__wrapper"},s.a.createElement("div",{className:"tiles__content"},s.a.createElement("div",{className:"tiles__info"},s.a.createElement("a",{href:"/articles/designing-mobile-app-for-iot-products"},s.a.createElement("h2",{className:"tiles__title"},"designing mobile apps for IoT products.")),s.a.createElement("small",null,"DECEMBER 2017 - 3 mins read"),s.a.createElement("div",{className:"tiles__text"},"The continued growth of mobile devices has led to an increase in ubiquitous use of mobile apps. The transient needs of consumer call for personalisation, instant gratification, on-demand services and concerns over privacy & securtiy; which has brought upon unique challenges when it comes to designing UX/UI for these apps."))),s.a.createElement("div",{className:"tiles__image"},s.a.createElement("a",{href:"/articles/designing-mobile-app-for-iot-products"},s.a.createElement(d.a,{fluid:e.data.otherarticle.childImageSharp.fluid})))))))};var c="3020396904",u="2834649541"}}]);
//# sourceMappingURL=component---src-pages-articles-service-design-post-its-js-81476d1da967ac46938d.js.map