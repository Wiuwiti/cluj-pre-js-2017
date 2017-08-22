const NAV = function (option = {}){
    return `
    <ul class="header headerT">
        ${logoButton(option.Logo)}
        ${constructNav(option)}
    </ul>`
}

const logoButton = function(option = {}){
    return `<li class="header-elements">
        <img class= "main-logo" src="${option}">
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
    const currentPage = "Evaluationv2.html", result =[], specialPlacement = "Loginv2.html";
    for(var i=0;i<option.Link.length;i++){
        if(option.Link[i] === currentPage){
            result.push(buttonNav({Link: option.Link[i], Text: option.Text[i]}, "active-page"))
        }else{ 
            if(option.Link[i] === specialPlacement){
                result.push(buttonNav({Link: option.Link[i], Text: option.Text[i]}, "", "right-button"))
            }else{
                result.push(buttonNav({Link: option.Link[i], Text: option.Text[i]}))
            }
        }
        
    }
    return result.join('')
}

const tableRows = function (option = {}){
    return `
    <tr>
        <td></td>
        <td>${option.Nume}</td>
        <td>${option.Technology}</td>
        <td>${option.Nivel}</td>
        <td class="detail-button">Detail</td>
        <td>
            <img src="${option.ImageLink}" alt="More Deatails">
        </td>
    </tr>`
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
        <th>Nume</th>
        <th>Tehnologie</th>
        <th>Nivel</th>
        <th> </th>
        <th> </th>
    </tr>`
}

const tableConstructor = function (option = {}){
    const result = []
    result.push(tableHeader({}))
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
    
    return `${NAV(option.hContent)}${tableBody(option.tContent)}${Footer(option.fContent)}`
}

window.onload = function(){
    const result = [];
    tableContent = {Nume : ["Popescu Adrian", "Dragan Roxana" , "Florescu Mihai", "Gheorghe Andrei"], 
                    Technology : ["Javascript", "PHP" , "Javascript", "Ruby"],
                    Nivel : ["Mid 2", "Mid 1", "Junior 3", "Senior 1"], 
                    ImageLink: "/assets/button.jpg"}
    footerContent = {Footer : "SoftVision@2017"}
    headerContent = {Logo : "/assets/logo-v2.jpg",
                    Link: ["Evaluationv2.html", "NewEvaluationv2.html", "Loginv2.html"],
                    Text: ["Evaluation", "New Evaluation", "Logout"]}
    option = {tContent : tableContent, fContent : footerContent, hContent : headerContent}
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}