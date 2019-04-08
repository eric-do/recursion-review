// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// Receives JS object
// Need to convert to String
var stringifyJSON = function(obj) {
  // Identify object type
  // If array
  // Add string with '[' + val + ']'
  // Recursively call stringifyJSON
  // If object
  // Add string with '{' + val + '}'
  // Recursively call stringifyJSON
  // Else
  // Return value.toString()
  var str = '';
  if (obj === null) {
    return 'null';
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    
    for (var i = 0; i < obj.length; i++) {
      if (Array.isArray(obj[i])) {
        str += '[' + stringifyJSON(obj[i]) + ']';
      } else if (typeof obj[i] === 'object') {
        str += '{' + stringifyJSON(obj[i]) + '}';
      } else {
        str +=  '[' + stringifyJSON(obj[i]) + ']';
      }
    };
  } else if (typeof obj === 'object') {
    for (var key in obj) {
      if (Array.isArray(val)) {
        str += '[' + stringifyJSON(val) + ']';
      } else if (typeof val === 'object') {
        str += '{' + stringifyJSON(val) + '}';
      }
    }
  } else {
    return obj.toString();
  }
};

// function getString(val) {
//   if (Array.isArray(val)) {
//     str += '[' + stringifyJSON(val) + ']';
//   } else if (typeof val === 'object') {
//     str += '{' + stringifyJSON(val) + ']';
//   }
      
// }

