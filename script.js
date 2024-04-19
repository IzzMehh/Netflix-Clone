const buttons = document.getElementsByClassName('btn');
const buttonstext = document.getElementsByClassName('btnbox');
const section = document.getElementById('section6');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {    
        if (buttonstext[i].classList.contains('trans')) {
            buttonstext[i].classList.remove('trans');
            section.style.height = "auto";
        } else {
            for (let j = 0; j < buttons.length; j++) {
                if (buttonstext[j].classList.contains('trans')) {
                    buttonstext[j].classList.remove('trans');
                    section.style.height = "72rem";
                }
            }
            section.style.height = "72rem";
            buttonstext[i].classList.add('trans');
        }
    };
}
