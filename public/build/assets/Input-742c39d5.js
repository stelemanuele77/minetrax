import{r as l,x as r,o as n,d as i}from"./app-f7b07d6a.js";const c=["value"],p={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(o,{expose:t}){const e=l(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(s,u)=>(n(),i("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 rounded-md shadow-sm",value:o.modelValue,onInput:u[0]||(u[0]=a=>s.$emit("update:modelValue",a.target.value))},null,40,c))}};export{p as _};
