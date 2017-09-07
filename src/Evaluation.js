(function(){
    let newEvalButton, logout, pageContent;
    
    const TableRows = function(tableContent = {}){
        return `
        <tr class="border-bottom">
            <td class= "td-theme"></td>
            <td class= "td-theme">${tableContent.nume}</td>
            <td class= "td-theme">${tableContent.technologie}</td>
            <td class= "td-theme">${tableContent.nivel}</td>
            <td class="detail-button td-theme">Detail</td>
            <td class= "td-theme">
                <img src="${tableContent.buttonIMG}" alt="More Deatails" class="evalContentBut">
            </td>
        </tr>
        `;
     }

    const render = function(container,q,w) {

        const InsertHeader = function(tableHeaderContent = {}){
            return tableHeaderContent.map((element) => `<th>${element}</th>`).join('');
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
           </tr>`;
        }
        
        
        
        
        const TableConstructor = function (tableContent ={} , tableHeaderContent ={} ){
           const result = [];
           result.push(TableHeader(tableHeaderContent));
           result.push(tableContent.map(TableRows).join(''));
           return result.join('');
        }
        
        
        const TableBody = function(tableContent = {}, tableHeaderContent = {}){
            return `
            <table id = "evalTable" cellspacing="0" cellpadding= "0" class = "evaluation-table evaluation-table-theme" >
                ${TableConstructor(tableContent, tableHeaderContent)}
            </table>
            `;
        }
    
        const EvaluationPage = function (pageContent = {}){
            return `
            ${NavigationBar(pageContent.evaluationHeaderContent, pageContent.evaluationLogoContent)}
            ${TableBody(pageContent.evaluationTableContent, pageContent.evaluationTableHeader)}
            ${FooterConstructor(pageContent.evaluationFooterContent)}
            `;
        }

        
        w.evaluationTableContent = q;
        container.innerHTML = `${EvaluationPage(w)}`;
    }


    

    const goToNewEval = function(event){
        event.preventDefault();
        interviewApp.navigate('newEvaluation');
    };

    const goToLogin = function(event){
        event.preventDefault();
        window.localStorage.removeItem('userData');
        interviewApp.navigate('login');
    }

    const detailsButton = function (w){
        var predicate = function(element, ind, context){
            element.addEventListener("click", function(e) {             
                showContent(w[ind])
                console.log(w[ind])
            })
        }

        let inter = document.getElementsByClassName("evalContentBut");
        Array.prototype.map.call(inter, predicate)
    }
const showContent = function(object){
    
    const popPage = window.open("", "Evaluation details", "width=1400,height=500")
    clearWindow(popPage)
    const obj = object
    popPage.document.write(`
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="test.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="/css/NewEvaluation.css">
    </head>
    
    
    <body> ${evaluationDetails(obj)} 
    
    
    </body>`)
}

const clearWindow = function(object){
    object.document.getElementsByTagName('body')[0].innerHTML = ''
}

const evaluationDetails = function(selectedObject){
    //console.log(selectedObject)
    return `
    Here is a potato
    `
}


    
    const setupEvents = function(){
        newEvalButton.addEventListener('click', goToNewEval);
        logout.addEventListener('click', goToLogin);
        detailsButton(JSON.stringify(localStorage.getItem('evaluation')));

    };

    const removeEvents = function(){
        newEvalButton.removeEventListener('click', goToNewEval);
        logout.removeEventListener('click',goToLogin);
    };

    
    interviewApp.evaluation = {
        init: function(container){
            var http = new XMLHttpRequest();
            http.open("GET", "/src/data.json", true);
            http.send();
            http.onreadystatechange = function(){
                if(http.readyState ==4 && http.status<400){
                    var w =  JSON.parse(http.response).EvaluationPageData;
                    render(container,q,w);
                    newEvalButton = document.getElementById('newEvaluationPage');
                    logout = document.getElementById('logout');
                    setupEvents();
                }
            }
            

        },
        destroy: function(){
            removeEvents();
            newEvalButton = undefined;
            logout = undefined;
        }
    }
    
})();