var keywords = ["empathize.", "heal.", "improve.", "give.", "challenge.", "share."];
var colours = ["cornflowerblue", "darkgreen", "goldenrod", "salmon", "yellowgreen",  "peru", "lightslategray"];
var count = 1;
setInterval(function(){
    $("span.current_word").fadeOut(400, function(){
        $(this).html(keywords[count]).css("color", colours[count]);
        count++;
        if(count == keywords.length)
            count = 0;
        $(this).fadeIn(400);
    });
}, 2000);
