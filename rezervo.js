function transaction() {

	document.getElementById("p1").innerHTML="Kthehuni n&euml; faqen kryesore";
	alert('Rezervimi u krye me sukses.');


  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Ju keni rezervuar " + localStorage.clickcount + " here ne faqen tone.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
	}

}

//Ketu kemi zgjedhur permes document.getElementById("p1").innerHTML="Back to home page"; qe te shkruhet
//Back to home page kur te klikojme ne button perkatsisht kur thiret funksioni transaction
//Pastaj permes alert('Transaction completed.'); krijojme ngjarjen ku shfaqet mesazhi Transaction completed.