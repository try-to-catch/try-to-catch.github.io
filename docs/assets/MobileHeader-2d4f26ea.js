import{_ as i,o as _,c as p,a as e,r as x,b as o,w as n,e as l,m as r,f as h,k as g,n as v,v as b,T as w,p as y,q as $}from"./index-c05384aa.js";const k="/assets/logo-9e211931.png",C="/assets/hamburger_icon-1a0f0eb6.png",S="/assets/ico-search-dde4e571.svg",M={name:"SearchBox"},N=e("input",{class:"self-center outline-none bg-inherit search",placeholder:"Search",role:"searchbox",type:"text"},null,-1),B=e("div",{class:"w-[18px] h-[18px]"},[e("img",{alt:"search",class:"w-[50px]",src:S})],-1),I=[N,B];function j(t,s,a,d,u,m){return _(),p("div",null,I)}const H=i(M,[["render",j]]),P={name:"NavigationLinks"};function T(t,s,a,d,u,m){const c=x("router-link");return _(),p("ul",null,[e("li",null,[o(c,{to:{name:"home"},class:"text-custom-gray-900"},{default:n(()=>[l("Products")]),_:1})]),e("li",null,[e("a",{onClick:s[0]||(s[0]=r(()=>{},["prevent"])),class:"text-custom-gray-900",href:"#"},"Company Profile")]),e("li",null,[o(c,{to:{name:"products.index"},class:"text-custom-gray-900"},{default:n(()=>[l("Products")]),_:1},8,["to"])]),e("li",null,[e("a",{onClick:s[1]||(s[1]=r(()=>{},["prevent"])),class:"text-custom-gray-900",href:"#"},"Services")]),e("li",null,[e("a",{onClick:s[2]||(s[2]=r(()=>{},["prevent"])),class:"text-custom-gray-900",href:"#"},"R & D")]),e("li",null,[o(c,{to:{name:"contactUs"},class:"text-custom-gray-900"},{default:n(()=>[l("Contact")]),_:1})])])}const V=i(P,[["render",T]]),f=t=>(y("data-v-5c360445"),t=t(),$(),t),D={class:"xl:hidden drop-shadow-md"},L=f(()=>e("div",{class:"w-[100px]"},[e("img",{alt:"logo",src:k})],-1)),q=f(()=>e("img",{src:C,alt:"hamburger_icon"},null,-1)),z=[q],E={class:"flex flex-col-reverse justify-between px-2.5 absolute top-[90px] right-0 left-0 bg-white pb-[22px]"},O=h({__name:"MobileHeader",setup(t){const s=g(!1),a=()=>{s.value=!s.value};return(d,u)=>(_(),p("header",D,[e("div",{class:"flex justify-between px-2.5 z-10 relative bg-white py-5"},[L,e("div",{onClick:a,class:"w-10 cursor-pointer"},z)]),o(w,{name:"menu"},{default:n(()=>[v(e("div",E,[o(H,{class:"w-full h-[30px] flex justify-between border-b border-custom-gray-900 items-center self-end"}),o(V,{class:"flex flex-col items-center w-full font-serif font-medium pt-4 pb-2.5"})],512),[[b,s.value]])]),_:1})]))}});const U=i(O,[["__scopeId","data-v-5c360445"]]);export{U as M,V as N,H as S,k as _};
