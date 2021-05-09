document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  if(number <= 0) {
    alert("number of jokes must be bigger than zero.");
  }

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(item){
          output += `<li>${item.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      output+= "<p style='float:right'>designed by fatay</p>";
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}