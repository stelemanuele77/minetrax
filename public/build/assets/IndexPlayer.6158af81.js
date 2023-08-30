import{I as M,A as C,u as L}from"./AppLayout.54d17dd3.js";import{S as N}from"./ShoutBox.263497ee.js";import{I as B}from"./InfiniteScroll.585da3e1.js";import{S as z}from"./ServerStatusBox.f876c6e8.js";import{u as j}from"./useAuthorizable.7c92a275.js";import{_ as A,c as u,w as h,l as r,o as a,b as d,a as t,t as e,d as n,g as D,F as H,e as p,q as I,n as m,s as _,f as V}from"./app.f75ccb3c.js";import"./CopyToClipboard.4358cfcf.js";const F={components:{ServerStatusBox:z,Icon:M,AppLayout:C,ShoutBox:N,InfiniteScroll:B},props:{players:Object,totalPlayersCount:Number,activePlayersCount:Number,totalPlayTime:{type:[String,Number]},lastScanAt:String},setup(){const{can:s}=j(),{formatTimeAgoToNow:x,formatToDayDateString:i,secondsToHMS:l}=L();return{can:s,formatTimeAgoToNow:x,formatToDayDateString:i,secondsToHMS:l}},data(){return{playersList:this.players}},methods:{loadMorePlayers(){return this.playersList.next_page_url?axios(this.playersList.next_page_url).then(s=>{this.playersList={...s.data,data:[...this.playersList.data,...s.data.data]}}):Promise.resolve()}}},R={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},q={class:"md:flex space-x-4"},E={class:"flex-grow"},O={class:"grid grid-cols-12 gap-4 mb-4"},U={class:"col-span-12 md:col-span-4"},G={class:"flex flex-row bg-white dark:bg-cool-gray-800 shadow rounded p-4"},J=t("div",{class:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-light-blue-100 dark:bg-opacity-10 text-light-blue-500"},[t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})])],-1),K={class:"flex flex-col flex-grow ml-4"},Q={class:"text-sm text-gray-500 dark:text-gray-400"},W={class:"font-bold dark:text-gray-200 text-lg"},X={class:"col-span-12 md:col-span-4"},Y={class:"flex flex-row bg-white dark:bg-cool-gray-800 shadow rounded p-4"},Z=t("div",{class:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 dark:bg-opacity-10 text-green-500"},[t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"})])],-1),$={class:"flex flex-col flex-grow ml-4"},tt={class:"text-sm text-gray-500 dark:text-gray-400"},et={class:"font-bold text-lg dark:text-gray-200"},st={class:"col-span-12 md:col-span-4"},ot={class:"flex flex-row bg-white dark:bg-cool-gray-800 shadow rounded p-4"},at=t("div",{class:"flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-pink-100 dark:bg-opacity-10 text-pink-500"},[t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),nt={class:"flex flex-col flex-grow ml-4"},rt={class:"text-sm text-gray-500 dark:text-gray-400"},it={class:"font-bold text-lg dark:text-gray-200"},lt={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},ct={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},dt={class:"shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 dark:border-none rounded"},_t={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},ht={class:"bg-gray-100 dark:bg-cool-gray-800 text-gray-700 dark:text-gray-200"},pt={scope:"col",class:"px-2 py-3 text-left text-xs font-bold text-center uppercase tracking-wider"},xt={scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"},gt={scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"},ut={scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"},mt={scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"},yt={scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"},ft={scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"},wt={scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"},kt={class:"bg-white dark:bg-cool-gray-800 divide-y divide-gray-200 dark:divide-none"},vt={class:"px-2 py-4 whitespace-nowrap text-center text-sm text-light-blue-400 font-extrabold"},bt={key:0,class:"border-2 rounded text-lg px-2 border-light-blue-300 bg-light-blue-50 dark:bg-transparent"},St={class:"px-3 py-4 whitespace-nowrap"},Pt={class:"flex items-center"},Tt=["content"],Mt=["src"],Ct={class:"px-3 py-4 whitespace-nowrap"},Lt={key:0,class:"flex items-center"},Nt=["content"],Bt=["src"],zt={class:"px-6 py-4 whitespace-nowrap"},jt={class:"flex items-center"},At={class:"flex-shrink-0 h-10 w-10"},Dt=["src"],Ht={class:"ml-4"},It={key:1,class:"text-red-500 italic"},Vt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-700"},Ft={key:0},Rt={key:1,class:"text-gray-700 dark:text-gray-400 italic"},qt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"},Et={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"},Ot={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300"},Ut=["content"],Gt={class:"border-t dark:border-none px-6 py-4 sm:text-center text-gray-700 dark:text-gray-500 italic",colspan:"8"},Jt={key:0},Kt={class:"px-6 py-4 text-center dark:text-gray-300 text-gray-700",colspan:"8"},Qt={class:"hidden md:flex flex-col space-y-4 flex-none w-1/4 h-screen sticky top-5"};function Wt(s,x,i,l,g,y){const f=r("app-head"),w=r("inertia-link"),k=r("icon"),v=r("infinite-scroll"),b=r("server-status-box"),S=r("shout-box"),P=r("app-layout"),c=I("tippy");return a(),u(P,null,{default:h(()=>[d(f,{title:s.__("Players")},null,8,["title"]),t("div",R,[t("div",q,[t("div",E,[t("div",O,[t("div",U,[t("div",G,[J,t("div",K,[t("div",Q,e(s.__("Total Players")),1),t("div",W,e(i.totalPlayersCount),1)])])]),t("div",X,[t("div",Y,[Z,t("div",$,[t("div",tt,e(s.__("Active Players")),1),t("div",et,e(i.activePlayersCount),1)])])]),t("div",st,[t("div",ot,[at,t("div",nt,[t("div",rt,e(s.__("Play Time")),1),t("div",it,e(i.totalPlayTime===0?"0 h":l.secondsToHMS(i.totalPlayTime)),1)])])])]),t("div",lt,[t("div",ct,[t("div",dt,[t("table",_t,[t("thead",ht,[t("tr",null,[t("th",pt,e(s.__("#")),1),t("th",xt,e(s.__("Flag")),1),t("th",gt,e(s.__("Rank")),1),t("th",ut,e(s.__("Name")),1),t("th",mt,e(s.__("Rating")),1),t("th",yt,e(s.__("Score")),1),t("th",ft,e(s.__("Time Played")),1),t("th",wt,e(s.__("Last Seen")),1)])]),t("tbody",kt,[d(v,{"load-more":y.loadMorePlayers},{loading:h(()=>[t("tr",null,[t("td",Gt,e(s.__("Loading more...")),1)])]),default:h(()=>[(a(!0),n(H,null,D(g.playersList.data,(o,T)=>(a(),n("tr",{key:o.uuid,class:m({"bg-gray-50 dark:bg-cool-gray-700 dark:bg-opacity-10":T%2===1})},[t("td",vt,[o.position?(a(),n("span",bt,e(o.position),1)):p("",!0)]),t("td",St,[t("div",Pt,[_((a(),n("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:o.country.name},[t("img",{class:"h-10 w-10",src:o.country.photo_path,alt:""},null,8,Mt)],8,Tt)),[[c]])])]),t("td",Ct,[o.rank?(a(),n("div",Lt,[_((a(),n("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:o.rank.name},[t("img",{class:"h-10 w-10",src:o.rank.photo_url,alt:""},null,8,Bt)],8,Nt)),[[c]])])):p("",!0)]),t("td",zt,[t("div",jt,[t("div",At,[t("img",{class:"h-10 w-10",src:o.avatar_url,alt:""},null,8,Dt)]),t("div",Ht,[_((a(),u(w,{as:"div",href:s.route("player.show",o.uuid),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline",content:o.uuid},{default:h(()=>[o.username?(a(),n("span",{key:0,class:m([o.is_active?"text-gray-700 dark:text-gray-300":"text-gray-500 dark:text-gray-400","font-extrabold"])},e(o.username),3)):(a(),n("span",It,e(s.__("Unknown")),1))]),_:2},1032,["href","content"])),[[c]])])])]),t("td",Vt,[o.rating!=null?(a(),n("span",Ft,[_(d(k,{class:"w-10 h-10 focus:outline-none",name:`rating-${o.rating}`,content:o.rating},null,8,["name","content"]),[[c]])])):(a(),n("span",Rt,e(s.__("none")),1))]),t("td",qt,e(o.total_score),1),t("td",Et,e(l.secondsToHMS(o.play_time,!0)),1),t("td",Ot,[_((a(),n("span",{class:"focus:outline-none",content:l.formatToDayDateString(o.last_seen_at)},[V(e(o.last_seen_at?l.formatTimeAgoToNow(o.last_seen_at):"unknown"),1)],8,Ut)),[[c]])])],2))),128))]),_:1},8,["load-more"]),g.playersList.data.length===0?(a(),n("tr",Jt,[t("td",Kt,e(s.__("No players found.")),1)])):p("",!0)])])])])])]),t("div",Qt,[d(b),d(S)])])])]),_:1})}const oe=A(F,[["render",Wt]]);export{oe as default};
