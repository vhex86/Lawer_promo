
$(".nano").nanoScroller({ sliderMaxHeight: 300 }); //максимальная высота нано скролера


function nanoScrollChangeMedia() {


    let mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation:landscape)');
    mediaQuery.addListener(handleTabletChange);
  
    handleTabletChange(mediaQuery);
    function handleTabletChange(e) {
     
if (e.matches){



const restorableNano = document.querySelectorAll('div.restorable_nano');
const restorableNanoContent  = document.querySelectorAll('div.restorable_nano_content');

for (let i = 0; i < restorableNano.length; i++) {
    restorableNano[i].classList.add('nano');

   }

   for (let i = 0; i < restorableNanoContent.length; i++) {
    restorableNanoContent[i].classList.add('nano-content');

   }
$(".nano").nanoScroller();

    //возвращаем классы обратно 
    

}
else {

   
    const divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('nano');
        divs[i].classList.remove('nano-content');
      }


}
    }
}



 nanoScrollChangeMedia();