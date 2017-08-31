const EvaluationListEvents = function(w) {
    this.initEvents = function(build) {
        const logout = document.getElementById('logout');
        logout.addEventListener('click', function(e) {
            e.preventDefault();
            
            window.dataStorage.remove('userData');
            build(newEval= false, Eval= false);
        });
        const newEvaluationPage = document.getElementById('newEvaluationPage');
        newEvaluationPage.addEventListener('click',function(e){
            e.preventDefault();
            build(newEval=true, Eval= false);
        })

        var predicate = function(element, ind, context){
            element.addEventListener("click", function(e) {
                // //let t = this.closest('.border-bottom') ;
                // //("<tr>Jewjew </tr>").insertAfter(t)
                // var tableRef = document.getElementById("evalTable").getElementsByTagName('tbody')[0];
                // console.log(tableRef)
                // // const t = "<tr> jew</tr>"
                // // var newRow = tableRef.insertRow(ind+2)
                // // var newText = document.createTextNode("sdas")
                // // newRow.appendChild(newText)
                // var row= tableRef.insertRow(ind+2);
                // row.innerHTML = `<tr><td class= "td-theme"></td>
                // <td class= "td-theme">dfvxsv</td>
                // <td class= "td-theme">bzvbcv</td>
                // <td class= "td-theme">fbgdzsbdzs</td>
                // <td class="detail-button td-theme">Detail</td>
                // <td class= "td-theme">
                //     <img src="/assets/button.jpg" alt="More Deatails" class="evalContentBut">
                // </td></tr>`
                // row.className = "border-bottom"                
                console.log(w[ind])
                const yet = window.open("", "Evaluation details", "width=1400,height=500")
                yet.document.write(JSON.stringify(w[ind]))
            })
        }

        let inter = document.getElementsByClassName("evalContentBut")
        console.log(inter)
        Array.prototype.map.call(inter, predicate)
        // inter.map(function(element){
        //     element.addEventListener('click', showContent("s"))
        // })
        
    }
}