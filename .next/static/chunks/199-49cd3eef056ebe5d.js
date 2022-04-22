(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{1739:function(i,d,a){"use strict";a.d(d,{At:function(){return f},aG:function(){return h},gN:function(){return g}});var b=a(6052),c=a(5031),j=a(6450),k=a(7294);function l(){return(l=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function m(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var n=["spacing"],o=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],q=["children","spacing","separator","className"],e=(0,b.Gp)(function(a,c){var d=a.spacing,e=m(a,n),f=(0,b.yK)(),g=l({mx:d},f.separator);return k.createElement(b.m$.span,l({ref:c,role:"presentation"},e,{__css:g}))});c.Ts&&(e.displayName="BreadcrumbSeparator");var f=(0,b.Gp)(function(a,f){var g=a.isCurrentPage,h=a.as,i=a.className,j=a.href,n=m(a,o),d=(0,b.yK)(),e=l({ref:f,as:h,className:(0,c.cx)("chakra-breadcrumb__link",i)},n);return g?k.createElement(b.m$.span,l({"aria-current":"page",__css:d.link},e)):k.createElement(b.m$.a,l({__css:d.link,href:j},e))});c.Ts&&(f.displayName="BreadcrumbLink");var g=(0,b.Gp)(function(a,d){var w=a.isCurrentPage,g=a.separator,h=a.isLastChild,i=a.spacing,n=a.children,o=a.className,q=m(a,p),r=(0,j.WR)(n),s=r.map(function(a){return a.type===f?k.cloneElement(a,{isCurrentPage:w}):a.type===e?k.cloneElement(a,{spacing:i,children:a.props.children||g}):a}),t=(0,b.yK)(),u=l({display:"inline-flex",alignItems:"center"},t.item),v=(0,c.cx)("chakra-breadcrumb__list-item",o);return k.createElement(b.m$.li,l({ref:d,className:v},q,{__css:u}),s,!h&&k.createElement(e,{spacing:i},g))});c.Ts&&(g.displayName="BreadcrumbItem");var h=(0,b.Gp)(function(d,i){var e=(0,b.jC)("Breadcrumb",d),a=(0,b.Lr)(d),n=a.children,f=a.spacing,t=void 0===f?"0.5rem":f,g=a.separator,u=void 0===g?"/":g,o=a.className,p=m(a,q),h=(0,j.WR)(n),v=h.length,r=h.map(function(a,b){return k.cloneElement(a,{separator:u,spacing:t,isLastChild:v===b+1})}),s=(0,c.cx)("chakra-breadcrumb",o);return k.createElement(b.m$.nav,l({ref:i,"aria-label":"breadcrumb",className:s,__css:e.container},p),k.createElement(b.Fo,{value:e},k.createElement(b.m$.ol,{className:"chakra-breadcrumb__list"},r)))});c.Ts&&(h.displayName="Breadcrumb")},1163:function(a,c,b){a.exports=b(880)},7441:function(q,j,k){"use strict";function i(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}k.d(j,{TU:function(){return d}});let l=i();const r=/[&<>"']/,s=/[&<>"']/g,t=/[<>"']|&(?!#?\w+;)/,u=/[<>"']|&(?!#?\w+;)/g,v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w=a=>v[a];function x(a,b){if(b){if(r.test(a))return a.replace(s,w)}else if(t.test(a))return a.replace(u,w);return a}const y=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function z(a){return a.replace(y,(b,a)=>"colon"===(a=a.toLowerCase())?":":"#"===a.charAt(0)?"x"===a.charAt(1)?String.fromCharCode(parseInt(a.substring(2),16)):String.fromCharCode(+a.substring(1)):"")}const A=/(^|[^\[])\^/g;function c(a,b){a="string"==typeof a?a:a.source,b=b||"";const c={replace:(d,b)=>(b=(b=b.source||b).replace(A,"$1"),a=a.replace(d,b),c),getRegex:()=>new RegExp(a,b)};return c}const B=/[^\w:]/g,C=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function D(d,c,a){if(d){let b;try{b=decodeURIComponent(z(a)).replace(B,"").toLowerCase()}catch(e){return null}if(0===b.indexOf("javascript:")||0===b.indexOf("vbscript:")||0===b.indexOf("data:"))return null}c&&!C.test(a)&&(a=I(c,a));try{a=encodeURI(a).replace(/%25/g,"%")}catch(f){return null}return a}const E={},F=/^[^:]+:\/*[^/]*$/,G=/^([^:]+:)[\s\S]*$/,H=/^([^:]+:\/*[^/]*)[\s\S]*$/;function I(a,b){E[" "+a]||(F.test(a)?E[" "+a]=a+"/":E[" "+a]=K(a,"/",!0)),a=E[" "+a];const c=-1===a.indexOf(":");return"//"===b.substring(0,2)?c?b:a.replace(G,"$1")+b:"/"!==b.charAt(0)?a+b:c?b:a.replace(H,"$1")+b}const f={exec:function(){}};function e(d){let b=1,c,a;for(;b<arguments.length;b++)for(a in c=arguments[b])Object.prototype.hasOwnProperty.call(c,a)&&(d[a]=c[a]);return d}function J(d,c){const e=d.replace(/\|/g,(e,c,d)=>{let a=!1,b=c;for(;--b>=0&&"\\"===d[b];)a=!a;return a?"|":" |"}),a=e.split(/ \|/);let b=0;if(a[0].trim()||a.shift(),a.length>0&&!a[a.length-1].trim()&&a.pop(),a.length>c)a.splice(c);else for(;a.length<c;)a.push("");for(;b<a.length;b++)a[b]=a[b].trim().replace(/\\\|/g,"|");return a}function K(c,d,e){const b=c.length;if(0===b)return"";let a=0;for(;a<b;){const f=c.charAt(b-a-1);if(f!==d||e)if(f!==d&&e)a++;else break;else a++}return c.slice(0,b-a)}function L(a){a&&a.sanitize&&!a.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function M(a,b){if(b<1)return"";let c="";for(;b>1;)1&b&&(c+=a),b>>=1,a+=a;return c+a}function N(d,a,e,b){const f=a.href,g=a.title?x(a.title):null,c=d[1].replace(/\\([\[\]])/g,"$1");if("!"===d[0].charAt(0))return{type:"image",raw:e,href:f,title:g,text:x(c)};{b.state.inLink=!0;const h={type:"link",raw:e,href:f,title:g,text:c,tokens:b.inlineTokens(c,[])};return b.state.inLink=!1,h}}class m{constructor(a){this.options=a||l}space(b){const a=this.rules.block.newline.exec(b);if(a&&a[0].length>0)return{type:"space",raw:a[0]}}code(c){const a=this.rules.block.code.exec(c);if(a){const b=a[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:a[0],codeBlockStyle:"indented",text:this.options.pedantic?b:K(b,"\n")}}}fences(c){const a=this.rules.block.fences.exec(c);if(a){const b=a[0],d=function(c,a){const b=c.match(/^(\s+)(?:```)/);if(null===b)return a;const d=b[1];return a.split("\n").map(a=>{const b=a.match(/^\s+/);if(null===b)return a;const[c]=b;return c.length>=d.length?a.slice(d.length):a}).join("\n")}(b,a[3]||"");return{type:"code",raw:b,lang:a[2]?a[2].trim():a[2],text:d}}}heading(e){const b=this.rules.block.heading.exec(e);if(b){let a=b[2].trim();if(/#$/.test(a)){const c=K(a,"#");this.options.pedantic?a=c.trim():(!c||/ $/.test(c))&&(a=c.trim())}const d={type:"heading",raw:b[0],depth:b[1].length,text:a,tokens:[]};return this.lexer.inline(d.text,d.tokens),d}}hr(b){const a=this.rules.block.hr.exec(b);if(a)return{type:"hr",raw:a[0]}}blockquote(c){const a=this.rules.block.blockquote.exec(c);if(a){const b=a[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:a[0],tokens:this.lexer.blockTokens(b,[]),text:b}}}list(b){let h=this.rules.block.list.exec(b);if(h){let f,m,p,d,i,j,q,c,k,n,e,o,g=h[1].trim();const l=g.length>1,a={type:"list",raw:"",ordered:l,start:l?+g.slice(0,-1):"",loose:!1,items:[]};g=l?`\\d{1,9}\\${g.slice(-1)}`:`\\${g}`,this.options.pedantic&&(g=l?g:"[*+-]");const s=new RegExp(`^( {0,3}${g})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;b&&(o=!1,h=s.exec(b))&&!this.rules.block.hr.test(b);){if(f=h[0],b=b.substring(f.length),c=h[2].split("\n",1)[0],k=b.split("\n",1)[0],this.options.pedantic?(d=2,e=c.trimLeft()):(d=(d=h[2].search(/[^ ]/))>4?1:d,e=c.slice(d),d+=h[1].length),j=!1,!c&&/^ *$/.test(k)&&(f+=k+"\n",b=b.substring(k.length+1),o=!0),!o){const t=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;b&&(c=n=b.split("\n",1)[0],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=d||!c.trim())e+="\n"+c.slice(d);else if(j)break;else e+="\n"+c;j||c.trim()||(j=!0),f+=n+"\n",b=b.substring(n.length+1)}}!a.loose&&(q?a.loose=!0:/\n *\n *$/.test(f)&&(q=!0)),this.options.gfm&&(m=/^\[[ xX]\] /.exec(e))&&(p="[ ] "!==m[0],e=e.replace(/^\[[ xX]\] +/,"")),a.items.push({type:"list_item",raw:f,task:!!m,checked:p,loose:!1,text:e}),a.raw+=f}a.items[a.items.length-1].raw=f.trimRight(),a.items[a.items.length-1].text=e.trimRight(),a.raw=a.raw.trimRight();const u=a.items.length;for(i=0;i<u;i++){this.lexer.state.top=!1,a.items[i].tokens=this.lexer.blockTokens(a.items[i].text,[]);const r=a.items[i].tokens.filter(a=>"space"===a.type),v=r.every(b=>{const c=b.raw.split("");let a=0;for(const d of c)if("\n"===d&&(a+=1),a>1)return!0;return!1});!a.loose&&r.length&&v&&(a.loose=!0,a.items[i].loose=!0)}return a}}html(c){const a=this.rules.block.html.exec(c);if(a){const b={type:"html",raw:a[0],pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]};return this.options.sanitize&&(b.type="paragraph",b.text=this.options.sanitizer?this.options.sanitizer(a[0]):x(a[0]),b.tokens=[],this.lexer.inline(b.text,b.tokens)),b}}def(b){const a=this.rules.block.def.exec(b);if(a){a[3]&&(a[3]=a[3].substring(1,a[3].length-1));const c=a[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:c,raw:a[0],href:a[2],title:a[3]}}}table(h){const d=this.rules.block.table.exec(h);if(d){const a={type:"table",header:J(d[1]).map(a=>({text:a})),align:d[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:d[3]&&d[3].trim()?d[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(a.header.length===a.align.length){a.raw=d[0];let e=a.align.length,b,c,f,g;for(b=0;b<e;b++)/^ *-+: *$/.test(a.align[b])?a.align[b]="right":/^ *:-+: *$/.test(a.align[b])?a.align[b]="center":/^ *:-+ *$/.test(a.align[b])?a.align[b]="left":a.align[b]=null;for(b=0,e=a.rows.length;b<e;b++)a.rows[b]=J(a.rows[b],a.header.length).map(a=>({text:a}));for(c=0,e=a.header.length;c<e;c++)a.header[c].tokens=[],this.lexer.inlineTokens(a.header[c].text,a.header[c].tokens);for(c=0,e=a.rows.length;c<e;c++)for(f=0,g=a.rows[c];f<g.length;f++)g[f].tokens=[],this.lexer.inlineTokens(g[f].text,g[f].tokens);return a}}}lheading(c){const a=this.rules.block.lheading.exec(c);if(a){const b={type:"heading",raw:a[0],depth:"="===a[2].charAt(0)?1:2,text:a[1],tokens:[]};return this.lexer.inline(b.text,b.tokens),b}}paragraph(c){const a=this.rules.block.paragraph.exec(c);if(a){const b={type:"paragraph",raw:a[0],text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1],tokens:[]};return this.lexer.inline(b.text,b.tokens),b}}text(c){const a=this.rules.block.text.exec(c);if(a){const b={type:"text",raw:a[0],text:a[0],tokens:[]};return this.lexer.inline(b.text,b.tokens),b}}escape(b){const a=this.rules.inline.escape.exec(b);if(a)return{type:"escape",raw:a[0],text:x(a[1])}}tag(b){const a=this.rules.inline.tag.exec(b);if(a)return!this.lexer.state.inLink&&/^<a /i.test(a[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(a[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):x(a[0]):a[0]}}link(g){const a=this.rules.inline.link.exec(g);if(a){const c=a[2].trim();if(!this.options.pedantic&&/^</.test(c)){if(!/>$/.test(c))return;const h=K(c.slice(0,-1),"\\");if((c.length-h.length)%2==0)return}else{const e=function(b,c){if(-1===b.indexOf(c[1]))return -1;const e=b.length;let d=0,a=0;for(;a<e;a++)if("\\"===b[a])a++;else if(b[a]===c[0])d++;else if(b[a]===c[1]&& --d<0)return a;return -1}(a[2],"()");if(e> -1){const i=0===a[0].indexOf("!")?5:4,j=i+a[1].length+e;a[2]=a[2].substring(0,e),a[0]=a[0].substring(0,j).trim(),a[3]=""}}let b=a[2],d="";if(this.options.pedantic){const f=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(b);f&&(b=f[1],d=f[3])}else d=a[3]?a[3].slice(1,-1):"";return b=b.trim(),/^</.test(b)&&(b=this.options.pedantic&&!/>$/.test(c)?b.slice(1):b.slice(1,-1)),N(a,{href:b?b.replace(this.rules.inline._escapes,"$1"):b,title:d?d.replace(this.rules.inline._escapes,"$1"):d},a[0],this.lexer)}}reflink(c,e){let a;if((a=this.rules.inline.reflink.exec(c))||(a=this.rules.inline.nolink.exec(c))){let b=(a[2]||a[1]).replace(/\s+/g," ");if(!(b=e[b.toLowerCase()])||!b.href){const d=a[0].charAt(0);return{type:"text",raw:d,text:d}}return N(a,b,a[0],this.lexer)}}emStrong(d,e,f=""){let a=this.rules.inline.emStrong.lDelim.exec(d);if(!a)return;if(a[3]&&f.match(/[\p{L}\p{N}]/u))return;const h=a[1]||a[2]||"";if(!h||h&&(""===f||this.rules.inline.punctuation.exec(f))){const c=a[0].length-1;let i,b,g=c,j=0;const k="*"===a[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(k.lastIndex=0,e=e.slice(-1*d.length+c);null!=(a=k.exec(e));){if(!(i=a[1]||a[2]||a[3]||a[4]||a[5]||a[6]))continue;if(b=i.length,a[3]||a[4]){g+=b;continue}if((a[5]||a[6])&&c%3&&!((c+b)%3)){j+=b;continue}if((g-=b)>0)continue;if(b=Math.min(b,b+g+j),Math.min(c,b)%2){const l=d.slice(1,c+a.index+b);return{type:"em",raw:d.slice(0,c+a.index+b+1),text:l,tokens:this.lexer.inlineTokens(l,[])}}const m=d.slice(2,c+a.index+b-1);return{type:"strong",raw:d.slice(0,c+a.index+b+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}}}codespan(c){const b=this.rules.inline.code.exec(c);if(b){let a=b[2].replace(/\n/g," ");const d=/[^ ]/.test(a),e=/^ /.test(a)&&/ $/.test(a);return d&&e&&(a=a.substring(1,a.length-1)),a=x(a,!0),{type:"codespan",raw:b[0],text:a}}}br(b){const a=this.rules.inline.br.exec(b);if(a)return{type:"br",raw:a[0]}}del(b){const a=this.rules.inline.del.exec(b);if(a)return{type:"del",raw:a[0],text:a[2],tokens:this.lexer.inlineTokens(a[2],[])}}autolink(d,e){const a=this.rules.inline.autolink.exec(d);if(a){let b,c;return c="@"===a[2]?"mailto:"+(b=x(this.options.mangle?e(a[1]):a[1])):b=x(a[1]),{type:"link",raw:a[0],text:b,href:c,tokens:[{type:"text",raw:b,text:b}]}}}url(e,f){let a;if(a=this.rules.inline.url.exec(e)){let b,c;if("@"===a[2])c="mailto:"+(b=x(this.options.mangle?f(a[0]):a[0]));else{let d;do d=a[0],a[0]=this.rules.inline._backpedal.exec(a[0])[0];while(d!==a[0])b=x(a[0]),c="www."===a[1]?"http://"+b:b}return{type:"link",raw:a[0],text:b,href:c,tokens:[{type:"text",raw:b,text:b}]}}}inlineText(c,d){const a=this.rules.inline.text.exec(c);if(a){let b;return b=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):x(a[0]):a[0]:x(this.options.smartypants?d(a[0]):a[0]),{type:"text",raw:a[0],text:b}}}}const b={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:f,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};b._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,b._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,b.def=c(b.def).replace("label",b._label).replace("title",b._title).getRegex(),b.bullet=/(?:[*+-]|\d{1,9}[.)])/,b.listItemStart=c(/^( *)(bull) */).replace("bull",b.bullet).getRegex(),b.list=c(b.list).replace(/bull/g,b.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+b.def.source+")").getRegex(),b._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",b._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,b.html=c(b.html,"i").replace("comment",b._comment).replace("tag",b._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b.paragraph=c(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.blockquote=c(b.blockquote).replace("paragraph",b.paragraph).getRegex(),b.normal=e({},b),b.gfm=e({},b.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),b.gfm.table=c(b.gfm.table).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.gfm.paragraph=c(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",b.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.pedantic=e({},b.normal,{html:c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",b._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:f,paragraph:c(b.normal._paragraph).replace("hr",b.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",b.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const a={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:f,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:f,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function O(a){return a.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function P(c){let d="",a,b;const e=c.length;for(a=0;a<e;a++)b=c.charCodeAt(a),Math.random()>.5&&(b="x"+b.toString(16)),d+="&#"+b+";";return d}a._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",a.punctuation=c(a.punctuation).replace(/punctuation/g,a._punctuation).getRegex(),a.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,a.escapedEmSt=/\\\*|\\_/g,a._comment=c(b._comment).replace("(?:-->|$)","-->").getRegex(),a.emStrong.lDelim=c(a.emStrong.lDelim).replace(/punct/g,a._punctuation).getRegex(),a.emStrong.rDelimAst=c(a.emStrong.rDelimAst,"g").replace(/punct/g,a._punctuation).getRegex(),a.emStrong.rDelimUnd=c(a.emStrong.rDelimUnd,"g").replace(/punct/g,a._punctuation).getRegex(),a._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=c(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=c(a.tag).replace("comment",a._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=c(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=c(a.reflink).replace("label",a._label).replace("ref",b._label).getRegex(),a.nolink=c(a.nolink).replace("ref",b._label).getRegex(),a.reflinkSearch=c(a.reflinkSearch,"g").replace("reflink",a.reflink).replace("nolink",a.nolink).getRegex(),a.normal=e({},a),a.pedantic=e({},a.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=e({},a.normal,{escape:c(a.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),a.gfm.url=c(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex(),a.breaks=e({},a.gfm,{br:c(a.br).replace("{2,}","*").getRegex(),text:c(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class g{constructor(d){this.tokens=[],this.tokens.links=Object.create(null),this.options=d||l,this.options.tokenizer=this.options.tokenizer||new m,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const c={block:b.normal,inline:a.normal};this.options.pedantic?(c.block=b.pedantic,c.inline=a.pedantic):this.options.gfm&&(c.block=b.gfm,this.options.breaks?c.inline=a.breaks:c.inline=a.gfm),this.tokenizer.rules=c}static get rules(){return{block:b,inline:a}}static lex(a,b){const c=new g(b);return c.lex(a)}static lexInline(a,b){const c=new g(b);return c.inlineTokens(a)}lex(a){a=a.replace(/\r\n|\r/g,"\n"),this.blockTokens(a,this.tokens);let b;for(;b=this.inlineQueue.shift();)this.inlineTokens(b.src,b.tokens);return this.tokens}blockTokens(b,c=[]){b=this.options.pedantic?b.replace(/\t/g,"    ").replace(/^ +$/gm,""):b.replace(/^( *)(\t+)/gm,(c,a,b)=>a+"    ".repeat(b.length));let a,d,e,g;for(;b;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>!!(a=d.call({lexer:this},b,c))&&(b=b.substring(a.raw.length),c.push(a),!0)))){if(a=this.tokenizer.space(b)){b=b.substring(a.raw.length),1===a.raw.length&&c.length>0?c[c.length-1].raw+="\n":c.push(a);continue}if(a=this.tokenizer.code(b)){b=b.substring(a.raw.length),(d=c[c.length-1])&&("paragraph"===d.type||"text"===d.type)?(d.raw+="\n"+a.raw,d.text+="\n"+a.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text):c.push(a);continue}if(a=this.tokenizer.fences(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.heading(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.hr(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.blockquote(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.list(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.html(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.def(b)){b=b.substring(a.raw.length),(d=c[c.length-1])&&("paragraph"===d.type||"text"===d.type)?(d.raw+="\n"+a.raw,d.text+="\n"+a.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.lheading(b)){b=b.substring(a.raw.length),c.push(a);continue}if(e=b,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const i=b.slice(1);let j;this.options.extensions.startBlock.forEach(function(a){"number"==typeof(j=a.call({lexer:this},i))&&j>=0&&(f=Math.min(f,j))}),f<1/0&&f>=0&&(e=b.substring(0,f+1))}if(this.state.top&&(a=this.tokenizer.paragraph(e))){d=c[c.length-1],g&&"paragraph"===d.type?(d.raw+="\n"+a.raw,d.text+="\n"+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):c.push(a),g=e.length!==b.length,b=b.substring(a.raw.length);continue}if(a=this.tokenizer.text(b)){b=b.substring(a.raw.length),(d=c[c.length-1])&&"text"===d.type?(d.raw+="\n"+a.raw,d.text+="\n"+a.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):c.push(a);continue}if(b){const h="Infinite loop on byte: "+b.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,c}inline(a,b){this.inlineQueue.push({src:a,tokens:b})}inlineTokens(b,c=[]){let a,d,g,e=b,f,h,i;if(this.tokens.links){const k=Object.keys(this.tokens.links);if(k.length>0)for(;null!=(f=this.tokenizer.rules.inline.reflinkSearch.exec(e));)k.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(e=e.slice(0,f.index)+"["+M("a",f[0].length-2)+"]"+e.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(f=this.tokenizer.rules.inline.blockSkip.exec(e));)e=e.slice(0,f.index)+"["+M("a",f[0].length-2)+"]"+e.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(f=this.tokenizer.rules.inline.escapedEmSt.exec(e));)e=e.slice(0,f.index)+"++"+e.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;b;)if(h||(i=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>!!(a=d.call({lexer:this},b,c))&&(b=b.substring(a.raw.length),c.push(a),!0)))){if(a=this.tokenizer.escape(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.tag(b)){b=b.substring(a.raw.length),(d=c[c.length-1])&&"text"===a.type&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if(a=this.tokenizer.link(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.reflink(b,this.tokens.links)){b=b.substring(a.raw.length),(d=c[c.length-1])&&"text"===a.type&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if(a=this.tokenizer.emStrong(b,e,i)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.codespan(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.br(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.del(b)){b=b.substring(a.raw.length),c.push(a);continue}if(a=this.tokenizer.autolink(b,P)){b=b.substring(a.raw.length),c.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(b,P))){b=b.substring(a.raw.length),c.push(a);continue}if(g=b,this.options.extensions&&this.options.extensions.startInline){let j=1/0;const m=b.slice(1);let n;this.options.extensions.startInline.forEach(function(a){"number"==typeof(n=a.call({lexer:this},m))&&n>=0&&(j=Math.min(j,n))}),j<1/0&&j>=0&&(g=b.substring(0,j+1))}if(a=this.tokenizer.inlineText(g,O)){b=b.substring(a.raw.length),"_"!==a.raw.slice(-1)&&(i=a.raw.slice(-1)),h=!0,d=c[c.length-1],d&&"text"===d.type?(d.raw+=a.raw,d.text+=a.text):c.push(a);continue}if(b){const l="Infinite loop on byte: "+b.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}}return c}}class n{constructor(a){this.options=a||l}code(a,e,b){const c=(e||"").match(/\S*/)[0];if(this.options.highlight){const d=this.options.highlight(a,c);null!=d&&d!==a&&(b=!0,a=d)}return(a=a.replace(/\n$/,"")+"\n",c)?'<pre><code class="'+this.options.langPrefix+x(c,!0)+'">'+(b?a:x(a,!0))+"</code></pre>\n":"<pre><code>"+(b?a:x(a,!0))+"</code></pre>\n"}blockquote(a){return`<blockquote>
${a}</blockquote>
`}html(a){return a}heading(b,a,c,d){if(this.options.headerIds){const e=this.options.headerPrefix+d.slug(c);return`<h${a} id="${e}">${b}</h${a}>
`}return`<h${a}>${b}</h${a}>
`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(d,a,b){const c=a?"ol":"ul";return"<"+c+(a&&1!==b?' start="'+b+'"':"")+">\n"+d+"</"+c+">\n"}listitem(a){return`<li>${a}</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return`<p>${a}</p>
`}table(b,a){return a&&(a=`<tbody>${a}</tbody>`),"<table>\n<thead>\n"+b+"</thead>\n"+a+"</table>\n"}tablerow(a){return`<tr>
${a}</tr>
`}tablecell(c,a){const b=a.header?"th":"td",d=a.align?`<${b} align="${a.align}">`:`<${b}>`;return d+c+`</${b}>
`}strong(a){return`<strong>${a}</strong>`}em(a){return`<em>${a}</em>`}codespan(a){return`<code>${a}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return`<del>${a}</del>`}link(a,b,c){if(null===(a=D(this.options.sanitize,this.options.baseUrl,a)))return c;let d='<a href="'+x(a)+'"';return b&&(d+=' title="'+b+'"'),d+=">"+c+"</a>"}image(a,b,c){if(null===(a=D(this.options.sanitize,this.options.baseUrl,a)))return c;let d=`<img src="${a}" alt="${c}"`;return b&&(d+=` title="${b}"`),d+=this.options.xhtml?"/>":">"}text(a){return a}}class o{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(b,c,a){return""+a}image(b,c,a){return""+a}br(){return""}}class p{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(b,d){let a=b,c=0;if(this.seen.hasOwnProperty(a)){c=this.seen[b];do a=b+"-"+ ++c;while(this.seen.hasOwnProperty(a))}return d||(this.seen[b]=c,this.seen[a]=0),a}slug(a,b={}){const c=this.serialize(a);return this.getNextSafeSlug(c,b.dryrun)}}class h{constructor(a){this.options=a||l,this.options.renderer=this.options.renderer||new n,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new o,this.slugger=new p}static parse(a,b){const c=new h(b);return c.parse(a)}static parseInline(a,b){const c=new h(b);return c.parseInline(a)}parse(k,x=!0){let e="",f,c,i,g,q,m,h,n,d,a,r,s,o,l,b,p,t,j,u;const v=k.length;for(f=0;f<v;f++){if(a=k[f],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(!1!==(u=this.options.extensions.renderers[a.type].call({parser:this},a))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type))){e+=u||"";continue}switch(a.type){case"space":continue;case"hr":e+=this.renderer.hr();continue;case"heading":e+=this.renderer.heading(this.parseInline(a.tokens),a.depth,z(this.parseInline(a.tokens,this.textRenderer)),this.slugger);continue;case"code":e+=this.renderer.code(a.text,a.lang,a.escaped);continue;case"table":for(c=0,n="",h="",g=a.header.length;c<g;c++)h+=this.renderer.tablecell(this.parseInline(a.header[c].tokens),{header:!0,align:a.align[c]});for(n+=this.renderer.tablerow(h),d="",g=a.rows.length,c=0;c<g;c++){for(i=0,m=a.rows[c],h="",q=m.length;i<q;i++)h+=this.renderer.tablecell(this.parseInline(m[i].tokens),{header:!1,align:a.align[i]});d+=this.renderer.tablerow(h)}e+=this.renderer.table(n,d);continue;case"blockquote":d=this.parse(a.tokens),e+=this.renderer.blockquote(d);continue;case"list":for(c=0,r=a.ordered,s=a.start,o=a.loose,g=a.items.length,d="";c<g;c++)p=(b=a.items[c]).checked,t=b.task,l="",b.task&&(j=this.renderer.checkbox(p),o?b.tokens.length>0&&"paragraph"===b.tokens[0].type?(b.tokens[0].text=j+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=j+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:j}):l+=j),l+=this.parse(b.tokens,o),d+=this.renderer.listitem(l,t,p);e+=this.renderer.list(d,r,s);continue;case"html":e+=this.renderer.html(a.text);continue;case"paragraph":e+=this.renderer.paragraph(this.parseInline(a.tokens));continue;case"text":for(d=a.tokens?this.parseInline(a.tokens):a.text;f+1<v&&"text"===k[f+1].type;)d+="\n"+((a=k[++f]).tokens?this.parseInline(a.tokens):a.text);e+=x?this.renderer.paragraph(d):d;continue;default:{const w='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(w);return}throw new Error(w)}}}return e}parseInline(e,b){b=b||this.renderer;let c="",d,a,f;const h=e.length;for(d=0;d<h;d++){if(a=e[d],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(!1!==(f=this.options.extensions.renderers[a.type].call({parser:this},a))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){c+=f||"";continue}switch(a.type){case"escape":c+=b.text(a.text);break;case"html":c+=b.html(a.text);break;case"link":c+=b.link(a.href,a.title,this.parseInline(a.tokens,b));break;case"image":c+=b.image(a.href,a.title,a.text);break;case"strong":c+=b.strong(this.parseInline(a.tokens,b));break;case"em":c+=b.em(this.parseInline(a.tokens,b));break;case"codespan":c+=b.codespan(a.text);break;case"br":c+=b.br();break;case"del":c+=b.del(this.parseInline(a.tokens,b));break;case"text":c+=b.text(a.text);break;default:{const g='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(g);return}throw new Error(g)}}}return c}}function d(b,a,c){if(null==b)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof b)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(b)+", string expected");if("function"==typeof a&&(c=a,a=null),L(a=e({},d.defaults,a||{})),c){const k=a.highlight;let f;try{f=g.lex(b,a)}catch(m){return c(m)}const i=function(b){let e;if(!b)try{a.walkTokens&&d.walkTokens(f,a.walkTokens),e=h.parse(f,a)}catch(g){b=g}return a.highlight=k,b?c(b):c(null,e)};if(!k||k.length<3)return i();if(delete a.highlight,!f.length)return i();let n=0;d.walkTokens(f,function(a){"code"===a.type&&(n++,setTimeout(()=>{k(a.text,a.lang,function(c,b){if(c)return i(c);null!=b&&b!==a.text&&(a.text=b,a.escaped=!0),0== --n&&i()})},0))}),0===n&&i()}try{const l=g.lex(b,a);return a.walkTokens&&d.walkTokens(l,a.walkTokens),h.parse(l,a)}catch(j){if(j.message+="\nPlease report this to https://github.com/markedjs/marked.",a.silent)return"<p>An error occurred:</p><pre>"+x(j.message+"",!0)+"</pre>";throw j}}d.options=d.setOptions=function(a){return e(d.defaults,a),l=d.defaults,d},d.getDefaults=i,d.defaults=l,d.use=function(...a){const b=e({},...a),c=d.defaults.extensions||{renderers:{},childTokens:{}};let f;a.forEach(a=>{if(a.extensions&&(f=!0,a.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const b=c.renderers?c.renderers[a.name]:null;b?c.renderers[a.name]=function(...d){let c=a.renderer.apply(this,d);return!1===c&&(c=b.apply(this,d)),c}:c.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||"block"!==a.level&&"inline"!==a.level)throw new Error("extension level must be 'block' or 'inline'");c[a.level]?c[a.level].unshift(a.tokenizer):c[a.level]=[a.tokenizer],a.start&&("block"===a.level?c.startBlock?c.startBlock.push(a.start):c.startBlock=[a.start]:"inline"===a.level&&(c.startInline?c.startInline.push(a.start):c.startInline=[a.start]))}a.childTokens&&(c.childTokens[a.name]=a.childTokens)})),a.renderer){const e=d.defaults.renderer||new n;for(const h in a.renderer){const j=e[h];e[h]=(...c)=>{let b=a.renderer[h].apply(e,c);return!1===b&&(b=j.apply(e,c)),b}}b.renderer=e}if(a.tokenizer){const g=d.defaults.tokenizer||new m;for(const i in a.tokenizer){const k=g[i];g[i]=(...c)=>{let b=a.tokenizer[i].apply(g,c);return!1===b&&(b=k.apply(g,c)),b}}b.tokenizer=g}if(a.walkTokens){const l=d.defaults.walkTokens;b.walkTokens=function(b){a.walkTokens.call(this,b),l&&l.call(this,b)}}f&&(b.extensions=c),d.setOptions(b)})},d.walkTokens=function(c,b){for(const a of c)switch(b.call(d,a),a.type){case"table":for(const e of a.header)d.walkTokens(e.tokens,b);for(const f of a.rows)for(const g of f)d.walkTokens(g.tokens,b);break;case"list":d.walkTokens(a.items,b);break;default:d.defaults.extensions&&d.defaults.extensions.childTokens&&d.defaults.extensions.childTokens[a.type]?d.defaults.extensions.childTokens[a.type].forEach(function(c){d.walkTokens(a[c],b)}):a.tokens&&d.walkTokens(a.tokens,b)}},d.parseInline=function(b,a){if(null==b)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof b)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(b)+", string expected");L(a=e({},d.defaults,a||{}));try{const f=g.lexInline(b,a);return a.walkTokens&&d.walkTokens(f,a.walkTokens),h.parseInline(f,a)}catch(c){if(c.message+="\nPlease report this to https://github.com/markedjs/marked.",a.silent)return"<p>An error occurred:</p><pre>"+x(c.message+"",!0)+"</pre>";throw c}},d.Parser=h,d.parser=h.parse,d.Renderer=n,d.TextRenderer=o,d.Lexer=g,d.lexer=g.lex,d.Tokenizer=m,d.Slugger=p,d.parse=d,d.options,d.setOptions,d.use,d.walkTokens,d.parseInline,h.parse,g.lex}}])