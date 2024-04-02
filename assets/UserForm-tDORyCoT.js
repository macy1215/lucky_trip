import{F as C}from"./FooterBanner-BT6t_D_X.js";import{_ as k,m as B,a as E,r as i,o as u,c as _,b as e,d as s,w as b,F as x,u as I,t as p,f as S,B as m,e as T,H as F}from"./index-6mC2spq1.js";import{c as g}from"./cartStore-0cViIA89.js";import{S as h}from"./sweetalert2.all-cXh1ww-c.js";var U={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"lucky_trip",BASE_URL:"/lucky_trip/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:N,VITE_NAME:A}=U,D={data(){return{product:{},isLoading:!0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{...B(g,["addToCart","removeAllCart","removeCartItem","changeCartQty","getCart"]),isPhone(r){return/^(09)[0-9]{8}$/.test(r)?!0:"請輸入以「09」開頭的行動電話號碼"},createOrder(){h.fire({title:"確定要送出訂單資訊嗎？",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2e949c",cancelButtonColor:"#ADADAD",confirmButtonText:"確認送出",cancelButtonText:"取消",reverseButtons:!0}).then(r=>{if(r.isConfirmed){const t=this.form,f=`${N}/api/${A}/order`;this.$http.post(f,{data:t}).then(n=>{this.orderId=n.data.orderId,this.$refs.form.resetForm(),this.$router.push(`/paycheck/${n.data.orderId}`),localStorage.setItem("orderId",n.data.orderId),this.getCart(),h.fire({icon:"success",title:"訂單成立"})}).catch(n=>{h.fire({icon:"success",title:n.response.data.message})})}})}},computed:{...E(g,["carts","status","final_total","total"])},components:{FooterBanner:C},mounted(){}},L={class:"container"},R={class:"row justify-content-center mt-5"},M={class:"col-10"},O={class:"position-relative m-4 px-5"},j=e("div",{class:"progress",style:{height:"1px"}},[e("div",{class:"progress-bar w-50",role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),q=e("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill text-white",style:{width:"2rem",height:"2rem"}},"2",-1),P=e("button",{type:"button",class:"position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",left:"99%",cursor:"default"}},"3",-1),z=e("div",{class:"row text-primary"},[e("div",{class:"col text-start"},"確認商品"),e("div",{class:"col"},"確認購買資訊"),e("div",{class:"col text-end"},"付款確認")],-1),H={class:"container py-md-5 py-2"},Q={class:"row"},$={class:"col-lg-8"},G={class:"my-md-0 my-5 row justify-content-center"},J={class:"mb-4"},K=e("h3",{class:"text-start fs-3"},"聯絡資訊",-1),W={class:"mb-3 d-flex align-items-center"},X=e("h3",{class:"text-start fs-3"},"寄件地址",-1),Y={class:"row"},Z={class:"mb-3 col-md-6"},ee={class:"mb-3 col-md-6"},te={class:"mb-3"},se={class:"mb-3 text-start"},oe=e("label",{for:"message",class:"form-label"},"備註留言",-1),le=e("div",{class:"text-end"},[e("button",{class:"btn btn-danger",type:"submit"},"送出訂單")],-1),ae={class:"col-lg-4 px-md-1"},re={class:"bg-secondary bg-opacity-10 rounded-2 px-md-2 pb-md-4 pt-md-3 h-auto pt-3"},ne=e("h3",{class:"my-lg-2 my-4"},"購買清單",-1),ie={class:"d-flex row mb-3 align-items-center px-4"},de={class:"col-md-3 col-5 px-md-0"},ce=["src"],me={class:"col-md-6 col-4 text-start"},ue={class:"col-md-3 col-3 text-end"},_e=e("hr",null,null,-1),pe={class:"fs-3 text-end fw-bold d-flex justify-content-between px-lg-0 px-4 pb-lg-0 pb-4"},he=e("span",null,"總計",-1);function fe(r,t,f,n,o,v){const y=i("router-link"),d=i("VeeField"),c=i("error-message"),V=i("VeeForm"),w=i("footer-banner");return u(),_(x,null,[e("div",L,[e("div",R,[e("div",M,[e("div",O,[j,s(y,{type:"button",class:"position-absolute top-0 start-0 ms-3 translate-middle btn btn-sm btn-primary rounded-pill text-white",to:"/carts",style:{width:"2rem",height:"2rem"}},{default:b(()=>[S("1")]),_:1}),q,P]),z])])]),e("div",H,[e("div",Q,[e("div",$,[e("div",G,[s(V,{ref:"form",class:"col-md-10",onSubmit:v.createOrder},{default:b(({errors:l})=>[e("div",J,[K,e("div",W,[s(d,{id:"email",name:"email",type:"email",class:m(["form-control w-100",{"is-invalid":l.email}]),placeholder:"請輸入Email信箱",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.user.email=a)},null,8,["class","modelValue"]),s(c,{name:"email",class:"invalid-feedback text-start"})])]),e("div",null,[X,e("div",Y,[e("div",Z,[s(d,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":l.姓名}]),placeholder:"收件人姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.user.name=a)},null,8,["class","modelValue"]),s(c,{name:"姓名",class:"invalid-feedback text-start"})]),e("div",ee,[s(d,{id:"tel",name:"電話",type:"tel",class:m(["form-control",{"is-invalid":l.電話}]),placeholder:"收件人行動電話",rules:v.isPhone,modelValue:o.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.user.tel=a)},null,8,["class","rules","modelValue"]),s(c,{name:"電話",class:"invalid-feedback text-start"})])])]),e("div",te,[s(d,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":l.地址}]),placeholder:"請輸入寄送地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=a=>o.form.user.address=a)},null,8,["class","modelValue"]),s(c,{name:"地址",class:"invalid-feedback text-start"})]),e("div",se,[oe,T(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=a=>o.form.message=a)},null,512),[[F,o.form.message]])]),le]),_:1},8,["onSubmit"])])]),e("div",ae,[e("div",re,[ne,(u(!0),_(x,null,I(r.carts,l=>(u(),_("div",{key:l.id},[e("div",ie,[e("div",de,[e("img",{src:l.product.imageUrl,alt:"",class:"img-fluid rounded rounded-1"},null,8,ce)]),e("div",me,p(l.product.title),1),e("div",ue,"NT$"+p(l.final_total)+"元",1)])]))),128)),_e,e("div",pe,[he,e("span",null,"NT$"+p(r.final_total)+"元",1)])])])])]),s(w)],64)}const ye=k(D,[["render",fe]]);export{ye as default};
