// var userfeedback = prompt("first alert")

// console.log(userfeedback);
var transButton=document.querySelector(".trans-button");
var inputtxt=document.querySelector(".txt-input")
var outputbox=document.querySelector(".output")

function makeurl(input){
    var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var urlInput=url+"?text="+input;
    return urlInput;
}

function translateinput(input){
    var urlinput=makeurl(input);

    return ;
}

function errorhandler(){
    alert("there is some issue in server please try after some time");
}

function clickHandler(){
    console.log(inputtxt.value);
    var serverurl="https://api.funtranslations.com/translate/ferb-latin.json";
    const urlInput=serverurl+"?text="+inputtxt.value;
    fetch(urlInput)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        outputbox.innerText=json.contents.translated;
    })
    .catch(errorhandler)
}


// console.log(transButton);
transButton.addEventListener("click",clickHandler);