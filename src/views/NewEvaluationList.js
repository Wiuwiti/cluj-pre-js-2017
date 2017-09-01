const NewEvaluationList = function() {
    this.markup = NewEvaluationPage(GetNewEvaluationPageData());
}

const CandidateLine = function (candidateContent = {}, obj = {}) {
    if(Object.keys(obj).length === 0){
        return `
        <input id = "${candidateContent.elementID}" class="input-candidate" type="${candidateContent.dataType}" name="${candidateContent.inputName}" autocomplete="on" placeholder="${candidateContent.placeHolder}" required />
        `
    }else{
        return `
        <input id = "${candidateContent.elementID}" class="input-candidate" type="${candidateContent.dataType}" name="${candidateContent.inputName}" autocomplete="on" placeholder="${candidateContent.placeHolder}" value="${obj}" required />
        `
    }
}
const ConstructDetailsForm = function(candidateContent = {}, obj = {}){
    if(Object.keys(obj).length === 0){
        return candidateContent.map((element) => CandidateLine(element)).join('')
    }else{
        return candidateContent.map((element,i) => CandidateLine(element, obj[0][i])).join('')
    }
}


const CandidateDetailsForm = function (candidateContent = {}, obj = {}){
    if(Object.keys(obj).length === 0){
    return `
    <form class = "candidate-input-box">
        ${ConstructDetailsForm(candidateContent)}
    </form>`
    }else{
        return `
        <form class = "candidate-input-box">
            ${ConstructDetailsForm(candidateContent, obj)}
        </form>`
    }
}

/**
* 
* @param {Object} option  Thre op
*/
const TechnicalLevelPickerHeader = function(headerTitle = {}){
    return ` 
    <h3>
        ${headerTitle}
    </h3>`
}


const TechnicalLevelPickerTop = function(technicalContent = {}){
const result = technicalContent.headers.map((element, i) => `<li class="${technicalContent.classes[i]}" id="${technicalContent.ID[i]}">${element}</li>`).join('') 
    return `
    <ul class="top-list-radio" >
        <li id="placeHolder"></li>
            ${result}
        <li id="extra"></li>
        <div class="clearfix"></div>
    </ul>`
}

const TechnicalLevelPickerBottomSection = function (option = {}){
    return option.inputLevel.map((element , i ) => `
    <li class = "${option.classes[i]}" id ="${option.ID[i]}">
        <input type="radio" name="level" value = "${element}">
    </li>`).join('')
}


const TechnicalLevelPickerBottom = function (columnData = {}){
const result = columnData.map((element) => TechnicalLevelPickerBottomSection(element)).join('')
    return ` 
    <ul class="down-list-radio">
        ${result}
        <div class="clearfix"></div>
    </ul>`
}

const TechnicalLevelPickerConstructor = function(technicalContent = {}){
    return `${TechnicalLevelPickerHeader(technicalContent.HeaderTitle)}
    ${TechnicalLevelPickerTop(technicalContent)}
    ${TechnicalLevelPickerBottom(technicalContent.columnData)}
    `
}
const TechnicalLevelPicker = function (technicalContent = {}, option = ""){
    if(option === ""){
    return `<div class="radio-boxes">
        ${TechnicalLevelPickerConstructor(technicalContent)}
    </div>
    `}else{
        `<div class="radio-boxes">
        ${TechnicalLevelPickerConstructor(technicalContent, option)}
        </div>
    `
    }
} 


const TextAreaBox = function(textAreaContent = {},i, array = ""){
    if(array === ""){
    return `
    <div class="user-textarea">
        <h3>${textAreaContent.headerTitle}</h3>
        <textarea id="${textAreaContent.textAreaID}${i}"placeholder="${textAreaContent.placeHolder}" required></textarea>
    </div>`
    }else{
        return `
        <div class="user-textarea">
            <h3>${textAreaContent.headerTitle}</h3>
            <textarea id="${textAreaContent.textAreaID}${i}"placeholder="${textAreaContent.placeHolder}" required>${array.input}</textarea>
        </div>`
    }
}
const TextArea = function (textAreaContent = {}, array = []){
    if(array === []){
        return textAreaContent.map((element,i) =>TextAreaBox(element,i)).join('')
    }else{
        return textAreaContent.map((element,i) =>TextAreaBox(element,i, array[i])).join('')
    }
}


const SelectConstructor = function(selectContent = {}){
    const result = []
    result.push(`<option selected disabled hidden>Evaluation</option>`)
    result.push(selectContent.map((element) =>  `<option value = "${element }"> ${element}</option>`).join(''))
    return result.join('')
}


const DropDownConstructor = function (selectBoxContent = {}, selectContent = {}){
    return selectBoxContent.map( (element,i) => 
    `
    <li class="legend-box-drop">
        <label for="${element.selectName}"> ${element.labelTitle}</label>
        <select id = "${element.idName}" name="${element.selectName}">
        ${SelectConstructor(selectContent.Values)}
        </select>
    </li>`).join('')
}

const NewEvaluationForm = function (dropDownContent = {}, selectedDropdown = []){
    if(selectedDropdown === []){
        return dropDownContent.map((element) =>
            `
            <form class="legend-box" id="${element.boxID}">
                <fieldset>
                    <legend>${element.Title}</legend>
                    <ul class="legend-box-list">
                        ${DropDownConstructor(element.selectBox, element.newEvaluationSelectContent)}
                    </ul>
                </fieldset>
            </form>`).join('')

    }else{
        return dropDownContent.map((element,i) =>
        `
        <form class="legend-box" id="${element.boxID}">
            <fieldset>
                <legend>${element.Title}</legend>
                <ul class="legend-box-list">
                    ${DropDownConstructor(element.selectBox, element.newEvaluationSelectContent,selectedDropdown[i])}
                </ul>
            </fieldset>
        </form>`).join('')
    } 

}


const SubmitButton =function (option = {}){
    return `
    <div  class= "submit-button">
        <form >
            <input id = "newEvalsubmit" type="submit" name="button" value="Submit">
        </form>
    </div>`
}


const NewEvaluationPageGrid = function (option = {}, obj = {}){
    if(Object.keys(obj).length === 0){
        return `	
        <div class = "mainBlock">
            ${CandidateDetailsForm(option.newEvaluationCandidateContent)}
            ${TechnicalLevelPicker(option.newEvaluationTechnicalLevelContent)}
            ${TextArea(option.newEvaluationTextAreaContent)}
            ${NewEvaluationForm(option.newEvaluationDropDownContent)}
            ${SubmitButton()}
        </div>
        `
    }else{
        return `	
        <div class = "mainBlock">
            ${CandidateDetailsForm(option.newEvaluationCandidateContent, obj.inputCandidate)}
            ${TechnicalLevelPicker(option.newEvaluationTechnicalLevelContent)}
            ${TextArea(option.newEvaluationTextAreaContent, obj.textArea)}
            ${NewEvaluationForm(option.newEvaluationDropDownContent, obj.legendBoxes)}
        </div>
        `
    }
}

const NewEvaluationPage = function(options = {}, obj = {}){
    if(Object.keys(obj).length === 0){
        return `${NavigationBar(options.newEvaluationHeaderContent, options.newEvaluationLogoContent)}
        ${NewEvaluationPageGrid(options)}
        ${FooterConstructor(options.newEvaluationFooterContent)}`
    }else{
        return `
        ${NewEvaluationPageGrid(options, obj)}
        `
    }
}