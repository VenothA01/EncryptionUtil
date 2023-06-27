
function changeHtmlContent() {

    let checkBox = document.getElementById('toggle-check')
    
    if(checkBox.checked){
        document.getElementById('content').textContent = 'Decrypt PassCode'
        document.getElementById('passcodeLbl').textContent = 'Enter Passcode to decrypt'
        document.getElementById('btn_decrypt').defaultValue = 'Decrypt';
    }
    else{
        document.getElementById('content').textContent = 'Encrypt PassCode' 
        document.getElementById('passcodeLbl').textContent = 'Enter Passcode to encrypt'
        document.getElementById('btn_decrypt').defaultValue = 'Encrypt';  
    }

}