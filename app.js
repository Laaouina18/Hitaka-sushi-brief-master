function toggleMenu() {
  let x = document.querySelector(".burger-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function rem(){

  document.querySelector(".rem").innerHTML = "bien envoyé";
 alert("la commande a été bien confirmé")
 window.location.reload();
  
}



