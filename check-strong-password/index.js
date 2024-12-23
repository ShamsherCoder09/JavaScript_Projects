const inputfield = document.getElementById('Password');
const outputfield = document.getElementById('output')

inputfield.addEventListener('input', ()=>{
    let password  = inputfield.value;
    if(password.length<8){
        outputfield.innerText="password is too short";
        outputfield.style.color = "red";
    }else{
        if(password.search(/[a-z]/) == -1){
            outputfield.innerText = "Password is missing lowercase letter";
            outputfield.style.color='red'
        }
        else if(password.search(/[A-Z]/) == -1){
            outputfield.innerText = "Password is missing uppercase letter";
            outputfield.style.color='red'
        }
        else if(password.search(/[0-9]/) == -1){
            outputfield.innerText = "Password is missing NumericValue letter";
            outputfield.style.color='red'
        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\[\]\:\;\'\"\<\>\,\.\?]/) ==-1){
            outputfield.innerText="password is missing special character letter";
            outputfield.style.color = 'red'
        }
        else{
            outputfield.innerText='Password is strong';
            outputfield.style.color='green'
        }


    }
})