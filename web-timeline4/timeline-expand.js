$(function(){

    $("#timeline-bp-colla").click(function(){
        var bp = document.getElementById("timeline-bp");
        var plusImg = document.getElementById("timeline-bp-plusSign");

        if (bp.style.visibility === "hidden"){
            $("#timeline-bp").css("visibility","visible");
            $("#timeline-bp").css("height","4450px");
            plusImg.src = "img/minus-sign.png";
            // $("#timeline-plusSign").css("width","20px");
        } else {
            $("#timeline-bp").css("visibility","hidden");
            $("#timeline-bp").css("height","0");
            plusImg.src = "img/plus-sign.png";
        }
    });

    $("#timeline-GTZ-colla").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (GTZ.style.visibility === "hidden"){
            $("#timeline-GTZ").css("visibility","visible");
            $("#timeline-GTZ").css("height","4450px");
            plusImg.src = "img/minus-sign.png";
        } else {
            $("#timeline-GTZ").css("visibility","hidden");
            $("#timeline-GTZ").css("height","0");
            plusImg.src = "img/plus-sign.png";
        }
    });

    

})