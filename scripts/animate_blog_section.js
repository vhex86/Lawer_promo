let divElement = document.getElementById('Blog');
let imgElement = document.createElement('img');

imgElement.src = './img/like.svg';

function placeImageRandomly() {
    // Получение размеров и положения div
    var divWidth = divElement.offsetWidth;
    var divHeight = divElement.offsetHeight;
    var divLeft = divElement.offsetLeft;
    var divTop = divElement.offsetTop;
  
    // Вычисление случайных координат для изображения
    var randomLeft = Math.random() * divWidth;
    var randomTop = Math.random() * divHeight;
  
    // Установка позиции изображения
    imgElement.style.position = 'absolute';
    imgElement.style.left = divLeft + randomLeft + 'px';
    imgElement.style.top = divTop + randomTop + 'px';
  
    // Добавление изображения в div
    divElement.appendChild(imgElement);
  }
  


let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        // Если элемент полностью попал в область видимости
        alert('Common!');
       
        placeImageRandomly();




      }
    });
  }, { threshold: 1 } ); // значение 1 в параметре threshold означает, что событие "пересечение" будет срабатывать только тогда, когда элемент полностью видим внутри наблюдаемой области (intersectionRatio равна 1). 
  
  let targetElement = document.querySelector('.button_blog');
  observer.observe(targetElement);
  