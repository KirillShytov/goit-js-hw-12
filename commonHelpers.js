import{i as f,S as h,a as E}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const P="42038034-2f13ad7c323f856cf793448ff",S="https://pixabay.com/api/",k=document.querySelector(".form-inline"),o=document.querySelector(".card-container"),s=document.querySelector(".label"),m=document.getElementById("preloader"),c={q:"",page:1,maxPage:0,per_page:40};let g="";const p="is-hidden";function d(e){e.classList.add(p)}function y(e){e.classList.remove(p)}function q(e,r){r.classList.add(p),e.disabled=!1}function w(e,r){r.classList.remove(p),e.disabled=!0}function M(){o.innerHTML='<div class="loader"></div>'}function H(){const e=o.querySelector(".loader");e&&e.remove()}k.addEventListener("submit",T);async function T(e){e.preventDefault(),o.innerHTML="";const r=e.currentTarget,a=r.elements.picture.value.trim();if(g=a,c.page=1,a===""||a==null){f.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),o.innerHTML="",d(s);return}M();try{const{hits:i,totalHits:t}=await v(a);i&&i.length>0?(c.maxPage=Math.ceil(t/c.per_page),L(i,o),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),i&&i.length>0&&i.length!==t?(y(s),s.removeEventListener("click",u),s.addEventListener("click",u)):d(s)):(o.innerHTML="",f.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),d(s))}catch(i){console.log(i)}finally{H(),r.reset()}}function v(e,r=1){return E.get(S,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}}).then(a=>a.data)}async function u(){c.page+=1,w(s,m);try{const{hits:e}=await v(g,c.page);L(e,o);const r=o.querySelector(".picture-link").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(e){console.log(e)}finally{q(s,m),c.page>=c.maxPage?(d(s),f.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`}),s.removeEventListener("click",u)):(y(s),s.removeEventListener("click",u),s.addEventListener("click",u))}}function L(e,r){const a=e.map(({webformatURL:i,likes:t,views:n,comments:l,downloads:b,largeImageURL:x})=>`<a href="${x}" class= "picture-link">
    <img src = "${i}">
    <div class= "picture-content">
        <div class= "picture-text">
            <span class= "picture-title">Likes</span>
            <span class= "picture-sub-title">${t}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Views</span>
            <span class= "picture-sub-title">${n}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Comments</span>
            <span class= "picture-sub-title">${l}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Downloads</span>
            <span class= "picture-sub-title">${b}</span>
        </div>
    </div>
</a>`).join();r.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=commonHelpers.js.map
