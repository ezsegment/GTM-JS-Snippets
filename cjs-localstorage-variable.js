// Extract localStorage values with a given 'key_name'
// For details check - https://ezsegment.com/use-localstorage-in-gtm/

// Example #1 - Simple values

function() {
  var keyValue = localStorage.getItem('key_name');
  return keyValue;
}

// Example #2 - Session storage
function() {
  var keyValue = sessionStorage.getItem('key_name');
  return keyValue;
}


// Example #3 - JSON objects

function() {
  var obj = JSON.parse(localStorage.getItem('key_name'));
  return obj.metadata;
}
