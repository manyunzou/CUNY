$(function(){

    $("#timeline-bp-colla").click(function(){
        var bp = document.getElementById("timeline-bp");
        var plusImg = document.getElementById("timeline-bp-plusSign");

        if (bp.style.display === "none"){
            $("#timeline-bp").css("display","inline");
            plusImg.src = "img/minus-sign.png";
        } else {
            $("#timeline-bp").css("display","none");
            plusImg.src = "img/plus-sign.png";
        }
    });

    $("#timeline-GTZ-colla").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (GTZ.style.display === "none"){
            $("#timeline-GTZ").css("display","inline");
            plusImg.src = "img/minus-sign.png";
        } else {
            $("#timeline-GTZ").css("display","none");
            plusImg.src = "img/plus-sign.png";
        }
    });

})