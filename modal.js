
for(var i=1;i<=14;i++){
    modal_name='modal_'+i
    button_name='close-btn'+i
    modal=document.getElementById(modal_name)
    document.getElementById(button_name).addEventListener('click', closure(modal_name,button_name));

    modal.addEventListener("click", e => {
        const evTarget = e.target
        if(evTarget.classList.contains("modal-background")) {
            modal.style.display = "none"
        }
    })
}

function closure(modal_name,button_name){
    return function(){
        document.getElementById(modal_name).style.display='none'
    }
}