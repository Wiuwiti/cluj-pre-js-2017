const FooterConstructor = function(footerContent = {}){
    return `	
    <footer class="page-footer page-footer-theme" >
        <p>${footerContent.footerText}</p>
    </footer>`
}


const NavigationBar = function (headerContent = {}, logoContent = {}){
    return `
    <ul class="navigation-bar navigation-bar-theme">
        ${LogoButton(logoContent)}
        ${NavationContructor(headerContent)}
    </ul>`
}

const LogoButton = function(logoContent = {}){
    return `
    <li class="navigation-bar-element">
        <img class= "navigation-bar-logo" src="${logoContent.link}" alt="${logoContent.alt}">
    </li>`
}

const NavigationButton = function(headerContent={}){
    return `
    <li class="navigation-bar-element ${headerContent.rightSidedButton || "" }">
        <a class = "navigation-bar-element-link navigation-bar-element-link-theme ${headerContent.activePage || "" }" id="${headerContent.link}" > ${headerContent.text}</a>
    </li>
    `
}


const NavationContructor = function(headerContent = {}){
    return headerContent.map(NavigationButton).join('');
}