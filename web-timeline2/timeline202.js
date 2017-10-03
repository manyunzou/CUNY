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

    $(".circle3").mouseover(function(){
        $(".law-title-3").show();
        $(".law-details-3").show();
    });

    $(".circle3").mouseout(function() {
        $(".law-title-3").hide();
        $(".law-details-3").hide();
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
    $(".circle2_1").mouseover(function() {
        $(".law-title-2_1").show();
        $(".law-details-2_1").show();
    });

    $(".circle2_1").mouseout(function() {
        $(".law-title-2_1").hide();
        $(".law-details-2_1").hide();
    });

    $(".circle2_2").mouseover(function(){
        $(".law-title-2_2").show();
        $(".law-details-2_2").show();
    });

    $(".circle2_2").mouseout(function() {
        $(".law-title-2_2").hide();
        $(".law-details-2_2").hide();
    });

    $(".circle2_3").mouseover(function(){
        $(".law-title-2_3").show();
        $(".law-details-2_3").show();
    });

    $(".circle2_3").mouseout(function() {
        $(".law-title-2_3").hide();
        $(".law-details-2_3").hide();
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
    $(".circle3_1").mouseover(function() {
        $(".law-title-3_1").show();
        $(".law-details-3_1").show();
    });

    $(".circle3_1").mouseout(function() {
        $(".law-title-3_1").hide();
        $(".law-details-3_1").hide();
    });

    $(".circle3_2").mouseover(function(){
        $(".law-title-3_2").show();
        $(".law-details-3_2").show();
    });

    $(".circle3_2").mouseout(function() {
        $(".law-title-3_2").hide();
        $(".law-details-3_2").hide();
    });

    $(".circle3_3").mouseover(function(){
        $(".law-title-3_3").show();
        $(".law-details-3_3").show();
    });

    $(".circle3_3").mouseout(function() {
        $(".law-title-3_3").hide();
        $(".law-details-3_3").hide();
    });

     //4th timeline
    $(".circle4_1").mouseover(function() {
        $(".law-title-4_1").show();
        $(".law-details-4_1").show();
    });

    $(".circle4_1").mouseout(function() {
        $(".law-title-4_1").hide();
        $(".law-details-4_1").hide();
    });

    $(".circle4_2").mouseover(function(){
        $(".law-title-4_2").show();
        $(".law-details-4_2").show();
    });

    $(".circle4_2").mouseout(function() {
        $(".law-title-4_2").hide();
        $(".law-details-4_2").hide();
    });

    $(".circle4_3").mouseover(function(){
        $(".law-title-4_3").show();
        $(".law-details-4_3").show();
    });

    $(".circle4_3").mouseout(function() {
        $(".law-title-4_3").hide();
        $(".law-details-4_3").hide();
    });

    //5th timeline
    $(".circle5_1").mouseover(function() {
        $(".law-title-5_1").show();
        $(".law-details-5_1").show();
    });

    $(".circle5_1").mouseout(function() {
        $(".law-title-5_1").hide();
        $(".law-details-5_1").hide();
    });

    $(".circle5_2").mouseover(function(){
        $(".law-title-5_2").show();
        $(".law-details-5_2").show();
    });

    $(".circle5_2").mouseout(function() {
        $(".law-title-5_2").hide();
        $(".law-details-5_2").hide();
    });

    $(".circle5_3").mouseover(function(){
        $(".law-title-5_3").show();
        $(".law-details-5_3").show();
    });

    $(".circle5_3").mouseout(function() {
        $(".law-title-5_3").hide();
        $(".law-details-5_3").hide();
    });

    //6th timeline
    $(".circle6_1").mouseover(function() {
        $(".law-title-6_1").show();
        $(".law-details-6_1").show();
    });

    $(".circle6_1").mouseout(function() {
        $(".law-title-6_1").hide();
        $(".law-details-6_1").hide();
    });

    $(".circle6_2").mouseover(function(){
        $(".law-title-6_2").show();
        $(".law-details-6_2").show();
    });

    $(".circle6_2").mouseout(function() {
        $(".law-title-6_2").hide();
        $(".law-details-6_2").hide();
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