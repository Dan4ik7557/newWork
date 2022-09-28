// ------------------------------------------HEADER------------------------------
const burger = document.querySelector('.burger_wrapper')
const polosa1 = document.querySelector('.polosa_1')
const polosa2 = document.querySelector('.polosa_2')
// const polosa3 = document.querySelector('.polosa_3')
// const polosa4 = document.querySelector('.polosa_4')

const menuMain = document.querySelector('.menu_main')



burger.onclick = function() {
document.body.classList.add('noScroll')
document.querySelector('.menu_wrapper').classList.add('menu_wrapper_visib')

polosa1.classList.add('polosa1_transform')
polosa2.classList.add('polosa2_transform')
// polosa3.classList.add('polosa3_transform');
// polosa4.classList.add('polosa4_transform');


document.querySelector('.palka_1').classList.add('palka_1_anim')
document.querySelector('.palka_2').classList.add('palka_2_anim')
document.querySelector('.palka_3').classList.add('palka_3_anim')
document.querySelector('.palka_4').classList.add('palka_4_anim')
document.querySelector('.burger_wrapper').classList.add('burger_wrapper_anim')

document.querySelector('.menu').classList.add('menu_transform')
document.querySelector('.close_menu_wrapper').classList.add('close_menu_wrapper_transform')



}


document.querySelector('.close_menu_wrapper').onclick = function() {
    document.body.classList.remove('noScroll');
    document.querySelector('.menu_wrapper').classList.remove('menu_wrapper_visib');

    polosa1.classList.remove('polosa1_transform')
    polosa2.classList.remove('polosa2_transform')
    // polosa3.classList.remove('polosa3_transform');
    // polosa4.classList.remove('polosa4_transform');
    
    document.querySelector('.palka_1').classList.remove('palka_1_anim')
    document.querySelector('.palka_2').classList.remove('palka_2_anim')
    document.querySelector('.palka_3').classList.remove('palka_3_anim')
    document.querySelector('.palka_4').classList.remove('palka_4_anim')
    document.querySelector('.burger_wrapper').classList.add('burger_wrapper_anim')
    
    document.querySelector('.menu').classList.remove('menu_transform') ;
document.querySelector('.close_menu_wrapper').classList.remove('close_menu_wrapper_transform')

};








//----------------------------- Animationes at window's center-----------------------------//


function firstBlocksAnimation() {
    let WindowCenter = (window.innerHeight / 2) + window.scrollY
    let WindowCenter2 = (window.innerHeight - 100) + window.scrollY



    if (document.querySelector('.block_1').offsetTop  <= WindowCenter) {
        document.querySelector('.block_1').classList.add('block_1_anim')
    } else {
        // document.querySelector('.block_1').classList.remove('block_1_anim')
    }


    if (document.querySelector('.block_2').offsetTop <= WindowCenter) {
        document.querySelector('.block_2').classList.add('block_2_anim')
    } else {
        // document.querySelector('.block_2').classList.remove('block_2_anim')
    }



    if (document.querySelector('.block_3').offsetTop  <= WindowCenter) {
        document.querySelector('.block_3').classList.add('block_3_anim')
    } else {
        // document.querySelector('.block_3').classList.remove('block_3_anim')
    }


    if (document.querySelector('.block_4').offsetTop <= WindowCenter) {
        document.querySelector('.block_4').classList.add('block_4_anim')
    } else {
        // document.querySelector('.block_4').classList.remove('block_4_anim')
    }

if (document.querySelector('.third_h1').offsetTop  <= WindowCenter2) {
    document.querySelector('.third_h1').classList.add('third_h1_scale')

}


if (document.querySelector('.third_p').offsetTop  <= WindowCenter2) {
    document.querySelector('.third_p').classList.add('third_p_scale')

}


if (document.querySelector('.hi_block1').offsetTop <= WindowCenter2) {
    document.querySelector('.hi_block1').classList.add('hi_block1_transform')
}

if (document.querySelector('.hi_block2').offsetTop <= WindowCenter2) {
    document.querySelector('.hi_block2').classList.add('hi_block2_transform')
}

}



document.onscroll = firstBlocksAnimation
document.onresize = firstBlocksAnimation

console.log('text' , 'text2')