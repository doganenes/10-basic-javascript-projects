const text = "I am very happy today <3."
var index = 0;

function writeText(){
    document.body.innerText = text.slice(0,index);
    index++;

    if(index > text.length){
        index = 0;
    }
}
setInterval(writeText , 100);

/*
ekranda yüz milisaniye ara ile text'i yazdırır.
*/