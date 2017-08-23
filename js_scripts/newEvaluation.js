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
    const currentPage = "NewEvaluationv2.html", result =[], specialPlacement = "Loginv2.html";
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

const candidateLine = function(option = {}){
    return `
    <input class="input-candidate" type="${option.DataType}" name="${option.InputName}" autocomplete="on" placeholder="${option.PlaceHolder}" required />
    `
}
const constructDetailsForm = function(option = {}){
    const result = [];
    for(var i=0;i<option.DataType.length;i++){
        result.push(candidateLine({DataType : option.DataType[i],
                                InputName: option.InputName[i],
                                PlaceHolder: option.PlaceHolder[i]}))
    }
    return result.join('')
}


const candidateDetailsForm = function (option = {}){
    return `<form class = "candidate-input-box">
    ${constructDetailsForm(option)}
    </form>`
}

const technicalLevelPickerHeader = function(option = {}){
    return ` <h3>
        ${option}
    </h3>`
}


const technicalLevelPickerTop = function(option = {}){
    const result = []
    for(var i=0;i<option.length;i++){
        result.push(`<li class="R2" >${option[i]}</li>`)
    }    
    const Nresult = result.join('')
    return `<ul class="top-list-radio" >
        <li id="placeHolder"></li>
        <li id="R1" >Trainee</li>
        ${Nresult}
        <li id="extra"></li>
        <div class="clearfix"></div>
    </ul>`
}

const technicalLevelPickerBottom = function (option = {}){
    return ` 
    <ul class="down-list-radio">
        <li id= "RR1">
            <input type="radio" name="level" value = "T">
        </li>
        <li >
            <input type="radio" name="level" value = "J1">
        </li>
        <li >
            <input type="radio" name="level" value = "J2">
        </li>
        <li class="spacer">
            <input type="radio" name="level" value = "J3">
        </li>
        <li >
            <input type="radio" name="level" value = "M1">
        </li>
        <li >
            <input type="radio" name="level" value = "M2">
        </li>
        <li class="spacer">
            <input type="radio" name="level" value = "M3">
        </li>
        <li >
            <input type="radio" name="level" value = "S1">
        </li>
        <li >
            <input type="radio" name="level" value = "S2">
        </li>
        <li >
            <input type="radio" name="level" value = "S3">
        </li>
        <div class="clearfix"></div>
    </ul>`
}

const constructorTechnicalLevelPicker = function(option = {}){
    return `${technicalLevelPickerHeader(option.HeaderTitle)}
    ${technicalLevelPickerTop(option.Titles)}
    ${technicalLevelPickerBottom({})}
    `
}

const technicalLevelPicker = function (option = {}){
    return `<div class="radio-boxes">
   ${constructorTechnicalLevelPicker(option)}
    <br>			
    </div>
`
} 

const textAreaBox = function(option = {}){
    return `<div class="user-textarea">
    <h3>${option.HeaderTitle}</h3>
    <textarea placeholder="${option.Placeholder}"required></textarea>
    </div>`
}


const textArea = function (option = {}){
    const result = []
    for(var i=0;i<option.HeaderTitle.length;i++){
        result.push(textAreaBox({HeaderTitle: option.HeaderTitle[i], Placeholder: option.Placeholder[i]}))
    }
    return result.join('')
}


const selectConstructor = function(option= {}){
    const result = []
    result.push(`<option selected disabled hidden>Evaluation</option>`)
    for (var i=0;i<option.Values.length;i++){
        result.push(`<option value = "0"> ${option.Values[i]}</option>`)
    }
    return result.join('')
}

const dropDownConstructor = function (option={}){
    const result = []
    for (var i=0;i<option.selectName.length;i++){
        result.push(`
        <li class="legend-box-drop">
            <label for="${option.selectName[i]}"> ${option.labelTitle[i]}</label>
            <select name="${option.selectName[i]}">
            ${selectConstructor(option.sContent)}
            </select>
        </li>
        `)
    }
    return result.join('')
}

