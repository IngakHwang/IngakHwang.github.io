import{l as Pe,d as ze,h as me,m as He,c as oe,g as Le,Q as fe,R as Qe}from"./QBtn.c0695fbd.js";import{c as Ve,u as Me,Q as Ee,g as Ne,f as je,i as de}from"./scroll.f5a05990.js";import{r as C,c as z,h as _,g as ne,v as we,S as W,n as We,w as J,b as Xe,x as Ke,U as Ce,y as $e,z as Ae,a as Re,o as Te,l as ye,e as X,d as Se,f as De,D as Ue,V as Ye,_ as Ge,G as Je,I as _e,J as xe,K as L,W as K,X as Ze,L as I,A as ke,M as el,Y as ll,Z as tl,$ as al,a0 as ol}from"./index.d0d6a434.js";function nl(e,o){const l=C(null),a=z(()=>e.disable===!0?null:_("span",{ref:l,class:"no-outline",tabindex:-1}));function d(t){const w=o.value;t!==void 0&&t.type.indexOf("key")===0?w!==null&&document.activeElement!==w&&w.contains(document.activeElement)===!0&&w.focus():l.value!==null&&(t===void 0||w!==null&&w.contains(t.target)===!0)&&l.value.focus()}return{refocusTargetEl:a,refocusTarget:d}}const rl={name:String};function sl(e={}){return(o,l,a)=>{o[l](_("input",{class:"hidden"+(a||""),...e.value}))}}var il={xs:30,sm:35,md:40,lg:50,xl:60};const cl={...Me,...He,...rl,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ul=["update:modelValue"];function fl(e,o){const{props:l,slots:a,emit:d,proxy:t}=ne(),{$q:w}=t,q=Ve(l,w),k=C(null),{refocusTargetEl:f,refocusTarget:r}=nl(l,k),x=Pe(l,il),y=z(()=>l.val!==void 0&&Array.isArray(l.modelValue)),b=z(()=>{const S=W(l.val);return y.value===!0?l.modelValue.findIndex(B=>W(B)===S):-1}),V=z(()=>y.value===!0?b.value>-1:W(l.modelValue)===W(l.trueValue)),E=z(()=>y.value===!0?b.value===-1:W(l.modelValue)===W(l.falseValue)),A=z(()=>V.value===!1&&E.value===!1),n=z(()=>l.disable===!0?-1:l.tabindex||0),u=z(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(q.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),h=z(()=>{const S=V.value===!0?"truthy":E.value===!0?"falsy":"indet",B=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?V.value===!0:E.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${B}`}),c=z(()=>{const S={type:"checkbox"};return l.name!==void 0&&Object.assign(S,{"^checked":V.value===!0?"checked":void 0,name:l.name,value:y.value===!0?l.val:l.trueValue}),S}),R=sl(c),Q=z(()=>{const S={tabindex:n.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":A.value===!0?"mixed":V.value===!0?"true":"false"};return l.disable===!0&&(S["aria-disabled"]="true"),S});function P(S){S!==void 0&&(we(S),r(S)),l.disable!==!0&&d("update:modelValue",U(),S)}function U(){if(y.value===!0){if(V.value===!0){const S=l.modelValue.slice();return S.splice(b.value,1),S}return l.modelValue.concat([l.val])}if(V.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(E.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function Z(S){(S.keyCode===13||S.keyCode===32)&&we(S)}function N(S){(S.keyCode===13||S.keyCode===32)&&P(S)}const re=o(V,A);return Object.assign(t,{toggle:P}),()=>{const S=re();l.disable!==!0&&R(S,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const B=[_("div",{class:h.value,style:x.value,"aria-hidden":"true"},S)];f.value!==null&&B.push(f.value);const Y=l.label!==void 0?ze(a.default,[l.label]):me(a.default);return Y!==void 0&&B.push(_("div",{class:`q-${e}__label q-anchor--skip`},Y)),_("div",{ref:k,class:u.value,...Q.value,onClick:P,onKeydown:Z,onKeyup:N},B)}}const dl=_("div",{key:"svg",class:"q-checkbox__bg absolute"},[_("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[_("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),_("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var vl=oe({name:"QCheckbox",props:cl,emits:ul,setup(e){function o(l,a){const d=z(()=>(l.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>d.value!==null?[_("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[_(Le,{class:"q-checkbox__icon",name:d.value})])]:[dl]}return fl("checkbox",o)}});const Sl=["horizontal","vertical","cell","none"];var ml=oe({name:"QMarkupTable",props:{...Me,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Sl.includes(e)}},setup(e,{slots:o}){const l=ne(),a=Ve(e,l.proxy.$q),d=z(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(a.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>_("div",{class:d.value},[_("table",{class:"q-table"},me(o.default))])}});function hl(e,o){return _("div",e,[_("table",{class:"q-table"},o)])}let ae=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(o),e.scrollLeft=-1e3,ae=e.scrollLeft>=0,e.remove()}const O=1e3,gl=["start","center","end","start-force","center-force","end-force"],Be=Array.prototype.filter,pl=window.getComputedStyle(document.body).overflowAnchor===void 0?We:function(e,o){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const l=e.children||[];Be.call(l,d=>d.dataset&&d.dataset.qVsAnchor!==void 0).forEach(d=>{delete d.dataset.qVsAnchor});const a=l[o];a&&a.dataset&&(a.dataset.qVsAnchor="")}))};function D(e,o){return e+o}function ve(e,o,l,a,d,t,w,q){const k=e===window?document.scrollingElement||document.documentElement:e,f=d===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-w-q,scrollMaxSize:0,offsetStart:-w,offsetEnd:-q};if(d===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=k.scrollLeft,r.scrollViewSize+=k.clientWidth),r.scrollMaxSize=k.scrollWidth,t===!0&&(r.scrollStart=(ae===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=k.scrollTop,r.scrollViewSize+=k.clientHeight),r.scrollMaxSize=k.scrollHeight),l!==null)for(let x=l.previousElementSibling;x!==null;x=x.previousElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=x[f]);if(a!==null)for(let x=a.nextElementSibling;x!==null;x=x.nextElementSibling)x.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=x[f]);if(o!==e){const x=k.getBoundingClientRect(),y=o.getBoundingClientRect();d===!0?(r.offsetStart+=y.left-x.left,r.offsetEnd-=y.width):(r.offsetStart+=y.top-x.top,r.offsetEnd-=y.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function qe(e,o,l,a){o==="end"&&(o=(e===window?document.body:e)[l===!0?"scrollWidth":"scrollHeight"]),e===window?l===!0?(a===!0&&(o=(ae===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-o),window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o):l===!0?(a===!0&&(o=(ae===!0?e.scrollWidth-e.offsetWidth:0)-o),e.scrollLeft=o):e.scrollTop=o}function G(e,o,l,a){if(l>=a)return 0;const d=o.length,t=Math.floor(l/O),w=Math.floor((a-1)/O)+1;let q=e.slice(t,w).reduce(D,0);return l%O!==0&&(q-=o.slice(t*O,l).reduce(D,0)),a%O!==0&&a!==d&&(q-=o.slice(a,w*O).reduce(D,0)),q}const bl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},wl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bl};function yl({virtualScrollLength:e,getVirtualScrollTarget:o,getVirtualScrollEl:l,virtualScrollItemSizeComputed:a}){const d=ne(),{props:t,emit:w,proxy:q}=d,{$q:k}=q;let f,r,x,y=[],b;const V=C(0),E=C(0),A=C({}),n=C(null),u=C(null),h=C(null),c=C({from:0,to:0}),R=z(()=>t.tableColspan!==void 0?t.tableColspan:100);a===void 0&&(a=z(()=>t.virtualScrollItemSize));const Q=z(()=>a.value+";"+t.virtualScrollHorizontal),P=z(()=>Q.value+";"+t.virtualScrollSliceRatioBefore+";"+t.virtualScrollSliceRatioAfter);J(P,()=>{j()}),J(Q,U);function U(){se(r,!0)}function Z(s){se(s===void 0?r:s)}function N(s,i){const v=o();if(v==null||v.nodeType===8)return;const M=ve(v,l(),n.value,u.value,t.virtualScrollHorizontal,k.lang.rtl,t.virtualScrollStickySizeStart,t.virtualScrollStickySizeEnd);x!==M.scrollViewSize&&j(M.scrollViewSize),S(v,M,Math.min(e.value-1,Math.max(0,parseInt(s,10)||0)),0,gl.indexOf(i)>-1?i:r>-1&&s>r?"end":"start")}function re(){const s=o();if(s==null||s.nodeType===8)return;const i=ve(s,l(),n.value,u.value,t.virtualScrollHorizontal,k.lang.rtl,t.virtualScrollStickySizeStart,t.virtualScrollStickySizeEnd),v=e.value-1,M=i.scrollMaxSize-i.offsetStart-i.offsetEnd-E.value;if(f===i.scrollStart)return;if(i.scrollMaxSize<=0){S(s,i,0,0);return}x!==i.scrollViewSize&&j(i.scrollViewSize),B(c.value.from);const $=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(b[v],i.scrollViewSize/2));if($>0&&Math.ceil(i.scrollStart)>=$){S(s,i,v,i.scrollMaxSize-i.offsetEnd-y.reduce(D,0));return}let p=0,g=i.scrollStart-i.offsetStart,T=g;if(g<=M&&g+i.scrollViewSize>=V.value)g-=V.value,p=c.value.from,T=g;else for(let m=0;g>=y[m]&&p<v;m++)g-=y[m],p+=O;for(;g>0&&p<v;)g-=b[p],g>-i.scrollViewSize?(p++,T=g):T=b[p]+g;S(s,i,p,T)}function S(s,i,v,M,$){const p=typeof $=="string"&&$.indexOf("-force")>-1,g=p===!0?$.replace("-force",""):$,T=g!==void 0?g:"start";let m=Math.max(0,v-A.value[T]),F=m+A.value.total;F>e.value&&(F=e.value,m=Math.max(0,F-A.value.total)),f=i.scrollStart;const ee=m!==c.value.from||F!==c.value.to;if(ee===!1&&g===void 0){he(v);return}const{activeElement:pe}=document,H=h.value;ee===!0&&H!==null&&H!==pe&&H.contains(pe)===!0&&(H.addEventListener("focusout",Y),setTimeout(()=>{H!==null&&H.removeEventListener("focusout",Y)})),pl(H,v-m);const Fe=g!==void 0?b.slice(m,v).reduce(D,0):0;if(ee===!0){const le=F>=c.value.from&&m<=c.value.to?c.value.to:F;c.value={from:m,to:le},V.value=G(y,b,0,m),E.value=G(y,b,F,e.value),requestAnimationFrame(()=>{c.value.to!==F&&f===i.scrollStart&&(c.value={from:c.value.from,to:F},E.value=G(y,b,F,e.value))})}requestAnimationFrame(()=>{if(f!==i.scrollStart)return;ee===!0&&B(m);const le=b.slice(m,v).reduce(D,0),te=le+i.offsetStart+V.value,be=te+b[v];let ce=te+M;if(g!==void 0){const Ie=le-Fe,ue=i.scrollStart+Ie;ce=p!==!0&&ue<te&&be<ue+i.scrollViewSize?ue:g==="end"?be-i.scrollViewSize:te-(g==="start"?0:Math.round((i.scrollViewSize-b[v])/2))}f=ce,qe(s,ce,t.virtualScrollHorizontal,k.lang.rtl),he(v)})}function B(s){const i=h.value;if(i){const v=Be.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),M=v.length,$=t.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let p=s,g,T;for(let m=0;m<M;){for(g=$(v[m]),m++;m<M&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=$(v[m]),m++;T=g-b[p],T!==0&&(b[p]+=T,y[Math.floor(p/O)]+=T),p++}}}function Y(){h.value!==null&&h.value!==void 0&&h.value.focus()}function se(s,i){const v=1*a.value;(i===!0||Array.isArray(b)===!1)&&(b=[]);const M=b.length;b.length=e.value;for(let p=e.value-1;p>=M;p--)b[p]=v;const $=Math.floor((e.value-1)/O);y=[];for(let p=0;p<=$;p++){let g=0;const T=Math.min((p+1)*O,e.value);for(let m=p*O;m<T;m++)g+=b[m];y.push(g)}r=-1,f=void 0,V.value=G(y,b,0,c.value.from),E.value=G(y,b,c.value.to,e.value),s>=0?(B(c.value.from),Xe(()=>{N(s)})):ie()}function j(s){if(s===void 0&&typeof window!="undefined"){const g=o();g!=null&&g.nodeType!==8&&(s=ve(g,l(),n.value,u.value,t.virtualScrollHorizontal,k.lang.rtl,t.virtualScrollStickySizeStart,t.virtualScrollStickySizeEnd).scrollViewSize)}x=s;const i=parseFloat(t.virtualScrollSliceRatioBefore)||0,v=parseFloat(t.virtualScrollSliceRatioAfter)||0,M=1+i+v,$=s===void 0||s<=0?1:Math.ceil(s/a.value),p=Math.max(1,$,Math.ceil((t.virtualScrollSliceSize>0?t.virtualScrollSliceSize:10)/M));A.value={total:Math.ceil(p*M),start:Math.ceil(p*i),center:Math.ceil(p*(.5+i)),end:Math.ceil(p*(1+i)),view:$}}function Oe(s,i){const v=t.virtualScrollHorizontal===!0?"width":"height",M={["--q-virtual-scroll-item-"+v]:a.value+"px"};return[s==="tbody"?_(s,{class:"q-virtual-scroll__padding",key:"before",ref:n},[_("tr",[_("td",{style:{[v]:`${V.value}px`,...M},colspan:R.value})])]):_(s,{class:"q-virtual-scroll__padding",key:"before",ref:n,style:{[v]:`${V.value}px`,...M}}),_(s,{class:"q-virtual-scroll__content",key:"content",ref:h,tabindex:-1},i.flat()),s==="tbody"?_(s,{class:"q-virtual-scroll__padding",key:"after",ref:u},[_("tr",[_("td",{style:{[v]:`${E.value}px`,...M},colspan:R.value})])]):_(s,{class:"q-virtual-scroll__padding",key:"after",ref:u,style:{[v]:`${E.value}px`,...M}})]}function he(s){r!==s&&(t.onVirtualScroll!==void 0&&w("virtualScroll",{index:s,from:c.value.from,to:c.value.to-1,direction:s<r?"decrease":"increase",ref:q}),r=s)}j();const ie=Ke(re,k.platform.is.ios===!0?120:35);Ce(()=>{j()});let ge=!1;return $e(()=>{ge=!0}),Ae(()=>{if(ge!==!0)return;const s=o();f!==void 0&&s!==void 0&&s!==null&&s.nodeType!==8?qe(s,f,t.virtualScrollHorizontal,k.lang.rtl):N(r)}),Re(()=>{ie.cancel()}),Object.assign(q,{scrollTo:N,reset:U,refresh:Z}),{virtualScrollSliceRange:c,virtualScrollSliceSizeComputed:A,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:se,padVirtualScroll:Oe,scrollTo:N,reset:U,refresh:Z}}const _l={list:Ee,table:ml},xl=["list","table","__qtable"];var kl=oe({name:"QVirtualScroll",props:{...wl,type:{type:String,default:"list",validator:e=>xl.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:o,attrs:l}){let a;const d=C(null),t=z(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:w,localResetVirtualScroll:q,padVirtualScroll:k,onVirtualScrollEvt:f}=yl({virtualScrollLength:t,getVirtualScrollTarget:V,getVirtualScrollEl:b}),r=z(()=>{if(t.value===0)return[];const u=(h,c)=>({index:w.value.from+c,item:h});return e.itemsFn===void 0?e.items.slice(w.value.from,w.value.to).map(u):e.itemsFn(w.value.from,w.value.to-w.value.from).map(u)}),x=z(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),y=z(()=>e.scrollTarget!==void 0?{}:{tabindex:0});J(t,()=>{q()}),J(()=>e.scrollTarget,()=>{A(),E()});function b(){return d.value.$el||d.value}function V(){return a}function E(){a=Ne(b(),e.scrollTarget),a.addEventListener("scroll",f,ye.passive)}function A(){a!==void 0&&(a.removeEventListener("scroll",f,ye.passive),a=void 0)}function n(){let u=k(e.type==="list"?"div":"tbody",r.value.map(o.default));return o.before!==void 0&&(u=o.before().concat(u)),ze(o.after,u)}return Ce(()=>{q()}),Te(()=>{E()}),Ae(()=>{E()}),$e(()=>{A()}),Re(()=>{A()}),()=>{if(o.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?hl({ref:d,class:"q-table__middle "+x.value},n()):_(_l[e.type],{...l,ref:d,class:[l.class,x.value],...y.value},n)}}}),ql=oe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:l}}=ne(),a=Se(De,X);if(a===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(Se(Ue,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const t=z(()=>{const q=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const k=a.isContainer.value===!0?a.containerHeight.value:l.screen.height;return e.styleFn(q,k)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-q+"px":l.screen.height===0?q!==0?`calc(100vh - ${q}px)`:"100vh":l.screen.height-q+"px"}}),w=z(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>_("main",{class:w.value,style:t.value},me(o.default))}});function zl(){return Se(Ye)}const Vl=e=>(al("data-v-cd60712c"),e=e(),ol(),e),Ml={class:"q-pa-md row"},El={class:"q-pa-md row"},Cl={class:"column items-center"},$l=Vl(()=>K("div",{class:"rouletter-arrow"},null,-1)),Al=["width","height"],Rl=Je({name:"HavingLunchPage"}),Tl=Object.assign(Rl,{setup(e){Te(()=>{const n=zl();console.log(`\uD654\uBA74 \uC138\uB85C : ${n.screen.height}`),console.log(`\uD654\uBA74 \uAC00\uB85C : ${n.screen.width}`),console.log(`\uBAA8\uBC14\uC77C\uD3F0  : ${n.platform.is.mobile}`),n.platform.is.mobile&&(o.value=350,l.value=350,a.value=350),d.value=document.getElementById("canvas"),t.value=d.value.getContext("2d"),k()});const o=C(600),l=C(600),a=C(600),d=C(),t=C(),w=["#dc3545","#fd7e14","#ffc107","#198754","#0d6efd","#6610f2","#6f42c1","#3f297e","#87207b","#e7167b"];function q(){if(f.value.length==0){alert("\uC120\uD0DD\uB41C \uC74C\uC2DD\uC810\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");return}d.value.style.transform="initial",d.value.style.transition="initial",setTimeout(()=>{const n=Math.floor(Math.random()*f.value.length),u=360/f.value.length,h=parseInt(f.value.length/2),c=u*(n+1)+u/2*(h-1)+3600;d.value.style.transform=`rotate(-${c}deg)`,d.value.style.transition="2s",setTimeout(()=>alert(`\uC624\uB298 \uC810\uC2EC\uC740 ${f.value[n]} \uAC00\uC2DC\uC8E0`),2e3)},1)}function k(){const[n,u]=[l.value/2,a.value/2],h=Math.PI/(f.value.length/2);if(console.log(`# newMake - cw : ${n}`),console.log(`# newMake - ch : ${u}`),f.value.length==0){t.value.beginPath(),t.value.moveTo(n,u),t.value.arc(n,u,n,0,2*Math.PI),t.value.fillStyle="#fff",t.value.fill(),t.value.closePath();return}for(let c=0;c<f.value.length;c++)t.value.beginPath(),t.value.fillStyle=w[c%10],c==f.value.length-1&&(t.value.fillStyle="#26A69A"),t.value.moveTo(n,u),t.value.arc(n,u,n,h*(c-1),h*c),console.log(`
######## newMake - arc ########`),console.log(`# newMake - ${n}`),console.log(`# newMake - ${u}`),console.log(`# newMake - ${h*(c-1)}`),console.log(`# newMake - ${h*(c*1)}`),t.value.fill(),t.value.closePath();t.value.fillStyle="#fff",t.value.font="18px Pretendard",t.value.textAlign="center";for(let c=0;c<f.value.length;c++){const R=h*c+h/2;t.value.save(),t.value.translate(n+Math.cos(R)*(n-50),u+Math.sin(R)*(u-50)),t.value.rotate(R+Math.PI/2),f.value[c].split(" ").forEach((Q,P)=>{t.value.fillText(Q,0,30*P)}),t.value.restore()}}const f=C(["\uD314\uB2F9\uBC18\uC810","\uC6B0\uC721\uBA74\uAC00","\uC21C\uB300\uC2E4\uB85D","\uB3D9\uB0A8\uC9D1","\uBC84\uAC70\uD0B9","\uB099\uC9C0\uC218\uC81C\uBE44"]),r=C([{name:"\uD314\uB2F9\uBC18\uC810",isShow:!1,isSeleted:!0},{name:"\uC6B0\uC721\uBA74\uAC00",isShow:!1,isSeleted:!0},{name:"\uC21C\uB300\uC2E4\uB85D",isShow:!1,isSeleted:!0},{name:"\uB3D9\uB0A8\uC9D1",isShow:!1,isSeleted:!0},{name:"\uBC84\uAC70\uD0B9",isShow:!1,isSeleted:!0},{name:"\uB099\uC9C0\uC218\uC81C\uBE44",isShow:!1,isSeleted:!0},{name:"\uB2E4\uBCF5\uC9D1",isShow:!1,isSeleted:!1},{name:"\uC11C\uBE0C\uC6E8\uC774",isShow:!1,isSeleted:!1},{name:"\uC0C1\uC0C1\uB3C8\uAE4C\uC2A4",isShow:!1,isSeleted:!1},{name:"\uB3C4\uC2DC\uD574\uC7A5\uAD6D",isShow:!1,isSeleted:!1},{name:"\uD558\uB3D9\uAD00",isShow:!1,isSeleted:!1},{name:"\uC5EC\uBC31 \uC9C4\uC8FC\uC9D1",isShow:!1,isSeleted:!1},{name:"\uC5EC\uC758\uB098\uB8E8 \uBD80\uB300\uCC0C\uAC1C",isShow:!1,isSeleted:!1},{name:"\uD3C9\uC591\uB0C9\uBA74",isShow:!1,isSeleted:!1},{name:"\uC5EC\uBC31 \uC124\uB801\uD0D5",isShow:!1,isSeleted:!1},{name:"KFC",isShow:!1,isSeleted:!1},{name:"\uC6B0\uC9C1\uD654",isShow:!1,isSeleted:!1},{name:"\uB354\uB36E",isShow:!1,isSeleted:!1},{name:"\uB9C8\uB77C\uD0D5",isShow:!1,isSeleted:!1},{name:"\uC721\uB300\uC7A5",isShow:!1,isSeleted:!1},{name:"\uD0DC\uC601\uBE4C\uB529 \uC2DD\uB2F9",isShow:!1,isSeleted:!1}]);function x(n){n.isShow=!0}function y(n){n.isShow=!1}function b(){let n=!1,u=prompt("\uCD94\uAC00\uD560 \uC2DD\uB2F9\uBA85\uC744 \uAE30\uC7AC\uD574\uC8FC\uC138\uC694");!u||(r.value.forEach(h=>{h.name===u&&(alert("\uB3D9\uC77C\uD55C \uC2DD\uB2F9\uC774 \uC788\uC2B5\uB2C8\uB2E4."),n=!0)}),n==!1&&V(u))}function V(n){const u={name:n,isShow:!1,isSeleted:!1};r.value.push(u)}function E(n){const u=r.value.splice(n,1);f.value.forEach(h=>{if(h==u[0].name){const c=f.value.indexOf(u[0].name);f.value.splice(c,1)}})}function A(n){if(n.isSeleted===!0&&f.value.indexOf(n.name)===-1)f.value.push(n.name);else{let u=f.value.indexOf(n.name);u>-1&&(f.value.splice(u,1),u=f.value.indexOf(n.name))}}return J(f,()=>{k()},{deep:!0}),(n,u)=>(_e(),xe(ql,{class:"q-pa-md row flex-center"},{default:L(()=>[K("div",Ml,[K("div",{style:Ze({minWidth:o.value+"px"})},[I(Ee,{bordered:"",separator:""},{default:L(()=>[I(kl,{style:{"max-height":"600px"},items:r.value,separator:""},{default:L(({item:h,index:c})=>[ke((_e(),xe(je,{tag:"label",clickable:"",key:c,onMouseover:R=>x(h),onMouseleave:R=>y(h)},{default:L(()=>[I(de,{avatar:""},{default:L(()=>[I(vl,{onClick:R=>A(h),value:h.name,id:c,modelValue:h.isSeleted,"onUpdate:modelValue":R=>h.isSeleted=R},null,8,["onClick","value","id","modelValue","onUpdate:modelValue"])]),_:2},1024),I(de,{class:"font"},{default:L(()=>[el(ll(h.name),1)]),_:2},1024),I(de,{side:""},{default:L(()=>[ke(I(fe,{color:"red",onClick:R=>E(c),label:"X"},null,8,["onClick"]),[[tl,h.isShow]])]),_:2},1024)]),_:2},1032,["onMouseover","onMouseleave"])),[[Qe]])]),_:1},8,["items"])]),_:1}),I(fe,{class:"full-width q-ma-md",color:"primary",onClick:b,label:"+",size:"xl"})],4)]),K("div",El,[K("div",Cl,[$l,K("canvas",{class:"justify-center",width:l.value,height:a.value,id:"canvas"},null,8,Al),I(fe,{class:"q-ma-md",color:"primary",onClick:q,label:"RUN",size:"lg"})])])]),_:1}))}});var Il=Ge(Tl,[["__scopeId","data-v-cd60712c"]]);export{Il as default};
