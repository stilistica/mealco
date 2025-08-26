import"./assets/styles-BxkRZPyj.js";const s=document.querySelector(".form-div form"),i=document.querySelector(".form-info"),d=s.querySelectorAll("input"),o=s.querySelector(".btn-form");document.addEventListener("DOMContentLoaded",()=>{o.disabled=!0;function r(e){const t=e.closest(".form-group");e.checkValidity()?(t.classList.remove("invalid"),t.classList.add("valid")):(t.classList.remove("valid"),t.classList.add("invalid"))}function a(){s.checkValidity()?(o.classList.add("enabled"),o.disabled=!1):(o.classList.remove("enabled"),o.disabled=!0)}d.forEach(e=>{e.addEventListener("input",()=>{r(e),a()}),e.addEventListener("blur",()=>{r(e),e.closest(".form-group").classList.remove("valid")})}),s.addEventListener("submit",e=>{e.preventDefault(),s.checkValidity()&&(i.innerHTML=`
      <div class="form-success">
        <h1>Thank you for your interest!</h1>
        <p>Someone from our team will be reaching out soon. In the meantime, check our brands.</p>
        <a href="./brands.html">Check brands</a>
      </div>
      `)})});
//# sourceMappingURL=form.js.map
