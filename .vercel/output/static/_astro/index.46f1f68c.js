function or(r){var e,t,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=or(r[e]))&&(o&&(o+=" "),o+=t);else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function nr(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=or(r))&&(o&&(o+=" "),o+=e);return o}function cr(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=ir(e))&&(o&&(o+=" "),o+=t);return o}function ir(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=ir(r[o]))&&(t&&(t+=" "),t+=e);return t}var B="-";function ur(r){var e=pr(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,s=o===void 0?{}:o;function a(n){var u=n.split(B);return u[0]===""&&u.length!==1&&u.shift(),ar(u,e)||fr(n)}function i(n,u){var d=t[n]||[];return u&&s[n]?[].concat(d,s[n]):d}return{getClassGroupId:a,getConflictingClassGroupIds:i}}function ar(r,e){if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),s=o?ar(r.slice(1),o):void 0;if(s)return s;if(e.validators.length!==0){var a=r.join(B);return e.validators.find(function(i){var n=i.validator;return n(a)})?.classGroupId}}var _=/^\[(.+)\]$/;function fr(r){if(_.test(r)){var e=_.exec(r)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function pr(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},s=gr(Object.entries(r.classGroups),t);return s.forEach(function(a){var i=a[0],n=a[1];U(n,o,i,e)}),o}function U(r,e,t,o){r.forEach(function(s){if(typeof s=="string"){var a=s===""?e:D(e,s);a.classGroupId=t;return}if(typeof s=="function"){if(br(s)){U(s(o),e,t,o);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(function(i){var n=i[0],u=i[1];U(u,D(e,n),t,o)})})}function D(r,e){var t=r;return e.split(B).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function br(r){return r.isThemeGetter}function gr(r,e){return e?r.map(function(t){var o=t[0],s=t[1],a=s.map(function(i){return typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(n){var u=n[0],d=n[1];return[e+u,d]})):i});return[o,a]}):r}function vr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function s(a,i){t.set(a,i),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(i){var n=t.get(i);if(n!==void 0)return n;if((n=o.get(i))!==void 0)return s(i,n),n},set:function(i,n){t.has(i)?t.set(i,n):s(i,n)}}}var sr="!";function mr(r){var e=r.separator||":",t=e.length===1,o=e[0],s=e.length;return function(i){for(var n=[],u=0,d=0,f,c=0;c<i.length;c++){var g=i[c];if(u===0){if(g===o&&(t||i.slice(c,c+s)===e)){n.push(i.slice(d,c)),d=c+s;continue}if(g==="/"){f=c;continue}}g==="["?u++:g==="]"&&u--}var h=n.length===0?i:i.substring(d),y=h.startsWith(sr),v=y?h.substring(1):h,m=f&&f>d?f-d:void 0;return{modifiers:n,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:m}}}function hr(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var s=o[0]==="[";s?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function yr(r){return{cache:vr(r.cacheSize),splitModifiers:mr(r),...ur(r)}}var xr=/\s+/;function wr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,s=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(xr).map(function(i){var n=t(i),u=n.modifiers,d=n.hasImportantModifier,f=n.baseClassName,c=n.maybePostfixModifierPosition,g=o(c?f.substring(0,c):f),h=!!c;if(!g){if(!c)return{isTailwindClass:!1,originalClassName:i};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:i};h=!1}var y=hr(u).join(":"),v=d?y+sr:y;return{isTailwindClass:!0,modifierId:v,classGroupId:g,originalClassName:i,hasPostfixModifier:h}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var n=i.modifierId,u=i.classGroupId,d=i.hasPostfixModifier,f=n+u;return a.has(f)?!1:(a.add(f),s(u,d).forEach(function(c){return a.add(n+c)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function Cr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,s,a,i=n;function n(d){var f=e[0],c=e.slice(1),g=c.reduce(function(h,y){return y(h)},f());return o=yr(g),s=o.cache.get,a=o.cache.set,i=u,u(d)}function u(d){var f=s(d);if(f)return f;var c=wr(d,o);return a(d,c),c}return function(){return i(cr.apply(null,arguments))}}function p(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var lr=/^\[(?:([a-z-]+):)?(.+)\]$/i,kr=/^\d+\/\d+$/,Ar=new Set(["px","full","screen"]),Mr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Gr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function w(r){return M(r)||Ar.has(r)||kr.test(r)||$(r)}function $(r){return z(r,"length",Tr)}function Sr(r){return z(r,"size",dr)}function Ir(r){return z(r,"position",dr)}function Pr(r){return z(r,"url",jr)}function j(r){return z(r,"number",M)}function M(r){return!Number.isNaN(Number(r))}function Rr(r){return r.endsWith("%")&&M(r.slice(0,-1))}function I(r){return rr(r)||z(r,"number",rr)}function l(r){return lr.test(r)}function P(){return!0}function A(r){return Mr.test(r)}function Nr(r){return z(r,"",Er)}function z(r,e,t){var o=lr.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function Tr(r){return zr.test(r)}function dr(){return!1}function jr(r){return r.startsWith("url(")}function rr(r){return Number.isInteger(Number(r))}function Er(r){return Gr.test(r)}function Wr(){var r=p("colors"),e=p("spacing"),t=p("blur"),o=p("brightness"),s=p("borderColor"),a=p("borderRadius"),i=p("borderSpacing"),n=p("borderWidth"),u=p("contrast"),d=p("grayscale"),f=p("hueRotate"),c=p("invert"),g=p("gap"),h=p("gradientColorStops"),y=p("gradientColorStopPositions"),v=p("inset"),m=p("margin"),k=p("opacity"),C=p("padding"),F=p("saturate"),E=p("scale"),q=p("sepia"),Z=p("skew"),J=p("space"),K=p("translate"),W=function(){return["auto","contain","none"]},O=function(){return["auto","hidden","clip","visible","scroll"]},V=function(){return["auto",l,e]},b=function(){return[l,e]},X=function(){return["",w]},R=function(){return["auto",M,l]},H=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},N=function(){return["solid","dashed","dotted","double","none"]},Q=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},L=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",l]},Y=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},S=function(){return[M,j]},T=function(){return[M,l]};return{cacheSize:500,theme:{colors:[P],spacing:[w],blur:["none","",A,l],brightness:S(),borderColor:[r],borderRadius:["none","","full",A,l],borderSpacing:b(),borderWidth:X(),contrast:S(),grayscale:G(),hueRotate:T(),invert:G(),gap:b(),gradientColorStops:[r],gradientColorStopPositions:[Rr,$],inset:V(),margin:V(),opacity:S(),padding:b(),saturate:S(),scale:S(),sepia:G(),skew:T(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[A]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(H(),[l])}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",I]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",I]},l]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[I]},l]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(L())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(L(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(L(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",l,e]}],"min-w":[{"min-w":["min","max","fit",l,w]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[A]},A,l]}],h:[{h:[l,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",l,w]}],"max-h":[{"max-h":[l,e,"min","max","fit"]}],"font-size":[{text:["base",A,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",j]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",M,j]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",l,w]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(N(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",w]}],"underline-offset":[{"underline-offset":["auto",l,w]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(H(),[Ir])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Sr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Pr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[n]}],"border-w-x":[{"border-x":[n]}],"border-w-y":[{"border-y":[n]}],"border-w-s":[{"border-s":[n]}],"border-w-e":[{"border-e":[n]}],"border-w-t":[{"border-t":[n]}],"border-w-r":[{"border-r":[n]}],"border-w-b":[{"border-b":[n]}],"border-w-l":[{"border-l":[n]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[].concat(N(),["hidden"])}],"divide-x":[{"divide-x":[n]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[n]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:N()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(N())}],"outline-offset":[{"outline-offset":[l,w]}],"outline-w":[{outline:[w]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[w]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",A,Nr]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":Q()}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",A,l]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[c]}],saturate:[{saturate:[F]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[F]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[I,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[w,j]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Or=Cr(Wr);function Vr(...r){return Or(nr(r))}const er=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,tr=nr,Lr=(r,e)=>t=>{var o;if(e?.variants==null)return tr(r,t?.class,t?.className);const{variants:s,defaultVariants:a}=e,i=Object.keys(s).map(d=>{const f=t?.[d],c=a?.[d];if(f===null)return null;const g=er(f)||er(c);return s[d][g]}),n=t&&Object.entries(t).reduce((d,f)=>{let[c,g]=f;return g===void 0||(d[c]=g),d},{}),u=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((d,f)=>{let{class:c,className:g,...h}=f;return Object.entries(h).every(y=>{let[v,m]=y;return Array.isArray(m)?m.includes({...a,...n}[v]):{...a,...n}[v]===m})?[...d,c,g]:d},[]);return tr(r,i,u,t?.class,t?.className)};export{Lr as a,Vr as c};
