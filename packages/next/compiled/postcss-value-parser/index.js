(()=>{var e={346:(e,r,a)=>{var t=a(790);var o=a(274);var i=a(524);function ValueParser(e){if(this instanceof ValueParser){this.nodes=t(e);return this}return new ValueParser(e)}ValueParser.prototype.toString=function(){return Array.isArray(this.nodes)?i(this.nodes):""};ValueParser.prototype.walk=function(e,r){o(this.nodes,e,r);return this};ValueParser.unit=a(647);ValueParser.walk=o;ValueParser.stringify=i;e.exports=ValueParser},790:e=>{var r="(".charCodeAt(0);var a=")".charCodeAt(0);var t="'".charCodeAt(0);var o='"'.charCodeAt(0);var i="\\".charCodeAt(0);var n="/".charCodeAt(0);var s=",".charCodeAt(0);var u=":".charCodeAt(0);var c="*".charCodeAt(0);var l="u".charCodeAt(0);var d="U".charCodeAt(0);var f="+".charCodeAt(0);var h=/^[a-f0-9?-]+$/i;e.exports=function(e){var v=[];var A=e;var p,C,y,_,w,g,x,b;var k=0;var I=A.charCodeAt(k);var m=A.length;var P=[{nodes:v}];var V=0;var q;var N="";var O="";var E="";while(k<m){if(I<=32){p=k;do{p+=1;I=A.charCodeAt(p)}while(I<=32);_=A.slice(k,p);y=v[v.length-1];if(I===a&&V){E=_}else if(y&&y.type==="div"){y.after=_}else if(I===s||I===u||I===n&&A.charCodeAt(p+1)!==c&&(!q||q&&q.type==="function"&&q.value!=="calc")){O=_}else{v.push({type:"space",sourceIndex:k,value:_})}k=p}else if(I===t||I===o){p=k;C=I===t?"'":'"';_={type:"string",sourceIndex:k,quote:C};do{w=false;p=A.indexOf(C,p+1);if(~p){g=p;while(A.charCodeAt(g-1)===i){g-=1;w=!w}}else{A+=C;p=A.length-1;_.unclosed=true}}while(w);_.value=A.slice(k+1,p);v.push(_);k=p+1;I=A.charCodeAt(k)}else if(I===n&&A.charCodeAt(k+1)===c){_={type:"comment",sourceIndex:k};p=A.indexOf("*/",k);if(p===-1){_.unclosed=true;p=A.length}_.value=A.slice(k+2,p);v.push(_);k=p+2;I=A.charCodeAt(k)}else if((I===n||I===c)&&q&&q.type==="function"&&q.value==="calc"){_=A[k];v.push({type:"word",sourceIndex:k-O.length,value:_});k+=1;I=A.charCodeAt(k)}else if(I===n||I===s||I===u){_=A[k];v.push({type:"div",sourceIndex:k-O.length,value:_,before:O,after:""});O="";k+=1;I=A.charCodeAt(k)}else if(r===I){p=k;do{p+=1;I=A.charCodeAt(p)}while(I<=32);b=k;_={type:"function",sourceIndex:k-N.length,value:N,before:A.slice(b+1,p)};k=p;if(N==="url"&&I!==t&&I!==o){p-=1;do{w=false;p=A.indexOf(")",p+1);if(~p){g=p;while(A.charCodeAt(g-1)===i){g-=1;w=!w}}else{A+=")";p=A.length-1;_.unclosed=true}}while(w);x=p;do{x-=1;I=A.charCodeAt(x)}while(I<=32);if(b<x){if(k!==x+1){_.nodes=[{type:"word",sourceIndex:k,value:A.slice(k,x+1)}]}else{_.nodes=[]}if(_.unclosed&&x+1!==p){_.after="";_.nodes.push({type:"space",sourceIndex:x+1,value:A.slice(x+1,p)})}else{_.after=A.slice(x+1,p)}}else{_.after="";_.nodes=[]}k=p+1;I=A.charCodeAt(k);v.push(_)}else{V+=1;_.after="";v.push(_);P.push(_);v=_.nodes=[];q=_}N=""}else if(a===I&&V){k+=1;I=A.charCodeAt(k);q.after=E;E="";V-=1;P.pop();q=P[V];v=q.nodes}else{p=k;do{if(I===i){p+=1}p+=1;I=A.charCodeAt(p)}while(p<m&&!(I<=32||I===t||I===o||I===s||I===u||I===n||I===r||I===c&&q&&q.type==="function"&&q.value==="calc"||I===n&&q.type==="function"&&q.value==="calc"||I===a&&V));_=A.slice(k,p);if(r===I){N=_}else if((l===_.charCodeAt(0)||d===_.charCodeAt(0))&&f===_.charCodeAt(1)&&h.test(_.slice(2))){v.push({type:"unicode-range",sourceIndex:k,value:_})}else{v.push({type:"word",sourceIndex:k,value:_})}k=p}}for(k=P.length-1;k;k-=1){P[k].unclosed=true}return P[0].nodes}},524:e=>{function stringifyNode(e,r){var a=e.type;var t=e.value;var o;var i;if(r&&(i=r(e))!==undefined){return i}else if(a==="word"||a==="space"){return t}else if(a==="string"){o=e.quote||"";return o+t+(e.unclosed?"":o)}else if(a==="comment"){return"/*"+t+(e.unclosed?"":"*/")}else if(a==="div"){return(e.before||"")+t+(e.after||"")}else if(Array.isArray(e.nodes)){o=stringify(e.nodes,r);if(a!=="function"){return o}return t+"("+(e.before||"")+o+(e.after||"")+(e.unclosed?"":")")}return t}function stringify(e,r){var a,t;if(Array.isArray(e)){a="";for(t=e.length-1;~t;t-=1){a=stringifyNode(e[t],r)+a}return a}return stringifyNode(e,r)}e.exports=stringify},647:e=>{var r="-".charCodeAt(0);var a="+".charCodeAt(0);var t=".".charCodeAt(0);var o="e".charCodeAt(0);var i="E".charCodeAt(0);function likeNumber(e){var o=e.charCodeAt(0);var i;if(o===a||o===r){i=e.charCodeAt(1);if(i>=48&&i<=57){return true}var n=e.charCodeAt(2);if(i===t&&n>=48&&n<=57){return true}return false}if(o===t){i=e.charCodeAt(1);if(i>=48&&i<=57){return true}return false}if(o>=48&&o<=57){return true}return false}e.exports=function(e){var n=0;var s=e.length;var u;var c;var l;if(s===0||!likeNumber(e)){return false}u=e.charCodeAt(n);if(u===a||u===r){n++}while(n<s){u=e.charCodeAt(n);if(u<48||u>57){break}n+=1}u=e.charCodeAt(n);c=e.charCodeAt(n+1);if(u===t&&c>=48&&c<=57){n+=2;while(n<s){u=e.charCodeAt(n);if(u<48||u>57){break}n+=1}}u=e.charCodeAt(n);c=e.charCodeAt(n+1);l=e.charCodeAt(n+2);if((u===o||u===i)&&(c>=48&&c<=57||(c===a||c===r)&&l>=48&&l<=57)){n+=c===a||c===r?3:2;while(n<s){u=e.charCodeAt(n);if(u<48||u>57){break}n+=1}}return{number:e.slice(0,n),unit:e.slice(n)}}},274:e=>{e.exports=function walk(e,r,a){var t,o,i,n;for(t=0,o=e.length;t<o;t+=1){i=e[t];if(!a){n=r(i,t,e)}if(n!==false&&i.type==="function"&&Array.isArray(i.nodes)){walk(i.nodes,r,a)}if(a){r(i,t,e)}}}}};var r={};function __nccwpck_require__(a){var t=r[a];if(t!==undefined){return t.exports}var o=r[a]={exports:{}};var i=true;try{e[a](o,o.exports,__nccwpck_require__);i=false}finally{if(i)delete r[a]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var a=__nccwpck_require__(346);module.exports=a})();