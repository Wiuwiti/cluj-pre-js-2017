const Setup = function() {}

Setup.prototype.app = function (options) {
	if (options.isLogged === false) { 
		return {
      view: new LoginPage(),
      setupEvents: new LoginEvents()
    }
  }


  return {
    view: new EvaluationList(),
    setupEvents: new EvaluationListEvents()
  }
};

