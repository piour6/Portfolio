/* ==========================================================================
   Plugins
   ========================================================================== */

/*! WOW - v1.0.2 - 2014-09-24
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,n,e){return n&&t(i.prototype,n),e&&t(i,e),i}}();function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var canvas=void 0,ctx=void 0,render=void 0,init=void 0,blob=void 0,Blob=function(){function t(){_classCallCheck(this,t),this.points=[]}return _createClass(t,[{key:"init",value:function(){for(var t=0;t<this.numPoints;t++){var i=new Point(this.divisional*(t+1),this);this.push(i)}}},{key:"render",value:function(){var t=this.canvas,i=this.ctx,n=(this.position,this.points),e=(this.radius,this.numPoints),o=(this.divisional,this.center);i.clearRect(0,0,t.width,t.height),n[0].solveWith(n[e-1],n[1]);var s=n[e-1].position,a=n[0].position,r=a;i.beginPath(),i.moveTo(o.x,o.y),i.moveTo((s.x+a.x)/2,(s.y+a.y)/2);for(var c=1;c<e;c++){n[c].solveWith(n[c-1],n[c+1]||n[0]);var u=n[c].position,h=(a.x+u.x)/2,l=(a.y+u.y)/2;i.quadraticCurveTo(a.x,a.y,h,l),i.fillStyle="#000000",a=u}h=(a.x+r.x)/2,l=(a.y+r.y)/2;i.quadraticCurveTo(a.x,a.y,h,l),i.fillStyle=this.color,i.fill(),i.strokeStyle="#000000",requestAnimationFrame(this.render.bind(this))}},{key:"push",value:function(t){t instanceof Point&&this.points.push(t)}},{key:"color",set:function(t){this._color=t},get:function(){return this._color||"#000000"}},{key:"canvas",set:function(t){t instanceof HTMLElement&&"canvas"===t.tagName.toLowerCase()&&(this._canvas=canvas,this.ctx=this._canvas.getContext("2d"))},get:function(){return this._canvas}},{key:"numPoints",set:function(t){t>2&&(this._points=t)},get:function(){return this._points||32}},{key:"radius",set:function(t){t>0&&(this._radius=t)},get:function(){return this._radius||150}},{key:"position",set:function(t){"object"==(void 0===t?"undefined":_typeof(t))&&t.x&&t.y&&(this._position=t)},get:function(){return this._position||{x:.5,y:.5}}},{key:"divisional",get:function(){return 2*Math.PI/this.numPoints}},{key:"center",get:function(){return{x:this.canvas.width*this.position.x,y:this.canvas.height*this.position.y}}},{key:"running",set:function(t){this._running=!0===t},get:function(){return!1!==this.running}}]),t}(),Point=function(){function t(i,n){_classCallCheck(this,t),this.parent=n,this.azimuth=Math.PI-i,this._components={x:Math.cos(this.azimuth),y:Math.sin(this.azimuth)},this.acceleration=.6*Math.random()-.3}return _createClass(t,[{key:"solveWith",value:function(t,i){this.acceleration=(-.3*this.radialEffect+(t.radialEffect-this.radialEffect)+(i.radialEffect-this.radialEffect))*this.elasticity-this.speed*this.friction}},{key:"acceleration",set:function(t){"number"==typeof t&&(this._acceleration=t,this.speed+=2*this._acceleration)},get:function(){return this._acceleration||0}},{key:"speed",set:function(t){"number"==typeof t&&(this._speed=t,this.radialEffect+=5*this._speed)},get:function(){return this._speed||0}},{key:"radialEffect",set:function(t){"number"==typeof t&&(this._radialEffect=t)},get:function(){return this._radialEffect||0}},{key:"position",get:function(){return{x:this.parent.center.x+this.components.x*(this.parent.radius+this.radialEffect),y:this.parent.center.y+this.components.y*(this.parent.radius+this.radialEffect)}}},{key:"components",get:function(){return this._components}},{key:"elasticity",set:function(t){"number"==typeof t&&(this._elasticity=t)},get:function(){return this._elasticity||.001}},{key:"friction",set:function(t){"number"==typeof t&&(this._friction=t)},get:function(){return this._friction||.0085}}]),t}();blob=new Blob,(init=function(){canvas=document.getElementById("blob");var t=function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight};window.addEventListener("resize",t),t();var i={x:0,y:0},n=!1;window.addEventListener("mousemove",function(t){var e=blob.center,o=t.clientX-e.x,s=t.clientY-e.y,a=Math.sqrt(o*o+s*s),r=null;if(blob.mousePos={x:e.x-t.clientX,y:e.y-t.clientY},a<blob.radius&&!1===n){var c={x:t.clientX-e.x,y:t.clientY-e.y};r=Math.atan2(c.y,c.x),n=!0}else if(a>blob.radius&&!0===n){var u={x:t.clientX-e.x,y:t.clientY-e.y};r=Math.atan2(u.y,u.x),n=!1,blob.color=null}if("number"==typeof r){var h=null,l=100;if(blob.points.forEach(function(t){Math.abs(r-t.azimuth)<l&&(h=t,l=Math.abs(r-t.azimuth))}),h){var f={x:i.x-t.clientX,y:i.y-t.clientY};(f=10*Math.sqrt(f.x*f.x+f.y*f.y))>100&&(f=100),h.acceleration=f/100*(n?-1:1)}}i.x=t.clientX,i.y=t.clientY}),blob.canvas=canvas,blob.init(),blob.render()})();

/* ==========================================================================
   Functions
   ========================================================================== */

