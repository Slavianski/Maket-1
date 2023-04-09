'use strict'

const tabItem = document.querySelectorAll('.base__content-btn');
const tabContent = document.querySelectorAll('.base__content-search');

tabItem.forEach(function (element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item){
        item.classList.remove('base__content-btn-active');
    })

    tabContent.forEach(function (item){
        item.classList.remove('base__content-search-active');
    })

    tabTarget.classList.add('base__content-btn-active');
    document.querySelector(`#${button}`).classList.add('base__content-search-active');

}
