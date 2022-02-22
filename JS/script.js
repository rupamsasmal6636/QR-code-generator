const qrcode=document.querySelector('img');
const qrtext= document.getElementById('txt');
const qrGenbtn= document.getElementById('btnGenerate'); 
const qrDownbtn=document.getElementById('btnDownload');

qrGenbtn.addEventListener('click', ()=>{
    let size= "750x750";
    let data= qrtext.value;
    let baseURL="https://api.qrserver.com/v1/create-qr-code/"; //api call

    let url=`${baseURL}?data=${data}&size=${size}`;
    console.log(data);
    qrcode.src=url;
    qrtext.value="";
});

// qrDownbtn.addEventListener('click', ()=>{
//     // alert('download start');
//     let imgPath=qrcode.src;
//     let fileName= "image.jpeg";

//     saveAs(imgPath,fileName);
// });