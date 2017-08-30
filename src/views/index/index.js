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
    var s = new Storage();
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

    let val = JSON.parse(localStorage.getItem("evaluation"))
    let val2 = val.map(function(element){
        return {
            nume:element.inputCandidate[0].candidate,
            technologie:element.textArea[2].input,
            nivel: element.radioBox,
            buttonIMG: "/assets/button.jpg"
        }
    })

    evaluationPage.push(EvaluationPage(GetEvaluationPageData(val2)))

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

    const submitButton = function(){
        document.querySelector('#newEvalsubmit').addEventListener("click", function(event) {
            alert(1);
            event.preventDefault();

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
            let aux = []
            if(localStorage.length !== 0){
                aux = JSON.parse(localStorage.getItem("evaluation"))
            }
            aux.push(s)
            if(localStorage.getItem("evaluation")===null){
                console.log(aux)
            }
            localStorage.setItem("evaluation",JSON.stringify(aux))

            s.setlegendBoxes(legendVector)
            console.log(s)
            });
    };    
}



    