// $(document).keypress(function(event){
//     $("h1").setAttribute.innerHtml = event;
// });


// $(document).keypress(function (e) { 
//     // $("h1").attr("class", e.originalEvent.key);
//     $("h1").html(e.originalEvent.key);
//     console.log("key is pressed : ",e.originalEvent.key);
// });

$(document).keypress(function (event) { 
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","purple")
})