
const GetLoginPageData = function(){
    const footerContent = {
        footerText : "SoftVision@2017"
    };
    return {
        footerContent
    };
}


const GetEvaluationPageData = function(evalTableContent){
    const evaluationHeaderContent = [
        {
            
            link: "EvaluationPageLink",
            text: "Evaluation",
            activePage: "navigation-bar-active-page navigation-bar-active-page-theme"
        },
        {
            link: "newEvaluationPage",
            text: "New Evaluation"
        },
        {
            link: "logout",
            text: "Logout",
            rightSidedButton: "float-right-element"
        }
    ];

    const evaluationLogoContent = {
        link : "assets/logo-v2.jpg",
        alt: "Company logo"
    };

    
    const evaluationTableHeader = ["Nume", "Technologie", "Nivel"];
    const evaluationTableContent = [{
        nume: "dasf",
        technologie: "ceva",
        nivel: "Jew",
        buttonIMG: "/assets/button.jpg"

    }];
    const evaluationFooterContent = {
        footerText : "SoftVision@2017"
    };

    return {
        evaluationTableContent,
        evaluationTableHeader, 
        evaluationFooterContent, 
        evaluationHeaderContent,
        evaluationLogoContent
    };

}


const GetNewEvaluationPageData = function (predefinedPage){
    
    const newEvaluationHeaderContent = [
        {
            
            link: "evaluationPage",
            text: "Evaluation"
           
        },
        {
            link: "newEvaluationPage",
            text: "New Evaluation",
            activePage: "navigation-bar-active-page navigation-bar-active-page-theme"
        },
        {
            link: "logout",
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
            textAreaID: "textArea",
            headerTitle : "Should the candidate be hired?",
            placeHolder : "The type of project that is suitable for the candidate &#13;&#10;Is guidance requiredd for the candidate"
        },
        {
            textAreaID: "textArea",
            headerTitle : "General Impression",
            placeHolder : "*required"
        },
        {
            textAreaID: "textArea",
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
                inputLevel : ["Trainee"],
                ID: ["RR1"],
                classes: [""]
            },
            {
                inputLevel :["Junior 1", "Junior 2", "Junior 3"],
                ID: ["", "", ""],
                classes: ["", "", "spacer"]
            },
            {
                inputLevel :["Middle 1", "Middle 2", "Middle 3"],
                ID: ["","",""],
                classes: ["", "", "spacer"]
            },
            {
                inputLevel :["Senior 1", "Senior 2", "Senior 3"],
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
                    idName: "selectorClasses",
                    selectName:"Classes",
                    labelTitle:"Classes"
                },
                {
                    idName: "selectorExceptions",
                    selectName:"Exception handling",
                    labelTitle:"Exception handling"
                },
                {
                    idName: "selectorControl",
                    selectName:"Version Control",
                    labelTitle:"Version Control"
                },
                {
                    idName: "selectorAccess",
                    selectName:"Access modifiers",
                    labelTitle:"Access modifiers"
                },
                {
                    idName: "selectorDesign",
                    selectName:"Design Patterns",
                    labelTitle:"Design Patterns"
                },
                {
                    idName: "selectorIssueTracking",
                    selectName:"Issue Tracking",
                    labelTitle:"Issue Tracking"
                },
                {
                    idName: "selectorPolymorphism",
                    selectName:"Polymorphism",
                    labelTitle:"Polymorphism"
                },
                {
                    idName: "selectorRegEx",
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
    return {
        newEvaluationHeaderContent,
        newEvaluationLogoContent, 
        newEvaluationCandidateContent,
        newEvaluationTechnicalLevelContent,
        newEvaluationTextAreaContent,
        newEvaluationDropDownContent,
        newEvaluationFooterContent,
        predefinedPage
    };
    
}