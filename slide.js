let offset  = 0; 
const sliderLine = document.querySelector('.slider-line');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');
sliderNext.addEventListener('click',function(){
   offset += 256;
   if(offset > 768){
      offset = 0;
   }
   sliderLine.style.left = -offset+'px';
})
sliderPrev.addEventListener('click',function(){
   offset -= 256;
   if(offset < 0){
      offset = 768;
   }
   sliderLine.style.left = -offset+'px';
})