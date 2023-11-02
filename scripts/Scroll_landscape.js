
document.addEventListener('DOMContentLoaded', function() {

    scrollMain();
    
});
  
function scrollMain (){
    const parent = document.querySelector('#parent-container');
    let mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation:landscape)');
    const image = document.querySelector('#main_photo');
    const imageContainer = document.querySelector('.avatar_john'); 
    handleTabletChange(mediaQuery); 
    mediaQuery.addListener(handleTabletChange);
  
    let startX = 0; // переменные для отслеживания перемещения пальца
    let startY = 0;
    let dist = 0;
      
    let prevBlock = null; 


    function handleTouchStart(event) {
        const firstTouch = event.touches[0];
        startX = firstTouch.clientX;
        startY = firstTouch.clientY;
    }

    function handleTouchMove(event) {
        if (!startX || !startY) {
            return;
        }
      
        const touch = event.touches[0];
        const currentX = touch.clientX;
        const currentY = touch.clientY;
        const distX = currentX - startX;
        const distY = currentY - startY;
      
        // Проверяем, если перемещение по оси Y больше, чем по оси X, то игнорируем жест
        if (Math.abs(distY) > Math.abs(distX)) {
            startX = 0;
            startY = 0;
            dist = 0;
            return;
        }
      
        dist = distX;
    }

    function handleTouchEnd() {
        const menu = document.querySelector('.mobile_menu');
        const menuWidth = menu.offsetWidth;
      
        let currentBox;
        let targetBoxClass;
        let menuItems = document.querySelectorAll('#menu li a');
        let leftOffset; 
      
        function LocatePositionInSiteForMoveRight(){
            for (let i = 0; i < menuItems.length; i++) {
                let menuItem = menuItems[i];
                if (menuItem.classList.contains('active')) {
                    currentBox = menuItem.getAttribute('href').slice(1);
                    let PrevCurrentBox = document.querySelector(`.${currentBox}`); //бокс с которого мы уходим
                   
                    if (i > 0) {
                        targetBoxClass = menuItems[i - 1].getAttribute('href').slice(1); // бокс который должен стать активным при перематывании
                        menuItems[i - 1].classList.add('active');  
                        menuItems[i].classList.remove('active');  
           
          
                        let PrevTargetBoxClass = document.querySelector(`.${targetBoxClass}`);
                        prevBlock = PrevTargetBoxClass;
         
                        if (PrevTargetBoxClass.classList.contains('box1')) {
                            PrevTargetBoxClass.style.backgroundColor = '';
                            PrevCurrentBox.style.backgroundColor = ''; 
                            image.style.transform = 'rotate(-8deg)';
                            imageContainer.style.left = null;
          
                        } 
                        else {
                            PrevTargetBoxClass.style.backgroundColor = '#ecefeb';
                            PrevCurrentBox.style.backgroundColor = '';
                        }       


                        leftOffset = PrevTargetBoxClass.offsetLeft - menuWidth;
                        //  console.log(leftOffset);
                        parent.scrollTo({
                            left: leftOffset,
                            top: 0,
                            behavior: 'smooth'
                        });


                    } else {
                        console.log('Первый элемент не имеет предыдущего элемента.');
                    }
      
                    break;
                }
            }}
        function LocatePositionInSiteForMoveLeft(){
            for (let i = 0; i < menuItems.length; i++) {
                let menuItem = menuItems[i];
                if (menuItem.classList.contains('active')) {
                    currentBox = menuItem.getAttribute('href').slice(1);
                    let PrevCurrentBox = document.querySelector(`.${currentBox}`); //бокс с которого мы уходим
      
                    if (i < menuItems.length) {
                        targetBoxClass = menuItems[i + 1].getAttribute('href').slice(1); // бокс который должен стать активным при перематывании
                        menuItems[i + 1].classList.add('active');  
                        menuItems[i].classList.remove('active');  
       
      
                        let PrevTargetBoxClass = document.querySelector(`.${targetBoxClass}`);
                        prevBlock = PrevTargetBoxClass;
     
                        if (PrevTargetBoxClass.classList.contains('box1')) {
                            PrevTargetBoxClass.style.backgroundColor = '';
                            PrevCurrentBox.style.backgroundColor = ''; 
                            image.style.transform = 'rotate(-8deg)';
                            imageContainer.style.left = null;
      
                        } 
                        else {
                            PrevTargetBoxClass.style.backgroundColor = '#ecefeb';
                            PrevCurrentBox.style.backgroundColor = '';
                            image.style.transform = 'scaleX(-1)';
                            setTimeout(()=> { imageContainer.style.left = '-8rem';},1);
                        }       


                        leftOffset = PrevTargetBoxClass.offsetLeft - menuWidth;
                        //  console.log(leftOffset);
                        parent.scrollTo({
                            left: leftOffset,
                            top: 0,
                            behavior: 'smooth'
                        });


                    } else {
                        console.log('Первый элемент не имеет предыдущего элемента.');
                    }
  
                    break;
                }
            }
          


        } 


      



        if (dist > 0) {
            // console.log('Жест вправо');
            LocatePositionInSiteForMoveRight();
            
            // Дополнительные действия при жесте вправо
        } 
        else if (dist < 0) {
            console.log('Жест влево');
            LocatePositionInSiteForMoveLeft();
            // Дополнительные действия при жесте влево
        }
        startX = 0;
        startY = 0;
        dist = 0;
    }
      
      
    function handleTabletChange(e){
             
        if(e.matches ) {
              
            // console.log("Разрешение больше 1024 и ориентация экрана landscape");
            parent.addEventListener('touchstart', handleTouchStart, false);
            parent.addEventListener('touchmove', handleTouchMove, false);
            parent.addEventListener('touchend', handleTouchEnd, false);
            /*********************  Промотка до выбранного блока при смене разрешения*/
              
            //выбираем родительский контейнер
            const activeLink = document.querySelector('.active'); 
            const hrefValue = activeLink.getAttribute('href').slice(1);
            const targetBoxResize = document.querySelector(`.${hrefValue}`);
            const menu = document.querySelector('.mobile_menu');
            
            parent.scrollTo({
                left: targetBoxResize.offsetLeft - menu.offsetWidth,
                top: 0,
                behavior: 'smooth'
            });
    
            if (targetBoxResize.classList.contains('box1')  ) { targetBoxResize.style.backgroundColor = '';} //если выбран первый блок при смене разрешения не менять фон 
            else { targetBoxResize.style.backgroundColor = '#ecefeb';
          
             
          
            } //Иначе если выбран другой блок меняем фон 
           

            /*********************************** */
                                                  
                
              
            document.querySelectorAll('.menu a').forEach(link => {

               

                link.addEventListener('click', e => {
                    e.preventDefault();
                    const targetBoxClass = link.getAttribute('href').slice(1);
                    const targetBox = document.querySelector(`.${targetBoxClass}`); // переменная для хранения предыдущего выбранного блока
                  
                    if (prevBlock) {
                        prevBlock.style.backgroundColor = ''; // изменяем стиль для активного блока
                    }
                    // console.log(prevBlock);
                    prevBlock = targetBox;
                  
                    if (targetBox.classList.contains('box1')) {
                        targetBox.style.backgroundColor = '';

                    } 
                    else {
                    
                        targetBox.style.backgroundColor = '#ecefeb';
                    
                    }    
                 
                    // const menu = document.querySelector('.mobile_menu');
                    const menuWidth = menu.offsetWidth;
                    const leftOffset = targetBox.offsetLeft - menuWidth;
                    parent.scrollTo({
                        left: leftOffset,
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
        }
  


        else {



            parent.removeEventListener('touchstart', handleTouchStart,false);
            parent.removeEventListener('touchmove', handleTouchMove,false);
            parent.removeEventListener('touchend', handleTouchEnd,false);

            
            /////////////
            const activeLink = document.querySelector('.active');
            const targetClass = activeLink.getAttribute('href').slice(1); // получение имени класса
            const targetBlock = document.querySelector(`.${targetClass}`);
            targetBlock.style.backgroundColor = '';
            targetBlock.scrollIntoView({ behavior: 'smooth' });
           
            const menuLinks = document.querySelectorAll('.menu a');
                
            menuLinks.forEach(link => { 
                link.addEventListener('click', (event) => {
                    event.preventDefault(); // отмена стандартного поведения ссылки
                    const targetClass = link.getAttribute('href').slice(1); // получение имени класса
                    const targetBlock = document.querySelector(`.${targetClass}`); // поиск первого элемента с указанным классом
                    targetBlock.style.backgroundColor = ''; // при разрешении меньше 1024 не меняем цвет фона блоков
                    targetBlock.scrollIntoView({ behavior: 'smooth' }); // проматываем до выбранного в меню блока - плавно.
                  
                });
            });
                  

              


        }    
    }
}
