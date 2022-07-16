function resmiKaldir(){
    document.getElementById('resim').parentNode.removeChild('resim');
}

function boyutlandir(oran){
    var resimElementi = document.getElementById('resim');
    resimElementi.style.width = oran + "%";
    resimElementi.style.height = oran + "%";
}