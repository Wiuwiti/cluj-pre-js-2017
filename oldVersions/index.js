(function() {
    window.dataStorage = new LocalStorageWrapper();

    const appElem = document.getElementById('app');
    const Manager = new Setup();
    const isLogged = function() {
        return !!window.dataStorage.get('userData');
    }

    const build = function(NewEval  , Eval, Obj=null) {
        const component = Manager.app({
            isLogged: isLogged(),
            isNewEval: NewEval,
            NewEval: Eval,
            extraObj: Obj
        });

        

        appElem.innerHTML = component.view.markup;
        if (component.setupEvents !== undefined) {
            component.setupEvents.initEvents(build);
        }
    }

    build();
})();