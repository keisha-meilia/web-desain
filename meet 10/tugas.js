const inputName = document.getElementById("name");
const inputAlamat = document.getElementById("alamat");
const inputCall = document.getElementById("call");
const inputPass = document.getElementById("pass");

const buttonName = document.getElementById("btn-name")
const buttonAlamat = document.getElementById("btn-alamat")
const buttonCall = document.getElementById("btn-call")
const buttonPass = document.getElementById("btn-pass")

function checkRequired(input){
    const value = input.value.trim();

    if(value === ""){
        alert("Input Diperlukan");
        input.focus();
        return false;
    }

    return true;
}

buttonName.addEventListener('click', () => {
    if(!checkRequired(inputName)) return;

    const value = inputName.value.trim();
    const alphabet = /^[A-Za-z\s]+$/;

    if(alphabet.test(value)){
        alert("Input benar");
        inputName.focus();
        return;
    }
    
    alert("Input Wajib Huruf");
    
})

buttonAlamat.addEventListener('click', () => {
    if(!checkRequired(inputAlamat)) return;
    
    const value = inputAlamat.value.trim();
    const alphaNumber = /^[A-Za-z0-9]+$/;

    if(alphaNumber.test(value)){
        alert("Input benar");
        inputAlamat.focus();
        return;
    }
    
    alert("Input Wajib Alpha Number");
})

buttonCall.addEventListener('click', () => {
    if(!checkRequired(inputCall)) return;
    
    const value = inputCall.value.trim();
    const angka = /^[0-9]+$/;

    if(angka.test(value)){
        alert("Input benar");
        inputCall.focus();
        return;
    }
    
    alert("Input Wajib Number");
})
    
buttonPass.addEventListener('click', () => {
    if(!checkRequired(inputPass)) return;
    
    const value = inputPass.value.trim();
    const password = /^[A-Za-z0-9]+$/;

    if(password.test(value)){
        alert("Input benar");
        inputPass.focus();
        return;
    }
    
    alert("Input Wajib Alpha Number");
})