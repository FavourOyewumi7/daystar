console.log('Im working')



const tip = document.getElementsByClassName("navdiv")[0];
const q = document.getElementsByClassName("li1")[0];
const w = document.getElementsByClassName("li2")[0];
const e = document.getElementsByClassName("li3")[0];
const r = document.getElementsByClassName("li4")[0];
const t = document.getElementsByClassName("li5")[0];
const y = document.getElementsByClassName("li6")[0];
console.log(tip)
window.onscroll = function(){

   var top = window.scrollY;
   

   if(top >= 600){
      tip.classList.add("active");
      q.classList.add('ant');
      w.classList.add('ant');
      e.classList.add('ant');
      r.classList.add('ant');
      t.classList.add('ant');
      y.classList.add('ant');
   }
   else{
      tip.classList.remove("active");
      q.classList.remove('ant');
      w.classList.remove('ant');
      e.classList.remove('ant');
      r.classList.remove('ant');
      t.classList.remove('ant');
      y.classList.remove('ant');
   }
}

const style = document.getElementsByClassName('cards');
const arrowleft = document.getElementsByClassName('arrow-left')[0];
const arrowright = document.getElementsByClassName('arrow-right')[0];
console.log(style)


if (style.length > 3){
   style[0].style.display = 'none';
   style[4].style.display = 'none';
}
let counter = 3;

function show(){
   if (counter >0){
      
      counter--;
      for (i = 0; i <=4; i++){
         if (i == counter -1 || i == counter || i == counter + 1) {
            style[i].style.display = 'block';
            style[i].style.transition = '0.3s';
         }else{
            style[i].style.display = 'none';
         }
         if( style[0].style.display == 'block'){
            arrowleft.style.display = 'none';
         }else{
            arrowright.style.display = 'block'
         };
      }
   }

 };
 
function show1(){
   if (counter <4){
      var i;
      counter++;
      for (i = 0; i <=4; i++){
         if (i == counter -1 || i == counter || i == counter + 1) {
            style[i].style.display = 'block';
         }else{
            style[i].style.display = 'none';
         }
         if( style[4].style.display == 'block'){
            arrowright.style.display = 'none';
         }else{
            arrowleft.style.display = 'block';
         };
      }
   }
   
};




wow = new WOW()
   wow.init();