function parallaxBg(){
	var x = $(this).scrollTop();
	var ratio_x_logo = parseInt(-x / 2);
	var ratio_x_blob = parseInt(-x / 2.5);
	var ratio_x_overlay = x / 800;
  var scale = 1 +  x / 2000;
  $(".logo").css({'marginTop': ratio_x_logo + 'px'});
  $("#blob").css({'marginTop': ratio_x_blob + 'px'});
  $(".intro_overlay").css({'opacity': ratio_x_overlay});
  // $('.logo').css({'transform': 'translate(-50%, -50%) scale('+scale+','+scale+')'});
  $(".section--intro").css({'backgroundPosition': '0% ' + ratio_x_logo + 'px'});
}

function openSidebar(sidebar){
  $("body").addClass("hasmenu");
  $(".nav__links li").removeClass("active");
  $(".sidebar, .sidebar_overlay").not(".sidebar[data-sidebar=projects]").removeClass("show");
  $(".sidebar[data-sidebar="+sidebar+"], .sidebar_overlay[data-sidebar="+sidebar+"], .sidebar__close").addClass("show");
  $(".nav__links li[data-sidebar="+sidebar+"]").addClass("active");
  stopScrolling();  
}

function closeSidebar(){
	$(".sidebar, .sidebar_overlay, .sidebar__close").removeClass("show");
	$("body").removeClass("hasmenu");
	$(".nav__links li").removeClass("active");
	continueScrolling();
}

function stopScrolling() {
    lastTop = $(window).scrollTop();
    widthBody = $("body").width();
    $('html').addClass('noscroll');
}

function continueScrolling() {
    $('html').removeClass('noscroll');
    $(window).scrollTop(lastTop);
    $('html').css({ width: "auto" });
}

$(document).ready(function(){

/* ==========================================================================
   WOW
   ========================================================================== */

	new WOW().init();

/* ==========================================================================
   Parallax intro
   ========================================================================== */

	parallaxBg();

	$(window).on("scroll resize",function(){
		parallaxBg();
	});

/* ==========================================================================
   Sidebar
   ========================================================================== */

   $(".trigger_sidebar").click(function(){
      var sidebar = $(this).data("sidebar");
      openSidebar(sidebar);
   });

   $(".hamburger").click(function(){
      if($("body").hasClass("hasmenu")){
   		 closeSidebar();
      } else {
        openSidebar("about");
      }
   });

/* ==========================================================================
   Projects
   ========================================================================== */

   $(".trigger_projects").click(function(){
   		$("html,body").stop().animate({"scrollTop": $(".section--projects").offset().top},1000);
   });

});