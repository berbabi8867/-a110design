function numberWithCommas(x) {
    // apple don't support lookback regex
    // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    x = x.toString().replace(/,/g, "");
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function nl2br (str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// from https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
function permut(string) {
    if (string.length < 2) return string; // This is our break condition
  
    const permutations = []; // This array will hold our permutations
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
  
      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
        continue; // skip it this time
  
      const remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
  
      for (let subPermutation of permut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
}

function timestampToDDMMYYYY(x) {
    const d = new Date(x);
    return ('0' + d.getDate()).slice(-2) + '-' +
        ('0'+(d.getMonth()+1)).slice(-2) + '-' +
        d.getFullYear();
}

function timestampToDDMMYYYYHHMM(x) {
    const d = new Date(x);
    return ('0' + d.getDate()).slice(-2) + '-' +
        ('0'+(d.getMonth()+1)).slice(-2) + '-' +
        d.getFullYear() + ' ' +
        d.getHours() + ':' +
        d.getMinutes();
}
