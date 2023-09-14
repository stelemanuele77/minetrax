import{r as o,x as u,I as c,o as p,d as f,a as g,t as h,b as m,u as d}from"./app-f7b07d6a.js";import{_ as y}from"./Chart-beeb3d98.js";const x={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},_={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},C={__name:"PlayersPerCountryMetricBox",props:{routeName:{type:String,required:!1,default:route("admin.graph.players-per-country")},mapHeight:{type:String,required:!1,default:"410px"}},setup(l){const t=l;let i=o({}),a=o(null),n=o(!0);return u(async()=>{const e=await c.get(t.routeName);n.value=!1,a.value=e.data,i.value={tooltip:{formatter:function(s){const{name:r,value:v}=s.data;return`
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center">
                            <img :alt="name" src="${s.data.image}" class="w-8 h-8 mr-2" />
                            <span class="font-bold">${r}</span>
                        </div>
                        <div class="flex flex-row justify-center items-center">
                            <span class="font-bold">${v}</span>
                            <span class="ml-1">players</span>
                        </div>
                    </div>`}},toolbox:{feature:{restore:{},saveAsImage:{},dataView:{readOnly:!0}}},visualMap:{min:0,max:a.value.max,left:"left",top:"bottom",text:["High","Low"],calculable:!0,inRange:{color:window.colorMode==="dark"?["#e7f1ff","#89baff","#5999ff","#3385ff"]:["#e6eaed","#718cde","#1c46c7","#123395"]}},series:[{name:"Players",type:"map",mapType:"world",roam:!0,label:{show:!1,emphasis:{textStyle:{color:window.colorMode==="dark"?"#fff":"#d7d7d7"}}},itemStyle:{normal:{areaColor:"#fff"},emphasis:{areaColor:"#e6eaed"}},data:a.value.data}]}}),(e,s)=>(p(),f("div",x,[g("h3",_,h(e.__("Player's Country")),1),m(y,{autoresize:!0,options:d(i),height:l.mapHeight,loading:d(n)},null,8,["options","height","loading"])]))}},w={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},b={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},H={__name:"PlayersJoinAddressMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"350px"}},setup(l){const t=l;let i=o({}),a=o(null),n=o(!0);return u(async()=>{const e={};t.servers&&t.servers.length>0&&(e.servers=t.servers);const s=await c.get(route("admin.graph.player-join-addresses",e));n.value=!1,a.value=s.data??[],i.value={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{},dataView:{readOnly:!0}}},xAxis:{type:"category",data:a.value.map(r=>r.name)},yAxis:{type:"value"},series:[{name:"Count",type:"bar",barWidth:"60%",data:a.value.map(r=>r.value)}]}}),(e,s)=>(p(),f("div",w,[g("h3",b,h(e.__("Top Join Addresses")),1),m(y,{options:d(i),height:l.chartHeight,loading:d(n),autoresize:!0},null,8,["options","height","loading"])]))}},A={class:"bg-white dark:bg-cool-gray-800 rounded w-full h-full space-y-2 p-3 shadow"},k={class:"font-extrabold text-gray-800 dark:text-gray-200 flex items-center"},S={__name:"PlayersMinecraftVersionMetricBox",props:{servers:{type:Array,required:!1},chartHeight:{type:String,default:"350px"}},setup(l){const t=l;let i=o({}),a=o(null),n=o(!0);return u(async()=>{const e={};t.servers&&t.servers.length>0&&(e.servers=t.servers);const s=await c.get(route("admin.graph.player-minecraft-versions",e));n.value=!1,a.value=s.data??[],i.value={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{},dataView:{readOnly:!0}}},xAxis:{type:"category",data:a.value.map(r=>r.name)},yAxis:{type:"value"},series:[{name:"Count",type:"bar",barWidth:"60%",data:a.value.map(r=>r.value)}]}}),(e,s)=>(p(),f("div",A,[g("h3",k,h(e.__("Player Client Versions")),1),m(y,{options:d(i),height:l.chartHeight,loading:d(n),autoresize:!0},null,8,["options","height","loading"])]))}};export{C as _,H as a,S as b};
