$(function(){

    //BPG1 Alert
    $(".item-learnmoreG1").click(function(){
        swal("Getting to Zero Recommendation 1", "Ensure expedited access for all low-income persons with HIV in New York State to essential benefits and social services, including safe, appropriate and affordable housing, food and transportation assistance. The greatest unmet needs of people living with HIV in New York State are housing, food and transportation. Research findings demonstrate that lack of stable housing is a formidable barrier to HIV care and treatment effectiveness at each point in the HIV care continuum and that housing assistance is an evidence-based health care intervention for homeless and unstably housed people with HIV that is linked to improved HIV health outcomes, including viral suppression. Adequate nutrition is also crucial for the management of HIV, and lack of transportation can prevent people with HIV from attending health care and social service appointments, especially in rural communities. Expanding access to essential housing, food and transportation assistance for all HIV-positive New Yorkers and establishing a clear point of entry to these public benefits for people with HIV in each local social services district in the state will address the social drivers of the epidemic (and related health disparities) by ensuring that each income-eligible person with HIV is linked to critical enablers of effective HIV treatment.");
    });


    //BPG2 Alert
    $(".item-learnmoreG2").click(function(){
        swal("Getting to Zero Recommendation 2", "Reform is necessary to end the practice of confiscating and using condoms as evidence. Current law permits a person’s possession of condoms to be offered as evidence of prostitution and trafficking-related offenses. Condoms may be confiscated as contraband, and the fact that a person is carrying condoms can be used as a basis for suspicion, arrest or prosecution for both types of offenses. As a result, individuals most in need, low-income women and LGBT people, are discouraged and deterred from carrying and using condoms. The Criminal Procedure and Civil Practice Law and Rules should be amended to prohibit evidentiary use of condoms as probable cause for arrest, or in legal proceedings related to prostitution and trafficking offenses. A comprehensive statutory ban would also support outreach workers who work in these impacted communities from being criminally charged with promoting prostitution. Most people who carry condoms are not sex workers, but ensuring that everyone is able to carry and use condoms – particularly if they engage in sex work – reduces harm to individual health and harm to the general public.");
    });


    //BPG3 Alert
    $(".item-learnmoreG3").click(function(){
        swal("Getting to Zero Recommendation 3", "The Task Force proposes a number of recommendations that promote drug user health and elevates a public health approach to drug policy, particularly as it impacts HIV incidence, prevalence and care in New York State. The recommendations include policy and legislative changes to: decriminalize syringe possession; support expanded access to clean syringes for injection drug users through Peer Delivered Syringe Exchange (PDSE) in uncovered areas of the state, and to young injectors through drug treatment, medical care and mental health counseling; increase access to drug treatment such as methadone and buprenorphine within local and state correctional facilities; remove the advertising ban on the Expanded Syringe Access Program (ESAP) and the limit of syringes per transaction distributed through ESAP; and improve health systems to protect drug users from related conditions such as contracting viral hepatitis and overdose. Increase access to Opioid Overdose Prevention through the expansion of opioid overdose prevention training and availability of naloxone to all incarcerated individuals prior to release (permitted under current law); provision of liability coverage for individuals who prescribe naloxone; and the creation of safe injection facilities (legislative change - - Penal Code exemption). Collectively, the proposals shift New York’s criminal justice approach to drug use to a public health approach, in an effort to reduce harm and end AIDS.");
    });

    //BPG4 Alert
    $(".item-learnmoreG4").click(function(){
        swal("Getting to Zero Recommendation 4", "All New Yorkers, including transgender New Yorkers, deserve to be treated fairly. The existing NYS Executive Order to protect transgender people in state work places is not far reaching enough to ensure broad protections from stigma and discrimination. While some counties and municipalities have a transgender civil rights ordinance, they are inconsistent in their language and create inconsistent transgender civil rights coverage. Passage of the statewide transgender civil rights law, GENDA, would standardize protections and unify transgender civil rights protections in New York State. Currently, neither federal nor state law specifically ban discrimination based on gender identity. This lack of statewide protection impacts transgender persons as it relates to employment, housing, credit and public accommodations.");
    });

    //BPG5 Alert
    $(".item-learnmoreG5").click(function(){
        swal("Getting to Zero Recommendation 5", "The Healthy Teens Act amends the Public Health Law by requiring all local school districts develop age-appropriate and medically-accurate sex education curricula. The bill awards funding for school districts, boards of cooperative education services and community-based organizations to provide comprehensive sex education programs for young people. New York State youth must be supported in making healthy, positive choices about sexual health in order to avoid negative outcomes such as HIV/STD infections and unintended pregnancy. To make positive and healthy decisions youth must have access to evidence based education, LGBT sexual health information, as well as knowledge of prevention interventions such as PrEP, nPEP and effective condom use. Youth must be equipped to live sexually-healthy lives. Sexual health is a state of well-being that involves physical, emotional, mental, social, and spiritual dimensions. Sexual health is an intrinsic element of human health and is based on a positive, equitable, and respectful approach to sexuality, relationships, and reproduction. It includes: the ability to understand the benefits, risks, and responsibilities of sexual behavior; the prevention and care of disease and other adverse outcomes; and the possibility of fulfilling sexual relationships. Sexual health is impacted by socioeconomic and cultural contexts—including policies, practices, and services—that support healthy outcomes for individuals, families, and their communities. To promote positive sexual health among youth the passage of the Healthy Teens Act is necessary.");
    });


    //BPG6 Alert
    $(".item-learnmoreG6").click(function(){
        swal("Getting to Zero Recommendation 6", "To respond to the care needs of all individuals, the state should provide presumptive Medicaid coverage as a Medicaid waiver program to uninsured/underinsured NYS residents who are at high HIV risk, including transgender persons, and persons newly diagnosed with HIV, on the basis of their identification as New York State residents. The benefit would be similar to the existing NYS Family Planning Benefits Program (FPBP), maintaining the FPBP’s 223% federal poverty level (FPL) income guideline and three-month retroactivity to focus on those not already enrolled in care; cover sexual health services, such as PrEP, nPEP, STI screening and treatment, HIV management, hepatitis C testing and treatment, family planning services, and transgender transition services.");
    });


    //BPG7 Alert
    $(".item-learnmoreG7").click(function(){
        swal("Getting to Zero Recommendation 7", "Competent minors, who are already able to consent to both STI and HIV testing without parental consent, also should be guaranteed the right to consent to HIV treatment and ARV prophylaxis. A process or policy must be in place that allows for young adults and youth, including transgender youth, to gain access to HIV and STI treatment, as well as prevention services, such as PrEP and nPEP and immunization for HPV, without parental consent so that confidentiality is preserved. Protections must be in place to ensure that insurance information, such as “explanation of benefits” (EOB) documents, are sent to the patient (i.e. young adult or minor) rather than to the policy holder (i.e. the parents) if that young person is using parental insurance to support HIV treatment or prevention services, such as ARV-P services.");
    });

    //G1 timeline details expand first circle
    $(".circleG1-1").mouseover(function() {
        $(".law-title-G1-1").show();
        $(".law-details-G1-1").show();
    });

    $(".circleG1-1").mouseout(function() {
        $(".law-title-G1-1").hide();
        $(".law-details-G1-1").hide();
    });

    $(".circleG1-2").mouseover(function() {
        $(".law-title-G1-2").show();
        $(".law-details-G1-2").show();
    });

    $(".circleG1-2").mouseout(function() {
        $(".law-title-G1-2").hide();
        $(".law-details-G1-2").hide();
    });

    //G2 timeline details expand first circle
    $(".circleG2-1").mouseover(function() {
        $(".law-title-G2-1").show();
        $(".law-details-G2-1").show();
    });

    $(".circleG2-1").mouseout(function() {
        $(".law-title-G2-1").hide();
        $(".law-details-G2-1").hide();
    });

    $(".circleG2-2").mouseover(function() {
        $(".law-title-G2-2").show();
        $(".law-details-G2-2").show();
    });

    $(".circleG2-2").mouseout(function() {
        $(".law-title-G2-2").hide();
        $(".law-details-G2-2").hide();
    });

    //G3 timeline details expand first circle
    $(".circleG3-1").mouseover(function() {
        $(".law-title-G3-1").show();
        $(".law-details-G3-1").show();
    });

    $(".circleG3-1").mouseout(function() {
        $(".law-title-G3-1").hide();
        $(".law-details-G3-1").hide();
    });

    //G4 timeline details expand first circle
    $(".circleG4-1").mouseover(function() {
        $(".law-title-G4-1").show();
        $(".law-details-G4-1").show();
    });

    $(".circleG4-1").mouseout(function() {
        $(".law-title-G4-1").hide();
        $(".law-details-G4-1").hide();
    });

    $(".circleG4-2").mouseover(function() {
        $(".law-title-G4-2").show();
        $(".law-details-G4-2").show();
    });

    $(".circleG4-2").mouseout(function() {
        $(".law-title-G4-2").hide();
        $(".law-details-G4-2").hide();
    });

    $(".circleG4-3").mouseover(function() {
        $(".law-title-G4-3").show();
        $(".law-details-G4-3").show();
    });

    $(".circleG4-3").mouseout(function() {
        $(".law-title-G4-3").hide();
        $(".law-details-G4-3").hide();
    });

    //G5 timeline details expand first circle
    $(".circleG5-1").mouseover(function() {
        $(".law-title-G5-1").show();
        $(".law-details-G5-1").show();
    });

    $(".circleG5-1").mouseout(function() {
        $(".law-title-G5-1").hide();
        $(".law-details-G5-1").hide();
    });

    $(".circleG5-2").mouseover(function() {
        $(".law-title-G5-2").show();
        $(".law-details-G5-2").show();
    });

    $(".circleG5-2").mouseout(function() {
        $(".law-title-G5-2").hide();
        $(".law-details-G5-2").hide();
    });

    //G7 timeline details expand first circle
    $(".circleG7-1").mouseover(function() {
        $(".law-title-G7-1").show();
        $(".law-details-G7-1").show();
    });

    $(".circleG7-1").mouseout(function() {
        $(".law-title-G7-1").hide();
        $(".law-details-G7-1").hide();
    });


})
