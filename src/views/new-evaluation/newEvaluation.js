const CandidateLine = (option = {}) =>
    `
    <input class="input-candidate" type="${option.dataType}" name="${option.inputName}" autocomplete="on" placeholder="${option.placeHolder}" required />
    `

const ConstructDetailsForm = function(option = {}){
    return option.map((element) => CandidateLine(element)).join('')
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
    const result = option.headers.map((element, i) => `<li class="${option.classes[i]}" id="${option.ID[i]}">${element}</li>`).join('') 
    return `<ul class="top-list-radio" >
        <li id="placeHolder"></li>
            ${result}
        <li id="extra"></li>
        <div class="clearfix"></div>
    </ul>`
}

const TechnicalLevelPickerBottomSection = function (option = {}){
    return option.inputLevel.map((element , i ) => `
    <li class = "${option.classes[i]}" id ="${option.ID[i]}">
        <input type="radio" name="level" value = "${element}">
    </li>`).join('')
}


const TechnicalLevelPickerBottom = function (option = {}){
    const result = option.map((element) => TechnicalLevelPickerBottomSection(element)).join('')
    return ` 
    <ul class="down-list-radio">
        ${result}
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
    return option.map(TextAreaBox).join('')
}


const SelectConstructor = function(option= {}){
    const result = []
    result.push(`<option selected disabled hidden>Evaluation</option>`)
    result.push(option.map((element) =>  `<option value = "0"> ${element}</option>`).join(''))
    return result.join('')
}


const DropDownConstructor = function (option={}, selectContent = {}){
    return option.map( (element, i) => `
    <li class="legend-box-drop">
        <label for="${element.selectName}"> ${element.labelTitle}</label>
        <select name="${element.selectName}">
        ${SelectConstructor(selectContent.Values)}
        </select>
    </li>`).join('')
}

const NewEvaluationForm = function (option = {}){
    return option.map((element) =>
        `<form class="legend-box" id="${element.boxID}">
        <fieldset>
            <legend>${element.Title}</legend>
            <ul class="legend-box-list">
                ${DropDownConstructor(element.selectBox, element.selectContent)}
            </ul>
        </fieldset>
    </form>`).join('')
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
    return `${NavigationBar(option.headerContent, option.logoContent)}
    ${PageGrid(option)}
    ${FooterConstructor(option.footerContent)}`
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
                            activePage: "navigation-bar-active-page navigation-bar-active-page-theme"
                        },
                        {
                            link: "Loginv2.html",
                            text: "Logout",
                            rightSidedButton: "float-right-element"
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
                   
    
    const footerContent = {footerText : "SoftVision@2017"};
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