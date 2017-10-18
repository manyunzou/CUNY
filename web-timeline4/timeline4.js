$(function(){

    alert("Click the plus sign to see the timeline details.")

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
        alert(<b>"BP1"</b> + "<b>BP1</b>\nNew York State has a law that mandates primary care providers as well as hospitals and emergency departments to offer HIV testing to all persons between the ages of 13 and 64, with certain exceptions. This law was modified in 2014 to remove the requirement for written consent except in correctional settings. Compliance is substantially below optimal levels, leading to missed opportunities where persons with undiagnosed infection are in systems of care without their HIV being identified. Electronic hard stop prompts to remind providers to offer testing should be used, and provider education is needed. HIV testing should be an expected part of all comprehensive annual primary care visits. In sum, to identify persons who remain undiagnosed, facilities and practitioners must follow the law, and New York State must enforce it. Additional settings for routine testing should be permitted, such as dental offices, pharmacies and mental health facilities, and additional changes to the law should be considered for New York to adopt a true opt-out testing model.");
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
        alert("Routine testing is not sufficient, since persons at highest risk with repeated potential exposures need more frequent testing opportunities than would be afforded through primary care or hospital settings. Sites must be identified and supported that are most likely to serve populations such as MSM, transgender men and women, new immigrants, persons in neighborhoods with high seroprevalence rates, persons who inject or use drugs, sex workers, migrant and seasonal farm workers, homeless persons, and those with a history of incarceration, substance use or mental health issues. Since behavior, among other factors, affects risk, not all persons in these groups are at high risk. Therefore, programs need to determine strategies to engage those within the population most likely to be at risk of infection, keeping in mind that persons of color continue to be most heavily affected. Incentives, community based settings and mobile units, peer outreach models, and availability of free home test kits, as appropriate, are all strategies for consideration.");
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
        alert("Detecting acute HIV infection must play a critical role in the effort to end the epidemic, since acutely-infected persons are HIV’s most highly-efficient transmitters when having unprotected sex or sharing drug injection equipment. Strategic efforts must include making clients and providers aware of signs and symptoms of acute HIV infection which often mimic acute Mononucleosis in young and old alike, ensuring facilities offer nPEP and the availability other prevention services (such as PrEP) and have the capacity to screen for acute infection, using the state-of-the-art and standard-of-care 4th generation testing, and allowing for higher reimbursements for providers using the most sensitive tests.");
    });

    //BP4 Alert
    $(".item-learnmore4").click(function(){
        alert("All testing settings must be centers for referral and engagement for both positive and negative persons. State law requires that persons testing HIV-positive have an appointment made for follow-up HIV care. However, a more aggressive approach is needed. A significant number of persons who test positive are, in fact, already in the surveillance system and out of care. This is an important opportunity to identify what caused the person to fall out of care and to address the medical, housing, supportive services, behavioral health – including substance abuse – and other needs involved. In an effort to keep HIV-negative persons negative, HIV testing settings should assist in this effort by expanding their service options. Some examples of services to be offered include enrollment in insurance programs, referrals to behavioral health, substance use, and housing programs, and access to PrEP and nPEP. The use of STD clinics, drug treatment programs, and community health centers as one-stop-shops is recommended. Additionally, New York State’s existing Special Needs Plans should be expanded to provide prevention services such as PrEP and nPEP to eligible high-risk individuals.");
    });

    //BP5 Alert
    $(".item-learnmore5").click(function(){
        alert("Viral suppression of persons with diagnosed HIV infection is the cornerstone of the plan to end AIDS as an epidemic. Those who achieve and maintain viral suppression are unlikely to have their own health deteriorate due to HIV or to transmit the virus to others. Having reportable quality measures and monitoring of performance related to viral suppression by HIV providers, facilities and managed care plans would assist in improvement of treatment outcomes across the state. The use of viral load and other data collected by the New York State HIV surveillance system as a mechanism for objective validation of performance is recommended. Timely provider reporting through surveillance, eHIVQUAL and other mechanisms is critical in maintaining an accurate picture of performance against the NYSDOH/AI Standards of Care. Also recommended is the use of electronic medical record prompts in all settings to identify nonsuppressed persons in need of re-engagement or other assistance, advanced electronic systems to allow patients access to their self-portals for the purpose of individual appointment tracking, reviewing of laboratory results and receiving appointment reminders. Identifying additional actions related to pharmacy practice that will improve ongoing access to medication is recommended as well, as is the identification of additional actions related to pharmacy practice that will improve ongoing access to medication and introduction and monitoring of trauma-informed approaches across the HIV service continuum are also recommended.");
    });


    //BP6 Alert
    $(".item-learnmore6").click(function(){
        alert("Both providers and patients have numerous competing priorities. The use of incentives for viral load suppression performance helps to keep attention on achieving this key goal. For providers, including Medicaid managed care plans and health homes, incentivization could be built into the reimbursement structure. For patients, incentives such as gift cards or non-cash rewards could be provided for adherence milestones, keeping appointments, achieving or sustaining an undetectable viral load. New computer-based and social-media technologies may present opportunities for monitoring and encouraging adherence in ways that were not previously possible. Empowering patients and providers with joint access to electronic medical records (EMRs), pharmacy, and laboratory data is also recommended.");
    });


    //BP7 Alert
    $(".item-learnmore7").click(function(){
        alert("There are many reasons why patients may be lost to care from the perspective of a particular provider or system. Since data about patients may be present in multiple, non-connected data systems such as hospital and clinic electronic medical records, insurance billing, pharmacy utilization, and surveillance, there are common instances of persons appearing lost in one system but remaining visible in others. Also, patients may move out of the jurisdiction, become incarcerated, or die from non-HIV related causes. The ability to match data and link systems to improve health outcomes is of critical importance to prevent inefficiencies such as using outreach workers to find someone no longer in their area or who have chosen to use a different provider. Other persons may be seeing a provider but, for some reason, not able to reach or maintain viral suppression. Patient access to their electronic medical records, pharmacy, and laboratory data, can empower patients and improve continuity of care and adherence. Properly cross-checked data can be used successfully to initiate appropriate provider or public health interventions to identify those persons truly lost to care or not virally suppressed and take steps to improve their health outcomes. Expansion of data sharing with managed care plans and additional community-based partners, and clinics, including migrant health centers, would increase the overall capacity to conduct linkage and retention activities. Managed care plans, health homes and other care providers need to develop additional programs to prevent lost to care situations and optimize viral load suppression. Providing joint access to both patients and providers can assist in improving rates of adherence and viral load suppression. In response to presenting barriers that may influence a patient’s retention and adherence, quality indicators should be expanded to include stigma and discrimination. Stigma measures will provide a baseline for providers and health plans to use to improve a patient’s health care experience.");
    });

    //BP8 Alert
    $(".item-learnmore8").click(function(){
        alert("To achieve and maintain viral suppression, which is the clearest indicator that appropriate medical care is being provided, a person with HIV needs a host of non-medical resources. Persons with HIV who lack jobs, housing, financial resources, adequate insurance, behavioral well-being, and/or personal support systems are less likely to achieve improved health outcomes. LGBT and other infected youth warrant special attention since their developmental stage, separation from family, and experienced trauma each can provide major complications. A minor who has been determined by a provider experienced in adolescent health to be competent to consent for care should be able to receive HIV treatment without parental consent. To achieve end of AIDS goals, it will be essential to ensure adequate, stable levels of support to people living with HIV in housing, transportation, employment, nutrition, substance abuse treatment, mental health services, and/or child care. Furthermore, HIV providers must have the knowledge and capacity necessary to link clients to such supportive services. Properly trained persons with AIDS should be employed as peer guides who can help others navigate support systems. These peer guides can also offer personal understanding and encouragement to overcome stigma and discrimination that may undermine treatment adherence.");
    });

    //BP9 Alert
    $(".item-learnmore9").click(function(){
        alert("HIV-infected persons within correctional facilities or other institutional settings, such as a mental health facility or drug treatment program present specific challenges in encouraging them to get tested and stay engaged in care while in these institutions and when they return to their communities in linkage and retention in care and viral load suppression. Significant work needs to be done, especially around stigma and the lack of confidentiality, so that infected institutionalized persons are willing to be identified and treated as early in their stay as possible. In order to facilitate their engagement in care, it is necessary to enhance HIV education and other support services in these settings, including the augmentation of the existing state and local correctional facility-based initiatives and expanded use of HIV peer educators in correctional facilities. HIV care within state and local correctional facilities should be improved and more closely monitored by enhancing the NYSDOH’s statutory role in oversight of HIV services for incarcerated persons. Such efforts will make optimal health outcomes more likely in the facility and improve the likelihood for acceptance of post-release referrals. Release itself may trigger a return to behaviors antithetical to optimal HIV medical outcomes and may increase chances for possible transmission to others in the community. A true continuum of care needs to be established that includes in-facility treatment, discharge planning, a firm linkage to community-based care, enrollment in Medicaid, stable housing, employment opportunities and whatever other supports are necessary.");
    });

    //BP10 Alert
    $(".item-learnmore10").click(function(){
        alert("DSRIP provides a unique opportunity to engage and leverage the health care system statewide in support of efforts to maximize viral suppression among HIV-infected persons. The overall goal of DSRIP is to decrease unnecessary hospitalizations by 25%. Clearly, preventing HIV-infected persons from progressing to AIDS and developing opportunistic infections or other conditions that would require a hospital stay is in support of DSRIP’s prime objective. Having each Performing Provider System in the state adopt a Domain 4 HIV/AIDS project would benefit both DSRIP and the state’s efforts to end the HIV epidemic. Additionally, NYS Special Needs Plans (SNPs) should be added in the first quarter of 2015 to the State’s Marketplace and their scope expanded to include comprehensive HIV prevention services such as PrEP and nPEP to ensure full access to HIV SNPs for HIV-positive new Medicaid recipients and to those requesting transfers from mainstream plans.");
    });




});