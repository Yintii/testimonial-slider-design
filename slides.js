const slides = document.querySelector('.slider').children;
var slide = 0;
for(i=0;i<slides.length; i++){
    console.log(`slides[${i}]: `, slides[i])
}

function rightScroll(){
    slide += 1;
    if(slide > slides.length - 1){
        slide = 0;
    }
    changeSlide(slide);
}

function leftScroll(){
    slide -= 1;
    if(slide < 0){
        slide = slides.length - 1;
    }
    changeSlide(slide);
}

function changeSlide(s){
    for(i=0;i<slides.length;i++){
        if(s != i){
            slides[i].toggleAttribute("hidden");
        }else{
            slides[i].removeAttribute("hidden");
        }
    }
}