const EvaluationListEvents = function() {
    this.initEvents = function(build) {
        const logout = document.getElementById('logout');
        logout.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.dataStorage.remove('userData');
            build();
        });
        const newEvaluationPage = document.getElementById('newEvaluationPage');
        newEvaluationPage.addEventListener('click',function(e){
            e.preventDefault();
            
            build();
        })
    }
}