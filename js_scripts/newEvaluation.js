const NAV = function (option = {}){
    return `
    <ul class="header headerT">
        <li class="header-elements">
            <img class= "main-logo" src="/assets/logo-v2.jpg">
        </li>
        <li class="header-elements">
            <a class = "header-elements-link header-elements-linkT " href="Evaluationv2.html"> Evaluations</a>
        </li>
            <li class="header-elements">
                <a class="header-elements-link header-elements-linkT active-page" href="NewEvaluationv2.html">New Evaluation</a>
            </li>
        <li class="header-elements right-button">
            <a class= "header-elements-link header-elements-linkT" href="Loginv2.html">Logout</a>
        </li>
    </ul>`
}


const candidateDetailsForm = function (option = {}){
    return `<form class = "candidate-input-box">
    <input class="input-candidate" type="text" name="Candidate" autocomplete="on" placeholder="Candidate" required />
    <input class="input-candidate" type="text" name="Interviewer" autocomplete="on" placeholder="Interviewer" required />
    <input class="input-candidate" type="date" name="Date" placeholder="dd/mm/yyyy" required/>
</form>`
}


const technicalLevelPicker = function (option = {}){
    return `<div class="radio-boxes">
    <h3>
        Technical level
    </h3>
    <ul class="top-list-radio" >
        <li id="placeHolder"></li>
        <li id="R1" >Trainee</li>
        <li class="R2" >Junior</li>
        <li class="R2" >Middle</li>
        <li class="R2" >Senior</li>
        <li id="extra"></li>
        <div class="clearfix"></div>
    </ul>
    

    <ul class="down-list-radio">
        <li id= "RR1">
            <input type="radio" name="level" value = "T">
        </li>
        <li >
            <input type="radio" name="level" value = "J1">
        </li>
        <li >
            <input type="radio" name="level" value = "J2">
        </li>
        <li class="spacer">
            <input type="radio" name="level" value = "J3">
        </li>
        <li >
            <input type="radio" name="level" value = "M1">
        </li>
        <li >
            <input type="radio" name="level" value = "M2">
        </li>
        <li class="spacer">
            <input type="radio" name="level" value = "M3">
        </li>
        <li >
            <input type="radio" name="level" value = "S1">
        </li>
        <li >
            <input type="radio" name="level" value = "S2">
        </li>
        <li >
            <input type="radio" name="level" value = "S3">
        </li>
        <div class="clearfix"></div>
    </ul>
    <br>			
</div>
`
} 

const textArea = function (option = {}){
    return `<div class="user-textarea">
    <h3>Should the candidate be hired?</h3>
    <textarea placeholder="The type of project that is suitable for the candidate &#13;&#10;Is guidance requiredd for the candidate"></textarea>
</div>

<div class="user-textarea">
    <h3>General Impression</h3>
    <textarea placeholder="*required" required></textarea>
</div>

<div class="user-textarea">
    <h3>Workflow, Leadership &#38; Soft Skills</h3>
    <textarea placeholder="Describe the enviroment in which the candidate works. &#13;&#10;Describe ani guidance or management experience."></textarea>
</div>`
}

