/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/**
 * craftyjs 0.7.1
 * http://craftyjs.com/
 *
 * Copyright 2016, Louis Stowasser
 * Dual licensed under the MIT or GPL licenses.
 */

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h&&h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(a,b,c){var d=a("../core/core.js");d.c("Draggable",{_origX:null,_origY:null,_oldX:null,_oldY:null,_dir:null,init:function(){this.requires("MouseDrag"),this.bind("StartDrag",this._startDrag).bind("Dragging",this._drag)},remove:function(){this.unbind("StartDrag",this._startDrag).unbind("Dragging",this._drag)},enableDrag:function(){return this.uniqueBind("Dragging",this._drag),this},disableDrag:function(){return this.unbind("Dragging",this._drag),this},dragDirection:function(a){if("undefined"==typeof a)this._dir=null;else if(""+parseInt(a,10)==a)this._dir={x:Math.cos(a/180*Math.PI),y:Math.sin(a/180*Math.PI)};else if(0===a.x&&0===a.y)this._dir={x:0,y:0};else{var b=Math.sqrt(a.x*a.x+a.y*a.y);this._dir={x:a.x/b,y:a.y/b}}return this},_startDrag:function(a){this._origX=a.realX,this._origY=a.realY,this._oldX=this._x,this._oldY=this._y},_drag:function(a){if(this._dir){if(0!==this._dir.x||0!==this._dir.y){var b=(a.realX-this._origX)*this._dir.x+(a.realY-this._origY)*this._dir.y;this.x=this._oldX+b*this._dir.x,this.y=this._oldY+b*this._dir.y}}else this.x=this._oldX+(a.realX-this._origX),this.y=this._oldY+(a.realY-this._origY)}}),d.c("Multiway",{_speed:null,init:function(){this.requires("Motion, Keyboard"),this._keyDirection={},this._activeDirections={},this._directionSpeed={},this._speed={x:150,y:150},this.bind("KeyDown",this._keydown).bind("KeyUp",this._keyup)},remove:function(){this.unbind("KeyDown",this._keydown).unbind("KeyUp",this._keyup),this.__unapplyActiveDirections()},_keydown:function(a){var b=this._keyDirection[a.key];void 0!==b&&(0!==this._activeDirections[b]||this.disableControls||(this.vx+=this._directionSpeed[b].x,this.vy+=this._directionSpeed[b].y),this._activeDirections[b]++)},_keyup:function(a){var b=this._keyDirection[a.key];void 0!==b&&(this._activeDirections[b]--,0!==this._activeDirections[b]||this.disableControls||(this.vx-=this._directionSpeed[b].x,this.vy-=this._directionSpeed[b].y))},multiway:function(a,b){return b?void 0!==a.x&&void 0!==a.y?(this._speed.x=a.x,this._speed.y=a.y):(this._speed.x=a,this._speed.y=a):b=a,this.disableControls||this.__unapplyActiveDirections(),this._updateKeys(b),this._updateSpeed(this._speed),this.disableControls||this.__applyActiveDirections(),this},speed:function(a){return this.disableControls||this.__unapplyActiveDirections(),this._updateSpeed(a),this.disableControls||this.__applyActiveDirections(),this},_updateKeys:function(a){this._keyDirection={},this._activeDirections={};for(var b in a){var c=d.keys[b]||b,e=this._keyDirection[c]=a[b];this._activeDirections[e]=this._activeDirections[e]||0,this.isDown(c)&&this._activeDirections[e]++}},_updateSpeed:function(a){this._directionSpeed={};var b;for(var c in this._keyDirection)b=this._keyDirection[c],this._directionSpeed[b]={x:Math.round(1e3*Math.cos(b*(Math.PI/180))*a.x)/1e3,y:Math.round(1e3*Math.sin(b*(Math.PI/180))*a.y)/1e3}},__applyActiveDirections:function(){for(var a in this._activeDirections)this._activeDirections[a]>0&&(this.vx+=this._directionSpeed[a].x,this.vy+=this._directionSpeed[a].y)},__unapplyActiveDirections:function(){for(var a in this._activeDirections)this._activeDirections[a]>0&&(this.vx-=this._directionSpeed[a].x,this.vy-=this._directionSpeed[a].y)},enableControl:function(){return this.disableControls&&this.__applyActiveDirections(),this.disableControls=!1,this},disableControl:function(){return this.disableControls||this.__unapplyActiveDirections(),this.disableControls=!0,this}}),d.c("Jumper",{_jumpSpeed:300,canJump:!0,init:function(){this.requires("Supportable, Motion, Keyboard"),this.enableControl=this.enableControl||function(){this.disableControls=!1},this.disableControl=this.disableControl||function(){this.disableControls=!0}},remove:function(){this.unbind("KeyDown",this._keydown_jumper)},_keydown_jumper:function(a){if(!this.disableControls&&this._jumpKeys[a.key]){var b=this.ground;this.canJump=!!b,this.trigger("CheckJumping",b),this.canJump&&(this.vy=-this._jumpSpeed)}},jumper:function(a,b){b?this._jumpSpeed=a:b=a,this._jumpKeys={};for(var c=0;c<b.length;++c){var e=b[c],f=d.keys[e]||e;this._jumpKeys[f]=!0}return this.uniqueBind("KeyDown",this._keydown_jumper),this},jumpSpeed:function(a){return this._jumpSpeed=a,this}}),d.c("Fourway",{init:function(){this.requires("Multiway")},fourway:function(a){return this.multiway(a||this._speed,{UP_ARROW:-90,DOWN_ARROW:90,RIGHT_ARROW:0,LEFT_ARROW:180,W:-90,S:90,D:0,A:180,Z:-90,Q:180}),this}}),d.c("Twoway",{init:function(){this.requires("Multiway, Jumper")},twoway:function(a,b){return this.multiway(a||this._speed,{RIGHT_ARROW:0,LEFT_ARROW:180,D:0,A:180,Q:180}),this.jumper(b||2*a||this._jumpSpeed,[d.keys.UP_ARROW,d.keys.W,d.keys.Z]),this}})},{"../core/core.js":7}],3:[function(a,b,c){var d=a("../core/core.js");d.extend({device:{_deviceOrientationCallback:!1,_deviceMotionCallback:!1,_normalizeDeviceOrientation:function(a){var b;window.DeviceOrientationEvent?b={tiltLR:a.gamma,tiltFB:a.beta,dir:a.alpha,motUD:null}:window.OrientationEvent&&(b={tiltLR:90*a.x,tiltFB:-90*a.y,dir:null,motUD:a.z}),d.device._deviceOrientationCallback(b)},_normalizeDeviceMotion:function(a){var b=a.accelerationIncludingGravity,c=b.z>0?1:-1,e={acceleration:b,rawAcceleration:"["+Math.round(b.x)+", "+Math.round(b.y)+", "+Math.round(b.z)+"]",facingUp:c,tiltLR:Math.round(b.x/9.81*-90),tiltFB:Math.round((b.y+9.81)/9.81*90*c)};d.device._deviceMotionCallback(e)},deviceOrientation:function(a){this._deviceOrientationCallback=a,d.support.deviceorientation&&(window.DeviceOrientationEvent?d.addEvent(this,window,"deviceorientation",this._normalizeDeviceOrientation):window.OrientationEvent&&d.addEvent(this,window,"MozOrientation",this._normalizeDeviceOrientation))},deviceMotion:function(a){this._deviceMotionCallback=a,d.support.devicemotion&&window.DeviceMotionEvent&&d.addEvent(this,window,"devicemotion",this._normalizeDeviceMotion)}}})},{"../core/core.js":7}],4:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.extend({over:null,mouseObjs:0,mousePos:{},lastEvent:null,touchObjs:0,selected:!1,keydown:{},detectBlur:function(a){var b=a.clientX>d.stage.x&&a.clientX<d.stage.x+d.viewport.width&&a.clientY>d.stage.y&&a.clientY<d.stage.y+d.viewport.height;!d.selected&&b&&d.trigger("CraftyFocus"),d.selected&&!b&&d.trigger("CraftyBlur"),d.selected=b},multitouch:function(a){return"boolean"!=typeof a?this._touchHandler.multitouch:void(this._touchHandler.multitouch=a)},resetKeyDown:function(){for(var a in d.keys)d.keydown[d.keys[a]]&&this.trigger("KeyUp",{key:d.keys[a]});d.keydown={}},mouseDispatch:function(a){if(d.mouseObjs){d.lastEvent=a;var b,c,e,f=a.target?a.target:a.srcElement,g=d.domHelper.translate(a.clientX,a.clientY),h=a.type;"undefined"==typeof a.which?a.mouseButton=a.button<2?d.mouseButtons.LEFT:4==a.button?d.mouseButtons.MIDDLE:d.mouseButtons.RIGHT:a.mouseButton=a.which<2?d.mouseButtons.LEFT:2==a.which?d.mouseButtons.MIDDLE:d.mouseButtons.RIGHT,a.realX=c=d.mousePos.x=g.x,a.realY=e=d.mousePos.y=g.y,b=d.findClosestEntityByComponent("Mouse",c,e,f),b?"mousedown"===h?b.trigger("MouseDown",a):"mouseup"===h?b.trigger("MouseUp",a):"dblclick"==h?b.trigger("DoubleClick",a):"click"==h?b.trigger("Click",a):"mousemove"===h?(b.trigger("MouseMove",a),this.over!==b&&(this.over&&(this.over.trigger("MouseOut",a),this.over=null),this.over=b,b.trigger("MouseOver",a))):b.trigger(h,a):("mousemove"===h&&this.over&&(this.over.trigger("MouseOut",a),this.over=null),"mousedown"===h?d.viewport.mouselook("start",a):"mousemove"===h?d.viewport.mouselook("drag",a):"mouseup"==h&&d.viewport.mouselook("stop")),"mousemove"===h&&(this.lastEvent=a)}},touchDispatch:function(a){if(d.touchObjs||d.mouseObjs){if(this._touchHandler.multitouch)switch(a.type){case"touchstart":this._touchHandler.handleStart(a);break;case"touchmove":this._touchHandler.handleMove(a);break;case"touchleave":case"touchcancel":case"touchend":this._touchHandler.handleEnd(a)}else this._touchHandler.mimicMouse(a);a.target&&"INPUT"!==a.target.nodeName&&"TEXTAREA"!==a.target.nodeName&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}},_touchHandler:{fingers:[],multitouch:!1,handleStart:function(a){for(var b=a.changedTouches,c=0,e=b.length;e>c;c++){var f,g,h,i=!1,j=d.domHelper.translate(b[c].clientX,b[c].clientY),k=a.target?a.target:a.srcElement;b[c].realX=f=j.x,b[c].realY=g=j.y,h=this.findClosestTouchEntity(f,g,k),h&&(h.trigger("TouchStart",b[c]),i=this.fingerDownIndexByEntity(h));var l=this.setTouch(b[c],h);i!==!1&&i>=0?this.fingers[i]=l:this.fingers.push(l)}},handleMove:function(a){for(var b=a.changedTouches,c=0,e=b.length;e>c;c++){var f,g,h,i=this.fingerDownIndexById(b[c].identifier),j=d.domHelper.translate(b[c].clientX,b[c].clientY),k=a.target?a.target:a.srcElement;b[c].realX=f=j.x,b[c].realY=g=j.y,h=this.findClosestTouchEntity(f,g,k),i>=0&&("undefined"!=typeof this.fingers[i].entity&&(this.fingers[i].entity==h?this.fingers[i].entity.trigger("TouchMove",b[c]):("object"==typeof h&&h.trigger("TouchStart",b[c]),this.fingers[i].entity.trigger("TouchEnd"))),this.fingers[i].entity=h,this.fingers[i].realX=f,this.fingers[i].realY=g)}},handleEnd:function(a){for(var b=a.changedTouches,c="touchcancel"==a.type?"TouchCancel":"TouchEnd",d=0,e=b.length;e>d;d++){var f=this.fingerDownIndexById(b[d].identifier);f>=0&&(this.fingers[f].entity&&this.fingers[f].entity.trigger(c),this.fingers.splice(f,1))}},setTouch:function(a,b){return{identifier:a.identifier,realX:a.realX,realY:a.realY,entity:b}},findClosestTouchEntity:function(a,b,c){return d.findClosestEntityByComponent("Touch",a,b,c)},fingerDownIndexById:function(a){for(var b=0,c=this.fingers.length;c>b;b++){var d=this.fingers[b].identifier;if(d==a)return b}return-1},fingerDownIndexByEntity:function(a){for(var b=0,c=this.fingers.length;c>b;b++){var d=this.fingers[b].entity;if(d==a)return b}return-1},mimicMouse:function(a){var b,c=d.lastEvent;"touchstart"===a.type?b="mousedown":"touchmove"===a.type?b="mousemove":"touchend"===a.type?b="mouseup":"touchcancel"===a.type?b="mouseup":"touchleave"===a.type&&(b="mouseup"),a.touches&&a.touches.length?first=a.touches[0]:a.changedTouches&&a.changedTouches.length&&(first=a.changedTouches[0]);var f=e.createEvent("MouseEvent");f.initMouseEvent(b,!0,!0,window,1,first.screenX,first.screenY,first.clientX,first.clientY,!1,!1,!1,!1,0,a.relatedTarget),first.target.dispatchEvent(f),null!==c&&"mousedown"==c.type&&"mouseup"==b&&(b="click",f=e.createEvent("MouseEvent"),f.initMouseEvent(b,!0,!0,window,1,first.screenX,first.screenY,first.clientX,first.clientY,!1,!1,!1,!1,0,a.relatedTarget),first.target.dispatchEvent(f))}},findClosestEntityByComponent:function(a,b,c,e){var f,g,h,i=e?e:d.stage.elem,j=0,k=-1,l={};if("CANVAS"!=i.nodeName){for(;"string"!=typeof i.id&&-1==i.id.indexOf("ent");)i=i.parentNode;var m=d(parseInt(i.id.replace("ent",""),10));m.__c[a]&&m.isAt(b,c)&&(f=m)}if(!f)for(g=d.map.search({_x:b,_y:c,_w:1,_h:1},!1),h=g.length;h>j;++j)if(g[j].__c[a]&&g[j]._visible){var n=g[j],o=!1;if(!l[n[0]]&&(l[n[0]]=!0,n.mapArea?n.mapArea.containsPoint(b,c)&&(o=!0):n.isAt(b,c)&&(o=!0),o&&(n._z>=k||-1===k))){if(n._z===k&&n[0]<f[0])continue;k=n._z,f=n}}return f},mouseWheelDispatch:function(a){a.direction=a.detail<0||a.wheelDelta>0?1:-1,d.trigger("MouseWheelScroll",a)},keyboardDispatch:function(a){for(var b=a,c={},e="char charCode keyCode type shiftKey ctrlKey metaKey timestamp".split(" "),f=e.length;f;){var g=e[--f];c[g]=b[g]}return c.which=null!==b.charCode?b.charCode:b.keyCode,c.key=b.keyCode||b.which,c.originalEvent=b,a=c,"keydown"===a.type?d.keydown[a.key]!==!0&&(d.keydown[a.key]=!0,d.trigger("KeyDown",a)):"keyup"===a.type&&(delete d.keydown[a.key],d.trigger("KeyUp",a)),d.selected&&!(8==a.key||a.key>=112&&a.key<=135)?(b.stopPropagation?b.stopPropagation():b.cancelBubble=!0,b.target&&"INPUT"!==b.target.nodeName&&"TEXTAREA"!==b.target.nodeName&&(b.preventDefault?b.preventDefault():b.returnValue=!1),!1):void 0}}),d._preBind("Load",function(){d.addEvent(this,"keydown",d.keyboardDispatch),d.addEvent(this,"keyup",d.keyboardDispatch),d.addEvent(this,d.stage.elem,"mousedown",d.mouseDispatch),d.addEvent(this,d.stage.elem,"mouseup",d.mouseDispatch),d.addEvent(this,e.body,"mouseup",d.detectBlur),d.addEvent(this,window,"blur",d.resetKeyDown),d.addEvent(this,d.stage.elem,"mousemove",d.mouseDispatch),d.addEvent(this,d.stage.elem,"click",d.mouseDispatch),d.addEvent(this,d.stage.elem,"dblclick",d.mouseDispatch),d.addEvent(this,d.stage.elem,"touchstart",d.touchDispatch),d.addEvent(this,d.stage.elem,"touchmove",d.touchDispatch),d.addEvent(this,d.stage.elem,"touchend",d.touchDispatch),d.addEvent(this,d.stage.elem,"touchcancel",d.touchDispatch),d.addEvent(this,d.stage.elem,"touchleave",d.touchDispatch),"Moz"===d.support.prefix?d.addEvent(this,d.stage.elem,"DOMMouseScroll",d.mouseWheelDispatch):d.addEvent(this,d.stage.elem,"mousewheel",d.mouseWheelDispatch)}),d._preBind("CraftyStop",function(){d.removeEvent(this,"keydown",d.keyboardDispatch),d.removeEvent(this,"keyup",d.keyboardDispatch),d.stage&&(d.removeEvent(this,d.stage.elem,"mousedown",d.mouseDispatch),d.removeEvent(this,d.stage.elem,"mouseup",d.mouseDispatch),d.removeEvent(this,d.stage.elem,"mousemove",d.mouseDispatch),d.removeEvent(this,d.stage.elem,"click",d.mouseDispatch),d.removeEvent(this,d.stage.elem,"dblclick",d.mouseDispatch),d.removeEvent(this,d.stage.elem,"touchstart",d.touchDispatch),d.removeEvent(this,d.stage.elem,"touchmove",d.touchDispatch),d.removeEvent(this,d.stage.elem,"touchend",d.touchDispatch),d.removeEvent(this,d.stage.elem,"touchcancel",d.touchDispatch),d.removeEvent(this,d.stage.elem,"touchleave",d.touchDispatch),"Moz"===d.support.prefix?d.removeEvent(this,d.stage.elem,"DOMMouseScroll",d.mouseWheelDispatch):d.removeEvent(this,d.stage.elem,"mousewheel",d.mouseWheelDispatch)),d.removeEvent(this,e.body,"mouseup",d.detectBlur),d.removeEvent(this,window,"blur",d.resetKeyDown)}),d.c("Mouse",{init:function(){d.mouseObjs++,this.requires("AreaMap").bind("Remove",function(){d.mouseObjs--})}}),d.c("Touch",{init:function(){d.touchObjs++,this.requires("AreaMap").bind("Remove",function(){d.touchObjs--})}}),d.c("AreaMap",{init:function(){},areaMap:function(a){if(arguments.length>1){var b=Array.prototype.slice.call(arguments,0);a=new d.polygon(b)}else a=a.constructor===Array?new d.polygon(a.slice()):a.clone();return a.shift(this._x,this._y),this.mapArea=a,this.attach(this.mapArea),this.trigger("NewAreaMap",a),this}}),d.c("Button",{init:function(){var a=!d.mobile||d.mobile&&!d.multitouch()?"Mouse":"Touch";this.requires(a)}}),d.c("MouseDrag",{_dragging:!1,init:function(){this.requires("Mouse"),this.bind("MouseDown",this._ondown)},remove:function(){this.unbind("MouseDown",this._ondown)},_ondown:function(a){a.mouseButton===d.mouseButtons.LEFT&&this.startDrag(a)},_ondrag:function(a){return this._dragging&&0!==a.realX&&0!==a.realY?void this.trigger("Dragging",a):!1},_onup:function(a){a.mouseButton===d.mouseButtons.LEFT&&this.stopDrag(a)},startDrag:function(a){return this._dragging?void 0:(this._dragging=!0,d.addEvent(this,d.stage.elem,"mousemove",this._ondrag),d.addEvent(this,d.stage.elem,"mouseup",this._onup),this.trigger("StartDrag",a||d.lastEvent),this)},stopDrag:function(a){return this._dragging?(this._dragging=!1,d.removeEvent(this,d.stage.elem,"mousemove",this._ondrag),d.removeEvent(this,d.stage.elem,"mouseup",this._onup),this.trigger("StopDrag",a||d.lastEvent),this):void 0}}),d.c("Keyboard",{isDown:function(a){return"string"==typeof a&&(a=d.keys[a]),!!d.keydown[a]}})},{"../core/core.js":7}],5:[function(a,b,c){var d=a("../core/core.js");d.extend({keys:{BACKSPACE:8,TAB:9,ENTER:13,PAUSE:19,CAPS:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBSTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SHIFT:16,CTRL:17,ALT:18,PLUS:187,COMMA:188,MINUS:189,PERIOD:190,PULT_UP:29460,PULT_DOWN:29461,PULT_LEFT:4,PULT_RIGHT:5},mouseButtons:{LEFT:0,MIDDLE:1,RIGHT:2}})},{"../core/core.js":7}],6:[function(a,b,c){var d=function(a,b){this.timePerFrame=1e3/Crafty.timer.FPS(),this.duration=a,"function"==typeof b?this.easing_function=b:"string"==typeof b&&this.standardEasingFunctions[b]?this.easing_function=this.standardEasingFunctions[b]:this.easing_function=this.standardEasingFunctions.linear,this.reset()};d.prototype={duration:0,clock:0,steps:null,complete:!1,paused:!1,reset:function(){this.loops=1,this.clock=0,this.complete=!1,this.paused=!1},repeat:function(a){this.loops=a},setProgress:function(a,b){this.clock=this.duration*a,"undefined"!=typeof b&&(this.loops=b)},pause:function(){this.paused=!0},resume:function(){this.paused=!1,this.complete=!1},tick:function(a){if(!this.paused&&!this.complete)for(this.clock+=a,this.frames=Math.floor(this.clock/this.timePerFrame);this.clock>=this.duration&&this.complete===!1;)this.loops--,this.loops>0?this.clock-=this.duration:this.complete=!0},time:function(){return Math.min(this.clock/this.duration,1)},value:function(){return this.easing_function(this.time())},standardEasingFunctions:{linear:function(a){return a},smoothStep:function(a){return(3-2*a)*a*a},smootherStep:function(a){return(6*a*a-15*a+10)*a*a*a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return a*(2-a)},easeInOutQuad:function(a){return.5>a?2*a*a:(4-2*a)*a-1}}},b.exports=d},{}],7:[function(a,b,c){function d(){var a=f++;return a in i?d():a}function e(a){if(null===a||"object"!=typeof a)return a;var b=a.constructor();for(var c in a)b[c]=e(a[c]);return b}var f,g,h,i,j,k,l,m,n,o=a("./version"),p=function(a){return new p.fn.init(a)};h={},l=Array.prototype.slice,m=/\s*,\s*/,n=/\s+/;var q=function(){f=1,g=0,i={},j={},k=[]};q(),p.fn=p.prototype={init:function(a){if("string"!=typeof a)return a||(a=0,a in i||(i[a]=this)),a in i?(this[0]=a,this.length=1,this.__c||(this.__c={}),this._callbacks||p._addCallbackMethods(this),i[a]||(i[a]=this),i[a]):(this.length=0,this);var b,c,d,e,f,g,j,k=0,l=!1,o=!1;if("*"===a){g=0;for(b in i)this[g]=+b,g++;return this.length=g,1===g?i[this[0]]:this}-1!==a.indexOf(",")?(o=!0,d=m):-1!==a.indexOf(" ")&&(l=!0,d=n);for(b in i)if(i.hasOwnProperty(b))if(c=i[b],l||o){for(e=a.split(d),g=0,j=e.length,f=0;j>g;g++)c.__c[e[g]]&&f++;(l&&f===j||o&&f>0)&&(this[k++]=+b)}else c.__c[a]&&(this[k++]=+b);if(k>0&&!l&&!o&&this.extend(h[a]),e&&l)for(g=0;j>g;g++)this.extend(h[e[g]]);return this.length=k,1===k?i[this[k-1]]:(p._addCallbackMethods(this),this)},setName:function(a){var b=String(a);return this._entityName=b,this.trigger("NewEntityName",b),this},addComponent:function(a){var b,c,d=0;for(b=1===arguments.length&&-1!==a.indexOf(",")?a.split(m):arguments;d<b.length;d++)if(this.__c[b[d]]!==!0&&(this.__c[b[d]]=!0,c=h[b[d]],this.extend(c),c&&"required"in c&&this.requires(c.required),c&&"init"in c&&c.init.call(this),c&&"events"in c)){var e=c.events;for(var f in e){var g="function"==typeof e[f]?e[f]:c[e[f]];this.bind(f,g)}}return this.trigger("NewComponent",b),this},toggleComponent:function(a){var b,c,d=0;if(arguments.length>1)for(b=arguments.length;b>d;d++)this.has(arguments[d])?this.removeComponent(arguments[d]):this.addComponent(arguments[d]);else if(-1!==a.indexOf(","))for(c=a.split(m),b=c.length;b>d;d++)this.has(c[d])?this.removeComponent(c[d]):this.addComponent(c[d]);else this.has(a)?this.removeComponent(a):this.addComponent(a);return this},requires:function(a){return this.addComponent(a)},removeComponent:function(a,b){var c=h[a];if(this.trigger("RemoveComponent",a),c&&"events"in c){var d=c.events;for(var e in d){var f="function"==typeof d[e]?d[e]:c[d[e]];this.unbind(e,f)}}if(c&&"remove"in c&&c.remove.call(this,!1),b===!1&&c)for(var g in c)delete this[g];return delete this.__c[a],this},getId:function(){return this[0]},has:function(a){return!!this.__c[a]},attr:function(a,b,c,d){return 1===arguments.length&&"string"==typeof arguments[0]?this._attr_get(a):this._attr_set(a,b,c,d)},_attr_get:function(a,b){var c,d,e;return("undefined"==typeof b||null===b)&&(b=this),a.indexOf(".")>-1?(d=a.split("."),c=d.shift(),e=d.join("."),this._attr_get(d.join("."),b[c])):b[a]},_attr_set:function(){var a,b,c;return"string"==typeof arguments[0]?(a=this._set_create_object(arguments[0],arguments[1]),b=!!arguments[2],c=arguments[3]||arguments[0].indexOf(".")>-1):(a=arguments[0],b=!!arguments[1],c=!!arguments[2]),b||this.trigger("Change",a),c?this._recursive_extend(a,this):this.extend.call(this,a),this},_set_create_object:function(a,b){var c,d,e,f={};return a.indexOf(".")>-1?(c=a.split("."),d=c.shift(),e=c.join("."),f[d]=this._set_create_object(e,b)):f[a]=b,f},_recursive_extend:function(a,b){var c;for(c in a)a[c].constructor===Object?b[c]=this._recursive_extend(a[c],b[c]):b[c]=a[c];return b},toArray:function(){return l.call(this,0)},timeout:function(a,b){return this.each(function(){var c=this;setTimeout(function(){a.call(c)},b)}),this},bind:function(a,b){if(1===this.length)this._bindCallback(a,b);else for(var c=0;c<this.length;c++){var d=i[this[c]];d&&d._bindCallback(a,b)}return this},uniqueBind:function(a,b){this.unbind(a,b),this.bind(a,b)},one:function(a,b){var c=this,d=function(e){b.call(c,e),c.unbind(a,d)};return c.bind(a,d)},unbind:function(a,b){var c,d;for(c=0;c<this.length;c++)d=i[this[c]],d&&d._unbindCallbacks(a,b);return this},trigger:function(a,b){if(1===this.length)this._runCallbacks(a,b);else for(var c=0;c<this.length;c++){var d=i[this[c]];d&&d._runCallbacks(a,b)}return this},each:function(a){for(var b=0,c=this.length;c>b;b++)i[this[b]]&&a.call(i[this[b]],b);return this},get:function(a){var b=this.length;if("undefined"!=typeof a){if(a>=b||0>a+b)return;return a>=0?i[this[a]]:i[this[a+b]]}for(var c=0,d=[];b>c;c++)i[this[c]]&&d.push(i[this[c]]);return d},clone:function(){var a,b,c=this.__c,d=p.e();for(a in c)d.addComponent(a);for(b in this)"0"!=b&&"_global"!=b&&"_changed"!=b&&"function"!=typeof this[b]&&"object"!=typeof this[b]&&(d[b]=this[b]);return d},setter:function(a,b){return this.defineField(a,function(){},b)},defineField:function(a,b,c){return p.defineField(this,a,b,c),this},destroy:function(){this.each(function(){var a;this.trigger("Remove");for(var b in this.__c)a=h[b],a&&"remove"in a&&a.remove.call(this,!0);this._unbindAll(),delete i[this[0]]})}},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(a){var b,c=this;if(!a)return c;for(b in a)c!==a[b]&&(c[b]=a[b]);return c},p._callbackMethods={_bindCallback:function(a,b){var c=this._callbacks[a];c||(c=this._callbacks[a]=(j[a]||(j[a]={}))[this[0]]=[],c.context=this,c.depth=0),c.push(b)},_runCallbacks:function(a,b){if(this._callbacks[a]){var c,d=this._callbacks[a],e=d.length;for(d.depth++,c=0;e>c;c++)"undefined"==typeof d[c]?d.depth<=1&&(d.splice(c,1),c--,e--,0===d.length&&(delete this._callbacks[a],delete j[a][this[0]])):d[c].call(this,b);d.depth--}},_unbindCallbacks:function(a,b){if(this._callbacks[a])for(var c=this._callbacks[a],d=0;d<c.length;d++)b&&c[d]!=b||delete c[d]},_unbindAll:function(){if(this._callbacks)for(var a in this._callbacks)this._callbacks[a]&&(this._unbindCallbacks(a),delete j[a][this[0]])}},p._addCallbackMethods=function(a){a.extend(p._callbackMethods),a._callbacks={}},p._addCallbackMethods(p),p.extend({0:"global",init:function(a,b,c){if(!this._preBindDone)for(var d=0;d<this._bindOnInit.length;d++){var e=this._bindOnInit[d];p.bind(e.event,e.handler)}return p.viewport.init(a,b,c),this.trigger("Load"),this.timer.init(),this},_bindOnInit:[],_preBindDone:!1,_preBind:function(a,b){this._bindOnInit.push({event:a,handler:b})},getVersion:function(){return o},stop:function(a){if(p.trigger("CraftyStop",a),this.timer.stop(),a){if(p.audio.remove(),p.stage&&p.stage.elem.parentNode){var b=document.createElement("div");b.id=p.stage.elem.id,p.stage.elem.parentNode.replaceChild(b,p.stage.elem)}delete p.canvasLayer.context,delete p.domLayer._div,delete p.webgl.context,p._unbindAll(),p._addCallbackMethods(p),this._preBindDone=!1,q()}return this},pause:function(a){return(1===arguments.length?a:!this._paused)?(this.trigger("Pause"),this._paused=!0,setTimeout(function(){p.timer.stop()},0),p.keydown={}):(this.trigger("Unpause"),this._paused=!1,setTimeout(function(){p.timer.init()},0)),this},isPaused:function(){return this._paused},timer:function(){var a,b,c,d="fixed",e=5,f=40,h=0,i=0,j=50,k=1e3/j;return{init:function(){"undefined"==typeof c&&(c=(new Date).getTime()-k);var d="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null);d?(a=function(){p.timer.step(),null!==a&&(b=d(a))})():a=setInterval(function(){p.timer.step()},1e3/j)},stop:function(){p.trigger("CraftyStopTimer"),"function"!=typeof a&&clearInterval(a);var c="undefined"!=typeof window&&(window.cancelAnimationFrame||window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||null);c&&c(b),a=null},steptype:function(a,b){if("variable"===a||"semifixed"===a)d=a,b&&(f=b);else{if("fixed"!==a)throw"Invalid step type specified";d="fixed",b&&(e=b)}},step:function(){var a,b,j,l=0;if(currentTime=(new Date).getTime(),h>0&&p.trigger("MeasureWaitTime",currentTime-h),c+i>=currentTime)return void(h=currentTime);var m=currentTime-(c+i);m>20*k&&(i+=m-k,m=k),"fixed"===d?(l=Math.ceil(m/k),l=Math.min(l,e),b=k):"variable"===d?(l=1,b=m,b=Math.min(b,f)):"semifixed"===d&&(l=Math.ceil(m/f),b=m/l);for(var n=0;l>n;n++){j=currentTime;var o={frame:g++,dt:b,gameTime:c};p.trigger("EnterFrame",o),p.trigger("ExitFrame",o),c+=b,currentTime=(new Date).getTime(),p.trigger("MeasureFrameTime",currentTime-j)}l>0&&(a=currentTime,p.trigger("PreRender"),p.trigger("RenderScene"),p.trigger("PostRender"),currentTime=(new Date).getTime(),p.trigger("MeasureRenderTime",currentTime-a)),h=currentTime},FPS:function(a){return"undefined"==typeof a?j:(j=a,k=1e3/j,p.trigger("FPSChange",a),void 0)},simulateFrames:function(a,b){for("undefined"==typeof b&&(b=k);a-- >0;){var c={frame:g++,dt:b};p.trigger("EnterFrame",c),p.trigger("ExitFrame",c)}p.trigger("PreRender"),p.trigger("RenderScene"),p.trigger("PostRender")}}}(),e:function(){var a=d();return i[a]=null,i[a]=p(a),arguments.length>0&&i[a].addComponent.apply(i[a],arguments),i[a].setName("Entity #"+a),i[a].addComponent("obj"),p.trigger("NewEntity",{id:a}),i[a]},c:function(a,b){h[a]=b},trigger:function(a,b){var c,d,e=j[a]||(j[a]={});for(c in e)e.hasOwnProperty(c)&&(d=e[c],d&&0!==d.length&&d.context._runCallbacks(a,b))},bind:function(a,b){return this._bindCallback(a,b),b},uniqueBind:function(a,b){return this.unbind(a,b),this.bind(a,b)},one:function(a,b){var c=this,d=function(e){b.call(c,e),c.unbind(a,d)};return c.bind(a,d)},unbind:function(a,b){this._unbindCallbacks(a,b)},frame:function(){return g},components:function(){return h},isComp:function(a){return a in h},debug:function(a){return"handlers"===a?j:i},settings:function(){var a={},b={};return{register:function(a,c){b[a]=c},modify:function(c,d){b[c]&&(b[c].call(a[c],d),a[c]=d)},get:function(b){return a[b]}}}(),defineField:function(a,b,c,d){Object.defineProperty(a,b,{get:c,set:d,configurable:!1,enumerable:!0})},clone:e}),"function"==typeof define&&define("crafty",[],function(){return p}),b.exports=p},{"./version":16}],8:[function(a,b,c){(function(c){var d=a("./core"),e="undefined"!=typeof window&&window.document;!function(){var a=d.support={},b="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase()||"undefined"!=typeof c&&c.version,f=/(webkit)[ \/]([\w.]+)/.exec(b)||/(o)pera(?:.*version)?[ \/]([\w.]+)/.exec(b)||/(ms)ie ([\w.]+)/.exec(b)||/(moz)illa(?:.*? rv:([\w.]+))?/.exec(b)||/(v)\d+\.(\d+)/.exec(b)||[],g=/iPad|iPod|iPhone|Android|webOS|IEMobile/i.exec(b);if(g&&(d.mobile=g[0]),a.defineProperty=function(){if(!("defineProperty"in Object))return!1;try{Object.defineProperty({},"x",{})}catch(a){return!1}return!0}(),a.audio="undefined"!=typeof window&&"canPlayType"in e.createElement("audio"),a.prefix=f[1]||f[0],"moz"===a.prefix&&(a.prefix="Moz"),"o"===a.prefix&&(a.prefix="O"),"v"===a.prefix&&(a.prefix="node"),f[2]&&(a.versionName=f[2],a.version=+f[2].split(".")[0]),a.canvas="undefined"!=typeof window&&"getContext"in e.createElement("canvas"),a.canvas){var h;try{var i=e.createElement("canvas");h=i.getContext("webgl")||i.getContext("experimental-webgl"),h.viewportWidth=a.canvas.width,h.viewportHeight=a.canvas.height}catch(j){}a.webgl=!!h}else a.webgl=!1;a.css3dtransform="undefined"!=typeof window&&("undefined"!=typeof e.createElement("div").style.Perspective||"undefined"!=typeof e.createElement("div").style[a.prefix+"Perspective"]),a.deviceorientation="undefined"!=typeof window&&("undefined"!=typeof window.DeviceOrientationEvent||"undefined"!=typeof window.OrientationEvent),a.devicemotion="undefined"!=typeof window&&"undefined"!=typeof window.DeviceMotionEvent}(),b.exports={_events:{},addEvent:function(a,b,c,d){3===arguments.length&&(d=c,c=b,b=window.document);var e=function(b){d.call(a,b)},f=a[0]||"";this._events[f+b+c+d]||(this._events[f+b+c+d]=e,b.addEventListener(c,e,!1))},removeEvent:function(a,b,c,d){3===arguments.length&&(d=c,c=b,b=window.document);var e=a[0]||"",f=this._events[e+b+c+d];f&&(b.removeEventListener(c,f,!1),delete this._events[e+b+c+d])},background:function(a){d.stage.elem.style.background=a}}}).call(this,a("_process"))},{"./core":7,_process:1}],9:[function(a,b,c){var d=a("../core/core.js");b.exports={assets:{},__paths:{audio:"",images:""},paths:function(a){return"undefined"==typeof a?this.__paths:(a.audio&&(this.__paths.audio=a.audio),void(a.images&&(this.__paths.images=a.images)))},asset:function(a,b){return 1===arguments.length?d.assets[a]:d.assets[a]?void 0:(d.assets[a]=b,this.trigger("NewAsset",{key:a,value:b}),b)},image_whitelist:["jpg","jpeg","gif","png","svg"],load:function(a,b,c,e){function f(){var a=this.src;this.removeEventListener&&this.removeEventListener("canplaythrough",f,!1),m++,c&&c({loaded:m,total:n,percent:m/n*100,src:a}),m===n&&b&&b()}function g(){var a=this.src;e&&e({loaded:m,total:n,percent:m/n*100,src:a}),m++,m===n&&b&&b()}Array.isArray(a)&&d.log("Calling Crafty.load with an array of assets no longer works; see the docs for more details."),a="string"==typeof a?JSON.parse(a):a;var h,i,j,k,l,m=0,n=(a.audio?Object.keys(a.audio).length:0)+(a.images?Object.keys(a.images).length:0)+(a.sprites?Object.keys(a.sprites).length:0),o=d.support.audio,p=d.paths(),q=function(a){
return a.substr(a.lastIndexOf(".")+1).toLowerCase()},r=function(a,b){return-1===b.search("://")?"audio"==a?p.audio+b:p.images+b:b},s=function(a){return d.asset(a)||null},t=function(a){return d.audio.supports(q(a))},u=function(a){return-1!=d.image_whitelist.indexOf(q(a))},v=function(a,b){a.onload=f,"webkit"===d.support.prefix&&(a.src=""),a.src=b};for(k in a)for(l in a[k])if(a[k].hasOwnProperty(l)){if(h=a[k][l],"audio"===k&&o){if("object"==typeof h){var w=[];for(var x in h)i=r(k,h[x]),!s(i)&&t(h[x])&&w.push(i);j=d.audio.add(l,w).obj}else"string"==typeof h&&t(h)&&(i=r(k,h),s(i)||(j=d.audio.add(l,i).obj));j&&j.addEventListener&&j.addEventListener("canplaythrough",f,!1)}else l="sprites"===k?l:h,i=r(k,l),u(l)&&(j=s(i),j||(j=new Image,"sprites"===k&&d.sprite(h.tile,h.tileh,i,h.map,h.paddingX,h.paddingY,h.paddingAroundBorder),d.asset(i,j)),v(j,i));j?j.onerror=g:--n}0===n&&b()},removeAssets:function(a){a="string"==typeof a?JSON.parse(a):a;var b,c,e,f,g=d.paths(),h=function(a,b){return-1===b.search("://")?"audio"==a?g.audio+b:g.images+b:b};for(e in a)for(f in a[e])if(a[e].hasOwnProperty(f))if(b=a[e][f],"audio"===e)if("object"==typeof b)for(var i in b)c=h(e,b[i]),d.asset(c)&&d.audio.remove(f);else"string"==typeof b&&(c=h(e,b),d.asset(c)&&d.audio.remove(f));else if(f="sprites"===e?f:b,c=h(e,f),d.asset(c)){if("sprites"===e)for(var j in b.map)delete d.components()[j];delete d.assets[c]}}}},{"../core/core.js":7}],10:[function(a,b,c){b.exports={init:function(){this.changed=[],this.bind("Change",this._changed_attributes),this.bind("Change",this._changed_triggers)},_changed_triggers:function(a,b){var c;b=Crafty.extend.call({pre:""},b);for(c in a)this.trigger("Change["+b.pre+c+"]",a[c]),a[c].constructor===Object&&this._changed_triggers(a[c],{pre:b.pre+c+"."})},_changed_attributes:function(a){var b;for(b in a)this.changed.push(b);return this},is_dirty:function(a){return 0===arguments.length?!!this.changed.length:this.changed.indexOf(a)>-1}}},{}],11:[function(a,b,c){var d=a("../core/core.js");b.exports={_scenes:{},_current:null,scene:function(a,b,c){return 1===arguments.length||"function"!=typeof arguments[1]?void d.enterScene(a,arguments[1]):void d.defineScene(a,b,c)},defineScene:function(a,b,c){if("function"!=typeof b)throw"Init function is the wrong type.";this._scenes[a]={},this._scenes[a].initialize=b,"undefined"!=typeof c&&(this._scenes[a].uninitialize=c)},enterScene:function(a,b){if("function"==typeof b)throw"Scene data cannot be a function";d.trigger("SceneDestroy",{newScene:a}),d.viewport.reset(),d("2D").each(function(){this.has("Persist")||this.destroy()}),null!==this._current&&"uninitialize"in this._scenes[this._current]&&this._scenes[this._current].uninitialize.call(this);var c=this._current;this._current=a,d.trigger("SceneChange",{oldScene:c,newScene:a}),this._scenes.hasOwnProperty(a)?this._scenes[a].initialize.call(this,b):d.error('The scene "'+a+'" does not exist')}}},{"../core/core.js":7}],12:[function(a,b,c){var d=a("../core/core.js");try{var e="undefined"!=typeof window&&window.localStorage||new a("node-localstorage").LocalStorage("./localStorage")}catch(f){var e=null}var g=function(a,b){var c=b;if(!e)return d.error("Local storage is not accessible.  (Perhaps you are including crafty.js cross-domain?)"),!1;if(1===arguments.length)try{return JSON.parse(e.getItem(a))}catch(f){return e.getItem(a)}else"object"==typeof b&&(c=JSON.stringify(b)),e.setItem(a,c)};g.remove=function(a){return e?void e.removeItem(a):void d.error("Local storage is not accessible.  (Perhaps you are including crafty.js cross-domain?)")},b.exports=g},{"../core/core.js":7}],13:[function(a,b,c){var d=a("../core/core.js");d._systems={},d.s=function(a,b,c){return b?void(c===!1?(d._systems[a]=new d.CraftySystem(a,b),d.trigger("SystemLoaded",a)):d._registerLazySystem(a,b)):d._systems[a]},d._registerLazySystem=function(a,b){Object.defineProperty(d._systems,a,{get:function(){return Object.defineProperty(d._systems,a,{value:new d.CraftySystem(a,b),writable:!0,enumerable:!0,configurable:!0}),d.trigger("SystemLoaded",a),d._systems[a]},configurable:!0})},d.CraftySystem=function(){return systemID=1,function(a,b){if(this.name=a,!b)return this;if(this._systemTemplate=b,this.extend(b),d._addCallbackMethods(this),this[0]="system"+systemID++,"function"==typeof this.init&&this.init(a),"events"in b){var c=b.events;for(var e in c){var f="function"==typeof c[e]?c[e]:b[c[e]];this.bind(e,f)}}}}(),d.CraftySystem.prototype={extend:function(a){for(var b in a)"undefined"==typeof this[b]&&(this[b]=a[b])},bind:function(a,b){return this._bindCallback(a,b),this},trigger:function(a,b){return this._runCallbacks(a,b),this},unbind:function(a,b){return this._unbindCallbacks(a,b),this},one:function(a,b){var c=this,d=function(e){b.call(c,e),c.unbind(a,d)};return c.bind(a,d)},uniqueBind:function(a,b){return this.unbind(a,b),this.bind(a,b)},destroy:function(){d.trigger("SystemDestroyed",this),"function"==typeof this.remove&&this.remove(),this._unbindAll(),delete d._systems[this.name]}}},{"../core/core.js":7}],14:[function(a,b,c){b.exports={init:function(){this._delays=[],this.bind("EnterFrame",function(a){for(var b=this._delays.length;--b>=0;){var c=this._delays[b];if(c===!1)this._delays.splice(b,1);else{for(c.accumulator+=a.dt;c.accumulator>=c.delay&&c.repeat>=0;)c.accumulator-=c.delay,c.repeat--,c.callback.call(this);c.repeat<0&&(this._delays.splice(b,1),"function"==typeof c.callbackOff&&c.callbackOff.call(this))}}})},delay:function(a,b,c,d){return this._delays.push({accumulator:0,callback:a,callbackOff:d,delay:b,repeat:(0>c?1/0:c)||0}),this},cancelDelay:function(a){for(var b=this._delays.length;--b>=0;){var c=this._delays[b];c&&c.callback==a&&(this._delays[b]=!1)}return this}}},{}],15:[function(a,b,c){b.exports={init:function(){this.tweenGroup={},this.tweenStart={},this.tweens=[],this.uniqueBind("EnterFrame",this._tweenTick)},_tweenTick:function(a){var b,c,d;for(d=this.tweens.length-1;d>=0;d--)b=this.tweens[d],b.easing.tick(a.dt),c=b.easing.value(),this._doTween(b.props,c),b.easing.complete&&(this.tweens.splice(d,1),this._endTween(b.props))},_doTween:function(a,b){for(var c in a)this[c]=(1-b)*this.tweenStart[c]+b*a[c]},tween:function(a,b,c){var d={props:a,easing:new Crafty.easing(b,c)};for(var e in a)"undefined"!=typeof this.tweenGroup[e]&&this.cancelTween(e),this.tweenStart[e]=this[e],this.tweenGroup[e]=a;return this.tweens.push(d),this},cancelTween:function(a){if("string"==typeof a)"object"==typeof this.tweenGroup[a]&&delete this.tweenGroup[a][a];else if("object"==typeof a)for(var b in a)this.cancelTween(b);return this},pauseTweens:function(){this.tweens.map(function(a){a.easing.pause()})},resumeTweens:function(){this.tweens.map(function(a){a.easing.resume()})},_endTween:function(a){for(var b in a)delete this.tweenGroup[b];this.trigger("TweenEnd",a)}}},{}],16:[function(a,b,c){b.exports="0.7.1"},{}],17:[function(a,b,c){var d=a("./core/core");d.easing=a("./core/animation"),d.extend(a("./core/extensions")),d.extend(a("./core/loader")),d.c("Model",a("./core/model")),d.extend(a("./core/scenes")),d.storage=a("./core/storage"),d.c("Delay",a("./core/time")),d.c("Tween",a("./core/tween")),a("./core/systems"),a("./spatial/2d"),a("./spatial/collision"),a("./spatial/spatial-grid"),a("./spatial/rect-manager"),a("./spatial/math"),a("./graphics/canvas"),a("./graphics/canvas-layer"),a("./graphics/color"),a("./graphics/dom"),a("./graphics/dom-helper"),a("./graphics/dom-layer"),a("./graphics/drawing"),a("./graphics/gl-textures"),a("./graphics/html"),a("./graphics/image"),a("./graphics/particles"),a("./graphics/sprite-animation"),a("./graphics/sprite"),a("./graphics/text"),a("./graphics/viewport"),a("./graphics/webgl"),a("./isometric/diamond-iso"),a("./isometric/isometric"),a("./controls/inputs"),a("./controls/controls"),a("./controls/device"),a("./controls/keycodes"),a("./sound/sound"),a("./debug/debug-layer"),a("./debug/logging"),window&&(window.Crafty=d),b.exports=d},{"./controls/controls":2,"./controls/device":3,"./controls/inputs":4,"./controls/keycodes":5,"./core/animation":6,"./core/core":7,"./core/extensions":8,"./core/loader":9,"./core/model":10,"./core/scenes":11,"./core/storage":12,"./core/systems":13,"./core/time":14,"./core/tween":15,"./debug/debug-layer":18,"./debug/logging":19,"./graphics/canvas":21,"./graphics/canvas-layer":20,"./graphics/color":22,"./graphics/dom":25,"./graphics/dom-helper":23,"./graphics/dom-layer":24,"./graphics/drawing":26,"./graphics/gl-textures":27,"./graphics/html":28,"./graphics/image":29,"./graphics/particles":30,"./graphics/sprite":32,"./graphics/sprite-animation":31,"./graphics/text":33,"./graphics/viewport":34,"./graphics/webgl":35,"./isometric/diamond-iso":36,"./isometric/isometric":37,"./sound/sound":38,"./spatial/2d":39,"./spatial/collision":40,"./spatial/math":41,"./spatial/rect-manager":42,"./spatial/spatial-grid":43}],18:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.c("DebugCanvas",{init:function(){this.requires("2D"),d.DebugCanvas.context||d.DebugCanvas.init(),d.DebugCanvas.add(this),this._debug={alpha:1,lineWidth:1},this.bind("RemoveComponent",this.onDebugRemove),this.bind("Remove",this.onDebugDestroy)},onDebugRemove:function(a){"DebugCanvas"===a&&d.DebugCanvas.remove(this)},onDebugDestroy:function(a){d.DebugCanvas.remove(this)},debugAlpha:function(a){return this._debug.alpha=a,this},debugFill:function(a){return"undefined"==typeof a&&(a="red"),this._debug.fillStyle=a,this},debugStroke:function(a){return"undefined"==typeof a&&(a="red"),this._debug.strokeStyle=a,this},debugDraw:function(a){var b=a.globalAlpha,c=this._debug;c.alpha&&(a.globalAlpha=this._debug.alpha),c.strokeStyle&&(a.strokeStyle=c.strokeStyle),c.lineWidth&&(a.lineWidth=c.lineWidth),c.fillStyle&&(a.fillStyle=c.fillStyle),this.trigger("DebugDraw"),a.globalAlpha=b}}),d.c("DebugRectangle",{init:function(){this.requires("2D, DebugCanvas")},debugRectangle:function(a){return this.debugRect=a,this.unbind("DebugDraw",this.drawDebugRect),this.bind("DebugDraw",this.drawDebugRect),this},drawDebugRect:function(){var a=d.DebugCanvas.context,b=this.debugRect;null!==b&&void 0!==b&&b._h&&b._w&&(this._debug.fillStyle&&a.fillRect(b._x,b._y,b._w,b._h),this._debug.strokeStyle&&a.strokeRect(b._x,b._y,b._w,b._h))}}),d.c("VisibleMBR",{init:function(){this.requires("DebugRectangle").debugFill("purple").bind("EnterFrame",this._assignRect)},_assignRect:function(){this._mbr?this.debugRectangle(this._mbr):this.debugRectangle(this)}}),d.c("DebugPolygon",{init:function(){this.requires("2D, DebugCanvas")},debugPolygon:function(a){return this.polygon=a,this.unbind("DebugDraw",this.drawDebugPolygon),this.bind("DebugDraw",this.drawDebugPolygon),this},drawDebugPolygon:function(){if("undefined"!=typeof this.polygon){var a=d.DebugCanvas.context;a.beginPath();for(var b=this.polygon.points,c=b.length,e=0;c>e;e+=2)a.lineTo(b[e],b[e+1]);a.closePath(),this._debug.fillStyle&&a.fill(),this._debug.strokeStyle&&a.stroke()}}}),d.c("WiredHitBox",{init:function(){this.requires("DebugPolygon").debugStroke("red").matchHitBox(),this.bind("NewHitbox",this.matchHitBox)},matchHitBox:function(){this.debugPolygon(this.map)}}),d.c("SolidHitBox",{init:function(){this.requires("Collision, DebugPolygon").debugFill("orange").debugAlpha(.7).matchHitBox(),this.bind("NewHitbox",this.matchHitBox)},matchHitBox:function(){this.debugPolygon(this.map)}}),d.c("WiredAreaMap",{init:function(){this.requires("DebugPolygon").debugStroke("green").matchAreaMap(),this.bind("NewAreaMap",this.matchAreaMap)},matchAreaMap:function(){this.debugPolygon(this.mapArea)}}),d.c("SolidAreaMap",{init:function(){this.requires("DebugPolygon").debugFill("lime").debugAlpha(.7).matchAreaMap(),this.bind("NewAreaMap",this.matchAreaMap)},matchAreaMap:function(){this.debugPolygon(this.mapArea)}}),d.DebugCanvas={context:null,entities:[],onetimeEntities:[],add:function(a){this.entities.push(a)},remove:function(a){for(var b=this.entities,c=b.length-1;c>=0;c--)b[c]==a&&b.splice(c,1)},init:function(){if(!d.DebugCanvas.context){if(!d.support.canvas)return d.trigger("NoCanvas"),void d.stop();var a;a=e.createElement("canvas"),a.width=d.viewport.width,a.height=d.viewport.height,a.style.position="absolute",a.style.left="0px",a.style.top="0px",a.id="debug-canvas",a.style.zIndex=1e5,d.stage.elem.appendChild(a),d.DebugCanvas.context=a.getContext("2d"),d.DebugCanvas._canvas=a}d.unbind("RenderScene",d.DebugCanvas.renderScene),d.bind("RenderScene",d.DebugCanvas.renderScene)},renderScene:function(a){a=a||d.viewport.rect();var b,c=d.DebugCanvas.entities,e=0,f=c.length,g=d.DebugCanvas.context,h=d.viewport;for(g.setTransform(h._scale,0,0,h._scale,Math.round(h._x*h._scale),Math.round(h._y*h._scale)),g.clearRect(a._x,a._y,a._w,a._h);f>e;e++)b=c[e],b.debugDraw(g)}}},{"../core/core.js":7}],19:[function(a,b,c){var d=a("../core/core.js");d.extend({loggingEnabled:!0,log:function(){d.loggingEnabled&&console&&console.log&&console.log.apply(console,arguments)},error:function(){d.loggingEnabled&&console&&console.error&&console.error.apply(console,arguments)}})},{"../core/core.js":7}],20:[function(a,b,c){var d=a("../core/core.js");d.extend({canvasLayer:{_dirtyRects:[],_changedObjs:[],layerCount:0,_dirtyViewport:!1,_sort:function(a,b){return a._globalZ-b._globalZ},add:function(a){this._changedObjs.push(a)},context:null,_canvas:null,init:function(){if(!d.support.canvas)return d.trigger("NoCanvas"),void d.stop();this._dirtyRects=[],this._changedObjs=[],this.layerCount=0;var a;a=document.createElement("canvas"),a.width=d.viewport.width,a.height=d.viewport.height,a.style.position="absolute",a.style.left="0px",a.style.top="0px";d.canvasLayer;d.stage.elem.appendChild(a),this.context=a.getContext("2d"),this._canvas=a;var b=d.viewport._scale;1!=b&&a.scale(b,b),this._setPixelart(d._pixelartEnabled),d.uniqueBind("PixelartSet",this._setPixelart),d.uniqueBind("RenderScene",this._render),d.uniqueBind("ViewportResize",this._resize),d.bind("InvalidateViewport",function(){d.canvasLayer._dirtyViewport=!0})},_render:function(){var a=d.canvasLayer,b=a._dirtyViewport,c=a._changedObjs.length,e=a.context;if(c||b){if(b){var f=d.viewport;e.setTransform(f._scale,0,0,f._scale,Math.round(f._x*f._scale),Math.round(f._y*f._scale))}c/a.layerCount>.6||b?a._drawAll():a._drawDirty(),a._clean()}},_drawDirty:function(){var a,b,c,e,f,g,h=this._changedObjs,i=h.length,j=this._dirtyRects,k=d.rectManager,l=k.overlap,m=this.context,n=[],o=[];for(a=0;i>a;a++)this._createDirty(h[a]);for(k.mergeSet(j),i=j.length,a=0;i>a;++a)if(e=j[a],n.length=0,o.length=0,e){for(e._w=e._x+e._w,e._h=e._y+e._h,e._x=e._x>0?0|e._x:(0|e._x)-1,e._y=e._y>0?0|e._y:(0|e._y)-1,e._w-=e._x,e._h-=e._y,e._w=e._w===(0|e._w)?e._w:(0|e._w)+1,e._h=e._h===(0|e._h)?e._h:(0|e._h)+1,c=d.map.search(e,!1),m.clearRect(e._x,e._y,e._w,e._h),m.save(),m.beginPath(),m.rect(e._x,e._y,e._w,e._h),m.clip(),b=0,f=c.length;f>b;++b)g=c[b],!n[g[0]]&&g._visible&&g.__c.Canvas&&(n[g[0]]=!0,o.push(g));for(o.sort(this._sort),b=0,f=o.length;f>b;++b){g=o[b];var p=g._mbr||g;l(p,e)&&g.draw(),g._changed=!1}m.closePath(),m.restore()}if(d.canvasLayer.debugDirty===!0)for(m.strokeStyle="red",a=0,i=j.length;i>a;++a)e=j[a],m.strokeRect(e._x,e._y,e._w,e._h)},_drawAll:function(a){a=a||d.viewport.rect();var b,c=d.map.search(a),e=0,f=c.length,g=this.context;for(g.clearRect(a._x,a._y,a._w,a._h),c.sort(this._sort);f>e;e++)b=c[e],b._visible&&b.__c.Canvas&&(b.draw(),b._changed=!1)},debug:function(){d.log(this._changedObjs)},_clean:function(){var a,b,c,d,e=this._changedObjs;for(c=0,d=e.length;d>c;c++)b=e[c],a=b._mbr||b,"undefined"==typeof b.staleRect&&(b.staleRect={}),b.staleRect._x=a._x,b.staleRect._y=a._y,b.staleRect._w=a._w,b.staleRect._h=a._h,b._changed=!1;e.length=0,this._dirtyRects.length=0,this._dirtyViewport=!1},_createDirty:function(a){var b=a._mbr||a,c=this._dirtyRects,e=d.rectManager;if(a.staleRect){if(e.overlap(a.staleRect,b))return e.merge(a.staleRect,b,a.staleRect),void c.push(a.staleRect);c.push(a.staleRect)}a.currentRect._x=b._x,a.currentRect._y=b._y,a.currentRect._w=b._w,a.currentRect._h=b._h,c.push(a.currentRect)},_resize:function(){var a=d.canvasLayer._canvas;a.width=d.viewport.width,a.height=d.viewport.height},_setPixelart:function(a){var b=d.canvasLayer.context;b.imageSmoothingEnabled=!a,b.mozImageSmoothingEnabled=!a,b.webkitImageSmoothingEnabled=!a,b.oImageSmoothingEnabled=!a,b.msImageSmoothingEnabled=!a}}})},{"../core/core.js":7}],21:[function(a,b,c){var d=a("../core/core.js");d.c("Canvas",{init:function(){var a=d.canvasLayer;a.context||a.init(),this._drawLayer=a,this._drawContext=a.context,a.layerCount++,this.currentRect={},this._changed=!0,a.add(this),this.bind("Invalidate",function(b){this._changed===!1&&(this._changed=!0,a.add(this))}),this.bind("Remove",function(){this._drawLayer.layerCount--,this._changed=!0,this._drawLayer.add(this)})},drawVars:{type:"canvas",pos:{},ctx:null,coord:[0,0,0,0],co:{x:0,y:0,w:0,h:0}},draw:function(a,b,c,d,e){if(this.ready){4===arguments.length&&(e=d,d=c,c=b,b=a,a=this._drawContext);var f=this.drawVars.pos;f._x=this._x+(b||0),f._y=this._y+(c||0),f._w=d||this._w,f._h=e||this._h,context=a||this._drawContext,coord=this.__coord||[0,0,0,0];var g=this.drawVars.co;g.x=coord[0]+(b||0),g.y=coord[1]+(c||0),g.w=d||coord[2],g.h=e||coord[3],(this._flipX||this._flipY||this._rotation)&&context.save(),0!==this._rotation&&(context.translate(this._origin.x+this._x,this._origin.y+this._y),f._x=-this._origin.x,f._y=-this._origin.y,context.rotate(this._rotation%360*(Math.PI/180))),(this._flipX||this._flipY)&&(context.scale(this._flipX?-1:1,this._flipY?-1:1),this._flipX&&(f._x=-(f._x+f._w)),this._flipY&&(f._y=-(f._y+f._h)));var h;return this._alpha<1&&(h=context.globalAlpha,context.globalAlpha=this._alpha),this.drawVars.ctx=context,this.trigger("Draw",this.drawVars),(0!==this._rotation||this._flipX||this._flipY)&&context.restore(),h&&(context.globalAlpha=h),this}}})},{"../core/core.js":7}],22:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.extend({assignColor:function(){function a(a){return a._red=a._blue=a._green=0,a}function b(a){var b=a.toString(16);return 1==b.length&&(b="0"+b),b}function c(a,c,d){return"#"+b(a)+b(c)+b(d)}function d(b,c){var d;if(7===b.length)d=2;else{if(4!==b.length)return a(c);d=1}return c._red=parseInt(b.substr(1,d),16),c._green=parseInt(b.substr(1+d,d),16),c._blue=parseInt(b.substr(1+2*d,d),16),c}function f(b,c){var d=l.exec(b);return null===d||4!=d.length&&5!=d.length?a(c):(c._red=Math.round(parseFloat(d[1])),c._green=Math.round(parseFloat(d[2])),c._blue=Math.round(parseFloat(d[3])),d[4]&&(c._strength=parseFloat(d[4])),c)}function g(a,b){if("undefined"==typeof k[a]){j===!1&&(window.document.body.appendChild(i),j=!0),i.style.color=a;var e=window.getComputedStyle(i).color;f(e,b),k[a]=c(b._red,b._green,b._blue)}else d(k[a],b);return b}function h(a){return"rgba("+a._red+", "+a._green+", "+a._blue+", "+a._strength+")"}var i=e.createElement("div");i.style.display="none";var j=!1,k={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#00ff00",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00"},l=/rgba?\s*\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,?\s*([0-9.]+)?\)/;return function(a,b){b=b||{},a=a.trim().toLowerCase();var c=null;c="#"===a[0]?d(a,b):"r"===a[0]&&"g"===a[1]&&"b"===a[2]?f(a,b):g(a,b),b._strength=b._strength||1,b._color=h(b)}}()});var f="attribute vec2 aPosition;\nattribute vec3 aOrientation;\nattribute vec2 aLayer;\nattribute vec4 aColor;\n\nvarying lowp vec4 vColor;\n\nuniform  vec4 uViewport;\n\nmat4 viewportScale = mat4(2.0 / uViewport.z, 0, 0, 0,    0, -2.0 / uViewport.w, 0,0,    0, 0,1,0,    -1,+1,0,1);\nvec4 viewportTranslation = vec4(uViewport.xy, 0, 0);\n\nvoid main() {\n  vec2 pos = aPosition;\n  vec2 entityOrigin = aOrientation.xy;\n  mat2 entityRotationMatrix = mat2(cos(aOrientation.z), sin(aOrientation.z), -sin(aOrientation.z), cos(aOrientation.z));\n\n  pos = entityRotationMatrix * (pos - entityOrigin) + entityOrigin;\n  gl_Position = viewportScale * (viewportTranslation + vec4(pos, 1.0/(1.0+exp(aLayer.x) ), 1) );\n  vColor = vec4(aColor.rgb*aColor.a*aLayer.y, aColor.a*aLayer.y);\n}",g="precision mediump float;\nvarying lowp vec4 vColor;\nvoid main(void) {\n	gl_FragColor = vColor;\n}",h=[{name:"aPosition",width:2},{name:"aOrientation",width:3},{name:"aLayer",width:2},{name:"aColor",width:4}];d.c("Color",{_red:0,_green:0,_blue:0,_strength:1,_color:"",ready:!0,init:function(){this.bind("Draw",this._drawColor),this.has("WebGL")&&this._establishShader("Color",g,f,h),this.trigger("Invalidate")},remove:function(){this.unbind("Draw",this._drawColor),this.has("DOM")&&(this._element.style.backgroundColor="transparent"),this.trigger("Invalidate")},_drawColor:function(a){this._color&&("DOM"===a.type?(a.style.backgroundColor=this._color,a.style.lineHeight=0):"canvas"===a.type?(a.ctx.fillStyle=this._color,a.ctx.fillRect(a.pos._x,a.pos._y,a.pos._w,a.pos._h)):"webgl"===a.type&&a.program.writeVector("aColor",this._red/255,this._green/255,this._blue/255,this._strength))},color:function(a){return 0===arguments.length?this._color:(arguments.length>=3?(this._red=arguments[0],this._green=arguments[1],this._blue=arguments[2],"number"==typeof arguments[3]&&(this._strength=arguments[3])):(d.assignColor(a,this),"number"==typeof arguments[1]&&(this._strength=arguments[1])),this._color="rgba("+this._red+", "+this._green+", "+this._blue+", "+this._strength+")",this.trigger("Invalidate"),this)}})},{"../core/core.js":7}],23:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.extend({domHelper:{innerPosition:function(a){var b=a.getBoundingClientRect(),c=b.left+(window.pageXOffset?window.pageXOffset:e.body.scrollLeft),d=b.top+(window.pageYOffset?window.pageYOffset:e.body.scrollTop),f=parseInt(this.getStyle(a,"border-left-width")||0,10)||parseInt(this.getStyle(a,"borderLeftWidth")||0,10)||0,g=parseInt(this.getStyle(a,"border-top-width")||0,10)||parseInt(this.getStyle(a,"borderTopWidth")||0,10)||0;return c+=f,d+=g,{x:c,y:d}},getStyle:function(a,b){var c;return a.currentStyle?c=a.currentStyle[this.camelize(b)]:window.getComputedStyle&&(c=e.defaultView.getComputedStyle(a,null).getPropertyValue(this.csselize(b))),c},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},csselize:function(a){return a.replace(/[A-Z]/g,function(a){return a?"-"+a.toLowerCase():""})},translate:function(a,b){var c=e.documentElement,f=e.body;return{x:(a-d.stage.x+(c&&c.scrollLeft||f&&f.scrollLeft||0))/d.viewport._scale-d.viewport._x,y:(b-d.stage.y+(c&&c.scrollTop||f&&f.scrollTop||0))/d.viewport._scale-d.viewport._y}}}})},{"../core/core.js":7}],24:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.extend({domLayer:{_changedObjs:[],_dirtyViewport:!1,_div:null,init:function(){this._changedObjs=[],this._dirtyViewport=!1;var a=this._div=e.createElement("div");d.stage.elem.appendChild(a),a.style.position="absolute",a.style.zIndex="1",a.style.transformStyle="preserve-3d",d.uniqueBind("RenderScene",this._render),d.uniqueBind("PixelartSet",this._setPixelArt),d.uniqueBind("InvalidateViewport",function(){d.domLayer._dirtyViewport=!0})},_setPixelArt:function(a){var b=d.domLayer._div.style,c=d.domHelper.camelize;a?(b[c("image-rendering")]="optimizeSpeed",b[c("image-rendering")]="-moz-crisp-edges",b[c("image-rendering")]="-o-crisp-edges",b[c("image-rendering")]="-webkit-optimize-contrast",b[c("-ms-interpolation-mode")]="nearest-neighbor",b[c("image-rendering")]="optimize-contrast",b[c("image-rendering")]="pixelated",b[c("image-rendering")]="crisp-edges"):(b[c("image-rendering")]="optimizeQuality",b[c("-ms-interpolation-mode")]="bicubic",b[c("image-rendering")]="auto")},debug:function(){d.log(this._changedObjs)},_render:function(){var a=d.domLayer,b=a._changedObjs;if(a._dirtyViewport&&(a._setViewport(),a._dirtyViewport=!1),b.length){for(var c=0,e=b.length;e>c;++c)b[c].draw()._changed=!1;b.length=0}},add:function(a){this._changedObjs.push(a)},_setViewport:function(){var a=d.domLayer._div.style,b=d.viewport;a.transform=a[d.support.prefix+"Transform"]="scale("+b._scale+", "+b._scale+")",a.left=Math.round(b._x*b._scale)+"px",a.top=Math.round(b._y*b._scale)+"px",a.zIndex=10}}})},{"../core/core.js":7}],25:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.c("DOM",{_element:null,_cssStyles:null,avoidCss3dTransforms:!1,init:function(){var a=d.domLayer;a._div||a.init(),this._drawLayer=a,this._cssStyles={visibility:"",left:"",top:"",width:"",height:"",zIndex:"",opacity:"",transformOrigin:"",transform:""},this._element=e.createElement("div"),a._div.appendChild(this._element),this._element.style.position="absolute",this._element.id="ent"+this[0],this.bind("Invalidate",this._invalidateDOM),this.bind("NewComponent",this._updateClass),this.bind("RemoveComponent",this._removeClass),this._invalidateDOM()},remove:function(){this.undraw(),this.unbind("NewComponent",this._updateClass),this.unbind("RemoveComponent",this._removeClass),this.unbind("Invalidate",this._invalidateDOM)},getDomId:function(){return this._element.id},_removeClass:function(a){var b=0,c=this.__c,d="";for(b in c)b!=a&&(d+=" "+b);d=d.substr(1),this._element.className=d},_updateClass:function(){var a=0,b=this.__c,c="";for(a in b)c+=" "+a;c=c.substr(1),this._element.className=c},_invalidateDOM:function(){this._changed||(this._changed=!0,this._drawLayer.add(this))},DOM:function(a){return a&&a.nodeType&&(this.undraw(),this._element=a,this._element.style.position="absolute"),this},draw:function(){var a=this._element.style,b=this.__coord||[0,0,0,0],c={x:b[0],y:b[1],w:b[2],h:b[3]},e=d.support.prefix,f=[];if(this._cssStyles.visibility!==this._visible&&(this._cssStyles.visibility=this._visible,this._visible?a.visibility="visible":a.visibility="hidden"),d.support.css3dtransform&&!this.avoidCss3dTransforms?f.push("translate3d("+~~this._x+"px,"+~~this._y+"px,0)"):(this._cssStyles.left!==this._x&&(this._cssStyles.left=this._x,a.left=~~this._x+"px"),this._cssStyles.top!==this._y&&(this._cssStyles.top=this._y,a.top=~~this._y+"px")),this._cssStyles.width!==this._w&&(this._cssStyles.width=this._w,a.width=~~this._w+"px"),this._cssStyles.height!==this._h&&(this._cssStyles.height=this._h,a.height=~~this._h+"px"),this._cssStyles.zIndex!==this._z&&(this._cssStyles.zIndex=this._z,a.zIndex=this._z),this._cssStyles.opacity!==this._alpha&&(this._cssStyles.opacity=this._alpha,a.opacity=this._alpha,a[e+"Opacity"]=this._alpha),this._mbr){var g=this._origin.x+"px "+this._origin.y+"px";a.transformOrigin=g,a[e+"TransformOrigin"]=g,d.support.css3dtransform?f.push("rotateZ("+this._rotation+"deg)"):f.push("rotate("+this._rotation+"deg)")}return this._flipX&&f.push("scaleX(-1)"),this._flipY&&f.push("scaleY(-1)"),this._cssStyles.transform!=f.join(" ")&&(this._cssStyles.transform=f.join(" "),a.transform=this._cssStyles.transform,a[e+"Transform"]=this._cssStyles.transform),this.trigger("Draw",{style:a,type:"DOM",co:c}),this},undraw:function(){var a=this._element;return a&&null!==a.parentNode&&a.parentNode.removeChild(a),this},css:function(a,b){var c,e,f=this._element,g=f.style;if("object"==typeof a)for(c in a)a.hasOwnProperty(c)&&(e=a[c],"number"==typeof e&&(e+="px"),g[d.domHelper.camelize(c)]=e);else{if(!b)return d.domHelper.getStyle(f,a);"number"==typeof b&&(b+="px"),g[d.domHelper.camelize(a)]=b}return this.trigger("Invalidate"),this}})},{"../core/core.js":7}],26:[function(a,b,c){var d=a("../core/core.js");d.extend({_pixelartEnabled:!1,pixelart:function(a){d._pixelartEnabled=a,d.trigger("PixelartSet",a)}})},{"../core/core.js":7}],27:[function(a,b,c){var d=a("../core/core.js"),e=d.TextureManager=function(a,b){this.gl=a,this.webgl=b,this.max_units=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.bound_textures=[],this.registered_textures={},this.active=null};e.prototype={reset:function(){for(var a,b=0;b<this.bound_textures.length;b++)a=this.bound_textures[b],a.unbind();this.bound_textures=[],this.active=null},makeTexture:function(a,b,c){var d=(this.gl,this.webgl),e="texture-(r:"+c+")-"+a;if("undefined"!=typeof this.registered_textures[e])return this.registered_textures[e];var g=new f(this,e);return this.registered_textures[e]=g,this.bindTexture(g),g.setImage(b),g.setFilter(d.texture_filter),g.setRepeat(c),g},smallest:function(){for(var a=1/0,b=null,c=0;c<this.bound_textures.length;c++){var d=this.bound_textures[c];d.size<a&&(a=d.size,b=c)}return b},getAvailableUnit:function(){return this.bound_textures.length<this.max_units?this.bound_textures.length:this.smallest()},bindTexture:function(a){if(null===a.unit){var b=this.getAvailableUnit();this.bound_textures[b]&&this.unbindTexture(this.bound_textures[b]),this.bound_textures[b]=a,a.bind(b)}},unbindTexture:function(a){a.unbind()},setActiveTexture:function(a){this.active!==a.id&&(this.gl.activeTexture(this.gl[a.name]),this.active=a.unit)}};var f=d.TextureWrapper=function(a,b){this.manager=a,this.gl=a.gl,this.glTexture=this.gl.createTexture(),this.id=b,this.active=!1,this.unit=null,this.powerOfTwo=!1};f.prototype={bind:function(a){var b=this.gl;this.unit=a,this.name="TEXTURE"+a,this.manager.setActiveTexture(this),b.bindTexture(b.TEXTURE_2D,this.glTexture)},isActive:function(){return this.manager.active===this.unit},unbind:function(){this.unit=null,this.name=null,this.isActive()&&(this.manager.active=null)},setImage:function(a){if(!this.isActive())throw"Trying to set image of texture that isn't active";this.width=a.width,this.height=a.height,this.size=a.width*a.height,this.powerOfTwo=!(Math.log(a.width)/Math.LN2!=Math.floor(Math.log(a.width)/Math.LN2)||Math.log(a.height)/Math.LN2!=Math.floor(Math.log(a.height)/Math.LN2));var b=this.gl;b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a)},setFilter:function(a){if(!this.isActive())throw"Trying to set filter of texture that isn't active";var b=this.gl;b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a)},setRepeat:function(a){if(!this.isActive())throw"Trying to set repeat property of texture that isn't active";if(a&&!this.powerOfTwo)throw"Can't create a repeating image whose dimensions aren't a power of 2 in WebGL contexts";var b=this.gl;this.repeatMode=a?b.REPEAT:b.CLAMP_TO_EDGE,b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,this.repeatMode),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,this.repeatMode)},setToProgram:function(a,b,c){if(null===this.unit)throw"Trying to use texture not set to a texture unit.";var d=this.gl;d.useProgram(a),d.uniform1i(d.getUniformLocation(a,b),this.unit),d.uniform2f(d.getUniformLocation(a,c),this.width,this.height)}}},{"../core/core.js":7}],28:[function(a,b,c){var d=a("../core/core.js");d.c("HTML",{inner:"",init:function(){this.requires("2D, DOM")},replace:function(a){return this.inner=a,this._element.innerHTML=a,this},append:function(a){return this.inner+=a,this._element.innerHTML+=a,this},prepend:function(a){return this.inner=a+this.inner,this._element.innerHTML=a+this.inner,this}})},{"../core/core.js":7}],29:[function(a,b,c){var d=a("../core/core.js"),e="attribute vec2 aPosition;\nattribute vec3 aOrientation;\nattribute vec2 aLayer;\nattribute vec2 aTextureCoord;\n\nvarying mediump vec3 vTextureCoord;\n\nuniform vec4 uViewport;\nuniform mediump vec2 uTextureDimensions;\n\nmat4 viewportScale = mat4(2.0 / uViewport.z, 0, 0, 0,    0, -2.0 / uViewport.w, 0,0,    0, 0,1,0,    -1,+1,0,1);\nvec4 viewportTranslation = vec4(uViewport.xy, 0, 0);\n\nvoid main() {\n  vec2 pos = aPosition;\n  vec2 entityOrigin = aOrientation.xy;\n  mat2 entityRotationMatrix = mat2(cos(aOrientation.z), sin(aOrientation.z), -sin(aOrientation.z), cos(aOrientation.z));\n  \n  pos = entityRotationMatrix * (pos - entityOrigin) + entityOrigin ;\n  gl_Position = viewportScale * (viewportTranslation + vec4(pos, 1.0/(1.0+exp(aLayer.x) ), 1) );\n  vTextureCoord = vec3(aTextureCoord, aLayer.y);\n}",f="varying mediump vec3 vTextureCoord;\n  \nuniform sampler2D uSampler;\nuniform mediump vec2 uTextureDimensions;\n\nvoid main(void) {\n  highp vec2 coord =   vTextureCoord.xy / uTextureDimensions;\n  mediump vec4 base_color = texture2D(uSampler, coord);\n  gl_FragColor = vec4(base_color.rgb*base_color.a*vTextureCoord.z, base_color.a*vTextureCoord.z);\n}",g=[{
name:"aPosition",width:2},{name:"aOrientation",width:3},{name:"aLayer",width:2},{name:"aTextureCoord",width:2}];d.c("Image",{_repeat:"repeat",ready:!1,init:function(){this.bind("Draw",this._drawImage)},remove:function(){this.unbind("Draw",this._drawImage)},image:function(a,b){if(this.__image=a,this._repeat=b||"no-repeat",this.img=d.asset(a),this.img)this._onImageLoad();else{this.img=new Image,d.asset(a,this.img),this.img.src=a;var c=this;this.img.onload=function(){c._onImageLoad()}}return this.trigger("Invalidate"),this},_onImageLoad:function(){this.has("Canvas")?this._pattern=this._drawContext.createPattern(this.img,this._repeat):this.has("WebGL")&&(this._establishShader("image:"+this.__image,f,e,g),this.program.setTexture(this.webgl.makeTexture(this.__image,this.img,"no-repeat"!==this._repeat))),"no-repeat"===this._repeat&&(this.w=this.w||this.img.width,this.h=this.h||this.img.height),this.ready=!0,this.trigger("Invalidate")},_drawImage:function(a){if("canvas"===a.type){if(!this.ready||!this._pattern)return;var b=a.ctx;b.fillStyle=this._pattern,b.save(),b.translate(a.pos._x,a.pos._y),b.fillRect(0,0,a.pos._w,a.pos._h),b.restore()}else if("DOM"===a.type)this.__image&&(a.style.backgroundImage="url("+this.__image+")",a.style.backgroundRepeat=this._repeat);else if("webgl"===a.type){var c=a.pos;a.program.writeVector("aTextureCoord",0,0,0,c._h,c._w,0,c._w,c._h)}}})},{"../core/core.js":7}],30:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.c("Particles",{init:function(){this._Particles=d.clone(this._Particles),this._Particles.parentEntity=this},particles:function(a){if(!d.support.canvas||d.deactivateParticles)return this;var b,c,f,g,h;b=e.createElement("canvas"),b.width=d.viewport.width,b.height=d.viewport.height,b.style.position="absolute",b.style.left="0px",b.style.top="0px",d.stage.elem.appendChild(b),c=b.getContext("2d"),this._Particles.init(a),this.bind("Remove",function(){d.stage.elem.removeChild(b)}).bind("RemoveComponent",function(a){"particles"===a&&d.stage.elem.removeChild(b)}),f=this.x+d.viewport.x,g=this.y+d.viewport.y,this._Particles.position=this._Particles.vectorHelpers.create(f,g);var i={x:d.viewport.x,y:d.viewport.y};return this.bind("EnterFrame",function(){f=this.x+d.viewport.x,g=this.y+d.viewport.y,this._Particles.viewportDelta={x:d.viewport.x-i.x,y:d.viewport.y-i.y},i={x:d.viewport.x,y:d.viewport.y},this._Particles.position=this._Particles.vectorHelpers.create(f,g),"function"==typeof d.rectManager.boundingRect?(h=d.rectManager.boundingRect(this._Particles.register),h&&c.clearRect(h._x,h._y,h._w,h._h)):c.clearRect(0,0,d.viewport.width,d.viewport.height),this._Particles.update(),this._Particles.render(c)}),this},_Particles:{presets:{maxParticles:150,size:18,sizeRandom:4,speed:1,speedRandom:1.2,lifeSpan:29,lifeSpanRandom:7,angle:65,angleRandom:34,startColour:[255,131,0,1],startColourRandom:[48,50,45,0],endColour:[245,35,0,0],endColourRandom:[60,60,60,0],sharpness:20,sharpnessRandom:10,spread:10,duration:-1,fastMode:!1,gravity:{x:0,y:.1},jitter:0,originOffset:{x:0,y:0},particles:[],active:!0,particleCount:0,elapsedFrames:0,emissionRate:0,emitCounter:0,particleIndex:0},init:function(a){this.position=this.vectorHelpers.create(0,0),"undefined"==typeof a&&(a={});for(var b in this.presets)"undefined"!=typeof a[b]?this[b]=a[b]:this[b]=this.presets[b];this.emissionRate=this.maxParticles/this.lifeSpan,this.positionRandom=this.vectorHelpers.create(this.spread,this.spread)},addParticle:function(){if(this.particleCount==this.maxParticles)return!1;var a=new this.particle(this.vectorHelpers);return this.initParticle(a),this.particles[this.particleCount]=a,this.particleCount++,!0},RANDM1TO1:function(){return 2*Math.random()-1},initParticle:function(a){a.position.x=d.viewport._scale*(this.position.x+this.originOffset.x+this.positionRandom.x*this.RANDM1TO1()),a.position.y=d.viewport._scale*(this.position.y+this.originOffset.y+this.positionRandom.y*this.RANDM1TO1());var b=(this.angle+this.angleRandom*this.RANDM1TO1())*(Math.PI/180),c=this.vectorHelpers.create(Math.sin(b),-Math.cos(b)),e=this.speed+this.speedRandom*this.RANDM1TO1();a.direction=this.vectorHelpers.multiply(c,e),a.size=d.viewport._scale*(this.size+this.sizeRandom*this.RANDM1TO1()),a.size=a.size<0?0:~~a.size,a.timeToLive=this.lifeSpan+this.lifeSpanRandom*this.RANDM1TO1(),a.sharpness=this.sharpness+this.sharpnessRandom*this.RANDM1TO1(),a.sharpness=a.sharpness>100?100:a.sharpness<0?0:a.sharpness,a.sizeSmall=~~(a.size/200*a.sharpness);var f=[this.startColour[0]+this.startColourRandom[0]*this.RANDM1TO1(),this.startColour[1]+this.startColourRandom[1]*this.RANDM1TO1(),this.startColour[2]+this.startColourRandom[2]*this.RANDM1TO1(),this.startColour[3]+this.startColourRandom[3]*this.RANDM1TO1()],g=[this.endColour[0]+this.endColourRandom[0]*this.RANDM1TO1(),this.endColour[1]+this.endColourRandom[1]*this.RANDM1TO1(),this.endColour[2]+this.endColourRandom[2]*this.RANDM1TO1(),this.endColour[3]+this.endColourRandom[3]*this.RANDM1TO1()];a.colour=f,a.deltaColour[0]=(g[0]-f[0])/a.timeToLive,a.deltaColour[1]=(g[1]-f[1])/a.timeToLive,a.deltaColour[2]=(g[2]-f[2])/a.timeToLive,a.deltaColour[3]=(g[3]-f[3])/a.timeToLive},update:function(){if(this.active&&this.emissionRate>0){var a=1/this.emissionRate;for(this.emitCounter++;this.particleCount<this.maxParticles&&this.emitCounter>a;)this.addParticle(),this.emitCounter-=a;this.elapsedFrames++,-1!=this.duration&&this.duration<this.elapsedFrames&&this.stop()}this.particleIndex=0,this.register=[];for(var b;this.particleIndex<this.particleCount;){var c=this.particles[this.particleIndex];if(c.timeToLive>0){c.direction=this.vectorHelpers.add(c.direction,this.gravity),c.position=this.vectorHelpers.add(c.position,c.direction),c.position=this.vectorHelpers.add(c.position,this.viewportDelta),this.jitter&&(c.position.x+=this.jitter*this.RANDM1TO1(),c.position.y+=this.jitter*this.RANDM1TO1()),c.timeToLive--;var d=c.colour[0]+=c.deltaColour[0],e=c.colour[1]+=c.deltaColour[1],f=c.colour[2]+=c.deltaColour[2],g=c.colour[3]+=c.deltaColour[3];b=[],b.push("rgba("+(d>255?255:0>d?0:~~d)),b.push(e>255?255:0>e?0:~~e),b.push(f>255?255:0>f?0:~~f),b.push((g>1?1:0>g?0:g.toFixed(2))+")"),c.drawColour=b.join(","),this.fastMode||(b[3]="0)",c.drawColourEnd=b.join(",")),this.particleIndex++}else this.particleIndex!=this.particleCount-1&&(this.particles[this.particleIndex]=this.particles[this.particleCount-1]),this.particleCount--;var h={};h._x=~~c.position.x,h._y=~~c.position.y,h._w=c.size,h._h=c.size,this.register.push(h)}},stop:function(){this.active=!1,this.elapsedFrames=0,this.emitCounter=0,this.parentEntity.trigger("ParticleEnd")},render:function(a){for(var b=0,c=this.particleCount;c>b;b++){var e=this.particles[b],f=e.size,g=f>>1;if(!(e.position.x+f<0||e.position.y+f<0||e.position.x-f>d.viewport.width||e.position.y-f>d.viewport.height)){var h=~~e.position.x,i=~~e.position.y;if(this.fastMode)a.fillStyle=e.drawColour;else{var j=a.createRadialGradient(h+g,i+g,e.sizeSmall,h+g,i+g,g);j.addColorStop(0,e.drawColour),j.addColorStop(.9,e.drawColourEnd),a.fillStyle=j}a.fillRect(h,i,f,f)}}},particle:function(a){this.position=a.create(0,0),this.direction=a.create(0,0),this.size=0,this.sizeSmall=0,this.timeToLive=0,this.colour=[],this.drawColour="",this.deltaColour=[],this.sharpness=0},vectorHelpers:{create:function(a,b){return{x:a,y:b}},multiply:function(a,b){return a.x*=b,a.y*=b,a},add:function(a,b){return a.x+=b.x,a.y+=b.y,a}}}})},{"../core/core.js":7}],31:[function(a,b,c){var d=a("../core/core.js");d.c("SpriteAnimation",{_reels:null,_currentReelId:null,_currentReel:null,_isPlaying:!1,animationSpeed:1,init:function(){this._reels={}},reel:function(a,b,c,e,f){if(0===arguments.length)return this._currentReelId;if(1===arguments.length&&"string"==typeof a){if("undefined"==typeof this._reels[a])throw"The specified reel "+a+" is undefined.";return this.pauseAnimation(),this._currentReelId!==a&&(this._currentReelId=a,this._currentReel=this._reels[a],this._updateSprite(),this.trigger("ReelChange",this._currentReel)),this}var g,h,i;if(g={id:a,frames:[],currentFrame:0,easing:new d.easing(b),defaultLoops:1},g.duration=g.easing.duration,"number"==typeof c)if(h=c,i=e,f>=0)for(;c+f>h;h++)g.frames.push([h,i]);else for(;h>c+f;h--)g.frames.push([h,i]);else{if(3!==arguments.length||"object"!=typeof c)throw"Urecognized arguments. Please see the documentation for 'reel(...)'.";g.frames=c}return this._reels[a]=g,this},animate:function(a,b){"string"==typeof a&&this.reel(a);var c=this._currentReel;if("undefined"==typeof c||null===c)throw"No reel is specified, and there is no currently active reel.";return this.pauseAnimation(),"undefined"==typeof b&&(b="number"==typeof a?a:1),c.easing.reset(),this.loops(b),this._setFrame(0),this.bind("EnterFrame",this._animationTick),this._isPlaying=!0,this.trigger("StartAnimation",c),this},resumeAnimation:function(){return this._isPlaying===!1&&null!==this._currentReel&&(this.bind("EnterFrame",this._animationTick),this._isPlaying=!0,this._currentReel.easing.resume(),this.trigger("StartAnimation",this._currentReel)),this},pauseAnimation:function(){return this._isPlaying===!0&&(this.unbind("EnterFrame",this._animationTick),this._isPlaying=!1,this._reels[this._currentReelId].easing.pause()),this},resetAnimation:function(){var a=this._currentReel;if(null===a)throw"No active reel to reset.";return this.reelPosition(0),a.easing.repeat(a.defaultLoops),this},loops:function(a){return 0===arguments.length?null!==this._currentReel?this._currentReel.easing.loops:0:(null!==this._currentReel&&(0>a&&(a=1/0),this._currentReel.easing.repeat(a),this._currentReel.defaultLoops=a),this)},reelPosition:function(a){if(null===this._currentReel)throw"No active reel.";if(0===arguments.length)return this._currentReel.currentFrame;var b,c=this._currentReel.frames.length;if("end"===a&&(a=c-1),1>a&&a>0)b=a,a=Math.floor(c*b);else{if(a!==Math.floor(a))throw"Position "+a+" is invalid.";0>a&&(a=c-1+a),b=a/c}return a=Math.min(a,c-1),a=Math.max(a,0),this._setProgress(b),this._setFrame(a),this},_animationTick:function(a){var b=this._reels[this._currentReelId];b.easing.tick(a.dt*this.animationSpeed);var c=b.easing.value(),d=Math.min(Math.floor(b.frames.length*c),b.frames.length-1);this._setFrame(d),b.easing.complete===!0&&(this.pauseAnimation(),this.trigger("AnimationEnd",this._currentReel))},_setFrame:function(a){var b=this._currentReel;a!==b.currentFrame&&(b.currentFrame=a,this._updateSprite(),this.trigger("FrameChange",b))},_updateSprite:function(){var a=this._currentReel,b=a.frames[a.currentFrame];this.sprite(b[0],b[1])},_setProgress:function(a,b){this._currentReel.easing.setProgress(a,b)},isPlaying:function(a){return this._isPlaying?a?this._currentReelId===a:!!this._currentReelId:!1},getReel:function(a){if(0===arguments.length){if(!this._currentReelId)return null;a=this._currentReelId}return this._reels[a]}})},{"../core/core.js":7}],32:[function(a,b,c){var d=a("../core/core.js"),e="attribute vec2 aPosition;\nattribute vec3 aOrientation;\nattribute vec2 aLayer;\nattribute vec2 aTextureCoord;\n\nvarying mediump vec3 vTextureCoord;\n\nuniform vec4 uViewport;\nuniform mediump vec2 uTextureDimensions;\n\nmat4 viewportScale = mat4(2.0 / uViewport.z, 0, 0, 0,    0, -2.0 / uViewport.w, 0,0,    0, 0,1,0,    -1,+1,0,1);\nvec4 viewportTranslation = vec4(uViewport.xy, 0, 0);\n\nvoid main() {\n  vec2 pos = aPosition;\n  vec2 entityOrigin = aOrientation.xy;\n  mat2 entityRotationMatrix = mat2(cos(aOrientation.z), sin(aOrientation.z), -sin(aOrientation.z), cos(aOrientation.z));\n  \n  pos = entityRotationMatrix * (pos - entityOrigin) + entityOrigin ;\n  gl_Position = viewportScale * (viewportTranslation + vec4(pos, 1.0/(1.0+exp(aLayer.x) ), 1) );\n  vTextureCoord = vec3(aTextureCoord, aLayer.y);\n}",f="varying mediump vec3 vTextureCoord;\n  \nuniform sampler2D uSampler;\nuniform mediump vec2 uTextureDimensions;\n\nvoid main(void) {\n  highp vec2 coord =   vTextureCoord.xy / uTextureDimensions;\n  mediump vec4 base_color = texture2D(uSampler, coord);\n  gl_FragColor = vec4(base_color.rgb*base_color.a*vTextureCoord.z, base_color.a*vTextureCoord.z);\n}",g=[{name:"aPosition",width:2},{name:"aOrientation",width:3},{name:"aLayer",width:2},{name:"aTextureCoord",width:2}];d.extend({sprite:function(a,b,c,h,i,j,k){var l,m,n;"string"==typeof a&&(j=i,i=h,h=b,c=a,a=1,b=1),"string"==typeof b&&(j=i,i=h,h=c,c=b,b=a),!j&&i&&(j=i),i=parseInt(i||0,10),j=parseInt(j||0,10);var o=function(){this.ready=!0,this.trigger("Invalidate")};n=d.asset(c),n||(n=new Image,n.src=c,d.asset(c,n),n.onload=function(){for(var a in h)d(a).each(o)});var p=function(){this.requires("2D, Sprite"),this.__trim=[0,0,0,0],this.__image=c,this.__coord=[this.__coord[0],this.__coord[1],this.__coord[2],this.__coord[3]],this.__tile=a,this.__tileh=b,this.__padding=[i,j],this.__padBorder=k,this.sprite(this.__coord[0],this.__coord[1],this.__coord[2],this.__coord[3]),this.img=n,this.img.complete&&this.img.width>0&&(this.ready=!0,this.trigger("Invalidate")),this.w=this.__coord[2],this.h=this.__coord[3],this.has("WebGL")&&(this._establishShader(this.__image,f,e,g),this.program.setTexture(this.webgl.makeTexture(this.__image,this.img,!1)))};for(l in h)h.hasOwnProperty(l)&&(m=h[l],d.c(l,{ready:!1,__coord:[m[0],m[1],m[2]||1,m[3]||1],init:p}));return this}}),d.c("Sprite",{__image:"",__tile:0,__tileh:0,__padding:null,__trim:null,img:null,ready:!1,init:function(){this.__trim=[0,0,0,0],this.bind("Draw",this._drawSprite)},remove:function(){this.unbind("Draw",this._drawSprite)},_drawSprite:function(a){var b=a.co,c=a.pos,d=a.ctx;if("canvas"===a.type)d.drawImage(this.img,b.x,b.y,b.w,b.h,c._x,c._y,c._w,c._h);else if("DOM"===a.type){var e=this._h/b.h,f=this._w/b.w,g=this._element.style,h=g.backgroundColor;"initial"===h&&(h="");var i=h+" url('"+this.__image+"') no-repeat";i!==g.background&&(g.background=i),g.backgroundPosition="-"+b.x*f+"px -"+b.y*e+"px",(1!=e||1!=f)&&(g.backgroundSize=this.img.width*f+"px "+this.img.height*e+"px")}else"webgl"===a.type&&a.program.writeVector("aTextureCoord",b.x,b.y,b.x,b.y+b.h,b.x+b.w,b.y,b.x+b.w,b.y+b.h)},sprite:function(a,b,c,d){return this.__coord=this.__coord||[0,0,0,0],this.__coord[0]=a*(this.__tile+this.__padding[0])+(this.__padBorder?this.__padding[0]:0)+this.__trim[0],this.__coord[1]=b*(this.__tileh+this.__padding[1])+(this.__padBorder?this.__padding[1]:0)+this.__trim[1],"undefined"!=typeof c&&"undefined"!=typeof d&&(this.__coord[2]=this.__trim[2]||c*this.__tile||this.__tile,this.__coord[3]=this.__trim[3]||d*this.__tileh||this.__tileh),this.trigger("Invalidate"),this},crop:function(a,b,c,d){var e=this._mbr||this.pos();return this.__trim=[],this.__trim[0]=a,this.__trim[1]=b,this.__trim[2]=c,this.__trim[3]=d,this.__coord[0]+=a,this.__coord[1]+=b,this.__coord[2]=c,this.__coord[3]=d,this._w=c,this._h=d,this.trigger("Invalidate",e),this}})},{"../core/core.js":7}],33:[function(a,b,c){var d=a("../core/core.js");d.c("Text",{_text:"",defaultSize:"10px",defaultFamily:"sans-serif",defaultVariant:"normal",defaultLineHeight:"normal",ready:!0,init:function(){this.requires("2D"),this._textFont={type:"",weight:"",size:this.defaultSize,lineHeight:this.defaultLineHeight,family:this.defaultFamily,variant:this.defaultVariant},this.bind("Draw",function(a){var b=this._fontString();if("DOM"===a.type){var c=this._element,d=c.style;d.color=this._textColor,d.font=b,c.innerHTML=this._text}else if("canvas"===a.type){var e=a.ctx;e.save(),e.textBaseline="top",e.fillStyle=this._textColor||"rgb(0,0,0)",e.font=b,e.fillText(this._text,a.pos._x,a.pos._y),e.restore()}})},_getFontHeight:function(){var a=/([a-zA-Z]+)\b/,b={px:1,pt:4/3,pc:16,cm:96/2.54,mm:96/25.4,"in":96,em:void 0,ex:void 0};return function(c){var d=parseFloat(c),e=a.exec(c),f=e?e[1]:"px";return void 0!==b[f]?Math.ceil(d*b[f]):Math.ceil(d)}}(),text:function(a){return"undefined"==typeof a||null===a?this._text:("function"==typeof a?this._text=a.call(this):this._text=a,this.has("Canvas")&&this._resizeForCanvas(),this.trigger("Invalidate"),this)},_resizeForCanvas:function(){var a=this._drawContext;a.font=this._fontString(),this.w=a.measureText(this._text).width;var b=this._textFont.size||this.defaultSize;this.h=1.1*this._getFontHeight(b)},_fontString:function(){return this._textFont.type+" "+this._textFont.variant+" "+this._textFont.weight+" "+this._textFont.size+" / "+this._textFont.lineHeight+" "+this._textFont.family},textColor:function(a){return d.assignColor(a,this),this._textColor="rgba("+this._red+", "+this._green+", "+this._blue+", "+this._strength+")",this.trigger("Invalidate"),this},textFont:function(a,b){if(1===arguments.length){if("string"==typeof a)return this._textFont[a];if("object"==typeof a)for(var c in a)"family"==c?this._textFont[c]="'"+a[c]+"'":this._textFont[c]=a[c]}else this._textFont[a]=b;return this.has("Canvas")&&this._resizeForCanvas(),this.trigger("Invalidate"),this},unselectable:function(){return this.has("DOM")&&(this.css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",cursor:"default"}),this.trigger("Invalidate")),this}})},{"../core/core.js":7}],34:[function(a,b,c){var d=a("../core/core.js"),e=window.document;d.extend({viewport:{clampToEntities:!0,_width:0,_height:0,_x:0,_y:0,_scale:1,bounds:null,scroll:function(a,b){this[a]=b,d.trigger("ViewportScroll"),d.trigger("InvalidateViewport")},rect_object:{_x:0,_y:0,_w:0,_h:0},rect:function(){return this.rect_object._x=-this._x,this.rect_object._y=-this._y,this.rect_object._w=this._width/this._scale,this.rect_object._h=this._height/this._scale,this.rect_object},pan:function(){function a(a){h.tick(a.dt);var i=h.value();d.viewport.x=(1-i)*f+i*c,d.viewport.y=(1-i)*g+i*e,d.viewport._clamp(),h.complete&&(b(),d.trigger("CameraAnimationDone"))}function b(){d.unbind("EnterFrame",a)}var c,e,f,g,h;return d._preBind("StopCamera",b),function(b,i,j,k){d.trigger("StopCamera"),"reset"!=b&&(f=d.viewport._x,g=d.viewport._y,c=f-b,e=g-i,h=new d.easing(j,k),d.uniqueBind("EnterFrame",a))}}(),follow:function(){function a(){var a=d.viewport._scale;d.viewport.scroll("_x",-(this.x+this.w/2-d.viewport.width/2/a-e*a)),d.viewport.scroll("_y",-(this.y+this.h/2-d.viewport.height/2/a-f*a)),d.viewport._clamp()}function b(){c&&(c.unbind("Move",a),c.unbind("ViewportScale",a),c.unbind("ViewportResize",a))}var c,e,f;return d._preBind("StopCamera",b),function(b,g,h){b&&b.has("2D")&&(d.trigger("StopCamera"),c=b,e="undefined"!=typeof g?g:0,f="undefined"!=typeof h?h:0,b.bind("Move",a),b.bind("ViewportScale",a),b.bind("ViewportResize",a),a.call(b))}}(),centerOn:function(a,b){var c=a.x+d.viewport.x,e=a.y+d.viewport.y,f=a.w/2,g=a.h/2,h=d.viewport.width/2/d.viewport._scale,i=d.viewport.height/2/d.viewport._scale,j=c+f-h,k=e+g-i;d.viewport.pan(j,k,b)},zoom:function(){function a(){d.unbind("EnterFrame",b)}function b(b){var e,l;k.tick(b.dt),e=Math.pow(f,k.value()),l=1===f?k.value():(1/e-1)/(1/f-1),d.viewport.scale(e*c),d.viewport.scroll("_x",g*(1-l)+h*l),d.viewport.scroll("_y",i*(1-l)+j*l),d.viewport._clamp(),k.complete&&(a(),d.trigger("CameraAnimationDone"))}d._preBind("StopCamera",a);var c,e,f,g,h,i,j,k;return function(a,l,m,n,o){return a?(arguments.length<=2&&(n=l,l=d.viewport.x-d.viewport.width,m=d.viewport.y-d.viewport.height),d.trigger("StopCamera"),c=d.viewport._scale,f=a,e=c*f,g=d.viewport.x,i=d.viewport.y,h=-(l-d.viewport.width/(2*e)),j=-(m-d.viewport.height/(2*e)),k=new d.easing(n,o),void d.uniqueBind("EnterFrame",b)):void d.viewport.scale(1)}}(),scale:function(){return function(a){this._scale=a?a:1,d.trigger("InvalidateViewport"),d.trigger("ViewportScale")}}(),mouselook:function(){var a=!1,b=!1,c={};return old={},function(e,f){if("boolean"==typeof e)return a=e,void(a?d.mouseObjs++:d.mouseObjs=Math.max(0,d.mouseObjs-1));if(a)switch(e){case"move":case"drag":if(!b)return;diff={x:f.clientX-c.x,y:f.clientY-c.y},c.x=f.clientX,c.y=f.clientY,d.viewport.x+=diff.x,d.viewport.y+=diff.y,d.viewport._clamp();break;case"start":d.trigger("StopCamera"),c.x=f.clientX,c.y=f.clientY,b=!0;break;case"stop":b=!1}}}(),_clamp:function(){if(this.clampToEntities){var a=d.clone(this.bounds)||d.map.boundaries();a.max.x*=this._scale,a.min.x*=this._scale,a.max.y*=this._scale,a.min.y*=this._scale,a.max.x-a.min.x>d.viewport.width?d.viewport.x<(-a.max.x+d.viewport.width)/this._scale?d.viewport.x=(-a.max.x+d.viewport.width)/this._scale:d.viewport.x>-a.min.x&&(d.viewport.x=-a.min.x):d.viewport.x=-1*(a.min.x+(a.max.x-a.min.x)/2-d.viewport.width/2),a.max.y-a.min.y>d.viewport.height?d.viewport.y<(-a.max.y+d.viewport.height)/this._scale?d.viewport.y=(-a.max.y+d.viewport.height)/this._scale:d.viewport.y>-a.min.y&&(d.viewport.y=-a.min.y):d.viewport.y=-1*(a.min.y+(a.max.y-a.min.y)/2-d.viewport.height/2)}},init:function(a,b,c){this._defineViewportProperties(),this._x=0,this._y=0,this._scale=1,this.bounds=null,this._width=a||window.innerWidth,this._height=b||window.innerHeight,"undefined"==typeof c&&(c="cr-stage");var f;if("string"==typeof c)f=e.getElementById(c);else{if(!("undefined"!=typeof HTMLElement?c instanceof HTMLElement:c instanceof Element))throw new TypeError("stage_elem must be a string or an HTMLElement");f=c}d.stage={x:0,y:0,fullscreen:!1,elem:f?f:e.createElement("div")},a||b||(e.body.style.overflow="hidden",d.stage.fullscreen=!0),d.addEvent(this,window,"resize",d.viewport.reload),d.addEvent(this,window,"blur",function(){d.settings.get("autoPause")&&(d._paused||d.pause())}),d.addEvent(this,window,"focus",function(){d._paused&&d.settings.get("autoPause")&&d.pause()}),d.settings.register("stageSelectable",function(a){d.stage.elem.onselectstart=a?function(){return!0}:function(){return!1}}),d.settings.modify("stageSelectable",!1),d.settings.register("stageContextMenu",function(a){d.stage.elem.oncontextmenu=a?function(){return!0}:function(){return!1}}),d.settings.modify("stageContextMenu",!1),d.settings.register("autoPause",function(){}),d.settings.modify("autoPause",!1),f||(e.body.appendChild(d.stage.elem),d.stage.elem.id=c);var g,h=d.stage.elem.style;if(h.width=this.width+"px",h.height=this.height+"px",h.overflow="hidden",d.bind("ViewportResize",function(){d.trigger("InvalidateViewport")}),d.mobile){void 0!==typeof h.webkitTapHighlightColor&&(h.webkitTapHighlightColor="rgba(0,0,0,0)");var i=e.createElement("meta"),j=e.getElementsByTagName("head")[0];i=e.createElement("meta"),i.setAttribute("name","apple-mobile-web-app-capable"),i.setAttribute("content","yes"),j.appendChild(i),d.addEvent(this,d.stage.elem,"touchmove",function(a){a.preventDefault()})}h.position="relative",g=d.domHelper.innerPosition(d.stage.elem),d.stage.x=g.x,d.stage.y=g.y,d.uniqueBind("ViewportResize",this._resize)},_resize:function(){d.stage.elem.style.width=d.viewport.width+"px",d.stage.elem.style.height=d.viewport.height+"px"},_defineViewportProperties:function(){Object.defineProperty(this,"x",{set:function(a){this.scroll("_x",a)},get:function(){return this._x},configurable:!0}),Object.defineProperty(this,"y",{set:function(a){this.scroll("_y",a)},get:function(){return this._y},configurable:!0}),Object.defineProperty(this,"width",{set:function(a){this._width=a,d.trigger("ViewportResize")},get:function(){return this._width},configurable:!0}),Object.defineProperty(this,"height",{set:function(a){this._height=a,d.trigger("ViewportResize")},get:function(){return this._height},configurable:!0})},reload:function(){var a,b=window.innerWidth,c=window.innerHeight;d.stage.fullscreen&&(this._width=b,this._height=c,d.trigger("ViewportResize")),a=d.domHelper.innerPosition(d.stage.elem),d.stage.x=a.x,d.stage.y=a.y},reset:function(){d.viewport.mouselook("stop"),d.trigger("StopCamera"),d.viewport.scroll("_x",0),d.viewport.scroll("_y",0),d.viewport.scale(1)},onScreen:function(a){return d.viewport._x+a._x+a._w>0&&d.viewport._y+a._y+a._h>0&&d.viewport._x+a._x<d.viewport.width&&d.viewport._y+a._y<d.viewport.height}}})},{"../core/core.js":7}],35:[function(a,b,c){var d=a("../core/core.js"),e=window.document;RenderProgramWrapper=function(a,b){this.shader=b,this.context=a,this.array_size=16,this.max_size=1024,this._indexArray=new Uint16Array(6*this.array_size),this._indexBuffer=a.createBuffer()},RenderProgramWrapper.prototype={initAttributes:function(a){this.attributes=a,this._attribute_table={};for(var b=0,c=0;c<a.length;c++){var d=a[c];this._attribute_table[d.name]=d,d.bytes=d.bytes||Float32Array.BYTES_PER_ELEMENT,d.type=d.type||this.context.FLOAT,d.offset=b,d.location=this.context.getAttribLocation(this.shader,d.name),this.context.enableVertexAttribArray(d.location),b+=d.width}this.stride=b,this._attributeArray=new Float32Array(4*this.array_size*this.stride),this._attributeBuffer=this.context.createBuffer(),this._registryHoles=[],this._registrySize=0},growArrays:function(a){if(!(this.array_size>=this.max_size)){var b=Math.min(a,this.max_size),c=new Float32Array(4*b*this.stride),d=new Uint16Array(6*b);c.set(this._attributeArray),d.set(this._indexArray),this._attributeArray=c,this._indexArray=d,this.array_size=b}},registerEntity:function(a){if(0===this._registryHoles.length){if(this._registrySize>=this.max_size)throw"Number of entities exceeds maximum limit.";this._registrySize>=this.array_size&&this.growArrays(2*this.array_size),a._glBufferIndex=this._registrySize,this._registrySize++}else a._glBufferIndex=this._registryHoles.pop()},unregisterEntity:function(a){"number"==typeof a._glBufferIndex&&this._registryHoles.push(a._glBufferIndex),a._glBufferIndex=null},resetRegistry:function(){this._maxElement=0,this._registryHoles.length=0},setCurrentEntity:function(a){this.ent_offset=4*a._glBufferIndex,this.ent=a},switchTo:function(){var a=this.context;a.useProgram(this.shader),a.bindBuffer(a.ARRAY_BUFFER,this._attributeBuffer);for(var b,c=this.attributes,e=0;e<c.length;e++)b=c[e],a.vertexAttribPointer(b.location,b.width,b.type,!1,this.stride*b.bytes,b.offset*b.bytes);var f=this.texture_obj;f&&null===f.unit&&d.webgl.texture_manager.bindTexture(f),this.index_pointer=0},setTexture:function(a){void 0===this.texture_obj&&(a.setToProgram(this.shader,"uSampler","uTextureDimensions"),this.texture_obj=a)},addIndices:function(a){var b=this._indexArray,c=this.index_pointer;b[0+c]=0+a,b[1+c]=1+a,b[2+c]=2+a,b[3+c]=1+a,b[4+c]=2+a,b[5+c]=3+a,this.index_pointer+=6},renderBatch:function(){var a=this.context;a.bindBuffer(a.ARRAY_BUFFER,this._attributeBuffer),a.bufferData(a.ARRAY_BUFFER,this._attributeArray,a.STATIC_DRAW),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this._indexBuffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this._indexArray,a.STATIC_DRAW),a.drawElements(a.TRIANGLES,this.index_pointer,a.UNSIGNED_SHORT,0)},setViewportUniforms:function(a){var b=this.context;b.useProgram(this.shader),b.uniform4f(this.shader.viewport,a._x,a._y,a._width/a._scale,a._height/a._scale)},writeVector:function(a,b,c){for(var d=this._attribute_table[a],e=this.stride,f=d.offset+this.ent_offset*e,g=d.width,h=arguments.length-1,i=this._attributeArray,j=0;4>j;j++)for(var k=0;g>k;k++)i[f+e*j+k]=arguments[(g*j+k)%h+1]}},d.c("WebGL",{init:function(){d.webgl.context||d.webgl.init();var a=this.webgl=d.webgl;a.context;this._changed=!0,this.bind("Change",this._glChange)},remove:function(){this._changed=!0,this.unbind(this._glChange),this.program&&this.program.unregisterEntity(this)},_glChange:function(){this._changed===!1&&(this._changed=!0)},drawVars:{type:"webgl",pos:{},ctx:null,coord:[0,0,0,0],co:{x:0,y:0,w:0,h:0}},draw:function(a,b,c,d,e){if(this.ready){4===arguments.length&&(e=d,d=c,c=b,b=a,a=this.webgl.context);var f=this.drawVars.pos;f._x=this._x+(b||0),f._y=this._y+(c||0),f._w=d||this._w,f._h=e||this._h;var g=this.__coord||[0,0,0,0],h=this.drawVars.co;h.x=g[0]+(b||0),h.y=g[1]+(c||0),h.w=d||g[2],h.h=e||g[3],this._flipX&&(h.x=h.x+h.w,h.w=-h.w),this._flipY&&(h.y=h.y+h.h,h.h=-h.h);var i=this.webgl.context;this.drawVars.gl=i;var j=this.drawVars.program=this.program;return j.setCurrentEntity(this),j.writeVector("aPosition",this._x,this._y,this._x,this._y+this._h,this._x+this._w,this._y,this._x+this._w,this._y+this._h),j.writeVector("aOrientation",this._origin.x+this._x,this._origin.y+this._y,this._rotation*Math.PI/180),j.writeVector("aLayer",this._globalZ,this._alpha),this.trigger("Draw",this.drawVars),j.addIndices(j.ent_offset),this}},_establishShader:function(a,b,c,d){this.program=this.webgl.getProgramWrapper(a,b,c,d),this.program.registerEntity(this),this.ready=!0}}),d.extend({webgl:{context:null,changed_objects:[],_compileShader:function(a,b){var c=this.context,d=c.createShader(b);if(c.shaderSource(d,a),c.compileShader(d),!c.getShaderParameter(d,c.COMPILE_STATUS))throw c.getShaderInfoLog(d);return d},_makeProgram:function(a,b){var c=this.context,d=this._compileShader(a,c.FRAGMENT_SHADER),e=this._compileShader(b,c.VERTEX_SHADER),f=c.createProgram();if(c.attachShader(f,e),c.attachShader(f,d),c.linkProgram(f),!c.getProgramParameter(f,c.LINK_STATUS))throw"Could not initialise shaders";return f.viewport=c.getUniformLocation(f,"uViewport"),f},programs:{},getProgramWrapper:function(a,b,c,e){if(void 0===this.programs[a]){var f=this._makeProgram(b,c),g=new RenderProgramWrapper(this.context,f);g.name=a,g.initAttributes(e),g.setViewportUniforms(d.viewport),this.programs[a]=g}return this.programs[a]},makeTexture:function(a,b,c){var d=this;return d.texture_manager.makeTexture(a,b,c)},init:function(){if(!d.support.webgl)return d.trigger("NoWebGL"),void d.stop();this.changed_objects=[];var a;a=e.createElement("canvas"),a.width=d.viewport.width,a.height=d.viewport.height,a.style.position="absolute",a.style.left="0px",a.style.top="0px",d.stage.elem.appendChild(a);var b;try{b=a.getContext("webgl",{premultipliedalpha:!0})||a.getContext("experimental-webgl",{premultipliedalpha:!0}),b.viewportWidth=a.width,b.viewportHeight=a.height}catch(c){return d.trigger("NoWebGL"),void d.stop()}this.context=b,this._canvas=a,b.clearColor(0,0,0,0),b.disable(b.DEPTH_TEST),b.blendFunc(b.ONE,b.ONE_MINUS_SRC_ALPHA),b.enable(b.BLEND);var f=this;d.uniqueBind("RenderScene",f.render),d.uniqueBind("ViewportResize",f._resize),d.uniqueBind("InvalidateViewport",function(){f.dirtyViewport=!0}),d.uniqueBind("PixelartSet",f._setPixelart),f._setPixelart(d._pixelartEnabled),this.dirtyViewport=!0,this.texture_manager=new d.TextureManager(b,this)},_resize:function(){var a=d.webgl._canvas;a.width=d.viewport.width,a.height=d.viewport.height;var b=d.webgl.context;b.viewportWidth=a.width,b.viewportHeight=a.height},_setPixelart:function(a){var b=d.webgl.context;a?d.webgl.texture_filter=b.NEAREST:d.webgl.texture_filter=b.LINEAR},zsort:function(a,b){return a._globalZ-b._globalZ},visible_gl:[],render:function(a){a=a||d.viewport.rect();var b=d.webgl,c=b.context;c.viewport(0,0,c.viewportWidth,c.viewportHeight),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT);var e=b.programs;if(b.dirtyViewport){for(var f in e)e[f].setViewportUniforms(d.viewport);b.dirtyViewport=!1}var g,h=d.map.search(a),i=0,j=h.length,k=b.visible_gl;for(k.length=0,i=0;j>i;i++)g=h[i],g._visible&&g.__c.WebGL&&g.program&&k.push(g);k.sort(b.zsort),j=k.length;var l=null;for(i=0;j>i;i++)g=k[i],l!==g.program&&(null!==l&&l.renderBatch(),l=g.program,l.index_pointer=0,l.switchTo()),g.draw(),g._changed=!1;null!==l&&l.renderBatch()}}})},{"../core/core.js":7}],36:[function(a,b,c){var d=a("../core/core.js");d.extend({diamondIso:{_tile:{width:0,height:0},getTileDimensions:function(){return{w:this._tile.width,h:this._tile.height}},_map:{width:0,height:0},_origin:{x:0,y:0},_tiles:[],getTile:function(a,b,c){return this._tiles[a][b][c]},init:function(a,b,c,d,e,f){this._tile.width=parseInt(a,10),this._tile.height=parseInt(b,10)||parseInt(a,10)/2,this._tile.r=this._tile.width/this._tile.height,this._map.width=parseInt(c,10),this._map.height=parseInt(d,10)||parseInt(c,10);for(var g=0;c>g;g++){this._tiles[g]=Array();for(var h=0;d>h;h++)this._tiles[g][h]=Array()}return this.x=parseInt(e,10)||0,this.y=parseInt(f,10)||0,this.layerZLevel=c+d+1,this},place:function(a,b,c,d){var e=this.pos2px(b,c),f=(a.tileHeight,a.h/this._tile.height);a.x=e.x,a.y=e.y-(f-2)*this._tile.height-this._tile.height*d,
a.z=this.getZAtLoc(b,c,d);for(var g=0;f-2>=g;g++){var h=this._tiles[b][c][d+g];h&&h!==a&&h.destroy(),this._tiles[b][c][d+g]=a}return this},detachTile:function(a){for(var b=0;b<this._map.width;b++)for(var c=0;c<this._map.height;c++)for(var d=this._tiles[b][c].length,e=0;d>e;e++)if(this._tiles[b][c][e]&&a===this._tiles[b][c][e]){tHeight=a.h/this._tile.height;for(var f=0;f<tHeight;f++)this._tiles[b][c][e+f]=void 0;return{x:b,y:c,z:e}}return!1},centerAt:function(a,b){var c=this.pos2px(a,b);d.viewport.x=-c.x+d.viewport.width/2-this._tile.width,d.viewport.y=-c.y+d.viewport.height/2},getZAtLoc:function(a,b,c){return this.layerZLevel*c+a+b},pos2px:function(a,b){return{x:this.x+(a-b-1)*this._tile.width/2,y:this.y+(a+b)*this._tile.height/2}},px2pos:function(a,b){var c=(b-this.y)/this._tile.height,d=(a-this.x)/this._tile.width,e=c+d,f=c-d;return inX=e>0&&e<this._map.width,inY=f>0&&f<this._map.height,inX&&inY?{x:~~e,y:~~f}:void 0},getOverlappingTiles:function(a,b){var c=this.px2pos(a,b),d=[],e=~~c.x,f=~~c.y,g=this._map.width-e,h=this._map.height-f,i=Math.min(g,h),j=this._tiles[e][f][1];j&&d.push(j);for(var k=1;i>k;k++){var l=this._tiles[e+k][f+k][k];l&&d.push(l)}return d},polygon:function(a){a.requires("Collision");var b=0,c=0,e=[b-0,a.h-c-this._tile.height/2,b-this._tile.width/2,a.h-c-0,b-this._tile.width,a.h-c-this._tile.height/2,b-this._tile.width/2,a.h-c-this._tile.height],f=new d.polygon(e);return f}}})},{"../core/core.js":7}],37:[function(a,b,c){var d=a("../core/core.js");d.extend({isometric:{_tile:{width:0,height:0},_elements:{},_pos:{x:0,y:0},_z:0,size:function(a,b){return this._tile.width=a,this._tile.height=b>0?b:a/2,this},place:function(a,b,c,e){var f=this.pos2px(a,b);return f.top-=c*(this._tile.height/2),e.attr({x:f.left+d.viewport._x,y:f.top+d.viewport._y}).z+=c,this},pos2px:function(a,b){return{left:a*this._tile.width+(1&b)*(this._tile.width/2),top:b*this._tile.height/2}},px2pos:function(a,b){return{x:-Math.ceil(-a/this._tile.width-.5*(1&b)),y:b/this._tile.height*2}},centerAt:function(a,b){if("number"==typeof a&&"number"==typeof b){var c=this.pos2px(a,b);return d.viewport._x=-c.left+d.viewport.width/2-this._tile.width/2,d.viewport._y=-c.top+d.viewport.height/2-this._tile.height/2,this}return{top:-d.viewport._y+d.viewport.height/2-this._tile.height/2,left:-d.viewport._x+d.viewport.width/2-this._tile.width/2}},area:function(){var a=this.centerAt(),b=this.px2pos(-a.left+d.viewport.width/2,-a.top+d.viewport.height/2),c=this.px2pos(-a.left-d.viewport.width/2,-a.top-d.viewport.height/2);return{x:{start:b.x,end:c.x},y:{start:b.y,end:c.y}}}}})},{"../core/core.js":7}],38:[function(a,b,d){var e=a("../core/core.js"),f=window.document;e.extend({audio:{sounds:{},supported:null,codecs:{ogg:'audio/ogg; codecs="vorbis"',wav:'audio/wav; codecs="1"',webma:'audio/webm; codecs="vorbis"',mp3:'audio/mpeg; codecs="mp3"',m4a:'audio/mp4; codecs="mp4a.40.2"'},volume:1,muted:!1,paused:!1,playCheck:null,_canPlay:function(){if(this.supported={},e.support.audio){var a,b=this.audioElement();for(var c in this.codecs)a=b.canPlayType(this.codecs[c]),""!==a&&"no"!==a?this.supported[c]=!0:this.supported[c]=!1}},supports:function(a){return null===this.supported&&this._canPlay(),this.supported[a]?!0:!1},audioElement:function(){return"undefined"!=typeof Audio?new Audio(""):f.createElement("audio")},create:function(a,b){var c=b.substr(b.lastIndexOf(".")+1).toLowerCase();if(!this.supports(c))return!1;var d=this.audioElement();return d.id=a,d.preload="auto",d.volume=e.audio.volume,d.src=b,e.asset(b,d),this.sounds[a]={obj:d,played:0,volume:e.audio.volume},this.sounds[a]},add:function(a,b){if(e.support.audio){var c,d;if(1===arguments.length&&"object"==typeof a)for(var f in a)for(c in a[f])if(d=e.audio.create(f,a[f][c]))break;if("string"==typeof a&&("string"==typeof b&&(d=e.audio.create(a,b)),"object"==typeof b))for(c in b)if(d=e.audio.create(a,b[c]))break;return d}},play:function(a,b,c){if(0!==b&&e.support.audio&&this.sounds[a]){var d=this.sounds[a],f=this.getOpenChannel();if(!f)return null;f.id=a,f.repeat=b;var g=f.obj;return f.volume=d.volume=d.obj.volume=c||e.audio.volume,g.volume=d.volume,g.src=d.obj.src,this.muted&&(g.volume=0),g.play(),d.played++,f.onEnd=function(){d.played<f.repeat||-1==b?(this.currentTime&&(this.currentTime=0),this.play(),d.played++):(f.active=!1,this.pause(),this.removeEventListener("ended",f.onEnd,!0),this.currentTime=0,e.trigger("SoundComplete",{id:f.id}))},g.addEventListener("ended",f.onEnd,!0),g}},maxChannels:7,setChannels:function(a){this.maxChannels=a,a<this.channels.length&&(this.channels.length=a)},channels:[],getOpenChannel:function(){for(var a=0;a<this.channels.length;a++){var b=this.channels[a];if(b.active===!1||b.obj.ended&&b.repeat<=this.sounds[b.id].played)return b.active=!0,b}if(a<this.maxChannels){var c={obj:this.audioElement(),active:!0,_is:function(a){return this.id===a&&this.active}};return this.channels.push(c),c}return null},remove:function(a){if(e.support.audio){var b,c,d=e.paths().audio;if(a)this.sounds[a]&&(b=this.sounds[a],c=b.obj.src.split("/").pop(),e.audio.stop(a),delete e.assets[d+c],delete e.assets[b.obj.src],delete e.audio.sounds[a]);else for(var f in this.sounds)b=this.sounds[f],c=b.obj.src.split("/").pop(),e.audio.stop(a),delete e.assets[d+c],delete e.assets[b.obj.src],delete e.audio.sounds[a]}},stop:function(a){if(e.support.audio)for(var b in this.channels)c=this.channels[b],(!a&&c.active||c._is(a))&&(c.active=!1,c.obj.pause())},_mute:function(a){if(e.support.audio){var b;for(var c in this.channels)b=this.channels[c],b.obj.volume=a?0:b.volume;this.muted=a}},toggleMute:function(){this.muted?this._mute(!1):this._mute(!0)},mute:function(){this._mute(!0)},unmute:function(){this._mute(!1)},pause:function(a){if(e.support.audio&&a&&this.sounds[a]){var b;for(var c in this.channels)b=this.channels[c],b._is(a)&&!b.obj.paused&&b.obj.pause()}},unpause:function(a){if(e.support.audio&&a&&this.sounds[a]){var b;for(var c in this.channels)b=this.channels[c],b._is(a)&&b.obj.paused&&b.obj.play()}},togglePause:function(a){if(e.support.audio&&a&&this.sounds[a]){var b;for(var c in this.channels)b=this.channels[c],b._is(a)&&(b.obj.paused?b.obj.play():b.obj.pause())}},isPlaying:function(a){if(!e.support.audio)return!1;for(var b in this.channels)if(this.channels[b]._is(a))return!0;return!1}}})},{"../core/core.js":7}],39:[function(a,b,c){var d=a("../core/core.js"),e=a("./spatial-grid.js");d.map=new e;var f=Math,g=(f.cos,f.sin,f.PI),h=g/180;d.c("2D",{_x:0,_y:0,_w:0,_h:0,_z:0,_rotation:0,_alpha:1,_visible:!0,_globalZ:null,_origin:null,_mbr:null,_entry:null,_children:null,_parent:null,_changed:!1,_2D_property_definitions:{x:{set:function(a){this._attr("_x",a)},get:function(){return this._x},configurable:!0,enumerable:!0},_x:{enumerable:!1},y:{set:function(a){this._attr("_y",a)},get:function(){return this._y},configurable:!0,enumerable:!0},_y:{enumerable:!1},w:{set:function(a){this._attr("_w",a)},get:function(){return this._w},configurable:!0,enumerable:!0},_w:{enumerable:!1},h:{set:function(a){this._attr("_h",a)},get:function(){return this._h},configurable:!0,enumerable:!0},_h:{enumerable:!1},z:{set:function(a){this._attr("_z",a)},get:function(){return this._z},configurable:!0,enumerable:!0},_z:{enumerable:!1},rotation:{set:function(a){this._attr("_rotation",a)},get:function(){return this._rotation},configurable:!0,enumerable:!0},_rotation:{enumerable:!1},alpha:{set:function(a){this._attr("_alpha",a)},get:function(){return this._alpha},configurable:!0,enumerable:!0},_alpha:{enumerable:!1},visible:{set:function(a){this._attr("_visible",a)},get:function(){return this._visible},configurable:!0,enumerable:!0},_visible:{enumerable:!1}},_define2DProperties:function(){for(var a in this._2D_property_definitions)Object.defineProperty(this,a,this._2D_property_definitions[a])},init:function(){this._globalZ=this[0],this._origin={x:0,y:0},this._bx1=0,this._bx2=0,this._by1=0,this._by2=0,this._children=[],this._define2DProperties(),this._entry=d.map.insert(this),this.bind("Move",function(a){var b=this._cbr||this._mbr||this;this._entry.update(b),this._children.length>0&&this._cascade(a)}),this.bind("Rotate",function(a){var b=this._cbr||this._mbr||this;this._entry.update(b),this._children.length>0&&this._cascade(a)}),this.bind("Remove",function(){if(this._children){for(var a=0;a<this._children.length;a++)delete this._children[a]._parent,this._children[a].destroy&&this._children[a].destroy();this._children=[]}this._parent&&this._parent.detach(this),d.map.remove(this),this.detach()})},offsetBoundary:function(a,b,c,d){return 1===arguments.length&&(b=c=d=a),this._bx1=a,this._bx2=c,this._by1=b,this._by2=d,this.trigger("BoundaryOffset"),this._calculateMBR(),this},_calculateMBR:function(){var a=this._origin.x+this._x,b=this._origin.y+this._y,c=-this._rotation*h,d=this._x-this._bx1-a,e=this._x+this._w+this._bx2-a,f=this._y-this._by1-b,g=this._y+this._h+this._by2-b,i=Math.cos(c),j=Math.sin(c);i=1e-10>i&&i>-1e-10?0:i,j=1e-10>j&&j>-1e-10?0:j;var k=d*i+f*j,l=-d*j+f*i,m=e*i+f*j,n=-e*j+f*i,o=e*i+g*j,p=-e*j+g*i,q=d*i+g*j,r=-d*j+g*i,s=Math.floor(Math.min(k,m,o,q)+a),t=Math.floor(Math.min(l,n,p,r)+b),u=Math.ceil(Math.max(k,m,o,q)+a),v=Math.ceil(Math.max(l,n,p,r)+b);if(this._mbr?(this._mbr._x=s,this._mbr._y=t,this._mbr._w=u-s,this._mbr._h=v-t):this._mbr={_x:s,_y:t,_w:u-s,_h:v-t},this._cbr){var w=this._cbr,x=w.cx,y=w.cy,z=w.r,A=a+(x+this._x-a)*i+(y+this._y-b)*j,B=b-(x+this._x-a)*j+(y+this._y-b)*i;w._x=Math.min(A-z,s),w._y=Math.min(B-z,t),w._w=Math.max(A+z,u)-w._x,w._h=Math.max(B+z,v)-w._y}},_rotate:function(a){var b=this._rotation-a;if(0!==b){this._rotation=a;var c={x:this._origin.x+this._x,y:this._origin.y+this._y};this._calculateMBR();var d=b*h,e=Math.cos(d),f=Math.sin(d);this.trigger("Rotate",{cos:e>-1e-10&&1e-10>e?0:e,sin:f>-1e-10&&1e-10>f?0:f,deg:b,rad:d,o:c})}},area:function(){return this._w*this._h},intersect:function(a,b,c,d){var e,f=this._mbr||this;return e="object"==typeof a?a:{_x:a,_y:b,_w:c,_h:d},f._x<e._x+e._w&&f._x+f._w>e._x&&f._y<e._y+e._h&&f._y+f._h>e._y},within:function(a,b,c,d){var e,f=this._mbr||this;return e="object"==typeof a?a:{_x:a,_y:b,_w:c,_h:d},e._x<=f._x&&e._x+e._w>=f._x+f._w&&e._y<=f._y&&e._y+e._h>=f._y+f._h},contains:function(a,b,c,d){var e,f=this._mbr||this;return e="object"==typeof a?a:{_x:a,_y:b,_w:c,_h:d},e._x>=f._x&&e._x+e._w<=f._x+f._w&&e._y>=f._y&&e._y+e._h<=f._y+f._h},pos:function(a){return a=a||{},a._x=this._x,a._y=this._y,a._w=this._w,a._h=this._h,a},mbr:function(a){return a=a||{},this._mbr?(a._x=this._mbr._x,a._y=this._mbr._y,a._w=this._mbr._w,a._h=this._mbr._h,a):this.pos(a)},isAt:function(a,b){if(this.mapArea)return this.mapArea.containsPoint(a,b);if(this.map)return this.map.containsPoint(a,b);var c=this._mbr||this;return c._x<=a&&c._x+c._w>=a&&c._y<=b&&c._y+c._h>=b},move:function(a,b){return"n"===a.charAt(0)&&(this.y-=b),"s"===a.charAt(0)&&(this.y+=b),("e"===a||"e"===a.charAt(1))&&(this.x+=b),("w"===a||"w"===a.charAt(1))&&(this.x-=b),this},shift:function(a,b,c,d){return a&&(this.x+=a),b&&(this.y+=b),c&&(this.w+=c),d&&(this.h+=d),this},_cascade:function(a){if(a){var b,c=0,d=this._children,e=d.length;if("cos"in a||"sin"in a)for(;e>c;++c)b=d[c],"rotate"in b&&b.rotate(a);else for(var f=this._x-a._x,g=this._y-a._y,h=this._w-a._w,i=this._h-a._h;e>c;++c)b=d[c],b.shift(f,g,h,i)}},attach:function(){for(var a,b=0,c=arguments,d=arguments.length;d>b;++b)a=c[b],a._parent&&a._parent.detach(a),a._parent=this,this._children.push(a);return this},detach:function(a){var b;if(!a){for(b=0;b<this._children.length;b++)this._children[b]._parent=null;return this._children=[],this}for(b=0;b<this._children.length;b++)this._children[b]==a&&this._children.splice(b,1);return a._parent=null,this},origin:function(a,b){if("string"==typeof a)if("centre"===a||"center"===a||-1===a.indexOf(" "))a=this._w/2,b=this._h/2;else{var c=a.split(" ");"top"===c[0]?b=0:"bottom"===c[0]?b=this._h:("middle"===c[0]||"center"===c[1]||"centre"===c[1])&&(b=this._h/2),"center"===c[1]||"centre"===c[1]||"middle"===c[1]?a=this._w/2:"left"===c[1]?a=0:"right"===c[1]&&(a=this._w)}return this._origin.x=a,this._origin.y=b,this},flip:function(a){return a=a||"X",this["_flip"+a]||(this["_flip"+a]=!0,this.trigger("Invalidate")),this},unflip:function(a){return a=a||"X",this["_flip"+a]&&(this["_flip"+a]=!1,this.trigger("Invalidate")),this},rotate:function(a){var b,c;b=(this._x+this._origin.x-a.o.x)*a.cos+(this._y+this._origin.y-a.o.y)*a.sin+(a.o.x-this._origin.x),c=(this._y+this._origin.y-a.o.y)*a.cos-(this._x+this._origin.x-a.o.x)*a.sin+(a.o.y-this._origin.y),this._attr("_rotation",this._rotation-a.deg),this._attr("_x",b),this._attr("_y",c)},_attr:function(a,b){if(this[a]!==b){var c,e=d.rectManager._pool.copy(this);if("_rotation"===a)this._rotate(b);else if("_z"===a){var f=b<<0;b=b==f?f:f+1,this._globalZ=1e5*b+this[0],this[a]=b,this.trigger("Reorder")}else if("_x"===a||"_y"===a)c=this._mbr,c&&(c[a]-=this[a]-b,this._cbr&&(this._cbr[a]-=this[a]-b)),this[a]=b,this.trigger("Move",e);else if("_h"===a||"_w"===a){c=this._mbr;var g=this[a];this[a]=b,c&&this._calculateMBR(),"_w"===a?this.trigger("Resize",{axis:"w",amount:b-g}):"_h"===a&&this.trigger("Resize",{axis:"h",amount:b-g}),this.trigger("Move",e)}this[a]=b,this.trigger("Invalidate"),d.rectManager._pool.recycle(e)}}}),d.c("Supportable",{_ground:null,_groundComp:null,canLand:!0,init:function(){this.requires("2D"),this.__area={_x:0,_y:0,_w:0,_h:0},this.defineField("ground",function(){return this._ground},function(a){})},remove:function(a){this.unbind("EnterFrame",this._detectGroundTick)},startGroundDetection:function(a){return a&&(this._groundComp=a),this.uniqueBind("EnterFrame",this._detectGroundTick),this},stopGroundDetection:function(){return this.unbind("EnterFrame",this._detectGroundTick),this},_detectGroundTick:function(){var a=this._groundComp,b=this._ground,c=d.rectManager.overlap,e=this._cbr||this._mbr||this,f=this.__area;if(f._x=e._x,f._y=e._y+1,f._w=e._w,f._h=e._h,b){var g=b._cbr||b._mbr||b;b.__c[a]&&c(g,f)||(this._ground=null,this.trigger("LiftedOffGround",b),b=null)}if(!b)for(var h,i,j=d.map.search(f,!1),k=0,l=j.length;l>k;++k)if(h=j[k],i=h._cbr||h._mbr||h,h!==this&&h.__c[a]&&c(i,f)&&(this.canLand=!0,this.trigger("CheckLanding",h),this.canLand)){this._ground=b=h,this.y=h._y-this._h,this.trigger("LandedOnGround",b);break}}}),d.c("GroundAttacher",{_groundAttach:function(a){a.attach(this)},_groundDetach:function(a){a.detach(this)},init:function(){this.requires("Supportable"),this.bind("LandedOnGround",this._groundAttach),this.bind("LiftedOffGround",this._groundDetach)},remove:function(a){this.unbind("LandedOnGround",this._groundAttach),this.unbind("LiftedOffGround",this._groundDetach)}}),d.c("Gravity",{_gravityConst:500,init:function(){this.requires("2D, Supportable, Motion"),this.bind("LiftedOffGround",this._startGravity),this.bind("LandedOnGround",this._stopGravity)},remove:function(a){this.unbind("LiftedOffGround",this._startGravity),this.unbind("LandedOnGround",this._stopGravity)},_gravityCheckLanding:function(a){this._dy<0&&(this.canLand=!1)},gravity:function(a){return this.bind("CheckLanding",this._gravityCheckLanding),this.startGroundDetection(a),this._startGravity(),this},antigravity:function(){return this._stopGravity(),this.stopGroundDetection(),this.unbind("CheckLanding",this._gravityCheckLanding),this},gravityConst:function(a){return this._gravityActive&&(this.ay-=this._gravityConst,this.ay+=a),this._gravityConst=a,this},_startGravity:function(){this._gravityActive=!0,this.ay+=this._gravityConst},_stopGravity:function(){this.ay=0,this.vy=0,this._gravityActive=!1}});var i=function(a,b,c,e){var f=b+c,g="_"+f,h={key:"",oldValue:0};e?d.defineField(a,f,function(){return this[g]},function(a){var b=this[g];a!==b&&(this[g]=a,h.key=f,h.oldValue=b,this.trigger("MotionChange",h))}):d.defineField(a,f,function(){return this[g]},function(a){}),Object.defineProperty(a,g,{value:0,writable:!0,enumerable:!1,configurable:!1})},j=function(a,b,c,e){var f=b+"x",g=b+"y",h="_"+f,i="_"+g;return c?(d.defineField(e,"x",function(){return a[h]},function(b){a[f]=b}),d.defineField(e,"y",function(){return a[i]},function(b){a[g]=b})):(d.defineField(e,"x",function(){return a[h]},function(a){}),d.defineField(e,"y",function(){return a[i]},function(a){})),Object.seal&&Object.seal(e),e};d.c("AngularMotion",{_vrotation:0,_arotation:0,_drotation:0,init:function(){this.requires("2D"),i(this,"v","rotation",!0),i(this,"a","rotation",!0),i(this,"d","rotation",!1),this.__oldRotationDirection=0,this.bind("EnterFrame",this._angularMotionTick)},remove:function(a){this.unbind("EnterFrame",this._angularMotionTick)},resetAngularMotion:function(){return this._drotation=0,this.vrotation=0,this.arotation=0,this},_angularMotionTick:function(a){var b=a.dt/1e3,c=this._rotation,d=this._vrotation,e=this._arotation,f=c+d*b+.5*e*b*b;this.vrotation=d+e*b;var g=this._vrotation,h=g?0>g?-1:1:0;this.__oldRotationDirection!==h&&(this.__oldRotationDirection=h,this.trigger("NewRotationDirection",h)),this._drotation=f-c,0!==this._drotation&&(this.rotation=f,this.trigger("Rotated",c))}}),d.c("Motion",{_vx:0,_vy:0,_ax:0,_ay:0,_dx:0,_dy:0,init:function(){this.requires("2D"),i(this,"v","x",!0),i(this,"v","y",!0),this._velocity=j(this,"v",!0,new d.math.Vector2D),i(this,"a","x",!0),i(this,"a","y",!0),this._acceleration=j(this,"a",!0,new d.math.Vector2D),i(this,"d","x",!1),i(this,"d","y",!1),this._motionDelta=j(this,"d",!1,new d.math.Vector2D),this.__movedEvent={axis:"",oldValue:0},this.__oldDirection={x:0,y:0},this.bind("EnterFrame",this._linearMotionTick)},remove:function(a){this.unbind("EnterFrame",this._linearMotionTick)},resetMotion:function(){return this.vx=0,this.vy=0,this.ax=0,this.ay=0,this._dx=0,this._dy=0,this},motionDelta:function(){return this._motionDelta},velocity:function(){return this._velocity},acceleration:function(){return this._acceleration},_linearMotionTick:function(a){var b=a.dt/1e3,c=this._x,d=this._vx,e=this._ax,f=this._y,g=this._vy,h=this._ay,i=c+d*b+.5*e*b*b,j=f+g*b+.5*h*b*b;this.vx=d+e*b,this.vy=g+h*b;var k=this.__oldDirection,l=this._vx,m=l?0>l?-1:1:0,n=this._vy,o=n?0>n?-1:1:0;(k.x!==m||k.y!==o)&&(k.x=m,k.y=o,this.trigger("NewDirection",k));var p=this.__movedEvent;this._dx=i-c,this._dy=j-f,0!==this._dx&&(this.x=i,p.axis="x",p.oldValue=c,this.trigger("Moved",p)),0!==this._dy&&(this.y=j,p.axis="y",p.oldValue=f,this.trigger("Moved",p))}}),d.polygon=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0)),this.points=a},d.polygon.prototype={containsPoint:function(a,b){var c,d,e=this.points,f=e.length/2,g=!1;for(c=0,d=f-1;f>c;d=c++)e[2*c+1]>b!=e[2*d+1]>b&&a<(e[2*d]-e[2*c])*(b-e[2*c+1])/(e[2*d+1]-e[2*c+1])+e[2*c]&&(g=!g);return g},shift:function(a,b){for(var c=0,d=this.points,e=d.length;e>c;c+=2)d[c]+=a,d[c+1]+=b},clone:function(){return new d.polygon(this.points.slice(0))},rotate:function(a){for(var b,c,d=0,e=this.points,f=e.length;f>d;d+=2)b=a.o.x+(e[d]-a.o.x)*a.cos+(e[d+1]-a.o.y)*a.sin,c=a.o.y-(e[d]-a.o.x)*a.sin+(e[d+1]-a.o.y)*a.cos,e[d]=b,e[d+1]=c}},d.circle=function(a,b,c){this.x=a,this.y=b,this.radius=c,this.points=[];for(var d,e=0;16>e;e+=2)d=e*Math.PI/8,this.points[e]=this.x+Math.sin(d)*c,this.points[e+1]=this.y+Math.cos(d)*c},d.circle.prototype={containsPoint:function(a,b){var c=this.radius,d=(Math.sqrt,this.x-a),e=this.y-b;return c*c>d*d+e*e},shift:function(a,b){this.x+=a,this.y+=b;for(var c=0,d=this.points,e=d.length;e>c;c+=2)d[c]+=a,d[c+1]+=b},rotate:function(){}},d.matrix=function(a){this.mtx=a,this.width=a[0].length,this.height=a.length},d.matrix.prototype={x:function(a){if(this.width==a.height){for(var b=[],c=0;c<this.height;c++){b[c]=[];for(var e=0;e<a.width;e++){for(var f=0,g=0;g<this.width;g++)f+=this.mtx[c][g]*a.mtx[g][e];b[c][e]=f}}return new d.matrix(b)}},e:function(a,b){return 1>a||a>this.mtx.length||1>b||b>this.mtx[0].length?null:this.mtx[a-1][b-1]}}},{"../core/core.js":7,"./spatial-grid.js":43}],40:[function(a,b,c){var d=a("../core/core.js"),e=Math.PI/180;d.c("Collision",{init:function(){this.requires("2D"),this._collisionData={},this.collision()},remove:function(){this._cbr=null,this.unbind("Resize",this._resizeMap),this.unbind("Resize",this._checkBounds)},collision:function(a){if(this.unbind("Resize",this._resizeMap),this.unbind("Resize",this._checkBounds),a){if(arguments.length>1){var b=Array.prototype.slice.call(arguments,0);a=new d.polygon(b)}else a=a.constructor===Array?new d.polygon(a.slice()):a.clone();this._findBounds(a.points)}else a=new d.polygon([0,0,this._w,0,this._w,this._h,0,this._h]),this.bind("Resize",this._resizeMap),this._cbr=null;return this.rotation&&a.rotate({cos:Math.cos(-this.rotation*e),sin:Math.sin(-this.rotation*e),o:{x:this._origin.x,y:this._origin.y}}),this.map=a,this.attach(this.map),this.map.shift(this._x,this._y),this.trigger("NewHitbox",a),this},_findBounds:function(a){for(var b=1/0,c=-(1/0),d=1/0,e=-(1/0),f=a.length,g=0;f>g;g+=2)a[g]<b&&(b=a[g]),a[g]>c&&(c=a[g]),a[g+1]<d&&(d=a[g+1]),a[g+1]>e&&(e=a[g+1]);var h={cx:(b+c)/2,cy:(d+e)/2,r:Math.sqrt((c-b)*(c-b)+(e-d)*(e-d))/2};return b>=0&&d>=0&&(this._checkBounds=function(){null===this._cbr&&this._w<c||this._h<e?(this._cbr=h,this._calculateMBR()):this._cbr&&(this._cbr=null,this._calculateMBR())},this.bind("Resize",this._checkBounds)),b>=0&&d>=0&&c<=this._w&&e<=this._h?(this._cbr=null,!1):(this._cbr=h,this._calculateMBR(),!0)},_resizeMap:function(a){var b,c,d=this.rotation*e,f=this.map.points;"w"===a.axis?(d?(b=a.amount*Math.cos(d),c=a.amount*Math.sin(d)):(b=a.amount,c=0),f[2]+=b,f[3]+=c):(d?(c=a.amount*Math.cos(d),b=-a.amount*Math.sin(d)):(b=0,c=a.amount),f[6]+=b,f[7]+=c),f[4]+=b,f[5]+=c},hit:function(a){var b,c,e,f,g=this._cbr||this._mbr||this,h=d.map.search(g,!1),i=0,j=h.length,k={},l=d.rectManager.overlap,m="map"in this&&"containsPoint"in this.map,n=[];if(!j)return!1;for(;j>i;++i)c=h[i],e=c._cbr||c._mbr||c,c&&(b=c[0],!k[b]&&this[0]!==b&&c.__c[a]&&l(e,g)&&(k[b]=c));for(f in k)if(c=k[f],m&&"map"in c){var o=this._SAT(this.map,c.map);o.obj=c,o.type="SAT",o&&n.push(o)}else n.push({obj:c,type:"MBR"});return n.length?n:!1},onHit:function(a,b,c){var d=!1;return this.bind("EnterFrame",function(){var e=this.hit(a);e?(d=!0,b.call(this,e)):d&&("function"==typeof c&&c.call(this),d=!1)}),this},_createCollisionHandler:function(a,b){return function(){var c=this.hit(a);if(b.occurring===!0){if(c!==!1)return;b.occurring=!1,this.trigger("HitOff",a)}else c!==!1&&(b.occurring=!0,this.trigger("HitOn",c))}},checkHits:function(){var a=arguments,b=0;for(1===a.length&&(a=a[0].split(/\s*,\s*/));b<a.length;++b){var c=a[b],d=this._collisionData[c];void 0===d&&(this._collisionData[c]=d={occurring:!1,handler:null},d.handler=this._createCollisionHandler(c,d),this.bind("EnterFrame",d.handler))}return this},ignoreHits:function(){var a,b=arguments,c=0;if(0===b.length){for(a in this._collisionData)this.unbind("EnterFrame",a.handler);this._collisionData={}}for(1===b.length&&(b=b[0].split(/\s*,\s*/));c<b.length;++c){var d=b[c];a=this._collisionData[d],void 0!==a&&(this.unbind("EnterFrame",a.handler),delete this._collisionData[d])}return this},resetHitChecks:function(){var a,b=arguments,c=0;if(0===b.length)for(a in this._collisionData)this._collisionData[a].occurring=!1;for(1===b.length&&(b=b[0].split(/\s*,\s*/));c<b.length;++c){var d=b[c];a=this._collisionData[d],void 0!==a&&(a.occurring=!1)}return this},_SAT:function(a,b){for(var c,d,e,f,g,h,i,j,k,l=0,m=a.points,n=b.points,o=m.length/2,p=n.length/2,q=0,r=0,s=-(1/0),t=null,u=null;o>l;l++){for(k=l==o-1?0:l+1,q=-(m[2*l+1]-m[2*k+1]),r=m[2*l]-m[2*k],d=Math.sqrt(q*q+r*r),q/=d,r/=d,e=f=1/0,g=h=-(1/0),c=0;o>c;++c)j=m[2*c]*q+m[2*c+1]*r,j>g&&(g=j),e>j&&(e=j);for(c=0;p>c;++c)j=n[2*c]*q+n[2*c+1]*r,j>h&&(h=j),f>j&&(f=j);if(f>e?(i=f-g,q=-q,r=-r):i=e-h,i>=0)return!1;i>s&&(s=i,t=q,u=r)}for(l=0;p>l;l++){for(k=l==p-1?0:l+1,q=-(n[2*l+1]-n[2*k+1]),r=n[2*l]-n[2*k],d=Math.sqrt(q*q+r*r),q/=d,r/=d,e=f=1/0,g=h=-(1/0),c=0;o>c;++c)j=m[2*c]*q+m[2*c+1]*r,j>g&&(g=j),e>j&&(e=j);for(c=0;p>c;++c)j=n[2*c]*q+n[2*c+1]*r,j>h&&(h=j),f>j&&(f=j);if(f>e?(i=f-g,q=-q,r=-r):i=e-h,i>=0)return!1;i>s&&(s=i,t=q,u=r)}return{overlap:s,normal:{x:t,y:u}}}})},{"../core/core.js":7}],41:[function(a,b,c){var d=a("../core/core.js");d.math={abs:function(a){return 0>a?-a:a},amountOf:function(a,b,c){return c>b?(a-b)/(c-b):(a-c)/(b-c)},clamp:function(a,b,c){return a>c?c:b>a?b:a},degToRad:function(a){return a*Math.PI/180},distance:function(a,b,c,e){var f=d.math.squaredDistance(a,b,c,e);return Math.sqrt(parseFloat(f))},lerp:function(a,b,c){return a+(b-a)*c},negate:function(a){return Math.random()<a?-1:1},radToDeg:function(a){return 180*a/Math.PI},randomElementOfArray:function(a){return a[Math.floor(a.length*Math.random())]},randomInt:function(a,b){return a+Math.floor((1+b-a)*Math.random())},randomNumber:function(a,b){return a+(b-a)*Math.random()},squaredDistance:function(a,b,c,d){return(a-c)*(a-c)+(b-d)*(b-d)},withinRange:function(a,b,c){return a>=b&&c>=a}},d.math.Vector2D=function(){function a(b,c){if(b instanceof a)this.x=b.x,this.y=b.y;else if(2===arguments.length)this.x=b,this.y=c;else if(arguments.length>0)throw"Unexpected number of arguments for Vector2D()"}return a.prototype.x=0,a.prototype.y=0,a.prototype.add=function(a){return this.x+=a.x,this.y+=a.y,this},a.prototype.angleBetween=function(a){return Math.atan2(this.x*a.y-this.y*a.x,this.x*a.x+this.y*a.y)},a.prototype.angleTo=function(a){return Math.atan2(a.y-this.y,a.x-this.x)},a.prototype.clone=function(){return new a(this)},a.prototype.distance=function(a){return Math.sqrt((a.x-this.x)*(a.x-this.x)+(a.y-this.y)*(a.y-this.y))},a.prototype.distanceSq=function(a){return(a.x-this.x)*(a.x-this.x)+(a.y-this.y)*(a.y-this.y)},a.prototype.divide=function(a){return this.x/=a.x,this.y/=a.y,this},a.prototype.dotProduct=function(a){return this.x*a.x+this.y*a.y},a.prototype.crossProduct=function(a){return this.x*a.y-this.y*a.x},a.prototype.equals=function(b){return b instanceof a&&this.x==b.x&&this.y==b.y},a.prototype.perpendicular=function(b){return b=b||new a,b.setValues(-this.y,this.x)},a.prototype.getNormal=function(b,c){return c=c||new a,c.setValues(b.y-this.y,this.x-b.x).normalize()},a.prototype.isZero=function(){return 0===this.x&&0===this.y},a.prototype.magnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},a.prototype.magnitudeSq=function(){return this.x*this.x+this.y*this.y},a.prototype.multiply=function(a){return this.x*=a.x,this.y*=a.y,this},a.prototype.negate=function(){return this.x=-this.x,this.y=-this.y,this},a.prototype.normalize=function(){var a=Math.sqrt(this.x*this.x+this.y*this.y);return 0===a?(this.x=1,this.y=0):(this.x/=a,this.y/=a),this},a.prototype.scale=function(a,b){return void 0===b&&(b=a),this.x*=a,this.y*=b,this},a.prototype.scaleToMagnitude=function(a){var b=a/this.magnitude();return this.x*=b,this.y*=b,this},a.prototype.setValues=function(b,c){return b instanceof a?(this.x=b.x,this.y=b.y):(this.x=b,this.y=c),this},a.prototype.subtract=function(a){return this.x-=a.x,this.y-=a.y,this},a.prototype.toString=function(){return"Vector2D("+this.x+", "+this.y+")"},a.prototype.translate=function(a,b){return void 0===b&&(b=a),this.x+=a,this.y+=b,this},a.tripleProduct=function(a,b,c,e){e=e||new d.math.Vector2D;var f=a.dotProduct(c),g=b.dotProduct(c);return e.setValues(b.x*f-a.x*g,b.y*f-a.y*g)},a}(),d.math.Matrix2D=function(){return Matrix2D=function(a,b,c,d,e,f){if(a instanceof Matrix2D)this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,this.f=a.f;else if(6===arguments.length)this.a=a,this.b=b,this.c=c,this.d=d,this.e=e,this.f=f;else if(arguments.length>0)throw"Unexpected number of arguments for Matrix2D()"},Matrix2D.prototype.a=1,Matrix2D.prototype.b=0,Matrix2D.prototype.c=0,Matrix2D.prototype.d=1,Matrix2D.prototype.e=0,Matrix2D.prototype.f=0,Matrix2D.prototype.apply=function(a){var b=a.x;return a.x=b*this.a+a.y*this.c+this.e,a.y=b*this.b+a.y*this.d+this.f,a},Matrix2D.prototype.clone=function(){return new Matrix2D(this)},Matrix2D.prototype.combine=function(a){var b=this.a;return this.a=b*a.a+this.b*a.c,this.b=b*a.b+this.b*a.d,b=this.c,this.c=b*a.a+this.d*a.c,this.d=b*a.b+this.d*a.d,b=this.e,this.e=b*a.a+this.f*a.c+a.e,this.f=b*a.b+this.f*a.d+a.f,this},Matrix2D.prototype.equals=function(a){return a instanceof Matrix2D&&this.a==a.a&&this.b==a.b&&this.c==a.c&&this.d==a.d&&this.e==a.e&&this.f==a.f},Matrix2D.prototype.determinant=function(){return this.a*this.d-this.b*this.c},Matrix2D.prototype.invert=function(){var a=this.determinant();if(0!==a){var b={a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f};this.a=b.d/a,this.b=-b.b/a,this.c=-b.c/a,this.d=b.a/a,this.e=(b.c*b.f-b.e*b.d)/a,this.f=(b.e*b.b-b.a*b.f)/a}return this},Matrix2D.prototype.isIdentity=function(){return 1===this.a&&0===this.b&&0===this.c&&1===this.d&&0===this.e&&0===this.f},Matrix2D.prototype.isInvertible=function(){return 0!==this.determinant()},Matrix2D.prototype.preRotate=function(a){var b=Math.cos(a),c=Math.sin(a),d=this.a;return this.a=b*d-c*this.b,this.b=c*d+b*this.b,d=this.c,this.c=b*d-c*this.d,this.d=c*d+b*this.d,this},Matrix2D.prototype.preScale=function(a,b){return void 0===b&&(b=a),this.a*=a,this.b*=b,this.c*=a,this.d*=b,this},Matrix2D.prototype.preTranslate=function(a,b){return"number"==typeof a?(this.e+=a,this.f+=b):(this.e+=a.x,this.f+=a.y),this},Matrix2D.prototype.rotate=function(a){var b=Math.cos(a),c=Math.sin(a),d=this.a;return this.a=b*d-c*this.b,this.b=c*d+b*this.b,d=this.c,this.c=b*d-c*this.d,this.d=c*d+b*this.d,d=this.e,this.e=b*d-c*this.f,this.f=c*d+b*this.f,this},Matrix2D.prototype.scale=function(a,b){return void 0===b&&(b=a),this.a*=a,this.b*=b,this.c*=a,this.d*=b,this.e*=a,this.f*=b,this},Matrix2D.prototype.setValues=function(a,b,c,d,e,f){return a instanceof Matrix2D?(this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,this.f=a.f):(this.a=a,this.b=b,this.c=c,this.d=d,this.e=e,this.f=f),this},Matrix2D.prototype.toString=function(){return"Matrix2D(["+this.a+", "+this.c+", "+this.e+"] ["+this.b+", "+this.d+", "+this.f+"] [0, 0, 1])"},Matrix2D.prototype.translate=function(a,b){return"number"==typeof a?(this.e+=this.a*a+this.c*b,this.f+=this.b*a+this.d*b):(this.e+=this.a*a.x+this.c*a.y,this.f+=this.b*a.x+this.d*a.y),this},Matrix2D}()},{"../core/core.js":7}],42:[function(a,b,c){var d=a("../core/core.js");d.extend({rectManager:{merge:function(a,b,c){return"undefined"==typeof c&&(c={}),c._h=Math.max(a._y+a._h,b._y+b._h),c._w=Math.max(a._x+a._w,b._x+b._w),c._x=Math.min(a._x,b._x),c._y=Math.min(a._y,b._y),c._w-=c._x,c._h-=c._y,c},overlap:function(a,b){return a._x<b._x+b._w&&a._x+a._w>b._x&&a._y<b._y+b._h&&a._y+a._h>b._y},mergeSet:function(a){for(var b=0;b<a.length-1;)this.overlap(a[b],a[b+1])?(this.merge(a[b],a[b+1],a[b]),a.splice(b+1,1),b>0&&b--):b++;return a},boundingRect:function(a){if(a&&a.length){var b,c,d=1,e=a.length,f=a[0];for(f=[f._x,f._y,f._x+f._w,f._y+f._h];e>d;)b=a[d],c=[b._x,b._y,b._x+b._w,b._y+b._h],c[0]<f[0]&&(f[0]=c[0]),c[1]<f[1]&&(f[1]=c[1]),c[2]>f[2]&&(f[2]=c[2]),c[3]>f[3]&&(f[3]=c[3]),d++;return c=f,f={_x:c[0],_y:c[1],_w:c[2]-c[0],_h:c[3]-c[1]}}},_pool:function(){var a=[],b=0;return{get:function(c,d,e,f){a.length<=b&&a.push({});var g=a[b++];return g._x=c,g._y=d,g._w=e,g._h=f,g},copy:function(c){a.length<=b&&a.push({});var d=a[b++];return d._x=c._x,d._y=c._y,d._w=c._w,d._h=c._h,d},recycle:function(a){b--}}}()}})},{"../core/core.js":7}],43:[function(a,b,c){function d(a,b,c){this.keys=a,this.map=c,this.obj=b}var e,f=(a("../core/core.js"),function(a){e=a||64,this.map={}}),g=" ",h={};f.prototype={insert:function(a){var b,c,e=f.key(a),g=new d(e,a,this),h=0;for(h=e.x1;h<=e.x2;h++)for(b=e.y1;b<=e.y2;b++)c=h<<16^b,this.map[c]||(this.map[c]=[]),this.map[c].push(a);return g},search:function(a,b){var c,d,e,g,i,j=f.key(a,h),k=[];for(void 0===b&&(b=!0),c=j.x1;c<=j.x2;c++)for(d=j.y1;d<=j.y2;d++)if(i=this.map[c<<16^d])for(e=0;e<i.length;e++)k.push(i[e]);if(b){var l,m,n=[],o={};for(c=0,g=k.length;g>c;c++)l=k[c],l&&(m=l[0],l=l._mbr||l,!o[m]&&l._x<a._x+a._w&&l._x+l._w>a._x&&l._y<a._y+a._h&&l._y+l._h>a._y&&(o[m]=k[c]));for(l in o)n.push(o[l]);return n}return k},remove:function(a,b){var c,d,e=0;for(1==arguments.length&&(b=a,
a=f.key(b,h)),e=a.x1;e<=a.x2;e++)for(c=a.y1;c<=a.y2;c++)if(d=e<<16^c,this.map[d]){var g,i=this.map[d],j=i.length;for(g=0;j>g;g++)i[g]&&i[g][0]===b[0]&&i.splice(g,1)}},refresh:function(a){var b,c,d,e,g,h=a.keys,i=a.obj;for(c=h.x1;c<=h.x2;c++)for(d=h.y1;d<=h.y2;d++)if(b=this.map[c<<16^d])for(g=b.length,e=0;g>e;e++)b[e]&&b[e][0]===i[0]&&b.splice(e,1);for(f.key(i,h),c=h.x1;c<=h.x2;c++)for(d=h.y1;d<=h.y2;d++)b=this.map[c<<16^d],b||(b=this.map[c<<16^d]=[]),b.push(i);return a},boundaries:function(){var a,b,c={max:{x:-(1/0),y:-(1/0)},min:{x:1/0,y:1/0}},d={max:{x:-(1/0),y:-(1/0)},min:{x:1/0,y:1/0}};for(var e in this.map)if(this.map[e].length){var f=e>>16,g=e<<16>>16;if(0>g&&(f=-1^f),f>=c.max.x){c.max.x=f;for(a in this.map[e])b=this.map[e][a],"object"==typeof b&&"requires"in b&&(d.max.x=Math.max(d.max.x,b.x+b.w))}if(f<=c.min.x){c.min.x=f;for(a in this.map[e])b=this.map[e][a],"object"==typeof b&&"requires"in b&&(d.min.x=Math.min(d.min.x,b.x))}if(g>=c.max.y){c.max.y=g;for(a in this.map[e])b=this.map[e][a],"object"==typeof b&&"requires"in b&&(d.max.y=Math.max(d.max.y,b.y+b.h))}if(g<=c.min.y){c.min.y=g;for(a in this.map[e])b=this.map[e][a],"object"==typeof b&&"requires"in b&&(d.min.y=Math.min(d.min.y,b.y))}}return d}},f.key=function(a,b){return a._mbr&&(a=a._mbr),b||(b={}),b.x1=Math.floor(a._x/e),b.y1=Math.floor(a._y/e),b.x2=Math.floor((a._w+a._x)/e),b.y2=Math.floor((a._h+a._y)/e),b},f.hash=function(a){return a.x1+g+a.y1+g+a.x2+g+a.y2},d.prototype={update:function(a){f.hash(f.key(a,h))!=f.hash(this.keys)&&this.map.refresh(this)}},b.exports=f},{"../core/core.js":7}]},{},[17]);
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.io = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":2,"./socket":4,"./url":5,"debug":14,"socket.io-parser":40}],2:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');
var Backoff = _dereq_('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function(){
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.engine.id;
    }
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function(v){
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function(){
  this.lastPing = new Date;
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function(){
  this.emitAll('pong', new Date - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function(){
      socket.id = self.engine.id;
    });

    if (this.autoConnect) {
      // manually call here since connecting evnet is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  debug('cleanup');

  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' == this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":3,"./socket":4,"backo2":8,"component-bind":11,"component-emitter":12,"debug":14,"engine.io-client":16,"indexof":32,"socket.io-parser":40}],3:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],4:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  var ack = this.acks[packet.id];
  if ('function' == typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function(compress){
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};

},{"./on":3,"component-bind":11,"component-emitter":12,"debug":14,"has-binary":30,"socket.io-parser":40,"to-array":43}],5:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"debug":14,"parseuri":38}],6:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],7:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],8:[function(_dereq_,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],9:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();

},{}],10:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],11:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],12:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],13:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],14:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage(){
  try {
    return window.localStorage;
  } catch (e) {}
}

},{"./debug":15}],15:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":35}],16:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":17}],17:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":18,"engine.io-parser":27}],18:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;

  // other options for Node.js client
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }
  }

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this,
    pfx: this.pfx,
    key: this.key,
    passphrase: this.passphrase,
    cert: this.cert,
    ca: this.ca,
    ciphers: this.ciphers,
    rejectUnauthorized: this.rejectUnauthorized,
    perMessageDeflate: this.perMessageDeflate,
    extraHeaders: this.extraHeaders
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function(){
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if('function' == typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' == typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./transport":19,"./transports":20,"component-emitter":26,"debug":14,"engine.io-parser":27,"indexof":32,"parsejson":36,"parseqs":37,"parseuri":38}],19:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":26,"engine.io-parser":27}],20:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling-jsonp":21,"./polling-xhr":22,"./websocket":24,"xmlhttprequest-ssl":25}],21:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  }
  else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
  
  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":23,"component-inherit":13}],22:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  } else {
    this.extraHeaders = opts.extraHeaders;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(fromError){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch(e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        try {
          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
        } catch (e) {
          var ui8Arr = new Uint8Array(this.xhr.response);
          var dataArray = [];
          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
            dataArray.push(ui8Arr[idx]);
          }

          data = String.fromCharCode.apply(null, dataArray);
        }
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./polling":23,"component-emitter":26,"component-inherit":13,"debug":14,"xmlhttprequest-ssl":25}],23:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":19,"component-inherit":13,"debug":14,"engine.io-parser":27,"parseqs":37,"xmlhttprequest-ssl":25,"yeast":45}],24:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var yeast = _dereq_('yeast');
var debug = _dereq_('debug')('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  try {
    WebSocket = _dereq_('ws');
  } catch (e) { }
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'buffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function(packet) {
      parser.encodePacket(packet, self.supportsBinary, function(data) {
        if (!BrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        //Sometimes the websocket has already been closed but the browser didn't
        //have a chance of informing us about it yet, in that case send will
        //throw an error
        try {
          if (BrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e){
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done(){
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function(){
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"../transport":19,"component-inherit":13,"debug":14,"engine.io-parser":27,"parseqs":37,"ws":undefined,"yeast":45}],25:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":31}],26:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],27:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var hasBinary = _dereq_('has-binary');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./keys":28,"after":6,"arraybuffer.slice":7,"base64-arraybuffer":9,"blob":10,"has-binary":29,"utf8":44}],28:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],29:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":33}],30:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      // see: https://github.com/Automattic/has-binary/pull/4
      if (obj.toJSON && 'function' == typeof obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"isarray":33}],31:[function(_dereq_,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],32:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],33:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],34:[function(_dereq_,module,exports){
(function (global){
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root["Object"]());
    exports || (exports = root["Object"]());

    // Native constructor aliases.
    var Number = context["Number"] || root["Number"],
        String = context["String"] || root["String"],
        Object = context["Object"] || root["Object"],
        Date = context["Date"] || root["Date"],
        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
        TypeError = context["TypeError"] || root["TypeError"],
        Math = context["Math"] || root["Math"],
        nativeJSON = context["JSON"] || root["JSON"];

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty, forEach, undef;

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    try {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    } catch (exception) {}

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] !== undef) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("json-parse");
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            try {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
            } catch (exception) {
              stringifySupported = false;
            }
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse;
          if (typeof parse == "function") {
            try {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  try {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  } catch (exception) {}
                  if (parseSupported) {
                    try {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    } catch (exception) {}
                  }
                  if (parseSupported) {
                    try {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    } catch (exception) {}
                  }
                }
              }
            } catch (exception) {
              parseSupported = false;
            }
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Define additional utility methods if the `Date` methods are buggy.
      if (!isExtended) {
        var floor = Math.floor;
        // A mapping between the months of the year and the number of days between
        // January 1st and the first of the respective month.
        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        // Internal: Calculates the number of days between the Unix epoch and the
        // first day of the given month.
        var getDay = function (year, month) {
          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
        };
      }

      // Internal: Determines if a property is a direct property of the given
      // object. Delegates to the native `Object#hasOwnProperty` method.
      if (!(isProperty = objectProto.hasOwnProperty)) {
        isProperty = function (property) {
          var members = {}, constructor;
          if ((members.__proto__ = null, members.__proto__ = {
            // The *proto* property cannot be set multiple times in recent
            // versions of Firefox and SeaMonkey.
            "toString": 1
          }, members).toString != getClass) {
            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
            // supports the mutable *proto* property.
            isProperty = function (property) {
              // Capture and break the object's prototype chain (see section 8.6.2
              // of the ES 5.1 spec). The parenthesized expression prevents an
              // unsafe transformation by the Closure Compiler.
              var original = this.__proto__, result = property in (this.__proto__ = null, this);
              // Restore the original prototype chain.
              this.__proto__ = original;
              return result;
            };
          } else {
            // Capture a reference to the top-level `Object` constructor.
            constructor = members.constructor;
            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
            // other environments.
            isProperty = function (property) {
              var parent = (this.constructor || constructor).prototype;
              return property in this && !(property in parent && this[property] === parent[property]);
            };
          }
          members = null;
          return isProperty.call(this, property);
        };
      }

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      forEach = function (object, callback) {
        var size = 0, Properties, members, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        members = new Properties();
        for (property in members) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(members, property)) {
            size++;
          }
        }
        Properties = members = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
          };
        } else if (size == 2) {
          // Safari <= 2.0.4 enumerates shadowed properties twice.
          forEach = function (object, callback) {
            // Create a set of iterated properties.
            var members = {}, isFunction = getClass.call(object) == functionClass, property;
            for (property in object) {
              // Store each property name to prevent double enumeration. The
              // `prototype` property of functions is not enumerated due to cross-
              // environment inconsistencies.
              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forEach = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forEach(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Double-quotes a string `value`, replacing all ASCII control
        // characters (characters with code unit values between 0 and 31) with
        // their escaped equivalents. This is an implementation of the
        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
        var unicodePrefix = "\\u00";
        var quote = function (value) {
          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
          for (; index < length; index++) {
            var charCode = value.charCodeAt(index);
            // If the character is a control character, append its Unicode or
            // shorthand escape sequence; otherwise, append the character as-is.
            switch (charCode) {
              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
                result += Escapes[charCode];
                break;
              default:
                if (charCode < 32) {
                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                  break;
                }
                result += useCharIndex ? symbols[index] : value.charAt(index);
            }
          }
          return result + '"';
        };

        // Internal: Recursively serializes an object. Implements the
        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
          try {
            // Necessary for host object support.
            value = object[property];
          } catch (exception) {}
          if (typeof value == "object" && value) {
            className = getClass.call(value);
            if (className == dateClass && !isProperty.call(value, "toJSON")) {
              if (value > -1 / 0 && value < 1 / 0) {
                // Dates are serialized according to the `Date#toJSON` method
                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                // for the ISO 8601 date time string format.
                if (getDay) {
                  // Manually compute the year, month, date, hours, minutes,
                  // seconds, and milliseconds if the `getUTC*` methods are
                  // buggy. Adapted from @Yaffle's `date-shim` project.
                  date = floor(value / 864e5);
                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                  date = 1 + date - getDay(year, month);
                  // The `time` value specifies the time within the day (see ES
                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                  // to compute `A modulo B`, as the `%` operator does not
                  // correspond to the `modulo` operation for negative numbers.
                  time = (value % 864e5 + 864e5) % 864e5;
                  // The hours, minutes, seconds, and milliseconds are obtained by
                  // decomposing the time within the day. See section 15.9.1.10.
                  hours = floor(time / 36e5) % 24;
                  minutes = floor(time / 6e4) % 60;
                  seconds = floor(time / 1e3) % 60;
                  milliseconds = time % 1e3;
                } else {
                  year = value.getUTCFullYear();
                  month = value.getUTCMonth();
                  date = value.getUTCDate();
                  hours = value.getUTCHours();
                  minutes = value.getUTCMinutes();
                  seconds = value.getUTCSeconds();
                  milliseconds = value.getUTCMilliseconds();
                }
                // Serialize extended years correctly.
                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
              } else {
                value = null;
              }
            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
              // ignores all `toJSON` methods on these objects unless they are
              // defined directly on an instance.
              value = value.toJSON(property);
            }
          }
          if (callback) {
            // If a replacement function was provided, call it to obtain the value
            // for serialization.
            value = callback.call(object, property, value);
          }
          if (value === null) {
            return "null";
          }
          className = getClass.call(value);
          if (className == booleanClass) {
            // Booleans are represented literally.
            return "" + value;
          } else if (className == numberClass) {
            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
            // `"null"`.
            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
          } else if (className == stringClass) {
            // Strings are double-quoted and escaped.
            return quote("" + value);
          }
          // Recursively serialize objects and arrays.
          if (typeof value == "object") {
            // Check for cyclic structures. This is a linear search; performance
            // is inversely proportional to the number of unique nested objects.
            for (length = stack.length; length--;) {
              if (stack[length] === value) {
                // Cyclic structures cannot be serialized by `JSON.stringify`.
                throw TypeError();
              }
            }
            // Add the object to the stack of traversed objects.
            stack.push(value);
            results = [];
            // Save the current indentation level and indent one additional level.
            prefix = indentation;
            indentation += whitespace;
            if (className == arrayClass) {
              // Recursively serialize array elements.
              for (index = 0, length = value.length; index < length; index++) {
                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                results.push(element === undef ? "null" : element);
              }
              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
            } else {
              // Recursively serialize object members. Members are selected from
              // either a user-specified list of property names, or the object
              // itself.
              forEach(properties || value, function (property) {
                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                if (element !== undef) {
                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                  // is not the empty string, let `member` {quote(property) + ":"}
                  // be the concatenation of `member` and the `space` character."
                  // The "`space` character" refers to the literal space
                  // character, not the `space` {width} argument provided to
                  // `JSON.stringify`.
                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                }
              });
              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
            }
            // Remove the object from the traversed object stack.
            stack.pop();
            return result;
          }
        };

        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
        exports.stringify = function (source, filter, width) {
          var whitespace, callback, properties, className;
          if (objectTypes[typeof filter] && filter) {
            if ((className = getClass.call(filter)) == functionClass) {
              callback = filter;
            } else if (className == arrayClass) {
              // Convert the property names array into a makeshift set.
              properties = {};
              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
            }
          }
          if (width) {
            if ((className = getClass.call(width)) == numberClass) {
              // Convert the `width` to an integer and create a string containing
              // `width` number of space characters.
              if ((width -= width % 1) > 0) {
                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
              }
            } else if (className == stringClass) {
              whitespace = width.length <= 10 ? width : width.slice(0, 10);
            }
          }
          // Opera <= 7.54u2 discards the values associated with empty string keys
          // (`""`) only if they are used directly within an object member list
          // (e.g., `!("" in { "": 1})`).
          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
        };
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                if (source.slice(Index, Index + 4) == "true") {
                  Index += 4;
                  return true;
                } else if (source.slice(Index, Index + 5) == "false") {
                  Index += 5;
                  return false;
                } else if (source.slice(Index, Index + 4) == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;; hasMembers || (hasMembers = true)) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undef) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forEach` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(value, length, callback);
              }
            } else {
              forEach(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports["runInContext"] = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root["JSON3"],
        isRestored = false;

    var JSON3 = runInContext(root, (root["JSON3"] = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root["JSON3"] = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],35:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = '' + str;
  if (str.length > 10000) return;
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],36:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],37:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],38:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],39:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{"./is-buffer":41,"isarray":33}],40:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    var buf = '';
    while (str.charAt(++i) != '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) != '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":39,"./is-buffer":41,"component-emitter":42,"debug":14,"isarray":33,"json3":34}],41:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],42:[function(_dereq_,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],43:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],44:[function(_dereq_,module,exports){
(function (global){
/*! https://mths.be/utf8js v2.0.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			var byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.0.0',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {})
},{}],45:[function(_dereq_,module,exports){
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}]},{},[1])(1)
});

var socket = io.connect('http://giulianilopez.com:6555');
socket.emit('connected', { my: 'data' });

$(document).ready(function() {
    Sprites().loadSprites()
    .then(function(res) {
        return new View(800, 600)._render();

    })
    .then(function() {
        Sockets().init();
    })
    .catch(function(err) {
        console.log(err);
    });
});

let currentDirection,
    moving = [],
    directions = {
        40: "down",
        37: "left",
        39: "right",
        38: "up"
    };

function Position(assetView) {

    function movePrimary(assetView, e) {
        currentDirection = directions[e.key];

        if (assetView.x < 0 || assetView.y < 0 || assetView.x > 770 || assetView.y > 560) {
            return;
        }

        if (e.key === Crafty.keys.LEFT_ARROW) {
            if (assetView.x - 5 < 0) {
                assetView.x = 0;
                return;
            }

            assetView.x -= 5;
        } else if (e.key === Crafty.keys.RIGHT_ARROW) {
            if (assetView.x + 5 > 770) {
                assetView.x = 770;
                return;
            }

            assetView.x += 5;
        } else if (e.key === Crafty.keys.UP_ARROW) {
            if (assetView.y - 5 < 0) {
                assetView.y = 0;
                return;
            }

            assetView.y -= 5;
        } else if (e.key === Crafty.keys.DOWN_ARROW) {
            if (assetView.y + 5 > 560) {
                assetView.y = 560;
                return;
            }

            assetView.y += 5;
        };
    }

    return {
        _init: function(direction) {
            currentDirection = direction;

            if (!Sockets()._currentPlayer()) {
                if (!assetView) return;

                assetView.unbind('KeyUp');
                assetView.unbind('KeyDown');
                return;
            }

            assetView
            .bind('KeyUp', function(e) {
                if (e.key === Crafty.keys.LEFT_ARROW || e.key === Crafty.keys.RIGHT_ARROW || e.key === Crafty.keys.UP_ARROW || e.key === Crafty.keys.DOWN_ARROW) {
                    moving.forEach(function(e) {
                        clearInterval(e);
                    });
                }
            })
            .bind('KeyDown', function(e) {
                if (e.key === 81) {
                    Sockets().reflect();
                    return;
                }

                if (e.key === Crafty.keys.LEFT_ARROW || e.key === Crafty.keys.RIGHT_ARROW || e.key === Crafty.keys.UP_ARROW || e.key === Crafty.keys.DOWN_ARROW) {
                    Sprites().setSpriteDirection(assetView, directions[e.key]);

                    movePrimary(assetView, e);
                    Sockets().sendPos(assetView, directions[e.key]);

                    moving.push(setInterval(function() {
                        movePrimary(assetView, e);
                        Sockets().sendPos(assetView, directions[e.key]);
                    }, 150));
                }
            });
        },
        _updatePosition: function(assetView, pos) {

            if (currentDirection !== pos.direction) {
                Sprites().setSpriteDirection(assetView, pos.direction);
                currentDirection = pos.direction;
            }

            assetView.x = pos.x;
            assetView.y = pos.y;
        },
        _currentDirection: function() {
            return currentDirection;
        }
    };
}

let level,
    currentPlayer;

function Sockets() {
    return {
        init: function startSocketListeners() {
            socket.emit('getLevel');

            socket.on('currentLevel', function(res) {
                level = res;
                View()._updateAssets(res);
            });

            socket.on('updatePos', function(res) {
                Position()._updatePosition(View()._getPrimaryAsset(), res);
            });

            socket.on('currentPlayer', function(res) {
                currentPlayer = res;
                Position(View()._getPrimaryAsset())._init();
            });

            socket.on('currentPlayerName', function(res) {
                $('#currentPlayer').text("Current Player: " + res);
            });

            socket.on('depression', function(res) {
                $('#depression').text("Depression Level: " + res);
            });

            socket.on('currentDay', function(res) {
                $('#currentDay').text("Day " + res);
            });

            socket.on('messages', function(res) {
                $('#messages').html(res.join('<br>'));
                $('#messages').scrollTop($('#messages').height());
            });
        },
        sendPos: function sendPos(assetView, direction) {
            socket.emit('pos', {x: assetView.x, y: assetView.y, direction: direction});
        },
        _currentPlayer: function() {
            return currentPlayer;
        },
        setUsername: function() {
            if ($('#usernameInput')[0] && $('#usernameInput')[0].value.length > 0 && $('#usernameInput')[0].value.length < 20) {
                socket.emit('setUsername', $('#usernameInput')[0].value);
                $('#usernameInput').hide();
                $('#submitUsername').hide();
            } else {
                if ($('#usernameInput')[0].value.length > 20) {
                    alert('No. Make it shorter.');
                } else {
                    alert('Enter something in or these annoying alerts will keep poping up. I obvious give two craps about user experience.');
                }
            }
        },
        reflect: function() {
            socket.emit("reflect");
        },
        sendMessage: function() {
            if ($('#chat-message')[0] && $('#chat-message')[0].value.trim().length > 0 && $('#chat-message')[0].value.length < 101) {
                socket.emit("message", $('#chat-message')[0].value);
                $('#chat-message')[0].value = "";
            }
        }
    };
}

let sprites = ["cacti", "rock", "shrub"];
let previousAnimation;
//
//TODO load cache
//
function Sprites(sprite, map) {
    let loadSprites = function(sprite, map) {
        let spriteMap = {
            "sprites": {}
        };

        sprites.forEach(function(spriteName) {
            let path = "/assets/" + spriteName + ".png";

            spriteMap["sprites"][path] = {
                tile: 36,
                tileh: 36,
                paddingX: -4,
                map: {}
            };

            if (spriteName === sprite && map) {
                spriteMap["sprites"][path]["map"] = map;
            } else {
                spriteMap["sprites"][path]["map"][spriteName] = [0, 0];
            }
        });

        return new Promise(function(resolve, reject) {
            return Crafty.load(spriteMap, function onLoad(res) {
                return resolve(true);
            }, null, function onError(res) {
                return reject(false);
            });
        });
    };

    let getSprites = function() {
        return sprites;
    };

    let addSprite = function() {
        if (sprite && sprites.indexOf(sprite) === -1) {
            sprites.push(sprite);
             return loadSprites(sprite, map);
        }

        return Promise.reject();
    };

    let setSpriteDirection = function(assetView, directions) {
        previousAnimation = directions;

        assetView
        .animate("walking_" + directions, -1);
    };

    return {
        getSprites: getSprites,
        loadSprites: loadSprites,
        setSpriteDirection: setSpriteDirection,
        addSprite: addSprite
    };
}

let width, height, view, assetsView, primaryAsset;

function View(width, height) {

    if (width && height) {
        this.width = width;
        this.height = height;
    }

    return {
        _getPrimaryAsset: function() {
            return primaryAsset;
        },
        _view: function() {
            return view;
        },
        _render: function renderView() {
            view = Crafty.init(width, height, document.getElementById('game'));

            view.background('#EEEEEE');
            view.z = 0;

            var square = Crafty.e('2D, Canvas, Color');

            square.attr({
                w: width,
                h: height
            })
            .color('#c09a6b')
            .origin('center');

            return Promise.resolve(true);
        },
        _updateAssets: function(res) {
            let assets = res;
            let asset_keys = Object.keys(res);
            asset_keys.forEach(function(asset) {
                if (res[asset].primary) {
                    Sprites(asset, res[asset].map).addSprite()
                    .then(function() {
                        Position()._currentDirection();
                    })
                    .then(function(pos) {
                        if (!pos) {
                            let direction_keys = Object.keys(assets[asset].map);
                            let assetsView = Crafty.e('2D, DOM, ' + direction_keys[0] + ", SpriteAnimation")
                                .attr({x: assets[asset].x, y: assets[asset].y});

                            assetsView.primarySprite = direction_keys[0];

                            Position(assetsView)._init(direction_keys[0]);

                            assetsView
                            .reel("walking_down", 1000, [
                                [0,0], [1,0], [2,0], [3,0]
                            ])
                            .reel("walking_left", 1000, [
                                [0,2], [1,2], [2,2], [3,2]
                            ])
                            .reel("walking_right", 1000, [
                                [0,3], [1,3], [2,3], [3,3]
                            ])
                            .reel("walking_up", 1000, [
                                [0,1], [1,1], [2,1], [3,1]
                            ])
                            .animate((res[asset].direction ? "walking_" + res[asset].direction : "walking_down"), -1);

                            assetsView.z = 3;

                            primaryAsset = assetsView;
                        }
                    });
                } else {
                    res[asset].forEach(function(location) {
                        let assetsView = Crafty.e('2D, DOM, ' + asset)
                            .attr({x: location.x, y: location.y});
                        asset === 'cacti' ? assetsView.z = 2 : assetsView.z = 1;
                    });
                }
            });
        }
    };
}
