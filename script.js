const buttons = document.querySelectorAll('.btn');
const buttonstext = document.querySelectorAll('.btnbox');
const img = document.querySelectorAll('.add-img');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {    
        if (buttonstext[i].classList.contains('trans')) {
            buttonstext[i].classList.remove('trans');
            img[i].style.transform = 'rotate(0deg)';
        } else {
            for (let j = 0; j < buttons.length; j++) {
                if (buttonstext[j].classList.contains('trans')) {
                    buttonstext[j].classList.remove('trans');
                    img[j].style.transform = 'rotate(0deg)';
                }
            }
            buttonstext[i].classList.add('trans');
            img[i].style.transform = 'rotate(-45deg)';
        }
    };
}
