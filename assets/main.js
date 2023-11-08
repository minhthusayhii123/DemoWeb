const input = document.querySelector('#password');
const eye = document.querySelector('#eye');

eye.addEventListener('click', function(){
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
  const type = input.getAttribute('type') === 'password' ? 'text':'password';
  
  
  input.setAttribute('type', type);
});