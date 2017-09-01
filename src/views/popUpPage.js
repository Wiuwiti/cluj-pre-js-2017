const showContent = function(object){
    
    const popPage = window.open("", "Evaluation details", "width=1400,height=500")
    clearWindow(popPage)
    popPage.document.write("<body>"+JSON.stringify(object)+"</body>")
}

const clearWindow = function(object){
    object.document.getElementsByTagName('body')[0].innerHTML = ''
    console.log("was here")
}