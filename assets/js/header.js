(window.webpackJsonp=window.webpackJsonp||[]).push([[21,27],{161:function(e,t,o){var r=o(18),a=/"/g;e.exports=function(e,t,o,s){var i=String(r(e)),n="<"+t;return""!==o&&(n+=" "+o+'="'+String(s).replace(a,"&quot;")+'"'),n+">"+i+"</"+t+">"}},162:function(e,t,o){var s=o(2);e.exports=function(t){return s(function(){var e=""[t]('"');return e!==e.toLowerCase()||3<e.split('"').length})}},214:function(e,t,o){"use strict";var s=o(161),i=o(162)("anchor");o(7)({target:"String",proto:!0,forced:i},{anchor:function(e){return s(this,"a","name",e)}})},215:function(e,t,o){var s,i,n;i=[t],void 0===(n="function"==typeof(s=function(e){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var r=!1;if("undefined"!=typeof window){var t={get passive(){r=!0}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),l=[],c=!1,u=-1,h=void 0,d=void 0,v=function(t){return l.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},f=function(e){var t=e||window.event;return!!v(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},o=function(){setTimeout(function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==h&&(document.body.style.overflow=h,h=void 0)})};e.disableBodyScroll=function(n,e){if(a){if(!n)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(n&&!l.some(function(e){return e.targetElement===n})){var t={targetElement:n,options:e||{}};l=[].concat(i(l),[t]),n.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},n.ontouchmove=function(e){var t,o,s,i;1===e.targetTouches.length&&(o=n,i=(t=e).targetTouches[0].clientY-u,v(t.target)||(o&&0===o.scrollTop&&0<i?f(t):(s=o)&&s.scrollHeight-s.scrollTop<=s.clientHeight&&i<0?f(t):t.stopPropagation()))},c||(document.addEventListener("touchmove",f,r?{passive:!1}:void 0),c=!0)}}else{s=e,setTimeout(function(){if(void 0===d){var e=!!s&&!0===s.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(d=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===h&&(h=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:n,options:e||{}};l=[].concat(i(l),[o])}var s},e.clearAllBodyScrollLocks=function(){a?(l.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),c&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),c=!1),l=[],u=-1):(o(),l=[])},e.enableBodyScroll=function(t){if(a){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,l=l.filter(function(e){return e.targetElement!==t}),c&&0===l.length&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),c=!1)}else(l=l.filter(function(e){return e.targetElement!==t})).length||o()}})?s.apply(t,i):s)||(e.exports=n)},66:function(e,t,o){"use strict";o.r(t);var s=o(4),i=o.n(s);o(173);function n(e,t){for(var o,s=0;s<t.length;s++)(o=t[s]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}var r=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.vScroll=".js-verScroll, .rv-list-primary",this.window=i()(window)}return function(e,t,o){t&&n(e.prototype,t),o&&n(e,o)}(e,[{key:"verticalScrollBar",value:function(e){e.mCustomScrollbar({contentTouchScroll:!0,documentTouchScroll:!0,mouseWheel:{enable:!0,scrollAmount:1e3,axis:"y",preventDefault:!0,deltaFactor:200},keyboard:{enable:!0}})}},{key:"destroy",value:function(e){i()(e).mCustomScrollbar("destroy")}},{key:"initSelectors",value:function(){this.$vScroll=i()(this.vScroll)}},{key:"init",value:function(){this.initSelectors(),this.verticalScrollBar(this.$vScroll)}}]),e}();t.default=r},91:function(e,t,o){"use strict";o.r(t);o(63),o(214);var s=o(4),c=o.n(s),i=o(215),n=o(66),u=o(12);function r(e,t){for(var o,s=0;s<t.length;s++)(o=t[s]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}var a=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.scrollParams={$minScrollTrigger:5,$lastScrollValue:0,$menuBuffer:150},this.selectors={wrapper:".rv-header",anchor:".rv-nav-trigger",overlay:".rv-nav-menu",rvLogo:"rv-revonic-logo",verticalLogo:".rv-vertical-logo",stickyLogo:".rv-sticky-logo",stickyBannerWithLogo:".rv-header + section > .rv-component.parentSticky",animatableComponent:".animateOnView",mainMenu:".rv-list-main-nav",hasSubMenu:".has-sub-menu",subMenuHeading:".rv-h6",subMenu:".rv-sub-menu",subMenuLinks:".rv-list-primary"},this.cssClass={menuActive:"rv-nav-expanded",active:"active",expand:"expand",collapse:"collapse",hidden:"invisible",pageTop:"rv-page-top",scrolled:"rv-scrolled",noScroll:"restrict-scroll",upScroll:"nav-up",downScroll:"nav-down",startAnimation:"animate",restrictAnimation:"static",animateOnView:"animateOnView",isTouchDevice:"touchDevice"}}return function(e,t,o){t&&r(e.prototype,t),o&&r(e,o)}(e,[{key:"onHeaderClick",value:function(){this.$wrapper.toggleClass(this.cssClass.menuActive),this.$anchor.toggleClass(this.cssClass.active);var e=this.$wrapper.hasClass(this.cssClass.menuActive);this.$overlay.toggleClass(this.cssClass.collapse,!e).toggleClass(this.cssClass.expand,e),u.a.toggleClass(this.cssClass.noScroll),this.$header.removeClass(this.cssClass.upScroll),u.a.hasClass(this.cssClass.noScroll)?Object(i.disableBodyScroll)(u.a):Object(i.enableBodyScroll)(u.a),this.isTouchDevice||this.setSubMenuScroll()}},{key:"adaptiveHeader",value:function(e,t){var o=this.$headerHeight,s=this.$windowHeight,i=this.scrollParams.$minScrollTrigger;o<t&&t>this.scrollParams.$lastScrollValue?this.$header.removeClass(this.cssClass.downScroll).addClass(this.cssClass.upScroll):(i<=e||t<=o)&&this.$header.removeClass(this.cssClass.upScroll).addClass(this.cssClass.downScroll),!this.isStickyLogoBehaviour||t<=s/2||(this.$header.addClass(this.cssClass.scrolled),this.$verticalLogoWrap.addClass(this.cssClass.hidden)),this.scrollParams.$lastScrollValue=t}},{key:"animateOnScroll",value:function(e){var r=this;e.each(function(e,t){var o=c()(t),s=o.offset().top,i=r.$windowHeight,n=r.$scrollPosition+i;r.isTouchDevice?r.toggleAnimation(o,r.cssClass.restrictAnimation,r.cssClass.animateOnView):s<n&&r.toggleAnimation(o,r.cssClass.startAnimation,r.cssClass.animateOnView)})}},{key:"toggleAnimation",value:function(e,t,o){e.addClass(t).removeClass(o)}},{key:"initFeaturesOnDevice",value:function(){this.$wrapper.find(this.selectors.hasSubMenu).addClass(this.cssClass.isTouchDevice),this.$stickyHeaderLogo.find(this.selectors.rvLogo).show(),this.$stickyBannerLogo.hide()}},{key:"initSelectors",value:function(){this.$wrapper=c()(this.selectors.wrapper),this.$anchor=this.$wrapper.find(this.selectors.anchor),this.$overlay=this.$wrapper.find(this.selectors.overlay),this.$stickyLogoComponent=c()(this.selectors.stickyBannerWithLogo),this.$stickyHeaderLogo=this.$wrapper.find(this.selectors.stickyLogo),this.$stickyBannerLogo=this.$stickyLogoComponent.find(this.selectors.stickyLogo),this.$verticalLogoWrap=c()(this.selectors.verticalLogo),this.$animatableComponent=c()(this.selectors.animatableComponent)}},{key:"initEvents",value:function(){var e=this;this.$anchor.on("click.header",this.onHeaderClick.bind(this)),this.isStickyLogoBehaviour=!1,this.$stickyHeaderLogo[0]&&this.$stickyBannerLogo[0]&&(this.isStickyLogoBehaviour=!0),u.d.on("scroll load",Object(u.j)(function(){e.$scrollPosition=u.d.scrollTop(),e.scrollTrigger=(e.scrollParams.$lastScrollValue-e.$scrollPosition)/u.d.height()*100,e.adaptiveHeader(e.scrollTrigger,e.$scrollPosition),0<e.$animatableComponent.length&&e.animateOnScroll(e.$animatableComponent)})),this.isTouchDevice&&this.initFeaturesOnDevice()}},{key:"setSubMenuScroll",value:function(){var n=this,r=u.d.height(),e=Math.abs(this.$mainMenu.offset().top||0),a=this.$mainMenu.height(),t=this.scrollParams.$menuBuffer,o=this.$mainMenu.find(this.selectors.hasSubMenu),l=e+a+t;o.each(function(e,t){n.$subMenu=c()(t).find(n.selectors.subMenu);var o=n.$subMenu.height(),s=r<=(l=l<=o?o:l),i=c()(t).find(n.selectors.subMenuHeading).outerHeight(!0);n.$subMenuLinks=n.$subMenu.find(n.selectors.subMenuLinks),s&&n.$subMenuLinks.css("maxHeight",a-i)})}},{key:"destroy",value:function(){this.$header.off("click.header")}},{key:"init",value:function(){this.isTouchDevice=u.e.isTouch,this.$header=c()(this.selectors.wrapper),this.$mainMenu=this.$header.find(this.selectors.mainMenu),this.$headerHeight=this.$header.outerHeight(),this.$windowHeight=u.d.height(),this.$docHeight=u.b.height(),this.initSelectors(),this.initEvents(),this.malihuCustonScrollbar=new n.default,this.malihuCustonScrollbar.init()}}]),e}();t.default=a}}]);