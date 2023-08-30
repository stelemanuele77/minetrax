import{I as k,A as z,u as M}from"./AppLayout.54d17dd3.js";import{S as j,c as A,W as C,R as B}from"./orbit_controls.aebce7e4.js";import{_ as V}from"./millify.524d1bf5.js";import{_ as L}from"./PlayerSubMenu.707d9e55.js";import{_ as S,c as _,w as u,l as h,o as a,b as y,a as e,s as i,d as o,f as d,t,e as N,q as P}from"./app.f75ccb3c.js";import"./useAuthorizable.7c92a275.js";const T={components:{PlayerSubMenu:L,Icon:k,AppLayout:z},props:{player:Object,canShowPlayerIntel:Boolean},setup(){const{secondsToHMS:l,formatTimeAgoToNow:r,formatToDayDateString:s}=M();return{secondsToHMS:l,formatTimeAgoToNow:r,formatToDayDateString:s,millify:V}},data(){return{playerAnimationEnabled:!0,skinViewer:null}},mounted(){this.skinViewer=new j({canvas:document.getElementById("skin_container"),width:300,height:500,skin:route("player.skin.get",{uuid:this.player.uuid,username:this.player.username})});let l=A(this.skinViewer);l.enableRotate=!0,l.enableZoom=!1,l.enablePan=!1;let r=this.skinViewer.animations.add(C);r.speed=.1;let s=this.skinViewer.animations.add(B);s.speed=.5},methods:{toggle3dPlayerAnimation:function(){this.playerAnimationEnabled?(this.skinViewer.animations.paused=!0,this.playerAnimationEnabled=!1):(this.skinViewer.animations.paused=!1,this.playerAnimationEnabled=!0)}}},H={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto space-y-4"},D={class:"flex justify-between items-center shadow bg-white dark:bg-cool-gray-800 rounded p-3"},R={id:"position",class:"flex flex-col items-center justify-center"},I={class:"flex items-center text-light-blue-400 font-extrabold"},E=["title"],U=["title"],W={class:"text-sm text-gray-400 dark:text-gray-300 font-bold mt-1"},K={id:"rating",class:"flex flex-col items-center justify-center"},O={class:"flex"},q=["title"],F={class:"text-sm text-gray-400 dark:text-gray-300 font-bold mt-1"},J={id:"rank",class:"flex flex-col items-center justify-center"},Z={class:"flex items-center justify-center space-x-2"},G=["alt","src","title"],Q=["title"],X={class:"text-sm text-gray-400 dark:text-gray-300 font-bold mt-1"},Y={id:"country",class:"flex flex-col items-center justify-center"},$=["alt","src","title"],e1=["title"],t1={class:"text-sm text-gray-400 dark:text-gray-300 font-bold mt-1"},s1={class:"flex flex-col-reverse md:flex-row md:justify-between md:space-x-4"},l1={class:"shadow mt-4 md:mt-0 bg-white dark:bg-cool-gray-800 rounded relative flex items-center justify-center"},a1=e("canvas",{id:"skin_container"},null,-1),o1={class:"flex flex-col w-full space-y-4"},n1={key:0,class:"shadow bg-white dark:bg-cool-gray-800 rounded w-full p-2 md:p-5 text-red-400 dark:text-red-500 italic text-center"},i1={class:"shadow bg-white dark:bg-cool-gray-800 rounded w-full p-2 md:p-5"},d1={class:"flex justify-between space-x-2 items-center mb-2"},c1={class:"text-2xl text-gray-800 dark:text-gray-200 font-extrabold"},r1={class:"text-gray-400 font-semibold text-xs md:text-sm"},_1={id:"stats",class:"text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-400 space-y-4"},h1={id:"first",class:"flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700"},v1={class:"flex-1 space-y-4"},f1={class:"flex justify-between"},u1={class:"flex"},y1=e("svg",{class:"h-5 w-5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M7 20l4-16m2 16l4-16M6 9h14M4 15h14","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})],-1),w1={class:"ml-1"},m1={class:"font-bold"},x1={class:"flex justify-between"},g1={class:"flex"},p1=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"})],-1),b1={class:"ml-1"},k1={class:"font-bold"},z1={class:"flex justify-between"},M1={class:"flex"},j1=e("svg",{class:"w-5 h-5 text-orange-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),e("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})],-1),A1={class:"ml-1"},C1={key:0,class:"font-bold"},B1={key:1,class:"italic text-gray-500"},V1={class:"flex flex-1 justify-center items-center"},L1=["src"],S1={class:"flex-1 space-y-4"},N1={class:"flex justify-between"},P1={class:"flex"},T1=e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"})],-1),H1={class:"ml-1"},D1={class:"font-bold"},R1={class:"flex justify-between"},I1={class:"flex"},E1=e("svg",{class:"w-5 h-5 text-pink-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clip-rule":"evenodd"})],-1),U1={class:"ml-1"},W1={class:"font-bold"},K1={class:"flex justify-between"},O1={class:"flex"},q1=e("svg",{class:"w-5 h-5 text-red-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1),F1={class:"ml-1"},J1={class:"font-bold"},Z1={id:"second",class:"flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700 space-x-8"},G1={class:"flex-1 space-y-4"},Q1={class:"flex justify-between"},X1={class:"flex"},Y1=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})],-1),$1={class:"ml-1"},ee={key:0},te={key:1,class:"italic text-gray-500"},se={class:"flex justify-between"},le={class:"flex"},ae=e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clip-rule":"evenodd"})],-1),oe={class:"ml-1"},ne={class:"flex justify-between"},ie={class:"flex"},de=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clip-rule":"evenodd"})],-1),ce={class:"ml-1"},re={class:"flex justify-between"},_e={class:"flex"},he=e("svg",{class:"w-5 h-5 text-gray-700 dark:text-gray-200",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})],-1),ve={class:"ml-1"},fe={class:"flex-1 space-y-4"},ue={class:"flex justify-between"},ye={class:"flex"},we=e("svg",{class:"w-5 h-5 text-orange-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"})],-1),me={class:"ml-1"},xe={key:0},ge={key:1,class:"italic text-gray-500"},pe={class:"flex justify-between"},be={class:"flex"},ke=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clip-rule":"evenodd"})],-1),ze={class:"ml-1"},Me={class:"flex justify-between"},je={class:"flex"},Ae=e("svg",{class:"w-5 h-5 text-yellow-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clip-rule":"evenodd"})],-1),Ce={class:"ml-1"},Be={class:"flex justify-between"},Ve={class:"flex"},Le=e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clip-rule":"evenodd"})],-1),Se={class:"ml-1"},Ne={id:"third",class:"flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700 space-x-8"},Pe={class:"flex-1 space-y-4"},Te={class:"flex justify-between"},He={class:"flex"},De=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clip-rule":"evenodd"})],-1),Re={class:"ml-1"},Ie={class:"flex justify-between"},Ee={class:"flex"},Ue=e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),We={class:"ml-1"},Ke={class:"flex justify-between"},Oe={class:"flex"},qe=e("svg",{class:"w-5 h-5 text-purple-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),Fe={class:"ml-1"},Je={class:"flex justify-between"},Ze={class:"flex"},Ge=e("svg",{class:"w-5 h-5 text-red-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),Qe={class:"ml-1"},Xe={class:"flex-1 space-y-4"},Ye={class:"flex justify-between"},$e={class:"flex"},e0=e("svg",{class:"w-5 h-5 text-purple-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"})],-1),t0={class:"ml-1"},s0={class:"flex justify-between"},l0={class:"flex"},a0=e("svg",{class:"w-5 h-5 text-yellow-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"})],-1),o0={class:"ml-1"},n0={class:"flex justify-between"},i0={class:"flex"},d0=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})],-1),c0={class:"ml-1"},r0={key:1,class:"italic text-gray-500"},_0={class:"flex justify-between"},h0={class:"flex"},v0=e("svg",{class:"w-5 h-5 text-red-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"})],-1),f0={class:"ml-1"},u0={key:0,class:"text-gray-400 italic"},y0=["title"],w0={id:"fourth",class:"flex justify-between pb-4 space-x-8"},m0={class:"flex-1 space-y-4"},x0={class:"flex justify-between"},g0={class:"flex"},p0=e("svg",{class:"w-5 h-5 text-light-blue-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"})],-1),b0={class:"ml-1"},k0=["content"],z0={class:"flex-1 space-y-4"},M0={class:"flex justify-between"},j0={class:"flex"},A0=e("svg",{class:"w-5 h-5 text-green-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),e("path",{"fill-rule":"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"})],-1),C0={class:"ml-1"},B0=["content"];function V0(l,r,s,c,w,f){const m=h("app-head"),x=h("PlayerSubMenu"),v=h("icon"),g=h("inertia-link"),p=h("app-layout"),n=P("tippy");return a(),_(p,null,{default:u(()=>[y(m,{title:l.__(":username - Player Details",{username:s.player.username})},null,8,["title"]),e("div",H,[y(x,{player:s.player,"can-show-player-intel":s.canShowPlayerIntel},null,8,["player","can-show-player-intel"]),e("div",D,[e("div",R,[e("div",I,[s.player.position?i((a(),o("span",{key:0,title:l.__("Position: :position",{position:s.player.position}),class:"border-2 rounded text-2xl px-2 py-1 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},[d(" #"+t(s.player.position),1)],8,E)),[[n]]):i((a(),o("span",{key:1,class:"italic text-sm text-gray-500 dark:text-gray-400",title:l.__("Position: None")},[d(t(l.__("None")),1)],8,U)),[[n]])]),e("span",W,t(l.__("Position")),1)]),e("div",K,[e("div",O,[s.player.rating!=null?i((a(),_(v,{key:0,name:`rating-${s.player.rating}`,title:l.__("Rating: :rating",{rating:s.player.rating}),class:"w-12 h-12 focus:outline-none"},null,8,["name","title"])),[[n]]):i((a(),o("p",{key:1,class:"italic text-sm text-gray-500 dark:text-gray-400",title:l.__("Rating: None")},[d(t(l.__("None")),1)],8,q)),[[n]])]),e("span",F,t(l.__("Rating")),1)]),e("div",J,[e("div",Z,[s.player.rank&&s.player.rank.photo_url?i((a(),o("img",{key:0,alt:s.player.rank.name,src:s.player.rank.photo_url,title:l.__("Rank: :rank",{rank:s.player.rank.name}),class:"h-12 w-12 focus:outline-none"},null,8,G)),[[n]]):i((a(),o("p",{key:1,class:"italic text-sm text-gray-500 dark:text-gray-400",title:l.__("Rank: None")},[d(t(l.__("None")),1)],8,Q)),[[n]])]),e("span",X,t(l.__("Rank")),1)]),e("div",Y,[s.player.country&&s.player.country.name?i((a(),o("img",{key:0,alt:s.player.country.name,src:s.player.country.photo_path,title:l.__("Country: :country",{country:s.player.country.name}),class:"h-12 w-12 -mt-0.5 focus:outline-none"},null,8,$)),[[n]]):i((a(),o("p",{key:1,class:"italic text-sm text-gray-500 dark:text-gray-400",title:l.__("Country: None")},[d(t(l.__("Unknown")),1)],8,e1)),[[n]]),e("span",t1,t(l.__("Country")),1)])]),e("div",s1,[e("div",l1,[e("button",{class:"focus:outline-none absolute top-2 left-2",onClick:r[0]||(r[0]=(...b)=>f.toggle3dPlayerAnimation&&f.toggle3dPlayerAnimation(...b))},[w.playerAnimationEnabled?(a(),_(v,{key:0,class:"w-6 h-6 text-red-300 dark:text-red-500",name:"pause"})):(a(),_(v,{key:1,class:"w-6 h-6 text-green-300 dark:text-green-500",name:"play"}))]),a1]),e("div",o1,[s.player.is_active?N("",!0):(a(),o("div",n1,t(l.__("Player is inactive and will not be considered for rating.")),1)),e("div",i1,[e("div",d1,[e("h1",c1,t(s.player.username),1),e("h2",r1,t(s.player.uuid),1)]),e("div",_1,[e("div",h1,[e("div",v1,[e("div",f1,[e("div",u1,[y1,e("p",w1,t(l.__("Position")),1)]),e("p",m1,t(s.player.position),1)]),e("div",x1,[e("div",g1,[p1,e("p",b1,t(l.__("Score")),1)]),e("p",k1,t(s.player.total_score),1)]),e("div",z1,[e("div",M1,[j1,e("p",A1,t(l.__("Rating")),1)]),e("p",null,[s.player.rating!==null?(a(),o("span",C1,t(s.player.rating),1)):(a(),o("span",B1,t(l.__("None")),1))])])]),e("div",V1,[e("img",{src:s.player.avatar_url,alt:"Avatar",class:"h-30 w-30 rounded"},null,8,L1)]),e("div",S1,[e("div",N1,[e("div",P1,[T1,e("p",H1,t(l.__("Mob Kills")),1)]),e("p",D1,t(s.player.total_mob_kills),1)]),e("div",R1,[e("div",I1,[E1,e("p",U1,t(l.__("Player Kills")),1)]),e("p",W1,t(s.player.total_player_kills),1)]),e("div",K1,[e("div",O1,[q1,e("p",F1,t(l.__("Deaths")),1)]),e("p",J1,t(s.player.total_deaths),1)])])]),e("div",Z1,[e("div",G1,[e("div",Q1,[e("div",X1,[Y1,e("p",$1,t(l.__("Rank")),1)]),e("p",null,[s.player.rank?(a(),o("span",ee,t(s.player.rank.name),1)):(a(),o("span",te,t(l.__("None")),1))])]),e("div",se,[e("div",le,[ae,e("p",oe,t(l.__("Country")),1)]),e("p",null,t(s.player.country.name),1)]),e("div",ne,[e("div",ie,[de,e("p",ce,t(l.__("Total Playtime")),1)]),e("p",null,t(c.secondsToHMS(s.player.play_time,!0)),1)]),e("div",re,[e("div",_e,[he,e("p",ve,t(l.__("Times Slept")),1)]),e("p",null,t(s.player.total_sleep_in_bed),1)])]),e("div",fe,[e("div",ue,[e("div",ye,[we,e("p",me,t(l.__("Next Rank")),1)]),e("p",null,[s.player.next_rank?(a(),o("span",xe,t(s.player.next_rank),1)):(a(),o("span",ge,t(l.__("None")),1))])]),e("div",pe,[e("div",be,[ke,e("p",ze,t(l.__("Sessions")),1)]),e("p",null,t(s.player.total_leave_game),1)]),e("div",Me,[e("div",je,[Ae,e("p",Ce,t(l.__("Total Afktime")),1)]),e("p",null,t(c.secondsToHMS(s.player.afk_time,!0)),1)]),e("div",Be,[e("div",Ve,[Le,e("p",Se,t(l.__("Servers Played")),1)]),e("p",null,t(s.player.servers_count),1)])])]),e("div",Ne,[e("div",Pe,[e("div",Te,[e("div",He,[De,e("p",Re,t(l.__("Items Mined")),1)]),e("p",null,t(s.player.total_mined),1)]),e("div",Ie,[e("div",Ee,[Ue,e("p",We,t(l.__("Items Crafted")),1)]),e("p",null,t(s.player.total_crafted),1)]),e("div",Ke,[e("div",Oe,[qe,e("p",Fe,t(l.__("Items Picked Up")),1)]),e("p",null,t(s.player.total_picked_up),1)]),e("div",Je,[e("div",Ze,[Ge,e("p",Qe,t(l.__("Items Broken")),1)]),e("p",null,t(s.player.total_broken),1)])]),e("div",Xe,[e("div",Ye,[e("div",$e,[e0,e("p",t0,t(l.__("Items Used")),1)]),e("p",null,t(s.player.total_used),1)]),e("div",s0,[e("div",l0,[a0,e("p",o0,t(l.__("Distance Walked")),1)]),e("p",null,t(c.millify(s.player.distance_traveled))+" "+t(l.__("meters")),1)]),e("div",n0,[e("div",i0,[d0,e("p",c0,t(l.__("Claimed By")),1)]),e("p",null,[s.player.owner?(a(),_(g,{key:0,class:"font-bold text-light-blue-400 hover:text-light-blue-600",as:"a",href:l.route("user.public.get",s.player.owner.username)},{default:u(()=>[d(" @"+t(s.player.owner.username),1)]),_:1},8,["href"])):(a(),o("span",r0,t(l.__("None")),1))])]),e("div",_0,[e("div",h0,[v0,e("p",f0,t(l.__("Favorite Server")),1)]),s.player.favorite_server?i((a(),o("p",{key:1,class:"focus:outline-none",title:s.player.favorite_server.hostname},[d(t(s.player.favorite_server.name),1)],8,y0)),[[n]]):(a(),o("p",u0,t(l.__("None")),1))])])]),e("div",w0,[e("div",m0,[e("div",x0,[e("div",g0,[p0,e("p",b0,t(l.__("Joined")),1)]),i((a(),o("p",{class:"ml-1 focus:outline-none",content:c.formatToDayDateString(s.player.first_seen_at)},[d(t(s.player.first_seen_at?c.formatTimeAgoToNow(s.player.first_seen_at):"unknown"),1)],8,k0)),[[n]])])]),e("div",z0,[e("div",M0,[e("div",j0,[A0,e("p",C0,t(l.__("Last Seen")),1)]),i((a(),o("p",{class:"ml-1 focus:outline-none",content:c.formatToDayDateString(s.player.last_seen_at)},[d(t(s.player.last_seen_at?c.formatTimeAgoToNow(s.player.last_seen_at):"unknown"),1)],8,B0)),[[n]])])])])])])])])])]),_:1})}const D0=S(T,[["render",V0]]);export{D0 as default};
