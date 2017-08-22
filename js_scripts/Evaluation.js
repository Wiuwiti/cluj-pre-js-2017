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
    return `<tr>
    <td></td>
    <td>${option.Nume}</td>
    <td>${option.Technology}</td>
    <td>${option.Nivel}</td>
    <td class="detail-button">Detail</td>
    <td>
    <img src="${option.ImageLink}" alt="More Deatails">
    </td>
    </tr>
    `

}

const contructT = function (option = {}){
    const result = []
    for (var i=0;i<option.Nume.length;i++){
         result.push(tableRows({Nume: option.Nume[i], Technology: option.Technology[i], Nivel: option.Nivel[i], ImageLink: option.ImageLink} ))
    }
    return result.join('')
}



const tableBody = function(option = {}){
    return `<table cellspacing="0" cellpadding= "0" class = "tableBlock" >
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
    </tr>
    ${contructT(option)}
    <tr class="border-bottom">
        <td></td>
        <td>Dragan Roxana</td>
        <td>PHP</td>
        <td>Mid 1</td>
        <td class="detail-button">Detail</td>
        <td >
            <img src="/assets/button.jpg" alt="More Deatails">
        </td>
    </tr>
    <tr class="border-bottom">
        <td></td>
        <td>Florescu Mihai</td>
        <td>Javascript</td>
        <td>Junior 3</td>
        <td class="detail-button">Detail</td>
        <td >
            <img src="/assets/button.jpg" alt="More Deatails">
        </td>
    </tr>
    <tr class="border-bottom">
        <td></td>
        <td>Gheorghe Andrei</td>
        <td>Ruby</td>
        <td>Senior 1</td>
        <td class="detail-button">Detali</td>
        <td >
            <img src="/assets/button.jpg" alt="More Deatails">
        </td>
    </tr>
</table>`
}


const Footer = function(option = {}){
    return `	<footer class="footer footerT" >
    <p>SoftVision@2017</p>
</footer>`
}
const EvaluationPage = function(option ={}){
    return `${NAV()}${tableBody(option)}${Footer()}`
}

window.onload = function(){
    const result = [];
    option = {Nume : ["Jew jew", "Margarita"] ,Technology : ["Lewd", "munchin"], Nivel : ["14/88", "9/11"], ImageLink: "/assets/button.jpg"}
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}