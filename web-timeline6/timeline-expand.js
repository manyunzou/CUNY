$(function(){

    $("#timeline-bp-colla").click(function(){
        var bp = document.getElementById("timeline-0110");
        var plusImg = document.getElementById("timeline-bp-plusSign");

        if (bp.style.display === "none"){
            $("#timeline-0110").css("display","inline");
            $("#timeline-legend").css("display","block");
            plusImg.src = "img/minus-sign.png";
        } 
    });

    $("#timeline-GTZ-colla").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (GTZ.style.display === "none"){
            $("#timeline-GTZ").css("display","inline");
            $("#timeline-legend-underGTZ").css("display","block");
            plusImg.src = "img/minus-sign.png";
        } else {
            $("#timeline-GTZ").css("display","none");
            plusImg.src = "img/plus-sign.png";
        }
    });

    // to show items from 01-04
    // $("#timeline-show0110").mouseover(function(){
    //     $("#timeline-show0110 p").css("color","#168DC5");
    // });

    // $("#timeline-show0110").mouseout(function(){
    //     $("#timeline-show0110 p").css("color","#5B5B5B");
    // });

    $("#timeline-show0110").click(function(){
        var part1 = document.getElementById("timeline-0110");
        var part1open = document.getElementById("timeline-show0110");

        if (part1.style.display === "none"){
            $("#timeline-0110").css("display","inline");
            $("#timeline-show0110").css("display","none");
            $("#timeline-hide0110").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp14").css("display","block");
        } else {
            $("#timeline-0110").css("display","none");
            $("#timeline-show0110").css("visibility","visible");
        }
    });

    // to hide items from 01-11
    // $("#timeline-hide0110").mouseover(function(){
    //     $("#timeline-hide0110 p").css("color","#168DC5");
    // });

    // $("#timeline-hide0110").mouseout(function(){
    //     $("#timeline-hide0110 p").css("color","#5B5B5B");
    // });

    $("#timeline-hide0110").click(function(){
        var part1 = document.getElementById("timeline-0110");
        var part1open = document.getElementById("timeline-hide0110");

        if (part1.style.display === "inline"){
            $("#timeline-0110").css("display","none");
            $("#timeline-show0110").css("display","block");
            $("#timeline-hide0110").css("display","none");
            $("#timeline-legend").css("display","none");
            $("#years-container-bp14").css("display","none");
        } else {
            $("#timeline-0110").css("display","visible");
            $("#timeline-show0110").css("visibility","hidden");
        }
    });

    // to show items from 05-10
    // $("#timeline-show1120").mouseover(function(){
    //     $("#timeline-show1120 p").css("color","#168DC5");
    // });

    // $("#timeline-show1120").mouseout(function(){
    //     $("#timeline-show1120 p").css("color","#5B5B5B");
    // });

    $("#timeline-show1120").click(function(){
        var part2 = document.getElementById("timeline-1120");
        var part2open = document.getElementById("timeline-show1120");

        if (part2.style.display === "none"){
            $("#timeline-1120").css("display","inline");
            $("#timeline-show1120").css("display","none");
            $("#timeline-hide1120").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp510").css("display","block");
        } else {
            $("#timeline-1120").css("display","none");
            $("#timeline-show1120").css("visibility","visible");
        }
    });

    // to hide items from 11-20
    // $("#timeline-hide1120").mouseover(function(){
    //     $("#timeline-hide1120 p").css("color","#168DC5");
    // });

    // $("#timeline-hide1120").mouseout(function(){
    //     $("#timeline-hide1120 p").css("color","#5B5B5B");
    // });

    $("#timeline-hide1120").click(function(){
        var part1 = document.getElementById("timeline-1120");
        var part1open = document.getElementById("timeline-hide1120");

        if (part1.style.display === "inline"){
            $("#timeline-1120").css("display","none");
            $("#timeline-show1120").css("display","block");
            $("#timeline-hide1120").css("display","none");
            $("#timeline-legend").css("display","none");
            $("#years-container-bp510").css("display","none");
        } else {
            $("#timeline-1120").css("display","visible");
            $("#timeline-show1120").css("visibility","hidden");
        }
    });

    // to show items from 11-14
    // $("#timeline-show2130").mouseover(function(){
    //     $("#timeline-show2130 p").css("color","#168DC5");
    // });

    // $("#timeline-show2130").mouseout(function(){
    //     $("#timeline-show2130 p").css("color","#5B5B5B");
    // });

    $("#timeline-show2130").click(function(){
        var part2 = document.getElementById("timeline-2130");
        var part2open = document.getElementById("timeline-show2130");

        if (part2.style.display === "none"){
            $("#timeline-2130").css("display","inline");
            $("#timeline-show2130").css("display","none");
            $("#timeline-hide2130").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp1114").css("display","block");
        } else {
            $("#timeline-2130").css("display","none");
            $("#timeline-show2130").css("visibility","visible");
        }
    });

    // to hide items from 21-30
    // $("#timeline-hide2130").mouseover(function(){
    //     $("#timeline-hide2130 p").css("color","#168DC5");
    // });

    // $("#timeline-hide2130").mouseout(function(){
    //     $("#timeline-hide2130 p").css("color","#5B5B5B");
    // });

    $("#timeline-hide2130").click(function(){
        var part1 = document.getElementById("timeline-2130");
        var part1open = document.getElementById("timeline-hide2130");

        if (part1.style.display === "inline"){
            $("#timeline-2130").css("display","none");
            $("#timeline-show2130").css("display","block");
            $("#timeline-hide2130").css("display","none");
            $("#timeline-legend").css("display","none");
            $("#years-container-bp1114").css("display","none");
        } else {
            $("#timeline-2130").css("display","visible");
            $("#timeline-show2130").css("visibility","hidden");
        }
    });

})