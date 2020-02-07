function getBurgers(){

fetch('/api/burgers')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
}

getBurgers();