const newEvaluationForm = function (option = {}){
    return `<form class="legend-box">
    <fieldset>
        <legend>OOP, Design Patterns</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Classes" >Classes</label>
                <select name="Classes" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
            <label for="Exception handling" >Exception handling</label>
                <select name="Exception handling" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Version Control" >Version Control</label>
                <select name="Version Control" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Access modifiers" >Access modifiers</label>
                <select name="Access modifiers" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Design Patterns" >Design Patterns</label>
                <select name="Design Patterns" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Issue Tracking" >Issue Tracking</label>
                <select name="Issue Tracking" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Polymorphism" >Polymorphism</label>
                <select name="Polymorphism" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="RegEx" >RegEx</label>
                <select name="RegEx" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>

<form  class="legend-box" id="HTTP">
    <fieldset>
        <legend>HTTP</legend>
        <ul class = "legend-box-list">
            <li class="legend-box-drop">
                <label for="Protocol" >Protocol</label>
                <select name="Protocol" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Response codes" >Response codes</label>
                <select name="Response codes" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="REST" >REST</label>
                <select name="REST" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Headers" >Headers</label>
                <select name="Headers" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Request methods" >Request methods</label>
                <select name="Request methods" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Issue Tracking" >Sessions &#38; Cookies</label>
                <select name="Issue Tracking" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>




        </ul>
    </fieldset>
</form>

<form  class="legend-box" id="HTML">
    <fieldset>
        <legend>HTML</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Doctype" >Doctype</label>
                <select name="Doctype" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Tags" >Tags</label>
                <select name="Tags" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Basic SEO" >Basic SEO</label>
                <select name="Basic SEO" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Syntax rules" >Syntax rules</label>
                <select name="Syntax rules" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>


<form  class="legend-box" id="CSS">
    <fieldset>
        <legend>CSS</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Usage" >Usage</label>
                <select name="Usage" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Box Modeling" >Box Modeling</label>
                <select name="Box Modeling" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="CSS 3.0" >CSS 3.0</label>
                <select name="CSS 3.0" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Selectors" >Selectors</label>
                <select name="Selectors" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Styling" >Styling</label>
                <select name="Styling" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Dynamic Stylesheets" >Dynamic Stylesheets</label>
                <select name="Dynamic Stylesheets" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>


<form  class="legend-box" id="DesignPaterns">
    <fieldset>
        <legend>Javascript</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Date types" >Date types &#38; variables </label>
                <select name="Date types" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Object manipulation" >Object manipulation</label>
                <select name="Object manipulation" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="DOM manipulation" >DOM manipulation</label>
                <select name="DOM manipulation" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Functions" >Functions</label>
                <select name="Functions" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Templating" >Templating</label>
                <select name="Templating" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Issue Tracking" >Issue Tracking</label>
                <select name="Issue Tracking" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Polymorphism" >Event Hnadling</label>
                <select name="Polymorphism" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Prototype" >Prototype &#38; OOP</label>
                <select name="Prototype" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Testing" >Testing(unit, E2E)</label>
                <select name="Testing" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="AJAX" >AJAX</label>
                <select name="AJAX" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Dubugging" >Dubugging</label>
                <select name="Dubugging" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Websockets" >Websockets</label>
                <select name="Websockets" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Tooling" >Tooling</label>
                <select name="Tooling" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Libraries" >Libraries</label>
                <select name="Libraries" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Promisses" >Promisses</label>
                <select name="Promisses" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Browser Engines" >Browser Engines</label>
                <select name="Browser Engines" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Frameworks" >Frameworks</label>
                <select name="Frameworks" >
                    <option selected disabled hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>


<form  class="legend-box" id="HTML">
    <fieldset>
        <legend>NodeJS</legend>
        <ul class="legend-box-list">
            <li class="legend-box-drop">
                <label for="Backend frameworks" >Backend frameworks</label>
                <select name="Backend frameworks" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Templating" >Templating</label>
                <select name="Templating" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="DOM Manipulation" >DOM Manipulation</label>
                <select name="DOM Manipulation" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>

            <li class="legend-box-drop">
                <label for="Unit Testing" >Unit Testing</label>
                <select name="Unit Testing" >
                    <option selected hidden>Evaluation</option>
                    <option value = "0"> 0</option>
                    <option value = "1"> 1</option>
                    <option value = "2"> 2</option>
                    <option value = "3"> 3</option>
                </select>
            </li>
        </ul>
    </fieldset>
</form>`
}

const dropDownSelector = function (option = {}){

}

const submitButton =function (option = {}){
    return `<div class= "submit-button">
    <form action="Evaluation.html">
        <input  type="submit" name="button" value="Submit">
    </form>
</div>`
}

const Footer = function(option = {}){
    return `<footer class="footer footerT" >
    <p>SoftVision@2017</p>
</footer>`
}

const PageGrid = function (option = {}){
    return `	<div class = "mainBlock">
    ${candidateDetailsForm()}${technicalLevelPicker()}
    ${textArea()}${newEvaluationForm()}${submitButton()}
    </div>
    `
}
const NewEvaluationPage = function(option = {}){
    return `${NAV({})}
    ${PageGrid()}
    ${Footer({})}`
}


window.onload = function(){
    const result = [];
    result.push(NewEvaluationPage({}))
    document.querySelector('#app').innerHTML = result;
}