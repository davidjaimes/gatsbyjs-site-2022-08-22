(self.webpackChunkdavidjaimes_com=self.webpackChunkdavidjaimes_com||[]).push([[2],{7526:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];function n(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,r);null!=t&&(a=t)}})),a}return(0,o.default)(n)};var n,a=r(1060),o=(n=a)&&n.__esModule?n:{default:n};e.exports=t.default},1060:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,n,a,o,i){var c=a||"<<anonymous>>",l=i||n;if(null==r[n])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[r,n,c,o,l].concat(u))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},9503:function(e,t,r){"use strict";var n=r(7294).createContext(null);n.displayName="CardContext",t.Z=n},7408:function(e,t,r){"use strict";var n=r(2122),a=r(9756),o=r(5900),i=r.n(o),c=r(7294),l=r(9541),s=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],f=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,f=e.as,d=void 0===f?"div":f,p=(0,a.Z)(e,s),m=(0,l.vE)(r,"col"),v=[],y=[];return u.forEach((function(e){var t,r,n,a=p[e];if(delete p[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+m+i:""+m+i+"-"+t),null!=n&&y.push("order"+i+"-"+n),null!=r&&y.push("offset"+i+"-"+r)})),v.length||v.push(m),c.createElement(d,(0,n.Z)({},p,{ref:t,className:i().apply(void 0,[o].concat(v,y))}))}));f.displayName="Col",t.Z=f},6187:function(e,t,r){"use strict";var n=r(2122),a=r(9756),o=r(5900),i=r.n(o),c=r(7294),l=r(9541),s=["bsPrefix","fluid","as","className"],u=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,u=e.as,f=void 0===u?"div":u,d=e.className,p=(0,a.Z)(e,s),m=(0,l.vE)(r,"container"),v="string"==typeof o?"-"+o:"-fluid";return c.createElement(f,(0,n.Z)({ref:t},p,{className:i()(d,o?""+m+v:m)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.Z=u},994:function(e,t,r){"use strict";var n=r(2122),a=r(9756),o=r(5900),i=r.n(o),c=r(7294),l=r(9541),s=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],f=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,f=e.noGutters,d=e.as,p=void 0===d?"div":d,m=(0,a.Z)(e,s),v=(0,l.vE)(r,"row"),y=v+"-cols",b=[];return u.forEach((function(e){var t,r=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&b.push(""+y+n+"-"+t)})),c.createElement(p,(0,n.Z)({ref:t},m,{className:i().apply(void 0,[o,v,f&&"no-gutters"].concat(b))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.Z=f},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return ve}});var n,a,o,i,c=r(5697),l=r.n(c),s=r(4839),u=r.n(s),f=r(2993),d=r.n(f),p=r(7294),m=r(6494),v=r.n(m),y="bodyAttributes",b="htmlAttributes",h="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",T="href",x="http-equiv",C="innerHTML",N="itemprop",O="name",S="property",A="rel",P="src",k="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",I="defer",L="encodeSpecialCharacters",R="onChangeClientState",M="titleTemplate",_=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),K=[g.NOSCRIPT,g.SCRIPT,g.STYLE],D="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,g.TITLE),r=$(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,Z);return t||n||void 0},W=function(e){return $(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===A&&"canonical"===e[r].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==w&&c!==N||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=v()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Q=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:r.g.requestAnimationFrame||Q,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(g.BODY,n),le(g.HTML,a),ce(f,d);var p={baseTag:se(g.BASE,r),linkTags:se(g.LINK,o),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},m={},v={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(v[e]=p[e].oldTags)})),t&&t(),l(e,m,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(g.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(D):r.getAttribute(D)!==i.join(",")&&r.setAttribute(D,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(D,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,a=fe(r,n),[p.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),p.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(g.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(b,a,n),link:de(g.LINK,o,n),meta:de(g.META,i,n),noscript:de(g.NOSCRIPT,c,n),script:de(g.SCRIPT,l,n),style:de(g.STYLE,s,n),title:de(g.TITLE,{title:f,titleAttributes:d},n)}},me=u()((function(e){return{baseTag:J([T,k],e),bodyAttributes:G(y,e),defer:$(e,I),encode:$(e,L),htmlAttributes:G(b,e),linkTags:X(g.LINK,[A,T],e),metaTags:X(g.META,[O,E,x,S,N],e),noscriptTags:X(g.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:X(g.SCRIPT,[P,C],e),styleTags:X(g.STYLE,[w],e),title:V(e),titleAttributes:G(h,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),ve=(a=me,i=o=function(e){function t(){return B(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return H({},a,((t={})[n.type]=i,t.titleAttributes=H({},o),t));case g.BODY:return H({},a,{bodyAttributes:H({},o)});case g.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.createElement(a,n)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ve.renderStatic=ve.rewind},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},5216:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(6187),o=r(994),i=r(7408),c=r(3201);function l(){return n.createElement(a.Z,{className:"mt-5 mb-5"},n.createElement(o.Z,{className:"justify-content-center mt-2 mb-2"},n.createElement(i.Z,{style:{maxWidth:"768px"},className:"pl-0 pr-0"},n.createElement("p",{className:"text-center"},n.createElement(c.hJX,{size:30,color:"grey"}),"     ",n.createElement(c.ltd,{size:30,color:"grey"}),"     ",n.createElement(c.fWC,{size:30,color:"grey"}),"     ",n.createElement(c.Zf_,{size:30,color:"grey"}),"     ",n.createElement(c.Am9,{size:30,color:"grey"}),"     ",n.createElement(c.V2E,{size:30,color:"grey"})),n.createElement("p",{className:"text-dark text-center",style:{fontSize:"13px"}},"Copyright © 2021 David Jaimes. All rights reserved."),n.createElement("p",{className:"text-dark text-center mb-5",style:{fontSize:"15px"}},"Yo ",n.createElement("span",{style:{color:"#f07199"}},"♥")," Naxiely"))))}},260:function(e,t,r){"use strict";r.d(t,{Z:function(){return ye}});var n=r(7294),a=r(2122),o=r(9756),i=r(5900),c=r.n(i),l=r(5513),s=r(8870),u=r(9541),f=["bsPrefix","className","as"],d=n.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,l=e.as,s=(0,o.Z)(e,f);r=(0,u.vE)(r,"navbar-brand");var d=l||(s.href?"a":"span");return n.createElement(d,(0,a.Z)({},s,{ref:t,className:c()(i,r)}))}));d.displayName="NavbarBrand";var p,m=d,v=r(5175),y=r(5160),b=r(1714),h=r(9758),g=r(9059),E=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],w={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function T(e,t){var r=t["offset"+e[0].toUpperCase()+e.slice(1)],n=w[e];return r+parseInt((0,v.Z)(t,n[0]),10)+parseInt((0,v.Z)(t,n[1]),10)}var x=((p={})[y.Wj]="collapse",p[y.Ix]="collapsing",p[y.d0]="collapsing",p[y.cn]="collapse show",p),C={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:T},N=n.forwardRef((function(e,t){var r=e.onEnter,i=e.onEntering,l=e.onEntered,s=e.onExit,u=e.onExiting,f=e.className,d=e.children,p=e.dimension,m=void 0===p?"height":p,v=e.getDimensionValue,w=void 0===v?T:v,C=(0,o.Z)(e,E),N="function"==typeof m?m():m,O=(0,n.useMemo)((function(){return(0,h.Z)((function(e){e.style[N]="0"}),r)}),[N,r]),S=(0,n.useMemo)((function(){return(0,h.Z)((function(e){var t="scroll"+N[0].toUpperCase()+N.slice(1);e.style[N]=e[t]+"px"}),i)}),[N,i]),A=(0,n.useMemo)((function(){return(0,h.Z)((function(e){e.style[N]=null}),l)}),[N,l]),P=(0,n.useMemo)((function(){return(0,h.Z)((function(e){e.style[N]=w(N,e)+"px",(0,g.Z)(e)}),s)}),[s,w,N]),k=(0,n.useMemo)((function(){return(0,h.Z)((function(e){e.style[N]=null}),u)}),[N,u]);return n.createElement(y.ZP,(0,a.Z)({ref:t,addEndListener:b.Z},C,{"aria-expanded":C.role?C.in:null,onEnter:O,onEntering:S,onEntered:A,onExit:P,onExiting:k}),(function(e,t){return n.cloneElement(d,(0,a.Z)({},t,{className:c()(f,d.props.className,x[e],"width"===N&&"width")}))}))}));N.defaultProps=C;var O=N,S=n.createContext(null);S.displayName="NavbarContext";var A=S,P=["children","bsPrefix"],k=n.forwardRef((function(e,t){var r=e.children,i=e.bsPrefix,c=(0,o.Z)(e,P);return i=(0,u.vE)(i,"navbar-collapse"),n.createElement(A.Consumer,null,(function(e){return n.createElement(O,(0,a.Z)({in:!(!e||!e.expanded)},c),n.createElement("div",{ref:t,className:i},r))}))}));k.displayName="NavbarCollapse";var j=k,Z=r(4731),I=["bsPrefix","className","children","label","as","onClick"],L=n.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,l=e.children,s=e.label,f=e.as,d=void 0===f?"button":f,p=e.onClick,m=(0,o.Z)(e,I);r=(0,u.vE)(r,"navbar-toggler");var v=(0,n.useContext)(A)||{},y=v.onToggle,b=v.expanded,h=(0,Z.Z)((function(e){p&&p(e),y&&y()}));return"button"===d&&(m.type="button"),n.createElement(d,(0,a.Z)({},m,{ref:t,onClick:h,"aria-label":s,className:c()(i,r,!b&&"collapsed")}),l||n.createElement("span",{className:r+"-icon"}))}));L.displayName="NavbarToggle",L.defaultProps={label:"Toggle navigation"};var R=L,M=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},_=n.createContext(null),K=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],D=(0,s.Z)("navbar-text",{Component:"span"}),z=n.forwardRef((function(e,t){var r=(0,l.Ch)(e,{expanded:"onToggle"}),i=r.bsPrefix,s=r.expand,f=r.variant,d=r.bg,p=r.fixed,m=r.sticky,v=r.className,y=r.children,b=r.as,h=void 0===b?"nav":b,g=r.expanded,E=r.onToggle,w=r.onSelect,T=r.collapseOnSelect,x=(0,o.Z)(r,K),C=(0,u.vE)(i,"navbar"),N=(0,n.useCallback)((function(){w&&w.apply(void 0,arguments),T&&g&&E&&E(!1)}),[w,T,g,E]);void 0===x.role&&"nav"!==h&&(x.role="navigation");var O=C+"-expand";"string"==typeof s&&(O=O+"-"+s);var S=(0,n.useMemo)((function(){return{onToggle:function(){return E&&E(!g)},bsPrefix:C,expanded:!!g}}),[C,g,E]);return n.createElement(A.Provider,{value:S},n.createElement(_.Provider,{value:N},n.createElement(h,(0,a.Z)({ref:t},x,{className:c()(v,C,s&&O,f&&C+"-"+f,d&&"bg-"+d,m&&"sticky-"+m,p&&"fixed-"+p)}),y)))}));z.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},z.displayName="Navbar",z.Brand=m,z.Toggle=R,z.Collapse=j,z.Text=D;var B=z,q=r(6306),H=["bsPrefix","variant","size","active","className","block","type","as"],U=n.forwardRef((function(e,t){var r=e.bsPrefix,i=e.variant,l=e.size,s=e.active,f=e.className,d=e.block,p=e.type,m=e.as,v=(0,o.Z)(e,H),y=(0,u.vE)(r,"btn"),b=c()(f,y,s&&"active",i&&y+"-"+i,d&&y+"-block",l&&y+"-"+l);if(v.href)return n.createElement(q.Z,(0,a.Z)({},v,{as:m,ref:t,className:c()(b,v.disabled&&"disabled")}));t&&(v.ref=t),p?v.type=p:m||(v.type="button");var h=m||"button";return n.createElement(h,(0,a.Z)({},v,{className:b}))}));U.displayName="Button",U.defaultProps={variant:"primary",active:!1,disabled:!1};var F=U,Y=(r(7526),r(9503)),V=Function.prototype.bind.call(Function.prototype.call,[].slice);var W=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var G=function(e,t){return(0,n.useMemo)((function(){return function(e,t){var r=W(e),n=W(t);return function(e){r&&r(e),n&&n(e)}}(e,t)}),[e,t])},J=n.createContext(null);J.displayName="NavContext";var X=J,$=n.createContext(null),Q=["as","onSelect","activeKey","role","onKeyDown"],ee=function(){},te=n.forwardRef((function(e,t){var r,i,c=e.as,l=void 0===c?"ul":c,s=e.onSelect,u=e.activeKey,f=e.role,d=e.onKeyDown,p=(0,o.Z)(e,Q),m=(0,n.useReducer)((function(e){return!e}),!1)[1],v=(0,n.useRef)(!1),y=(0,n.useContext)(_),b=(0,n.useContext)($);b&&(f=f||"tablist",u=b.activeKey,r=b.getControlledId,i=b.getControllerId);var h=(0,n.useRef)(null),g=function(e){var t=h.current;if(!t)return null;var r,n=(r="[data-rb-event-key]:not(.disabled)",V(t.querySelectorAll(r))),a=t.querySelector(".active");if(!a)return null;var o=n.indexOf(a);if(-1===o)return null;var i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},E=function(e,t){null!=e&&(s&&s(e,t),y&&y(e,t))};(0,n.useEffect)((function(){if(h.current&&v.current){var e=h.current.querySelector("[data-rb-event-key].active");e&&e.focus()}v.current=!1}));var w=G(t,h);return n.createElement(_.Provider,{value:E},n.createElement(X.Provider,{value:{role:f,activeKey:M(u),getControlledId:r||ee,getControllerId:i||ee}},n.createElement(l,(0,a.Z)({},p,{onKeyDown:function(e){var t;switch(d&&d(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),v.current=!0,m())},ref:w,role:f}))))})),re=["bsPrefix","className","children","as"],ne=n.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,l=e.children,s=e.as,f=void 0===s?"div":s,d=(0,o.Z)(e,re);return r=(0,u.vE)(r,"nav-item"),n.createElement(f,(0,a.Z)({},d,{ref:t,className:c()(i,r)}),l)}));ne.displayName="NavItem";var ae=ne,oe=(r(2473),["active","className","eventKey","onSelect","onClick","as"]),ie=n.forwardRef((function(e,t){var r=e.active,i=e.className,l=e.eventKey,s=e.onSelect,u=e.onClick,f=e.as,d=(0,o.Z)(e,oe),p=M(l,d.href),m=(0,n.useContext)(_),v=(0,n.useContext)(X),y=r;if(v){d.role||"tablist"!==v.role||(d.role="tab");var b=v.getControllerId(p),h=v.getControlledId(p);d["data-rb-event-key"]=p,d.id=b||d.id,d["aria-controls"]=h||d["aria-controls"],y=null==r&&null!=p?v.activeKey===p:r}"tab"===d.role&&(d.disabled&&(d.tabIndex=-1,d["aria-disabled"]=!0),d["aria-selected"]=y);var g=(0,Z.Z)((function(e){u&&u(e),null!=p&&(s&&s(p,e),m&&m(p,e))}));return n.createElement(f,(0,a.Z)({},d,{ref:t,onClick:g,className:c()(i,y&&"active")}))}));ie.defaultProps={disabled:!1};var ce=ie,le=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],se={disabled:!1,as:q.Z},ue=n.forwardRef((function(e,t){var r=e.bsPrefix,i=e.disabled,l=e.className,s=e.href,f=e.eventKey,d=e.onSelect,p=e.as,m=(0,o.Z)(e,le);return r=(0,u.vE)(r,"nav-link"),n.createElement(ce,(0,a.Z)({},m,{href:s,ref:t,eventKey:f,as:p,disabled:i,onSelect:d,className:c()(l,r,i&&"disabled")}))}));ue.displayName="NavLink",ue.defaultProps=se;var fe=ue,de=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],pe=n.forwardRef((function(e,t){var r,i,s,f=(0,l.Ch)(e,{activeKey:"onSelect"}),d=f.as,p=void 0===d?"div":d,m=f.bsPrefix,v=f.variant,y=f.fill,b=f.justify,h=f.navbar,g=f.navbarScroll,E=f.className,w=f.children,T=f.activeKey,x=(0,o.Z)(f,de),C=(0,u.vE)(m,"nav"),N=!1,O=(0,n.useContext)(A),S=(0,n.useContext)(Y.Z);return O?(i=O.bsPrefix,N=null==h||h):S&&(s=S.cardHeaderBsPrefix),n.createElement(te,(0,a.Z)({as:p,ref:t,activeKey:T,className:c()(E,(r={},r[C]=!N,r[i+"-nav"]=N,r[i+"-nav-scroll"]=N&&g,r[s+"-"+v]=!!s,r[C+"-"+v]=!!v,r[C+"-fill"]=y,r[C+"-justified"]=b,r))},x),w)}));pe.displayName="Nav",pe.defaultProps={justify:!1,fill:!1},pe.Item=ae,pe.Link=fe;var me=pe,ve=r(3201);function ye(){return n.createElement(B,{collapseOnSelect:!0,expand:"lg",className:"shadow-sm",bg:"light",variant:"light",sticky:"top"},n.createElement(B.Brand,{href:"/"},n.createElement(F,{variant:"dark"},"davidjaimes.com")," "),n.createElement(B.Toggle,{"aria-controls":"responsive-navbar-nav",bg:"dark"}),n.createElement(B.Collapse,{id:"responsive-navbar-nav"},n.createElement(me,{className:"mr-auto"},n.createElement(me.Link,{href:"/about",className:"text-dark"},"About"),n.createElement(me.Link,{href:"/gatsby",className:"text-dark"},"Gatsby"),n.createElement(me.Link,{href:"/macOS",className:"text-dark"},"macOS"),n.createElement(me.Link,{href:"/legal",className:"text-dark"},"Terms of Use")),n.createElement(me,null,n.createElement(me.Link,{href:"https://github.com/davidjaimes",className:"text-dark"},"Source Code ",n.createElement(ve.hJX,{size:25})))))}},2473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=b34c97e6aff2bd3ad43ce71dc908c4a579f7911a-dd3d72f1193c673479b2.js.map