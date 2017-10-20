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

    // to show items from 11-20
    $("#timeline-show1120").mouseover(function(){
        $("#timeline-show1120 p").css("color","#168DC5");
    });

    $("#timeline-show1120").mouseout(function(){
        $("#timeline-show1120 p").css("color","#000000");
    });

    $("#timeline-show1120").click(function(){
        var part2 = document.getElementById("timeline-1120");
        var part2open = document.getElementById("timeline-show1120");

        if (part2.style.display === "none"){
            $("#timeline-1120").css("display","inline");
            $("#timeline-show1120").css("visibility","hidden");
        } else {
            $("#timeline-1120").css("display","none");
            $("#timeline-show1120").css("visibility","visible");
        }
    });

    // to show items from 21-30
    $("#timeline-show2130").mouseover(function(){
        $("#timeline-show2130 p").css("color","#168DC5");
    });

    $("#timeline-show2130").mouseout(function(){
        $("#timeline-show2130 p").css("color","#000000");
    });

    $("#timeline-show2130").click(function(){
        var part2 = document.getElementById("timeline-2130");
        var part2open = document.getElementById("timeline-show2130");

        if (part2.style.display === "none"){
            $("#timeline-2130").css("display","inline");
            $("#timeline-show2130").css("visibility","hidden");
        } else {
            $("#timeline-2130").css("display","none");
            $("#timeline-show2130").css("visibility","visible");
        }
    });

})