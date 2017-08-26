const InsertHeader = function(tableHeaderContent = {}){
     return tableHeaderContent.map((element) => `<th>${element}</th>`).join('')
}

const TableHeader = function(tableHeaderContent = {}){
    return `
    <colgroup>
        <col class="table-button">
        <col span="4" >
        <col class="table-button">
    </colgroup>
    <tr>
        <th></th>
        ${InsertHeader(tableHeaderContent)}
        <th> </th>
        <th> </th>
    </tr>`
}

const TableRows = function(tableContent = {}){
    return `
    <tr class="border-bottom">
        <td class= "td-theme"></td>
        <td class= "td-theme">${tableContent.nume}</td>
        <td class= "td-theme">${tableContent.technologie}</td>
        <td class= "td-theme">${tableContent.nivel}</td>
        <td class="detail-button td-theme">Detail</td>
        <td class= "td-theme">
            <img src="${tableContent.buttonIMG}" alt="More Deatails">
        </td>
    </tr>
    `
}


const TableConstructor = function (tableContent ={} , tableHeaderContent ={} ){
    const result = []
    result.push(TableHeader(tableHeaderContent))
    result.push(tableContent.map(TableRows).join(''))
    return result.join('')
}

const TableBody = function(tableContent = {}, tableHeaderContent = {}){
    return `
    <table cellspacing="0" cellpadding= "0" class = "evaluation-table evaluation-table-theme" >
        ${TableConstructor(tableContent, tableHeaderContent)}
    </table>
    `
}


const EvaluationPage = function(pageContent ={}){
    return `${NavigationBar(pageContent.evaluationHeaderContent, pageContent.evaluationLogoContent)}
    ${TableBody(pageContent.evaluationTableContent, pageContent.evaluationTableHeader)}
    ${FooterConstructor(pageContent.evaluationFooterContent)}`
}

window.onload = function(){
    const evaluationPage = [];

    const evaluationHeaderContent = [
        {
            link: "Evaluationv2.html",
            text: "Evaluation",
            activePage: "navigation-bar-active-page navigation-bar-active-page-theme"
        },
        {
            link: "NewEvaluationv2.html",
            text: "New Evaluation"
        },
        {
            link: "Loginv2.html",
            text: "Logout",
            rightSidedButton: "float-right-element"
        }
    ];

    const evaluationLogoContent = {
        link : "assets/logo-v2.jpg",
        alt: "Company logo"
    };

   
    const evaluationTableHeader = ["Nume", "Technologie", "Nivel"];
    const evaluationTableContent = [
        {
            nume: "Popescu Adrian",
            technologie: "Javascript",
            nivel: "Mid 2",
            buttonIMG : "/assets/button.jpg"
        },
        {
            nume: "Dragan Roxana",
            technologie: "PHP",
            nivel:"Mid 1",
            buttonIMG : "/assets/button.jpg"
        },
        {
            nume:"Florescu Mihai",
            technologie: "Javascript",
            nivel:"Junior 3",
            buttonIMG: "/assets/button.jpg"
        },
        {
            nume:"Gheorghe Andrei",
            technologie: "Ruby",
            nivel:"Senior 1",
            buttonIMG : "/assets/button.jpg"
        }
    ];

    const evaluationFooterContent = {
        footerText : "SoftVision@2017"
    };

    const options = {
        evaluationTableContent,
        evaluationTableHeader, 
        evaluationFooterContent, 
        evaluationHeaderContent,
        evaluationLogoContent
    };
    evaluationPage.push(EvaluationPage(options))
    document.querySelector('#app').innerHTML = evaluationPage;
}
