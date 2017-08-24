const InsertHeader = function(option = {}){
     return option.map((element) => `<th>${element}</th>`).join('')
}

const TableHeader = function(option = {}){
    return `
    <colgroup>
        <col class="table-button">
        <col span="4" >
        <col class="table-button">
    </colgroup>
    <tr>
        <th></th>
        ${InsertHeader(option)}
        <th> </th>
        <th> </th>
    </tr>`
}

const TableRows = function(option = {}){
    return `
    <tr class="border-bottom">
        <td></td>
        <td>${option.nume}</td>
        <td>${option.technologie}</td>
        <td>${option.nivel}</td>
        <td class="detail-button">Detail</td>
        <td>
            <img src="${option.buttonIMG}" alt="More Deatails">
        </td>
    </tr>
    `
}


const TableConstructor = function (option ={} , Header ={} ){
    const result = []
    result.push(TableHeader(Header))
    result.push(option.map((element) => TableRows(element)).join(''))
    return result.join('')
}

const TableBody = function(option = {}, tableHeader = {}){
    return `
    <table cellspacing="0" cellpadding= "0" class = "tableBlock" >
        ${TableConstructor(option, tableHeader)}
    </table>
    `
}


const EvaluationPage = function(option ={}){
    return `${NAV(option.headerContent, option.logoContent)}
    ${TableBody(option.tableContent, option.tableHeader)}
    ${Footer(option.footerContent)}`
}

window.onload = function(){
    const result = [];
    const headerContent = [{
                            link: "Evaluationv2.html",
                            text: "Evaluation",
                            activePage: "active-page"
                        },
                        {
                            link: "NewEvaluationv2.html",
                            text: "New Evaluation"
                        },
                        {
                            link: "Loginv2.html",
                            text: "Logout",
                            rightSidedButton: "right-button"
                        }];

    const logoContent = {link : "assets/logo-v2.jpg",
                    alt: "Company logo"};

   
    const tableHeader = ["Nume", "Technologie", "Nivel"];
    tableContent = [
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
    const footerContent = {Footer : "SoftVision@2017"};
    const option = {tableContent,
            tableHeader, 
            footerContent, 
            headerContent,
            logoContent};
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}
