import e from"react";!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".button{background-color:#1b116e;border:0;border-radius:3px;color:#fff;cursor:pointer;display:inline-block;font-size:15px;font-weight:700;line-height:1;opacity:1;padding:14px 30px 16px}");var t=function(t){var o=t.size,r=t.primary,n=t.disabled,i=t.text,a=t.outline,d=t.onClick,p=r?"teal":"#1b116e",c={backgroundColor:a?"transparent":p,opacity:n?.3:1,cursor:n?"default":"pointer",padding:function(e){switch(e){case"small":return"12px 30px 14px";case"medium":default:return"14px 30px 16px";case"large":return"16px 30px 20px"}}(o),border:a?"solid 2px ".concat(p):"none",color:a?p:"white"};return e.createElement("button",{className:"button",type:"button",style:c,onClick:d,disabled:n},i||"Save")};export{t as Button};
//# sourceMappingURL=index.js.map
