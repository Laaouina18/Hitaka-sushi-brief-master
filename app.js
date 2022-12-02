function toggleMenu() {
  let x = document.querySelector(".burger-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function rem(){
  window.location.reload();
  document.querySelector(".rem").innerHTML = "bien envoyé";
 alert("la commande a été bien confirmé")
  
}



