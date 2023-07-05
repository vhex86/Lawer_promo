
document.addEventListener('DOMContentLoaded', function() {

    scrollMain();
    
  });
  
  function scrollMain (){
  
      let mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation:landscape)');
      handleTabletChange(mediaQuery); // добавляем эту строку
      mediaQuery.addListener(handleTabletChange);
  
      function handleTabletChange(e){
      
       
          if(e.matches ) {
              
              // console.log("Разрешение больше 1024 и ориентация экрана landscape");
             
              /*********************  Промотка до выбранного блока при смене разрешения*/
              const parent = document.querySelector('#parent-container'); //выбираем родительский контейнер
              const activeLink = document.querySelector('.active'); 

              const hrefValue = activeLink.getAttribute('href').slice(1);
              const targetBoxResize = document.querySelector(`.${hrefValue}`);
              
              const menu = document.querySelector('.mobile_menu');
              const menuWidth = menu.offsetWidth;
              const leftOffset = targetBoxResize.offsetLeft - menuWidth ;
              if (targetBoxResize.classList.contains('box1')  ) { targetBoxResize.style.backgroundColor = '';} //если выбран первый блок при смене разрешения не менять фон 
              else { targetBoxResize.style.backgroundColor = '#ecefeb';} //Иначе если выбран другой блок меняем фон 
           

              /*********************************** */
                                     
              let prevBlock = null; //статус предыдущего выбранного блока, если блок не выбран то псевдо false 
                
              
              document.querySelectorAll('.menu a').forEach(link => {
                link.addEventListener('click', e => {
                  e.preventDefault();
                  const targetBoxClass = link.getAttribute('href').slice(1);
                  const targetBox = document.querySelector(`.${targetBoxClass}`); // переменная для хранения предыдущего выбранного блока
                  
                  if (prevBlock) {
                    prevBlock.style.backgroundColor = ''; // изменяем стиль для активного блока
                  }
                  prevBlock = targetBox;
                  
                  if (targetBox.classList.contains('box1')) {
                    targetBox.style.backgroundColor = '';
                  } 
                  else {
                    targetBox.style.backgroundColor = "#ecefeb";
                  }    
                 
                  const menu = document.querySelector('.mobile_menu');
                  const menuWidth = menu.offsetWidth;
                  const leftOffset = targetBox.offsetLeft - menuWidth;
                  parent.scrollTo({
                    left: leftOffset,
                    top: 0,
                    behavior: 'smooth'
                  });
                });
              });


              ///////////****  обработка жестов влево-вправо на элементах box */
              // выбираем все элементы box
              let startX = 0; // переменные для отслеживания перемещения пальца
              let startY = 0;
              let dist = 0;
              // Удаляем существующие слушатели событий touchstart, touchmove и touchend
parent.removeEventListener('touchstart', handleTouchStart,false);
parent.removeEventListener('touchmove', handleTouchMove,false);
parent.removeEventListener('touchend', handleTouchEnd,false);


              // добавляем слушателей на жесты к элементам box 
                 parent.addEventListener('touchstart', handleTouchStart, false);
                parent.addEventListener('touchmove', handleTouchMove, false);
                parent.addEventListener('touchend', handleTouchEnd, false);
              
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
                // let targetBox;
                let leftOffset; 

                // let countBox = menuItems.length;
                // console.log('Количество полученных элементов:', countBox);
              function LocatePositionInSiteForMoveRight(){
                for (var i = 0; i < menuItems.length; i++) {
                let menuItem = menuItems[i];
                if (menuItem.classList.contains('active')) {
                  currentBox = menuItem.getAttribute('href').slice(1);
                 // console.log('Текущий элемент:', currentBox);
                  let PrevCurrentBox = document.querySelector(`.${currentBox}`); //бокс с которого мы уходим
                  if (i > 0) {
                    targetBoxClass = menuItems[i - 1].getAttribute('href').slice(1); // бокс который должен стать активным при перематывании
                   // console.log('Предыдущий элемент:', targetBoxClass);
                   
                   
                  
                    let PrevTargetBoxClass = document.querySelector(`.${targetBoxClass}`);
                     if (PrevTargetBoxClass.classList.contains('box1')) {
                    PrevTargetBoxClass.style.backgroundColor = '';
                    PrevCurrentBox.style.backgroundColor = ''; 
                  } 
                  else {
                    PrevTargetBoxClass.style.backgroundColor = "#ecefeb";
                    PrevCurrentBox.style.backgroundColor = '';
                  }       


                    leftOffset = PrevTargetBoxClass.offsetLeft - menuWidth;
                     console.log(leftOffset);
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

              function moveActiveClassRightMove() {
                const menuItems = document.querySelectorAll('#menu li a');
              
                for (let i = 0; i < menuItems.length; i++) {
                  const menuItem = menuItems[i];
              
                  if (menuItem.classList.contains('active')) {
                    // Добавляем условие для проверки, что не является первым пунктом меню
                    if (i > 0) {
                      menuItem.classList.remove('active');
                      const previousMenuItem = menuItems[i - 1];
                      previousMenuItem.classList.add('active');
                    }
              
                    break;
                  }
                }
              }
               
              



                if (dist > 0) {
                  console.log('Жест вправо');

                   LocatePositionInSiteForMoveRight();
                   moveActiveClassRightMove();
                    
                  

                  // Дополнительные действия при жесте вправо
                

                } else if (dist < 0) {
                  console.log('Жест влево');
              
                  // Дополнительные действия при жесте влево
                }
              
                startX = 0;
                startY = 0;
                dist = 0;
              }
              
              /////////// ****  *************************/////////
 



            }
  


          else {



            // elementsBox.forEach((box) => {
            //   box.removeEventListener('touchstart', handleTouchStart, false);
            //   box.removeEventListener('touchmove', handleTouchMove, false);
            //   box.removeEventListener('touchend', handleTouchEnd, false);
            // }); 
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
                  

              const elementsBox = document.querySelectorAll('[class*="box"]'); // выбираем все элементы с классом box
              // удаляем слушатели жестов
              


          }    
      }
  }
