function getString(){
    return document.querySelector("textarea").value;
}

function sentenceCase(str){
    let ans="";
    let a='.',prv="";
    for(let i=0;i<str.length;i++)
    {
        if(i===0){
            ans+=str[i].toUpperCase();
        }
        else if(prv===a){
            ans+=str[i].toUpperCase();
        }
        else
            ans+=str[i].toLowerCase();
        if(str[i]!==" ")
            prv=str[i];
    }
    return ans;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.getElementById("upper-case").addEventListener("click",function(){
    document.querySelector("textarea").value = getString().toUpperCase();
});

document.getElementById("lower-case").addEventListener("click",() => {
    document.querySelector("textarea").value = getString().toLowerCase();
});

document.getElementById("proper-case").addEventListener("click",() => {
    document.querySelector("textarea").value = getString().toProperCase();
});

document.getElementById("sentence-case").addEventListener("click", () => {
    let result = getString();
    document.querySelector("textarea").value=sentenceCase(result);
});

document.getElementById("save-text-file").addEventListener("click",function(){
    download("text.txt",getString());
});