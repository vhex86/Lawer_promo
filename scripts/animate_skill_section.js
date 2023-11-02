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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.6  )  {
                   
                targetElementForKnowledge.classList.add('img-knowledge-animate');
                // targetElementForKnowledge.classList.remove('');
            }
            else {
                targetElementForKnowledge.classList.remove('img-knowledge-animate');
                // targetElementForKnowledge.classList.add('');
                   
            }
    
    
        });
    }, { threshold: 0.6  });
    
    

    


let targetElementForCommunicate = document.querySelector('.img-communicate');
let targetElementForKnowledge = document.querySelector('.img-knowledge');


let targetTextForCommunicate = document.querySelector('.text-communicate');
let targetTextForKnowledge = document.querySelector('.text-knowledge');

observerForCommunicate.observe(targetTextForCommunicate);
observerForKnowledge.observe(targetTextForKnowledge);
