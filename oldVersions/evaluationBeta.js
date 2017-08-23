const Evaluation = function (option = {}){
    return ` 
        <header>
            <ul class="header headerT">
                <li class="header-elements">
                    <img class= "main-logo" src="/assets/logo-v2.jpg">
                </li>
                <li class="header-elements">
                    <a class = "header-elements-link header-elements-linkT active-page" href="Evaluation.html"> Evaluations</a>
                </li>
                <li class="header-elements">
                    <a class="header-elements-link header-elements-linkT" href="NewEvaluation.html">New Evaluation</a>
                </li>
                <li class="header-elements right-button">
                    <a class= "header-elements-link header-elements-linkT" href="login.html">Logout</a>
                </li>
            </ul> 
        </header>
    
    
        <table cellspacing="0" cellpadding= "0" class = "tableBlock" >
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
            <tr class="border-bottom">
                <td></td>
                <td>Popescu Adrian</td>
                <td>Javascript</td>
                <td>Mid 2</td>
                <td class="detail-button">Detail</td>
                <td>
                    <img src="/assets/button.jpg" alt="More Deatails">
                </td>
            </tr>
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
        </table>
        
        ${Footer()} 
        
       
    `
}

window.onload = function(){
    const appEl = document.querySelector("#app");
    appEl.innerHTML = Evaluation();
}



const towsElements= options.items.map(function(rowObj)){
    
}_