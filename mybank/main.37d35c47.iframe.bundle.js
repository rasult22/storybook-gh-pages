(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen",viewport:{viewports:{kindleFire2:{name:"Kindle Fire 2",styles:{width:"600px",height:"963px"}},kindleFireHD:{name:"Kindle Fire HD",styles:{width:"533px",height:"801px"}},iphone6:{name:"Iphone 6",styles:{width:"375px",height:"667px"}}},defaultViewport:"iphone6"},backgrounds:{default:"base",values:[{name:"base",value:"#F5F5F5"},{name:"facebook",value:"#3b5998"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./dist/ksp-ui-lib.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return KBanner})),__webpack_require__.d(__webpack_exports__,"b",(function(){return KButton})),__webpack_require__.d(__webpack_exports__,"c",(function(){return KStepper}));__webpack_require__("./node_modules/core-js/modules/es.array.flat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var vue__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}!function(){try{var elementStyle=document.createElement("style");elementStyle.innerText='.k-button[data-v-2b1c8615]{display:flex;justify-content:center;align-items:center;width:100%;border-radius:2px;color:#fff;cursor:pointer}.k-button.ios[data-v-2b1c8615]{font-size:17px;height:56px}.k-button.android[data-v-2b1c8615]{font-size:14px;text-transform:uppercase;height:44px}.k-button--outlined[data-v-2b1c8615]{background-color:transparent!important;box-shadow:0 0 0 1px #0089d0 inset;color:#0089d0!important}.k-button--flat[data-v-2b1c8615]{color:#0089d0!important;background-color:transparent!important}.k-button.primary[data-v-2b1c8615]{color:#fff;background-color:#0089d0}.k-button.secondary[data-v-2b1c8615]{color:#0089d0;background-color:#f5f5f5}.k-button.accent[data-v-2b1c8615]{color:#fff;background-color:#a3db5a}.k-banner[data-v-8aea9712]{text-align:left;padding:24px 16px}.k-banner__item[data-v-8aea9712]{position:relative}.k-banner__item+.k-banner__item[data-v-8aea9712]:before{content:"";display:block;height:4px}.k-banner--positive[data-v-8aea9712]{color:#fff;background-color:#a3db5a}.k-banner--positive .k-banner__tagline[data-v-8aea9712]{color:#0089d0;font-size:20px;line-height:24px}.k-banner--neutral[data-v-8aea9712]{color:#000;background-color:#f14635}.k-banner--neutral .k-banner__subtitle[data-v-8aea9712]{font-size:28px;line-height:40px}.k-banner--negative[data-v-8aea9712]{color:#fff;background:rgba(0,0,0,.64)}.k-banner__tagline[data-v-8aea9712]{font-size:24px;line-height:28px}.k-banner__title[data-v-8aea9712]{font-size:50px;line-height:56px}.k-banner__subtitle[data-v-8aea9712]{font-size:24px;line-height:28px}.k-banner__additional[data-v-8aea9712]{font-size:17px;line-height:20px}.k-stepper[data-v-7f186700]{line-height:1.2}.k-stepper__step[data-v-7f186700]{position:relative;display:flex;text-align:left;padding-bottom:32px}.k-stepper__step[data-v-7f186700]:not(:last-child):before{position:absolute;content:"";top:27px;left:11px;border-radius:1.5px;width:2px;height:calc(100% - 30px);background-color:#f14635}.k-stepper__step_number[data-v-7f186700]{margin-right:16px;min-width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:#f14635}.k-stepper__step_number span[data-v-7f186700]{color:#fff;font-size:16px}.k-stepper__step_text[data-v-7f186700]{color:#4a4a4a;font-size:17px}',document.head.appendChild(elementStyle)}catch(e){console.error(e,"vite-plugin-css-injected-by-js: error when trying to add the style.")}}();var _export_sfc=function _export_sfc(sfc,props){var _step,target=sfc.__vccOpts||sfc,_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e2){throw _e2},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e3){didErr=!0,err=_e3},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(props);try{for(_iterator.s();!(_step=_iterator.n()).done;){var _ref2=_slicedToArray(_step.value,2),key=_ref2[0],val=_ref2[1];target[key]=val}}catch(err){_iterator.e(err)}finally{_iterator.f()}return target};var KButton=_export_sfc(Object(vue__WEBPACK_IMPORTED_MODULE_12__.defineComponent)({name:"KButton",props:{icon:{type:String,default:""},isAnroid:{type:Boolean,default:"android"===function getDeviceType(){return/android/i.test(navigator.userAgent)?"android":"ios"}()},flat:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},type:{type:String,default:"primary"}}}),[["render",function _sfc_render$2(_ctx,_cache,$props,$setup,$data,$options){var _ref3;return Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",{class:Object(vue__WEBPACK_IMPORTED_MODULE_12__.normalizeClass)(["k-button",(_ref3={"k-button--outlined":_ctx.outlined,"k-button--flat":_ctx.flat},_ref3[_ctx.type]=_ctx.type,_ref3.android=_ctx.isAnroid,_ref3.ios=!_ctx.isAnroid,_ref3)])},[Object(vue__WEBPACK_IMPORTED_MODULE_12__.renderSlot)(_ctx.$slots,"default",{},void 0,!0)],2)}],["__scopeId","data-v-2b1c8615"]]),_hoisted_1$1={key:0,class:"k-banner__item k-banner__tagline"},_hoisted_2$1={key:1,class:"k-banner__item k-banner__title"},_hoisted_3$1={key:2,class:"k-banner__item k-banner__subtitle"},_hoisted_4={key:3,class:"k-banner__item k-banner__additional"};var KBanner=_export_sfc({name:"KBanner",props:{type:{type:String,default:"positive"},tagline:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},additional:{type:String,default:""}}},[["render",function _sfc_render$1(_ctx,_cache,$props,$setup,$data,$options){return Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",{class:Object(vue__WEBPACK_IMPORTED_MODULE_12__.normalizeClass)(["k-banner","k-banner--"+$props.type])},[$props.tagline?(Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",_hoisted_1$1,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)($props.tagline),1)):Object(vue__WEBPACK_IMPORTED_MODULE_12__.createCommentVNode)("",!0),$props.title?(Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",_hoisted_2$1,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)($props.title),1)):Object(vue__WEBPACK_IMPORTED_MODULE_12__.createCommentVNode)("",!0),$props.subtitle?(Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",_hoisted_3$1,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)($props.subtitle),1)):Object(vue__WEBPACK_IMPORTED_MODULE_12__.createCommentVNode)("",!0),$props.additional?(Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",_hoisted_4,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)($props.additional),1)):Object(vue__WEBPACK_IMPORTED_MODULE_12__.createCommentVNode)("",!0)],2)}],["__scopeId","data-v-8aea9712"]]),_hoisted_1={class:"k-stepper"},_hoisted_2={class:"k-stepper__step_number"},_hoisted_3={class:"k-stepper__step_text"};var KStepper=_export_sfc({name:"KStepper",props:{steps:{type:Array,required:!0}}},[["render",function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",_hoisted_1,[(Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(!0),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_12__.Fragment,null,Object(vue__WEBPACK_IMPORTED_MODULE_12__.renderList)($props.steps,(function(text,i){return Object(vue__WEBPACK_IMPORTED_MODULE_12__.openBlock)(),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementBlock)("div",{key:i,class:"k-stepper__step"},[Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementVNode)("div",_hoisted_2,[Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementVNode)("span",null,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)(i+1),1)]),Object(vue__WEBPACK_IMPORTED_MODULE_12__.createElementVNode)("div",_hoisted_3,Object(vue__WEBPACK_IMPORTED_MODULE_12__.toDisplayString)(text),1)])})),128))])}],["__scopeId","data-v-7f186700"]])},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"\n.btn-wrapper[data-v-d7e1a2e0] {\r\n  padding: 15px;\n}\n.backdrop__content[data-v-d7e1a2e0] {\r\n  padding: 0 15px 15px;\n}\r\n",""]),module.exports=exports},"./node_modules/vue-docgen-loader/lib/index.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/KBackdrop.stories.js":"./src/components/KBackdrop.stories.js","./components/KBanner/KBanner.stories.js":"./src/components/KBanner/KBanner.stories.js","./components/KButton/KButton.stories.js":"./src/components/KButton/KButton.stories.js","./components/KStepper/KStepper.stories.js":"./src/components/KStepper/KStepper.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src/components/KBackdrop.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var vue_esm_bundler=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");const _hoisted_1={class:"backdrop"},_hoisted_2=(n=>(Object(vue_esm_bundler.pushScopeId)("data-v-d7e1a2e0"),n=n(),Object(vue_esm_bundler.popScopeId)(),n))((()=>Object(vue_esm_bundler.createElementVNode)("div",{class:"backdrop__content"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore nemo, similique vitae esse ex ab? Rerum doloribus, laboriosam blanditiis iste, vitae molestiae vel impedit architecto perferendis unde sed. Architecto similique doloremque voluptate adipisci deserunt, molestias ipsam reiciendis fugiat itaque sunt quos fugit porro commodi voluptatem voluptas quae asperiores ea libero dolorem ipsum nisi neque! Delectus, quis optio? Beatae perspiciatis sapiente voluptates voluptas nobis dolorem quos quisquam magnam aliquid ipsa hic incidunt voluptate debitis dolor mollitia vero accusantium, reiciendis consequatur necessitatibus ",-1))),_hoisted_3={class:"btn-wrapper"},_hoisted_4=Object(vue_esm_bundler.createTextVNode)("Открыть бэкдроп");var vue3_kaspi_ui_es=__webpack_require__("./node_modules/@dros/vue3-kaspi-ui/dist/vue3-kaspi-ui.es.js"),KBackdropWrappervue_type_script_lang_js={components:{KBackdrop:vue3_kaspi_ui_es.a,KButton:vue3_kaspi_ui_es.b},props:{title:{type:String,default:"Редактируемый заголовок"}},data:function data(){return{isModalOpen:!1}}},exportHelper=(__webpack_require__("./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css"),__webpack_require__("./node_modules/vue-loader/dist/exportHelper.js"));const __exports__=__webpack_require__.n(exportHelper)()(KBackdropWrappervue_type_script_lang_js,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){const _component_k_backdrop=Object(vue_esm_bundler.resolveComponent)("k-backdrop"),_component_k_button=Object(vue_esm_bundler.resolveComponent)("k-button");return Object(vue_esm_bundler.openBlock)(),Object(vue_esm_bundler.createElementBlock)("div",_hoisted_1,[Object(vue_esm_bundler.createVNode)(_component_k_backdrop,{isOpen:$data.isModalOpen,"onUpdate:isOpen":_cache[0]||(_cache[0]=$event=>$data.isModalOpen=$event),title:$props.title},{default:Object(vue_esm_bundler.withCtx)((()=>[_hoisted_2])),_:1},8,["isOpen","title"]),Object(vue_esm_bundler.createElementVNode)("div",_hoisted_3,[Object(vue_esm_bundler.createVNode)(_component_k_button,{onClick:_cache[1]||(_cache[1]=$event=>$data.isModalOpen=!0)},{default:Object(vue_esm_bundler.withCtx)((()=>[_hoisted_4])),_:1})])])}],["__scopeId","data-v-d7e1a2e0"]]);var KBackdropWrapper=__exports__;__exports__.__docgenInfo={exportName:"default",displayName:"KBackdropWrapper",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'"Редактируемый заголовок"'}}]};__webpack_exports__.default={title:"components/KBackdrop",component:KBackdropWrapper,argTypes:{title:{type:String}}};var Default=function Template(args){return{components:{KBackdropWrapper:KBackdropWrapper},setup:function setup(){return{args:args}},template:'<KBackdropWrapper v-bind="args" />'}}.bind({});Default.parameters=Object.assign({storySource:{source:"(args) => ({\r\n  components: { KBackdropWrapper },\r\n  setup() {\r\n    return { args };\r\n  },\r\n  template: '<KBackdropWrapper v-bind=\"args\" />',\r\n})"}},Default.parameters)},"./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/vue-docgen-loader/lib/index.js?!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/components/KBackdropWrapper.vue?vue&type=style&index=0&id=d7e1a2e0&scoped=true&lang=css")},"./src/components/KBanner/KBanner.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/ksp-ui-lib.es.js");__webpack_exports__.default={title:"components/KBanner",component:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{type:{type:String,defaultValue:"positive",control:{type:"select",options:["positive","negative","neutral"]}},tagline:{type:String,defaultValue:"Tagline",control:{type:"text"}},title:{type:String,defaultValue:"Some title",control:{type:"text"}},subtitle:{type:String,defaultValue:"Subtitle",control:{type:"text"}},additional:{type:String,defaultValue:"Additional info",control:{type:"text"}}}};var Default=function Template(args){return{components:{KBanner:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.a},setup:function setup(){return{args:args}},template:'<k-banner v-bind="args">Button component</k-banner>'}}.bind({});Default.args={type:"positive"},Default.parameters=Object.assign({storySource:{source:'(args) => ({\r\n  components: { KBanner },\r\n  setup() {\r\n    return { args };\r\n  },\r\n  // And then the `args` are bound to your component with `v-bind="args"`\r\n  template: \'<k-banner v-bind="args">Button component</k-banner>\',\r\n})'}},Default.parameters)},"./src/components/KButton/KButton.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/ksp-ui-lib.es.js");__webpack_exports__.default={title:"components/KButton",component:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.b,argTypes:{type:{type:String,defaultValue:"primary",control:{type:"select",options:["primary","secondary","accent"]}}}};var Default=function Template(args){return{components:{KButton:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.b},setup:function setup(){return{args:args}},template:'<k-button v-bind="args">Button component</k-button>'}}.bind({});Default.args={type:"primary"},Default.parameters=Object.assign({storySource:{source:'(args) => ({\r\n  components: { KButton },\r\n  setup() {\r\n    return { args };\r\n  },\r\n  // And then the `args` are bound to your component with `v-bind="args"`\r\n  template: \'<k-button v-bind="args">Button component</k-button>\',\r\n})'}},Default.parameters)},"./src/components/KStepper/KStepper.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Long",(function(){return Long})),__webpack_require__.d(__webpack_exports__,"Short",(function(){return Short}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/ksp-ui-lib.es.js");__webpack_exports__.default={title:"components/KStepper",component:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.c,argTypes:{steps:{type:Array,description:"Состоит из массива строк"}}};var Template=function Template(args){return{components:{KStepper:_dist_ksp_ui_lib_es__WEBPACK_IMPORTED_MODULE_2__.c},setup:function setup(){return{args:args}},template:'<k-stepper v-bind="args">Button component</k-stepper>'}},Long=Template.bind({});Long.args={steps:["Обратитесь в Управление госдоходов или по номеру","Как только долг будет погашен, Вы сможете продолжить процесс. Я добавляю текст чтобы показать, что линии между шагами могут расширяться.","Получить карту Kaspi Gold в картомате при помощи Kaspi QR"]};var Short=Template.bind({});Short.args={steps:["Подтвердите свою личность","Подпишите документы электронной подписью онлайн"]},Long.parameters=Object.assign({storySource:{source:'(args) => ({\r\n  components: { KStepper },\r\n  setup() {\r\n    return { args };\r\n  },\r\n  // And then the `args` are bound to your component with `v-bind="args"`\r\n  template: \'<k-stepper v-bind="args">Button component</k-stepper>\',\r\n})'}},Long.parameters),Short.parameters=Object.assign({storySource:{source:'(args) => ({\r\n  components: { KStepper },\r\n  setup() {\r\n    return { args };\r\n  },\r\n  // And then the `args` are bound to your component with `v-bind="args"`\r\n  template: \'<k-stepper v-bind="args">Button component</k-stepper>\',\r\n})'}},Short.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/vue3/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,6,7]]]);