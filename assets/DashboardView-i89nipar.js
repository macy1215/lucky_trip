import{C as h}from"./collapse-8gEGhudO.js";import{_ as v,r as p,o as u,c as _,a as e,b as s,w as o,d as m,v as g,C as k,D as b,A as f,F as N,e as i}from"./index-uHVYxXOi.js";import"./selector-engine-pKGNWdRj.js";const x={data(){return{checkSuccess:!1,headerNavDrop:null,isNavbarOpen:!1}},methods:{checkLogin(){const r=document.cookie.replace(/(?:(?:^|.*;\s*)luckyTrip\s*=\s*([^;]*).*$)|^.*$/,"$1");r?(this.$http.defaults.headers.common.Authorization=`${r}`,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/user/check",{api_token:this.token}).then(()=>{this.checkSuccess=!0}).catch(()=>{this.checkSuccess=!1,this.$router.push("/login")})):(alert("尚未登入"),this.$router.push("/login"))},signout(){document.cookie="luckyTrip=;expires=;",alert("登出帳號，token 已清除"),this.$router.push("/login")},toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen,this.headerNavDrop.toggle()}},mounted(){this.checkLogin(),this.headerNavDrop=new h(this.$refs.headerNavDrop,{toggle:!1})}},y={class:"navbar navbar-expand-md mb-3 container"},C={class:"container-fluid"},$=e("span",{class:"nav-link logostyle"},[e("a",null,"lucky-trip")],-1),w=e("i",{class:"bi bi-list",style:{"font-size":"2.5rem"}},null,-1),D=[w],S={class:"collapse navbar-collapse navbar-nav ms-auto py-10 py-lg-0",id:"navbarSupportedContent",ref:"headerNavDrop"},V={class:"navbar-nav"},B={class:"nav-item"},L={class:"nav-item"},O={class:"nav-item"},R={class:"nav-item"};function T(r,t,z,A,c,n){const a=p("RouterLink"),d=p("RouterView");return u(),_(N,null,[e("nav",y,[e("div",C,[s(a,{to:"/"},{default:o(()=>[$]),_:1}),e("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[0]||(t[0]=(...l)=>n.toggleNavbar&&n.toggleNavbar(...l))},D),m(e("div",S,[e("ul",V,[e("li",B,[s(a,{class:"nav-link text-primary active","aria-current":"page",to:"/admin/products"},{default:o(()=>[i("方案列表")]),_:1})]),e("li",L,[s(a,{class:"nav-link text-primary","aria-current":"page",to:"/admin/orders"},{default:o(()=>[i("訂單列表")]),_:1})]),e("li",O,[s(a,{class:"nav-link text-primary","aria-current":"page",to:"/admin/blogs"},{default:o(()=>[i("文章列表")]),_:1})]),e("li",R,[e("a",{href:"#",class:"nav-link text-primary","aria-current":"page",onClick:t[1]||(t[1]=k(l=>n.signout(),["prevent"]))},"登出")])])],512),[[g,c.isNavbarOpen]])])]),c.checkSuccess?(u(),b(d,{key:0})):f("",!0)],64)}const j=v(x,[["render",T]]);export{j as default};
