@@include('webpTest.js');
@@include('slider.js');

document.querySelector('.header_closer').onclick = function(){
    document.querySelector('.header_closer').classList.toggle('close');
    document.querySelector('.header__burger').classList.toggle('close_top')
}

