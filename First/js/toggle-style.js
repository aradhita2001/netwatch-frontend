const toggleButton = document.getElementById('toggle-style-btn');
const toggleButton1 = document.getElementById('toggle-style-btn1');
const toggleButton2 = document.getElementById('toggle-style-btn2');
const toggleButton3 = document.getElementById('toggle-style-btn3');
let styleLink = document.getElementById('page-style');

toggleButton.addEventListener('click', () => {

    if (styleLink) {
        styleLink.remove();
        styleLink = null;
    }
});

toggleButton1.addEventListener('click', () => {

    if(!styleLink) {
    styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.id = 'page-style';
    document.head.appendChild(styleLink);
    }
    styleLink.href = 'CSS/style1.css'; 
});

toggleButton2.addEventListener('click', () => {
    if(!styleLink) {
    styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.id = 'page-style';
    document.head.appendChild(styleLink);
    }
    styleLink.href = 'CSS/style2.css'; 
});

toggleButton3.addEventListener('click', () => {
    if(!styleLink) {
    styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.id = 'page-style';
    document.head.appendChild(styleLink);
    }
    styleLink.href = 'CSS/style3.css'; 
});

