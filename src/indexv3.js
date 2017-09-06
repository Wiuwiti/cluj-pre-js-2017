var interviewApp = {};
(function(){
    const container = document.getElementById(`app`);
    let module = null;
    


    interviewApp.navigate = function(page){
        if (typeof page !== 'string') {
            page = 'evaluation';
        }
        if(module){
            module.destroy();
        }
        module = interviewApp[page];
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
