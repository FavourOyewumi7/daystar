console.log('Im working')




window.onscroll = function(){
   const tip = document.getElementsByClassName("navdiv");
   console.log(tip)
   var top = window.scrollY;
   console.log(top)

   if(top >= 100){
      tip.classList.add("active")
   }
   else{
      tip.classList.remove("active")
   }
}


wow = new WOW()
   wow.init();

