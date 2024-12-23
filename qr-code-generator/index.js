const qrinput = document.getElementById('qr-input');
const qrbutton = document.getElementById('qr-button');
const qrimg = document.getElementById('qr-img');

// console.log(qrbutton, qrinput,qrimg)

qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.value;
    if(!inputValue){
        alert("please enter a valid url");
        return
    } 
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt=`QR Code for ${inputValue}`;
    }
})