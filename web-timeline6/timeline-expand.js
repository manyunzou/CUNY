$(function(){

    $("#timeline-bp-colla").click(function(){
        var bp = document.getElementById("timeline-0104");
        var plusImg = document.getElementById("timeline-bp-plusSign");

        if (bp.style.display === "none"){
            $("#timeline-0104").css("display","inline");
            $("#timeline-legend").css("display","block");
            $("#timeline-legend").css("display","block");
            plusImg.src = "img/minus-sign.png";
        } 
    });

    $("#timeline-showGTZ").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");

        if (GTZ.style.display === "none"){
            $("#timeline-GTZ").css("display","inline");
            $("#timeline-legend-underGTZ").css("display","block");
            $("#years-container-GTZ").css("display","block");
            $("#timeline-showGTZ").css("display","none");
            $("#timeline-hideGTZ").css("display","block");
            window.location.hash = '#timeline-hideGTZ';

            $("#timeline-0104").css("display","none");
            $("#years-container-bp14").css("display","none");
            $("#timeline-show0104").css("display","block");
            $("#timeline-hide0104").css("display","none");

            $("#timeline-0510").css("display","none");
            $("#years-container-bp510").css("display","none");
            $("#timeline-show0510").css("display","block");
            $("#timeline-hide0510").css("display","none");

            $("#timeline-1114").css("display","none");
            $("#years-container-bp1114").css("display","none");
            $("#timeline-show1114").css("display","block");
            $("#timeline-hide1114").css("display","none");
            
            $("#timeline-1530").css("display","none");
            $("#years-container-bp1530").css("display","none");
            $("#timeline-show1530").css("display","block");
            $("#timeline-hide1530").css("display","none");
        } else {
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");
        }
    });


    $("#timeline-hideGTZ").click(function(){
        var GTZ = document.getElementById("timeline-GTZ");

        if (GTZ.style.display === "inline"){
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");
        }
    });


    // to show items from 01-04


    $("#timeline-show0104").click(function(){
        var part1 = document.getElementById("timeline-0104");
        var part1open = document.getElementById("timeline-show0104");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (part1.style.display === "none"){
            $("#timeline-0104").css("display","inline");
            $("#timeline-show0104").css("display","none");
            $("#timeline-hide0104").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp14").css("display","block");
            window.location.hash = '#timeline-hide0104';

            $("#timeline-0510").css("display","none");
            $("#years-container-bp510").css("display","none");
            $("#timeline-show0510").css("display","block");
            $("#timeline-hide0510").css("display","none");

            $("#timeline-1114").css("display","none");
            $("#years-container-bp1114").css("display","none");
            $("#timeline-show1114").css("display","block");
            $("#timeline-hide1114").css("display","none");

            $("#timeline-1530").css("display","none");
            $("#years-container-bp1530").css("display","none");
            $("#timeline-show1530").css("display","block");
            $("#timeline-hide1530").css("display","none");
            
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");

        } else {
            $("#timeline-0104").css("display","none");
            $("#timeline-show0104").css("visibility","visible");
        }
    });

    // to hide items from 01-04


    $("#timeline-hide0104").click(function(){
        var part1 = document.getElementById("timeline-0104");
        var part1open = document.getElementById("timeline-hide0104");

        if (part1.style.display === "inline"){
            $("#timeline-0104").css("display","none");
            $("#timeline-show0104").css("display","block");
            $("#timeline-hide0104").css("display","none");
            $("#years-container-bp14").css("display","none");
        } else {
            $("#timeline-0104").css("display","visible");
            $("#timeline-show0104").css("visibility","hidden");
        }
    });

    // to show items from 05-10


    $("#timeline-show0510").click(function(){
        var part2 = document.getElementById("timeline-0510");
        var part2open = document.getElementById("timeline-show0510");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (part2.style.display === "none"){
            $("#timeline-0510").css("display","inline");
            $("#timeline-show0510").css("display","none");
            $("#timeline-hide0510").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp510").css("display","block");
            window.location.hash = '#timeline-hide0510';

            $("#timeline-0104").css("display","none");
            $("#years-container-bp14").css("display","none");
            $("#timeline-show0104").css("display","block");
            $("#timeline-hide0104").css("display","none");

            $("#timeline-1114").css("display","none");
            $("#years-container-bp1114").css("display","none");
            $("#timeline-show1114").css("display","block");
            $("#timeline-hide1114").css("display","none");

            $("#timeline-1530").css("display","none");
            $("#years-container-bp1530").css("display","none");
            $("#timeline-show1530").css("display","block");
            $("#timeline-hide1530").css("display","none");
            
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");

        } else {
            $("#timeline-0510").css("display","none");
            $("#timeline-show0510").css("visibility","visible");
        }
    });

    // to hide items from 05-10

    $("#timeline-hide0510").click(function(){
        var part1 = document.getElementById("timeline-0510");
        var part1open = document.getElementById("timeline-hide0510");

        if (part1.style.display === "inline"){
            $("#timeline-0510").css("display","none");
            $("#timeline-show0510").css("display","block");
            $("#timeline-hide0510").css("display","none");
            $("#years-container-bp510").css("display","none");
        } else {
            $("#timeline-0510").css("display","visible");
            $("#timeline-show0510").css("visibility","hidden");
        }
    });

    // to show items from 11-14

    $("#timeline-show1114").click(function(){
        var part2 = document.getElementById("timeline-1114");
        var part2open = document.getElementById("timeline-show1114");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (part2.style.display === "none"){
            $("#timeline-1114").css("display","inline");
            $("#timeline-show1114").css("display","none");
            $("#timeline-hide1114").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp1114").css("display","block");
            window.location.hash = '#timeline-hide1114';

            $("#timeline-0104").css("display","none");
            $("#years-container-bp14").css("display","none");
            $("#timeline-show0104").css("display","block");
            $("#timeline-hide0104").css("display","none");

            $("#timeline-0510").css("display","none");
            $("#years-container-bp510").css("display","none");
            $("#timeline-show0510").css("display","block");
            $("#timeline-hide0510").css("display","none");

            $("#timeline-1530").css("display","none");
            $("#years-container-bp1530").css("display","none");
            $("#timeline-show1530").css("display","block");
            $("#timeline-hide1530").css("display","none");
            
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");
        } else {
            $("#timeline-1114").css("display","none");
            $("#timeline-show1114").css("visibility","visible");
        }
    });

    // to hide items from 11-14

    $("#timeline-hide1114").click(function(){
        var part1 = document.getElementById("timeline-1114");
        var part1open = document.getElementById("timeline-hide1114");

        if (part1.style.display === "inline"){
            $("#timeline-1114").css("display","none");
            $("#timeline-show1114").css("display","block");
            $("#timeline-hide1114").css("display","none");
            $("#years-container-bp1114").css("display","none");
        } else {
            $("#timeline-1114").css("display","visible");
            $("#timeline-show1114").css("visibility","hidden");
        }
    });

    // to hide items from 15-30

    $("#timeline-show1530").click(function(){
        var part2 = document.getElementById("timeline-1530");
        var part2open = document.getElementById("timeline-show1530");
        var plusImg = document.getElementById("timeline-GTZ-plusSign");

        if (part2.style.display === "none"){
            $("#timeline-1530").css("display","inline");
            $("#timeline-show1530").css("display","none");
            $("#timeline-hide1530").css("display","block");
            $("#timeline-legend").css("display","block");
            $("#years-container-bp1530").css("display","block");
            window.location.hash = '#timeline-hide1530';

            $("#timeline-0104").css("display","none");
            $("#years-container-bp14").css("display","none");
            $("#timeline-show0104").css("display","block");
            $("#timeline-hide0104").css("display","none");

            $("#timeline-0510").css("display","none");
            $("#years-container-bp510").css("display","none");
            $("#timeline-show0510").css("display","block");
            $("#timeline-hide0510").css("display","none");

            $("#timeline-1114").css("display","none");
            $("#years-container-bp1114").css("display","none");
            $("#timeline-show1114").css("display","block");
            $("#timeline-hide1114").css("display","none");
            
            $("#timeline-GTZ").css("display","none");
            $("#timeline-legend-underGTZ").css("display","none");
            $("#timeline-showGTZ").css("display","block");
            $("#timeline-hideGTZ").css("display","none");
            $("#years-container-GTZ").css("display","none");

        } else {
            $("#timeline-1530").css("display","none");
            $("#timeline-show1530").css("visibility","visible");
        }
    });

    // to hide items from 15-30

    $("#timeline-hide1530").click(function(){
        var part1 = document.getElementById("timeline-1530");
        var part1open = document.getElementById("timeline-hide1530");

        if (part1.style.display === "inline"){
            $("#timeline-1530").css("display","none");
            $("#timeline-show1530").css("display","block");
            $("#timeline-hide1530").css("display","none");
            $("#years-container-bp1530").css("display","none");
        } else {
            $("#timeline-1530").css("display","visible");
            $("#timeline-show1530").css("visibility","hidden");
        }
    });

})