import w from"./DrVHvBkk.js";import k from"./Dn_MQVIw.js";import v from"./DJrEtE97.js";import{u as I}from"./CY8mxkSL.js";import{d as g,Y as A,I as S,M as c,b as a,c as r,e as o,g as i,F as B,Z as C,j as e,w as u,p as b,i as L,s as N,$ as V,X as F,l as P}from"./Qr578CVW.js";import"./BcWussCh.js";const T=t=>(b("data-v-eba26087"),t=t(),L(),t),Y={key:0,class:"articles-list"},Z={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>I(_.path,async()=>await N(V(_.path)).sort({date:-1}).find(),"$QKZ6BwmNRx")),s=await s,l(),s),n=S(()=>m.value||[]);return(E,K)=>{var d;const p=w,h=k,f=v;return(d=c(n))!=null&&d.length?(a(),r("div",Y,[o("div",Z,[i(p,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(B,null,C(c(n).slice(1),(y,x)=>(a(),F(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(h,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(f,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),H=P(D,[["__scopeId","data-v-eba26087"]]);export{H as default};