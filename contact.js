 //FUNKSIONI MESSSAGE QE SHFAQ MESAZHIN TEK KONTAKT

 function message() {
        alert("Ketu mund te na kontaktoni neve!");
    }

//FUNKSIONI TEXT QE NDRYSHON NGJYREN E TEKSTIT TEK RRETH NESH

    function text()
            {
            x=document.getElementById("kuqe") // marrim elementin per editim!
            x.style.color="purple";            // dhe ja ndryshojm ngjyren.
            }


//FUNKSIONI TIME TEK KRYEFAQJA

  function Time()
            {
              var time=new Date().getHours();
              var m = new Date().getMinutes();
              var s = new Date().getSeconds();
              if (time<=6 || time>=18)
              {
                alert("Mirëmbrëma\nMiresevini ne faqen tone \n"+ time+":"+m+":"+s);
                document.body.style.background="linear-gradient(#010, #033,#010)";
              }
              else
              {
                alert("Mirëdita\nMiresevini ne faqen tone \n"+ time+":"+m+":"+s);
                document.body.style.background="linear-gradient(#033, #033, #069,#069,#033)";
              }
            }

//funksioni myfunction te contact qe ndryshon kosoven me prishtinen
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Kosoven","Prishtinen");
  document.getElementById("demo").innerHTML = txt;
}

function flm() {
  alert("Faleminderit qe na kontaktuat!");
}