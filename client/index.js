document.getElementById('send').addEventListener('click', () => {
  const data = {}
  data.name = document.getElementById('name').value
  data.lastname = document.getElementById('lastname').value
  data.email = document.getElementById('email').value

  newUser(data)
})

const newUser = async (dataInput) => {
  const { name, lastname, email } = dataInput
  const data = { name, lastname, email }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  await fetch('http://localhost:5000/users/register', requestOptions)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch((err) => console.log('err:', err))
}
