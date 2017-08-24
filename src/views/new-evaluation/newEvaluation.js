const CandidateLine = function(option = {}){
    return `
    <input class="input-candidate" type="${option.dataType}" name="${option.inputName}" autocomplete="on" placeholder="${option.placeHolder}" required />
    `
}
const ConstructDetailsForm = function(option = {}){
    const result = [];
    for(var i = 0; i < option.length; i++){
        result.push(CandidateLine(option[i]))
    }
    return result.join('')
}


const CandidateDetailsForm = function (option = {}){
    return `<form class = "candidate-input-box">
    ${ConstructDetailsForm(option)}
    </form>`
}

/**
 * 
 * @param {Object} option  Thre op
 */
const TechnicalLevelPickerHeader = function(option = {}){
    return ` <h3>
        ${option}
    </h3>`
}


const TechnicalLevelPickerTop = function(option = {}){
    const result = []
    for(var i = 0; i < option.headers.length; i++){
        result.push(`<li class="${option.classes[i]}" id="${option.ID[i]}">${option.headers[i]}</li>`)
    }    
    return `<ul class="top-list-radio" >
        <li id="placeHolder"></li>
            ${result.join('')}
        <li id="extra"></li>
        <div class="clearfix"></div>
    </ul>`
}

const TechnicalLevelPickerBottomSection = function (option = {}){
    const result = option.inputLevel.map(function (element , i ){
        return `
        <li class = "${option.classes[i]}" id ="${option.ID[i]}">
            <input type="radio" name="level" value = "${option.inputLevel[i]}">
        </li>`
    }).join('')
    return result
}


const TechnicalLevelPickerBottom = function (option = {}){
    let result = option.map(function(element){return TechnicalLevelPickerBottomSection(element)})
    return ` 
    <ul class="down-list-radio">
        ${result.join('')}
        <div class="clearfix"></div>
    </ul>`
}

const ConstructorTechnicalLevelPicker = function(option = {}){
    return `${TechnicalLevelPickerHeader(option.HeaderTitle)}
    ${TechnicalLevelPickerTop(option)}
    ${TechnicalLevelPickerBottom(option.columnData)}
    `
}
const TechnicalLevelPicker = function (option = {}){
    return `<div class="radio-boxes">
        ${ConstructorTechnicalLevelPicker(option)}
    </div>
`
} 


const TextAreaBox = function(option = {}){
    return `<div class="user-textarea">
        <h3>${option.headerTitle}</h3>
        <textarea placeholder="${option.placeHolder}"required></textarea>
    </div>`
}
const TextArea = function (option = {}){
    const result = []
    for(var i = 0 ; i < option.length; i++){
        result.push(TextAreaBox(option[i]))
    }
    return result.join('')
}


const SelectConstructor = function(option= {}){
    const result = []
    result.push(`<option selected disabled hidden>Evaluation</option>`)
    for (var i = 0; i < option.length; i++){
        result.push(`<option value = "0"> ${option[i]}</option>`)
    }
    return result.join('')
}


const DropDownConstructor = function (option={}, selectContent = {}){
    const result = []
    for (var i = 0; i < option.length; i++){
        result.push(`
        <li class="legend-box-drop">
            <label for="${option[i].selectName}"> ${option[i].labelTitle}</label>
            <select name="${option[i].selectName}">
            ${SelectConstructor(selectContent.Values)}
            </select>
        </li>
        `)
    }
    return result.join('')
}

const NewEvaluationForm = function (option = {}){
    var result = []
    for(var i = 0; i < option.length; i++){
        result.push(`<form class="legend-box" id="${option[i].boxID}">
        <fieldset>
            <legend>${option[i].Title}</legend>
            <ul class="legend-box-list">
                ${DropDownConstructor(option[i].selectBox, option[i].selectContent)}
            </ul>
        </fieldset>
    </form>`)
    }
    return result.join('')
}


const SubmitButton =function (option = {}){
    return `
    <div class= "submit-button">
        <form action="Evaluation.html">
            <input  type="submit" name="button" value="Submit">
        </form>
    </div>`
}



