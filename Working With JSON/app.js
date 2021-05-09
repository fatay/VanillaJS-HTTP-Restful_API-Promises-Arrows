document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      //console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      let output = '';
      customer.forEach(function(customer) {
        output += `
          <div class = 'card'>
            <ul>
              <li>ID: ${customer.id}</li>
              <li>Name: ${customer.name}</li>
              <li>Company: ${customer.name}</li>
              <li>Phone: ${customer.phone}</li>        
            </ul>
          </div>
        `;
      });


      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();

}