import"./assets/styles-Chol5NV2.js";import"./assets/header-BM3AV4Bt.js";function l(t,a){const o=document.querySelector(a);t.forEach(s=>{const c=document.createElement("li");c.classList.add("menu-category"),c.innerHTML=`
    <h2 class="menu-cat-title">${s.name}</h2>
    <ul class="menu-items">
      ${s.items.map(r=>`
        <li class="menu-item">
          <img src="${r.imgUrl}" alt="${r.product}"/>
          <div>
          <p class="menu-name">${r.product}</p>
          <p class="menu-price">${r.price}</p>
          </div>
        </li>
        `).join("")}
    </ul>
    `,o.appendChild(c)})}function u(t,a,o){const s=document.querySelector(a),c=document.querySelector(o),r=["All",...t.map(e=>e.name)];s.innerHTML=r.map(e=>`
    <li>
      <button class="filter-btn"  data-filter="${e}">${e}</button>
    </li>
  `).join(""),s.querySelectorAll(".filter-btn").forEach(e=>{e.addEventListener("click",()=>{if(s.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),e.classList.add("active"),c.innerHTML="",e.dataset.filter==="All")l(t,o);else{const i=t.filter(p=>p.name===e.dataset.filter);l(i,o)}})});const n=s.querySelector('.filter-btn[data-filter="All"]');n&&n.classList.add("active")}const d="/mealco/assets/multiples-pick-CdNBs2b_.png",h="/mealco/assets/multiples-half-Di-wzCpt.png",$="/mealco/assets/puds-praline-DzGp3Aug.png",g="/mealco/assets/puds-salt-DFSEsXnQ.png",k="/mealco/assets/puds-smores-AJ6sS3-Z.png",f="/mealco/assets/messes-berry-DTHV0FZT.png",C="/mealco/assets/messes-roasted-LownBbAf.png",M="/mealco/assets/messes-cookies-BofjgFTb.png",U="/mealco/assets/messes-mocha-KxIt1_EO.png",y="/mealco/assets/cakes-chocolatey-BI9ZbIc8.png",L="/mealco/assets/cakes-berry-v-CL10XfVo.png",B="/mealco/assets/cakes-viktoria-RJrB85w-.png",P="/mealco/assets/cakes-whoopie-E1TzPQL0.png",S="/mealco/assets/cakes-dulce-BT1be7zP.png",b="/mealco/assets/cakes-berry-ch-DK-9HYJp.png",v="/mealco/assets/cakes-black-M5gsk_K4.png",E="/mealco/assets/cakes-streusel-DWwl2DTh.png",m=[{name:"Multiples",items:[{product:"Pick Three",price:"$22",imgUrl:`${d}`},{product:"Half Doz Assortment",price:"$39",imgUrl:`${h}`}]},{name:"Puds",items:[{product:"Praline Chocolate Pud",price:"$8",imgUrl:`${$}`},{product:"Salt of the Earth Pud",price:"$8",imgUrl:`${g}`},{product:"S'mores Pud",price:"$8",imgUrl:`${k}`}]},{name:"Messes",items:[{product:"Berry Mess",price:"$8",imgUrl:`${f}`},{product:"Roasted Coconut Mess",price:"$8",imgUrl:`${C}`},{product:"Cookies & Cream Mess",price:"$8",imgUrl:`${M}`},{product:"Mocha Mess",price:"$8",imgUrl:`${U}`}]},{name:"Cakes",items:[{product:"Chocolatey Uno Mas Leche",price:"$7",imgUrl:`${y}`},{product:"Berry Vanilla Chiffon Cake",price:"$7",imgUrl:`${L}`},{product:"Victoria`s Birthday Cake",price:"$7",imgUrl:`${B}`},{product:"Whoopie Pie",price:"$7",imgUrl:`${P}`},{product:"Dulce Lemon Cake",price:"$7",imgUrl:`${S}`},{product:"Berry Cheesecake",price:"$7",imgUrl:`${b}`},{product:"Black Forest Cake",price:"$7",imgUrl:`${v}`},{product:"Streusel Sour Cream Coffee",price:"$7",imgUrl:`${E}`}]}];document.addEventListener("DOMContentLoaded",()=>{l(m,".list-menu"),u(m,".filter-menu",".list-menu")});
//# sourceMappingURL=moreish.js.map
