const Setup = function() {}

Setup.prototype.app = function (options) {
	if (options.isLogged === false) { 
		return {
      view: new LoginPage(),
      setupEvents: new LoginEvents()
    }
  }

  if(options.isNewEval === true){
    return {
      view: new NewEvaluationList(),
      setupEvents: new NewEvaluationListEvents()
    }
  }
  let q = []
  if(localStorage.getItem("evaluation") !== null){
    q = JSON.parse(localStorage.getItem("evaluation")).map(function(element){
      return {
        nume:element.inputCandidate[0].candidate,
        technologie:element.textArea[2].input,
        nivel: element.radioBox,
        buttonIMG: "/assets/button.jpg"
    }
    });
  }
  let w = []
  if(localStorage.getItem("evaluation") !== null){
    w = JSON.parse(localStorage.getItem("evaluation"))
  }

  return {
    view: new EvaluationList(q),
    setupEvents: new EvaluationListEvents(w)
  }
};

