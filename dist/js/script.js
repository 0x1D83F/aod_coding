function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
});;
const sliderContainer = document.querySelector('.slider_container')
const sliderWrapper = document.querySelector('.slider_wrapper')
const sliderBlock = document.querySelector('.slider_block')


const slider_wrapperAll = document.querySelectorAll('.slider_wrapper .slider_block');

const switcher = document.querySelector('.slider_switcher')


function measure(value){
    let blockWidth = sliderBlock.offsetWidth;
    let blockHeight = sliderBlock.offsetHeight; 


    if(value === 'height'){
        return blockHeight;
    }else{
        return 0;
    }
}

function createSlider(){
    let user_height = measure('height');
    sliderWrapper.style.height = `${user_height + 10}px`;

    
    //Ставим в ряд блоки
    slider_wrapperAll.forEach((item,index) => {
        item.classList.add(`slider_block_${index}`)
        item.style.cssText = `
           position: absolute;
           width: 100%`
         if(index === 1){
            item.style.left = '100%'
        } else{
            item.style.left = `${index * 100}%`
        }
    })

    //Switcher creator
    for(let i = 0; i < slider_wrapperAll.length - 1; i++){
        let dot = document.createElement('div');
            dot.classList.add('dot');
            dot.classList.add(`dot_${i+1}`);
        switcher.append(dot)
        
    }

    //пeреключатель
    switcher.addEventListener('click', (event) => {
        let target = event.target;
        let index = target.className.slice(-1);
        const switcherAll = document.querySelectorAll('.dot')

        switcherAll.forEach(item => {
            item.classList.remove('dot_active')
        })
        target.classList.add('dot_active')

        if(target.classList.contains('dot_0')){
            sliderWrapper.style.left = '0';
        }else if(target.classList.contains('dot_1')){
            sliderWrapper.style.left = '-100%';
        } else{
            sliderWrapper.style.left = `-${index * 100}%`;
        }
    })
}
createSlider();


//Слушаем изменения экрана и меняем высоту блока чтобы текст не сьезжал
window.addEventListener('resize', function(){
    let user_height = measure('height');
    sliderWrapper.style.height = `${user_height}px`;
})

;

document.querySelector('.header_closer').onclick = function(){
    document.querySelector('.header_closer').classList.toggle('close');
    document.querySelector('.header__burger').classList.toggle('close_top')
}

