function page(pageid){
    window.location.href = pageid;
}
function download(file){
    const link = document.createElement('a');
    link.href = file;
    link.download = '';
    link.click();
}