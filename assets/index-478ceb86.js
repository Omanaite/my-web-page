(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c={_origin:"https://api.emailjs.com"},f=(r,e="https://api.emailjs.com")=>{c._userID=r,c._origin=e},u=(r,e,s)=>{if(!r)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const m=(r,e,s={})=>new Promise((i,t)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:n})=>{const d=new l(n);d.status===200||d.text==="OK"?i(d):t(d)}),o.addEventListener("error",({target:n})=>{t(new l(n))}),o.open("POST",c._origin+r,!0),Object.keys(s).forEach(n=>{o.setRequestHeader(n,s[n])}),o.send(e)}),p=(r,e,s,i)=>{const t=i||c._userID;return u(t,r,e),m("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:t,service_id:r,template_id:e,template_params:s}),{"Content-type":"application/json"})},g=r=>{let e;if(typeof r=="string"?e=document.querySelector(r):e=r,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},h=(r,e,s,i)=>{const t=i||c._userID,o=g(s);u(t,r,e);const n=new FormData(o);return n.append("lib_version","3.10.0"),n.append("service_id",r),n.append("template_id",e),n.append("user_id",t),m("/api/v1.0/email/send-form",n)},y={init:f,send:p,sendForm:h},b=document.getElementById("burger-toggler"),_=document.getElementById("sm-menu-ref-1"),E=document.getElementById("sm-menu-ref-2"),v=document.getElementById("sm-menu-ref-3"),L=document.getElementById("sm-menu-ref-4");function a(){const r=document.getElementById("sm-menu-ref");r.classList.toggle("hidden"),r.classList.toggle("come-front-menu")}b.onclick=a;_.onclick=a;E.onclick=a;v.onclick=a;L.onclick=a;window.onload=function(){document.getElementById("contact-form").addEventListener("submit",function(e){e.preventDefault(),this.contact_number.value=Math.random()*1e5|0,y.sendForm("service_6m0dxxd","template_leql0vj","#contact-form","PLBc_dlxma86zACkP").then(function(){console.log("SUCCESS!")},function(s){console.log("FAILED...",s)})})};
