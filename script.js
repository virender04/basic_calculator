let str = "";
let buttons = document.querySelectorAll('.buttons');
let output = document.querySelector('.input');

function calculate(str) {
    try {
        const result = eval(str);
        return result.toString();
    } catch (error){
        return "error";
    }
}

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=> {
        if(e.target.innerHTML == 'C') {
            output.innerHTML='';
            str = '';
            console.log(str);
        } else if(e.target.innerHTML == '=') {
            output.innerHTML = calculate(str);
        } else {
            console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector('.input').innerHTML = str;
        }
    })
});
