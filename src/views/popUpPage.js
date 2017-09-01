const showContent = function(object){
    
    const popPage = window.open("", "Evaluation details", "width=1400,height=500")
    clearWindow(popPage)
    const obj = object
    //console.log(obj.inputCandidate)
    popPage.document.write(`<body> ${evaluationDetails(obj.inputCandidate)} </body>`)
}

const clearWindow = function(object){
    object.document.getElementsByTagName('body')[0].innerHTML = ''
}

const evaluationDetails = function(array){
    const candidateContent = array[0]
    return `
    <label for="firstname"> Candidate Name: </label><input type="text" name="firstname" value="${candidateContent.candidate}"></input><br>
    <label for="lastname"> Interviewer name: </label><input type="text" name="lastname" value="${candidateContent.interviewer}"></input><br>
    <label for="date"> Examination Date: </label><input type="date" name="date" value="${candidateContent.date}"></input>
    `
}