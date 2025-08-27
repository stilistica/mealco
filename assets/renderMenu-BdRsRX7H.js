function o(r,a){const c=document.querySelector(a);r.forEach(l=>{const n=document.createElement("li");n.classList.add("menu-category"),n.innerHTML=`
    <h2 class="menu-cat-title">${l.name}</h2>
    <ul class="menu-items">
      ${l.items.map(e=>`
        <li class="menu-item">
          ${e.imgUrl&&e.imgUrl.trim()!==""?`
            <img src="${e.imgUrl}" alt="${e.product}"/>
            <div>
              <p class="menu-name">${e.product}</p>
              <p class="menu-price">${e.price}</p>
            </div>`:`
            <div class="menu-info">
              <p class="menu-name">${e.product}</p>
              <p class="menu-price">${e.price}</p>
            </div>
            `}
        </li>
        `).join("")}
    </ul>
    `,c.appendChild(n)})}function u(r,a,c){const l=document.querySelector(a),n=document.querySelector(c);if(r.length<=1){l.innerHTML="";return}const e=["All",...r.map(t=>t.name)];l.innerHTML=e.map(t=>`
    <li>
      <button class="filter-btn"  data-filter="${t}">${t}</button>
    </li>
  `).join(""),l.querySelectorAll(".filter-btn").forEach(t=>{t.addEventListener("click",()=>{if(l.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),t.classList.add("active"),n.innerHTML="",t.dataset.filter==="All")o(r,c);else{const i=r.filter(d=>d.name===t.dataset.filter);o(i,c)}})});const s=l.querySelector('.filter-btn[data-filter="All"]');s&&s.classList.add("active")}export{u as a,o as r};
//# sourceMappingURL=renderMenu-BdRsRX7H.js.map
