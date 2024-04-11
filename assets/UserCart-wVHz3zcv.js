import{F as C}from"./FooterBanner-QHS4dhxK.js";import{_ as w,m as x,a as q,r as y,o as e,c as l,b as t,n as r,F as u,x as h,t as i,d as b,w as p,f as a,G as $,e as v,H as g,z as I,A as Q}from"./index-GADmytjc.js";import{c as f}from"./cartStore-l2eyeZKN.js";import"./sweetalert2.all-0OoenSw3.js";const U={data(){return{product:{}}},methods:{...x(f,["addToCart","removeAllCart","removeCartItem","changeCartQty"])},computed:{...q(f,["carts","status","final_total","total"])},components:{FooterBanner:C},mounted(){}},n=o=>(I("data-v-3c29d2be"),o=o(),Q(),o),V=n(()=>t("div",{class:"container"},[t("div",{class:"row justify-content-center mt-5"},[t("div",{class:"col-md-10 col-12 px-4"},[t("div",{class:"position-relative m-4"},[t("div",{class:"progress",style:{height:"1px"}},[t("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 ms-3 translate-middle btn btn-sm btn-primary rounded-pill text-white",style:{width:"2rem",height:"2rem"}}," 1 "),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",cursor:"default"}}," 2 "),t("button",{type:"button",class:"position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",left:"99%",cursor:"default"}}," 3 ")]),t("div",{class:"row text-primary"},[t("div",{class:"col text-end"},"確認商品"),t("div",{class:"col text-secondary"},"確認購買資訊"),t("div",{class:"col text-end text-secondary"},"付款確認")])])])],-1)),L={class:"container py-5 px-md-5 px-3"},N=n(()=>t("h2",{class:"text-center text-primary fs-3 fw-bold pb-2 py-4"}," 購物車列表 ",-1)),S={key:0,class:"d-md-block d-none"},T={class:"table"},j=n(()=>t("thead",{class:"border"},[t("tr",null,[t("th",{scope:"col"},"品名"),t("th",{scope:"col",style:{width:"15%"}},"量/單位"),t("th",{scope:"col",class:"text-center"},"單價"),t("th",{scope:"col"},"刪除")])],-1)),A={class:"border mx-auto align-middle"},B={class:"row align-items-center"},F={class:"col-md-3 col-6"},z=["src","alt"],D={class:"col-md-9 col-6 my-0 py-0 text-start ps-4"},H={class:"input-group input-group-sm"},P={class:"input-group mb-3"},R=["disabled","onClick"],E=["onClick"],G=n(()=>t("i",{class:"bi bi-trash3"},null,-1)),M=[G],O=["onUpdate:modelValue","disabled"],J=["onClick"],K={class:"input-group-text",id:"basic-addon2"},W=["onClick","disabled"],X=n(()=>t("i",{class:"bi bi-x-lg text-danger fs-5"},null,-1)),Y=[X],Z={class:"border"},tt=n(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),st={class:"text-end fs-5"},ot={key:1},et={class:"py-4 mx-auto",colspan:"4"},nt=n(()=>t("p",{class:"h4"},"購物車目前沒有品項",-1)),lt=n(()=>t("div",{class:"btnProduct"},[a(" 來去找行程 "),t("i",{class:"bi bi-chevron-double-right"})],-1)),dt={class:"d-md-none d-block"},it={class:"bg-light px-4 py-2"},at=n(()=>t("h4",{class:"fw-bold fs-3 my-3"},[t("i",{class:"bi bi-list-ol pe-2"}),a("購物車明細 ")],-1)),ct={class:"col-12"},rt=["src","alt"],ut={class:"col-12 my-0 py-0 text-start"},bt={class:"my-2 pb-1"},pt={class:"input-group input-group-sm mb-3 w-50"},_t=["disabled","onClick"],ht=["onClick"],mt=n(()=>t("i",{class:"bi bi-trash3"},null,-1)),yt=[mt],vt=["onUpdate:modelValue","disabled"],gt=["onClick"],ft={class:"input-group-text",id:"basic-addon2"},kt={key:1,class:"h4 py-4"},Ct=n(()=>t("p",null,"購物車目前沒有品項",-1)),wt=n(()=>t("div",{class:"btnProduct"},[a(" 來去找行程 "),t("i",{class:"bi bi-chevron-double-right"})],-1)),xt=["disabled"],qt=n(()=>t("i",{class:"bi bi-trash3-fill"},null,-1)),$t={class:"border border-1 px-2 py-2 my-3 table-responsive"},It=n(()=>t("h4",{class:"fw-bold"},[t("i",{class:"bi bi-vector-pen pe-2"}),a("訂單摘要")],-1)),Qt={class:"table align-middle d-md-none d-block table-borderless"},Ut=n(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品名"),t("th",{scope:"col"},"數量"),t("th",{scope:"col"},"單價")])],-1)),Vt={key:0},Lt={class:"col-6 my-0 text-start align-top"},Nt={class:"col-2 align-top"},St={class:"col-4 align-top text-end"},Tt={key:1},jt=n(()=>t("td",{colspan:"3"},[t("p",null,"購物車目前沒有品項")],-1)),At=[jt],Bt={class:"align-text-bottom w-100 text-end border-top"},Ft={colspan:"3",class:"text-end"},zt={class:"text-end align-bottom"},Dt={class:"fs-5"},Ht={class:"text-end d-md-block d-none"},Pt=["disabled"],Rt=n(()=>t("i",{class:"bi bi-trash3-fill"},null,-1)),Et=["disabled"],Gt=n(()=>t("button",{class:"btn btn-primary text-white",type:"submit"}," 確認結帳 ",-1));function Mt(o,_,Ot,Jt,m,Kt){const c=y("RouterLink"),k=y("footer-banner");return e(),l(u,null,[V,t("div",L,[t("div",{class:r({fullH:Object.keys(o.carts).length<2})},[N,o.total!==0?(e(),l("div",S,[t("table",T,[j,t("tbody",A,[(e(!0),l(u,null,h(o.carts,s=>(e(),l("tr",{key:s.id},[t("th",null,[t("div",B,[t("div",F,[b(c,{to:`/product/${s.product_id}`,class:"text-decoration-none"},{default:p(()=>[t("img",{src:s.product.imageUrl,class:"img-fluid rounded object-fit-cover",alt:m.product.title},null,8,z)]),_:2},1032,["to"])]),t("h4",D,i(s.product.title),1)])]),t("td",null,[t("div",H,[t("div",P,[s.qty>1?(e(),l("button",{key:0,typr:"button",class:"btn btn-outline-primary",disabled:s.qty===1,onClick:d=>{s.qty--,o.changeCartQty(s,s.qty)}}," - ",8,R)):(e(),l("button",{key:1,typr:"button",class:"btn btn-outline-danger",onClick:d=>o.removeCartItem(s.id)},M,8,E)),v(t("input",{min:"1",typr:"number",class:"form-control text-center","onUpdate:modelValue":d=>s.qty=d,disabled:s.id===o.status.cartQtyLoading,readonly:""},null,8,O),[[g,s.qty]]),t("button",{typr:"button",class:"btn btn-outline-primary",onClick:d=>{s.qty++,o.changeCartQty(s,s.qty)}}," + ",8,J),t("span",K,i(s.product.unit),1)])])]),t("td",null,"NT "+i(s.total)+" 元",1),t("td",null,[t("button",{type:"button",class:"btn btn-sm btn-link",onClick:d=>o.removeCartItem(s.id),disabled:s.id===o.status.cartQtyLoading},Y,8,W)])]))),128))]),t("tfoot",Z,[t("tr",null,[tt,t("td",st,i(o.final_total),1)])])])])):(e(),l("div",ot,[t("div",null,[t("div",et,[nt,b(c,{to:"/products",class:"text-decoration-none"},{default:p(()=>[lt]),_:1})])])])),t("div",dt,[t("div",it,[at,o.total!==0?(e(!0),l(u,{key:0},h(o.carts,s=>(e(),l("div",{key:s.id,class:"row align-items-center justify-content-center mb-2"},[t("div",ct,[b(c,{to:`/product/${s.id}`,class:"text-decoration-none"},{default:p(()=>[t("img",{src:s.product.imageUrl,class:"img-fluid rounded object-fit-cover",alt:m.product.title},null,8,rt)]),_:2},1032,["to"])]),t("div",ut,[t("h4",bt,i(s.product.title),1),t("div",null,[t("div",pt,[s.qty>1?(e(),l("button",{key:0,typr:"button",class:"btn btn-outline-primary",disabled:s.qty===1,onClick:d=>{s.qty--,o.changeCartQty(s,s.qty)}}," - ",8,_t)):(e(),l("button",{key:1,typr:"button",class:"btn btn-outline-danger",onClick:d=>o.removeCartItem(s.id)},yt,8,ht)),v(t("input",{min:"1",typr:"number",class:"form-control text-center w-25","onUpdate:modelValue":d=>s.qty=d,disabled:s.id===o.status.cartQtyLoading,readonly:""},null,8,vt),[[g,s.qty]]),t("button",{typr:"button",class:"btn btn-outline-primary",onClick:d=>{s.qty++,o.changeCartQty(s,s.qty)}}," + ",8,gt),t("span",ft,i(s.product.unit),1)])])])]))),128)):(e(),l("div",kt,[Ct,b(c,{to:"/products",class:"text-decoration-none"},{default:p(()=>[wt]),_:1})])),t("div",{class:r(["text-end d-md-none d-block mb-3",{"d-none":o.total!==0}])},[t("button",{class:r(["btn btn-outline-danger",{"d-none":o.total===0}]),type:"button",disabled:o.carts.length===0,onClick:_[0]||(_[0]=s=>o.removeAllCart(o.carts))},[qt,a("一鍵清空購物車 ")],10,xt)],2)]),t("div",$t,[It,t("table",Qt,[Ut,t("tbody",null,[o.total!==0?(e(),l("tr",Vt,[(e(!0),l(u,null,h(o.carts,s=>(e(),l(u,{key:s.id},[t("td",Lt,i(s.product.title),1),t("td",Nt,i(s.qty)+"/人",1),t("td",St," NT "+i(s.final_total)+" 元 ",1)],64))),128))])):(e(),l("tr",Tt,At)),t("tr",Bt,[t("th",Ft,[t("span",zt,[a("總計 NT "),t("strong",Dt,i(o.final_total)+" 元",1)])])])])])])]),t("div",Ht,[t("button",{class:r(["btn btn-outline-danger mb-md-2 mb-5",{"d-none":o.total===0}]),type:"button",disabled:o.carts.length===0,onClick:_[1]||(_[1]=s=>o.removeAllCart(o.carts))},[Rt,a("一鍵清空購物車 ")],10,Pt)]),t("div",null,[o.carts.length===0?(e(),l("button",{key:0,class:r(["btn btn-primary text-white",{"d-none":o.total===0}]),type:"submit",disabled:o.carts.length===0}," 確認結帳 ",10,Et)):(e(),$(c,{key:1,to:"/form"},{default:p(()=>[Gt]),_:1}))])],2)]),b(k)],64)}const ts=w(U,[["render",Mt],["__scopeId","data-v-3c29d2be"]]);export{ts as default};
