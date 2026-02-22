let bgNum = 0;
const container = document.getElementById('main');

function page(pageid){
    window.location.href = pageid;
}
function download(file){
    const link = document.createElement('a');
    link.href = file;
    link.download = '';
    link.click();
}
function bg() {
    bgNum++; 
    if (bgNum > 7) bgNum = 1;    
    container.style.backgroundImage = `url('../Images/BG${bgNum}.png')`;  
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
}

bg(); 
setInterval(bg, 10000);