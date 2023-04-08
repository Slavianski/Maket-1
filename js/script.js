'use strict'

const tabItem = document.querySelectorAll('.main__content-btn');
const tabContent = document.querySelectorAll('.main__content-search');

tabItem.forEach(function (element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item){
        item.classList.remove('main__content-btn-active');
    })

    tabContent.forEach(function (item){
        item.classList.remove('main__content-search-active');
    })

    tabTarget.classList.add('main__content-btn-active');
    document.querySelector(`#${button}`).classList.add('main__content-search-active');

}
