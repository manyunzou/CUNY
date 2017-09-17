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

    //1st timeline details expand
    $(".bill01").click(function(){
        $("#billdetail01").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    })

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
});