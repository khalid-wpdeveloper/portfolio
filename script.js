document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault(); // page reload বন্ধ করবে

document.getElementById("response").innerHTML =
"Thank you! Your message has been received.";

this.reset(); // form clear করবে

});