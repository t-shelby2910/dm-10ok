(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{161:function(t,s,n){var o=n(18),a=/"/g;t.exports=function(t,s,n,e){var i=String(o(t)),c="<"+s;return""!==n&&(c+=" "+n+'="'+String(e).replace(a,"&quot;")+'"'),c+">"+i+"</"+s+">"}},162:function(t,s,n){var e=n(2);t.exports=function(s){return e(function(){var t=""[s]('"');return t!==t.toLowerCase()||3<t.split('"').length})}},219:function(t,s,n){"use strict";var e=n(161),i=n(162)("fixed");n(7)({target:"String",proto:!0,forced:i},{fixed:function(){return e(this,"tt","","")}})},98:function(t,s,n){"use strict";n.r(s);n(63),n(219);var e=n(4),h=n.n(e),o=n(12);function i(t,s){for(var n,e=0;e<s.length;e++)(n=s[e]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var c=function(){function t(){(function(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")})(this,t),this.selectors={contentSticky:".js-contentSticky",contentChild:".js-contentChild",textHeading:".rv-h1-heading",textContainer:".rv-text-content",imgContainer:".rv-img-section",tabBtn:".js-tabit"},this.cssClass={textContainer:"rv-text-content",fixed:"has--fixed",stuck:"has--stuck"}}return function(t,s,n){s&&i(t.prototype,s),n&&i(t,n)}(t,[{key:"initEvent",value:function(){var n=this;this.$tabBtn.on("click",function(s){n.initSticky(),setTimeout(function(){var t=h()(s.currentTarget).parents(n.selectors.contentChild);t.removeClass(n.cssClass.fixed),t.removeClass(n.cssClass.stuck),n.$contentChild.css("transform","translateY(0px)"),n.initSticky()},1500)}),o.d.on("scroll",function(){n.initSticky()}),o.d.on("load",Object(o.f)(function(){n.initSticky()},!0,200)),o.d.on("resize",Object(o.f)(function(){n.initSticky()},!0,200))}},{key:"iteminviewport",value:function(t){var c=this;o.d.on("scroll load",function(){t.each(function(t,s){var n=h()(s),e=o.d.height(),i=n[0].getBoundingClientRect().top-e/1.1;c.isTouchDevice?n.addClass("showNow"):i<=0&&n.addClass("showSec")})})}},{key:"contentSticky",value:function(t,s){var n=h()(t),e=n.offset().top,i=n.find(this.selectors.contentChild)[0].getBoundingClientRect().height,c=e+n.height()-i,o=n[0].getBoundingClientRect().height-i,a=t.find(this.selectors.contentChild),r=t.find(this.selectors.imgContainer),l=r.height()>a.height()+50;0<r.find("picture").length&&(s<=e&&!a.hasClass(this.cssClass.stuck)&&l?(a.removeClass(this.cssClass.fixed),a.addClass(this.cssClass.stuck),a.css("transform","translateY(0)")):e<=s&&s<=c&&l?(a.addClass(this.cssClass.fixed),a.removeClass(this.cssClass.stuck),a.css("transform","translateY(0)")):c<=s&&!a.hasClass(this.cssClass.stuck)&&l&&(a.removeClass(this.cssClass.fixed),a.addClass(this.cssClass.stuck),a.css("transform","translateY(".concat(o,"px)"))))}},{key:"contentPlacement",value:function(){var l=this;this.$contentSticky.each(function(t,s){var n=h()(s),e=n.find(l.selectors.contentChild),i=e.parent().width(),c=e.parent()[0].getBoundingClientRect().left;(e.hasClass(l.cssClass.fixed)||e.hasClass(l.cssClass.stuck))&&e.css({width:i,left:c+15});var o=n.hasClass(l.cssClass.textContainer),a=n.find(l.selectors.textContainer),r=e.find(l.selectors.textHeading);o&&l.adjustTextPosition(e,a,r)})}},{key:"adjustTextPosition",value:function(t,s,n){var e=h()(s);o.e.isMobile||e.css({paddingTop:n.outerHeight(!0)}),e.css({minHeight:h()(t).height()})}},{key:"initSticky",value:function(){var e=this;if(!o.e.isMobile){var i=o.d.scrollTop();this.$contentSticky.each(function(t,s){var n=h()(s);e.contentSticky(n,i)}),this.contentPlacement()}}},{key:"initSelectors",value:function(){this.$contentSticky=h()(this.selectors.contentSticky),this.$contentChild=h()(this.selectors.contentChild),this.$tabBtn=h()(this.selectors.tabBtn)}},{key:"init",value:function(){this.isTouchDevice=o.e.isTouch,this.initSelectors(),this.initEvent(),this.iteminviewport(this.$contentSticky)}}]),t}();s.default=c}}]);