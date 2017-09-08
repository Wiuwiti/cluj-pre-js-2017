window.onload = function(){

    function Storage(){
        this.inputCandidate = [],
        this.radioBox = "",
        this.textArea = [],
        this.legendBoxes = []

    }

    Storage.prototype = {
        addCandidate: function(obj){
            this.inputCandidate.push(obj)
            //console.log(this.inputCandidate[0])
        },
        
        setRadioBox(string){
            this.radioBox = string
        },
        
        setTextArea(obj){
            this.textArea.push(obj)
        },
        setlegendBoxes: function(arr){
            this.legendBoxes = arr
        }

    }
    
    window.addEventListener("click", function(event){
        if (event.target.type === "radio"){
            s.setRadioBox(event.target.value)
        }
    })
    

    const loginPage = [];
    loginPage.push(LoginPage(GetLoginPageData()))
    let evaluationPage = [];
    
    const newEvaluationPage = [];
    newEvaluationPage.push(NewEvaluationPage(GetNewEvaluationPageData()))


    let val = []
    if(localStorage.length !== 0){
        val = JSON.parse(localStorage.getItem("evaluation"))
    }
    if(val !== null){
    let val2 = val.map(function(element){
        return {
            nume:element.inputCandidate[0].candidate,
            technologie:element.textArea[2].input,
            nivel: element.radioBox,
            buttonIMG: "/assets/button.jpg"
            }
        })
        evaluationPage.push(EvaluationPage(GetEvaluationPageData(val2)))
    }else{
        evaluationPage.push(EvaluationPage(GetEvaluationPageData([])))
    }

    

    document.querySelector('#app').innerHTML = loginPage;

    document.querySelector('#submitButton').addEventListener("click", function(){
        document.querySelector('#app').innerHTML = evaluationPage;
        logged()
    })

    const logged = function (){
        document.querySelector("#newEvaluationPageLink").addEventListener("click", function(){
            document.querySelector('#app').innerHTML = newEvaluationPage;
            newEvals()
        })

        document.querySelector('#loginPageLink').addEventListener("click", function(){
            document.querySelector('#app').innerHTML = loginPage;
            logPage()
        })
    }

    const newEvals = function (){
        submitButton()
        document.querySelector('#evaluationPageLink').addEventListener("click", function(){
            document.querySelector('#app').innerHTML = evaluationPage;
            logged()
        })
        document.querySelector('#loginPageLink').addEventListener("click", function(){
            document.querySelector('#app').innerHTML = loginPage;
            logPage()
        })
        
    }

    const logPage = function () {
        document.querySelector('#submitButton').addEventListener("click", function(){
            document.querySelector('#app').innerHTML = evaluationPage;
            logged()
        })
    }

    const instantiateObject = function(){
        var s = new Storage();
        s.addCandidate({
            candidate: document.getElementById("newEvaluationCandidate").value,
            interviewer: document.getElementById("newEvaluationInterviewer").value,
            date: document.getElementById("newElementDate").value
        });
        GetNewEvaluationPageData().newEvaluationTextAreaContent.map(function(element, i ){
            s.setTextArea({
                input: document.getElementById(""+element.textAreaID+i).value
            })
        })
        const legendVector = GetNewEvaluationPageData().newEvaluationDropDownContent.map(function(element){
            const vl = element.selectBox.map(function(element){
                return document.getElementById(element.idName).value                 
            })
            return vl
        })
        s.setlegendBoxes(legendVector)
        return s
    }


    const addObjectToLocalstorage = function(obj){
        let aux = []
        if(localStorage.length !== 0){
            aux = JSON.parse(localStorage.getItem("evaluation"))
        }
        if(aux == null){
            aux = [].push(obj)
        }else{
            aux.push(obj)
        }
        localStorage.setItem("evaluation",JSON.stringify(aux))
    }


    const submitButton = function(){
        document.querySelector('#newEvalsubmit').addEventListener("click", function(event) {
            event.preventDefault();

            let newEvalObj = instantiateObject();
            addObjectToLocalstorage(newEvalObj);
            
            let val = []
            if(localStorage !== null){
                val = JSON.parse(localStorage.getItem("evaluation"))
            }
            
            val2 = JSON.parse(localStorage.getItem("evaluation")).map(function(element){
                return {
                    nume:element.inputCandidate[0].candidate,
                    technologie:element.textArea[2].input,
                    nivel: element.radioBox,
                    buttonIMG: "/assets/button.jpg"
                }
            })
            document.querySelector('#app').innerHTML = EvaluationPage(GetEvaluationPageData(val2));
            //console.log(val2)
            logged()
            });
    };    
}



    