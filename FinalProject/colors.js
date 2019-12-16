var color;

for(var c=1; c<=12; c++){
    $("#triangleWrapper").append("<div class='triangle' id= 'Tri" + c + "'></div>");
}

for(var a=1; a<=12; a++){
    $("#buttonWrapper").append("<div class= 'button' id= 'button" + a + "'></div>");
}

 $("#button1").click(function(){
     color = 'darkred';
     $(".chosen").css("background-color", "darkred");
  });
  
 $("#button2").click(function(){
     color = 'red';
      $(".chosen").css("background-color", "red");
  });
  
   $("#button3").click(function(){
     color = 'darkorange';
      $(".chosen").css("background-color", "darkorange");
  });
  
   $("#button4").click(function(){
     color = 'yellow';
      $(".chosen").css("background-color", "yellow");
  });
  
  
   $("#button5").click(function(){
     color = 'yellowgreen';
      $(".chosen").css("background-color", "yellowgreen");
  });
  
   $("#button6").click(function(){
     color = 'green';
      $(".chosen").css("background-color", "green");
  });
  
   $("#button7").click(function(){
     color = 'teal';
      $(".chosen").css("background-color", "teal");
  });
  
   $("#button8").click(function(){
     color = 'blue';
      $(".chosen").css("background-color", "blue");
  });
  
   $("#button9").click(function(){
     color = 'darkblue';
      $(".chosen").css("background-color", "darkblue");
  });
  
   $("#button10").click(function(){
     color = '#4b0066';
      $(".chosen").css("background-color", "#4b0066");
  });
  
   $("#button11").click(function(){
     color = 'white';
      $(".chosen").css("background-color", "white");
  });
  
  $("#button12").click(function(){
     color = 'black';
      $(".chosen").css("background-color", "black");
  });


$('.box').click(function(){
    $(this).css("background-color", color);
});
