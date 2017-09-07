
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
    const evaluationTableContent = evalTableContent;
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
                    idName: "selectorProtocol",
                    selectName:"Protocol",
                    labelTitle:"Protocol"
                },
                {
                    idName: "selectorResponse",
                    selectName:"Response codes",
                    labelTitle:"Response codes"
                },
                {
                    idName: "selectorREST",
                    selectName:"REST",
                    labelTitle:"REST"
                },
                {
                    idName: "selectorHeaders",
                    selectName:"Headers",
                    labelTitle:"Headers"
                },
                {
                    idName: "selectorRequestMethods",
                    selectName:"Request methods",
                    labelTitle:"Request methods"
                },
                {
                    idName: "selectorIssueTracking",
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
                    idName: "selectorDoctype",
                    selectName:"Doctype",
                    labelTitle:"Doctype"
                },
                {
                    idName: "selectorTags",
                    selectName:"Tags",
                    labelTitle:"Tags"
                },
                {
                    idName: "selectorBasic",
                    selectName:"Basic SEO",
                    labelTitle:"Basic SEO"
                },
                {
                    idName: "selectorSyntax",
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
                    idName: "selectorUsage",
                    selectName:"Usage",
                    labelTitle:"Protocol"
                },
                {
                    idName: "selectorBox",
                    selectName:"Box Modeling",
                    labelTitle:"Box Modeling"
                },
                {
                    idName: "selectorCSS",
                    selectName:"CSS 3.0",
                    labelTitle:"CSS 3.0"
                },
                {
                    idName: "selectorSelectors",
                    selectName:"Selectors",
                    labelTitle:"Selectors"
                },
                {
                    idName: "selectorStyling",
                    selectName:"Styling",
                    labelTitle:"Styling"
                },
                {
                    idName: "selectorDynamic",
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
                    idName: "selectorDateTypes",
                    selectName:"Date types",
                    labelTitle:"Date types"
                },
                {
                    idName: "selectorObjectManipulator",
                    selectName:"Object manipulation",
                    labelTitle:"Object manipulation"
                },
                {
                    idName: "selectorDOM",
                    selectName:"DOM manipulation",
                    labelTitle:"DOM manipulation"
                },
                {
                    idName: "selectorFunctions",
                    selectName:"Functions",
                    labelTitle:"Functions"
                },
                {
                    idName: "selectorTemplating",
                    selectName:"Templating",
                    labelTitle:"Templating"
                },
                {
                    idName: "selectorIssueTrack",
                    selectName:"Issue Tracking",
                    labelTitle:"Issue Tracking"
                },
                {
                    idName: "selectorEventHandling",
                    selectName:"Event Handling",
                    labelTitle:"Event Handling"
                },
                {
                    idName: "selectorPrototype",
                    selectName:"Prototype",
                    labelTitle:"Prototype &#38; OOP"
                },
                {
                    idName: "selectorTesting",
                    selectName:"Testing",
                    labelTitle:"Testing(unit, E2E)"
                },
                {
                    idName: "selectorAJAX",
                    selectName:"AJAX",
                    labelTitle:"AJAX"
                },
                {
                    idName: "selectorDebugging",
                    selectName:"Debugging",
                    labelTitle:"Debugging"
                },
                {
                    idName: "selectorWebSockets",
                    selectName:"Websockets",
                    labelTitle:"Websockets"
                },
                {
                    idName: "selectorTooling",
                    selectName:"Tooling",
                    labelTitle:"Tooling"
                },
                {
                    idName: "selectorLibraries",
                    selectName:"Libraries",
                    labelTitle:"Libraries"
                },
                {
                    idName: "selectorPromisses",
                    selectName:"Promisses",
                    labelTitle:"Promisses"
                },
                {
                    idName: "selectorBrowserEngien",
                    selectName:"Browser Engines",
                    labelTitle:"Browser Engines"
                },
                {
                    idName: "selectorFrameWorks",
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
                    idName: "selectorFrameWorks",
                    selectName:"Backend frameworks",
                    labelTitle:"Backend frameworks"
                },
                {
                    idName: "selectorTemplating",
                    selectName:"Templating",
                    labelTitle:"Templating"
                },
                {
                    idName: "selectorDOManipulation",
                    selectName:"DOM Manipulation",
                    labelTitle:"DOM Manipulation"
                },
                {
                    idName: "selectorUnitTesting",
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