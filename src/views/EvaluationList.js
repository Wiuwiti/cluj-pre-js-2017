const EvaluationList = function(lis) {
    this.markup = `
        ${EvaluationPage(GetEvaluationPageData(lis))}
    `;
}

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
   //console.log(tableContent)
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


const EvaluationPage = function(pageContent = {}){
    return `${NavigationBar(pageContent.evaluationHeaderContent, pageContent.evaluationLogoContent)}
    ${TableBody(pageContent.evaluationTableContent, pageContent.evaluationTableHeader)}
    ${FooterConstructor(pageContent.evaluationFooterContent)}
    `
}