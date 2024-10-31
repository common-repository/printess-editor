﻿const initPrintessWCEditor=function(f){const p="form.cart";if(void 0!==window.printessWooEditor)return window.printessWooEditor;function l(e,t,n,s){function r(e,t){(e=document.getElementById(e))&&(e.value=t)}r("printess-save-token",e),t&&r("printess-thumbnail-url",t),n&&r("printess-design-id",n),s&&r("printess-additional-settings",JSON.stringify(s))}function s(g){const v={templateNameOrSaveToken:g.templateNameOrSaveToken||g.product.templateName,stickers:[],legalText:g.legalText||"",legalTextUrl:g.legalUrl||"",snippetPrices:[],chargeEachStickerUsage:!1,hidePricesInEditor:void 0!==f.showPricesInEditor&&!1===f.showPricesInEditor,getProductName:()=>(void 0===f.showProductName||!1!==f.showProductName)&&(g.product&&g.product.name)||"",getPriceInfo:()=>null,getMergeTemplates:()=>{let e=[];if(g.mergeTemplates)if("string"==typeof g.mergeTemplates)try{var t=JSON.parse(g.mergeTemplates);if(!Array.isArray(t))return[];e=[...e,...t.map(e=>"string"==typeof e?{templateName:e}:e)]}catch(e){return[]}else e=[...e,...g.mergeTemplates.map(e=>"string"==typeof e?{templateName:e}:e)];return e=g.product.mergeTemplates?[...e,...g.product.mergeTemplates.map(e=>"string"==typeof e?{templateName:e}:e)]:e},formatMoney:e=>f.priceFormatOptions?(!0===f.priceFormatOptions.currencySymbolOnLeftSide?f.priceFormatOptions.currencySymbol:"")+((e,t,n,s)=>{e=(e+"").replace(/[^0-9+\-Ee.]/g,"");e=isFinite(+e)?+e:0,t=isFinite(+t)?Math.abs(t):0,s=void 0===s?",":s,n=void 0===n?".":n,e=(t?function(e,t){t=Math.pow(10,t);return""+Math.round(e*t)/t}(e,t):""+Math.round(e)).split(".");return 3<e[0].length&&(e[0]=e[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,s)),(e[1]||"").length<t&&(e[1]=e[1]||"",e[1]+=new Array(t-e[1].length+1).join("0")),e.join(n)})(""+e,2,f.priceFormatOptions.decimalSeperator,f.priceFormatOptions.thousandsSeperator)+(!0!==f.priceFormatOptions.currencySymbolOnLeftSide?f.priceFormatOptions.currencySymbol:""):parseFloat(""+e).toFixed(2),onFormFieldChanged:(e,s,t,r)=>{var n=o(g.product);let i=e;n[e]?i=n[e].key:n[t]&&(i=n[t].key);e=document.querySelectorAll('input[type="radio"][name="attribute_'+i+'"], input[type="radio"][name="'+i+'"],input[type="radio"][name="attribute_'+t+'"], input[type="radio"][name="'+t+'"]');if(e&&0<e.length)e.forEach(e=>{e.getAttribute("value")===s||e.getAttribute("value")===r?(e.setAttribute("checked",(!0).toString()),e.checked=!0):(e.removeAttribute("checked"),e.checked=!1)});else{n=document.querySelectorAll('select[name="attribute_'+i+'"],select[name="'+i+'"],select[name="attribute_'+t+'"],select[name="'+t+'"]');if(n&&0<n.length)n.forEach(t=>{if(t.options)for(let e=0;e<t.options.length;++e){var n=t.options[e].getAttribute("value");s==n||r===n?(t.options[e].setAttribute("selected",(!0).toString()),t.options[e].selected=!0,t.setAttribute("value",n),t.value=n):(t.options[e].removeAttribute("selected"),t.options[e].selected=!1)}});else{e=document.querySelectorAll('input[name="attribute_'+i+'"],input[name="'+i+'"],input[name="attribute_'+t+'"],input[name="'+t+'"]');const a=["color","date","datetime-local","email","month","number","tel","text","time","url","week"];e&&0<e.length&&e.forEach(e=>{-1<a.indexOf(e.getAttribute("type").toLowerCase())&&e.setAttribute("value",s)})}}},onAddToBasket:(t,n)=>{if("admin"===f.editorMode)w(t,n);else{let e=null;if(v.designId&&((e=e||{}).designId=v.designId),v.designName&&((e=e||{}).designName=v.designName),l(t,n,v.designId?.toString()??"",e),"buyer"===f.editorMode&&f.addToCartAfterCustomization){var s=document.querySelector(p),r=s.querySelector("[name=add-to-cart]"),i=h(g.product);const o=b(i,g.product),d=new URLSearchParams(window.location.search);o&&document.getElementsByName("variation_id").forEach(e=>e.setAttribute("value",o.id.toString())),r.hasAttribute("disabled")&&r.removeAttribute("disabled"),s&&f.cartUrl&&(void 0!==g.basketItemId&&g.basketItemId||(d.has("design_id")||d.has("design_name"))&&(d.get("design_id")||d.get("design_name")))?(s.setAttribute("action",f.cartUrl),(i=document.createElement("input")).setAttribute("id","printess_ignore_redirect"),i.setAttribute("name","printess_ignore_redirect"),i.value="true",s.appendChild(i)):(i=document.getElementById("printess_ignore_redirect"))&&i.remove();try{var a=y();a&&"function"==typeof a.onAddToBasket&&a.onAddToBasket(t,n)}catch(e){console.error(e)}"submit"===r.type?r.click():s.submit();return{executeBeforeClosing:()=>{if(!0===g.product.ajaxEnabled){let e="";g.product&&g.product.redirectUrl&&(e=g.product.redirectUrl),f.cartUrl&&void 0!==g.basketItemId&&g.basketItemId&&(e=f.cartUrl),(e=f.cartUrl&&(d.has("design_id")||d.has("design_name"))&&(d.get("design_id")||d.get("design_name"))?f.cartUrl:e)&&setTimeout(function(){window.location.href=e},200)}},waitUntilClosingMS:1e3}}}},getCurrentFormFieldValues:()=>h(g.product),getPriceForFormFields:e=>{e=b(e,g.product);return e?parseFloat(e.price):g.product.price},getFormFieldMappings:()=>{let e={};if(g.optionValueMappings&&"string"==typeof g.optionValueMappings)try{e=JSON.parse(g.optionValueMappings)}catch(e){console.error("Unable to parse form field mappings: "+e)}return e},onRenderFirstPageImage:e=>{if(v.cameFromSave&&v.lastSaveSaveToken){try{v.onSave(v.lastSaveSaveToken,e,!0)}catch(e){console.error(e)}v.cameFromSave=!1,v.lastSaveSaveToken=""}},onSave:(d,l,e=!1)=>{v.cameFromSave=!0,v.lastSaveSaveToken=d;const o=h(g.product),c=b(o,g.product);if(e){if("admin"===f.editorMode)return void w(d,l);const u=()=>{},m=e=>{var t,n,s,r,i,a,o;e&&e.trim()?(n=f.userMessages&&f.userMessages.savingDesign?f.userMessages.savingDesign:"Saving design to your list of saved designs",(s=document.getElementById("printess_information_overlay_background"))&&((t=document.getElementById("printess_information_overlay_text"))&&(t.innerHTML=n),s.classList.add("visible"),s.getAttribute("data-initialized")||(s.setAttribute("data-initialized","true"),document.body.appendChild(s))),t=d,n=l,s=g.product.id,r=e,e=v.designId,i=h(g.product,!1),a=(e,t)=>{E(),v.designName=e,v.designId=t;try{var n=y();n&&"function"==typeof n.onSave&&n.onSave(d,l)}catch(e){console.error(e)}},o=e=>{E(),alert(e),_(v.designName,f.userIsLoggedIn?m:p,u)},t={saveToken:t,thumbnailUrl:n,productId:s,displayName:r,options:JSON.stringify(i)},"string"==typeof e&&e?(n=parseInt(e),!isNaN(n)&&0<n&&(t.designId=n)):"number"==typeof e&&e&&!isNaN(e)&&0<e&&(t.designId=e),fetch("/index.php/wp-json/printess/v1/design/add",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","X-WP-Nonce":f.nonce},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then(e=>(e.ok?e.json().then(e=>{"function"==typeof a&&a(r,e)}):(console.error(e.statusText),"function"==typeof o&&o(f.userMessages&&f.userMessages.saveError?f.userMessages.saveError:"There was an error while trying to save your design")),e)).catch(function(e){console.log(e),"function"==typeof o&&o(f.userMessages&&f.userMessages.saveError?f.userMessages.saveError:"There was an error while trying to save your design")})):(alert(f.userMessages&&f.userMessages.noDisplayName?f.userMessages.noDisplayName:"Please provide a display name."),_(v.designName,f.userIsLoggedIn?m:p,u))},p=e=>{var t,n,s,r,i,a;[t,n,s,r,i,a=null]=[e,g.product.id,c?c.id:null,d,l,o],t&&t.trim()&&f.accountPageUrl?(n=f.accountPageUrl.replace("__ProductId__",""+n.toString()).replace("__SaveToken__",""+r).replace("__ThumbnailUrl__",encodeURIComponent(i)).replace("__VariantId__",""+s).replace("__Options__",encodeURIComponent(JSON.stringify(a??{}))).replace("__Token__",encodeURIComponent(f.urlToken||"")).replace("__DisplayName__",""+t.trim()),window.location.href=n):(alert(f.userMessages&&f.userMessages.noDisplayName?f.userMessages.noDisplayName:"Please provide a display name."),_(e,f.userIsLoggedIn?m:p,u))};_(v.designName,f.userIsLoggedIn?m:p,u)}else{var t="renderFirstPageImage";var n=null;const s=document.getElementById("printess");s&&setTimeout(function(){s.contentWindow.postMessage({cmd:t,properties:n||{}},"*")},0)}},getBasketId:()=>g.basketId,getUserId:()=>g.userId,editorClosed:e=>{var t;r.hide(),v.designId=null,v.designName=null,e&&l("","","",null),"buyer"===f.editorMode?"undefined"!=typeof URLSearchParams&&(t=new URLSearchParams(window.location.search),e&&t.has("design_id")||t.has("design_name")||t.has("printess-save-token"))&&(t.delete("design_id"),t.delete("design_name"),t.delete("printess-save-token"),window.location.search=t.toString()):(e=f.userMessages&&f.userMessages.closeWindow?f.userMessages.closeWindow:"Please close this window or tab.",alert(e))}};var e=h(g.product);(e=b(e,g.product))&&e.templateName&&(v.templateNameOrSaveToken=e.templateName);var t=(e=new URLSearchParams(window.location.search)).get("printess-save-token")||e.get("printess_save_token"),n=e.get("design_name"),e=e.get("design_id");return t&&(v.templateNameOrSaveToken=t),n&&(v.designName=n),e&&(v.designId=parseInt(e)),v}function g(e){let t="";var n=b(h(e),e),s=!(!e.variants||void 0===e.variants.find(e=>e.templateName));(t=null!=n&&n.templateName?n.templateName:t)||s||(t=e.templateName),I(t&&0<t.length)}function v(n){window.jQuery?window.jQuery("form").on("found_variation",(e,t)=>{g(n)}):setTimeout(v,100)}const y=()=>window&&window.printessGlobalConfig?window.printessGlobalConfig:{},h=function(t,n=!0){var s={},e={"add-to-cart":!0,product_id:!0,quantity:!0,variation_id:!0},r=y();if(r&&r.formFields)for(const c in r.formFields)r.hasOwnProperty(c)&&(s[c]=r.formFields[c]);function i(e){return n&&0===e.indexOf("attribute_")&&(e=e.substring(10,e.length)),e=t.attributes&&t.attributes[e]?t.attributes[e].name:e}var a=document.querySelector(p);if(a){for(const u of new FormData(a).entries()){var o=i(u[0]);0<o.length&&"_"!==o[0]&&!e[o]&&0!==o.indexOf("printess-")&&(s[o]=u[1].toString())}var d,l=a.querySelectorAll('input[type="checkbox"]');if(l&&0<l.length)for(let e=0;e<l.length;++e)void 0!==l[e].checked&&!0===l[e].checked&&0<(d=i(l[e].name)).length&&"_"!==d[0]&&(s[d]="true")}return s},o=e=>{var t={};if(e&&e.attributes)for(const n in e.attributes)e.attributes.hasOwnProperty(n)&&(t[e.attributes[n].name]=e.attributes[n]);return t},b=function(e,t){let n=t.variants?t.variants[0]:null;var s=o(t),r=[];for(const i in e)e.hasOwnProperty(i)&&s[i]&&r.push({key:s[i].key,value:e[i]});if(t.variants){let e=t.variants;r.forEach(t=>{e=e.filter(e=>e.attributes[t.key]===t.value)}),0<e.length&&(n=e[0])}return n},c=()=>{var e=document.getElementById("printess_overlay_background");e&&e.classList.remove("visible")},_=(e,n,t)=>{var s=document.getElementById("printess_show_if_not_logged_in");const r=document.getElementById("printess_overlay_background");let i=()=>{};const a=e=>{e.srcElement&&("input"===e.srcElement.nodeName.toLowerCase()||null!=e.srcElement.closest("div.printess_overlay_background"))||(e.preventDefault(),e.stopPropagation())},o=()=>{if(c(),i(),"function"==typeof n){let e="";var t=document.getElementById("printess_designnameedit");t&&(e=t.value),n(e)}},d=()=>{c(),i(),"function"==typeof t&&t()};i=()=>{var e=document.getElementById("printess_save_design_button"),e=(e&&e.removeEventListener("click",o),document.getElementById("printess_cancel_button"));e&&e.removeEventListener("click",d),r&&(r.removeEventListener("mousedown",a),r.removeEventListener("mouseup",a),r.removeEventListener("mousemove",a))},s&&(f.userIsLoggedIn?s.classList.add("logged_in"):s.classList.remove("logged_in"));var s=document.getElementById("printess_show_if_no_design_name"),l=document.getElementById("printess_show_if_design_name"),s=(s&&l&&(e?(s.classList.remove("visible"),l.classList.add("visible")):(s.classList.add("visible"),l.classList.remove("visible"))),document.getElementById("printess_designnameedit")),l=(s&&(s.value=e||""),r&&(r.addEventListener("mousedown",a),r.addEventListener("mouseup",a),r.addEventListener("mousemove",a),r.getAttribute("data-initialized")||(document.body.appendChild(r),r.setAttribute("data-initialized","true")),r.classList.add("visible")),document.getElementById("printess_save_design_button")),s=(l&&l.addEventListener("click",o),document.getElementById("printess_cancel_button"));s&&s.addEventListener("click",d)},E=()=>{var e=document.getElementById("printess_information_overlay_background");e&&e.classList.remove("visible")},w=(e,t)=>{var n=document.getElementById("printess-admin-save"),s=document.getElementById("printess-loading-message"),r=document.getElementById("printess-saving-message");s?.style.setProperty("display","none"),r?.style.setProperty("display","block"),n?(n.href+="&pst="+e,n.href+="&ptu="+encodeURI(t),n.click()):alert("Error: Redirect link not found. Unable to save changes")},I=function(t){var e=document.getElementsByName("printess-customize-button"),n=document.querySelector(p+" button.single_add_to_cart_button");e&&0!==e.length&&(n&&(t?n.setAttribute("disabled","disabled"):n.removeAttribute("disabled"),n.style.display=t?"none":"inline-block"),e.forEach(e=>e.style.display=t?"inline-block":"none"))},r={show:function(e){if(!(e=>{var t=o(e),n=[],s=h(e);for(const r in s)s.hasOwnProperty(r)&&t[r]&&n.push({key:t[r].key,value:s[r]});for(const i in n)if(n.hasOwnProperty(i)&&!n[i].value)return!0;return!1})(e.product)){var e=s(e),t=(f.idsToHide&&f.idsToHide.forEach(e=>{e=document.getElementById(e);e&&e.classList.add("printess-hide")}),f.classesToHide&&f.classesToHide.forEach(e=>{e=document.getElementsByClassName(e);if(e&&e.length)for(const t of e)t.classList.add("printess-hide")}),y());if(t&&t.attachParams)for(const n in t.attachParams)t.attachParams.hasOwnProperty(n)&&(f.attachParams||(f.attachParams={}),f.attachParams[n]=t.attachParams[n]);"function"==typeof window.initPrintessEditor&&window.initPrintessEditor(f).show(e)}},hide:function(){f.idsToHide.forEach(e=>{e=document.getElementById(e);e&&e.classList.remove("printess-hide")}),f.classesToHide.forEach(e=>{e=document.getElementsByClassName(e);if(e&&e.length)for(const t of e)t.classList.remove("printess-hide")})},initProductPage:function(e,t,n,s="Customize",r,i=p){i=document.querySelector(i||p);if(i){{var a=t;var o=document.createElement("input"),d=document.createElement("input"),l=document.createElement("input"),c=document.createElement("input"),u=document.createElement("input");const m=document.createElement("button");o.setAttribute("id","printess-save-token"),o.setAttribute("name","printess-save-token"),o.setAttribute("type","hidden"),u.setAttribute("id","printess-additional-settings"),u.setAttribute("name","printess-additional-settings"),u.setAttribute("type","hidden"),d.setAttribute("id","printess-save-token-to-remove-from-cart"),d.setAttribute("name","printess-save-token-to-remove-from-cart"),d.setAttribute("type","hidden"),d.setAttribute("value",a||""),l.setAttribute("id","printess-thumbnail-url"),l.setAttribute("name","printess-thumbnail-url"),l.setAttribute("type","hidden"),c.setAttribute("id","printess-design-id"),c.setAttribute("name","printess-design-id"),c.setAttribute("type","hidden"),m.setAttribute("id","printess-customize-button"),m.setAttribute("name","printess-customize-button"),m.setAttribute("type","button"),m.setAttribute("onclick","showPrintessEditor();"),m.classList.add("wp-element-button","single_add_to_cart_button","button","alt"),f.customizeButtonClasses&&f.customizeButtonClasses.split(" ").forEach(e=>{(e=(e||"").trim())&&m.classList.add(e)}),m.appendChild(document.createTextNode(s||"Customize")),n&&m.classList.add(n);a=document.querySelector(p+" button.single_add_to_cart_button");(a&&a.parentElement?a.parentElement:i).appendChild(m),i.appendChild(o),i.appendChild(d),i.appendChild(l),i.appendChild(c),i.appendChild(u)}t&&I(!0)}v(e),g(e);s=new URLSearchParams(window.location.search).get("printess-save-token");s&&"function"==typeof r&&r(s)}};return window.printessWooEditor=r};