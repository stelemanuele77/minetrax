import{I as D,A as P}from"./AppLayout.c9f2eed2.js";import{P as B}from"./Pagination.9d51ef17.js";import{_ as N}from"./ConfirmationModal.6c11dd2c.js";import{_ as j}from"./SecondaryButton.0f9f2f72.js";import{_ as S}from"./DangerButton.2e5748b8.js";import{_ as A,z as c,B as F,o as a,c as n,w as i,b as d,a as e,t as s,e as u,d as p,h as T,F as V,f as r,n as I,x as J}from"./app.69bff178.js";import"./Modal.81eef00f.js";const z={components:{Icon:D,AppLayout:P,Pagination:B,JetConfirmationModal:N,JetSecondaryButton:j,JetDangerButton:S},props:{customPages:Object},data(){return{deleteCustomPageForm:this.$inertia.form(),customPageBeingDeleted:null}},methods:{confirmCustomPageDeletion(t){this.customPageBeingDeleted=t},deleteNews(){this.deleteCustomPageForm.delete(route("admin.custom-page.delete",this.customPageBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.customPageBeingDeleted=null})}}},E={class:"py-12 px-10 max-w-7xl mx-auto"},L={class:"flex justify-between mb-8"},M={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},O={class:"flex"},$={class:"hidden md:inline"},q={class:"flex flex-col"},G={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},H={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},K={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},Q={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},R={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-200"},U={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},W={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},X={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},Y={scope:"col",class:"px-6 py-3 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider"},Z={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-6 py-3 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-6 py-3 whitespace-nowrap text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},oe={scope:"col",class:"relative px-6 py-3"},ae={class:"sr-only"},ne={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},ie={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},re={class:"px-6 py-4 whitespace-normal w-1/2"},ce={class:"flex items-center"},le={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},de={class:"px-6 py-4 whitespace-normal w-1/2"},_e={class:"flex items-center"},pe={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},me={class:"px-6 py-4 whitespace-normal w-1/2"},ue={class:"flex items-center"},he={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},ge={class:"px-9 py-4 text-sm text-gray-500"},xe={class:"px-9 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},ye={class:"px-9 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},fe={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},we=["content"],ke={class:"px-6 py-4 whitespace-nowrap dark:text-gray-400 text-right text-sm font-medium"},ve=["onClick"],be={key:0},Ce={class:"border-t px-6 py-4 text-center",colspan:"7"};function De(t,m,h,Pe,_,x){const y=c("app-head"),g=c("inertia-link"),l=c("icon"),f=c("pagination"),w=c("jet-secondary-button"),k=c("jet-danger-button"),v=c("jet-confirmation-modal"),b=c("app-layout"),C=F("tippy");return a(),n(b,null,{default:i(()=>[d(y,{title:"Custom Pages Administration"}),e("div",E,[e("div",L,[e("h1",M,s(t.__("Custom Pages")),1),e("div",O,[t.can("create custom_pages")?(a(),n(g,{key:0,href:t.route("admin.custom-page.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:i(()=>[e("span",null,s(t.__("Create")),1),e("span",$,"\xA0"+s(t.__("Custom Page")),1)]),_:1},8,["href"])):u("",!0)])]),e("div",q,[e("div",G,[e("div",H,[e("div",K,[e("table",Q,[e("thead",R,[e("tr",null,[e("th",U,s(t.__("#")),1),e("th",W,s(t.__("Title")),1),e("th",X,s(t.__("Path")),1),e("th",Y,s(t.__("Page Type")),1),e("th",Z,s(t.__("Visible")),1),e("th",ee,s(t.__("In Navbar")),1),e("th",te,s(t.__("Sidebar")),1),e("th",se,s(t.__("Created")),1),e("th",oe,[e("span",ae,s(t.__("Actions")),1)])])]),e("tbody",ne,[(a(!0),p(V,null,T(h.customPages.data,o=>(a(),p("tr",{key:o.id},[e("td",ie,s(o.id),1),e("td",re,[e("div",ce,[e("div",le,s(o.title),1)])]),e("td",de,[e("div",_e,[e("div",pe,s(o.path),1)])]),e("td",me,[e("div",ue,[e("div",he,s(o.is_redirect?"redirect":o.is_html_page?"html":"markdown"),1)])]),e("td",ge,[o.is_visible?(a(),n(l,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle"})):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",xe,[o.is_in_navbar?(a(),n(l,{key:0,class:"text-green-500",name:"check-circle"})):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",ye,[o.is_sidebar_visible?(a(),n(l,{key:0,class:"text-green-500 focus:outline-none",name:"check-circle"})):(a(),n(l,{key:1,class:"text-red-500",name:"cross-circle"}))]),e("td",fe,[J((a(),p("span",{class:"focus:outline-none",content:t.formatToDayDateString(o.created_at)},[r(s(t.formatTimeAgoToNow(o.created_at)),1)],8,we)),[[C]])]),e("td",ke,[d(g,{as:"a",href:t.route("custom-page.show",o.path),class:"text-blue-600 hover:text-blue-900"},{default:i(()=>[r(s(t.__("View")),1)]),_:2},1032,["href"]),r(" / "),t.can("update news")?(a(),n(g,{key:0,as:"a",href:t.route("admin.custom-page.edit",o.id),class:"text-yellow-600 hover:text-yellow-900"},{default:i(()=>[r(s(t.__("Edit")),1)]),_:2},1032,["href"])):u("",!0),r(" / "),t.can("delete custom_pages")?(a(),p("button",{key:1,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:Be=>x.confirmCustomPageDeletion(o.id)},s(t.__("Delete")),9,ve)):u("",!0)])]))),128)),h.customPages.data.length===0?(a(),p("tr",be,[e("td",Ce,s(t.__("No custom pages found.")),1)])):u("",!0)])])])])])]),d(f,{links:h.customPages.links},null,8,["links"])]),d(v,{show:!!_.customPageBeingDeleted,onClose:m[1]||(m[1]=o=>_.customPageBeingDeleted=null)},{title:i(()=>[r(s(t.__("Delete Page")),1)]),content:i(()=>[r(s(t.__("Are you sure you would like to delete this Page?")),1)]),footer:i(()=>[d(w,{onClick:m[0]||(m[0]=o=>_.customPageBeingDeleted=null)},{default:i(()=>[r(s(t.__("Nevermind")),1)]),_:1}),d(k,{class:I(["ml-2",{"opacity-25":_.deleteCustomPageForm.processing}]),disabled:_.deleteCustomPageForm.processing,onClick:x.deleteNews},{default:i(()=>[r(s(t.__("Delete Page")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const Ie=A(z,[["render",De]]);export{Ie as default};
