import{F as v}from"./FooterBanner-KKuu2Srd.js";import{_ as h,m as g,a as V,r,o as m,c,b as e,d as o,w as y,F as f,u as w,t as u,E as i,e as k,D as C}from"./index--CWl1Wb0.js";import{c as _}from"./cartStore-krlXQ7ik.js";import"./sweetalert2.all-hRkOYDhg.js";const F={data(){return{product:{}}},methods:{...g(_,["addToCart","removeAllCart","removeCartItem","changeCartQty"])},computed:{...V(_,["carts","status","final_total","total"])},components:{FooterBanner:v},mounted(){}},U=e("h1",null,null,-1),S={class:"container"},$={class:"row"},B={class:"col-md-8"},E=e("nav",{"aria-label":"breadcrumb"},[e("ol",{class:"breadcrumb"},[e("li",{class:"breadcrumb-item"}," 建立訂單 "),e("li",{class:"breadcrumb-item disable","aria-current":"page"}," 付款 ")])],-1),q={class:"my-5 row justify-content-center"},D={class:"mb-3"},N=e("label",{for:"email",class:"form-label"},"Email",-1),T={class:"mb-3"},j=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),A={class:"mb-3"},z=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),I={class:"mb-3"},L=e("label",{for:"address",class:"form-label"},"收件人地址",-1),M={class:"mb-3"},O=e("label",{for:"message",class:"form-label"},"留言",-1),P=e("div",{class:"text-end"},[e("button",{class:"btn btn-danger",type:"submit"},"送出訂單")],-1),Q={class:"col-md-4 bg-secondary bg-opacity-10 px-md-4 pb-md-5 pt-md-3"},x=e("h3",null,"購買清單",-1),G={class:"d-flex row mb-3 align-items-center"},H={class:"col-md-3"},J=["src"],K={class:"col-md-6 text-start"},R={class:"col-md-3"},W=e("hr",null,null,-1),X={class:"fs-3 text-end fw-bold d-flex justify-content-between"},Y=e("span",null,"總計",-1);function Z(s,l,ee,se,le,oe){const d=r("v-field"),n=r("error-message"),p=r("VeeForm"),b=r("footer-banner");return m(),c(f,null,[U,e("div",S,[e("div",$,[e("div",B,[E,e("div",q,[o(p,{ref:"form",class:"col-md-6",onSubmit:s.createOrder},{default:y(({errors:a})=>[e("div",D,[N,o(d,{id:"email",name:"email",type:"email",class:i(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.form.user.email,"onUpdate:modelValue":l[0]||(l[0]=t=>s.form.user.email=t)},null,8,["class","modelValue"]),o(n,{name:"email",class:"invalid-feedback"})]),e("div",T,[j,o(d,{id:"name",name:"姓名",type:"text",class:i(["form-control",{"is-invalid":a.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.form.user.name,"onUpdate:modelValue":l[1]||(l[1]=t=>s.form.user.name=t)},null,8,["class","modelValue"]),o(n,{name:"姓名",class:"invalid-feedback"})]),e("div",A,[z,o(d,{id:"tel",name:"電話",type:"tel",class:i(["form-control",{"is-invalid":a.電話}]),placeholder:"請輸入電話",rules:s.isPhone,modelValue:s.form.user.tel,"onUpdate:modelValue":l[2]||(l[2]=t=>s.form.user.tel=t)},null,8,["class","rules","modelValue"]),o(n,{name:"電話",class:"invalid-feedback"})]),e("div",I,[L,o(d,{id:"address",name:"地址",type:"text",class:i(["form-control",{"is-invalid":a.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.form.user.address,"onUpdate:modelValue":l[3]||(l[3]=t=>s.form.user.address=t)},null,8,["class","modelValue"]),o(n,{name:"地址",class:"invalid-feedback"})]),e("div",M,[O,k(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":l[4]||(l[4]=t=>s.form.message=t)},null,512),[[C,s.form.message]])]),P]),_:1},8,["onSubmit"])])]),e("div",Q,[x,(m(!0),c(f,null,w(s.carts,a=>(m(),c("div",{key:a.id},[e("div",G,[e("div",H,[e("img",{src:a.product.imageUrl,alt:"",class:"img-fluid rounded rounded-1"},null,8,J)]),e("div",K,u(a.product.title),1),e("div",R,u(a.final_total),1)])]))),128)),W,e("div",X,[Y,e("span",null,"NT$"+u(s.final_total),1)])])])]),o(b)],64)}const re=h(F,[["render",Z]]);export{re as default};
