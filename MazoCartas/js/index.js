let button = document.getElementById('form_login');
button.addEventListener('click', ev => {
  ev.preventDefault();
  const user = document.getElementById('user');
  const pass = document.getElementById('password');


  if (isValidUser(user, pass)) {
    const user_data = {
      user: 'admin',
      password: '1234',
    }
    location.replace('./html/poker_club.html');
  }
});

function isValidUser(user, pass) {
  const user_error=document.getElementById('form_usuario_error');
  const pass_error=document.getElementById('form_contra_error');

  if (user.value==='admin'&&pass.value==='1234') {
    return true;
  }

  if (user.value!=='admin') {
    user_error.textContent='Usuario invalido';
  }

  if (pass.value!=='1234') {
    pass_error.textContent='Contraseña invalida';
  }

  setTimeout(()=>{
    user_error.textContent='';
    pass_error.textContent='';
  }, 4000);

  return false;
}