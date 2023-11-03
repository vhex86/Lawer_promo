let observerForCommunicate = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4  )  {
               
                targetElementForCommunicate.classList.add('img-communicate-animate');
                targetElementForCommunicate.classList.remove('img-communicate-animate-reverse');
            }
            else {
                targetElementForCommunicate.classList.remove('img-communicate-animate');
                targetElementForCommunicate.classList.add('img-communicate-animate-reverse');
               
            }


        });
    }, { threshold: 0.4  });

let observerForKnowledge = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4 )  {
                   
                targetElementForKnowledge.classList.add('img-knowledge-animate');
                targetElementForKnowledge.classList.remove('img-knowledge-animate-reverse');
            }
            else {
                targetElementForKnowledge.classList.remove('img-knowledge-animate');
                targetElementForKnowledge.classList.add('img-knowledge-animate-reverse');
                   
            }
    
    
        });
    }, { threshold: 0.4  });
    
let observerForHeart = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4 )  {
                       
                targetElementForHeart.classList.add('img-heart-animate');
                targetElementForHeart.classList.remove('img-heart-animate-reverse');
            }
            else {
                targetElementForHeart.classList.remove('img-heart-animate');
                targetElementForHeart.classList.add('img-heart-animate-reverse');
                       
            }
        
        
        });
    }, { threshold: 0.4  });
        

    


let targetElementForCommunicate = document.querySelector('.img-communicate');
let targetTextForCommunicate = document.querySelector('.text-communicate');

let targetElementForKnowledge = document.querySelector('.img-knowledge');
let targetTextForKnowledge = document.querySelector('.text-knowledge');

let targetElementForHeart = document.querySelector('.img-heart');
let targetTextForHeart = document.querySelector('.text-heart');


observerForCommunicate.observe(targetTextForCommunicate);
observerForKnowledge.observe(targetTextForKnowledge);
observerForHeart.observe(targetTextForHeart);
