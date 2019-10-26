window._pa = window._pa || {};
_pa.segments = [{"name":"UX Audit Sign Ups","id":13965679,"regex":"/thank\\-you\\-sign\\-up\\-ux\\-audit/?([?#].*)*$"},{"name":"All visitors","id":13812970,"regex":".*"},{"name":"UX Audit Landing Page","id":13965725,"regex":"/sign\\-up\\-ux\\-audit/?([?#].*)*$"}];
_pa.conversions = [{"name":"UX Audit Sign Up","id":"1017207","regex":"/thank\\-you\\-sign\\-up\\-ux\\-audit/?([?#].*)*$"}];
_pa.conversionEvents = [];
_pa.segmentEvents = [];
_pa.thirdPartyTags = [];
_pa.thirdPartyTagEvents = [];
_pa.allVisitorsSegmentId = 13812970;
_pa.clickThroughWindow = 30;
_pa.viewThroughWindow = 30;
_pa.rtbId = '84203';
_pa.siteId = '5b47cba4bbaefc4b91000089';
_pa.crossDevice = true;
!function(){function e(e){if("undefined"!=typeof window.fbq&&"undefined"!=typeof _pa.facebookPixelId){var a="https://www.facebook.com/tr?id="+_pa.facebookPixelId;a+="&ev=ViewContent",a+="&cd[rtb_id]="+e.id,a+="&noscript=1",_pa.createImageTag("fb_events",e.id,a,e.name)}}function a(e){"undefined"!=typeof window.fbq&&"undefined"!=typeof _pa.facebookPixelId&&fbq("trackSingle",_pa.facebookPixelId,"ViewContent",{content_ids:[e],content_type:"product"})}function t(e,a,t){if(null==t||isNaN(t))var n=_pa.pixelHost+"seg?t=2&add="+e;else var n=_pa.pixelHost+"seg?t=2&add="+e+":"+t;_pa.createImageTag("segments",e,n,a)}function n(e){var a=_pa.paRtbHost+"seg/?add="+e;return a+="&source=js_tag",_pa.rtbId&&(a+="&a_id="+_pa.rtbId),_pa.obscureIP&&(a+="&obscure_ip=1"),a}function o(e,a){var t=n(e);h?_pa.createImageTag("paRtbSegments",e,t,a):m.push({id:e,name:a})}function r(){if(h=!0,0!==m.length){for(var e=[],a=[],t=0;t<m.length;t++){var o=m[t],r=o.id,p=o.name;e.push(r),a.push(p)}var r=e.join(","),p=a.join(","),i=n(r);_pa.createImageTag("paRtbSegments",r,i,p)}}function p(e,a,t){a=a||_pa.orderId,t=t||_pa.revenue;var n=e.id,o=e.name,r=_pa.rtbId;if(c(n,o,a,t,r),e.cofires)for(var p=0;p<e.cofires.length;p++){var i=e.cofires[p];c(i.appnexus_id,i.name,a,t,i.rtb_id)}"undefined"!=typeof window.fbq&&_pa.fireFacebookConversion(e,a,t)}function i(e,a,t){var n=_pa.paRtbHost+"px/?id="+e+t;return n+="&source=js_tag",a&&(n+="&a_id="+a),_pa.obscureIP&&(n+="&obscure_ip=1"),"number"==typeof _pa.clickThroughWindow&&(n+="&click_through_window="+_pa.clickThroughWindow),"number"==typeof _pa.viewThroughWindow&&(n+="&view_through_window="+_pa.viewThroughWindow),n}function c(e,a,t,n,o){var r="";t&&""!==t&&(t=t.toString().replace(/@.*/,"@"),r+="&order_id="+encodeURIComponent(t)),n&&""!==n&&(r+="&value="+encodeURIComponent(n)),r+="&other="+function(){for(var e="",a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=0;16>t;t++){var n=Math.floor(Math.random()*a.length);e+=a.charAt(n)}return e}();var p=_pa.pixelHost+"px?t=2&id="+e+r,c=i(e,o,r);_pa.createImageTag("conversions",e,p,a),_pa.createImageTag("paRtbConversions",e,c,a)}function d(e){switch(e.type){case"image_tag":_pa.createImageTag("thirdPartyTag",void 0,e.content,e.name);break;case"script_tag":v(e.content);break;case"script_text":g(e.content)}}function s(e){for(var a=e.shift(),t=a.split("."),n=_pa,o=0;o<t.length;o++)n=n[t[o]];var r=n.apply(_pa,e);return _(a,e),r}function _(e,a){var t=_pa.callbacks[e];if("undefined"!=typeof t)for(var n=0;n<t.length;n++)t[n].apply(_pa,a)}function f(){for(var e,a=Array.prototype.slice.call(arguments,0),t=a.shift(),n=t.split("."),o=_pa,r=0;r<n.length;r++)o=o[n[r]],e=n[r];o.apply(_pa,a),_(e,a)}function u(){var e=window.navigator.userAgent;(/MSIE 7/.test(e)||/(iPod|iPhone|iPad)/.test(e)&&/AppleWebKit/.test(e))&&(_pa.skip=!0)}function l(){var e=("https:"==document.location.protocol?"https:":"http:")+"//pixel-geo.prfct.co/tagjs",a=[];_pa.rtbId&&a.push("a_id="+_pa.rtbId),_pa.obscureIP&&a.push("obscure_ip=1"),a.push("source=js_tag"),a.length>0&&(e+="?"+a.join("&")),v(e)}function v(e){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,_pa.head.appendChild(a)}function g(e){var a=document.createElement("script");a.type="text/javascript";var t=document.createTextNode(e);a.appendChild(t),_pa.head.appendChild(a)}_pa.head=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];var h=!1,m=[];_pa.ready={looper:!1,onload:!1};var b=["conversions","paRtbConversions","fb_conversions"];_pa.fired={segments:[],conversions:[],fb_conversions:[],fb_events:[]},_pa.url=document.location.href,_pa.pixelHost=("https:"===document.location.protocol?"https://secure":"http://ib")+".adnxs.com/",_pa.paRtbHost=("https:"===document.location.protocol?"https://":"http://")+"pixel-geo.prfct.co/",_pa.callbacks={},u(),_pa.init=function(){l(),_pa.detect(),_pa.initQ(),r()},_pa.addFired=function(e,a){"undefined"==typeof _pa.fired[e]&&(_pa.fired[e]=[]),_pa.fired[e].push(a)},_pa.detect=function(){for(var e=0;e<_pa.segments.length;e++){var a=_pa.segments[e];void 0!==a.regex&&_pa.url.match(new RegExp(a.regex,"i"))?f("fireSegment",a):void 0!==a.query&&_pa.url.match(new RegExp(a.query,"i"))?f("fireSegment",a):void 0!==a.path&&_pa.url.match(new RegExp(a.path,"i"))&&f("fireSegment",a)}for(var e=0;e<_pa.conversions.length;e++){var t=_pa.conversions[e];_pa.url.match(new RegExp(t.regex,"i"))&&p(t)}for(var e=0;e<_pa.thirdPartyTags.length;e++){var n=_pa.thirdPartyTags[e];_pa.url.match(new RegExp(n.regex,"i"))&&d(n)}_pa.productId&&_pa.trackProduct(_pa.productId)},_pa.track=function(e,a){a="undefined"!=typeof a?a:{};var t=_pa.trackSegments(e,a),n=_pa.trackConversions(e,a),o=_pa.trackThirdPartyTags(e);return t||n||o},_pa.trackSegments=function(e,a){for(var t=!1,n=0;n<_pa.segmentEvents.length;n++){var o=_pa.segmentEvents[n];o.name===e&&(t=!0,f("fireSegment",o,a.segment_value))}return t},_pa.trackConversions=function(e,a){for(var t=!1,n=0;n<_pa.conversionEvents.length;n++){var o=_pa.conversionEvents[n];o.name===e&&(t=!0,p(o,a.orderId,a.revenue))}return t},_pa.trackThirdPartyTags=function(e){for(var a=!1,t=0;t<_pa.thirdPartyTagEvents.length;t++){var n=_pa.thirdPartyTagEvents[t];n.event===e&&(a=!0,d(n))}return a},_pa.trackProduct=function(e){if(e&&0!==encodeURIComponent(e).length&&(_pa.productId=e,_pa.allVisitorsSegmentId)){var t=_pa.allVisitorsSegmentId+":"+encodeURIComponent(_pa.productId),o=n(t);_pa.createImageTag("paRtbSegments",_pa.allVisitorsSegmentId,o,"product track"),"undefined"!=typeof window.fbq&&a(e)}},_pa.fireLoadEvents=function(){if("undefined"!=typeof _pa.onLoadEvent)if("function"==typeof _pa.onLoadEvent)_pa.onLoadEvent();else if("string"==typeof _pa.onLoadEvent)for(var e=_pa.onLoadEvent.split(","),a=0;a<e.length;a++){var t=e[a];_pa.track(t)}},_pa.createImageTag=function(e,a,t,n){if(!_pa.skip){for(var o=!1,r=0;r<b.length;r++)e===b[r]&&(o=!0);_pa.pixelPlacer.place(t,o),_pa.addFired(e,{id:a,name:n})}},_pa.looperReady=function(){_pa.ready.looper=!0,_pa.fireWhenReady()},_pa.fireWhenReady=function(){_pa.ready.looper&&_pa.ready.onload&&(_pa.fireLoadEvents(),_pa.pixelPlacer.activate())},_pa.fireSegment=function(a,n){t(a.id,a.name,n),o(a.id,a.name),e(a)},_pa.initQ=function(){if("undefined"!=typeof window._pq)for(var e=0;e<_pq.length;e++){var a=_pq[e];s(a)}window._pq={push:function(e){return s(e)}}},_pa.addListener=function(e,a){"undefined"==typeof _pa.callbacks[e]&&(_pa.callbacks[e]=[]),_pa.callbacks[e].push(a)},_pa.removeListener=function(e,a){for(var t=_pa.callbacks[e],n=t.length;n--;)t[n]===a&&t.splice(n,1)},_pa.pixelPlacer=function(){function e(){o=!0,t()}function a(e,a){o||a?n(e):r.push(e)}function t(){for(var e;e=r.pop();)n(e)}function n(e){var a=document.createElement("img");a.src=e,a.width=1,a.height=1,a.border=0,_pa.head.appendChild(a)}var o=!1,r=[];return{activate:e,place:a}}();var y={cd:function(){return _pa.crossDevice}};_pa.setPartners=function(e){var a,t,n=0;for(var o in e){if(a=e[o],t=!0,"object"==typeof a)for(var r;r<a.length;r++){var p=a[r];criteriaFunction=y[p],t=t&&criteriaFunction()}t&&("undefined"==typeof _pa.partnerLimit||n<_pa.partnerLimit)&&(_pa.pixelPlacer.place(_pa.paRtbHost+"cs/?partnerId="+o),n++)}},_pa.fireFacebookConversion=function(e,a,t){if("undefined"!=typeof _pa.facebookPixelId){var n="https://www.facebook.com/tr?id=",o=n+_pa.facebookPixelId;o+="&ev=CONTENT_VIEW",o+="&cd[appnexus_id]="+e.id.toString(),"undefined"!=typeof a&&(o+="&cd[content_ids]="+encodeURIComponent(a)),"undefined"!=typeof t&&(o+="&cd[value]="+encodeURIComponent(t),o+="&cd[currency]=USD"),o+="&noscript=1",_pa.createImageTag("fb_conversions",e.id,o,e.name)}}}();	
		(function () {
  _pa.facebookPixelId = "569532076776724";
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','//connect.facebook.net/en_US/fbevents.js');
  fbq('init', _pa.facebookPixelId);
  fbq('track', 'PageView');
})();

	
(function(){
	_pa.init();
	if (_pa.initAfterLoad) {
		if (window.document && window.document.readyState === "complete") {
			_pa.ready.onload = true;
			_pa.fireWhenReady();
		} else {
			function hookLoad(handler) {
				if(window.addEventListener) {
					window.addEventListener("load", handler, false);
				} else if(window.attachEvent) {
					window.attachEvent("onload", handler);
				}
			}
			hookLoad(function() {
				_pa.ready.onload = true;
				_pa.fireWhenReady();
			});
		}
	} else {
		_pa.ready.onload = true;
		_pa.fireWhenReady();
	}
})();