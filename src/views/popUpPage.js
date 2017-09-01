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
    
    
    <body> ${evaluationDetails(obj.inputCandidate)} 
    
    
    </body>`)
}

const clearWindow = function(object){
    object.document.getElementsByTagName('body')[0].innerHTML = ''
}

const evaluationDetails = function(array){
    const candidateContent = array[0]
    return `
    ${NewEvaluationPage(GetNewEvaluationPageData())}
    `
}
