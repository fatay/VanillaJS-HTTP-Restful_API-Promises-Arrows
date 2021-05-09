// Output Div
const result = document.getElementById("output");

// Handling Button
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // 0: request is not initialized
  //console.log('READYSTATE', xhr.readyState);

  // Open
  xhr.open('GET', 'data.txt', true);

  // 1: server connection established
  //console.log('READYSTATE', xhr.readyState);

  /* ****************************************** */
  /* FOR SPINNERS AND LOADING SCREENS (LOADERS) */
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
    // using 3 for loading (processing request) 
  }

  /* FOR AN ERROR MESSAGE */
  xhr.onerror = function() {
    console.log('Request error...');
  }
  /* ****************************************** */



  // An onload function 
  xhr.onload = function() {
    // 4: request finished and response is ready
    //console.log('READYSTATE', xhr.readyState);
    
    if(this.status === 200 && this.readyState === 4) {
      result.textContent = this.responseText;
    }
  }

  xhr.send();

  /* 
    HTTP Statuses
       -> 200: "OK"
       -> 403: "Forbidden"
       -> 404: "Not Found"
  */

   /* 
      readyState Values
      0: request not initialized
      1: server connection established
      2: request recieved
      3: processing request
      4: request finished and response is ready
  */

  /*
    we can use xhr.onreadystatechange = function () {} 
    for changing states.
  */

} 