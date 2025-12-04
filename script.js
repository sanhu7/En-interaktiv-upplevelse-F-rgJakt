
function gameInstraktion(){
    alert("1.Klicka på Start för  att börja spelet \n2.Klicka på en färg och sedan på lådan med samma färg \n3.Matcha alla färger rätt - du vinner om du matchar alla färg rätt :  6 poäng \n4. Om du matchar fel, förlorar du en poäng  \n5.Klicka på Restart för att börja om spelet ")
}

let colors= ["red","yellow","blue", "orange", "green", "brown"];

let boxes = {red : [],yellow : [],blue : [], orange :[], green: [], brown: [] };

let selectedColor = null;
let score = 0 ;
let totalColors = 6;
 let used = 0;




function updateScore(){
 document.getElementById("score").textContent = score;
}

function endGame(){
    if(score === totalColors){
        alert("Grattis ! Du vann !");
    }else{
        alert("Tyvärr! Du förlorade. Försök igen !")
    }
    used = 0;
    score = 0;
    updateScore();
    showColors();
    
}

/*function showColors(){
    document.getElementById("cOrange").style.display="block";
    document.getElementById("cBrown").style.display="block";
    document.getElementById("cYellow").style.display="block";
    document.getElementById("cBlue").style.display="block";
    document.getElementById("cRed").style.display="block";
    document.getElementById("cGreen").style.display="block";
}*/
 function showColors(){
    const colors =[ "cOrange", "cBrown","cYellow", "cBlue","cRed","cGreen" ];
    colors.forEach(id => {
        document.getElementById(id).style.display= "block";
        
    });
 }


function start(){
   const btn = document.getElementById("startBtn");
   btn.style.backgroundColor = "green";
   btn.style.color = "white";
   btn.textContent= "Spelet startat !";

  document.getElementById("cRed").onclick = function(){
    selectedColor = "red";
  };
  document.getElementById("cYellow").onclick = function () {
    selectedColor = "yellow";
  };
  document.getElementById("cBlue").onclick = function (){
    selectedColor = "blue";
  };
  document.getElementById("cOrange").onclick = function(){
    selectedColor = "orange";
  };
  document.getElementById("cGreen").onclick = function () {
    selectedColor = "green";
  };
  document.getElementById("cBrown").onclick = function (){
    selectedColor = "brown";
  };
  document.getElementById("bRed").onclick = function (){

    if(selectedColor === "red"){
        //lägga till färgen i box
      boxes.red.push("red");
     

      // ta borts färgen från colors så att circelnförsvinner
      let i = colors.indexOf("red");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cRed").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "red"){
      alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
      
    }
    if (used === totalColors){
        endGame();
    }
  
   
    
   
    selectedColor = null;
  };
  document.getElementById("bYellow").onclick = function(){
    if (selectedColor === "yellow"){
      //lägga till färgen i box
      boxes.red.push("yellow");

      // ta borts färgen från colors så att cirkeln försvinner
      let i = colors.indexOf("yellow");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cYellow").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "yellow"){
     alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
    }
     if (used === totalColors){
        endGame();
    }

    
    
    selectedColor = null;
  };
  document.getElementById("bBlue").onclick = function(){
    if (selectedColor === "blue"){
        //lägga till färgen i box
      boxes.blue.push("blue");
      

      // ta borts färgen från colors så att cirkeln försvinner
      let i = colors.indexOf("blue");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cBlue").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "blue"){
      alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
    }
     if (used === totalColors){
        endGame();
    }
   
    selectedColor = null;
  };


}

document.getElementById("bOrange").onclick = function (){

    if(selectedColor === "orange"){
        //lägga till färgen i box
      boxes.red.push("orange");

      // ta borts färgen från colors så att circelnförsvinner
      let i = colors.indexOf("orange");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cOrange").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "orange"){
      alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
    }
    if (used === totalColors){
        endGame();
    }
   
    selectedColor = null;
  };


  document.getElementById("bGreen").onclick = function (){

    if(selectedColor === "green"){
        //lägga till färgen i box
      boxes.red.push("green");

      // ta borts färgen från colors så att circelnförsvinner
      let i = colors.indexOf("green");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cGreen").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "green"){
      alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
    }
    if (used === totalColors){
        endGame();
    }
   
    selectedColor = null;
  };

  document.getElementById("bBrown").onclick = function (){

    if(selectedColor === "brown"){
        //lägga till färgen i box
      boxes.red.push("brown");

      // ta borts färgen från colors så att circelnförsvinner
      let i = colors.indexOf("green");
      if (i === -1) colors.splice(i,1);

      //göm cirkeln visuellt
      document.getElementById("cBrown").style.display="none";
      score++;
      updateScore();
      used++;
      
    }
    if(selectedColor !== "brown"){
      alert("Fel! Du förlorade en poäng !");
      score--;
      updateScore();
    }
    if (used === totalColors){
        endGame();
    }
   
    selectedColor = null;
  };



function restartGame(){
    score = 0;
    updateScore();

   selectedColor = null;
   boxes = {red:[], yellow: [], blue: [], orange :[], green: [], brown: []}

   alert ("Game restarted! You will start from beginning");
   showColors();
   

}

