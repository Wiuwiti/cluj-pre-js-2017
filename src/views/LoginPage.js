const LoginPage = function() {
    this.markup = LoginContent(GetLoginPageData());
}


const LoginForm = function(option = {}){
    return `
    <div class="login-box login-boxT">
        <h1 class="login-box-header login-box-headerT" >Login Page</h1>
        <form class="credential-box credential-boxT" id="loginForm">
            <input class="credential-field credential-fieldT" type="text" name="username" placeholder="Username" />
            <input class="credential-field credential-fieldT"type="password" name="password" placeholder="Password" />
            <input class="credential-login-button credential-login-buttonT" type="submit" value="Login" />
        </form>
    </div>
    `
}

const LoginHeader = function(options = {}){
    return `
    <header class="pageHeader pageHeaderT">
    <div class= "grid"> 
    ${LoginForm({})}
    </div>	
	</header>
    `
}
const SubmitFeedbackSection = function(option = {}){
    return `
    <div class= "grid" >
    <div class="grid-image">
        <img  src="/assets/new feedback.jpg" alt="new feedback" >
    </div>
    <article class="grid-text">
        <h3 class="grid-text-padding">Submit new feedback</h3>
        <p class="grid-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempus eros. Suspendisse scelerisque dapibus turpis, vel suscipit nisl pellentesque nec. Etiam pellentesque in enim volutpat euismod. Vivamus id nibh eget nibh egestas congue. Nunc ante tellus, ultrices vitae egestas vel, gravida quis tellus. Praesent eget magna justo. Ut ligula tortor, imperdiet vitae est et, porttitor ornare massa. Praesent semper gravida lacus molestie aliquet. Fusce mollis tristique massa non maximus. Proin varius nisl eget faucibus feugiat. Fusce laoreet accumsan purus id hendrerit. Morbi felis ante, dictum ac facilisis sed, maximus vitae felis. Integer imperdiet feugiat diam, in interdum tortor porttitor varius. Cras luctus, est eget tristique finibus, massa augue pulvinar quam, non placerat lectus erat nec ex. Nunc vestibulum dui nisi, id aliquam dui sollicitudin a. Vestibulum sit amet mi sed nisl eleifend fermentum ut vel diam. </p>
    </article>
    </div>
    `
}


const SubmitFeedbackResult = function(option = {}){
    return `
    <div class="special-color"> 
    <div class= "grid" >
        <article class="grid-text">
            <h3 class="grid-text-padding" >View feedback results</h3>
            <p class="grid-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempus eros. Suspendisse scelerisque dapibus turpis, vel suscipit nisl pellentesque nec. Etiam pellentesque in enim volutpat euismod. Vivamus id nibh eget nibh egestas congue. Nunc ante tellus, ultrices vitae egestas vel, gravida quis tellus. Praesent eget magna justo. Ut ligula tortor, imperdiet vitae est et, porttitor ornare massa. Praesent semper gravida lacus molestie aliquet. Fusce mollis tristique massa non maximus. Proin varius nisl eget faucibus feugiat. Fusce laoreet accumsan purus id hendrerit. Morbi felis ante, dictum ac facilisis sed, maximus vitae felis. Integer imperdiet feugiat diam, in interdum tortor porttitor varius. Cras luctus, est eget tristique finibus, massa augue pulvinar quam, non placerat lectus erat nec ex. Nunc vestibulum dui nisi, id aliquam dui sollicitudin a. Vestibulum sit amet mi sed nisl eleifend fermentum ut vel diam. </p>
        </article>
        <div class="grid-image">
            <img  src= "/assets/results.jpg" alt="results">	
        </div>
    </div>
    `
}

const LoginContent = function(option = {}){
    return `${LoginHeader()}
    ${SubmitFeedbackSection()}
    ${SubmitFeedbackResult()}
    ${FooterConstructor(option.footerContent)}`
}

