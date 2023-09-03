// script.js

const buttonsA = document.querySelectorAll('.button[id^="buttonA"]');
const buttonsB = document.querySelectorAll('.button[id^="buttonB"]');

buttonsA.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            button.style.backgroundColor = '#e74c3c';
            button.textContent = 'どなたかお願いします';
        } else {
            //初期状態に戻したいけど、できなかった
            button.style.backgroundColor = '#3498db';
            button.textContent = '養護教諭が行います';
        }
    });
});

buttonsB.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            button.style.backgroundColor = '#27ae60';
            button.textContent = '完了しました';
        } else {
            button.style.backgroundColor = '#3498db';
            button.textContent = '未実施です';
        }
    });
});
