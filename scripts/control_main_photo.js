
controlMainPhoto();
function controlMainPhoto(){
    let mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation:landscape)');
    
    const menuItems = document.querySelectorAll('#menu li:not(:first-child) a');
    const image = document.querySelector('#main_photo');
    const imageContainer = document.querySelector('.avatar_john');

     
    menuItems.forEach( item => {
        item.addEventListener('click', () => {
            image.style.transform = 'scaleX(-1)';
            setTimeout(()=> { imageContainer.style.left = '-8rem';},1);
        });
      });
      
      const firstMenuItem = document.querySelector('#menu a');
      firstMenuItem.addEventListener('click', () => {
        image.style.transform = 'rotate(-8deg)';
        imageContainer.style.left = null;
      });


    mediaQuery.addListener(handleTabletChange);

   handleTabletChange(mediaQuery);

    function handleTabletChange(e){
      
        if(e.matches ) {
   
               
           
            // console.log(menuItems);
        

        }
    else {
        console.log('Удаляем слушателя');
      
    }
    
    }
}



