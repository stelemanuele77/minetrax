import{A,I}from"./AppLayout.77db8179.js";import{P as T}from"./Pagination.a8017b98.js";import{_ as S}from"./ConfirmationModal.8f7e9552.js";import{_ as j}from"./SecondaryButton.149b8053.js";import{_ as F}from"./DangerButton.095b9702.js";import{_ as L,z as l,B as V,o as n,c as d,w as r,b as _,a as t,t as s,e as p,d as a,h as w,F as b,f as i,n as J,x as g}from"./app.b30fdf72.js";import"./Modal.439b012a.js";const z={components:{AppLayout:A,Pagination:T,Icon:I,JetConfirmationModal:S,JetSecondaryButton:j,JetDangerButton:F},props:{polls:Object},data(){return{deletePollForm:this.$inertia.form(),pollIsBeingDeleted:null}},methods:{confirmRoleDeletion(e){this.pollIsBeingDeleted=e},deletePoll(){this.deletePollForm.delete(route("admin.poll.delete",this.pollIsBeingDeleted),{preserveScroll:!0,preserveState:!0,onSuccess:()=>this.pollIsBeingDeleted=null})}}},E={class:"py-12 px-10 max-w-7xl mx-auto"},O={class:"flex justify-between mb-8"},R={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},q={class:"flex"},M={class:"hidden md:inline"},Q={class:"flex flex-col"},U={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},$={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},G={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none sm:rounded-lg"},H={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},K={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-300"},W={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},X={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},Y={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},Z={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},ee={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},te={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},se={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},oe={scope:"col",class:"px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"},ne={scope:"col",class:"relative px-6 py-3"},ae={class:"sr-only"},ie={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},re={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},le={class:"px-3 py-4"},de={class:"items-center"},ce={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},_e={class:"px-3 py-4 text-sm"},pe={class:"px-2 mr-1 mb-1 inline-flex text-xs leading-5 font-semibold rounded bg-gray-100 text-gray-800 dark:bg-cool-gray-700 dark:text-gray-300"},me={key:1,class:"italic text-gray-500"},ue={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ye=["content"],he={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ge=["content"],xe={key:1,class:"italic"},fe={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},ke=["content"],we={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"},be={key:0},ve={key:1,class:"italic text-red-600"},De={class:"px-3 py-4 whitespace-nowrap text-sm text-gray-500 align-middle text-center"},Be={class:"px-3 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-gray-400"},Pe=["onClick"],Ce={key:0},Ne={class:"px-6 py-4 text-center dark:text-gray-400",colspan:"9"};function Ae(e,m,u,Ie,c,x){const v=l("app-head"),y=l("inertia-link"),f=l("icon"),D=l("pagination"),B=l("jet-secondary-button"),P=l("jet-danger-button"),C=l("jet-confirmation-modal"),N=l("app-layout"),h=V("tippy");return n(),d(N,null,{default:r(()=>[_(v,{title:"Polls Administration"}),t("div",E,[t("div",O,[t("h1",R,s(e.__("Polls")),1),t("div",q,[e.can("create polls")?(n(),d(y,{key:0,href:e.route("admin.poll.create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:r(()=>[t("span",null,s(e.__("Create New")),1),t("span",M,"\xA0"+s(e.__("Poll")),1)]),_:1},8,["href"])):p("",!0)])]),t("div",Q,[t("div",U,[t("div",$,[t("div",G,[t("table",H,[t("thead",K,[t("tr",null,[t("th",W,s(e.__("#")),1),t("th",X,s(e.__("Question")),1),t("th",Y,s(e.__("Options")),1),t("th",Z,s(e.__("Started At")),1),t("th",ee,s(e.__("End At")),1),t("th",te,s(e.__("Created At")),1),t("th",se,s(e.__("Created By")),1),t("th",oe,s(e.__("Locked")),1),t("th",ne,[t("span",ae,s(e.__("Actions")),1)])])]),t("tbody",ie,[(n(!0),a(b,null,w(u.polls.data,o=>(n(),a("tr",{key:o.id},[t("td",re,s(o.id),1),t("td",le,[t("div",de,[t("div",ce,s(o.question),1)])]),t("td",_e,[o.options.length>0?(n(!0),a(b,{key:0},w(o.options,k=>(n(),a("span",pe,s(k.name),1))),256)):(n(),a("span",me,s(e.__("No options.")),1))]),t("td",ue,[g((n(),a("span",{class:"focus:outline-none",content:e.formatToDayDateString(o.started_at)},[i(s(e.formatTimeAgoToNow(o.started_at)),1)],8,ye)),[[h]])]),t("td",he,[o.closed_at?g((n(),a("span",{key:0,class:"focus:outline-none",content:e.formatToDayDateString(o.closed_at)},[i(s(e.formatTimeAgoToNow(o.closed_at)),1)],8,ge)),[[h]]):(n(),a("span",xe,s(e.__("None")),1))]),t("td",fe,[g((n(),a("span",{class:"focus:outline-none",content:e.formatToDayDateString(o.created_at)},[i(s(e.formatTimeAgoToNow(o.created_at)),1)],8,ke)),[[h]])]),t("td",we,[o.creator?(n(),a("span",be,s(o.creator.username),1)):(n(),a("span",ve,s(e.__("None")),1))]),t("td",De,[o.is_closed?(n(),d(f,{key:0,class:"text-green-500",name:"check-circle"})):(n(),d(f,{key:1,class:"text-red-500",name:"cross-circle"}))]),t("td",Be,[e.can("update polls")&&!o.is_closed?(n(),d(y,{key:0,as:"button",method:"put",href:e.route("admin.poll.lock",o.id),class:"text-yellow-600 hover:text-yellow-900"},{default:r(()=>[i(s(e.__("Lock")),1)]),_:2},1032,["href"])):p("",!0),e.can("update polls")&&o.is_closed?(n(),d(y,{key:1,as:"button",method:"put",href:e.route("admin.poll.unlock",o.id),class:"text-green-600 hover:text-green-900"},{default:r(()=>[i(s(e.__("Unlock")),1)]),_:2},1032,["href"])):p("",!0),i(" / "),e.can("delete polls")?(n(),a("button",{key:2,class:"text-red-600 hover:text-red-900 focus:outline-none",onClick:k=>x.confirmRoleDeletion(o.id)},s(e.__("Delete")),9,Pe)):p("",!0)])]))),128)),u.polls.data.length===0?(n(),a("tr",Ce,[t("td",Ne,s(e.__("No polls found.")),1)])):p("",!0)])])])])])]),_(D,{links:u.polls.links},null,8,["links"])]),_(C,{show:!!c.pollIsBeingDeleted,onClose:m[1]||(m[1]=o=>c.pollIsBeingDeleted=null)},{title:r(()=>[i(s(e.__("Delete Poll")),1)]),content:r(()=>[i(s(e.__("Are you sure you would like to delete this Poll? It is not reversible.")),1)]),footer:r(()=>[_(B,{onClick:m[0]||(m[0]=o=>c.pollIsBeingDeleted=null)},{default:r(()=>[i(s(e.__("Nevermind")),1)]),_:1}),_(P,{class:J(["ml-2",{"opacity-25":c.deletePollForm.processing}]),disabled:c.deletePollForm.processing,onClick:x.deletePoll},{default:r(()=>[i(s(e.__("Delete Poll")),1)]),_:1},8,["class","disabled","onClick"])]),_:1},8,["show"])]),_:1})}const ze=L(z,[["render",Ae]]);export{ze as default};
