const NewEvaluationListEvents = function() {
    this.initEvents = function(build) {
        const logout = document.getElementById('logout');
        logout.addEventListener('click', function(e) {
            e.preventDefault();
            window.dataStorage.remove('userData');
            build( false,false);
        });
        const newEvaluationPage = document.getElementById('evaluationPage');
        newEvaluationPage.addEventListener('click',function(e){
            e.preventDefault();
            build(false,true);
        })



        function Storage(){
            this.inputCandidate = [],
            this.radioBox = "",
            this.textArea = [],
            this.legendBoxes = []
        }

        Storage.prototype={
            addCandidate: function(obj){
                this.inputCandidate.push(obj);
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

        const instantiateObject = function(){
            
            s.addCandidate([
                document.getElementById("newEvaluationCandidate").value,
                document.getElementById("newEvaluationInterviewer").value,
                document.getElementById("newElementDate").value
            ]);
            GetNewEvaluationPageData().newEvaluationTextAreaContent.map(function(element, i ){
                s.setTextArea({
                    input: document.getElementById(""+element.textAreaID+i).value
                })
            });
            const legendVector = GetNewEvaluationPageData().newEvaluationDropDownContent.map(function(element){
                const vl = element.selectBox.map(function(element){
                    return document.getElementById(element.idName).value                 
                })
                return vl
            });
            s.setlegendBoxes(legendVector)
            return s
        }
        
        const addObjectToLocalstorage = function(obj){
            let aux = []
            if(localStorage.getItem("evaluation") !== null){
                aux = JSON.parse(localStorage.getItem("evaluation"))
            }
            if(aux ==null){
                aux =[].push(obj)
            }else{
                aux.push(obj)
            }
            localStorage.setItem("evaluation", JSON.stringify(aux))
        }       
        const submitButton = document.getElementById('newEvalsubmit');
        submitButton.addEventListener('click', function(event){
            event.preventDefault();
            let newEvalObj = instantiateObject();
            console.log(newEvalObj)
            addObjectToLocalstorage(newEvalObj)
            let val =[]
            if(localStorage !== null){
                val = JSON.parse(localStorage.getItem("evaluation"))
                console.log(val)
            }
            val2 = val.map(function(element){
                return {
                    nume:element.inputCandidate,
                    technologie:element.textArea[2].input,
                    nivel: element.radioBox,
                    buttonIMG: "/assets/button.jpg"
                }
            })
            build(false,true);
        })



    }
}