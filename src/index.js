(function() {
    window.dataStorage = new LocalStorageWrapper();

    const appElem = document.getElementById('app');
    const Manager = new Setup();
    const isLogged = function() {
        return !!window.dataStorage.get('userData');
    }

    const build = function() {
        const component = Manager.app({
            isLogged: isLogged()
        });

        appElem.innerHTML = component.view.markup;
        if (component.setupEvents !== undefined) {
            component.setupEvents.initEvents(build);
        }
    }

    build();
})();