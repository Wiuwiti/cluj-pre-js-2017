const NAV = function (option = {}){
    return `
    <ul class="header headerT">
        <li class="header-elements">
            <img class= "main-logo" src="/assets/logo-v2.jpg">
        </li>
        <li class="header-elements">
            <a class = "header-elements-link header-elements-linkT " href="Evaluationv2.html"> Evaluations</a>
        </li>
            <li class="header-elements">
                <a class="header-elements-link header-elements-linkT active-page" href="NewEvaluationv2.html">New Evaluation</a>
            </li>
        <li class="header-elements right-button">
            <a class= "header-elements-link header-elements-linkT" href="Loginv2.html">Logout</a>
        </li>
    </ul>`
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
    
    return `${NAV()}${tableBody(option.tContent)}${Footer(option.fContent)}`
}

window.onload = function(){
    const result = [];
    tableContent = {Nume : ["Popescu Adrian", "Dragan Roxana" , "Florescu Mihai", "Gheorghe Andrei"], 
                    Technology : ["Javascript", "PHP" , "Javascript", "Ruby"],
                    Nivel : ["Mid 2", "Mid 1", "Junior 3", "Senior 1"], 
                    ImageLink: "/assets/button.jpg"}
    footerContent = {Footer : "SoftVision@2017"}
    option = {tContent : tableContent, fContent : footerContent}
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}