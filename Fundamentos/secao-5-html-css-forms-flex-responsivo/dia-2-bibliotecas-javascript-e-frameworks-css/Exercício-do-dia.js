const submit = (event) => {
    event.preventDefault();
  };
  
  window.onload = function () {
    const button = document.querySelector('#submit-btn');
    button.addEventListener('click', submit);
  };
  
  const toggleSubmitButton = () => {
    const buttonSubmit = document.getElementById('submit-btn');
    buttonSubmit.disabled = !buttonSubmit.disabled;
  };
  
  const agreementCheckbox = document.getElementById('agreement');
  agreementCheckbox.addEventListener('click', toggleSubmitButton);