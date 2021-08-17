
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let Valuescreen = '';
for ( item of buttons ) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if(buttonText == '*') {
            Valuescreen += buttonText;
            screen.value = Valuescreen;
            }
            
    else if (buttonText == 'C') {
        Valuescreen=" ";
        screen.value= Valuescreen;
}

else if (buttonText=='Backspace') {
    Valuescreen = '';
    screen.value=screen.value.substring(0, screen.value.lenght-1);

}

else if (buttonText == '=') {
    screen.value = eval(Valuescreen);
}

else {
    Valuescreen += buttonText;
    screen.value = Valuescreen;

}


    })
}

