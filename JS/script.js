const qrcode=document.getElementById('image');
const qrtext= document.getElementById('txt');
const qrGenbtn= document.getElementById('btnGenerate'); 
const qrDownbtn=document.getElementById('btnDownload');

qrGenbtn.addEventListener('click', ()=>{
    let size= "1000x1000";
    let data= qrtext.value;
    let baseURL="http://api.qrserver.com/v1/create-qr-code/"; //api call

    let url=`${baseURL}?data=${data}&size=${size}`;
    
    qrcode.src=url;
});

qrDownbtn.addEventListener('click', ()=>{
    // alert('download start');
    let imgPath=qrcode.src;
    let fileName= "image.jpeg";

    saveAs(imgPath,fileName);
});