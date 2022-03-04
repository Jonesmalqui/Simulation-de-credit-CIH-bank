var slid1 = document.getElementById("taux");
var out1 = document.getElementById("tau");
var men = document.getElementById("mensualite");

out1.value = slid1.value;

slid1.oninput = function() {
  out1.value = this.value;
}

var slid2 = document.getElementById("montant");
var out2 = document.getElementById("mont");

out2.value = slid2.value;

slid2.oninput = function() {
 out2.value = this.value;
}

var slid3 = document.getElementById("duree");
var out3 = document.getElementById("dur");

out3.value = slid3.value;

slid3.oninput = function() {
  out3.value = this.value;
}

 function myFunction(){
  var slid2 = document.getElementById("montant").value;
  var slid1 = document.getElementById("taux").value ;
  var slid3 = document.getElementById("duree").value;
  var men = document.getElementById("mensualite") ;

  const interest = (slid2 * (slid1 * 0.01)) / slid3;
  let payment = ((slid2 / slid3) + interest).toFixed(2);
  
  men.innerHTML = `${payment}` ;
 }

 

