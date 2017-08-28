function Storage(){
    this.inputCandidate = []
    this.textAres = []
}
Storage.prototype = {
    addInputCandidate: function(obj){
        this.inputCandidate.push(obj)
    },


    checkInputCandidate: function(){
        alert(this.inputCandidate[0].a)
    }

    

}

var s = new Storage();
s.addInputCandidate({
    a : "vdavda",
    b : "dvsv"
})
s.checkInputCandidate()