const FooterConstructor = function(option = {}){
    return `	
    <footer class="page-footer page-footer-theme" >
        <p>${option.footerText}</p>
    </footer>`
}


const NavigationBar = function (option = {}, logo = {}){
    return `
    <ul class="navigation-bar navigation-bar-theme">
        ${LogoButton(logo)}
        ${NavationContructor(option)}
    </ul>`
}

const LogoButton = function(option = {}){
    return `
    <li class="navigation-bar-element">
        <img class= "navigation-bar-logo" src="${option.link}" alt="${option.alt}">
    </li>`
}

const NavigationButton = function(option={}){
    return `
    <li class="navigation-bar-element ${option.rightSidedButton || "" }">
        <a class = "navigation-bar-element-link navigation-bar-element-link-theme ${option.activePage || "" }" href="${option.link}"> ${option.text}</a>
    </li>
    `
}


const NavationContructor = function(option = {}){
    return option.map(NavigationButton).join('');
}