import{S as p,i as a}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(i){const r="42577759-46afea0faf18c5517840853c6",o="https://pixabay.com/api/?key=",s=i,e=o+r+"&q="+s+"&image_type=photo&orientation=horizontal&safesearch=true";return fetch(e).then(t=>{if(!t.ok)throw new Error(`Error with status ${t.status}`);return t.json()}).catch(t=>{console.log(t)})}function g(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`<li class="gallery-item">
                    <a href="${s}">
                        <img class="gallery-image"
                            src="${o}" 
                            alt="${e}" />
                    </a>
                    <ul class="image-info">
                        <li class="image-info-item">Likes<p class="info">${t}</p></li>
                        <li class="image-info-item">Views<p class="info">${n}</p></li>
                        <li class="image-info-item">Comments<p class="info">${f}</p></li>
                        <li class="image-info-item">Downloads<p class="info">${m}</p></li>
                    </ul>
                </li>`).join("");c.innerHTML=r}const c=document.querySelector(".gallery"),u=document.querySelector(".form"),y=document.querySelector(".input-value-js"),l=document.querySelector(".form-container div");u.addEventListener("submit",L);const h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){i.preventDefault(),c.innerHTML="";const r=y.value.trim();if(r===""){a.warning({title:"Caution",message:"Input is empty"}),console.log(5);return}else l.classList.add("loader"),d(r).then(o=>{o.total===0&&a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g(o.hits),l.classList.remove("loader"),h.refresh()}),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
