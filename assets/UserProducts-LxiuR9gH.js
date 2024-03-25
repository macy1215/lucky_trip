import{_ as P,m as g,a as E,r as l,o as a,c as n,d as c,b as t,w as h,F as m,u as v,t as u,A as T,f as C,B as I,y as V,z as $}from"./index-EOBzKwp8.js";import{F as B}from"./FooterBanner-P-fJr2_2.js";import{P as U}from"./PaginationView-WbIEIKe1.js";import{S as f}from"./sweetalert2.all-KULWUEbt.js";import{c as M}from"./cartStore-oM7F1q5x.js";import{s as b}from"./saveStore-dTx4dEmS.js";var N={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"lucky_trip",BASE_URL:"/lucky_trip/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:y,VITE_NAME:x}=N,R={data(){return{isLoading:!1,fullpage:!0,addSave:!0,carts:[],products:[],productId:"",categories:["文化探索","休閒渡假","自然景色","親子出遊","美食之旅"],pagination:{},isHover:!1}},watch:{"$route.query":{handler(){this.getUserProduct()},deep:!0}},methods:{getUserProduct(){this.isLoading=!0;const{category:s=""}=this.$route.query,r=`${y}/api/${x}/products/?category=${s}`;this.$http.get(r).then(o=>{this.products=o.data.products,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{f.fire({icon:"error",title:o.data.message})})},getProducts(s=1){this.isLoading=!0;const r=`${y}/api/${x}/products?page=${s}`;this.$http.get(r).then(o=>{this.products=o.data.products,this.pagination=o.data.pagination,this.isLoading=!1}).catch(o=>{f.fire({title:o.data.message,icon:"error",timer:1500,showConfirmButton:!1})})},...g(M,["addToCart"]),...g(b,["addToSave"])},computed:{...E(b,["savelist","isProductSaved"])},components:{FooterBanner:B,Pagination:U},mounted(){this.getUserProduct()}},d=s=>(V("data-v-9bee0f73"),s=s(),$(),s),A=d(()=>t("div",{class:"productBox"},[t("div",{class:"productAllbg"})],-1)),H={class:"container"},D={class:"row py-5"},F={class:"col-md-3 col-12"},j={class:"bg-white shadow border-0 rounded-3 justify-content-start text-start py-md-4 py-3 px-4 my-md-0 mt-2 mb-4"},q=d(()=>t("h3",{class:"fw-bold text-start"},"主題選擇",-1)),z=d(()=>t("hr",null,null,-1)),O={class:"px-0 d-flex flex-wrap my-0 list-unstyled"},G=d(()=>t("button",{type:"button",class:"btn btn-outline-primary btn-sm me-3 text-start btnHover mb-2"},"全部行程",-1)),J={type:"button",class:"btn btn-outline-primary btn-sm me-3 text-start btnHover mb-2"},K={class:"col-md-9 col-12"},Q={class:"row"},W={class:"card mb-4"},X={class:"overflow-hidden productImg"},Y=["src","alt"],Z={class:"position-relative d-flex saveBox"},tt=["onClick"],et=["onMouseover","onMouseleave"],st={key:1,class:"bi bi-heart-fill fs-4 icon"},ot={class:"card-body"},it={class:"card-title text-start"},at={class:"row text-start justify-content-between align-items-center"},nt={class:"col-lg-7 col-md-12 col-6"},rt={class:"text-decoration-line-through text-black-50 fs-6"},ct={class:"text-primary h5"},dt=["onClick"],lt=d(()=>t("button",{class:"btn btn-primary text-white",type:"submit"},"加入購物車",-1)),ut=[lt];function _t(s,r,o,pt,i,w){const S=l("VueLoading"),_=l("RouterLink"),k=l("Pagination"),L=l("footer-banner");return a(),n(m,null,[c(S,{active:i.isLoading,"onUpdate:active":r[0]||(r[0]=e=>i.isLoading=e),loader:"bars","can-cancel":!1,"is-full-page":i.fullpage},null,8,["active","is-full-page"]),A,t("div",H,[t("div",D,[t("div",F,[t("div",j,[q,z,t("ul",O,[t("li",null,[c(_,{to:"/products"},{default:h(()=>[G]),_:1})]),(a(!0),n(m,null,v(i.categories,e=>(a(),n("li",{class:"list-group-item",key:e},[c(_,{to:`/products?category=${e}`},{default:h(()=>[t("button",J,u(e),1)]),_:2},1032,["to"])]))),128))])])]),t("div",K,[t("div",Q,[(a(!0),n(m,null,v(i.products,e=>(a(),n("div",{class:"col-md-6 d-flex",key:e.id},[t("div",W,[t("div",X,[c(_,{to:`/product/${e.id}`},{default:h(()=>[t("img",{src:e.imageUrl,class:"card-img-top object-fit-cover",alt:e.title,style:{width:"105%"}},null,8,Y)]),_:2},1032,["to"])]),t("div",Z,[t("div",{onClick:p=>s.addToSave(e),class:"rounded-circle btn btn-outline-light border border-2 pb-1"},[s.isProductSaved(e.id)?(a(),n("i",st)):(a(),n("i",{key:0,class:T(["bi bi-heart fs-4 icon",{"text-dark":i.isHover}]),onMouseover:p=>i.isHover[e.id]=!0,onMouseleave:p=>i.isHover[e.id]=!1},null,42,et))],8,tt)]),t("div",ot,[t("h5",it,u(e.title),1),t("div",at,[t("div",nt,[C(" 售價 "),t("span",rt," NT "+u(e.origin_price),1),t("span",ct,"NT "+u(e.price),1)]),t("div",{class:"col-lg-5 col-md-12 col-6 text-lg-end text-md-start text-end pt-lg-0 pt-md-3 pt-0",onClick:I(p=>s.addToCart(e.id,s.qty),["prevent"])},ut,8,dt)])])])]))),128))]),c(k,{pagination:i.pagination,onEmitPages:w.getProducts},null,8,["pagination","onEmitPages"])])])]),c(L)],64)}const yt=P(R,[["render",_t],["__scopeId","data-v-9bee0f73"]]);export{yt as default};
