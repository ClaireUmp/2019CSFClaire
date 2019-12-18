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


for(var f=1; f<=21; f++){
        $('#build2').append("<div class='all_windows'></div>");
};