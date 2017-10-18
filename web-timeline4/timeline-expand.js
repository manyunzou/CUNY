$(function(){

    $("#timeline-bp-colla").click(function(){
        var bp = document.getElementById("timeline-bp");
        var plusImg = document.getElementById("timeline-bp-plusSign");

        if (bp.style.display === "none"){
            $("#timeline-bp").css("display","block");
            $("#timeline-bp").css("height","5200px");
            plusImg.src = "img/minus-sign.png";
            // $("#timeline-plusSign").css("width","20px");
        } else {
            $("#timeline-bp").css("display","none");
            $("#timeline-bp").css("height","0");
            plusImg.src = "img/plus-sign.png";
        }
    });

    $("#timeline-GTZ-colla").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (GTZ.style.display === "none"){
            $("#timeline-GTZ").css("display","block");
            $("#timeline-GTZ").css("height","600px");
            plusImg.src = "img/minus-sign.png";
        } else {
            $("#timeline-GTZ").css("display","none");
            $("#timeline-GTZ").css("height","0");
            plusImg.src = "img/plus-sign.png";
        }
    });

    

})