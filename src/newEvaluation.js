(function(){
    const render = function(container){
        container.innerHTML = `${NewEvaluationPage(GetNewEvaluationPageData())}`;
    }

    const NewEvaluationPageGrid = function (option = {}, obj = {}){
        return `	
        <div class = "mainBlock">

        </div>
        `
    }

    const NewEvaluationPage = function(options = {}){
        return `${NavigationBar(options.newEvaluationHeaderContent, options.newEvaluationLogoContent)}
        ${NewEvaluationPageGrid(options)}
        ${FooterConstructor(options.newEvaluationFooterContent)}`
    }

    interviewApp.newEvaluation = {
        init: function(container){
            render(container);
        }
    }

})();