import{C as f}from"./collapse-5nBX74tg.js";import{m as h,a as d,_ as v,r as l,o as _,c as m,b as t,d as e,w as o,e as N,v as w,f as n,t as y,F as C}from"./index-DRP39y-N.js";import{c as p}from"./cartStore-Z9Wkof3c.js";import{s as k}from"./saveStore-HJAKHj9l.js";import"./selector-engine-fgcyLVzh.js";import"./sweetalert2.all-LeBMo2cv.js";const x={data(){return{headerNavDrop:null,isNavbarOpen:!1}},methods:{...h(p,["getCart","removeCartItem","removeAllCart"]),toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen,this.headerNavDrop.toggle()}},computed:{...d(p,["carts"]),...d(k,["saveIdlist","saveProductList","isProductSaved"])},mounted(){this.headerNavDrop=new f(this.$refs.headerNavDrop,{toggle:!1}),this.getCart()}},S={class:"navbar navbar-expand-md align-items-center fixed-top shadow-sm"},$={class:"container"},D=t("span",{class:"nav-link logostyle"},[t("a",null,"lucky-trip")],-1),V=t("i",{class:"bi bi-list",style:{"font-size":"2.5rem"}},null,-1),L=[V],O={class:"collapse navbar-collapse navbar-nav py-10 py-lg-0 justify-content-md-end justify-content-sm-center",id:"navbarSupportedContent",ref:"headerNavDrop"},R={class:"navbar-nav"},B={class:"nav-item"},j={class:"nav-item"},A={class:"nav-item"},F={class:"nav-item"},I=t("span",null,"我的收藏",-1),P={class:"nav-item"},T=t("i",{class:"bi bi-cart-fill fw-bolder position-relative align-top"},null,-1),q={class:"position-absolute top-20 start-100 translate-middle badge rounded-pill bg-danger fs-6"},z=t("span",{class:"visually-hidden"},"New alerts",-1);function E(u,r,b,g,c,i){const a=l("RouterLink");return _(),m("nav",S,[t("div",$,[e(a,{to:"/"},{default:o(()=>[D]),_:1}),t("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:r[0]||(r[0]=(...s)=>i.toggleNavbar&&i.toggleNavbar(...s))},L),N(t("div",O,[t("ul",R,[t("li",B,[e(a,{class:"nav-link text-primary active fw-bold","aria-current":"page",to:"/about"},{default:o(()=>[n("關於我們")]),_:1})]),t("li",j,[e(a,{class:"nav-link text-primary active fw-bold","aria-current":"page",to:"/products"},{default:o(()=>[n("好嗨遊行程")]),_:1})]),t("li",A,[e(a,{class:"nav-link text-primary fw-bold","aria-current":"page",to:"/qalist"},{default:o(()=>[n("常見問題")]),_:1})]),t("li",F,[e(a,{class:"nav-link text-primary fw-bold","aria-current":"page",to:"/saved"},{default:o(()=>[I]),_:1})]),t("li",P,[e(a,{"aria-current":"page",to:"/carts",class:"nav-link cart nav-link fs-4 ms-lg-4 me-1 position-relative"},{default:o(()=>{var s;return[T,t("span",q,[n(y((s=this.carts)==null?void 0:s.length)+" ",1),z])]}),_:1})])])],512),[[w,c.isNavbarOpen]])])])}const U=v(x,[["render",E]]),G={components:{NavbarComponent:U}};function H(u,r,b,g,c,i){const a=l("Navbar-Component"),s=l("RouterView");return _(),m(C,null,[e(a,{class:"bg-white"}),e(s)],64)}const Y=v(G,[["render",H]]);export{Y as default};
