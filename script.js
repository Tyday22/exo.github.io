let bgNum = 1;
const container = document.getElementById('main');

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
function bg() {
    bgNum++; 
    if (bgNum >= 6) bgNum = 1;
    container.style.backgroundImage = `url('../Images/BG${bgNum}.webp')`;  
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
}
bg();

setInterval(bg, 10000);