const PageGrid = function (option = {}){
    return `	<div class = "mainBlock">
    ${CandidateDetailsForm(option.candidateContent)}
    ${TechnicalLevelPicker(option.technicalLevelContent)}
    ${TextArea(option.textAreaContent)}
    ${NewEvaluationForm(option.dropDownContent)}
    ${SubmitButton()}
    </div>
    `
}
const NewEvaluationPage = function(option = {}){
    return `${NAV(option.headerContent, option.logoContent)}
    ${PageGrid(option)}
    ${Footer(option.footerContent)}`
}


window.onload = function(){
    const result = [];

    const headerContent = 
    [
        {
                            link: "Evaluationv2.html",
                            text: "Evaluation"
                        },
                        {
                            link: "NewEvaluationv2.html",
                            text: "New Evaluation",
                            activePage: "active-page"
                        },
                        {
                            link: "Loginv2.html",
                            text: "Logout",
                            rightSidedButton: "right-button"
                        }];
    

    const logoContent = {
        link : "assets/logo-v2.jpg",
        alt: "Company logo"
    };

    
    const candidateContent= [{
                            inputName : "Candidate",
                            placeHolder : "Candidate",
                            dataType : "text"
                        },
                        {
                            inputName: "Interviewer",
                            placeHolder: "Interviewer",
                            dataType: "text"
                        },
                        {
                            inputName: "Date",
                            placeHolder: "dd/mm/yyyy",
                            dataType: "date"
                        }];

    const textAreaContent = [{
                            headerTitle : "Should the candidate be hired?",
                            placeHolder : "The type of project that is suitable for the candidate &#13;&#10;Is guidance requiredd for the candidate"
                        },
                        {
                            headerTitle : "General Impression",
                            placeHolder : "*required"
                        },
                        {
                            headerTitle : "Workflow, Leadership &#38; Soft Skills",
                            placeHolder : "Describe the enviroment in which the candidate works. &#13;&#10;Describe ani guidance or management experience."
                        }];


    const technicalLevelContent = {
                            HeaderTitle : "Technical Level",
                            headers: ["Trainee", "Junior", "Middle", "Senior"],
                            ID: ["R1", "", "", ""],
                            classes : ["", "R2", "R2", "R2"],
                            columnData: [{
                                            inputLevel : ["T"],
                                            ID: ["RR1"],
                                            classes: [""]
                                        },
                                        {
                                            inputLevel :["J1", "J2", "J3"],
                                            ID: ["", "", ""],
                                            classes: ["", "", "spacer"]
                                        },
                                        {
                                            inputLevel :["M1", "M2", "M3"],
                                            ID: ["","",""],
                                            classes: ["", "", "spacer"]
                                        },
                                        {
                                            inputLevel :["S1", "S2", "S3"],
                                            ID:["","",""],
                                            classes: ["","",""]
                                        }                                        
                            ]
                        
    };
    const selectContent = {Values: ["0", "1", "2", "3"]};

    const dropDownContent = [
                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Classes",
                                            labelTitle:"Classes"
                                        },
                                        {
                                            selectName:"Exception handling",
                                            labelTitle:"Exception handling"
                                        },
                                        {
                                            selectName:"Version Control",
                                            labelTitle:"Version Control"
                                        },
                                        {
                                            selectName:"Access modifiers",
                                            labelTitle:"Access modifiers"
                                        },
                                        {
                                            selectName:"Design Patterns",
                                            labelTitle:"Design Patterns"
                                        },
                                        {
                                            selectName:"Issue Tracking",
                                            labelTitle:"Issue Tracking"
                                        },
                                        {
                                            selectName:"Polymorphism",
                                            labelTitle:"Polymorphism"
                                        },
                                        {
                                            selectName:"RegEx",
                                            labelTitle:"RegEx"
                                        }],
                            Title:"OOP, Design Patterns",
                            boxID: "OOP"
                        },
                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Protocol",
                                            labelTitle:"Protocol"
                                        },
                                        {
                                            selectName:"Response codes",
                                            labelTitle:"Response codes"
                                        },
                                        {
                                            selectName:"REST",
                                            labelTitle:"REST"
                                        },
                                        {
                                            selectName:"Headers",
                                            labelTitle:"Headers"
                                        },
                                        {
                                            selectName:"Request methods",
                                            labelTitle:"Request methods"
                                        },
                                        {
                                            selectName:"Issue Tracking",
                                            labelTitle:"Sessions &#38; Cookies"
                                        }],
                            Title: "HTTP",
                            boxID: "HTTP"
                        },
                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Doctype",
                                            labelTitle:"Doctype"
                                        },
                                        {
                                            selectName:"Tags",
                                            labelTitle:"Tags"
                                        },
                                        {
                                            selectName:"Basic SEO",
                                            labelTitle:"Basic SEO"
                                        },
                                        {
                                            selectName:"Syntax Rules",
                                            labelTitle:"Syntax Rules"
                                        }],
                            Title: "HTML",
                            boxID: "HTML"
                        },

                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Usage",
                                            labelTitle:"Protocol"
                                        },
                                        {
                                            selectName:"Box Modeling",
                                            labelTitle:"Box Modeling"
                                        },
                                        {
                                            selectName:"CSS 3.0",
                                            labelTitle:"CSS 3.0"
                                        },
                                        {
                                            selectName:"Selectors",
                                            labelTitle:"Selectors"
                                        },
                                        {
                                            selectName:"Styling",
                                            labelTitle:"Styling"
                                        },
                                        {
                                            selectName:"Dynamic Stylesheets",
                                            labelTitle:"Dynamic Stylesheets"
                                        }],
                            Title: "CSS",
                            boxID: "CSS"
                        },
                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Date types",
                                            labelTitle:"Date types"
                                        },
                                        {
                                            selectName:"Object manipulation",
                                            labelTitle:"Object manipulation"
                                        },
                                        {
                                            selectName:"DOM manipulation",
                                            labelTitle:"DOM manipulation"
                                        },
                                        {
                                            selectName:"Functions",
                                            labelTitle:"Functions"
                                        },
                                        {
                                            selectName:"Templating",
                                            labelTitle:"Templating"
                                        },
                                        {
                                            selectName:"Issue Tracking",
                                            labelTitle:"Issue Tracking"
                                        },
                                        {
                                            selectName:"Event Handling",
                                            labelTitle:"Event Handling"
                                        },
                                        {
                                            selectName:"Prototype",
                                            labelTitle:"Prototype &#38; OOP"
                                        },
                                        {
                                            selectName:"Testing",
                                            labelTitle:"Testing(unit, E2E)"
                                        },
                                        {
                                            selectName:"AJAX",
                                            labelTitle:"AJAX"
                                        },
                                        {
                                            selectName:"Debugging",
                                            labelTitle:"Debugging"
                                        },
                                        {
                                            selectName:"Websockets",
                                            labelTitle:"Websockets"
                                        },
                                        {
                                            selectName:"Tooling",
                                            labelTitle:"Tooling"
                                        },
                                        {
                                            selectName:"Libraries",
                                            labelTitle:"Libraries"
                                        },
                                        {
                                            selectName:"Promisses",
                                            labelTitle:"Promisses"
                                        },
                                        {
                                            selectName:"Browser Engines",
                                            labelTitle:"Browser Engines"
                                        },
                                        {
                                            selectName:"Frameworks",
                                            labelTitle:"Frameworks"
                                        }
                                    ],
                            Title:"OOP, Design Patterns",
                            boxID: "OOP"
                        },
                        {
                            selectContent,
                            selectBox:[{
                                            selectName:"Backend frameworks",
                                            labelTitle:"Backend frameworks"
                                        },
                                        {
                                            selectName:"Templating",
                                            labelTitle:"Templating"
                                        },
                                        {
                                            selectName:"DOM Manipulation",
                                            labelTitle:"DOM Manipulation"
                                        },
                                        {
                                            selectName:"Unit Testing",
                                            labelTitle:"Unit Testing"
                                        }],
                            Title:"NodeJS",
                            boxID:"NodeJS"
                        }
                        ];
                   
    
    const footerContent = {Footer : "SoftVision@2017"};
    const options={headerContent ,
            logoContent, 
            candidateContent,
            technicalLevelContent,
            textAreaContent,
            dropDownContent,
            footerContent};
    result.push(NewEvaluationPage(options))
    document.querySelector('#app').innerHTML = result;
}