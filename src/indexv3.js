var interviewApp = {}
(function(){
    const container = document.getElementById(`app`);
    let module = null;
    

    interviewApp.navigate = function(page){
        console.log(page)
        if (typeof page !== 'string') {
            page = 'evaluation';
        }
        module = interviewApp[page];
        console.log(interviewApp)
        module.init(container);
        sessionStorage.setItem(`currentPage`, page)
       
    };

    interviewApp.navigate(`evaluation`)
})();
