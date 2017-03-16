/**
 *wsh.js提供基本选择器，dom操作，事件绑定，ajax
 * 以及常用的工具函数。
 * 包含sizzlev2.3.4
 */
/*! Sizzle v2.3.4-pre | (c) JS Foundation and other contributors | js.foundation */
!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ia(),z=ia(),A=ia(),B=ia(),C=function(a,b){return a===b&&(l=!0),0},D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ba=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ca=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,da=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},ea=function(){m()},fa=ua(function(a){return a.disabled===!0&&"fieldset"===a.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ga){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ha(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=$.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!B[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ca,da):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+ta(o[h]);r=o.join(","),s=_.test(a)&&ra(b.parentNode)||b}if(r)try{return H.apply(d,s.querySelectorAll(r)),d}catch(x){B(a)}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ia(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ja(a){return a[u]=!0,a}function ka(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function la(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ma(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function na(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function oa(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function pa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&fa(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function qa(a){return ja(function(b){return b=+b,ja(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ra(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ha.support={},f=ha.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ha.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),c.attributes=ka(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ka(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ka(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(aa,ba);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(aa,ba);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ka(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ka(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ka(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},C=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ma(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ma(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ha.matches=function(a,b){return ha(a,null,null,b)},ha.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!B[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){B(b)}return ha(b,n,null,[a]).length>0},ha.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ha.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ha.escape=function(a){return(a+"").replace(ca,da)},ha.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ha.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(C),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ha.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ha.selectors={cacheLength:50,createPseudo:ja,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(aa,ba),a[3]=(a[3]||a[4]||a[5]||"").replace(aa,ba),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ha.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ha.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(aa,ba).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ha.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ha.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ja(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ja(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ja(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ja(function(a){return function(b){return ha(a,b).length>0}}),contains:ja(function(a){return a=a.replace(aa,ba),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ja(function(a){return V.test(a||"")||ha.error("unsupported lang: "+a),a=a.replace(aa,ba).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:pa(!1),disabled:pa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:qa(function(){return[0]}),last:qa(function(a,b){return[b-1]}),eq:qa(function(a,b,c){return[c<0?c+b:c]}),even:qa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:qa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:qa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:qa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=na(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=oa(b);function sa(){}sa.prototype=d.filters=d.pseudos,d.setFilters=new sa,g=ha.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ha.error(a):z(a,i).slice(0)};function ta(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ua(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function va(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function wa(a,b,c){for(var d=0,e=b.length;d<e;d++)ha(a,b[d],c);return c}function xa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ya(a,b,c,d,e,f){return d&&!d[u]&&(d=ya(d)),e&&!e[u]&&(e=ya(e,f)),ja(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:xa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=xa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=xa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function za(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ua(function(a){return a===b},h,!0),l=ua(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ua(va(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ya(i>1&&va(m),i>1&&ta(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&za(a.slice(i,e)),e<f&&za(a=a.slice(e)),e<f&&ta(a))}m.push(c)}return va(m)}function Aa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=xa(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ha.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ja(f):f}h=ha.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=za(b[c]),f[u]?d.push(f):e.push(f);f=A(a,Aa(e,d)),f.selector=a}return f},i=ha.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(aa,ba),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=W.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(aa,ba),_.test(i[0].type)&&ra(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&ta(i),!a)return H.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||_.test(a)&&ra(b.parentNode)||b),c},c.sortStable=u.split("").sort(C).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ka(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ka(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||la("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ka(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||la("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ka(function(a){return null==a.getAttribute("disabled")})||la(K,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null});var Ba=a.Sizzle;ha.noConflict=function(){return a.Sizzle===ha&&(a.Sizzle=Ba),ha},"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a.Sizzle=ha}(window);
//# sourceMappingURL=sizzle.min.map
//
;(function(widnow){
  /**
   * @param  {[选择器]}
   * @return {[wsh对象]}
   */
    var  wsh=function(selector) {
    	return wsh.init(selector);
    }
    /**
     * @param  {[选择器]}
     * @return {[调用产生新对象的方法]}
     */
    wsh.init=function(selector)
     {
        if (!selector) return;
        //var dom=document.querySelectorAll(selector);
        var dom=Sizzle(selector);
        if(window.HTMLElement && selector instanceof HTMLElement) {
            dom=[selector];
        }else if (selector.nodeType) {
             dom=[selector];
        }
        return new CreateWshObject(dom,selector); 
    }
    /**
     * @param {[type]} dom 选择其匹配到的节点
     * @param {[type]} selector 选择器
     */
   function CreateWshObject(dom,selector)
    {
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) 
        {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || ''
    }
    /**
     * 原型方法
     * @type {Object}
     */
    wsh.prototype={    	
    	val:function(value){
    		 if (value) {this[0].value=value;}
    		 return this[0].value;
        },  
        html:function(strhtml){
            if (strhtml) {this[0].innerHTML=strhtml;}
            return this[0].innerHTML;
        },
        text:function(strtext)
        {
            var tmp='';
            if (strtext) {
                if (this[0].textContent) {//textContent除了ie所有浏览器都支持
                    this[0].textContent=strtext;
                }
                else
                {
                    this[0].innerText=strtext;//innerText 除了火狐所有浏览器支持
                }

            }else{
                if (this[0].textContent) {
                    tmp=this[0].textContent;
                }
                else
                {
                    tmp=this[0].innerText;   
                }
                 return tmp;         
            }        
            
        },
        css:function(cname,value)
        {
            var styleObj=this[0].style,tmpcss="";;
            if(typeof cname == "string" && arguments.length==2)
            {
                var tmp=wsh.cssNameFormat(cname);
                styleObj[tmp]=value;
            }
            else if(typeof cname == "object")
            {
                var cssText=""; 
                for(var i  in cname)
                {                   
                    cssText += i+":"+cname[i]+";";
                }
                if (styleObj.cssText) {
                    // if (styleObj.cssText) {
                    //     cssText = styleObj.cssText
                    // }
                    styleObj.cssText=cssText;
                }
                else
                {   
                    // tmpcss = this[0].getAttribute("style");
                    // if (tmpcss) {
                    //     cssText = tmpcss;
                    // }
                    this[0].setAttribute("style",cssText);
                }
            }
        }, 
        addClass:function(classname)
        {
            if (!classname) return;
            classname=wsh.trim(classname);          
            this.each(function(index,ele){
            	var cname=wsh.trim(ele.className);
            	if (cname) {
            		if (cname.indexOf(classname)<0) {
            			ele.className = cname+' '+classname;
            		}
            		
            	}
            	else
            	{
            		ele.className = cname+' ' + classname;
            	}
                
            });
            return this;
        },
        index:function(){        	
        	var nodes=this.parentNode().childNodes(),
        	tindex=-1,
        	that=this[0];
        	nodes.each(function(key,value){
        		if (value==that) {
        			tindex=key;        		
        		}        		
        	});
        	return tindex;
        },
        length:function(){
        	var nodes=this.childNodes();
        	if (!nodes) return;
        	return nodes[0].length;
        },
        removeClass:function(classname){
            if (!classname) return;
            this.each(function(index,ele){
            	var classlist=ele.className;
           		var regExp=new RegExp("\\b("+classname+")\\b","gmi");
            	classlist=classlist.replace(regExp,"");
            	ele.className=classlist;
            })
            return this;
        },
        removeAttr:function(attr){
        	if (!attr) return;
        	this.each(function(index,ele){
        		ele.setAttribute(attr,"");
        	});
        	return this;
        },
        //
        insertNode:function(node,position){
            if (!position) {
                this[0].parentNode.appendChild(node);
            }else
            {
                this[0].parentNode.insertBefore(node,position);
            }   
        },
        //删除节点，删除当前调用着
        removeNode:function(){
            this[0].parentNode.removeChild(this[0]);
        },
        sublingNode:function(){
            var nodes=[];
            var ele,t;
            t=this;           
            ele=this[0].parentNode.childNodes;
	   
            for (var i = 0; i < ele.length; i++) {
                if (ele[i].nodeType==1 && ele[i]!=this[0]) {
                    nodes.push(ele[i]);
                }
            }   
            return new CreateWshObject(nodes);
        },
        childNodes:function(){
        	var nodes=[];
        	Array.prototype.map.call(this[0].childNodes,function(item){
        		if (item.nodeType===1) {
        			nodes.push(item);
        		}
        	});
            return new CreateWshObject(nodes);
        },
        parentNode:function(){    
            return new CreateWshObject([this[0].parentNode]);
        },
        /**
         * 返回容器宽度
         * offsetWidth=width+padding+border
         * @return {[type]}
         */
        getWidth:function() {
            return this[0].offsetWidth;
        },
        getHeight:function(){
            return this[0].offsetHeight;
        },
        /**
         * offsetLeft:如果有定位时是到父容器的距离，如果父容器没有定位则是到body左边的距离。
         * @return {[type]}
         */
        getleft:function(){
            return this[0].offsetLeft;
        },  
        gettop:function(){
            return this[0].offsetTop;
        },
        /**
         * 返回容器宽度
         * clientWidth=width+padding
         * @return {[type]}
         */
        getClientWidth:function() {
            return this[0].clientWidth;
        },
        getClientHeight:function(){
            return this[0].clientHeight;
        },       
        each:function(fn)
        {
            var i=0,leng=this.length;
            for (i=0;i<leng;i++) {         
               fn.call(this[i],i,this[i]);
            }
        },
        eq:function(index){
        	var that=[];
        	this.each(function(key,item){
        		if (key===index) {
        			that.push(item);
        		};
        	});

        	return new CreateWshObject(that);
        },
        show:function(){
        	this.each(function(key,item){
        		item.style.display='block';
        	})
        },
        hide:function(){        	
        	this.each(function(key,item){
        		item.style.display='none';
        	});
        },
        fadeIn:function(){
        	var timer,num=0,speed;
        	this.each(function(key,item){       	
        		if (!item.style.opacity || item.style.opacity<1) {
        			num=0;
        			timer=setInterval(function(){

	        			num += 0.01;
	        			item.style.opacity=num;
	        		if (item.style.filter) {
        				item.style.filter="alpha(opacity=" + (num * 1000 )+ ")" ; 
        			}; 
	        			if (num>1) {
	        				num=1;
	        				clearInterval(timer); 
	        			};
	        			
        		 	},10);
        		}
        		   		
        		
        	});
        },
        fadeOut:function(){
        	var timer,num=1,speed;
        	this.each(function(key,item){ 
        		if(!item.style.opacity){num=1;}
        		if (item.style.opacity == 1) {
        			timer=setInterval(function(){      			
        			num -= 0.01;
        			if (num<=0) {
        				num=0;
        				clearInterval(timer);
        			};     
        			item.style.opacity=num;   			
        		 },10);
        	} 	
        			
        	});
        },
        bindEvent:function(type,handler){
            if (window.addEventListener) {
            	this.each(function(key,item){
            		item.addEventListener(type,handler,false);
            	});
               //this[0].addEventListener(type,handler,false);
            }
            else if(window.attachEvent)
            {
            	this.each(function(key,item){
            		item.attachEvent("on"+type,handler);
            	});
                //this[0].attachEvent("on"+type,handler);
            }
            else
            {
            	this.each(function(key,item){
            		this[key]["on"+type]=handler;
            	});	
                //this[0]["on"+type]=handler;
            }            
        },
        /**
         * 通过模拟触发事件
         * @param  {[type]} type    [description]
         * @param  {[type]} handler [description]
         * @return {[type]}         [description]
         */
        triggerEvent:function(type,handler){
            if (document.createEventObject) {//ie8及以下
                var evt=document.createEventObject();
                this[0].fireEvent('on'+type,handler);
            }
            else
            {
                //创建一个通用事件，然后调用initEvent()对其进行初始化。
                var evt=document.createEvent("Events");
                evt.initEvent(type,true,false);
                this[0].dispatchEvent(evt);
            }
        }
    }


    var tools={
        /**
         * @cname  {[type]}  需要检查的样式名
         * @return {[type]}  返回转换过后的样式名
         */
        cssNameFormat:function(cname){
            return cname.replace(/-(\w)/g,function(match,$1)
            {           
                return $1.toUpperCase();
            })
        },
        /**
         * @browserType  {[type]} 浏览器内核
         * @bool {[type]} 返回是否为指定内核
         */
        deviceInfo:function(browserType){
            var ua=navigator.userAgent.toLowerCase();          
            var regExp=new RegExp(browserType,"gi");          
            return regExp.test(ua);
        },
         /**
         * 获取视口的宽高
         * @return {[type]} [description]
         */
        getViewport:function(){
            if (document.compatMode == 'BackCompat') {//混杂模式 ie7以下 safari不支持
                return {
                    width:document.body.clientWidth,
                    height:document.body.clientHeight
                }
            }
            else//标准模式
            {
                return {
                    width:document.documentElement.clientWidth,
                    height:document.documentElement.clientHeight
                }
            }
        },
        /**
         * 获取文档总宽，高
         * @return {[type]} [description]
         */
        getdocSize:function(){
            if (document.compatMode == 'BackCompat') {//混杂模式 ie7以下 safari不支持
                return{
                    width:Math.max(document.body.scrollWidth,document.body.clientWidth),
                    height:Math.max(document.body.scrollHeight,document.body.clientHeight)
                }
            }
            else
            {
                return {
                    width:Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),
                    height:Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)
                }
            }
        },
        ajax:function(obj) {
            var defaults={
                    url:'',
                    method:'get',
                    data:'',
                    dataType:'',
                    success:'',
                    error:''
                },
                responseData,
                fuhao="?",
                callbackName="callbackName";//+parseInt(Math.random()*10000+1);
                defaults=this.extend(true,defaults,obj);
            try{
                if (defaults.dataType.toLowerCase() == 'jsonp') {

                    responseData = undefined;
                    wsh[callbackName]=function(data){
                        responseData=data;
                    }
                   var scriptCode=document.createElement("script");
                   scriptCode.type = 'text/javascript';
                   //拼接回调函数
                   if (/\?/.test(defaults.url)) {
                       fuhao="&" ;
                   }
                   scriptCode.src=defaults.url+fuhao+"callback=wsh."+callbackName;
                   
                   document.getElementsByTagName("head")[0].appendChild(scriptCode);
                   if (scriptCode.onload !== undefined) {
                       scriptCode.onload=function(){
                           scriptCode.parentNode.removeChild(scriptCode);                   
                           defaults.success(responseData);
                       }                   
                   }
                   else if (scriptCode.onreadystatechange !== undefined)
                   {
                        scriptCode.parentNode.removeChild(scriptCode); 
                        if (scriptCode.onreadystatechange == 'complete') {
                             defaults.success(responseData);
                        }
                   }
                }
                else
                {
                    var xhr;
                    if (window.XMLHttpRequest) {
                        xhr=new XMLHttpRequest();
                    }
                    else if(window.ActiveXObject)//IE6及以下
                    {
                        xhr=new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    if (!xhr) return;
                    xhr.onreadystatechange=function() {
                        if (xhr.readyState==4)
                        {
                            if (xhr.status==200)
                            {
                                defaults.success(xhr);
                            }
                            else
                            {
                                alert("Problem retrieving XML data");
                            }
                        }
                    };
                    //请求方法 请求地址 同步异步为true表示脚本会在 send() 方法之后继续执行，而不等待来自服务器的响应。
                    xhr.open(defaults.method,defaults.url,false);
                    if (defaults.method=="post") {
                        xhr.send(data);
                    }
                    else {
                        xhr.send();
                    }
                }
            }catch(e){
                defaults.error(e);
            }           
        },
        /**
         * 深复制对象，扩展对象
         * @param  {[type]} isdeep  [true表示深复制]
         * @param  {[type]} target  [得到的目标对象]
         * @param  {[type]} options [被复制对象]
         * @return {[type]}         [返回目标对象]
         */
        extend:function(isdeep,target,options) {
            var tmp,clone;
            if (isdeep) {
                if (typeof options == 'object' || Array.isArray(options)) {
                    for(var i in options)
                    {
                        tmp = target[i];
                        if (typeof options[i] == 'object' || Array.isArray(options[i])) {
                            if (Array.isArray(options[i])) {
                                clone = tmp && Array.isArray(tmp) ? tmp : [];
                            }
                            else
                            {
                                clone={}
                                if (typeof options[i] == 'object') {
                                    if (typeof tmp == 'object') {
                                        clone=tmp;
                                    }
                                }
                               
                            }
                            
                            target[i]=arguments.callee(isdeep,clone,options[i]);
                        }
                        else
                        {
                            target[i]=options[i];
                        }
                       
                    }
                }
                else
                {
                   target=options;
                }
            }
            return target;           

        },
        getEvent:function(e){
        	return e ? e : window.event;
        },
        getEventTarget:function(e){
        	return e.target || e.srcElement;
        },
        preventDefault:function(e){
        	if (e.preventDefault) {
        		e.preventDefault();
        	}else{
        		e.returnValue=false;
        	}
        },
        stopPropagation:function(e){
        	if (e.stopPropagation) {
        		e.stopPropagation();
        	}else{
        		e.cancleBubble=true;
        	};
        },
        trim:function(str){
        	if(!str) return '';
        	return str.replace(/(^\s*)|(\s*$)/g,'');
        }
    }

    for(var i in tools)
    {
        wsh[i]=tools[i];
    }
    /**
     * 扩展集合 兼容低版ie
     * @param  {[type]} !Array.prototype.forEach [description]
     * @return {[type]}                          [description]
     */
    if (!Array.prototype.forEach) {
            Array.prototype.forEach=function(fn){
                if (typeof fn != "function")  
                    return;
                var leng=this.length;
                
                for(var t=0;t<leng;t++)
                {
                   fn.call(this,this[t]);
                }
            }
        }
    if (!Array.isArray) {
            Array.isArray=function(arg){
                return Object.prototype.toString.call(arg) === '[object Array]';
            }
    }
    /**
     * 绑定事件
     * @type {String}
     */
    var strType='focusin focusout focus blur load resize scroll unload click dblclick ' +
          'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' +
          'change select keydown keypress keyup error';
          strType.split(" ").forEach(function(event){
            wsh.prototype[event]=function(callback){
                this.bindEvent(event,callback);
            }
    });
   	
    CreateWshObject.prototype=wsh.prototype;
    widnow.wsh=wsh;
})(window)




;//定义焦点图类
// 属性：img列表数据 标题列表数据 
// 方法：自动切换setIntral
// 	左右或上下按钮点击事件
// 	鼠标移上去停止
// 	menu鼠标移上去切换事件
(function(){

	function WshFocus(box,isShowTabBtn) {
		//return new WshFocus.prototype.init(wrapid);
		//复制最后和第一个节点。
		
		this.wrapid=box;		
		this.isShowTabBtn=isShowTabBtn;
		this._tick=0//索引统计
	}
	WshFocus.prototype={
		init:function(){
			var wrapid=this.wrapid,
				obj={},
				ol={},
				length=0,
				that=this,
				tmp,
				tmp1;
			//初始化tab
			this.initbar(wrapid);
			//复制节点
			this.clone(wrapid);
			obj=wsh("#"+wrapid +" ul li");
			ol=wsh("#"+wrapid +" ol li");
			length=obj.length;
			that=this;
			//初始化
					
			this._length=obj.length;//li的个数
			this._obj=obj;//ul wsh类型的对象
			this._ol=ol;
			this._timer=null;//自动播放定时器
			this._timer2=null;//点击按钮后5秒恢复自动播放的定时器
			this._timer3=null;//鼠标移上去停止后5秒恢复自动播放的定时器	
			if (length<2) {
				return;
			};			

			this.autoPlay();

			//绑定dom事件
			//如果显示左右按钮
			if (this.isShowBtn) {
				wsh("#"+wrapid +" .btnLeft").bindEvent("click",function(){		
					that.clickHandle(-1);
				});
				wsh("#"+wrapid +" .btnRight").bindEvent("click",function(){
					that.clickHandle(1);
				});
			};			
			tmp=wsh("#"+wrapid +" ol");
			if (tmp.length>0) {
				tmp.bindEvent("mouseover",function(event){
					tmp1=wsh.getEventTarget(event);
					tmp.childNodes().each(function(key,item){
						if (item==tmp1) {
							that._tick=key+1;
						};
					});
					that.tabhoverHandle();
				});
			};


		},
		autoPlay:function(){
			var that=this;
			clearTimeout(this._timer2);
			this._timer=setInterval(function(){
				that._tick++;		
				that.ChangeFun(that._tick);				
			},3000);
		},
		stopAutoPaly:function(){
			clearInterval(this._timer);
		},
		replayAuto:function(){
			var that=this;
			this._timer2=setTimeout(function(){
				that.autoPlay();
			},5000);
		},
		ChangeFun:function(index){
			if (index<0 ) {				
				index=this._tick=this._length-1;
			}
			if (index >= this._length) {
				index=this._tick=0;
			};
			
			this._obj.eq(index).show();
			this._obj.eq(index).sublingNode().hide();
			this.ShowTabBar(index);
						
		},
		clickHandle:function(direction){
			var that=this;
			clearTimeout(this._timer2);
			this.stopAutoPaly();			
			if (direction>0) 
			{
				this._tick++;
			}else{				
				this._tick--;				
			};
			this.ChangeFun(this._tick);
			this.replayAuto();
		},
		tabhoverHandle:function(){
			this.stopAutoPaly();
			clearTimeout(this._timer2);
			this.ChangeFun(this._tick);
			this.replayAuto();
		},
		ShowTabBar:function(index){
			if (this.isShowTabBtn) {
				this._ol.eq(index).addClass('cur');
				this._ol.eq(index).sublingNode().removeClass('cur');
			};

		},
		clone:function(id){
			var obj=wsh('#'+id +' ul li');
			var length=obj.length;
			var targetObj1={},targetObj2={};			 
			var firstNode=obj.eq(0)[0];
			var lastNode=obj.eq(length-1)[0];
			var clone1=firstNode.cloneNode(true);
			var clone2=lastNode.cloneNode(true);
			clone2.id="last";
			obj.insertNode(clone2,firstNode);
			obj.insertNode(clone1);
		},
		initbar:function(id){			
			var li1=wsh('#'+id +' ul li');
			var li2=wsh('#'+id +' ol li');		
			var length1=li1.length;
			var length2=li2.length;
			var html='';
			if (length1 !== length2) {
				for (var i = 0;i < length1;i++) {
					if (i === 0) {
						html='<li class="cur"></li>';
					}else{
						html += '<li></li>';
					}
				};
				li2.parentNode().html(html);
			};

		}
	};


	//渐变焦点图
	function FadeLoop(wrapid,isShowBtn,isShowTabBtn){
		WshFocus.call(this,wrapid);
		this.isShowBtn=isShowBtn;
		this.isShowTabBtn=isShowTabBtn;
		this._tick=0//索引统计
	}
	FadeLoop.prototype=new WshFocus(FadeLoop.wrapid);
	FadeLoop.prototype.ChangeFun=function(index){
			if (index<0 ) {				
				index=this._tick=this._length-1;
			}
			if (index >= this._length) {
				index=this._tick=0;
			};
			this._obj.each(function(key,item){
				// item.style.position="absolute";				
				// item.style.opacity="0";
				item.style.position="absolute";				
				item.style.opacity="0";
				item.style.filter="alpha(opacity=0)" ;
			});
			this._obj.eq(index).fadeIn();
			this._obj.eq(index).sublingNode().fadeOut();
			this.ShowTabBar(index);
	}

	//滚动焦点图
	function SildeLoop(wrapid,isShowBtn,isShowTabBtn){
		WshFocus.call(this,wrapid);
		this.isShowBtn=isShowBtn;
		this.isShowTabBtn=isShowTabBtn;
		this._tick=1//索引统计
	}
	SildeLoop.prototype=new WshFocus(SildeLoop.wrapid);
	SildeLoop.prototype.ChangeFun=function(index){
		var iWidth=this._obj[0].offsetWidth;
		var ul=this._obj.parentNode();
		var tmpLeft=0,tmpLast=0;
		var iLeft=0;
		var that=this;
		tmpLast=index;
			iLeft=-(index*iWidth)+"px";	
			this._obj[0].setAttribute('style','');
			ul.css({'left':iLeft,'transition':'all .5s'});
			if (index >= this._length-1) {
				tmpLast=index=this._tick=1;
				setTimeout(function () {
                    //重置wrap盒子为默认的其实位置开始，这里的css3的效果被去除了，所以看不出来有移动的效果，我们注意看transition-duration:0s;   
                   ul.css({'left':(-iWidth)+'px','transition':'all 0s'});  
                }, 300);
			}	
			if (index<1) {
				tmpLast=index=this._tick=this._length-2;
				setTimeout(function () {
                    //重置wrap盒子为默认的其实位置开始，这里的css3的效果被去除了，所以看不出来有移动的效果，我们注意看transition-duration:0s;   
                   ul.css({'left':-((that._length-2)*iWidth)+"px",'transition':'all 0s'});  
                }, 300);
			};	
			 this.ShowTabBar(index);
	}


	function UIFocusWsh(type,wrapid,isShowBtn,isShowTabBtn){
		var ins;
		switch(type)
		{
			case 0:
				ins=new WshFocus(wrapid,isShowTabBtn);
			break;
			case 1:
				ins=new FadeLoop(wrapid,isShowBtn,isShowTabBtn);
			break;
			case 2:
				ins=new SildeLoop(wrapid,isShowBtn,isShowTabBtn);
			break;


		}
		ins.init();
	}
	//window.UIFocusWsh=UIFocusWsh;



	//焦点图
	UIFocusWsh(2,'wshfocurs2',true,true,1);

	

})();





