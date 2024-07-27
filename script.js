const inputValue = document.getElementById('input-value')
const btns = document.getElementsByTagName('button')

Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', ()=>{

        let value = true;
        if(value){
            inputValue.style.color = "#fff"
        }

        try {
            if(btn.innerText == "="){
                inputValue.value = eval(inputValue.value)
                // update the color 
                value = true
            }else if(btn.innerText == "C"){
                inputValue.value = ""
            }else if(btn.innerText == "DEL"){
                inputValue.value = inputValue.value.slice(0, -1)
            }else{
                inputValue.value += btn.innerText;
            }
        } catch (error) {
            inputValue.value = "Unexpected Value"
            inputValue.style.color = "#ff0000"
            value = false;
        }
    })
})



