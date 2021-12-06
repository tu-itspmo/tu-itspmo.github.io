

var difficultyRank = ""
var deliverablesRank = ""
var interdependecyRank = ""
var stakeholderSizeRank = ""
var riskinessRank = ""
var managementRank = ""
var noDeliverablesRank = ""
var durationRank = ""
var individualsRank = ""
var resourcesRank = ""
var budgetRank = ""

function calculateSize(sizes) {
    if (sizes ==0 ) {
        return 0
    } else if (sizes <= 5){
        return 1
    } else if (sizes <=10){
        return 2
    } else if (sizes <=15){
        return 3
    } else if (sizes <=20){
        return 4
    }
}

function calculateComplexity(complexities) {
    if (complexities ==0 ) {
        return 0
    } else if (complexities <= 6){
        return 1
    } else if (complexities <=12){
        return 2
    } else if (complexities <=18){
        return 3
    } else if (complexities <=24){
        return 4
    }
}

function calc(sz, com){
    if (sz == 0 && com == 0) {
        return "Priority: Low. No PMO involvement required"
    } else if (sz+com<3 ){
        return "Priority: Low. ITS Team Member"
    } else if (sz+com ==3 && (com ==2 ||sz==2)){
        return "Priority: Low. ITS Team Member"
    } else if (sz+com<5 ){
        return "Priority: Low. ITS Manager"
    } else if (sz+com==5 && (com ==4 ||sz==4)) {
        return "Priority: Low. ITS Manager"
    } else if (sz+com<=6 ){
        return "Priority: Medium. ITS Project Manager"
    } else if (sz+com<=8) {
        return "Priority: High. ITS Portfolio Manager"
    }
}

function categorization(event){
    event.preventDefault();
    difficultyRank = document.getElementById("difficultyRank").value;
    deliverablesRank = document.getElementById("deliverablesRank").value;
    interdependecyRank = document.getElementById("interdependecyRank").value;
    stakeholderSizeRank = document.getElementById("stakeholderSizeRank").value;
    riskinessRank = document.getElementById("riskinessRank").value;
    managementRank = document.getElementById("managementRank").value;
    noDeliverablesRank = document.getElementById("noDeliverablesRank").value;
    durationRank = document.getElementById("durationRank").value;
    individualsRank = document.getElementById("individualsRank").value;
    resourcesRank = document.getElementById("resourcesRank").value;
    budgetRank = document.getElementById("budgetRank").value;

    complexity1 = parseInt(difficultyRank);
    complexity2 = parseInt(deliverablesRank);
    complexity3 = parseInt(interdependecyRank);
    complexity4 = parseInt(stakeholderSizeRank);
    complexity5 = parseInt(riskinessRank);
    complexity6 = parseInt(managementRank);

    size1 = parseInt(noDeliverablesRank);
    size2 = parseInt(durationRank);
    size3 = parseInt(individualsRank);
    size4 = parseInt(resourcesRank);
    size5 = parseInt(budgetRank);
    
    var sizes = size1+size2+size3+size4+size5;
    var complexities = complexity1+complexity2+complexity3+complexity4+complexity5+complexity6
    var com = calculateComplexity(complexities);
    var sz = calculateSize(sizes);

    console.log(calc(sz,com));
    document.getElementById("res").innerHTML = calc(sz,com);

    return calc(sz,com);
}