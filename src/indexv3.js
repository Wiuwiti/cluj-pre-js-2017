var interviewApp = {};
(function(){
    const container = document.getElementById(`app`);
    let module = null;
    
    
    const checkIfLogged = function(){
        const isLogged = function() {
            return !!window.localStorage.getItem('userData');
        }
        //console.log(isLogged())
        if(!isLogged()){
            return 'login'
        }
        return ''
    }


    interviewApp.navigate = function(page){
        //console.log(page)
        if (typeof page !== 'string') {
            page = 'login';
        }
        if(module){
            module.destroy();
        }
        if(checkIfLogged() != ''){
            page = checkIfLogged();
        }
        module = interviewApp[page];


        
            if(localStorage.getItem("evaluation") !== null){
                q = JSON.parse(localStorage.getItem("evaluation")).map(function(element){
                  return {
                    nume:element.inputCandidate[0][0],
                    technologie:element.textArea[2].input,
                    nivel: element.radioBox,
                    buttonIMG: "/assets/button.jpg"
                }
                });
              }
            module.init(container);
        
        sessionStorage.setItem(`currentPage`, page)
       
    };

    interviewApp.startup = function() {
        let currentPage = sessionStorage.getItem('currentPage');
        interviewApp.navigate(currentPage);
    }
})();
window.addEventListener("load", function()
{
    interviewApp.startup();
})
