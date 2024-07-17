// script.js
document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.arrow-left img');
    const rightArrow = document.querySelector('.arrow-right img');

    leftArrow.addEventListener('click', () => {
        // 左矢印がクリックされた時の処理
        console.log('左矢印がクリックされました');
    });

    rightArrow.addEventListener('click', () => {
        // 右矢印がクリックされた時の処理
        console.log('右矢印がクリックされました');
    });
});
