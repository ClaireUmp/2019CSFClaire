/*$("#citybutton").click(function(){
     $(".Menu").css("background-color", "red");
  }); */

  for(var d=1; d<=5; d++){
      console.log(d);
    $('.buildingWrapper').append("<div class='building' id= 'build" + d + "'></div>");
};

for(var e=1; e<=7; e++){
      console.log(e);
    $('.doorWrapper').append("<div class='doors' id= 'door" + e + "'></div>");
};


for(var f=1; f<=8; f++){
        $('#build1').append("<div class='all_windows' id='wind1'></div>");
};

for(var f=1; f<=36; f++){
        $('#build2').append("<div class='all_windows' id='wind2'></div>");
};

for(var f=1; f<=10; f++){
        $('#build3').append("<div class='all_windows' id='wind3'></div>");
};