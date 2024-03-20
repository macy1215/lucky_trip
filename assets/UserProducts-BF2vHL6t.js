import{_ as L,m as S,r as l,o as n,c as r,d as c,b as t,w as u,F as h,u as f,t as p,f as k,B as P,y as E,z as T}from"./index--CWl1Wb0.js";import{F as $}from"./FooterBanner-KKuu2Srd.js";import{P as V}from"./PaginationView-945F09E0.js";import{c as I}from"./cartStore-krlXQ7ik.js";import"./sweetalert2.all-hRkOYDhg.js";var U={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"lucky_trip",BASE_URL:"/lucky_trip/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_NAME:v}=U,B={data(){return{isLoading:!1,fullpage:!0,addSave:!0,carts:[],products:[],productId:"",categories:["文化探索","休閒渡假","自然景色","親子出遊","美食之旅"],pagination:{}}},watch:{"$route.query":{handler(){this.getUserProduct()},deep:!0}},methods:{getUserProduct(){console.log(this.$route),this.isLoading=!0;const{category:e=""}=this.$route.query,i=`${m}/api/${v}/products/?category=${e}`;this.$http.get(i).then(o=>{this.products=o.data.products,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{this.$Swal.fire({icon:"error",title:o.response.data.message})})},getProducts(e=1){this.isLoading=!0;const i=`${m}/api/${v}/products?page=${e}`;this.$http.get(i).then(o=>{this.products=o.data.products,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{console.log(o)})},...S(I,["addToCart"]),addToSave(){this.addSave=!this.addSave}},components:{FooterBanner:$,Pagination:V},mounted(){this.getUserProduct()}},d=e=>(E("data-v-fbd35b6f"),e=e(),T(),e),C=d(()=>t("div",{class:"productBox"},[t("div",{class:"productAllbg"})],-1)),N={class:"container"},R={class:"row py-5"},A={class:"col-md-3 col-12"},D={class:"bg-white shadow border-0 rounded-3 justify-content-start text-start py-5 px-4"},F=d(()=>t("h3",{class:"fw-bold text-start"},"主題選擇",-1)),M=d(()=>t("hr",null,null,-1)),j={class:"px-0 d-flex flex-wrap"},q=d(()=>t("button",{type:"button",class:"btn btn-outline-primary btn-sm me-3 text-start btnHover mb-2"},"全部行程",-1)),H={type:"button",class:"btn btn-outline-primary btn-sm me-3 text-start btnHover mb-2"},O={class:"col-md-9 col-12"},z={class:"row"},G={class:"card mb-4"},J={style:{height:"250px"},class:"overflow-hidden"},K=["src","alt"],Q={class:"position-relative d-flex",style:{top:"-40px",left:"12px"}},W={key:0,class:"bi bi-heart fs-4 text-white"},X={key:1,class:"bi bi-heart-fill fs-4 text-white"},Y={class:"card-body"},Z={class:"card-title text-start"},tt={class:"text-start d-flex justify-content-between align-items-center"},st={class:"text-decoration-line-through text-black-50 fs-6"},et={class:"text-primary h5"},ot=["onClick"],it=d(()=>t("button",{class:"btn btn-primary text-white",type:"submit"},"加入購物車",-1)),at=[it];function nt(e,i,o,rt,a,g){const b=l("VueLoading"),_=l("RouterLink"),y=l("Pagination"),x=l("footer-banner");return n(),r(h,null,[c(b,{active:a.isLoading,"onUpdate:active":i[0]||(i[0]=s=>a.isLoading=s),loader:"bars","can-cancel":!1,"is-full-page":a.fullpage},null,8,["active","is-full-page"]),C,t("div",N,[t("div",R,[t("div",A,[t("div",D,[F,M,t("ul",j,[t("li",null,[c(_,{to:"/products"},{default:u(()=>[q]),_:1})]),(n(!0),r(h,null,f(a.categories,s=>(n(),r("li",{class:"list-group-item",key:s},[c(_,{to:`/products?category=${s}`},{default:u(()=>[t("button",H,p(s),1)]),_:2},1032,["to"])]))),128))])])]),t("div",O,[t("div",z,[(n(!0),r(h,null,f(a.products,s=>(n(),r("div",{class:"col-md-6 d-flex",key:s.id},[t("div",G,[t("div",J,[c(_,{to:`/product/${s.id}`},{default:u(()=>[t("img",{src:s.imageUrl,class:"card-img-top object-fit-cover",alt:s.title,style:{width:"105%"}},null,8,K)]),_:2},1032,["to"])]),t("div",Q,[t("div",{onClick:i[1]||(i[1]=w=>g.addToSave())},[a.addSave?(n(),r("i",W)):(n(),r("i",X))])]),t("div",Y,[t("h5",Z,p(s.title),1),t("div",tt,[t("div",null,[k(" 售價 "),t("span",st," NT "+p(s.origin_price),1),t("span",et,"NT "+p(s.price),1)]),t("div",{onClick:P(w=>e.addToCart(s.id,e.qty),["prevent"])},at,8,ot)])])])]))),128))]),c(y,{pagination:a.pagination,onEmitPages:g.getProducts},null,8,["pagination","onEmitPages"])])])]),c(x)],64)}const ut=L(B,[["render",nt],["__scopeId","data-v-fbd35b6f"]]);export{ut as default};
