import{A as v}from"./AppLayout.77db8179.js";import{_ as k}from"./SecondaryButton.149b8053.js";import{L as x}from"./LoadingButton.59398738.js";import{X as w}from"./XInput.df8a41e7.js";import{X as B}from"./XCheckbox.b9c6c4da.js";import{_ as V}from"./InputError.ac112704.js";import{_ as S,z as l,o as P,c as A,w as d,b as a,a as e,t as n,f as m,l as p,x as I,y as C,I as N}from"./app.b30fdf72.js";const U={components:{JetInputError:V,AppLayout:v,LoadingButton:x,JetSecondaryButton:k,XInput:w,XCheckbox:B},data(){return{form:this.$inertia.form({name:"",shortname:"",sort_order:"",is_sticky:!1,photo:null}),photoPreview:null}},methods:{addBadge(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("admin.badge.store"),{preserveScroll:!0})},updatePhotoPreview(){const o=new FileReader;o.onload=t=>{this.photoPreview=t.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},j={class:"max-w-6xl px-10 py-12 mx-auto"},E={class:"flex justify-between mb-8"},D={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},L={class:"mt-10 sm:mt-0"},X={class:"md:grid md:grid-cols-3 md:gap-6"},z={class:"md:col-span-1"},M={class:"px-4 sm:px-0"},T={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},J={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},O=e("br",null,null,-1),R={class:"mt-3 text-sm text-gray-600 dark:text-gray-500"},q={class:"mt-5 md:mt-0 md:col-span-2"},F={class:"overflow-hidden shadow sm:rounded-md"},Y={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},H={class:"col-span-6 sm:col-span-4"},K={class:"col-span-6 sm:col-span-2"},Q={class:"col-span-6 sm:col-span-3"},W={class:"flex items-center col-span-6 sm:col-span-3"},Z={class:"col-span-6 sm:col-span-6"},$={for:"badge_img",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},ee={class:"mt-2"},oe={class:"flex justify-end px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6"};function se(o,t,te,re,s,i){const _=l("app-head"),u=l("inertia-link"),c=l("x-input"),g=l("x-checkbox"),h=l("jet-secondary-button"),f=l("jet-input-error"),y=l("loading-button"),b=l("app-layout");return P(),A(b,null,{default:d(()=>[a(_,{title:o.__("Add User Badge")},null,8,["title"]),e("div",j,[e("div",E,[e("h1",D,n(o.__("Add User Badge")),1),a(u,{href:o.route("admin.badge.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"},{default:d(()=>[e("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",L,[e("div",X,[e("div",z,[e("div",M,[e("h3",T,n(o.__("Overview")),1),e("p",J,[m(n(o.__("Badges are something you assign to users for some achievements.")),1),O,m(n(o.__("Eg: You can create a badge for Special User, Top Donator, Most Active etc.")),1)]),e("p",R,n(o.__("By default badges are marked non sticky. Means it will only show when you visit user's profile page. If you want the badge to always display beside username tick the 'Is Sticky' checkbox.")),1)])]),e("div",q,[e("form",{onSubmit:t[5]||(t[5]=p((...r)=>i.addBadge&&i.addBadge(...r),["prevent"]))},[e("div",F,[e("div",Y,[e("div",G,[e("div",H,[a(c,{id:"name",modelValue:s.form.name,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.name=r),label:o.__("Badge Name"),help:o.__("Eg: Special"),error:s.form.errors.name,type:"text",name:"name"},null,8,["modelValue","label","help","error"])]),e("div",K,[a(c,{id:"shortname",modelValue:s.form.shortname,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.shortname=r),label:o.__("Short Name"),help:o.__("Eg: special"),error:s.form.errors.shortname,type:"text",name:"shortname"},null,8,["modelValue","label","help","error"])]),e("div",Q,[a(c,{id:"sort_order",modelValue:s.form.sort_order,"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.sort_order=r),label:o.__("Sort Order"),error:s.form.errors.sort_order,type:"number",name:"sort_order"},null,8,["modelValue","label","error"])]),e("div",W,[a(g,{id:"is_sticky",modelValue:s.form.is_sticky,"onUpdate:modelValue":t[3]||(t[3]=r=>s.form.is_sticky=r),label:o.__("Is Sticky"),help:o.__("Tick if you want this badge to always appear with username"),name:"is_sticky",error:s.form.errors.is_sticky},null,8,["modelValue","label","help","error"])]),e("div",Z,[e("input",{id:"badge_img",ref:"photo",type:"file",class:"hidden",onChange:t[4]||(t[4]=(...r)=>i.updatePhotoPreview&&i.updatePhotoPreview(...r))},null,544),e("label",$,n(o.__("Badge Icon Image (A small square(Eg: 50x50) image is recomended)")),1),I(e("div",ee,[e("span",{class:"block w-20 h-20",style:N("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+s.photoPreview+"');")},null,4)],512),[[C,s.photoPreview]]),a(h,{class:"mt-2 mr-2",type:"button",onClick:p(i.selectNewPhoto,["prevent"])},{default:d(()=>[m(n(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),a(f,{message:s.form.errors.photo,class:"mt-2"},null,8,["message"])])])]),e("div",oe,[a(y,{loading:s.form.processing,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:d(()=>[m(n(o.__("Add Badge")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const pe=S(U,[["render",se]]);export{pe as default};
