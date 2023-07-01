let observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        // Если элемент полностью попал в область видимости
        // alert('Common!');
       





      }
    });
  }, { threshold: 1 } ); // значение 1 в параметре threshold означает, что событие "пересечение" будет срабатывать только тогда, когда элемент полностью видим внутри наблюдаемой области (intersectionRatio равна 1). 
  
  let targetElement = document.querySelector('.button_blog');
  observer.observe(targetElement);
  