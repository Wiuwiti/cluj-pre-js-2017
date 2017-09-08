(function(){

    let evalButton, logout, submitButton;

    function Storage(){
        this.inputCandidate = [],
        this.radioBox= "",
        this.textArea = [],
        this.legendBoxes = []
    }

    Storage.prototype = {
        addCandidate: function(obj){
            this.inputCandidate.push(obj);
        },
        setRadioBox(str){
            this.radioBox = str;
        },
        setTextArea(obj){
            this.textArea.push(obj);
        },
        setlegendBoxes(arr){
            this.legendBoxes = arr;
        }
    }

    var s = new Storage();
    window.addEventListener('click', function(event){
        if (event.target.type === "radio"){
            s.setRadioBox(event.target.value);
        }
    })


    
            

    const instantiateObject = function(){
        
        s.addCandidate([
            document.getElementById("newEvaluationCandidate").value,
            document.getElementById("newEvaluationInterviewer").value,
            document.getElementById("newElementDate").value
        ]);
        GetNewEvaluationPageData().newEvaluationTextAreaContent.map(function(element, i ){
            s.setTextArea({
                input: document.getElementById(""+element.textAreaID+i).value
            })
        });
        const legendVector = GetNewEvaluationPageData().newEvaluationDropDownContent.map(function(element){
            const vl = element.selectBox.map(function(element){
                return document.getElementById(element.idName).value                 
            })
            return vl
        });
        s.setlegendBoxes(legendVector)
        return s
    }


    const addObjectToLocalstorage = function(obj){
        let aux = []
        if(localStorage.getItem("evaluation") !== null){
            aux = JSON.parse(localStorage.getItem("evaluation"))
        }
        if(aux ==null){
            aux =[].push(obj)
        }else{
            aux.push(obj)
        }
        localStorage.setItem("evaluation", JSON.stringify(aux))
    }






    const render = function(container, pageContent){

        const CandidateLine = function (candidateContent = {}) {
            return `
            <input id = "${candidateContent.elementID}" class="input-candidate" type="${candidateContent.dataType}" name="${candidateContent.inputName}" autocomplete="on" placeholder="${candidateContent.placeHolder}" required />
            `

        }
        const ConstructDetailsForm = function(candidateContent = {}){
                return candidateContent.map((element) => CandidateLine(element)).join('')

        }


        const CandidateDetailsForm = function (candidateContent = {}){
            return `
            <form class = "candidate-input-box">
                ${ConstructDetailsForm(candidateContent)}
            </form>`
            
        }


        const TechnicalLevelPickerHeader = function(headerTitle = {}){
            return ` 
            <h3>
                ${headerTitle}
            </h3>`
        }

    
        const TechnicalLevelPickerTop = function(technicalContent = {}){
            const result = technicalContent.headers.map((element, i) => `<li class="${technicalContent.classes[i]}" id="${technicalContent.ID[i]}">${element}</li>`).join('') 
                return `
                <ul class="top-list-radio" >
                    <li id="placeHolder"></li>
                        ${result}
                    <li id="extra"></li>
                    <div class="clearfix"></div>
                </ul>`
        }
        
        const TechnicalLevelPickerBottomSection = function (option = {}){
            return option.inputLevel.map((element , i ) => `
            <li class = "${option.classes[i]}" id ="${option.ID[i]}">
                <input type="radio" name="level" value = "${element}" $>
            </li>`).join('')
        }
        
        
        const TechnicalLevelPickerBottom = function (columnData = {}){
                const result = columnData.map((element) => TechnicalLevelPickerBottomSection(element)).join('')
                return ` 
                <ul class="down-list-radio">
                    ${result}
                    <div class="clearfix"></div>
                </ul>`
            
        }
        
        const TechnicalLevelPickerConstructor = function(technicalContent = {}){
                return `${TechnicalLevelPickerHeader(technicalContent.HeaderTitle)}
                ${TechnicalLevelPickerTop(technicalContent)}
                ${TechnicalLevelPickerBottom(technicalContent.columnData)}
                `
        }
        const TechnicalLevelPicker = function (technicalContent = {}){
            return `<div class="radio-boxes">
                ${TechnicalLevelPickerConstructor(technicalContent)}
            </div>
            `
        } 
        
        
        const TextAreaBox = function(textAreaContent = {},i, ){
            return `
            <div class="user-textarea">
                <h3>${textAreaContent.headerTitle}</h3>
                <textarea id="${textAreaContent.textAreaID}${i}"placeholder="${textAreaContent.placeHolder}" required></textarea>
            </div>`
            
        }
        const TextArea = function (textAreaContent = {}, array = []){
        
            return textAreaContent.map((element,i) =>TextAreaBox(element,i)).join('')
        
        }
        const SelectConstructor = function(selectContent = {}, ){
            const result = []
            result.push(`<option selected disabled hidden>Evaluation</option>`)
            result.push(selectContent.map(function(element){
        
                    return `<option value = "${element }"> ${element}</option>`
            }))
            return result.join('')
        }
        
        const DropDownConstructor = function (selectBoxContent = {}, selectContent = {}){
            return selectBoxContent.map( (element,i) => 
            `
            <li class="legend-box-drop">
                <label for="${element.selectName}"> ${element.labelTitle}</label>
                <select id = "${element.idName}" name="${element.selectName}">
                ${SelectConstructor(selectContent.values)}
                </select>
            </li>`).join('')
        }
        
        const NewEvaluationForm = function (dropDownContent = {}, selectedDropdown = []){
            return dropDownContent.map((element,i) => 
            `
            <form class="legend-box" id="${element.boxID}">
                <fieldset>
                    <legend>${element.Title}</legend>
                    <ul class="legend-box-list">
                        ${DropDownConstructor(element.selectBox, element.newEvaluationSelectContent,selectedDropdown[i])}
                    </ul>
                </fieldset>
            </form>`).join('')
        }
        const SubmitButton =function (option = {}){
            return `
            <div  class= "submit-button">
                <form >
                    <input id = "newEvalsubmit" type="submit" name="button" value="Submit">
                </form>
            </div>`
        }
        const NewEvaluationPageGrid = function (pageContent = {}){
            return `	
            <div class = "mainBlock">
                ${CandidateDetailsForm(pageContent.newEvaluationCandidateContent)}
                ${TechnicalLevelPicker(pageContent.newEvaluationTechnicalLevelContent)}
                ${TextArea(pageContent.newEvaluationTextAreaContent)}
                ${NewEvaluationForm(pageContent.newEvaluationDropDownContent)}
                ${SubmitButton()}
            </div>
            `
        }
        
        const NewEvaluationPage = function(pageContent = {}){
            return `${NavigationBar(pageContent.newEvaluationHeaderContent, pageContent.newEvaluationLogoContent)}
            ${NewEvaluationPageGrid(pageContent)}
            ${FooterConstructor(pageContent.newEvaluationFooterContent)}`
        }

        container.innerHTML = `${NewEvaluationPage(pageContent)}`;
    }




    const goToEval = function(event){
        event.preventDefault();
        interviewApp.navigate('evaluation');
    }

    const goToLogin = function(event){
        event.preventDefault();
        window.localStorage.removeItem('userData');
        interviewApp.navigate('login');
    }
    const submitButtonPress = function(){
            event.preventDefault();
            let newEvalObj = instantiateObject();
            addObjectToLocalstorage(newEvalObj)
            interviewApp.navigate('evaluation')
    }

    const setupEvents = function(){
        evalButton.addEventListener('click', goToEval);
        logout.addEventListener('click',goToLogin);
        submitButton.addEventListener('click', submitButtonPress)

    }
    const removeEvents = function(){
        evalButton.removeEventListener('click', goToEval);
        logout.removeEventListener('click', goToLogin);
        submitButton.removeEventListener('click', submitButtonPress)
    }




    const renderModule = function(container, pageContent, selectedContent){

        /*
            Candidate input details
        */
        const CandidateLine = function (candidateContent = {},selectedContent = {},i) {
            return `
            <input id = "${candidateContent.elementID}" class="input-candidate" type="${candidateContent.dataType}" name="${candidateContent.inputName}" autocomplete="on" placeholder="${candidateContent.placeHolder}" value = "${selectedContent.inputCandidate[0][i]}" required />  </input>
            `

        }
        const ConstructDetailsForm = function(candidateContent = {}, selectedContent = {}){
                return candidateContent.map((element,i) => CandidateLine(element, selectedContent, i)).join('')

        }
        const CandidateDetailsForm = function (candidateContent = {}, selectedContent = {}){
            return `
            <form class = "candidate-input-box">
                ${ConstructDetailsForm(candidateContent, selectedContent)}
            </form>`
            
        }

        /*
            Technical level picker
        */ 


        const TechnicalLevelPickerHeader = function(headerTitle = {}){
            return ` 
            <h3>
                ${headerTitle}
            </h3>`
        }

        const TechnicalLevelPickerTop = function(technicalContent = {}){
            const result = technicalContent.headers.map((element, i) => `<li class="${technicalContent.classes[i]}" id="${technicalContent.ID[i]}">${element}</li>`).join('') 
                return `
                <ul class="top-list-radio" >
                    <li id="placeHolder"></li>
                        ${result}
                    <li id="extra"></li>
                    <div class="clearfix"></div>
                </ul>`
            }
            
        const checkIT = function(w,s){
            console.log(w, "is" , s)
            if(w === s){
                return `checked="checked"`
            }return ``
        }
        
        const TechnicalLevelPickerBottomSection = function (option = {}, opt){
            console.log(opt)
            return option.inputLevel.map((element , i ) => `
            <li class = "${option.classes[i]}" id ="${option.ID[i]}">
                <input type="radio" name="level" value = "${element}" ${checkIT(element, opt)}>
            </li>`).join('')
        }
        
        
        const TechnicalLevelPickerBottom = function (columnData = {}, opt= {}){
            const result = columnData.map((element,i) => TechnicalLevelPickerBottomSection(element, opt)).join('')
            console.log(opt)
            return ` 
            <ul class="down-list-radio">
                ${result}
                <div class="clearfix"></div>
            </ul>`
            
        }
        
        const TechnicalLevelPickerConstructor = function(technicalContent = {}, opt = {}){
            
            return `
                ${TechnicalLevelPickerHeader(technicalContent.HeaderTitle)}
                ${TechnicalLevelPickerTop(technicalContent)}
                ${TechnicalLevelPickerBottom(technicalContent.columnData, opt.radioBox)}
                `
        }
        const TechnicalLevelPicker = function (technicalContent = {}, option = {}){
            if(Object.keys(option).length !== 0){
                return `<div class="radio-boxes">
                ${TechnicalLevelPickerConstructor(technicalContent, option)}
                </div>`
            } 
        }

        const TextAreaBox = function(textAreaContent = {},i, array = ""){
            
            return `
            <div class="user-textarea">
                <h3>${textAreaContent.headerTitle}</h3>
                <textarea id="${textAreaContent.textAreaID}${i}"placeholder="${textAreaContent.placeHolder}" required>${array.input}</textarea>
            </div>`
            
        }
        const TextArea = function (textAreaContent = {}, array = []){
            
            return textAreaContent.map((element,i) =>TextAreaBox(element,i, array[i])).join('')
            
        }

        const SelectConstructor = function(selectContent = {}, selected = {})
            {console.log(selectContent, "then", selected)
            const result = []
            result.push(`<option selected disabled hidden>Evaluation</option>`)
            result.push(selectContent.map(function(element){
                if(element === selected){
                    return `<option value = "${element }" selected> ${element}</option>`
                }else{
                    return `<option value = "${element }"> ${element}</option>`
                }
            }))
            return result.join('')
        }
        
        
        const DropDownConstructor = function (selectBoxContent = {}, selectContent = {}, selectedValues = []){
            return selectBoxContent.map( (element,i) => 
                `
                <li class="legend-box-drop">
                    <label for="${element.selectName}"> ${element.labelTitle}</label>
                    <select id = "${element.idName}" name="${element.selectName}">
                    ${SelectConstructor(selectContent.values, selectedValues[i])}
                    </select>
                </li>`).join('')
            
        }
        
        const NewEvaluationForm = function (dropDownContent = {}, selectedDropdown = []){
                return dropDownContent.map((element,i) => 
                `
                <form class="legend-box" id="${element.boxID}">
                    <fieldset>
                        <legend>${element.Title}</legend>
                        <ul class="legend-box-list">
                            ${DropDownConstructor(element.selectBox, element.newEvaluationSelectContent,selectedDropdown[i])}
                        </ul>
                    </fieldset>
                </form>`).join('')
        }






        const NewEvaluationPageGrid = function (pageContent = {}, selectedContent = {}){

            return `	
            <div class = "mainBlock">
                ${CandidateDetailsForm(pageContent.newEvaluationCandidateContent, selectedContent)}
                ${TechnicalLevelPicker(pageContent.newEvaluationTechnicalLevelContent, selectedContent)}
                ${TextArea(pageContent.newEvaluationTextAreaContent, selectedContent.textArea)}
                ${NewEvaluationForm(pageContent.newEvaluationDropDownContent, selectedContent.legendBoxes)}
            </div>
            `
        }

        const ModuleNewEval = function(pageContent = {}, selectedContent = {}){
            return `
                <div id="simpleModal class="modal">
                    <div class=modal-content">  
                    <span class="closeBtn">&times;</span>   
                    ${NewEvaluationPageGrid(pageContent, selectedContent)}</div>
                </div>
            `
        }
        console.log(container)
        container.innerHTML += `${ModuleNewEval(pageContent, selectedContent)}`
    }


    
    interviewApp.newEvaluation = {
        init: function(container){
            var http = new XMLHttpRequest();
            http.open("GET", "/src/data.json", true);
            http.send();
            http.onreadystatechange = function(){
                if(http.readyState == 4 && http.status<400){
                    var pageLayoutFromJSON =  JSON.parse(http.response).NewEvaluationPageData;
                    render(container, pageLayoutFromJSON);
                    evalButton = document.getElementById('evaluationPage');
                    logout = document.getElementById('logout');
                    submitButton = document.getElementById('newEvalsubmit');
                    setupEvents();
                }
            }
           
        },
        getPage: function(container, selectedValue){
            var http = new XMLHttpRequest();
            http.open("GET", "/src/data.json", true);
            http.send();
            http.onreadystatechange = function(){
                if(http.readyState ==4 && http.status<400){
                    var pageLayoutFromJSON = JSON.parse(http.response).NewEvaluationPageData;
                    renderModule(container, pageLayoutFromJSON, selectedValue);
                }
            }
        },
        destroy: function(){
            removeEvents();
            submitButton = undefined;
            evalButton = undefined;
            logout = undefined;
        }
    }

})();