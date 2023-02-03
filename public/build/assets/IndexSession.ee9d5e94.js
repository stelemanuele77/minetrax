import{A as u}from"./AppLayout.77db8179.js";import{P as y}from"./Pagination.a8017b98.js";import{_ as f,z as c,B as g,o as a,c as n,w as d,b as l,a as t,t as e,d as r,h as v,F as w,e as k,x as b,I as A}from"./app.b30fdf72.js";const B={components:{AppLayout:u,Pagination:y},props:{sessions:Object},data(){return{customPageBeingDeleted:null}}},D={class:"py-12 px-10 max-w-7xl mx-auto"},P={class:"flex justify-between mb-8"},S={class:"font-bold text-3xl text-gray-500 dark:text-gray-400"},C={class:"flex flex-col"},N={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},j={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},I={class:"shadow overflow-hidden border-b border-gray-200 dark:border-none dark:text-gray-600 sm:rounded-lg"},L={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},V={class:"bg-gray-50 dark:bg-cool-gray-800 text-gray-500 dark:text-gray-200"},z={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},F={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},U={scope:"col",class:"w-6 px-6 py-3 text-left text-xs font-medium uppercase whitespace-nowrap tracking-wider"},$={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},E={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},O={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},q={scope:"col",class:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"},G={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-gray-700"},H={class:"px-3 py-4 whitespace-nowrap"},J={class:"flex items-center justify-center"},K=["content"],M=["src"],Q={class:"px-6 py-4 whitespace-normal"},R={class:"flex-shrink-0 h-10 w-10 mr-2"},T=["src"],W={class:"flex-col"},X={class:"text-sm text-gray-500"},Y={key:1,class:"flex items-center italic text-sm text-gray-500 dark:text-gray-400"},Z={class:"px-6 py-4 whitespace-normal"},tt={class:"flex items-center"},et={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},st=["href"],ot={class:"px-6 py-4 whitespace-normal"},at={class:"flex items-center"},rt={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},ct={class:"px-6 py-4 whitespace-normal"},it={class:"flex items-center"},nt={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},dt={class:"px-6 py-4 whitespace-normal"},lt={class:"flex items-center"},_t={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},pt={class:"px-6 py-4 whitespace-normal"},mt={class:"flex items-center"},ht={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},xt={key:0},ut={class:"border-t px-6 py-4 text-center dark:text-gray-400",colspan:"7"};function yt(o,ft,i,gt,vt,wt){const _=c("app-head"),p=c("inertia-link"),m=c("pagination"),h=c("app-layout"),x=g("tippy");return a(),n(h,null,{default:d(()=>[l(_,{title:o.__("Active User Sessions")},null,8,["title"]),t("div",D,[t("div",P,[t("h1",S,e(o.__("Active Sessions")),1)]),t("div",C,[t("div",N,[t("div",j,[t("div",I,[t("table",L,[t("thead",V,[t("tr",null,[t("th",z,e(o.__("Country")),1),t("th",F,e(o.__("User")),1),t("th",U,e(o.__("IP Address")),1),t("th",$,e(o.__("Device")),1),t("th",E,e(o.__("Platform")),1),t("th",O,e(o.__("Browser")),1),t("th",q,e(o.__("Last Activity")),1)])]),t("tbody",G,[(a(!0),r(w,null,v(i.sessions.data,s=>(a(),r("tr",{key:s.id},[t("td",H,[t("div",J,[b((a(),r("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:s.country.name},[t("img",{class:"h-10 w-10",src:s.country.photo_path,alt:""},null,8,M)],8,K)),[[x]])])]),t("td",Q,[s.user?(a(),n(p,{key:0,href:o.route("user.public.get",s.user.username),class:"flex items-center"},{default:d(()=>[t("div",R,[t("img",{class:"h-10 w-10 rounded-full",src:s.user.profile_photo_url,alt:"Avatar"},null,8,T)]),t("div",W,[t("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300 whitespace-nowrap truncate",style:A([s.user.roles[0].color?{color:s.user.roles[0].color}:null])},e(s.user.name),5),t("div",X," @"+e(s.user.username),1)])]),_:2},1032,["href"])):(a(),r("div",Y,e(o.__("Anonymous")),1))]),t("td",Z,[t("div",tt,[t("div",et,[t("a",{class:"hover:underline",target:"_blank",href:`https://whois.domaintools.com/${s.ip_address}`},e(s.ip_address),9,st)])])]),t("td",ot,[t("div",at,[t("div",rt,e(s.agent.device),1)])]),t("td",ct,[t("div",it,[t("div",nt,e(s.agent.platform)+" "+e(s.agent.platform_version),1)])]),t("td",dt,[t("div",lt,[t("div",_t,e(s.agent.browser)+" "+e(s.agent.browser_version),1)])]),t("td",pt,[t("div",mt,[t("div",ht,e(s.last_active),1)])])]))),128)),i.sessions.data.length===0?(a(),r("tr",xt,[t("td",ut,e(o.__("No active sessions found.")),1)])):k("",!0)])])])])])]),l(m,{links:i.sessions.links},null,8,["links"])])]),_:1})}const Bt=f(B,[["render",yt]]);export{Bt as default};
