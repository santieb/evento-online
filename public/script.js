const msj = document.getElementById('msj');
const app_port = 4000;



const callUsers = async () => {
    let resp;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch(`http://localhost:${app_port}/usuarios`, requestOptions)
        .then(response => response.text())
        .then(result => resp = result)
        .catch(error => console.log('error', error));
    return resp;
}



const newUser = async (dataInput) => {
    let resp;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = {
        username: dataInput.name,
        name: dataInput.lastname,
        email: dataInput.email,
  //      password: dataInput.password
    }

    let requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch(`http://localhost:${app_port}/usuarios`, requestOptions)
        .then(response => response.text())
        .then(result => resp = result)
        .catch(error => console.log('error', error));
    return resp;
}

const showUsers = async () => {
    let nombres = '';
    let data = await callUsers();
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
        if (i == 0) {
            nombres += ' ' + data[i].name;
        } else if (i + 1 == data.length) {
            nombres += ' y ' + data[i].name
        } else {
            nombres += ', ' + data[i].name
        }
    }
    return nombres;
}


const deleteAll = async () => {
    let resp;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch(`http://localhost:${app_port}/usuarios`, requestOptions)
        .then(response => response.text())
        .then(result => resp = result)
        .catch(error => console.log('error', error));
    return resp;
}

const deleteUser = async (name) => {
    let resp;
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch(`http://localhost:${app_port}/usuarios/${name}`, requestOptions)
        .then(response => response.text())
        .then(result => resp = result)
        .catch(error => console.log('error', error));
    return resp;
}