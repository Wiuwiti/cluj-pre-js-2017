const Footer = function(option = {}){
    return `	
    <footer class="footer footerT" >
        <p>${option.Footer}</p>
    </footer>`
}


const NAV = function (option = {}, logo = {}){
    return `
    <ul class="header headerT">
        ${logoButton(logo)}
        ${constructNav(option)}
    </ul>`
}

const logoButton = function(option = {}){
    return `
    <li class="header-elements">
        <img class= "main-logo" src="${option.link}" alt="${option.alt}">
    </li>`
}

const buttonNav = function(option={}){
    return `
    <li class="header-elements ${option.rightSidedButton}">
        <a class = "header-elements-link header-elements-linkT ${option.activePage}" href="${option.link}"> ${option.text}</a>
    </li>
    `
}


const constructNav = function(option = {}){
    const result =[];
    for(var i = 0; i < option.length; i++){
        result.push(buttonNav(option[i]))
    }
    return result.join('')
}