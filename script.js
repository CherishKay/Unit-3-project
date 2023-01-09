let part1= document.querySelector(".part1");
let Choice1=document.querySelector(".optionone");
let Choice2=document.querySelector(".optiontwo");
let Choice3=document.querySelector(".optionthree");
let Entry= document.querySelector(".storyopening");
let part2= document.querySelector(".part2");
let part3= document.querySelector(".part3");
let finale1= document.querySelector(".part4");
let part5= document.querySelector(".part5");
let whole= document.querySelector(".whole");



Choice1.onclick=function(){
  Entry.style.display="none";
  part1.style.display="block";
  
};
Choice2.onclick=function(){
  Entry.style.display="none";
  part1.style.display="none";
  part2.style.display="block";
};
Choice3.onclick=function(){
  Entry.style.display="none";
  part1.style.display="none";
  part2.style.display="none";
  part3.style.display="block";
};
let bush= document.querySelector(".bush");
let clover = document.querySelector(".clover");
let optionOne= document.querySelector(".container1");
let resultOne= document.querySelector(".correct");
let resultTwo= document.querySelector(".wrong");
let box= document.querySelector(".box");
let ratatouille= document.querySelector(".ratatouille");
let optionTwo= document.querySelector(".container2");
let firstline= document.querySelector(".firstline");
let retry1= document.querySelector(".retry1");

bush.ondblclick=function(){
  clover.style.display="block";
  optionOne.style.display="none";
  optionTwo.style.display="none";
  resultOne.style.display="block";
setTimeout(() => {firstline.innerHTML="Correct!";}, 1000); 
 
};



box.ondblclick=function(){
  ratatouille.style.display="block";
  optionOne.style.display="none";
  optionTwo.style.display="none";
  resultTwo.style.display="block";
  retry1.style.display="block";
setTimeout(() => {firstline.innerHTML="Wrong!";}, 100); 
  
};

let hay = document.querySelector(".hay");
let pludo = document.querySelector(".pludo");
let choiceOne= document.querySelector(".container3");
let resultOne2= document.querySelector(".wrong2");
let resultTwo2= document.querySelector(".correct2");
let pineapple= document.querySelector(".pineapple");
let Phillipe= document.querySelector(".Phillipe");
let choiceTwo= document.querySelector(".container4");
let secondline= document.querySelector(".secondline");
let retry2= document.querySelector(".retry2");
                                   
hay.ondblclick=function(){
  pludo.style.display="block";
  choiceOne.style.display="none";
  choiceTwo.style.display="none";
  resultOne2.style.display="block";
  retry2.style.display="block";
setTimeout(() => {secondline.innerHTML="Wrong!";}, 100);    

};

pineapple.ondblclick=function(){
Phillipe.style.display="block";
choiceTwo.style.display="none";
choiceOne.style.display="none";
setTimeout(() => {secondline.innerHTML="Correct!";}, 1000);  
  
};
let house= document.querySelector(".house");
let papa = document.querySelector(".papa");
let decisionOne= document.querySelector(".container5");
let reactionOne= document.querySelector(".wrong3");
let reactionTwo= document.querySelector(".correct3");
let forest= document.querySelector(".forest");
let dopey= document.querySelector(".dopey");
let decisionTwo= document.querySelector(".container6");
let thirdline= document.querySelector(".thirdline");

house.ondblclick=function(){
  papa.style.display="block";
  decisionTwo.style.display="none";
  decisionOne.style.display="none";
  reactionOne.style.display="block";
setTimeout(() => {thirdline.innerHTML="Wrong!";}, 1000);    


};

forest.ondblclick=function(){
dopey.style.display="block";
decisionTwo.style.display="none";
decisionOne.style.display="none";
reactionTwo.style.display="block";
finale1.style.display="block";
setTimeout(() => {thirdline.innerHTML="Correct!";}, 1000);  
  
};
function myFunction() {
  document.getElementById("prinSearch").reset();
}








/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
