
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
                  const targetBox = document.querySelector(`.${targetBoxClass}`);
                 // переменная для хранения предыдущего выбранного блока
                  // изменяем стиль для активного блока
                  if (prevBlock) {
                    prevBlock.style.backgroundColor = '';
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
                  const leftOffset = targetBox.offsetLeft - menuWidth ;
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
              
              // добавляем слушателей на жесты к элементам box 
                 parent.addEventListener('touchstart', handleTouchStart, true);
                parent.addEventListener('touchmove', handleTouchMove, true);
                parent.addEventListener('touchend', handleTouchEnd, true);
              
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
                if (dist > 0) {
                  console.log('Жест вправо');
                  
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
              elementsBox.forEach((box) => {
                box.removeEventListener('touchstart', handleTouchStart, true);
                box.removeEventListener('touchmove', handleTouchMove, true);
                box.removeEventListener('touchend', handleTouchEnd, true);
              });


          }    
      }
  }
