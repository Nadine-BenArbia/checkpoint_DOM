//console.log("test")
// variables 
let btnPlus=document.querySelectorAll(".btnPlus");
let qte=document.querySelectorAll(".qte");
let btnMoin=document.querySelectorAll(".btnMoin");
let price=document.querySelectorAll(".price");
let produit=document.querySelectorAll(".itemProduit");
let closebtn=document.querySelectorAll(".close");


let qtes=document.getElementsByClassName("border").className ="qts";
let somme=document.getElementById("somme");




//document.getElementById("MyElement").classList.add('MyClass');

for(let i=0; i<btnPlus.length;i++){
   somme.innerHTML=(parseFloat(somme.innerHTML)+parseFloat(price[i].innerHTML)).toFixed(2);

    btnPlus[i].addEventListener("click",function() {
      
 qte[i].innerHTML++;
 somme.innerHTML=(parseFloat(somme.innerHTML)+parseFloat(price[i].innerHTML)).toFixed(2);

   });
}

for(let i=0; i<btnMoin.length;i++){
   btnMoin[i].addEventListener("click",function() {
     
qte[i].innerHTML--;
if(qte[i].innerHTML<0){
   qte[i].innerHTML=0;
}
else{
   somme.innerHTML=(parseFloat(somme.innerHTML)-parseFloat(price[i].innerHTML)).toFixed(2);
}


  });
}

for(let i=0; i<closebtn.length;i++){
   closebtn[i].addEventListener("click",function() {
     produit[i].remove();
     somme.innerHTML = (parseFloat(somme.innerHTML)-(parseFloat(price[i].innerHTML)*parseFloat(qte[i].innerHTML))).toFixed(2);
  });
}

