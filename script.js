function btnclick(val){
    document.getElementById("result").value+=val
}

function equalclick(){
    var a=document.getElementById("result").value
    var result=eval(a)
    
    document.getElementById("result").value=result
    
}

function clearresult(){
    document.getElementById("result").value=""
}

function reciprocal(){
    var a=document.getElementById("result").value
    var result=1/a
    document.getElementById("result").value=result
}


function btnsquare(){
    var a=document.getElementById("result").value
    var result=a**2
    document.getElementById("result").value=result
}


function btnroot(){
    var a=document.getElementById("result").value
    var result=Math.sqrt(a)
    document.getElementById("result").value=result
}
