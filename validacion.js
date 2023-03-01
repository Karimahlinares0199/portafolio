//Haz tú validación en javascript acá

const usuario = document.getElementById("usuario")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const mensaje = document.getElementById("mensaje")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

formulario.addEventListener('submit', e=>{
    let warnings = ""
    e.preventDefault();
    let regexEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    let entrar = false;
    parrafo.innerHTML = ""
    if (usuario.value.length < 3){
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }

    if (!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`;
        entrar = true;
    }

    if (asunto.value.length < 6){
        warnings += `El asunto no es válido <br>`;
        entrar = true;
    }

    if (mensaje.value.length < 15){
        warnings += `El mensaje debe tener minimo 15 caracteres <br>`;
        entrar = true;
    }
    if (entrar){
        parrafo.innerHTML = warnings;
    }

    else{
        parrafo.innerHTML = `Enviado`
    }
})