function getBaseType(e){return Object.prototype.toString.apply(e).slice(8,-1)}function eachObj(e,t){for(var n in e)t(e[n],n,e)}function getKeys(e,t){var n=[];return eachObj(e,function(e,t){n.push(t)}),n.sort(t)}function extend(n,e){return eachObj(e,function(e,t){n[t]=e}),n}function getPosition(e){var t=0,n=0;if(!e.tagName)return console.warn("element must be a HTML element object"),{x:null,y:null};for(;e!==document.body;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return{x:t,y:n}}