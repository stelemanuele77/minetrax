import{A as k}from"./AppLayout.77db8179.js";import{_ as P}from"./InputError.ac112704.js";import{_ as N}from"./SecondaryButton.149b8053.js";import{L as V}from"./LoadingButton.59398738.js";import{X as C}from"./XInput.df8a41e7.js";import{e as j}from"./easymde.b34972f8.js";import{X as E}from"./XSelect.17ae1ab7.js";import{_ as U,z as l,o as S,c as D,w as m,b as r,a as e,t as i,l as p,x as c,C as I,y as M,I as A,f as u,G as _}from"./app.b30fdf72.js";const B={components:{XSelect:E,AppLayout:k,JetInputError:P,LoadingButton:V,JetSecondaryButton:N,XInput:C},props:{news:Object},data(){return{form:this.$inertia.form({title:this.news.title,body:this.news.body,type:this.news.type.value,is_published:!!this.news.published_at,is_pinned:this.news.is_pinned,photo:null,_method:"PUT"}),photoPreview:null,easyMDE:null}},mounted(){this.easyMDE=new j({previewClass:"editor-preview prose max-w-none"})},methods:{addNews(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.body=this.easyMDE.value(),this.form.post(route("admin.news.update",this.news.id),{})},updatePhotoPreview(){const s=new FileReader;s.onload=o=>{this.photoPreview=o.target.result},s.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},L={class:"py-12 px-10 max-w-6xl mx-auto"},T={class:"flex justify-between mb-8"},X={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},z={class:"mt-10 sm:mt-0"},O={class:"md:grid md:grid-cols-3 md:gap-6"},G={class:"md:col-span-1"},J={class:"px-4 sm:px-0"},R={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},F={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},q={class:"mt-5 md:mt-0 md:col-span-2"},H={class:"shadow overflow-hidden sm:rounded-md"},K={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},Q={class:"grid grid-cols-6 gap-6"},W={class:"col-span-6 sm:col-span-6"},Y={class:"col-span-6 sm:col-span-6"},Z={class:"col-span-6 sm:col-span-6"},$={class:"col-span-6 sm:col-span-3"},ee={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},se={class:"mt-2"},te={class:"flex items-center col-span-6 sm:col-span-3"},oe={class:"text-base font-medium text-gray-900 dark:text-gray-400"},ne={class:"mt-4 flex space-x-4"},re={class:"flex items-start"},ie={class:"flex items-center h-5"},le={class:"ml-3 text-sm"},de={for:"is_published",class:"font-medium text-gray-700 dark:text-gray-300"},ae={class:"flex items-start"},me={class:"flex items-center h-5"},ce={class:"ml-3 text-sm"},pe={for:"is_pinned",class:"font-medium text-gray-700 dark:text-gray-300"},ue={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function _e(s,o,h,he,t,d){const f=l("app-head"),g=l("inertia-link"),b=l("x-select"),y=l("x-input"),a=l("jet-input-error"),w=l("jet-secondary-button"),x=l("loading-button"),v=l("app-layout");return S(),D(v,null,{default:m(()=>[r(f,{title:`Edit News #${h.news.id}`},null,8,["title"]),e("div",L,[e("div",T,[e("h1",X,i(s.__("Edit News")),1),r(g,{href:s.route("admin.news.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:m(()=>[e("span",null,i(s.__("Cancel")),1)]),_:1},8,["href"])]),e("div",z,[e("div",O,[e("div",G,[e("div",J,[e("h3",R,i(s.__("Overview")),1),e("p",F,i(s.__("In news you can do announcements or other generic news about your server.")),1)])]),e("div",q,[e("form",{onSubmit:o[6]||(o[6]=p((...n)=>d.addNews&&d.addNews(...n),["prevent"]))},[e("div",H,[e("div",K,[e("div",Q,[e("div",W,[r(b,{id:"type",modelValue:t.form.type,"onUpdate:modelValue":o[0]||(o[0]=n=>t.form.type=n),name:"type",error:t.form.errors.type,label:s.__("News Category"),"select-list":{0:s.__("General"),1:s.__("Announcement"),2:s.__("Event")}},null,8,["modelValue","error","label","select-list"])]),e("div",Y,[r(y,{id:"title",modelValue:t.form.title,"onUpdate:modelValue":o[1]||(o[1]=n=>t.form.title=n),label:s.__("Title"),error:t.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),e("div",Z,[c(e("textarea",{id:"body","onUpdate:modelValue":o[2]||(o[2]=n=>t.form.body=n),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[I,t.form.body]]),r(a,{message:t.form.errors.body,class:"mt-2"},null,8,["message"])]),e("div",$,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:o[3]||(o[3]=(...n)=>d.updatePhotoPreview&&d.updatePhotoPreview(...n))},null,544),e("label",ee,i(s.__("Image")),1),c(e("div",se,[e("span",{class:"block rounded w-48 h-32",style:A("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+t.photoPreview+"');")},null,4)],512),[[M,t.photoPreview]]),r(w,{class:"mt-2 mr-2",type:"button",onClick:p(d.selectNewPhoto,["prevent"])},{default:m(()=>[u(i(s.__("Select A New Image")),1)]),_:1},8,["onClick"]),r(a,{message:t.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",te,[e("fieldset",null,[e("legend",oe,i(s.__("Options")),1),e("div",ne,[e("div",re,[e("div",ie,[c(e("input",{id:"is_published","onUpdate:modelValue":o[4]||(o[4]=n=>t.form.is_published=n),name:"is_published",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[_,t.form.is_published]])]),e("div",le,[e("label",de,i(s.__("Published")),1)])]),e("div",ae,[e("div",me,[c(e("input",{id:"is_pinned","onUpdate:modelValue":o[5]||(o[5]=n=>t.form.is_pinned=n),name:"is_pinned",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[_,t.form.is_pinned]])]),e("div",ce,[e("label",pe,i(s.__("Pinned")),1)])])]),r(a,{message:t.form.errors.is_pinned,class:"mt-2"},null,8,["message"]),r(a,{message:t.form.errors.is_published,class:"mt-2"},null,8,["message"])])])])]),e("div",ue,[r(x,{loading:t.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[u(i(s.__("Update News")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const Pe=U(B,[["render",_e]]);export{Pe as default};
