import{_ as h,o as s,d as o,a as l,t as a,e as b,F as x,h as y,n as d,x as f,y as g}from"./app.b30fdf72.js";const m={props:{selectList:[Object,Array],modelValue:[Number,String,Array,Object,Boolean,Date],name:String,placeholder:String,help:String,label:String,id:String,error:String,autofocus:{type:[String,Boolean],default:!1},required:{type:[String,Boolean],default:!1},disabled:{type:[String,Boolean],default:!1},helpErrorFlex:{type:String,default:"flex-col"},disableNull:{type:Boolean,default:!1}},data(){return{hasFocus:!1}},computed:{computedList(){return Array.isArray(this.selectList)?this.selectList.reduce((i,t)=>({[t]:t,...i}),{}):this.selectList},borderColor(){return this.error?"border-red-400 dark:border-red-400":"border-gray-300"},textColor(){return this.hasFocus?"text-light-blue-400":this.error?"text-red-400":"text-gray-500"}},methods:{focus(){this.$refs.input.focus()}}},S={class:"floating-input relative w-full"},k=["id","value","autofocus","required","disabled","name"],v=["disabled"],_=["value"],F=["for"];function B(i,t,e,C,u,n){return s(),o("div",S,[l("select",{id:e.id,ref:"input",class:d(["border-gray-300 pt-6 text-sm focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 rounded-md block w-full p-3 h-14 dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900",n.borderColor]),value:e.modelValue,autofocus:e.autofocus,required:e.required,disabled:e.disabled,name:e.name,onChange:t[0]||(t[0]=r=>i.$emit("update:modelValue",r.target.value)),onFocus:t[1]||(t[1]=r=>u.hasFocus=!0),onBlur:t[2]||(t[2]=r=>u.hasFocus=!1)},[e.placeholder?(s(),o("option",{key:0,class:"text-gray-500 dark:text-gray-400",value:"",disabled:e.disableNull},a(e.placeholder),9,v)):b("",!0),(s(!0),o(x,null,y(n.computedList,(r,c)=>(s(),o("option",{key:c,value:c},a(r),9,_))),128))],42,k),l("label",{for:e.id,class:d([n.textColor,"absolute -top-3 left-0 px-3 py-5 text-xs h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out dark:text-gray-400"])},a(e.label),11,F),l("div",{class:d(["info mt-1 flex",e.help?"justify-between "+e.helpErrorFlex:"justify-end "+e.helpErrorFlex])},[f(l("p",{class:"text-xs text-gray-500 dark:text-gray-400"},a(e.help),513),[[g,e.help]]),f(l("p",{class:"text-xs text-red-500"},a(e.error),513),[[g,e.error]])],2)])}const p=h(m,[["render",B]]);export{p as X};
