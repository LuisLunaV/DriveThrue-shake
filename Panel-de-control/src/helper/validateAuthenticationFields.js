const comparePasswords =()=>{
    const passwordInput       = document.getElementById("passwordUno");
    const repitePasswordInput = document.getElementById("passwordDos");

    return (passwordInput.value !== repitePasswordInput.value)?false:true;

}

const authFailure =( err )=>{
    const textBoxNumEmpleado = document.querySelector('#login_NumEmpleado'),
         textBoxPassword     = document.querySelector('#login_Password');

if( err.User_error ){
   textBoxNumEmpleado.classList.add('shake-horizontal');
   setTimeout(()=>{
   textBoxNumEmpleado.classList.remove('shake-horizontal');
   }, 4000)};

   if( err.Password_error ){
       textBoxPassword.classList.add('shake-horizontal');
       setTimeout(()=>{
       textBoxPassword.classList.remove('shake-horizontal');
       }, 4000)};
}




export{
    comparePasswords,
    authFailure
}