let bgNum = 1;
const repBg = document.getElementById('main');

function page(pageid){
    window.location.href = pageid;
}
function download(file){
    const link = document.createElement('a');
    link.href = file;
    link.download = '';
    link.click();
    window.alert("Downloading File(s)");
}
function bgc() {
    bgNum++; 
    if (bgNum >= 6) bgNum = 1;
    repBg.style.backgroundImage = `url('../Images/BG${bgNum}.webp')`;  
    repBg.style.backgroundSize = "cover";
    repBg.style.backgroundPosition = "center";
    repBg.style.backgroundRepeat = "no-repeat";
}

bg();

bgc();

setInterval(bgc, 10000);
