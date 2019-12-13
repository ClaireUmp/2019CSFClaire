$("#flowerbutton").click(function(){
    for(var p=1; p<=4; p++)
        for(var b=1; b<=18; b++){
            $("#flowerWrapper").append("<div class='flower" + p + "id= 'petal" + b + "'></div>");
        }
});
  
 $("#flowerWrapper").click(function(){
    $(this).css("background-color", color);
    });

 