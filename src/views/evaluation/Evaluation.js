const NAV = function (option = {}, logo = {}){
    return `
    <ul class="header headerT">
        ${logoButton(logo)}
        ${constructNav(option)}
    </ul>`
}

const logoButton = function(option = {}){
    return `
    <li class="header-elements">
        <img class= "main-logo" src="${option.Link}" alt="${option.Alt}">
    </li>`
}

const buttonNav = function(option={}, active="" , specialPlacement = ""){
    return `
    <li class="header-elements ${specialPlacement}">
        <a class = "header-elements-link header-elements-linkT ${active} " href="${option.Link}"> ${option.Text}</a>
    </li>
    `
}


const constructNav = function(option = {}){
    const   currentPage = "NewEvaluationv2.html", 
            specialPlacement = "Loginv2.html",
            result =[];
    for(var i=0;i<option.length;i++){
        if(option[i].Link === currentPage){
            result.push(buttonNav(option[i], "active-page"))
        }else{ 
            if(option[i].Link === specialPlacement){
                result.push(buttonNav(option[i], "", "right-button"))
            }else{
                result.push(buttonNav(option[i]))
            }
        }
    }
    return result.join('')
}




const insertHeader = function(option = {}){
    const result = []
    for(var i=0;i<option.length;i++){
        result.push(`<th>${option[i]}</th>`)
    }
    return result.join('')
}

const tableHeader = function(option = {}){
    return `
    <colgroup>
        <col class="table-button">
        <col span="4" >
        <col class="table-button">
    </colgroup>
    <tr>
        <th></th>
        ${insertHeader(option)}
        <th> </th>
        <th> </th>
    </tr>`
}


const tableConstructor = function (option = {}){
    const result = []
    result.push(tableHeader(option.tHeader))
    for (var i=0;i<option.Nume.length;i++){
         result.push(tableRows({Nume: option.Nume[i], Technology: option.Technology[i], Nivel: option.Nivel[i], ImageLink: option.ImageLink} ))
    }
    return result.join('')
}

const tableBody = function(option = {}){
    return `
    <table cellspacing="0" cellpadding= "0" class = "tableBlock" >
        ${tableConstructor(option)}
    </table>
    `
}

const Footer = function(option = {}){
    return `	
    <footer class="footer footerT" >
        <p>${option.Footer}</p>
    </footer>`
}
const EvaluationPage = function(option ={}){
    return `${NAV(option.headerContent, option.logoContent)}${tableBody(option.tContent)}${Footer(option.footerContent)}`
}

window.onload = function(){
    const result = [];
    tableContent = {Nume : ["Popescu Adrian", "Dragan Roxana" , "Florescu Mihai", "Gheorghe Andrei"], 
                    Technology : ["Javascript", "PHP" , "Javascript", "Ruby"],
                    Nivel : ["Mid 2", "Mid 1", "Junior 3", "Senior 1"], 
                    tHeader : ["Nume", "Tehnologie", "Nivel"],
                    ImageLink: "/assets/button.jpg",
                    }
    __footerContent = {Footer : "SoftVision@2017"}

    __headerContent = [{
        Link: "Evaluationv2.html",
        Text: "Evaluation"
    },
    {
        Link: "NewEvaluationv2.html",
        Text: "New Evaluation"
    },
    {
        Link: "Loginv2.html",
        Text: "Logout"
    }]


    __logoContent = {Link : "assets/logo-v2.jpg",
    Alt: "Company logo"}

    option = {tContent : tableContent, footerContent : __footerContent, logoContent : __logoContent, headerContent : __headerContent}
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}
