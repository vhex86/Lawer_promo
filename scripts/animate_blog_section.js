


let MatrixWithImgSrc = [ './img/camera.svg', ' ./img/like.svg' , './img/video.svg', './img/man.svg', './img/bubble.svg' ];

let interval;
let Blog = document.querySelector('#Blog');

function placeImageRandomly() {

    interval = setInterval(() => {
   

        let imgElement = document.createElement('img');
        let randomElement = Math.floor(Math.random() * 5);
   
        imgElement.src = MatrixWithImgSrc[randomElement];
    
        let divWidth = Blog.offsetWidth;
        let divHeight = Blog.offsetHeight;

        let randomLeft = divWidth - (Math.random() * divWidth);
        let randomTop = divHeight - (Math.random() * divHeight);

        imgElement.style.position = 'absolute';
        imgElement.style.top = randomTop + 'px';
        imgElement.style.left = randomLeft + 'px';

        Blog.appendChild(imgElement);
  
        setTimeout(() => {
            if (Blog.contains(imgElement)) {
                Blog.removeChild(imgElement); // Удаление изображения из контейнера, если оно является дочерним элементом
            }

     
        }, 2000); // Задержка перед удалением

    }, 500); 

}
function removeImagesInBlogSection() {
    let imgElements = document.querySelectorAll('#Blog img');
    imgElements.forEach(function(imgElement) {
        imgElement.remove();
    });
}




let observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio === 1 )  {
                placeImageRandomly();

            }
            else {

                removeImagesInBlogSection();
                clearInterval(interval); 

            }


        });
    }, { threshold: 1 });

let targetElement = document.querySelector('.button_blog');
observer.observe(targetElement);

