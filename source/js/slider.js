const sliderContainer = document.querySelector('.slider_container')
const sliderWrapper = document.querySelector('.slider_wrapper')
const sliderBlock = document.querySelector('.slider_block')

const slider_wrapperAll = document.querySelectorAll('.slider_wrapper .slider_block');
const switcher = document.querySelector('.slider_switcher')

//Функция считает ширину блока для правильно смещения слайдов по оси Х
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

    //Switcher
    switcher.addEventListener('click', (event) => {
        let target = event.target;
        let index = target.className.slice(-1);
        const switcherAll = document.querySelectorAll('.dot')

        //Перебираем все кнопки переключения слайдов и удаляем активный клас
        switcherAll.forEach(item => {
            item.classList.remove('dot_active')
        })
        target.classList.add('dot_active')

        // Смещение слайдов, для первого и второго статические значения по дефолту, для остальных высчитывается
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

