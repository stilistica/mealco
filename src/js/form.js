const form = document.querySelector('.form-div form');
const formInfo = document.querySelector('.form-info');
const inputs = form.querySelectorAll('input');
const btnForm = form.querySelector('.btn-form');

document.addEventListener('DOMContentLoaded', () => {
  btnForm.disabled = true;

  function validateInput(input) {
    const formGroup = input.closest('.form-group');

    if (input.checkValidity()) {
      formGroup.classList.remove('invalid');
      formGroup.classList.add('valid');
    } else {
      formGroup.classList.remove('valid');
      formGroup.classList.add('invalid');
    }
  }
  function checkFormValidity() {
    if (form.checkValidity()) {
      btnForm.classList.add('enabled');
      btnForm.disabled = false;
    } else {
      btnForm.classList.remove('enabled');
      btnForm.disabled = true;
    }
  }

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateInput(input);
      checkFormValidity();
    });
    input.addEventListener('blur', () => {
      validateInput(input);
      input.closest('.form-group').classList.remove('valid');
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.checkValidity()) {
      formInfo.innerHTML = `
      <div class="form-success">
        <h1>Thank you for your interest!</h1>
        <p>Someone from our team will be reaching out soon. In the meantime, check our brands.</p>
        <a href="./brands.html">Check brands</a>
      </div>
      `;
    }
  });
});
