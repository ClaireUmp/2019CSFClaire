$("#citybutton").click(function(){
     $(".Menu").css("background-color", "red");
  });

  for(var d=1; d<=5; d++){
    $("#buildingWrapper").append("<div class='building' id= 'build" + d + "'></div>");
}