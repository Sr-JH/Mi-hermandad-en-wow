function checkPassword(){
    let userPassword=document.getElementById('userPassword').value;
    let passwordMessage=document.getElementById('passwordMessage')
if(userPassword === 'Destructores587'){
    passwordMessage.textContent= "¡Correcto!";
    
window.location.href='principal.html'
}else{
    passwordMessage.textContent= "¡incorrecta intentelo otra vez!";
}

}

