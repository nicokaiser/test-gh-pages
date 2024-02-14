import{s as B,n as k,d as j,u as z,g as R,e as G}from"../chunks/scheduler.Bmg8oFKD.js";import{S as A,i as V,e as b,c as x,g as D,a,b as w,d as u,s as H,m as N,f as $,j as L,k as g,z as J,A as K,B as E,C as M,v as O,w as q,x as F,p as T,n as C,y as S}from"../chunks/index.BiAefCSX.js";function P(r){let e,t='<nav class="grid grid-flow-col gap-4">Copyright</nav>';return{c(){e=b("footer"),e.innerHTML=t,this.h()},l(l){e=x(l,"FOOTER",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1ycg7lv"&&(e.innerHTML=t),this.h()},h(){a(e,"class","footer footer-center p-10 opacity-60")},m(l,s){w(l,e,s)},p:k,i:k,o:k,d(l){l&&u(e)}}}class Q extends A{constructor(e){super(),V(this,e,null,P,B,{})}}function W(r){let e,t;return{c(){e=E("svg"),t=E("path"),this.h()},l(l){e=M(l,"svg",{class:!0,"data-slot":!0,fill:!0,viewBox:!0,xmlns:!0,"aria-hidden":!0});var s=$(e);t=M(s,"path",{"clip-rule":!0,"fill-rule":!0,d:!0}),$(t).forEach(u),s.forEach(u),this.h()},h(){a(t,"clip-rule","evenodd"),a(t,"fill-rule","evenodd"),a(t,"d","M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"),a(e,"class","h-6 w-6"),a(e,"data-slot","icon"),a(e,"fill","currentColor"),a(e,"viewBox","0 0 24 24"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"aria-hidden","true")},m(l,s){w(l,e,s),g(e,t)},d(l){l&&u(e)}}}function X(r){let e,t;return{c(){e=E("svg"),t=E("path"),this.h()},l(l){e=M(l,"svg",{class:!0,"data-slot":!0,fill:!0,viewBox:!0,xmlns:!0,"aria-hidden":!0});var s=$(e);t=M(s,"path",{"clip-rule":!0,"fill-rule":!0,d:!0}),$(t).forEach(u),s.forEach(u),this.h()},h(){a(t,"clip-rule","evenodd"),a(t,"fill-rule","evenodd"),a(t,"d","M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"),a(e,"class","h-6 w-6"),a(e,"data-slot","icon"),a(e,"fill","currentColor"),a(e,"viewBox","0 0 24 24"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"aria-hidden","true")},m(l,s){w(l,e,s),g(e,t)},d(l){l&&u(e)}}}function U(r){let e,t='<li><a class="block py-2 hover:text-base-content aria-[current=true]:text-base-content" href="/">Home</a></li>';return{c(){e=b("ul"),e.innerHTML=t,this.h()},l(l){e=x(l,"UL",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-dcxksm"&&(e.innerHTML=t),this.h()},h(){a(e,"class","mb-16 mt-8 text-center text-lg font-semibold text-base-content/60 mx-auto max-w-screen-md select-none")},m(l,s){w(l,e,s)},d(l){l&&u(e)}}}function Y(r){let e,t,l='<a class="btn btn-ghost text-xl" href="/">Home</a>',s,h,i,m,_,o,n;function d(c,v){return c[0]?W:X}let y=d(r),p=y(r),f=r[0]&&U();return{c(){e=b("nav"),t=b("div"),t.innerHTML=l,s=H(),h=b("div"),i=b("button"),p.c(),m=H(),f&&f.c(),_=N(),this.h()},l(c){e=x(c,"NAV",{class:!0});var v=$(e);t=x(v,"DIV",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-kvu9sy"&&(t.innerHTML=l),s=L(v),h=x(v,"DIV",{class:!0});var I=$(h);i=x(I,"BUTTON",{class:!0,type:!0,title:!0});var Z=$(i);p.l(Z),Z.forEach(u),I.forEach(u),v.forEach(u),m=L(c),f&&f.l(c),_=N(),this.h()},h(){a(t,"class","flex-1"),a(i,"class","btn btn-square btn-ghost"),a(i,"type","button"),a(i,"title","Menu"),a(h,"class","flex-none"),a(e,"class","navbar")},m(c,v){w(c,e,v),g(e,t),g(e,s),g(e,h),g(h,i),p.m(i,null),w(c,m,v),f&&f.m(c,v),w(c,_,v),o||(n=J(i,"click",K(r[1])),o=!0)},p(c,[v]){y!==(y=d(c))&&(p.d(1),p=y(c),p&&(p.c(),p.m(i,null))),c[0]?f||(f=U(),f.c(),f.m(_.parentNode,_)):f&&(f.d(1),f=null)},i:k,o:k,d(c){c&&(u(e),u(m),u(_)),p.d(),f&&f.d(c),o=!1,n()}}}function ee(r,e,t){let l=!1;return[l,()=>t(0,l=!l)]}class te extends A{constructor(e){super(),V(this,e,ee,Y,B,{})}}function le(r){let e,t,l,s,h,i,m;t=new te({});const _=r[1].default,o=j(_,r,r[0],null);return i=new Q({}),{c(){e=b("div"),O(t.$$.fragment),l=H(),s=b("div"),o&&o.c(),h=H(),O(i.$$.fragment),this.h()},l(n){e=x(n,"DIV",{class:!0});var d=$(e);q(t.$$.fragment,d),l=L(d),s=x(d,"DIV",{class:!0});var y=$(s);o&&o.l(y),y.forEach(u),h=L(d),q(i.$$.fragment,d),d.forEach(u),this.h()},h(){a(s,"class","flex-1"),a(e,"class","flex min-h-screen flex-col")},m(n,d){w(n,e,d),F(t,e,null),g(e,l),g(e,s),o&&o.m(s,null),g(e,h),F(i,e,null),m=!0},p(n,[d]){o&&o.p&&(!m||d&1)&&z(o,_,n,n[0],m?G(_,n[0],d,null):R(n[0]),null)},i(n){m||(T(t.$$.fragment,n),T(o,n),T(i.$$.fragment,n),m=!0)},o(n){C(t.$$.fragment,n),C(o,n),C(i.$$.fragment,n),m=!1},d(n){n&&u(e),S(t),o&&o.d(n),S(i)}}}function se(r,e,t){let{$$slots:l={},$$scope:s}=e;return r.$$set=h=>{"$$scope"in h&&t(0,s=h.$$scope)},[s,l]}class re extends A{constructor(e){super(),V(this,e,se,le,B,{})}}export{re as component};