const newEvaluationForm = function (option = {}){
    var result = []
    for(var i=0;i<option.Data.length;i++){
        result.push(`<form class="legend-box" id="${option.boxID[i]}">
        <fieldset>
            <legend>${option.Title[i]}</legend>
            <ul class="legend-box-list">
                ${dropDownConstructor(option.Data[i])}
            </ul>
        </fieldset>
    </form>`)
    }
    const Nresult = result.join('')


    return `${Nresult}






<form  class="legend-box" id="DesignPaterns">
    <fieldset>
        <legend>Javascript</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Date types" >Date types &#38; variables </label>
                <select name="Date types" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Object manipulation" >Object manipulation</label>
                <select name="Object manipulation" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="DOM manipulation" >DOM manipulation</label>
                <select name="DOM manipulation" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Functions" >Functions</label>
                <select name="Functions" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Templating" >Templating</label>
                <select name="Templating" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Issue Tracking" >Issue Tracking</label>
                <select name="Issue Tracking" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Polymorphism" >Event Hnadling</label>
                <select name="Polymorphism" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Prototype" >Prototype &#38; OOP</label>
                <select name="Prototype" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Testing" >Testing(unit, E2E)</label>
                <select name="Testing" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="AJAX" >AJAX</label>
                <select name="AJAX" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Dubugging" >Dubugging</label>
                <select name="Dubugging" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Websockets" >Websockets</label>
                <select name="Websockets" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Tooling" >Tooling</label>
                <select name="Tooling" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Libraries" >Libraries</label>
                <select name="Libraries" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Promisses" >Promisses</label>
                <select name="Promisses" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Browser Engines" >Browser Engines</label>
                <select name="Browser Engines" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Frameworks" >Frameworks</label>
                <select name="Frameworks" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>


<form  class="legend-box" id="HTML">
    <fieldset>
        <legend>NodeJS</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Backend frameworks" >Backend frameworks</label>
                <select name="Backend frameworks" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Templating" >Templating</label>
                <select name="Templating" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="DOM Manipulation" >DOM Manipulation</label>
                <select name="DOM Manipulation" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Unit Testing" >Unit Testing</label>
                <select name="Unit Testing" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>`
}

const dropDownSelector = function (option = {}){

}

const submitButton =function (option = {}){
    return `<div class= "submit-button">
    <form action="Evaluation.html">
        <input  type="submit" name="button" value="Submit">
    </form>
</div>`
}

const Footer = function(option = {}){
    return `<footer class="footer footerT" >
    <p>SoftVision@2017</p>
</footer>`
}

const PageGrid = function (option = {}){
    return `	<div class = "mainBlock">
    ${candidateDetailsForm(option.cContent)}
    ${technicalLevelPicker(option.tlContent)}
    ${textArea(option.taContent)}
    ${newEvaluationForm(option.sContent)}
    ${submitButton()}
    </div>
    `
}
const NewEvaluationPage = function(option = {}){
    return `${NAV(option.hContent)}
    ${PageGrid(option)}
    ${Footer({})}`
}


window.onload = function(){
    const result = [];
    headerContent = {Logo : "/assets/logo-v2.jpg",
                    Link: ["Evaluationv2.html", "NewEvaluationv2.html", "Loginv2.html"],
                    Text: ["Evaluation", "New Evaluation", "Logout"]}
    candidateContent = {InputName :["Candidate", "Interviewer", "Date"],
                        PlaceHolder: ["Candidate", "Interviewer", "dd/mm/yyyy"],
                        DataType :["text", "text", "date"]
                    }
    technicalLevelContent = {HeaderTitle : "Technical Level",
                            Titles : ["Junior", "Middle", "Senior"]
    }
    textAreaContent = {HeaderTitle: ["Should the candidate be hired?",
                                    "General Impression",
                                    "Workflow, Leadership &#38; Soft Skills"],
                    Placeholder : ["The type of project that is suitable for the candidate &#13;&#10;Is guidance requiredd for the candidate",
                                "*required", 
                                "Describe the enviroment in which the candidate works. &#13;&#10;Describe ani guidance or management experience."]}
    selectContent = {Values: ["0", "1", "2", "3"]
    }
    dropDownContent = {Data: [{sContent : selectContent,
                    selectName : ["Classes", "Exception handling", "Version Control", "Access modifiers",
                                "Design Patterns", "Issue Tracking", "Polymorphism", "RegEx"],
                    labelTitle : ["Classes", "Exception handling", "Version Control", "Access modifiers",
                                "Design Patterns", "Issue Tracking", "Polymorphism", "RegEx"]},
                        {
                            sContent: selectContent,
                            selectName :["Protocol","Response codes","REST","Headers","Request methods", "Issue Tracking",
                                        ],
                            labelTitle :["Protocol","Response codes","REST","Headers","Request methods", "Sessions &#38; Cookies",
                                        ]
                        },
                        {
                            sContent:selectContent,
                            selectName:["Doctype","Tags","Basic SEO","Syntax rules"],
                            labelTitle:["Doctype","Tags","Basic SEO","Syntax rules"]
                        },
                        {
                            sContent:selectContent,
                            selectName:["Usage","Box Modeling","CSS 3.0","Selectors","Styling","Dynamic Stylesheets"],
                            labelTitle:["Usage","Box Modeling","CSS 3.0","Selectors","Styling","Dynamic Stylesheets"]
                        }
                ],
                    Title : ["OOP, Design Patterns", "HTTP","HTML","CSS"],
                    boxID : ["OOP", "HTTP", "HTML","CSS"]}
    option = {hContent : headerContent, 
        cContent : candidateContent,
        tlContent : technicalLevelContent,
        taContent: textAreaContent,
        sContent : dropDownContent}
    result.push(NewEvaluationPage(option))
    document.querySelector('#app').innerHTML = result;
}