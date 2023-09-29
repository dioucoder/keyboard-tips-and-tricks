let keys = document.querySelectorAll('.key');
let capslock = document.querySelector('.key-capslock');
let keyTyped = document.querySelector('.value-key-box ');

capslock.addEventListener('click', () => {
    capslock.classList.toggle('active');
});


keys.forEach(key => {
    key.addEventListener('click', function name() {
        keyTyped.classList.add('active');
        keyTyped.textContent = key.textContent;
        setTimeout(() => {
            keyTyped.classList.remove('active');
        }, 600);
    })
});