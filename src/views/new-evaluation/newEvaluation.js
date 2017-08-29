const CandidateLine = (candidateContent = {}) =>
    `
    <input id = "${candidateContent.elementID}" class="input-candidate" type="${candidateContent.dataType}" name="${candidateContent.inputName}" autocomplete="on" placeholder="${candidateContent.placeHolder}" required />
    `

const ConstructDetailsForm = function(candidateContent = {}){
    return candidateContent.map((element) => CandidateLine(element)).join('')
}


const CandidateDetailsForm = function (candidateContent = {}){
    return `<form class = "candidate-input-box">
    ${ConstructDetailsForm(candidateContent)}
    </form>`
}

/**
 * 
 * @param {Object} option  Thre op
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

const TechnicalLevelPickerBottomSection = function (option = {}){
    return option.inputLevel.map((element , i ) => `
    <li class = "${option.classes[i]}" id ="${option.ID[i]}">
        <input type="radio" name="level" value = "${element}">
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


const TextAreaBox = function(textAreaContent = {},i){
    return `
    <div class="user-textarea">
        <h3>${textAreaContent.headerTitle}</h3>
        <textarea id="${textAreaContent.textAreaID}${i}"placeholder="${textAreaContent.placeHolder}"required></textarea>
    </div>`
}
const TextArea = function (textAreaContent = {}){
    return textAreaContent.map((element,i) =>TextAreaBox(element,i)).join('')
}


const SelectConstructor = function(selectContent = {}){
    const result = []
    result.push(`<option selected disabled hidden>Evaluation</option>`)
    result.push(selectContent.map((element) =>  `<option value = "0"> ${element}</option>`).join(''))
    return result.join('')
}


const DropDownConstructor = function (selectBoxContent = {}, selectContent = {}){
    return selectBoxContent.map( (element) => 
    `
    <li class="legend-box-drop">
        <label for="${element.selectName}"> ${element.labelTitle}</label>
        <select name="${element.selectName}">
        ${SelectConstructor(selectContent.Values)}
        </select>
    </li>`).join('')
}

const NewEvaluationForm = function (dropDownContent = {}){
    return dropDownContent.map((element) =>
        `
        <form class="legend-box" id="${element.boxID}">
            <fieldset>
                <legend>${element.Title}</legend>
                <ul class="legend-box-list">
                    ${DropDownConstructor(element.selectBox, element.newEvaluationSelectContent)}
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



const NewEvaluationPageGrid = function (option = {}){
    return `	
    <div class = "mainBlock">
        ${CandidateDetailsForm(option.newEvaluationCandidateContent)}
        ${TechnicalLevelPicker(option.newEvaluationTechnicalLevelContent)}
        ${TextArea(option.newEvaluationTextAreaContent)}
        ${NewEvaluationForm(option.newEvaluationDropDownContent)}
        ${SubmitButton()}
    </div>
    `
}
const NewEvaluationPage = function(options = {}){
    return `${NavigationBar(options.newEvaluationHeaderContent, options.newEvaluationLogoContent)}
    ${NewEvaluationPageGrid(options)}
    ${FooterConstructor(options.newEvaluationFooterContent)}`
}


window.onload = function(){
    const newEvaluationResult = [];
    
        const newEvaluationHeaderContent = [
            {
                link: "evaluationPageLink",
                text: "Evaluation"
            },
            {
                link: "newEvaluationPageLink",
                text: "New Evaluation",
                activePage: "navigation-bar-active-page navigation-bar-active-page-theme"
            },
            {
                link: "loginPageLink",
                text: "Logout",
                rightSidedButton: "float-right-element"
            }
        ];
        
    
        const newEvaluationLogoContent = {
            link : "assets/logo-v2.jpg",
            alt: "Company logo"
        };
    
        
        const newEvaluationCandidateContent= [
            {
                elementID : "newEvaluationCandidate",
                inputName : "Candidate",
                placeHolder : "Candidate",
                dataType : "text"
            },
            {
                elementID : "newEvaluationInterviewer",
                inputName: "Interviewer",
                placeHolder: "Interviewer",
                dataType: "text"
            },
            {
                elementID: "newElementDate",
                inputName: "Date",
                placeHolder: "dd/mm/yyyy",
                dataType: "date"
            }
        ];
    
        const newEvaluationTextAreaContent = [
            {
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
            }
        ];
    
    
        const newEvaluationTechnicalLevelContent = {
            HeaderTitle : "Technical Level",
            headers: ["Trainee", "Junior", "Middle", "Senior"],
            ID: ["R1", "", "", ""],
            classes : ["", "R2", "R2", "R2"],
            columnData: [
                {
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
        const newEvaluationSelectContent = {
            Values: ["0", "1", "2", "3"]
        };
    
        const newEvaluationDropDownContent = [
            {
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                    }
                ],
                Title: "HTTP",
                boxID: "HTTP"
            },
            {
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                    }
                ],
                Title: "HTML",
                boxID: "HTML"
            },
            {
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                    }
                ],
                Title: "CSS",
                boxID: "CSS"
            },
            {
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                newEvaluationSelectContent,
                selectBox:[
                    {
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
                    }
                ],
                Title:"NodeJS",
                boxID:"NodeJS"
            }
        ];
                       
        
        const newEvaluationFooterContent = {footerText : "SoftVision@2017"};
        const newEvaluationOptions={
            newEvaluationHeaderContent,
            newEvaluationLogoContent, 
            newEvaluationCandidateContent,
            newEvaluationTechnicalLevelContent,
            newEvaluationTextAreaContent,
            newEvaluationDropDownContent,
            newEvaluationFooterContent};
    
        newEvaluationResult.push(NewEvaluationPage(newEvaluationOptions))
    
        document.querySelector('#app').innerHTML = newEvaluationResult;


        
        function Storage(){
            this.inputCandidate = []
        }
        Storage.prototype = {
            addInputCandidate: function(obj){
                this.inputCandidate.push(obj)
            },

            checkInput: function(){
                alert(this.inputCandidate[0].candidate.value)
            }
        }
        var s = new Storage();
        
        s.addInputCandidate({
            candidate: document.getElementById('newEvaluationCandidate'),
            interviewer: document.getElementById('newEvaluationInterviewer'),
            date: document.getElementById('newElementDate')
        })
        
        document.getElementById("newEvalsubmit").addEventListener("click", function(){
            //console.log(document.getElementById('newEvaluationCandidate').value)
            s.checkInput()
        })
        
        

}


