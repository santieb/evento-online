
//EVENT BOTTON PARA MOSTRAR TODOS LOS USUARIOS
/* document.getElementById('showUser').addEventListener('click', async () => {
    msj.style.display = 'block';
    document.getElementById('inputData').style.display = 'none';
    document.getElementById('inputDelete').style.display = 'none';

    let data = await showUsers();
    msj.style.color = '#015fac';
    msj.innerHTML = `<span style = "color : #18a300" >Usuarios Registrados: </span> ${data}`;

}) */

//EVENT BOTTON PARA MOSTRAR LOS INPUTS PARA ENVIAR LOS DATOS DE USUARIO
/* document.getElementById('newUser').addEventListener('click', () => {
    msj.style.display = 'none';
    document.getElementById('inputData').style.display = 'block';
    document.getElementById('inputDelete').style.display = 'none';

}) */

//EVENT BOTTON PARA ENVIAR LOS DATOS
document.getElementById('send').addEventListener('click', () => {
    let data = {};
    console.log("llego");
  ////   data.username = document.getElementById('username').value;
    data.name = document.getElementById('name').value;
    data.username = document.getElementById('lastname').value;
    data.email = document.getElementById('email').value;
   // data.password = document.getElementById('password').value;

    document.getElementById('lastname').value = '';
    document.getElementById('name').value = '';
    // 
    document.getElementById('email').value = '';

    newUser(data);

    /* msj.style.display = 'block';
    msj.style.color = '#015fac';
    msj.textContent = 'Datos enviados.';
 */})

/* //EVENT BOTTON PARA BORRAR TODOS LOS USUARIOS
document.getElementById('deleteAll').addEventListener('click', async () => {
    msj.style.display = 'block';
    document.getElementById('inputData').style.display = 'none';
    document.getElementById('inputDelete').style.display = 'none';

    let response = await deleteAll();
    response  = JSON.parse(response);
    msj.style.color = '#9e0d00';
    msj.textContent = response.msj;
})

//EVENT BOTTON PARA MOSTRAR LOS INPUTS PARA ELIMINAR UN USUARIO
document.getElementById('deleteUser').addEventListener('click', () => {
    msj.style.display = 'none';
    document.getElementById('inputData').style.display = 'none';
    document.getElementById('inputDelete').style.display = 'block';
})

//EVENT BOTTON PARA ENVIAR EL NOMBRE DEL USUARIO A ELIMINAR
document.getElementById('sendDelete').addEventListener('click',async () => {
    
    let user = document.getElementById('userDelete').value;
    document.getElementById('userDelete').value = '';
    let response = await deleteUser(user);
    console.log(response);

    msj.style.display = 'block';
    msj.style.color = '#015fac';
    msj.textContent = 'Datos enviados.';
}) */