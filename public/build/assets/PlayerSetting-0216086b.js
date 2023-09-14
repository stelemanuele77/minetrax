import{L}from"./LoadingButton-f81499a6.js";import{X as N}from"./XInput-1f901d8a.js";import{X as M}from"./XCheckbox-1a73bf75.js";import{X as B}from"./XTextarea-f595b1b6.js";import{I as X,_ as q,T as z,l as b,o as n,c as K,w as S,b as h,a as o,t as l,i as G,j as y,m as U,d as _,F as x,g as v,e as d,f as m,bF as w}from"./app-f7b07d6a.js";import{_ as J}from"./AdminLayout-1419fb44.js";import"./AppLayout-ec40e08f.js";import"./useAuthorizable-f27aaf5d.js";var Q=Object.defineProperty,W=Object.prototype.hasOwnProperty,F=Object.getOwnPropertySymbols,Y=Object.prototype.propertyIsEnumerable,R=(s,e,r)=>e in s?Q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,f=(s,e)=>{for(var r in e||(e={}))W.call(e,r)&&R(s,r,e[r]);if(F)for(var r of F(e))Y.call(e,r)&&R(s,r,e[r]);return s};const k=s=>s===void 0,T=s=>Array.isArray(s),I=s=>s&&typeof s.size=="number"&&typeof s.type=="string"&&typeof s.slice=="function",j=(s,e,r,i)=>((e=e||{}).indices=!k(e.indices)&&e.indices,e.nullsAsUndefineds=!k(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!k(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!k(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,k(s)||(s===null?e.nullsAsUndefineds||r.append(i,""):(t=>typeof t=="boolean")(s)?e.booleansAsIntegers?r.append(i,s?1:0):r.append(i,s):T(s)?s.length?s.forEach((t,p)=>{const g=i+"["+(e.indices?p:"")+"]";j(t,e,r,g)}):e.allowEmptyArrays&&r.append(i+"[]",""):(t=>t instanceof Date)(s)?r.append(i,s.toISOString()):!(t=>t===Object(t))(s)||(t=>I(t)&&typeof t.name=="string"&&(typeof t.lastModifiedDate=="object"||typeof t.lastModified=="number"))(s)||I(s)?r.append(i,s):Object.keys(s).forEach(t=>{const p=s[t];if(T(p))for(;t.length>2&&t.lastIndexOf("[]")===t.length-2;)t=t.substring(0,t.length-2);j(p,e,r,i?i+"["+t+"]":t)})),r);var Z={serialize:j};function O(s){if(s===null||typeof s!="object")return s;const e=Array.isArray(s)?[]:{};return Object.keys(s).forEach(r=>{e[r]=O(s[r])}),e}function H(s){return Array.isArray(s)?s:[s]}function C(s){return s instanceof File||s instanceof Blob||s instanceof FileList||typeof s=="object"&&s!==null&&Object.values(s).find(e=>C(e))!==void 0}class ${constructor(){this.errors={},this.errors={}}set(e,r){typeof e=="object"?this.errors=e:this.set(f(f({},this.errors),{[e]:H(r)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some(r=>this.has(r))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return H(this.errors[e]||[])}only(...e){const r=[];return e.forEach(i=>{const t=this.get(i);t&&r.push(t)}),r}flatten(){return Object.values(this.errors).reduce((e,r)=>e.concat(r),[])}clear(e){const r={};e&&Object.keys(this.errors).forEach(i=>{i!==e&&(r[i]=this.errors[i])}),this.set(r)}}class u{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new $,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,O(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach(r=>{this[r]=e[r]})}data(){return this.keys().reduce((e,r)=>f(f({},e),{[r]:this[r]}),{})}keys(){return Object.keys(this).filter(e=>!u.ignore.includes(e))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},u.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(e=>!u.ignore.includes(e)).forEach(e=>{this[e]=O(this.originalData[e])})}get(e,r={}){return this.submit("get",e,r)}post(e,r={}){return this.submit("post",e,r)}patch(e,r={}){return this.submit("patch",e,r)}put(e,r={}){return this.submit("put",e,r)}delete(e,r={}){return this.submit("delete",e,r)}submit(e,r,i={}){return this.startProcessing(),i=f({data:{},params:{},url:this.route(r),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},i),e.toLowerCase()==="get"?i.params=f(f({},this.data()),i.params):(i.data=f(f({},this.data()),i.data),C(i.data)&&!i.transformRequest&&(i.transformRequest=[t=>Z.serialize(t)])),new Promise((t,p)=>{(u.axios||X).request(i).then(g=>{this.finishProcessing(),t(g)}).catch(g=>{this.handleErrors(g),p(g)})})}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&typeof e.data=="object"?e.data.errors?f({},e.data.errors):e.data.message?{error:e.data.message}:f({},e.data):{error:u.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,r={}){let i=e;return Object.prototype.hasOwnProperty.call(u.routes,e)&&(i=decodeURI(u.routes[e])),typeof r!="object"&&(r={id:r}),Object.keys(r).forEach(t=>{i=i.replace(`{${t}}`,r[t])}),i}onKeydown(e){const r=e.target;r.name&&this.errors.clear(r.name)}}u.routes={},u.errorMessage="Something went wrong. Please try again.",u.recentlySuccessfulTimeout=2e3,u.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const ee={components:{AdminLayout:J,XTextarea:B,XCheckbox:M,LoadingButton:L,XInput:N},props:{settings:Object,variables_for_rating_static:Object,variables_for_score_static:Object,variables_for_score_dynamic:Object,variables_for_rating_dynamic:Object,math_functions_for_rating:Object},data(){return{showHelpForRating:!1,showHelpForScore:!1,form:z({is_custom_rating_enabled:this.settings.is_custom_rating_enabled,custom_rating_expression:this.settings.custom_rating_expression,last_seen_day_for_active:this.settings.last_seen_day_for_active,is_custom_score_enabled:this.settings.is_custom_score_enabled,custom_score_expression:this.settings.custom_score_expression,show_player_intel_to:this.settings.show_player_intel_to}),rating_expression_validation_form:new u({player_username:null,custom_rating_expression:null}),validator_rating_value:null,validator_rating_exception:null,score_expression_validation_form:new u({player_username:null,custom_score_expression:null}),validator_score_value:null,validator_score_exception:null}},methods:{savePlayerSetting(){this.form.post(route("admin.setting.player.update"),{preserveScroll:!0,onFinish:()=>{this.validator_rating_value=null,this.validator_rating_exception=null,this.validator_score_value=null,this.validator_score_exception=null,this.rating_expression_validation_form.errors.clear(),this.score_expression_validation_form.errors.clear()},onSuccess:()=>{this.form.clearErrors(),this.rating_expression_validation_form.errors.clear(),this.score_expression_validation_form.errors.clear()}})},validateRatingExpression(){this.rating_expression_validation_form.custom_rating_expression=this.form.custom_rating_expression,this.rating_expression_validation_form.post(route("admin.setting.player.validate-rating-expression")).then(s=>{this.validator_rating_value=s.data.rating,this.validator_rating_exception=null}).catch(s=>{s.response.status!==422?(this.validator_rating_value=null,this.validator_rating_exception=s.response.data.message):(this.validator_rating_value=null,this.validator_rating_exception=null)}).finally(()=>{this.form.clearErrors()})},validateScoreExpression(){this.score_expression_validation_form.custom_score_expression=this.form.custom_score_expression,this.score_expression_validation_form.post(route("admin.setting.player.validate-score-expression")).then(s=>{this.validator_score_value=s.data.score,this.validator_score_exception=null}).catch(s=>{s.response.status!==422?(this.validator_score_value=null,this.validator_score_exception=s.response.data.message):(this.validator_score_value=null,this.validator_score_exception=null)}).finally(()=>{this.form.clearErrors()})}}},se={class:"py-12 px-10 max-w-6xl mx-auto flex"},te={class:"flex-1"},oe={class:"flex flex-col w-full"},re={class:"bg-white dark:bg-cool-gray-800 shadow w-full rounded"},le={class:"px-6 py-4 border-b dark:border-gray-700 dark:text-gray-300 font-bold"},ae={class:"mt-10 sm:mt-0"},ie={class:"md:grid md:grid-cols-3 md:gap-6"},ne={class:"mt-5 md:mt-0 md:col-span-3"},_e={class:"shadow overflow-hidden sm:rounded-md"},ce={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},de={class:"grid grid-cols-6 gap-6"},ue={class:"col-span-6 sm:col-spam-4"},pe={class:"col-span-6 sm:col-span-6"},he={class:"col-span-6 sm:col-span-6"},me={key:0,class:"col-span-6 text-gray-800"},fe={key:0,class:"flex flex-col dark:text-gray-400"},ge={class:"font-bold"},ye={class:"list-disc list px-4"},be={class:"font-bold"},xe={key:1,class:"flex flex-col mt-2 dark:text-gray-400"},ve={class:"font-bold"},we={class:"list-disc list px-4"},ke={class:"font-bold"},Se={key:2,class:"flex flex-col mt-2 dark:text-gray-400"},Ae={class:"font-bold"},Ve={class:"list-disc list px-4"},je={class:"font-bold"},Oe={key:1,class:"col-span-6 sm:col-span-6 flex flex-col text-sm w-3/5 p-4 border-2 border-gray-200 dark:border-gray-700 rounded"},Ee={class:"text-gray-500 dark:text-gray-400 text-center text-sm font-semibold mb-4 -mt-7 bg-white dark:bg-cool-gray-800 w-28"},Pe={class:"flex"},Ue={key:0,class:"p-2 mt-1 text-center bg-green-500 font-semibold rounded text-white"},Fe={class:"font-bold"},Re={key:1,class:"p-2 mt-1 text-center bg-red-500 font-semibold rounded text-white"},Te={class:"col-span-6 sm:col-span-6 border-t border-gray-300 dark:border-gray-700 pt-4"},Ie={class:"col-span-6 sm:col-span-6"},He={key:2,class:"col-span-6 text-gray-800"},Ce={key:0,class:"flex flex-col dark:text-gray-400"},De={class:"font-bold"},Le={class:"list-disc list px-4"},Ne={class:"font-bold"},Me={key:1,class:"flex flex-col mt-2 dark:text-gray-400"},Be={class:"font-bold"},Xe={class:"list-disc list px-4"},qe={class:"font-bold"},ze={key:2,class:"flex flex-col mt-2 dark:text-gray-400"},Ke={class:"font-bold"},Ge={class:"list-disc list px-4"},Je={class:"font-bold"},Qe={key:3,class:"col-span-6 sm:col-span-6 flex flex-col text-sm w-3/5 p-4 border-2 border-gray-200 dark:border-gray-700 rounded"},We={class:"text-gray-500 dark:text-gray-400 text-center text-sm font-semibold mb-4 -mt-7 bg-white dark:bg-cool-gray-800 w-28"},Ye={class:"flex"},Ze={key:0,class:"p-2 mt-1 text-center bg-green-500 font-semibold rounded text-white"},$e={class:"font-bold"},es={key:1,class:"p-2 mt-1 text-center bg-red-500 font-semibold rounded text-white"},ss={class:"col-span-6 sm:col-span-6 border-t border-gray-300 dark:border-gray-700 pt-4 space-y-3"},ts={class:"text-sm text-gray-700 font-bold dark:text-gray-300"},os={class:"grid md:grid-cols-2 gap-3"},rs={class:"flex"},ls={class:"flex items-center h-5"},as={class:"ml-2 text-sm"},is={for:"show_player_intel_to_none",class:"font-medium text-gray-900 dark:text-gray-300"},ns={class:"text-xs font-normal text-gray-500 dark:text-gray-300"},_s={class:"flex"},cs={class:"flex items-center h-5"},ds={class:"ml-2 text-sm"},us={for:"show_player_intel_to_staff",class:"font-medium text-gray-900 dark:text-gray-300"},ps={class:"text-xs font-normal text-gray-500 dark:text-gray-300"},hs={class:"flex"},ms={class:"flex items-center h-5"},fs={class:"ml-2 text-sm"},gs={for:"show_player_intel_to_self",class:"font-medium text-gray-900 dark:text-gray-300"},ys={class:"text-xs font-normal text-gray-500 dark:text-gray-300"},bs={class:"flex"},xs={class:"flex items-center h-5"},vs={class:"ml-2 text-sm"},ws={for:"show_player_intel_to_login",class:"font-medium text-gray-900 dark:text-gray-300"},ks={class:"text-xs font-normal text-gray-500 dark:text-gray-300"},Ss={class:"flex"},As={class:"flex items-center h-5"},Vs={class:"ml-2 text-sm"},js={for:"show_player_intel_to_all",class:"font-medium text-gray-900 dark:text-gray-300"},Os={class:"text-xs font-normal text-gray-500 dark:text-gray-300"},Es={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function Ps(s,e,r,i,t,p){const g=b("app-head"),A=b("x-input"),E=b("x-checkbox"),P=b("x-textarea"),V=b("loading-button"),D=b("AdminLayout");return n(),K(D,null,{default:S(()=>[h(g,{title:s.__("Player Settings")},null,8,["title"]),o("div",se,[o("div",te,[o("div",oe,[o("div",re,[o("div",le,l(s.__("Player Settings")),1),o("div",ae,[o("div",ie,[o("div",ne,[o("form",{autocomplete:"off",onSubmit:e[14]||(e[14]=G((...a)=>p.savePlayerSetting&&p.savePlayerSetting(...a),["prevent"]))},[o("div",_e,[o("div",ce,[o("div",de,[o("div",ue,[h(A,{id:"last_seen_day_for_active",modelValue:t.form.last_seen_day_for_active,"onUpdate:modelValue":e[0]||(e[0]=a=>t.form.last_seen_day_for_active=a),help:s.__("Number of days past today for player last seen to be count as active. Non active players will not be included in rating. Enter -1 to disable this feature."),label:s.__("Last activity day for rating"),error:t.form.errors.last_seen_day_for_active,type:"text",name:"last_seen_day_for_active","help-error-flex":"flex-col"},null,8,["modelValue","help","label","error"])]),o("div",pe,[h(E,{id:"is_custom_rating_enabled",modelValue:t.form.is_custom_rating_enabled,"onUpdate:modelValue":e[1]||(e[1]=a=>t.form.is_custom_rating_enabled=a),label:s.__("Enable Custom Player Rating Algorithm"),help:s.__("Use your own algorithm for rating players. Enable this only after there is at-least one player in the database."),name:"is_custom_rating_enabled",error:t.form.errors.is_custom_rating_enabled},null,8,["modelValue","label","help","error"])]),y(o("div",he,[h(P,{id:"custom_rating_expression",modelValue:t.form.custom_rating_expression,"onUpdate:modelValue":e[2]||(e[2]=a=>t.form.custom_rating_expression=a),label:s.__("Rating Algorithm"),help:s.__("Eg: ( $total_score - $total_deaths ) / 3 . Tip: For better experience Rating will be rounded from 0 to 10"),error:t.form.errors.custom_rating_expression||t.rating_expression_validation_form.errors.get("custom_rating_expression"),name:"custom_rating_expression"},null,8,["modelValue","label","help","error"])],512),[[U,t.form.is_custom_rating_enabled]]),t.form.is_custom_rating_enabled?(n(),_("div",me,[o("button",{type:"button",class:"-mt-7 text-xs float-right text-light-blue-500 focus:outline-none underline hover:text-light-blue-400",onClick:e[3]||(e[3]=a=>t.showHelpForRating=!t.showHelpForRating)},l(t.showHelpForRating?s.__("-hide help"):s.__("Need help with this?")),1),t.showHelpForRating?(n(),_("div",fe,[o("span",ge,l(s.__("Available Variables")),1),o("ul",ye,[(n(!0),_(x,null,v(r.variables_for_rating_static,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",be,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0),t.showHelpForRating?(n(),_("div",xe,[o("span",ve,l(s.__("Available Dynamic Variables (per server)")),1),o("ul",we,[(n(!0),_(x,null,v(r.variables_for_rating_dynamic,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",ke,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0),t.showHelpForRating?(n(),_("div",Se,[o("span",Ae,l(s.__("Available Functions")),1),o("ul",Ve,[(n(!0),_(x,null,v(r.math_functions_for_rating,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",je,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0)])):d("",!0),t.form.is_custom_rating_enabled?(n(),_("div",Oe,[o("span",Ee,l(s.__("Test Algorithm")),1),o("div",Pe,[h(A,{id:"player_username",modelValue:t.rating_expression_validation_form.player_username,"onUpdate:modelValue":e[4]||(e[4]=a=>t.rating_expression_validation_form.player_username=a),label:s.__("Player Username"),help:s.__("Username of an existing player to get against"),type:"text",name:"player_username",error:t.rating_expression_validation_form.errors.get("player_username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"]),h(V,{loading:t.rating_expression_validation_form.busy,class:"ml-2 h-14 inline-flex justify-center py-2 px-4 border border-2 border-light-blue-500 shadow-sm text-sm font-bold rounded-md text-light-blue-500 hover:bg-light-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"button",onClick:p.validateRatingExpression},{default:S(()=>[m(l(s.__("Validate")),1)]),_:1},8,["loading","onClick"])]),t.validator_rating_value?(n(),_("p",Ue,[m(l(s.__("Success! Rating for this Player will be:"))+" ",1),o("span",Fe,l(t.validator_rating_value),1)])):d("",!0),t.validator_rating_exception?(n(),_("p",Re,l(s.__("Oops!"))+" "+l(t.validator_rating_exception),1)):d("",!0)])):d("",!0),o("div",Te,[h(E,{id:"is_custom_score_enabled",modelValue:t.form.is_custom_score_enabled,"onUpdate:modelValue":e[5]||(e[5]=a=>t.form.is_custom_score_enabled=a),label:s.__("Enable Custom Player Score Algorithm"),help:s.__("Use your own algorithm for player score. Enable this only after there is at-least one player in the database."),name:"is_custom_score_enabled",error:t.form.errors.is_custom_score_enabled},null,8,["modelValue","label","help","error"])]),y(o("div",Ie,[h(P,{id:"custom_score_expression",modelValue:t.form.custom_score_expression,"onUpdate:modelValue":e[6]||(e[6]=a=>t.form.custom_score_expression=a),label:s.__("Score Algorithm"),help:s.__("Eg: ( $total_player_kills - $total_deaths ) / 2 ."),error:t.form.errors.custom_score_expression||t.score_expression_validation_form.errors.get("custom_score_expression"),name:"custom_score_expression"},null,8,["modelValue","label","help","error"])],512),[[U,t.form.is_custom_score_enabled]]),t.form.is_custom_score_enabled?(n(),_("div",He,[o("button",{type:"button",class:"-mt-7 text-xs float-right text-light-blue-500 focus:outline-none underline hover:text-light-blue-400",onClick:e[7]||(e[7]=a=>t.showHelpForScore=!t.showHelpForScore)},l(t.showHelpForScore?"-hide help":"Need help with this?"),1),t.showHelpForScore?(n(),_("div",Ce,[o("span",De,l(s.__("Available Variables")),1),o("ul",Le,[(n(!0),_(x,null,v(r.variables_for_score_static,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",Ne,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0),t.showHelpForScore?(n(),_("div",Me,[o("span",Be,l(s.__("Available Dynamic Variables (per server)")),1),o("ul",Xe,[(n(!0),_(x,null,v(r.variables_for_score_dynamic,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",qe,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0),t.showHelpForScore?(n(),_("div",ze,[o("span",Ke,l(s.__("Available Functions")),1),o("ul",Ge,[(n(!0),_(x,null,v(r.math_functions_for_rating,(a,c)=>(n(),_("li",{key:c,class:"text-xs list-item"},[o("span",Je,l(c),1),m(" - "),o("span",null,l(a),1)]))),128))])])):d("",!0)])):d("",!0),t.form.is_custom_score_enabled?(n(),_("div",Qe,[o("span",We,l(s.__("Test Algorithm")),1),o("div",Ye,[h(A,{id:"player_username",modelValue:t.score_expression_validation_form.player_username,"onUpdate:modelValue":e[8]||(e[8]=a=>t.score_expression_validation_form.player_username=a),label:s.__("Player Username"),help:s.__("Username of an existing player to get against"),type:"text",name:"player_username",error:t.score_expression_validation_form.errors.get("player_username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"]),h(V,{loading:t.score_expression_validation_form.busy,class:"ml-2 h-14 inline-flex justify-center py-2 px-4 border border-2 border-light-blue-500 shadow-sm text-sm font-bold rounded-md text-light-blue-500 hover:bg-light-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"button",onClick:p.validateScoreExpression},{default:S(()=>[m(l(s.__("Validate")),1)]),_:1},8,["loading","onClick"])]),t.validator_score_value?(n(),_("p",Ze,[m(l(s.__("Success! Score for this Player will be:"))+" ",1),o("span",$e,l(t.validator_score_value),1)])):d("",!0),t.validator_score_exception?(n(),_("p",es,l(s.__("Oops!"))+" "+l(t.validator_score_exception),1)):d("",!0)])):d("",!0),o("div",ss,[o("p",ts,l(s.__("Show Player Intel To")),1),o("div",os,[o("div",rs,[o("div",ls,[y(o("input",{id:"show_player_intel_to_none","onUpdate:modelValue":e[9]||(e[9]=a=>t.form.show_player_intel_to=a),type:"radio",value:"none",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"show_player_intel_to"},null,512),[[w,t.form.show_player_intel_to]])]),o("div",as,[o("label",is,l(s.__("Only Superadmin")),1),o("p",ns,l(s.__("Only superadmin role will be able to view player intel data for anyone.")),1)])]),o("div",_s,[o("div",cs,[y(o("input",{id:"show_player_intel_to_staff","onUpdate:modelValue":e[10]||(e[10]=a=>t.form.show_player_intel_to=a),type:"radio",value:"staff",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"show_player_intel_to"},null,512),[[w,t.form.show_player_intel_to]])]),o("div",ds,[o("label",us,l(s.__("Staff Role and above")),1),o("p",ps,l(s.__("Any staff role & superadmin will be able to view player intel for any player.")),1)])]),o("div",hs,[o("div",ms,[y(o("input",{id:"show_player_intel_to_self","onUpdate:modelValue":e[11]||(e[11]=a=>t.form.show_player_intel_to=a),type:"radio",value:"self",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"show_player_intel_to"},null,512),[[w,t.form.show_player_intel_to]])]),o("div",fs,[o("label",gs,l(s.__("Linked Account and above")),1),o("p",ys,l(s.__("User who linked player can view player intel for the linked players. Superadmin & Staff role can view all players.")),1)])]),o("div",bs,[o("div",xs,[y(o("input",{id:"show_player_intel_to_login","onUpdate:modelValue":e[12]||(e[12]=a=>t.form.show_player_intel_to=a),type:"radio",value:"login",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"show_player_intel_to"},null,512),[[w,t.form.show_player_intel_to]])]),o("div",vs,[o("label",ws,l(s.__("Any Authenticated User")),1),o("p",ks,l(s.__("Any authenticated user can view player intel data for any player.")),1)])]),o("div",Ss,[o("div",As,[y(o("input",{id:"show_player_intel_to_all","onUpdate:modelValue":e[13]||(e[13]=a=>t.form.show_player_intel_to=a),type:"radio",value:"all",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",name:"show_player_intel_to"},null,512),[[w,t.form.show_player_intel_to]])]),o("div",Vs,[o("label",js,l(s.__("Public")),1),o("p",Os,l(s.__("Any user or guest visiting the website can view player intel for any player.")),1)])])])])])]),o("div",Es,[h(V,{loading:t.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:S(()=>[m(l(s.__("Save Player Settings")),1)]),_:1},8,["loading"])])])],32)])])])])])])])]),_:1})}const Ls=q(ee,[["render",Ps]]);export{Ls as default};
