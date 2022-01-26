const newUser = async (dataInput) => {
  let resp;
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(dataInput);
  let data = {
      username: dataInput.name,
      name: dataInput.lastname,
      email: dataInput.email,
  }

  const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders,
      redirect: 'follow'
  };

  await fetch(`http://localhost:5000/users/register`, requestOptions)
      .then(response => response.text())
      .then(result => resp = result)
      .catch(error => console.log('error', error));
  return resp;
}