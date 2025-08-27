function o(c,n){const r=document.querySelector(n);c.forEach(t=>{const a=document.createElement("li");a.classList.add("menu-category"),a.innerHTML=`
    <h2 class="menu-cat-title">${t.name}</h2>
    <ul class="menu-items">
      ${t.items.map(e=>`
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
    `,r.appendChild(a)})}function u(c,n,r){const t=document.querySelector(n),a=document.querySelector(r),e=["All",...c.map(l=>l.name)];t.innerHTML=e.map(l=>`
    <li>
      <button class="filter-btn"  data-filter="${l}">${l}</button>
    </li>
  `).join(""),t.querySelectorAll(".filter-btn").forEach(l=>{l.addEventListener("click",()=>{if(t.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),l.classList.add("active"),a.innerHTML="",l.dataset.filter==="All")o(c,r);else{const s=c.filter(d=>d.name===l.dataset.filter);o(s,r)}})});const i=t.querySelector('.filter-btn[data-filter="All"]');i&&i.classList.add("active")}export{u as a,o as r};
//# sourceMappingURL=renderMenu-CgYKLdIr.js.map
