import{a as y,S as q,i as E}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g=15;y.defaults.baseURL="https://pixabay.com/api/";const F="42577759-46afea0faf18c5517840853c6";async function h(s,e){const{data:a}=await y.get("",{params:{page:s,per_page:g,key:F,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return a}function L(s,e){const a=s.map(({webformatURL:l,largeImageURL:t,tags:r,likes:i,views:S,comments:b,downloads:w})=>`<li class="gallery-item">
                    <a href="${t}">
                        <img class="gallery-image"
                            src="${l}" 
                            alt="${r}" />
                    </a>
                    <ul class="image-info">
                        <li class="image-info-item">Likes<p class="info">${i}</p></li>
                        <li class="image-info-item">Views<p class="info">${S}</p></li>
                        <li class="image-info-item">Comments<p class="info">${b}</p></li>
                        <li class="image-info-item">Downloads<p class="info">${w}</p></li>
                    </ul>
                </li>`).join("");e.insertAdjacentHTML("beforeend",a)}const m=document.querySelector(".gallery-list"),p=document.querySelector(".form"),M=document.querySelector(".input-value-js"),c=document.querySelector(".form-container div"),f=document.querySelector(".loading"),o=document.querySelector(".load-more-markup"),v=new q(".gallery-list a",{captionsData:"alt",captionDelay:250});let u,d;o.classList.add("hidden");p.addEventListener("submit",P);async function P(s){if(s.preventDefault(),u=1,d=M.value.trim(),m.innerHTML=null,o.classList.add("hidden"),d===""){n("Sorry, input is emty!","#FFA000");return}c.classList.add("loader");try{const e=await h(u,d);if(e.total===0){c.classList.add("loader"),n("Sorry, there are no images matching your search query. Please try again!","#EF4040"),c.classList.remove("loader"),p.reset();return}L(e.hits,m),v.refresh(),c.classList.remove("loader"),o.classList.remove("hidden")}catch{n("Error","#EF4040")}p.reset()}o.addEventListener("click",$);async function $(s){u++,f.classList.add("loader"),o.classList.add("hidden");try{const e=await h(u,d);if(L(e.hits,m),window.scrollBy({top:800,behavior:"smooth"}),e.totalHits<g)return o.classList.add("hidden"),f.classList.remove("loader"),n("We're sorry, but you've reached the end of search results.","#FFA000");v.refresh(),f.classList.remove("loader"),o.classList.remove("hidden")}catch{n("Error")}}function n(s,e){E.info({position:"topRight",message:s,messageColor:"#ffffff",backgroundColor:e,messageSize:16,layout:2,maxWidth:380})}
//# sourceMappingURL=commonHelpers.js.map
