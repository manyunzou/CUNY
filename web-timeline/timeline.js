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
    $(".bill01").click(function(){
        $("#billdetail01").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        if(bill02.css("margin-top") === "16px") {
            bill02.css("margin-top", "577px");
        } else if (bill02.css("margin-top") === "577px"){
            bill02.css("margin-top", "16px");
        };
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

    //2nd timeline details expand
    $(".bill02").click(function(){
        $("#billdetail02").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });

        // if(bill03.css("margin-top") === "16px") {
        //     bill03.css("margin-top", "577px");
        // } else if (bill03.css("margin-top") === "577px"){
        //     bill03.css("margin-top", "16px");
        // };
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

    //3rd timeline expand
    $(".bill03").click(function(){
        $("#billdetail03").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

    //4th timeline expand
     $(".bill04").click(function(){
        $("#billdetail04").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

     //5th timeline expand
    $(".bill05").click(function(){
        $("#billdetail05").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });

     //6th timeline expand
    $(".bill06").click(function(){
        $("#billdetail06").slideToggle(100, function(){
            $(this).is(":visible")?"Collapse" : "Expand";
        });
    });
});