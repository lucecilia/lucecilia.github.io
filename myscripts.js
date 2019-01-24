var keywords = ["understand", "heal", "improve", "empathize"];
var colours = ["red", "green", "blue", "orange"];
var count = 1;
setInterval(function(){    
    $("span.keyword").fadeOut(400, function(){        
        $(this).html(keywords[count]).css("color", colours[count]);
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(400);    
    });
}, 2000);