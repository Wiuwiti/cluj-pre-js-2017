const insertHeader = function(option = {}){
    const result = []
    for(var i = 0;i < option.length; i++){
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

const tableRows = function(option = {}){
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


const tableConstructor = function (option ={} , Header ={} ){
    const result = []
    result.push(tableHeader(Header))
    for (var i = 0; i < option.length; i++){
         result.push(tableRows(option[i]))
    }
    return result.join('')
}

const tableBody = function(option = {}, tableHeader = {}){
    return `
    <table cellspacing="0" cellpadding= "0" class = "tableBlock" >
        ${tableConstructor(option, tableHeader)}
    </table>
    `
}


const EvaluationPage = function(option ={}){
    return `${NAV(option.headerContent, option.logoContent)}
    ${tableBody(option.tableContent, option.tableHeader)}
    ${Footer(option.footerContent)}`
}

window.onload = function(){
    const result = [],
    headerContent = [{
                            link: "Evaluationv2.html",
                            text: "Evaluation",
                            activePage: "active-page",
                            rightSidedButton: ""
                        },
                        {
                            link: "NewEvaluationv2.html",
                            text: "New Evaluation",
                            activePage: "",
                            rightSidedButton: ""
                        },
                        {
                            link: "Loginv2.html",
                            text: "Logout",
                            activePage: "",
                            rightSidedButton: "right-button"
                        }],

    logoContent = {link : "assets/logo-v2.jpg",
                    alt: "Company logo"},

   
    tableHeader = ["Nume", "Technologie", "Nivel"],
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
    ],
    footerContent = {Footer : "SoftVision@2017"},
    option = {tableContent,
            tableHeader, 
            footerContent, 
            headerContent,
            logoContent};
    result.push(EvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}
