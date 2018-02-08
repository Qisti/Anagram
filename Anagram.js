var kata1 = "malam";
var kata2 = "malam";

kata1 = kata1.replace(/[^a-zA-Z]+/g,'');
kata2 = kata2.replace(/[^a-zA-Z]+/g,'');
kata1 = kata1.toLowerCase();
kata2 = kata2.toLowerCase();
kata1 = kata1.replace(/\s/g,'');  
kata2 = kata2.replace(/\s/g,''); 


function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    console.log("False");
    return false;
  }
  if (string1 === string2) {
    console.log("True");
    return true;
  }

  var c = "",
    i = 0,
    limit = string1.length,
    match = 0,
    idx;
  while (i < string1.length) {
    c = string1.substr(i++, 1);
    idx = string2.indexOf(c);
    if (idx > -1) {
      match++;
      string2 = string2.substr(0, idx) + string2.substr(idx + 1);
    } else {
      console.log("False");
      return false;
    }
  }
  console.log("anagram");
}

anagram(kata1, kata2);


