const Footer = function(option = {}){
    return `	
    <footer class="footer footerT" >
        <p>${option.Footer}</p>
    </footer>`
}


const NAV = function (option = {}, logo = {}){
    return `
    <ul class="header headerT">
        ${LogoButton(logo)}
        ${ConstructNav(option)}
    </ul>`
}

const LogoButton = function(option = {}){
    return `
    <li class="header-elements">
        <img class= "main-logo" src="${option.link}" alt="${option.alt}">
    </li>`
}

const ButtonNav = function(option={}){
    return `
    <li class="header-elements ${option.rightSidedButton || "" }">
        <a class = "header-elements-link header-elements-linkT ${option.activePage || "" }" href="${option.link}"> ${option.text}</a>
    </li>
    `
}


const ConstructNav = function(option = {}){
    const result =[];
    for(var i = 0; i < option.length; i++){
        result.push(ButtonNav(option[i]))
    }
    return result.join('')
}