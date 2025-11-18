import{o as Sa,a as Da,i as ja,s as N,b as at,e as Me}from"./lifecycle.D2YPkQyf.js";import{af as Pa,ab as za,aT as $a,aU as Ia,i as Ra,u as Wa,aV as Na,aW as je,aX as Ya,q as qa,aY as mt,c as rt,f as J,a as Y,p as Oa,b as Ua,h as l,m as F,ax as O,g as t,d as dt,s as u,e as i,r,v as Xa,t as Tt,o as x}from"./utils.CaaAelin.js";import{a as Ha,s as K}from"./render.DKNCKkis.js";import{i as z}from"./if.Dk0v3zLh.js";import{e as Ka,i as Va}from"./each.f4PosS5J.js";import{b as Ae}from"./this.C7CDKOlt.js";import{I as f}from"./Icon.Cc-GPrOo.js";import{m as Mt}from"./config.DlXREuVv.js";import{I as Ga}from"./zh_TW.rzztBsv4.js";import{i as Ja}from"./translation.Cj5XXQDL.js";import"./props.DJcbsKkz.js";const Qa=()=>performance.now(),V={tick:c=>requestAnimationFrame(c),now:()=>Qa(),tasks:new Set};function Pe(){const c=V.now();V.tasks.forEach(n=>{n.c(c)||(V.tasks.delete(n),n.f())}),V.tasks.size!==0&&V.tick(Pe)}function Za(c){let n;return V.tasks.size===0&&V.tick(Pe),{promise:new Promise(_=>{V.tasks.add(n={c,f:_})}),abort(){V.tasks.delete(n)}}}function At(c,n){je(()=>{c.dispatchEvent(new CustomEvent(n))})}function tr(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(_=>_[0].toUpperCase()+_.slice(1)).join("")}function Se(c){const n={},_=c.split(";");for(const B of _){const[j,C]=B.split(":");if(!j||C===void 0)break;const m=tr(j.trim());n[m]=C.trim()}return n}const er=c=>c;function ar(c,n,_,B){var j=(c&Na)!==0,C="both",m,w=n.inert,A=n.style.overflow,b,g;function E(){return je(()=>m??=_()(n,B?.()??{},{direction:C}))}var S={is_global:j,in(){n.inert=w,At(n,"introstart"),b=Jt(n,E(),g,1,()=>{At(n,"introend"),b?.abort(),b=m=void 0,n.style.overflow=A})},out(L){n.inert=!0,At(n,"outrostart"),g=Jt(n,E(),b,0,()=>{At(n,"outroend"),L?.()})},stop:()=>{b?.abort(),g?.abort()}},R=Pa;if((R.transitions??=[]).push(S),Ha){var d=j;if(!d){for(var v=R.parent;v&&(v.f&za)!==0;)for(;(v=v.parent)&&(v.f&$a)===0;);d=!v||(v.f&Ia)!==0}d&&Ra(()=>{Wa(()=>S.in())})}}function Jt(c,n,_,B,j){var C=B===1;if(Ya(n)){var m,w=!1;return qa(()=>{if(!w){var L=n({direction:C?"in":"out"});m=Jt(c,L,_,B,j)}}),{abort:()=>{w=!0,m?.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(_?.deactivate(),!n?.duration)return j(),{abort:mt,deactivate:mt,reset:mt,t:()=>B};const{delay:A=0,css:b,tick:g,easing:E=er}=n;var S=[];if(C&&_===void 0&&(g&&g(0,1),b)){var R=Se(b(0,1));S.push(R,R)}var d=()=>1-B,v=c.animate(S,{duration:A,fill:"forwards"});return v.onfinish=()=>{v.cancel();var L=_?.t()??1-B;_?.abort();var T=B-L,X=n.duration*Math.abs(T),$=[];if(X>0){var h=!1;if(b)for(var k=Math.ceil(X/16.666666666666668),a=0;a<=k;a+=1){var G=L+T*E(a/k),Q=Se(b(G,1-G));$.push(Q),h||=Q.overflow==="hidden"}h&&(c.style.overflow="hidden"),d=()=>{var it=v.currentTime;return L+T*E(it/X)},g&&Za(()=>{if(v.playState!=="running")return!1;var it=d();return g(it,1-it),!0})}v=c.animate($,{duration:X,fill:"forwards"}),v.onfinish=()=>{d=()=>B,g?.(B,1-B),j()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=mt)},deactivate:()=>{j=mt},reset:()=>{B===0&&g?.(1,0)},t:()=>d()}}function De(c){return function(...n){var _=n[0];return _.stopPropagation(),c?.apply(this,n)}}function rr(c){const n=c-1;return n*n*n+1}function ir(c,{delay:n=0,duration:_=400,easing:B=rr,axis:j="y"}={}){const C=getComputedStyle(c),m=+C.opacity,w=j==="y"?"height":"width",A=parseFloat(C[w]),b=j==="y"?["top","bottom"]:["left","right"],g=b.map(T=>`${T[0].toUpperCase()}${T.slice(1)}`),E=parseFloat(C[`padding${g[0]}`]),S=parseFloat(C[`padding${g[1]}`]),R=parseFloat(C[`margin${g[0]}`]),d=parseFloat(C[`margin${g[1]}`]),v=parseFloat(C[`border${g[0]}Width`]),L=parseFloat(C[`border${g[1]}Width`]);return{delay:n,duration:_,easing:B,css:T=>`overflow: hidden;opacity: ${Math.min(T*20,1)*m};${w}: ${T*A}px;padding-${b[0]}: ${T*E}px;padding-${b[1]}: ${T*S}px;margin-${b[0]}: ${T*R}px;margin-${b[1]}: ${T*d}px;border-${b[0]}-width: ${T*v}px;border-${b[1]}-width: ${T*L}px;min-${w}: 0`}}var nr=dt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),sr=dt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),or=dt('<span class="text-sm text-[var(--content-meta)]"></span>'),lr=dt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),cr=dt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),ur=dt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function wr(c,n){Ua(n,!1);let _=Mt.meting_api,B=Mt.id,j=Mt.server,C=Mt.type,m=F(!1),w=F(!1),A=F(!1),b=F(!1),g=F(0),E=F(0),S=F(.7),R=F(!1),d=F(!1),v=F(!1),L=F(0),T=F(""),X=F(!1),$=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),h=F([]),k=F(0),a=F(),G=F(),Q=F();async function it(){l(d,!0);const s=_.replace(":server",j).replace(":type",C).replace(":id",B).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(s);if(!D.ok)throw new Error("meting api error");const H=await D.json();l(h,H.map(W=>{let vt=W.name??W.title??"未知歌曲",yt=W.artist??W.author??"未知艺术家",I=W.duration??0;return I>1e4&&(I=Math.floor(I/1e3)),(!Number.isFinite(I)||I<=0)&&(I=0),{id:W.id,title:vt,artist:yt,cover:W.pic??"",url:W.url??"",duration:I}})),t(h).length>0&&Zt(t(h)[0]),l(d,!1)}catch{Dt("Meting 歌单获取失败"),l(d,!1)}}function ze(){!t(a)||!t($).url||(t(m)?t(a).pause():t(a).play())}function bt(){l(w,!t(w)),t(w)&&(l(b,!1),l(A,!1))}function gt(){l(A,!t(A)),t(A)&&(l(w,!1),l(b,!1))}function Qt(){l(b,!t(b))}function $e(){l(v,!t(v))}function Ie(){l(L,(t(L)+1)%3)}function Re(){if(t(h).length<=1)return;const s=t(k)>0?t(k)-1:t(h).length-1;ht(s)}function St(){if(t(h).length<=1)return;let s;if(t(v))do s=Math.floor(Math.random()*t(h).length);while(s===t(k)&&t(h).length>1);else s=t(k)<t(h).length-1?t(k)+1:0;ht(s)}function ht(s){if(s<0||s>=t(h).length)return;const D=t(m);l(k,s),t(a)&&t(a).pause(),Zt(t(h)[t(k)]),(D||!t(m))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function xt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function Zt(s){!s||!t(a)||(l($,{...s}),s.url?(l(d,!0),t(a).pause(),O(a,t(a).currentTime=0),l(g,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",te),t(a).removeEventListener("error",ee),t(a).removeEventListener("loadstart",ae),t(a).addEventListener("loadeddata",te,{once:!0}),t(a).addEventListener("error",ee,{once:!0}),t(a).addEventListener("loadstart",ae,{once:!0}),O(a,t(a).src=xt(s.url)),t(a).load()):l(d,!1))}function te(){l(d,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(h)[t(k)]&&O(h,t(h)[t(k)].duration=t(E)),O($,t($).duration=t(E)))}function ee(s){l(d,!1),Dt(`无法播放 "${t($).title}"，正在尝试下一首...`),t(h).length>1?setTimeout(()=>St(),1e3):Dt("播放列表中没有可用的歌曲")}function ae(){}function Dt(s){l(T,s),l(X,!0),setTimeout(()=>{l(X,!1)},3e3)}function We(){l(X,!1)}function Ne(s){if(!t(a)||!t(G))return;const D=t(G).getBoundingClientRect(),W=(s.clientX-D.left)/D.width*t(E);O(a,t(a).currentTime=W),l(g,W)}function Ye(s){if(!t(a)||!t(Q))return;const D=t(Q).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-D.left)/D.width));l(S,H),O(a,t(a).volume=t(S)),l(R,t(S)===0)}function re(){t(a)&&(l(R,!t(R)),O(a,t(a).muted=t(R)))}function ie(s){if(!Number.isFinite(s)||s<0)return"0:00";const D=Math.floor(s/60),H=Math.floor(s%60);return`${D}:${H.toString().padStart(2,"0")}`}function qe(){t(a)&&(t(a).addEventListener("play",()=>{l(m,!0)}),t(a).addEventListener("pause",()=>{l(m,!1)}),t(a).addEventListener("timeupdate",()=>{l(g,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(L)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(L)===2||t(k)<t(h).length-1||t(v)?St():l(m,!1)}),t(a).addEventListener("error",s=>{l(d,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Sa(()=>{l(a,new Audio),O(a,t(a).volume=t(S)),qe(),it()}),Da(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),ja();var ne=rt(),Oe=J(ne);{var Ue=s=>{var D=ur(),H=J(D);{var W=e=>{var p=nr(),y=i(p),M=i(y);f(M,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=u(M,2),o=i(P,!0);r(P);var tt=u(P,2),Ct=i(tt);f(Ct,{icon:"material-symbols:close",class:"text-lg"}),r(tt),r(y),r(p),Tt(()=>K(o,t(T))),x("click",tt,We),Y(e,p)};z(H,e=>{t(X)&&e(W)})}var vt=u(H,2);let yt;var I=i(vt);let se;var Xe=i(I);{var He=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Ke=e=>{var p=rt(),y=J(p);{var M=o=>{var tt=sr();Y(o,tt)},P=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(y,o=>{t(m)?o(M):o(P,!1)},!0)}Y(e,p)};z(Xe,e=>{t(d)?e(He):e(Ke,!1)})}r(I);var nt=u(I,2);let oe;var le=i(nt),jt=i(le),Pt=i(jt);let ce;var ue=u(Pt,2),Ve=i(ue);{var Ge=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Je=e=>{var p=rt(),y=J(p);{var M=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(y,o=>{t(m)?o(M):o(P,!1)},!0)}Y(e,p)};z(Ve,e=>{t(d)?e(Ge):e(Je,!1)})}r(ue),r(jt);var zt=u(jt,2),$t=i(zt),Qe=i($t,!0);r($t);var de=u($t,2),Ze=i(de,!0);r(de),r(zt);var ve=u(zt,2),_t=i(ve),ta=i(_t);f(ta,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(_t);var It=u(_t,2),ea=i(It);f(ea,{icon:"material-symbols:expand-less",class:"text-lg"}),r(It),r(ve),r(le),r(nt);var wt=u(nt,2);let fe;var Rt=i(wt),Wt=i(Rt),pe=i(Wt);let me;r(Wt);var Nt=u(Wt,2),Yt=i(Nt),aa=i(Yt,!0);r(Yt);var qt=u(Yt,2),ra=i(qt,!0);r(qt);var be=u(qt,2),ia=i(be);r(be),r(Nt);var ge=u(Nt,2),kt=i(ge),na=i(kt);f(na,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(kt);var Ot=u(kt,2),sa=i(Ot);f(sa,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Ot),r(ge),r(Rt);var Ut=u(Rt,2),st=i(Ut),oa=i(st);r(st),Ae(st,e=>l(G,e),()=>t(G)),r(Ut);var Xt=u(Ut,2),ot=i(Xt);let he;var la=i(ot);f(la,{icon:"material-symbols:shuffle",class:"text-lg"}),r(ot);var ft=u(ot,2),ca=i(ft);f(ca,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(ft);var lt=u(ft,2);let xe;var ua=i(lt);{var da=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},va=e=>{var p=rt(),y=J(p);{var M=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(y,o=>{t(m)?o(M):o(P,!1)},!0)}Y(e,p)};z(ua,e=>{t(d)?e(da):e(va,!1)})}r(lt);var pt=u(lt,2),fa=i(pt);f(fa,{icon:"material-symbols:skip-next",class:"text-xl"}),r(pt);var Et=u(pt,2);let ye;var pa=i(Et);{var ma=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ba=e=>{var p=rt(),y=J(p);{var M=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(y,o=>{t(L)===2?o(M):o(P,!1)},!0)}Y(e,p)};z(pa,e=>{t(L)===1?e(ma):e(ba,!1)})}r(Et),r(Xt);var _e=u(Xt,2),Ft=i(_e),ga=i(Ft);{var ha=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},xa=e=>{var p=rt(),y=J(p);{var M=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(y,o=>{t(S)<.5?o(M):o(P,!1)},!0)}Y(e,p)};z(ga,e=>{t(R)||t(S)===0?e(ha):e(xa,!1)})}r(Ft);var Z=u(Ft,2),ya=i(Z);r(Z),Ae(Z,e=>l(Q,e),()=>t(Q));var Bt=u(Z,2);let we;var _a=i(Bt);f(_a,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Bt),r(_e),r(wt);var wa=u(wt,2);{var ka=e=>{var p=cr(),y=i(p),M=i(y),P=i(M,!0);r(M);var o=u(M,2),tt=i(o);f(tt,{icon:"material-symbols:close",class:"text-lg"}),r(o),r(y);var Ct=u(y,2);Ka(Ct,5,()=>t(h),Va,(Ht,ct,U)=>{var et=lr();let ke;var Kt=i(et),Ea=i(Kt);{var Fa=q=>{f(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ba=q=>{var Le=rt(),Ta=J(Le);{var Ma=ut=>{f(ut,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Aa=ut=>{var Te=or();Te.textContent=U+1,Y(ut,Te)};z(Ta,ut=>{U===t(k)?ut(Ma):ut(Aa,!1)},!0)}Y(q,Le)};z(Ea,q=>{U===t(k)&&t(m)?q(Fa):q(Ba,!1)})}r(Kt);var Vt=u(Kt,2),Ee=i(Vt);r(Vt);var Fe=u(Vt,2),Lt=i(Fe);let Be;var Ca=i(Lt,!0);r(Lt);var Gt=u(Lt,2);let Ce;var La=i(Gt,!0);r(Gt),r(Fe),r(et),Tt(q=>{ke=N(et,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,ke,{"bg-[var(--btn-plain-bg)]":U===t(k),"text-[var(--primary)]":U===t(k)}),at(et,"aria-label",`播放 ${t(ct).title??""} - ${t(ct).artist??""}`),at(Ee,"src",q),at(Ee,"alt",t(ct).title),Be=N(Lt,1,"font-medium truncate",null,Be,{"text-[var(--primary)]":U===t(k),"text-90":U!==t(k)}),K(Ca,t(ct).title),Ce=N(Gt,1,"text-sm text-[var(--content-meta)] truncate",null,Ce,{"text-[var(--primary)]":U===t(k)}),K(La,t(ct).artist)},[()=>xt(t(ct).cover)]),x("click",et,()=>ht(U)),x("keydown",et,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),ht(U))}),Y(Ht,et)}),r(Ct),r(p),Tt(Ht=>K(P,Ht),[()=>Ja(Ga.playlist)]),x("click",o,Qt),ar(3,p,()=>ir,()=>({duration:300,axis:"y"})),Y(e,p)};z(wa,e=>{t(b)&&e(ka)})}r(vt),Xa(2),Tt((e,p,y,M)=>{yt=N(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,yt,{expanded:t(w),"hidden-mode":t(A)}),se=N(I,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,se,{"opacity-0":!t(A),"scale-0":!t(A),"pointer-events-none":!t(A)}),oe=N(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,{"opacity-0":t(w)||t(A),"scale-95":t(w)||t(A),"pointer-events-none":t(w)||t(A)}),at(Pt,"src",e),ce=N(Pt,1,"w-full h-full object-cover transition-transform duration-300",null,ce,{spinning:t(m)&&!t(d),"animate-pulse":t(d)}),K(Qe,t($).title),K(Ze,t($).artist),fe=N(wt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,{"opacity-0":!t(w),"scale-95":!t(w),"pointer-events-none":!t(w)}),at(pe,"src",p),me=N(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,{spinning:t(m)&&!t(d),"animate-pulse":t(d)}),K(aa,t($).title),K(ra,t($).artist),K(ia,`${y??""} / ${M??""}`),at(st,"aria-valuenow",t(E)>0?t(g)/t(E)*100:0),Me(oa,`width: ${t(E)>0?t(g)/t(E)*100:0}%`),he=N(ot,1,"w-10 h-10 rounded-lg",null,he,{"btn-regular":t(v),"btn-plain":!t(v)}),ot.disabled=t(h).length<=1,ft.disabled=t(h).length<=1,xe=N(lt,1,"btn-regular w-12 h-12 rounded-full",null,xe,{"opacity-50":t(d)}),lt.disabled=t(d),pt.disabled=t(h).length<=1,ye=N(Et,1,"w-10 h-10 rounded-lg",null,ye,{"btn-regular":t(L)>0,"btn-plain":t(L)===0}),at(Z,"aria-valuenow",t(S)*100),Me(ya,`width: ${t(S)*100}%`),we=N(Bt,1,"btn-plain w-8 h-8 rounded-lg",null,we,{"text-[var(--primary)]":t(b)})},[()=>xt(t($).cover),()=>xt(t($).cover),()=>ie(t(g)),()=>ie(t(E))]),x("click",I,gt),x("keydown",I,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),x("click",_t,De(gt)),x("click",It,De(bt)),x("click",nt,bt),x("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),bt())}),x("click",kt,gt),x("click",Ot,bt),x("click",st,Ne),x("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(G).getBoundingClientRect();const y=.5*t(E);t(a)&&(O(a,t(a).currentTime=y),l(g,y))}}),x("click",ot,$e),x("click",ft,Re),x("click",lt,ze),x("click",pt,St),x("click",Et,Ie),x("click",Ft,re),x("click",Z,Ye),x("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&re())}),x("click",Bt,Qt),Y(s,D)};z(Oe,s=>{s(Ue)})}Y(c,ne),Oa()}export{wr as default};
