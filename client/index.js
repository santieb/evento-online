document.getElementById('send').addEventListener('click', () => {
  let data = {}
  console.log("llego")
  data.name = document.getElementById('name').value;
  data.username = document.getElementById('lastname').value;
  data.email = document.getElementById('email').value;

  document.getElementById('lastname').value = ''
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''

  newUser(data);
})
