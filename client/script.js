const msj = document.getElementById('msj')
const app_port = 4000

const newUser = async (dataInput) => {
  let resp
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const data = {
    username: dataInput.name,
    name: dataInput.lastname,
    email: dataInput.email
  }

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: myHeaders,
    redirect: 'follow'
  }

  await fetch(`http://localhost:${app_port}/users`, requestOptions)
    .then(response => response.text())
    .then(result => resp = result)
    .catch(error => console.log('error', error))
  return resp
}
