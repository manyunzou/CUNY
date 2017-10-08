$(function(){

    //1st timeline
    $(".circle1").mouseover(function() {
        $(".law-title-1").show();
        $(".law-details-1").show();
    });

    $(".circle1").mouseout(function() {
        $(".law-title-1").hide();
        $(".law-details-1").hide();
    });

    $(".circle2").mouseover(function(){
        $(".law-title-2").show();
        $(".law-details-2").show();
    });

    $(".circle2").mouseout(function() {
        $(".law-title-2").hide();
        $(".law-details-2").hide();
    });

    //1st timeline details expand first circle
    $(".circle1").click(function(){
        $("#billdetail01-1").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse1").click(function(){
        $("#billdetail01-1").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //1st timeline details expand second circle
    $(".circle2").click(function(){
        $("#billdetail01-2").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse1-2").click(function(){
        $("#billdetail01-2").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });


    //BP1 Alert
    $(".item-learnmore1").click(function(){
        alert("...");
    });


    //2nd timeline
    $(".circle2-1").mouseover(function() {
        $(".law-title-2-1").show();
        $(".law-details-2-1").show();
    });

    $(".circle2-1").mouseout(function() {
        $(".law-title-2-1").hide();
        $(".law-details-2-1").hide();
    });

    $(".circle2-2").mouseover(function(){
        $(".law-title-2-2").show();
        $(".law-details-2-2").show();
    });

    $(".circle2-2").mouseout(function() {
        $(".law-title-2-2").hide();
        $(".law-details-2-2").hide();
    });

    $(".circle2-3").mouseover(function(){
        $(".law-title-2-3").show();
        $(".law-details-2-3").show();
    });

    $(".circle2-3").mouseout(function() {
        $(".law-title-2-3").hide();
        $(".law-details-2-3").hide();
    });

    //2nd timeline details expand first circle
    $(".circle2-1").click(function(){
        $("#billdetail02").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse2").click(function(){
        $("#billdetail02").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //BP2 Alert
    $(".item-learnmore2").click(function(){
        alert("...");
    });


    //3rd timeline
    $(".circle3-1").mouseover(function() {
        $(".law-title-3-1").show();
        $(".law-details-3-1").show();
    });

    $(".circle3-1").mouseout(function() {
        $(".law-title-3-1").hide();
        $(".law-details-3-1").hide();
    });

    $(".circle3-2").mouseover(function(){
        $(".law-title-3-2").show();
        $(".law-details-3-2").show();
    });

    $(".circle3-2").mouseout(function() {
        $(".law-title-3-2").hide();
        $(".law-details-3-2").hide();
    });

    //3rd timeline details expand first circle
    $(".circle3-1").click(function(){
        $("#billdetail03").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse3").click(function(){
        $("#billdetail03").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

     //4th timeline
    $(".circle4-1").mouseover(function() {
        $(".law-title-4-1").show();
        $(".law-details-4-1").show();
    });

    $(".circle4-1").mouseout(function() {
        $(".law-title-4-1").hide();
        $(".law-details-4-1").hide();
    });

    $(".circle4-2").mouseover(function(){
        $(".law-title-4-2").show();
        $(".law-details-4-2").show();
    });

    $(".circle4-2").mouseout(function() {
        $(".law-title-4-2").hide();
        $(".law-details-4-2").hide();
    });

    //4th timeline details expand first circle
    $(".circle4-1").click(function(){
        $("#billdetail04").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse4").click(function(){
        $("#billdetail04").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //5th timeline
    $(".circle5-1").mouseover(function() {
        $(".law-title-5-1").show();
        $(".law-details-5-1").show();
    });

    $(".circle5-1").mouseout(function() {
        $(".law-title-5-1").hide();
        $(".law-details-5-1").hide();
    });

    $(".circle5-2").mouseover(function(){
        $(".law-title-5-2").show();
        $(".law-details-5-2").show();
    });

    $(".circle5-2").mouseout(function() {
        $(".law-title-5-2").hide();
        $(".law-details-5-2").hide();
    });

    //5th timeline details expand first circle
    $(".circle5-1").click(function(){
        $("#billdetail05").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse5").click(function(){
        $("#billdetail05").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //6th timeline
    $(".circle6-1").mouseover(function() {
        $(".law-title-6-1").show();
        $(".law-details-6-1").show();
    });

    $(".circle6-1").mouseout(function() {
        $(".law-title-6-1").hide();
        $(".law-details-6-1").hide();
    });

    //6th timeline details expand first circle
    $(".circle6-1").click(function(){
        $("#billdetail06").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse6").click(function(){
        $("#billdetail06").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //7th timeline
    $(".circle7-1").mouseover(function() {
        $(".law-title-7-1").show();
        $(".law-details-7-1").show();
    });

    $(".circle7-1").mouseout(function() {
        $(".law-title-7-1").hide();
        $(".law-details-7-1").hide();
    });

    $(".circle7-2").mouseover(function() {
        $(".law-title-7-2").show();
        $(".law-details-7-2").show();
    });

    $(".circle7-2").mouseout(function() {
        $(".law-title-7-2").hide();
        $(".law-details-7-2").hide();
    });

    //7th timeline details expand first circle
    $(".circle7-1").click(function(){
        $("#billdetail07").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse7").click(function(){
        $("#billdetail07").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //8th timeline
    $(".circle8-1").mouseover(function() {
        $(".law-title-8-1").show();
        $(".law-details-8-1").show();
    });

    $(".circle8-1").mouseout(function() {
        $(".law-title-8-1").hide();
        $(".law-details-8-1").hide();
    });

    //9th timeline
    $(".circle9-1").mouseover(function() {
        $(".law-title-9-1").show();
        $(".law-details-9-1").show();
    });

    $(".circle9-1").mouseout(function() {
        $(".law-title-9-1").hide();
        $(".law-details-9-1").hide();
    });

    //9th timeline details expand first circle
    $(".circle9-1").click(function(){
        $("#billdetail09").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse9").click(function(){
        $("#billdetail09").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //10th timeline
    $(".circle10-1").mouseover(function() {
        $(".law-title-10-1").show();
        $(".law-details-10-1").show();
    });

    $(".circle10-1").mouseout(function() {
        $(".law-title-10-1").hide();
        $(".law-details-10-1").hide();
    });

    $(".circle10-2").mouseover(function() {
        $(".law-title-10-2").show();
        $(".law-details-10-2").show();
    });

    $(".circle10-2").mouseout(function() {
        $(".law-title-10-2").hide();
        $(".law-details-10-2").hide();
    });

    //10th timeline details expand first circle
    $(".circle10-1").click(function(){
        $("#billdetail10-1").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse10-1").click(function(){
        $("#billdetail10-1").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //10th timeline details expand second circle
    $(".circle10-2").click(function(){
        $("#billdetail10-2").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    $("#tri-collapse10-2").click(function(){
        $("#billdetail10-2").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });



    //BP3 Alert
    $(".item-learnmore3").click(function(){
        alert("...");
    });

    //BP4 Alert
    $(".item-learnmore4").click(function(){
        alert("...");
    });

    //BP5 Alert
    $(".item-learnmore5").click(function(){
        alert("...");
    });


    //BP6 Alert
    $(".item-learnmore6").click(function(){
        alert("...");
    });


    //BP7 Alert
    $(".item-learnmore7").click(function(){
        alert("...");
    });

    //BP8 Alert
    $(".item-learnmore8").click(function(){
        alert("...");
    });

    //BP9 Alert
    $(".item-learnmore9").click(function(){
        alert("...");
    });

    //BP10 Alert
    $(".item-learnmore10").click(function(){
        alert("...");
    });




});