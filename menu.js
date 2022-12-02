var sectionSalade = document.querySelector("#s-s");
var sectionPlat = document.querySelector("#s-p");
var sectionObento = document.querySelector("#s-o");

var platSelect = document.getElementById("plat-select");
// console.log(sectionObento.innerHTML);

sectionSalade.classList.add("hide");
sectionObento.classList.add("hide");

platSelect.addEventListener("change",()=>{
  var value = platSelect.value;
  var text =  platSelect.options[platSelect.selectedIndex].text;
//   console.log(text);

  if(text=="Plat"){
    sectionPlat.classList.remove("hide");
    sectionSalade.classList.add("hide");
    sectionObento.classList.add("hide");
  }
  else if(text=="Salades")
  {
    sectionSalade.classList.remove("hide");
    sectionPlat.classList.add("hide");
    sectionObento.classList.add("hide");
  }
  else if(text == "Obento")
  {
    sectionObento.classList.remove("hide");
    sectionPlat.classList.add("hide");
    sectionSalade.classList.add("hide");
  }
  else{

  }
})



function order(id,number,nom,price){
  var cart = 
  `
  <div class="commonde cmd-1 ${id}">
  <h5>${number}  x</h5>
  <p>${nom}</p>
  <h4>${price} </h4>
  </div>
  `
  return cart;
}


var listCart =[];

function addToCart(id,nom,prix){ 
  var lesCommandes = document.querySelector(".les-commandes");
  var totalPrix  = document.querySelector("#total-prix");
 
  var c;
  lesCommandes.innerHTML = "";
  if(listCart.length==0){
    console.log("true");
    var item = {id,nom,number:0,prix};
    listCart.push(item);
  }
  var found =-1;
  for(var item in listCart){
    console.log(listCart);
      if(id == listCart[item].id){
        listCart[item].number++;
        found =0;
      }
      else{
      }
  }
  if(found==-1){
      var item = {id,nom,number:1,prix};
      listCart.push(item);
  }
  for(var item in listCart){

    c = order(listCart[item].id,listCart[item].number,listCart[item].nom,listCart[item].prix);
    lesCommandes.innerHTML += c;
  }
  var totall = 0; 
  for(var index in listCart){
    totall += parseFloat(listCart[index].prix) * parseInt(listCart[index].number);
  }
  totalPrix.innerHTML = totall;
}

