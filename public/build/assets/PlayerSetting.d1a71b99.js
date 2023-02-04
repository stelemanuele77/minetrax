import{A as N}from"./AppLayout.c9f2eed2.js";import{L}from"./LoadingButton.b2e0b255.js";import{X as B}from"./XInput.11adad62.js";import{S as M}from"./SettingLink.1da33a14.js";import{X}from"./XCheckbox.1fe6e226.js";import{X as z}from"./XTextarea.1b9d2140.js";import{a0 as q,_ as G,z as y,o as a,c as K,w as b,b as _,a as o,t as i,f as u,l as J,x as V,y as F,d as c,F as w,h as k,e as p}from"./app.69bff178.js";var Q=Object.defineProperty,W=Object.prototype.hasOwnProperty,U=Object.getOwnPropertySymbols,Y=Object.prototype.propertyIsEnumerable,T=(s,e,r)=>e in s?Q(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,f=(s,e)=>{for(var r in e||(e={}))W.call(e,r)&&T(s,r,e[r]);if(U)for(var r of U(e))Y.call(e,r)&&T(s,r,e[r]);return s};const v=s=>s===void 0,I=s=>Array.isArray(s),R=s=>s&&typeof s.size=="number"&&typeof s.type=="string"&&typeof s.slice=="function",E=(s,e,r,l)=>((e=e||{}).indices=!v(e.indices)&&e.indices,e.nullsAsUndefineds=!v(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!v(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!v(e.allowEmptyArrays)&&e.allowEmptyArrays,r=r||new FormData,v(s)||(s===null?e.nullsAsUndefineds||r.append(l,""):(t=>typeof t=="boolean")(s)?e.booleansAsIntegers?r.append(l,s?1:0):r.append(l,s):I(s)?s.length?s.forEach((t,h)=>{const g=l+"["+(e.indices?h:"")+"]";E(t,e,r,g)}):e.allowEmptyArrays&&r.append(l+"[]",""):(t=>t instanceof Date)(s)?r.append(l,s.toISOString()):!(t=>t===Object(t))(s)||(t=>R(t)&&typeof t.name=="string"&&(typeof t.lastModifiedDate=="object"||typeof t.lastModified=="number"))(s)||R(s)?r.append(l,s):Object.keys(s).forEach(t=>{const h=s[t];if(I(h))for(;t.length>2&&t.lastIndexOf("[]")===t.length-2;)t=t.substring(0,t.length-2);E(h,e,r,l?l+"["+t+"]":t)})),r);var Z={serialize:E};function j(s){if(s===null||typeof s!="object")return s;const e=Array.isArray(s)?[]:{};return Object.keys(s).forEach(r=>{e[r]=j(s[r])}),e}function C(s){return Array.isArray(s)?s:[s]}function H(s){return s instanceof File||s instanceof Blob||s instanceof FileList||typeof s=="object"&&s!==null&&Object.values(s).find(e=>H(e))!==void 0}class ${constructor(){this.errors={},this.errors={}}set(e,r){typeof e=="object"?this.errors=e:this.set(f(f({},this.errors),{[e]:C(r)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some(r=>this.has(r))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return C(this.errors[e]||[])}only(...e){const r=[];return e.forEach(l=>{const t=this.get(l);t&&r.push(t)}),r}flatten(){return Object.values(this.errors).reduce((e,r)=>e.concat(r),[])}clear(e){const r={};e&&Object.keys(this.errors).forEach(l=>{l!==e&&(r[l]=this.errors[l])}),this.set(r)}}class d{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new $,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,j(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach(r=>{this[r]=e[r]})}data(){return this.keys().reduce((e,r)=>f(f({},e),{[r]:this[r]}),{})}keys(){return Object.keys(this).filter(e=>!d.ignore.includes(e))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},d.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(e=>!d.ignore.includes(e)).forEach(e=>{this[e]=j(this.originalData[e])})}get(e,r={}){return this.submit("get",e,r)}post(e,r={}){return this.submit("post",e,r)}patch(e,r={}){return this.submit("patch",e,r)}put(e,r={}){return this.submit("put",e,r)}delete(e,r={}){return this.submit("delete",e,r)}submit(e,r,l={}){return this.startProcessing(),l=f({data:{},params:{},url:this.route(r),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},l),e.toLowerCase()==="get"?l.params=f(f({},this.data()),l.params):(l.data=f(f({},this.data()),l.data),H(l.data)&&!l.transformRequest&&(l.transformRequest=[t=>Z.serialize(t)])),new Promise((t,h)=>{(d.axios||q).request(l).then(g=>{this.finishProcessing(),t(g)}).catch(g=>{this.handleErrors(g),h(g)})})}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&typeof e.data=="object"?e.data.errors?f({},e.data.errors):e.data.message?{error:e.data.message}:f({},e.data):{error:d.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,r={}){let l=e;return Object.prototype.hasOwnProperty.call(d.routes,e)&&(l=decodeURI(d.routes[e])),typeof r!="object"&&(r={id:r}),Object.keys(r).forEach(t=>{l=l.replace(`{${t}}`,r[t])}),l}onKeydown(e){const r=e.target;r.name&&this.errors.clear(r.name)}}d.routes={},d.errorMessage="Something went wrong. Please try again.",d.recentlySuccessfulTimeout=2e3,d.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const ee={components:{XTextarea:z,XCheckbox:X,SettingLink:M,AppLayout:N,LoadingButton:L,XInput:B},props:{settings:Object,variables_for_rating_static:Object,variables_for_score_static:Object,math_functions_for_rating:Object},data(){return{showHelpForRating:!1,showHelpForScore:!1,form:this.$inertia.form({is_custom_rating_enabled:this.settings.is_custom_rating_enabled,custom_rating_expression:this.settings.custom_rating_expression,last_seen_day_for_active:this.settings.last_seen_day_for_active,is_custom_score_enabled:this.settings.is_custom_score_enabled,custom_score_expression:this.settings.custom_score_expression}),rating_expression_validation_form:new d({player_username:null,custom_rating_expression:null}),validator_rating_value:null,validator_rating_exception:null,score_expression_validation_form:new d({player_username:null,custom_score_expression:null}),validator_score_value:null,validator_score_exception:null}},methods:{savePlayerSetting(){this.form.post(route("admin.setting.player.update"),{preserveScroll:!0,onFinish:()=>{this.validator_rating_value=null,this.validator_rating_exception=null,this.validator_score_value=null,this.validator_score_exception=null,this.rating_expression_validation_form.errors.clear(),this.score_expression_validation_form.errors.clear()},onSuccess:()=>{this.form.clearErrors(),this.rating_expression_validation_form.errors.clear(),this.score_expression_validation_form.errors.clear()}})},validateRatingExpression(){this.rating_expression_validation_form.custom_rating_expression=this.form.custom_rating_expression,this.rating_expression_validation_form.post(route("admin.setting.player.validate-rating-expression")).then(s=>{this.validator_rating_value=s.data.rating,this.validator_rating_exception=null}).catch(s=>{s.response.status!==422?(this.validator_rating_value=null,this.validator_rating_exception=s.response.data.message):(this.validator_rating_value=null,this.validator_rating_exception=null)}).finally(()=>{this.form.clearErrors()})},validateScoreExpression(){this.score_expression_validation_form.custom_score_expression=this.form.custom_score_expression,this.score_expression_validation_form.post(route("admin.setting.player.validate-score-expression")).then(s=>{this.validator_score_value=s.data.score,this.validator_score_exception=null}).catch(s=>{s.response.status!==422?(this.validator_score_value=null,this.validator_score_exception=s.response.data.message):(this.validator_score_value=null,this.validator_score_exception=null)}).finally(()=>{this.form.clearErrors()})}}},se={class:"py-12 px-10 max-w-6xl mx-auto flex"},te={class:"w-64 flex-shrink-0 pr-10"},re={class:"flex flex-col"},oe={class:"uppercase mb-2 text-xs tracking-wide text-gray-600 dark:text-gray-400 font-bold"},ie={class:"flex-1"},le={class:"flex flex-col w-full"},ne={class:"bg-white dark:bg-cool-gray-800 shadow w-full"},ae={class:"px-6 py-4 border-b dark:border-gray-700 dark:text-gray-300 font-bold"},ce={class:"mt-10 sm:mt-0"},_e={class:"md:grid md:grid-cols-3 md:gap-6"},de={class:"mt-5 md:mt-0 md:col-span-3"},ue={class:"shadow overflow-hidden sm:rounded-md"},pe={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},he={class:"grid grid-cols-6 gap-6"},me={class:"col-span-6 sm:col-span-6"},fe={class:"col-span-6 sm:col-spam-4"},ge={class:"col-span-6 sm:col-span-6"},be={key:0,class:"col-span-6 text-gray-800"},ye={key:0,class:"flex flex-col dark:text-gray-400"},ve={class:"font-bold"},xe={class:"list-disc list px-4"},we={class:"font-bold"},ke={key:1,class:"flex flex-col mt-2 dark:text-gray-400"},Se={class:"font-bold"},Ae={class:"list-disc list px-4"},Ee={class:"font-bold"},je={key:1,class:"col-span-6 sm:col-span-6 flex flex-col text-sm w-3/5 p-4 border-2 border-gray-200 dark:border-gray-700 rounded"},Oe={class:"text-gray-500 dark:text-gray-400 text-center text-sm font-semibold mb-4 -mt-7 bg-white dark:bg-cool-gray-800 w-28"},Pe={class:"flex"},Ve={key:0,class:"p-2 mt-1 text-center bg-green-500 font-semibold rounded text-white"},Fe={class:"font-bold"},Ue={key:1,class:"p-2 mt-1 text-center bg-red-500 font-semibold rounded text-white"},Te={class:"col-span-6 sm:col-span-6 border-t border-gray-300 dark:border-gray-700 pt-4"},Ie={class:"col-span-6 sm:col-span-6"},Re={key:2,class:"col-span-6 text-gray-800"},Ce={key:0,class:"flex flex-col dark:text-gray-400"},He={class:"font-bold"},De={class:"list-disc list px-4"},Ne={class:"font-bold"},Le={key:1,class:"flex flex-col mt-2 dark:text-gray-400"},Be={class:"font-bold"},Me={class:"list-disc list px-4"},Xe={class:"font-bold"},ze={key:3,class:"col-span-6 sm:col-span-6 flex flex-col text-sm w-3/5 p-4 border-2 border-gray-200 dark:border-gray-700 rounded"},qe={class:"text-gray-500 dark:text-gray-400 text-center text-sm font-semibold mb-4 -mt-7 bg-white dark:bg-cool-gray-800 w-28"},Ge={class:"flex"},Ke={key:0,class:"p-2 mt-1 text-center bg-green-500 font-semibold rounded text-white"},Je={class:"font-bold"},Qe={key:1,class:"p-2 mt-1 text-center bg-red-500 font-semibold rounded text-white"},We={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function Ye(s,e,r,l,t,h){const g=y("app-head"),x=y("setting-link"),O=y("x-checkbox"),S=y("x-input"),P=y("x-textarea"),A=y("loading-button"),D=y("app-layout");return a(),K(D,null,{default:b(()=>[_(g,{title:s.__("Player Settings")},null,8,["title"]),o("div",se,[o("div",te,[o("div",re,[o("div",oe,i(s.__("SETTINGS")),1),_(x,{href:s.route("admin.setting.general.show"),active:s.route().current("admin.setting.general.show")},{default:b(()=>[u(i(s.__("General")),1)]),_:1},8,["href","active"]),_(x,{href:s.route("admin.setting.theme.show"),active:s.route().current("admin.setting.theme.show")},{default:b(()=>[u(i(s.__("Theme")),1)]),_:1},8,["href","active"]),_(x,{href:s.route("admin.setting.plugin.show"),active:s.route().current("admin.setting.plugin.show")},{default:b(()=>[u(i(s.__("Plugin")),1)]),_:1},8,["href","active"]),_(x,{href:s.route("admin.setting.player.show"),active:s.route().current("admin.setting.player.show")},{default:b(()=>[u(i(s.__("Player")),1)]),_:1},8,["href","active"])])]),o("div",ie,[o("div",le,[o("div",ne,[o("div",ae,i(s.__("Player Settings")),1),o("div",ce,[o("div",_e,[o("div",de,[o("form",{autocomplete:"off",onSubmit:e[9]||(e[9]=J((...n)=>h.savePlayerSetting&&h.savePlayerSetting(...n),["prevent"]))},[o("div",ue,[o("div",pe,[o("div",he,[o("div",me,[_(O,{id:"is_custom_rating_enabled",modelValue:t.form.is_custom_rating_enabled,"onUpdate:modelValue":e[0]||(e[0]=n=>t.form.is_custom_rating_enabled=n),label:s.__("Enable Custom Player Rating Algorithm"),help:s.__("Use your own algorithm for rating players. Enable this only after there is at-least one player in the database."),name:"is_custom_rating_enabled",error:t.form.errors.is_custom_rating_enabled},null,8,["modelValue","label","help","error"])]),o("div",fe,[_(S,{id:"last_seen_day_for_active",modelValue:t.form.last_seen_day_for_active,"onUpdate:modelValue":e[1]||(e[1]=n=>t.form.last_seen_day_for_active=n),help:s.__("Number of days past today for player last seen to be count as active. Non active players will not be included in rating. Enter -1 to disable this feature."),label:s.__("Last activity day for rating"),error:t.form.errors.last_seen_day_for_active,type:"text",name:"last_seen_day_for_active","help-error-flex":"flex-col"},null,8,["modelValue","help","label","error"])]),V(o("div",ge,[_(P,{id:"custom_rating_expression",modelValue:t.form.custom_rating_expression,"onUpdate:modelValue":e[2]||(e[2]=n=>t.form.custom_rating_expression=n),label:s.__("Rating Algorithm"),help:s.__("Eg: ( $total_score - $total_deaths ) / 3 . Tip: For better experience Rating will be rounded from 0 to 10"),error:t.form.errors.custom_rating_expression||t.rating_expression_validation_form.errors.get("custom_rating_expression"),name:"custom_rating_expression"},null,8,["modelValue","label","help","error"])],512),[[F,t.form.is_custom_rating_enabled]]),t.form.is_custom_rating_enabled?(a(),c("div",be,[o("button",{type:"button",class:"-mt-7 text-xs float-right text-light-blue-500 focus:outline-none underline hover:text-light-blue-400",onClick:e[3]||(e[3]=n=>t.showHelpForRating=!t.showHelpForRating)},i(t.showHelpForRating?s.__("-hide help"):s.__("Need help with this?")),1),t.showHelpForRating?(a(),c("div",ye,[o("span",ve,i(s.__("Available Variables")),1),o("ul",xe,[(a(!0),c(w,null,k(r.variables_for_rating_static,(n,m)=>(a(),c("li",{key:m,class:"text-xs list-item"},[o("span",we,i(m),1),u(" - "),o("span",null,i(n),1)]))),128))])])):p("",!0),t.showHelpForRating?(a(),c("div",ke,[o("span",Se,i(s.__("Available Functions")),1),o("ul",Ae,[(a(!0),c(w,null,k(r.math_functions_for_rating,(n,m)=>(a(),c("li",{key:m,class:"text-xs list-item"},[o("span",Ee,i(m),1),u(" - "),o("span",null,i(n),1)]))),128))])])):p("",!0)])):p("",!0),t.form.is_custom_rating_enabled?(a(),c("div",je,[o("span",Oe,i(s.__("Test Algorithm")),1),o("div",Pe,[_(S,{id:"player_username",modelValue:t.rating_expression_validation_form.player_username,"onUpdate:modelValue":e[4]||(e[4]=n=>t.rating_expression_validation_form.player_username=n),label:s.__("Player Username"),help:s.__("Username of an existing player to get against"),type:"text",name:"player_username",error:t.rating_expression_validation_form.errors.get("player_username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"]),_(A,{loading:t.rating_expression_validation_form.busy,class:"ml-2 h-14 inline-flex justify-center py-2 px-4 border border-2 border-light-blue-500 shadow-sm text-sm font-bold rounded-md text-light-blue-500 hover:bg-light-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"button",onClick:h.validateRatingExpression},{default:b(()=>[u(i(s.__("Validate")),1)]),_:1},8,["loading","onClick"])]),t.validator_rating_value?(a(),c("p",Ve,[u(i(s.__("Success! Rating for this Player will be:"))+" ",1),o("span",Fe,i(t.validator_rating_value),1)])):p("",!0),t.validator_rating_exception?(a(),c("p",Ue,i(s.__("Oops!"))+"\xA0"+i(t.validator_rating_exception),1)):p("",!0)])):p("",!0),o("div",Te,[_(O,{id:"is_custom_score_enabled",modelValue:t.form.is_custom_score_enabled,"onUpdate:modelValue":e[5]||(e[5]=n=>t.form.is_custom_score_enabled=n),label:s.__("Enable Custom Player Score Algorithm"),help:s.__("Use your own algorithm for player score. Enable this only after there is at-least one player in the database."),name:"is_custom_score_enabled",error:t.form.errors.is_custom_score_enabled},null,8,["modelValue","label","help","error"])]),V(o("div",Ie,[_(P,{id:"custom_score_expression",modelValue:t.form.custom_score_expression,"onUpdate:modelValue":e[6]||(e[6]=n=>t.form.custom_score_expression=n),label:s.__("Score Algorithm"),help:s.__("Eg: ( $total_player_kills - $total_deaths ) / 2 ."),error:t.form.errors.custom_score_expression||t.score_expression_validation_form.errors.get("custom_score_expression"),name:"custom_score_expression"},null,8,["modelValue","label","help","error"])],512),[[F,t.form.is_custom_score_enabled]]),t.form.is_custom_score_enabled?(a(),c("div",Re,[o("button",{type:"button",class:"-mt-7 text-xs float-right text-light-blue-500 focus:outline-none underline hover:text-light-blue-400",onClick:e[7]||(e[7]=n=>t.showHelpForScore=!t.showHelpForScore)},i(t.showHelpForScore?"-hide help":"Need help with this?"),1),t.showHelpForScore?(a(),c("div",Ce,[o("span",He,i(s.__("Available Variables")),1),o("ul",De,[(a(!0),c(w,null,k(r.variables_for_score_static,(n,m)=>(a(),c("li",{key:m,class:"text-xs list-item"},[o("span",Ne,i(m),1),u(" - "),o("span",null,i(n),1)]))),128))])])):p("",!0),t.showHelpForScore?(a(),c("div",Le,[o("span",Be,i(s.__("Available Functions")),1),o("ul",Me,[(a(!0),c(w,null,k(r.math_functions_for_rating,(n,m)=>(a(),c("li",{key:m,class:"text-xs list-item"},[o("span",Xe,i(m),1),u(" - "),o("span",null,i(n),1)]))),128))])])):p("",!0)])):p("",!0),t.form.is_custom_score_enabled?(a(),c("div",ze,[o("span",qe,i(s.__("Test Algorithm")),1),o("div",Ge,[_(S,{id:"player_username",modelValue:t.score_expression_validation_form.player_username,"onUpdate:modelValue":e[8]||(e[8]=n=>t.score_expression_validation_form.player_username=n),label:s.__("Player Username"),help:s.__("Username of an existing player to get against"),type:"text",name:"player_username",error:t.score_expression_validation_form.errors.get("player_username"),"help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"]),_(A,{loading:t.score_expression_validation_form.busy,class:"ml-2 h-14 inline-flex justify-center py-2 px-4 border border-2 border-light-blue-500 shadow-sm text-sm font-bold rounded-md text-light-blue-500 hover:bg-light-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"button",onClick:h.validateScoreExpression},{default:b(()=>[u(i(s.__("Validate")),1)]),_:1},8,["loading","onClick"])]),t.validator_score_value?(a(),c("p",Ke,[u(i(s.__("Success! Score for this Player will be:"))+" ",1),o("span",Je,i(t.validator_score_value),1)])):p("",!0),t.validator_score_exception?(a(),c("p",Qe,i(s.__("Oops!"))+"\xA0"+i(t.validator_score_exception),1)):p("",!0)])):p("",!0)])]),o("div",We,[_(A,{loading:t.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50 dark:bg-cool-gray-700 dark:hover:bg-cool-gray-600",type:"submit"},{default:b(()=>[u(i(s.__("Save Player Settings")),1)]),_:1},8,["loading"])])])],32)])])])])])])])]),_:1})}const is=G(ee,[["render",Ye]]);export{is as default};
