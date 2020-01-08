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

$("#flowerbutton").click(function(){
    for(var p=1; p<=4; p++){
      $("#flowerWrapper").append("<div class='petal flower" + p + "' id= 'center" + p + "'></div>");
        for(var b=1; b<=18; b++){
            $("#flowerWrapper").append("<div class='petal flower" + p + "' id= 'petal" + b + "'></div>");
           
        }
    }
    $('.petal').click(function(){
    $(this).css("background-color", color);
    console.log("petal")
});
});
  
$("#citybutton").click(function(){
    
  for(var d=1; d<=5; d++){
      console.log(d);
    $('.buildingWrapper').append("<div class='city building' id= 'build" + d + "'></div>");
};

    for(var e=1; e<=7; e++){
      console.log(e);
    $('.doorWrapper').append("<div class='city doors' id= 'door" + e + "'></div>");

};

    for(var f=1; f<=8; f++){
        $('#build1').append("<div class='city all_windows' id='wind1'></div>");
};

    for(var f=1; f<=36; f++){
        $('#build2').append("<div class='city all_windows' id='wind2'></div>");
};

    for(var f=1; f<=10; f++){
        $('#build3').append("<div class='city all_windows' id='wind3'></div>");
};

    for(var f=1; f<=4; f++){
        $('#build4').append("<div class='city all_windows' id='wind4'></div>");
        $('#build4').append("<div class='city all_windows' id='wind5'></div>");
};

    for(var f=1; f<=6; f++){
        $('#build5').append("<div class='city all_windows' id='wind6'></div>");
};


    $('.sunWrapper').append("<div class='city sun'></div>");

$('.city').click(function(){
    $(this).css("background-color", color);
    console.log("petal")
});
}); 
  



