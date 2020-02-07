
// On page load, display all devoured burgers

function getBurgers(){

fetch('/api/burgers')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);

    // if response is devoured, place <here> on DOM
    // if not devoured, place <here> on DOM

    
  });
}

getBurgers();