import{l as Ce,d as be,h as re,m as Ae,c as D,g as Te}from"./QBtn.e258c4ce.js";import{c as ye,u as xe,Q as Re,g as we,d as Oe}from"./QPageContainer.078a0eb7.js";import{r as A,c as p,h as y,g as I,v as ge,a0 as N,n as Be,w as P,b as Fe,x as He,S as qe,y as ke,z as ze,a as fe,o as Pe,l as he,e as F,d as le,f as Ve,T as Qe,R as Le,a1 as Ne}from"./index.6831f82a.js";function je(e,l){const t=A(null),o=p(()=>e.disable===!0?null:y("span",{ref:t,class:"no-outline",tabindex:-1}));function s(r){const v=l.value;r!==void 0&&r.type.indexOf("key")===0?v!==null&&document.activeElement!==v&&v.contains(document.activeElement)===!0&&v.focus():t.value!==null&&(r===void 0||v!==null&&v.contains(r.target)===!0)&&t.value.focus()}return{refocusTargetEl:o,refocusTarget:s}}const Ie={name:String};function We(e={}){return(l,t,o)=>{l[t](y("input",{class:"hidden"+(o||""),...e.value}))}}var Ke={xs:30,sm:35,md:40,lg:50,xl:60};const Xe={...xe,...Ae,...Ie,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ye=["update:modelValue"];function De(e,l){const{props:t,slots:o,emit:s,proxy:r}=I(),{$q:v}=r,g=ye(t,v),x=A(null),{refocusTargetEl:k,refocusTarget:a}=je(t,x),c=Ce(t,Ke),f=p(()=>t.val!==void 0&&Array.isArray(t.modelValue)),u=p(()=>{const S=N(t.val);return f.value===!0?t.modelValue.findIndex(T=>N(T)===S):-1}),q=p(()=>f.value===!0?u.value>-1:N(t.modelValue)===N(t.trueValue)),w=p(()=>f.value===!0?u.value===-1:N(t.modelValue)===N(t.falseValue)),_=p(()=>q.value===!1&&w.value===!1),C=p(()=>t.disable===!0?-1:t.tabindex||0),E=p(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(g.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),O=p(()=>{const S=q.value===!0?"truthy":w.value===!0?"falsy":"indet",T=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?q.value===!0:w.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${T}`}),z=p(()=>{const S={type:"checkbox"};return t.name!==void 0&&Object.assign(S,{"^checked":q.value===!0?"checked":void 0,name:t.name,value:f.value===!0?t.val:t.trueValue}),S}),U=We(z),G=p(()=>{const S={tabindex:C.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":_.value===!0?"mixed":q.value===!0?"true":"false"};return t.disable===!0&&(S["aria-disabled"]="true"),S});function W(S){S!==void 0&&(ge(S),a(S)),t.disable!==!0&&s("update:modelValue",K(),S)}function K(){if(f.value===!0){if(q.value===!0){const S=t.modelValue.slice();return S.splice(u.value,1),S}return t.modelValue.concat([t.val])}if(q.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(w.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function J(S){(S.keyCode===13||S.keyCode===32)&&ge(S)}function Q(S){(S.keyCode===13||S.keyCode===32)&&W(S)}const ae=l(q,_);return Object.assign(r,{toggle:W}),()=>{const S=ae();t.disable!==!0&&U(S,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const T=[y("div",{class:O.value,style:c.value,"aria-hidden":"true"},S)];k.value!==null&&T.push(k.value);const X=t.label!==void 0?be(o.default,[t.label]):re(o.default);return X!==void 0&&T.push(y("div",{class:`q-${e}__label q-anchor--skip`},X)),y("div",{ref:x,class:E.value,...G.value,onClick:W,onKeydown:J,onKeyup:Q},T)}}const Ue=y("div",{key:"svg",class:"q-checkbox__bg absolute"},[y("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[y("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),y("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var dt=D({name:"QCheckbox",props:Xe,emits:Ye,setup(e){function l(t,o){const s=p(()=>(t.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>s.value!==null?[y("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[y(Te,{class:"q-checkbox__icon",name:s.value})])]:[Ue]}return De("checkbox",l)}});const Ge=["horizontal","vertical","cell","none"];var Je=D({name:"QMarkupTable",props:{...xe,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ge.includes(e)}},setup(e,{slots:l}){const t=I(),o=ye(e,t.proxy.$q),s=p(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(o.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>y("div",{class:s.value},[y("table",{class:"q-table"},re(l.default))])}});function Ze(e,l){return y("div",e,[y("table",{class:"q-table"},l)])}let oe=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const l=document.createElement("div");Object.assign(l.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(l),e.scrollLeft=-1e3,oe=e.scrollLeft>=0,e.remove()}const R=1e3,et=["start","center","end","start-force","center-force","end-force"],_e=Array.prototype.filter,tt=window.getComputedStyle(document.body).overflowAnchor===void 0?Be:function(e,l){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const t=e.children||[];_e.call(t,s=>s.dataset&&s.dataset.qVsAnchor!==void 0).forEach(s=>{delete s.dataset.qVsAnchor});const o=t[l];o&&o.dataset&&(o.dataset.qVsAnchor="")}))};function j(e,l){return e+l}function ue(e,l,t,o,s,r,v,g){const x=e===window?document.scrollingElement||document.documentElement:e,k=s===!0?"offsetWidth":"offsetHeight",a={scrollStart:0,scrollViewSize:-v-g,scrollMaxSize:0,offsetStart:-v,offsetEnd:-g};if(s===!0?(e===window?(a.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,a.scrollViewSize+=document.documentElement.clientWidth):(a.scrollStart=x.scrollLeft,a.scrollViewSize+=x.clientWidth),a.scrollMaxSize=x.scrollWidth,r===!0&&(a.scrollStart=(oe===!0?a.scrollMaxSize-a.scrollViewSize:0)-a.scrollStart)):(e===window?(a.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,a.scrollViewSize+=document.documentElement.clientHeight):(a.scrollStart=x.scrollTop,a.scrollViewSize+=x.clientHeight),a.scrollMaxSize=x.scrollHeight),t!==null)for(let c=t.previousElementSibling;c!==null;c=c.previousElementSibling)c.classList.contains("q-virtual-scroll--skip")===!1&&(a.offsetStart+=c[k]);if(o!==null)for(let c=o.nextElementSibling;c!==null;c=c.nextElementSibling)c.classList.contains("q-virtual-scroll--skip")===!1&&(a.offsetEnd+=c[k]);if(l!==e){const c=x.getBoundingClientRect(),f=l.getBoundingClientRect();s===!0?(a.offsetStart+=f.left-c.left,a.offsetEnd-=f.width):(a.offsetStart+=f.top-c.top,a.offsetEnd-=f.height),e!==window&&(a.offsetStart+=a.scrollStart),a.offsetEnd+=a.scrollMaxSize-a.offsetStart}return a}function pe(e,l,t,o){l==="end"&&(l=(e===window?document.body:e)[t===!0?"scrollWidth":"scrollHeight"]),e===window?t===!0?(o===!0&&(l=(oe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-l),window.scrollTo(l,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,l):t===!0?(o===!0&&(l=(oe===!0?e.scrollWidth-e.offsetWidth:0)-l),e.scrollLeft=l):e.scrollTop=l}function Y(e,l,t,o){if(t>=o)return 0;const s=l.length,r=Math.floor(t/R),v=Math.floor((o-1)/R)+1;let g=e.slice(r,v).reduce(j,0);return t%R!==0&&(g-=l.slice(r*R,t).reduce(j,0)),o%R!==0&&o!==s&&(g-=l.slice(o,v*R).reduce(j,0)),g}const lt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ot={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...lt};function rt({virtualScrollLength:e,getVirtualScrollTarget:l,getVirtualScrollEl:t,virtualScrollItemSizeComputed:o}){const s=I(),{props:r,emit:v,proxy:g}=s,{$q:x}=g;let k,a,c,f=[],u;const q=A(0),w=A(0),_=A({}),C=A(null),E=A(null),O=A(null),z=A({from:0,to:0}),U=p(()=>r.tableColspan!==void 0?r.tableColspan:100);o===void 0&&(o=p(()=>r.virtualScrollItemSize));const G=p(()=>o.value+";"+r.virtualScrollHorizontal),W=p(()=>G.value+";"+r.virtualScrollSliceRatioBefore+";"+r.virtualScrollSliceRatioAfter);P(W,()=>{L()}),P(G,K);function K(){ne(a,!0)}function J(n){ne(n===void 0?a:n)}function Q(n,i){const d=l();if(d==null||d.nodeType===8)return;const V=ue(d,t(),C.value,E.value,r.virtualScrollHorizontal,x.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd);c!==V.scrollViewSize&&L(V.scrollViewSize),S(d,V,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,et.indexOf(i)>-1?i:a>-1&&n>a?"end":"start")}function ae(){const n=l();if(n==null||n.nodeType===8)return;const i=ue(n,t(),C.value,E.value,r.virtualScrollHorizontal,x.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd),d=e.value-1,V=i.scrollMaxSize-i.offsetStart-i.offsetEnd-w.value;if(k===i.scrollStart)return;if(i.scrollMaxSize<=0){S(n,i,0,0);return}c!==i.scrollViewSize&&L(i.scrollViewSize),T(z.value.from);const $=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(u[d],i.scrollViewSize/2));if($>0&&Math.ceil(i.scrollStart)>=$){S(n,i,d,i.scrollMaxSize-i.offsetEnd-f.reduce(j,0));return}let b=0,h=i.scrollStart-i.offsetStart,M=h;if(h<=V&&h+i.scrollViewSize>=q.value)h-=q.value,b=z.value.from,M=h;else for(let m=0;h>=f[m]&&b<d;m++)h-=f[m],b+=R;for(;h>0&&b<d;)h-=u[b],h>-i.scrollViewSize?(b++,M=h):M=u[b]+h;S(n,i,b,M)}function S(n,i,d,V,$){const b=typeof $=="string"&&$.indexOf("-force")>-1,h=b===!0?$.replace("-force",""):$,M=h!==void 0?h:"start";let m=Math.max(0,d-_.value[M]),B=m+_.value.total;B>e.value&&(B=e.value,m=Math.max(0,B-_.value.total)),k=i.scrollStart;const Z=m!==z.value.from||B!==z.value.to;if(Z===!1&&h===void 0){de(d);return}const{activeElement:Se}=document,H=O.value;Z===!0&&H!==null&&H!==Se&&H.contains(Se)===!0&&(H.addEventListener("focusout",X),setTimeout(()=>{H!==null&&H.removeEventListener("focusout",X)})),tt(H,d-m);const Ee=h!==void 0?u.slice(m,d).reduce(j,0):0;if(Z===!0){const ee=B>=z.value.from&&m<=z.value.to?z.value.to:B;z.value={from:m,to:ee},q.value=Y(f,u,0,m),w.value=Y(f,u,B,e.value),requestAnimationFrame(()=>{z.value.to!==B&&k===i.scrollStart&&(z.value={from:z.value.from,to:B},w.value=Y(f,u,B,e.value))})}requestAnimationFrame(()=>{if(k!==i.scrollStart)return;Z===!0&&T(m);const ee=u.slice(m,d).reduce(j,0),te=ee+i.offsetStart+q.value,me=te+u[d];let se=te+V;if(h!==void 0){const Me=ee-Ee,ce=i.scrollStart+Me;se=b!==!0&&ce<te&&me<ce+i.scrollViewSize?ce:h==="end"?me-i.scrollViewSize:te-(h==="start"?0:Math.round((i.scrollViewSize-u[d])/2))}k=se,pe(n,se,r.virtualScrollHorizontal,x.lang.rtl),de(d)})}function T(n){const i=O.value;if(i){const d=_e.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),V=d.length,$=r.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let b=n,h,M;for(let m=0;m<V;){for(h=$(d[m]),m++;m<V&&d[m].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=$(d[m]),m++;M=h-u[b],M!==0&&(u[b]+=M,f[Math.floor(b/R)]+=M),b++}}}function X(){O.value!==null&&O.value!==void 0&&O.value.focus()}function ne(n,i){const d=1*o.value;(i===!0||Array.isArray(u)===!1)&&(u=[]);const V=u.length;u.length=e.value;for(let b=e.value-1;b>=V;b--)u[b]=d;const $=Math.floor((e.value-1)/R);f=[];for(let b=0;b<=$;b++){let h=0;const M=Math.min((b+1)*R,e.value);for(let m=b*R;m<M;m++)h+=u[m];f.push(h)}a=-1,k=void 0,q.value=Y(f,u,0,z.value.from),w.value=Y(f,u,z.value.to,e.value),n>=0?(T(z.value.from),Fe(()=>{Q(n)})):ie()}function L(n){if(n===void 0&&typeof window!="undefined"){const h=l();h!=null&&h.nodeType!==8&&(n=ue(h,t(),C.value,E.value,r.virtualScrollHorizontal,x.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd).scrollViewSize)}c=n;const i=parseFloat(r.virtualScrollSliceRatioBefore)||0,d=parseFloat(r.virtualScrollSliceRatioAfter)||0,V=1+i+d,$=n===void 0||n<=0?1:Math.ceil(n/o.value),b=Math.max(1,$,Math.ceil((r.virtualScrollSliceSize>0?r.virtualScrollSliceSize:10)/V));_.value={total:Math.ceil(b*V),start:Math.ceil(b*i),center:Math.ceil(b*(.5+i)),end:Math.ceil(b*(1+i)),view:$}}function $e(n,i){const d=r.virtualScrollHorizontal===!0?"width":"height",V={["--q-virtual-scroll-item-"+d]:o.value+"px"};return[n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"before",ref:C},[y("tr",[y("td",{style:{[d]:`${q.value}px`,...V},colspan:U.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"before",ref:C,style:{[d]:`${q.value}px`,...V}}),y(n,{class:"q-virtual-scroll__content",key:"content",ref:O,tabindex:-1},i.flat()),n==="tbody"?y(n,{class:"q-virtual-scroll__padding",key:"after",ref:E},[y("tr",[y("td",{style:{[d]:`${w.value}px`,...V},colspan:U.value})])]):y(n,{class:"q-virtual-scroll__padding",key:"after",ref:E,style:{[d]:`${w.value}px`,...V}})]}function de(n){a!==n&&(r.onVirtualScroll!==void 0&&v("virtualScroll",{index:n,from:z.value.from,to:z.value.to-1,direction:n<a?"decrease":"increase",ref:g}),a=n)}L();const ie=He(ae,x.platform.is.ios===!0?120:35);qe(()=>{L()});let ve=!1;return ke(()=>{ve=!0}),ze(()=>{if(ve!==!0)return;const n=l();k!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?pe(n,k,r.virtualScrollHorizontal,x.lang.rtl):Q(a)}),fe(()=>{ie.cancel()}),Object.assign(g,{scrollTo:Q,reset:K,refresh:J}),{virtualScrollSliceRange:z,virtualScrollSliceSizeComputed:_,setVirtualScrollSize:L,onVirtualScrollEvt:ie,localResetVirtualScroll:ne,padVirtualScroll:$e,scrollTo:Q,reset:K,refresh:J}}const at={list:Re,table:Je},nt=["list","table","__qtable"];var vt=D({name:"QVirtualScroll",props:{...ot,type:{type:String,default:"list",validator:e=>nt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:t}){let o;const s=A(null),r=p(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:v,localResetVirtualScroll:g,padVirtualScroll:x,onVirtualScrollEvt:k}=rt({virtualScrollLength:r,getVirtualScrollTarget:q,getVirtualScrollEl:u}),a=p(()=>{if(r.value===0)return[];const E=(O,z)=>({index:v.value.from+z,item:O});return e.itemsFn===void 0?e.items.slice(v.value.from,v.value.to).map(E):e.itemsFn(v.value.from,v.value.to-v.value.from).map(E)}),c=p(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),f=p(()=>e.scrollTarget!==void 0?{}:{tabindex:0});P(r,()=>{g()}),P(()=>e.scrollTarget,()=>{_(),w()});function u(){return s.value.$el||s.value}function q(){return o}function w(){o=we(u(),e.scrollTarget),o.addEventListener("scroll",k,he.passive)}function _(){o!==void 0&&(o.removeEventListener("scroll",k,he.passive),o=void 0)}function C(){let E=x(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(E=l.before().concat(E)),be(l.after,E)}return qe(()=>{g()}),Pe(()=>{w()}),ze(()=>{w()}),ke(()=>{_()}),fe(()=>{_()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ze({ref:s,class:"q-table__middle "+c.value},C()):y(at[e.type],{...t,ref:s,class:[t.class,c.value],...f.value},C)}}});const it={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function st(){const{props:e,proxy:{$q:l}}=I(),t=le(Ve,F);if(t===F)return console.error("QPageSticky needs to be child of QLayout"),F;const o=p(()=>{const c=e.position;return{top:c.indexOf("top")>-1,right:c.indexOf("right")>-1,bottom:c.indexOf("bottom")>-1,left:c.indexOf("left")>-1,vertical:c==="top"||c==="bottom",horizontal:c==="left"||c==="right"}}),s=p(()=>t.header.offset),r=p(()=>t.right.offset),v=p(()=>t.footer.offset),g=p(()=>t.left.offset),x=p(()=>{let c=0,f=0;const u=o.value,q=l.lang.rtl===!0?-1:1;u.top===!0&&s.value!==0?f=`${s.value}px`:u.bottom===!0&&v.value!==0&&(f=`${-v.value}px`),u.left===!0&&g.value!==0?c=`${q*g.value}px`:u.right===!0&&r.value!==0&&(c=`${-q*r.value}px`);const w={transform:`translate(${c}, ${f})`};return e.offset&&(w.margin=`${e.offset[1]}px ${e.offset[0]}px`),u.vertical===!0?(g.value!==0&&(w[l.lang.rtl===!0?"right":"left"]=`${g.value}px`),r.value!==0&&(w[l.lang.rtl===!0?"left":"right"]=`${r.value}px`)):u.horizontal===!0&&(s.value!==0&&(w.top=`${s.value}px`),v.value!==0&&(w.bottom=`${v.value}px`)),w}),k=p(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function a(c){const f=re(c.default);return y("div",{class:k.value,style:x.value},e.expand===!0?f:[y("div",f)])}return{$layout:t,getStickyContent:a}}var St=D({name:"QPageScroller",props:{...it,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(e,{slots:l,emit:t}){const{proxy:{$q:o}}=I(),{$layout:s,getStickyContent:r}=st(),v=A(null);let g;const x=p(()=>s.height.value-(s.isContainer.value===!0?s.containerHeight.value:o.screen.height));function k(){return e.reverse===!0?x.value-s.scroll.value.position>e.scrollOffset:s.scroll.value.position>e.scrollOffset}const a=A(k());function c(){const _=k();a.value!==_&&(a.value=_)}function f(){e.reverse===!0?g===void 0&&(g=P(x,c)):u()}P(s.scroll,c),P(()=>e.reverse,f);function u(){g!==void 0&&(g(),g=void 0)}function q(_){const C=we(s.isContainer.value===!0?v.value:s.rootRef.value);Oe(C,e.reverse===!0?s.height.value:0,e.duration),t("click",_)}function w(){return a.value===!0?y("div",{ref:v,class:"q-page-scroller",onClick:q},r(l)):null}return f(),fe(u),()=>y(Qe,{name:"q-transition--fade"},w)}}),mt=D({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:t}}=I(),o=le(Ve,F);if(o===F)return console.error("QPage needs to be a deep child of QLayout"),F;if(le(Le,F)===F)return console.error("QPage needs to be child of QPageContainer"),F;const r=p(()=>{const g=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const x=o.isContainer.value===!0?o.containerHeight.value:t.screen.height;return e.styleFn(g,x)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-g+"px":t.screen.height===0?g!==0?`calc(100vh - ${g}px)`:"100vh":t.screen.height-g+"px"}}),v=p(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:v.value,style:r.value},re(l.default))}});function gt(){return le(Ne)}export{vt as Q,dt as a,St as b,mt as c,gt as u};
