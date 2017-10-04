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

    //Bill name
    bill01 = $(".bill01");
    bill02 = $(".bill02");
    bill03 = $(".bill03");
    bill04 = $(".bill04");
    bill05 = $(".bill05");
    bill06 = $(".bill06");

    //1st timeline details expand
    $(".item-learnmore1").click(function(){
        $("#billdetail01").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief1").hide();
    });

    $("#tri-collapse1").click(function(){
        $("#billdetail01").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief1").show();
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

    //2nd timeline details expand
    $(".item-learnmore2").click(function(){
        $("#billdetail02").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief2").hide();
    });

    $("#tri-collapse2").click(function(){
        $("#billdetail02").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief2").show();
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

    //6th timeline
    $(".circle6-1").mouseover(function() {
        $(".law-title-6-1").show();
        $(".law-details-6-1").show();
    });

    $(".circle6-1").mouseout(function() {
        $(".law-title-6-1").hide();
        $(".law-details-6-1").hide();
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

    //8th timeline
    $(".circle8-1").mouseover(function() {
        $(".law-title-8-1").show();
        $(".law-details-8-1").show();
    });

    $(".circle8-1").mouseout(function() {
        $(".law-title-8-1").hide();
        $(".law-details-8-1").hide();
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



    //3rd timeline expand
    $(".item-learnmore3").click(function(){
        $("#billdetail03").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief3").hide();
    });

    $("#tri-collapse3").click(function(){
        $("#billdetail03").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief3").show();
    });

    //4th timeline expand
     $(".item-learnmore4").click(function(){
        $("#billdetail04").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief4").hide();
    });

    $("#tri-collapse4").click(function(){
        $("#billdetail04").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief4").show();
    });

     //5th timeline expand
    $(".item-learnmore5").click(function(){
        $("#billdetail05").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief5").hide();
    });

    $("#tri-collapse5").click(function(){
        $("#billdetail05").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief5").show();
    });

     //6th timeline expand
    $(".item-learnmore6").click(function(){
        $("#billdetail06").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief6").hide();
    });

    $("#tri-collapse6").click(function(){
        $("#billdetail06").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief6").show();
    });

    //7th timeline expand
    $(".item-learnmore7").click(function(){
        $("#billdetail07").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief7").hide();
    });

    $("#tri-collapse7").click(function(){
        $("#billdetail07").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief7").show();
    });

    //8th timeline expand
    $(".item-learnmore8").click(function(){
        $("#billdetail08").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief8").hide();
    });

    $("#tri-collapse8").click(function(){
        $("#billdetail08").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief8").show();
    });

    //9th timeline expand
    $(".item-learnmore9").click(function(){
        $("#billdetail09").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief9").hide();
    });

    $("#tri-collapse9").click(function(){
        $("#billdetail09").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief9").show();
    });

    //10th timeline expand
    $(".item-learnmore10").click(function(){
        $("#billdetail10").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief10").hide();
    });

    $("#tri-collapse10").click(function(){
        $("#billdetail10").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        $(".item-billbrief10").show();
    });




});