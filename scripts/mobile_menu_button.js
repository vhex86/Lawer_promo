function main_button() {
    const button = document.getElementById('main_button');
    let bars = document.getElementById('main_button_bars');
    let menu = document.querySelector('.mobile_menu');
    let hidden_menu = document.querySelectorAll('.listener_hidden');

    let current = document.getElementsByClassName("active");
    let mediaQuery = window.matchMedia('(min-width: 1024px) and (orientation:landscape)' );
   let HelloJohn = document.querySelector('.hello_john');
    let MobileNumber = document.querySelector('.number_telephone_mobile');
let WideScreenSocial = document.querySelector('.wide_screen_social');
let AvatarJohn = document.querySelector('.avatar_john');
let MainSection = document.querySelector('.main');
let ShortResume = document.querySelector('.short_resume');

    function handleClick() {
        current[0].className = current[0].className.replace("active", " ");
        this.className += " active";
            hide_menu();
    }
    function handleClickForDesktop() {
        current[0].className = current[0].className.replace("active", " ");
        this.className += " active";
 
         
    }

    hidden_menu.forEach((a) => {
        a.addEventListener('click', handleClick);

    });

    function hide_menu() {


        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
        menu.style.transform = 'translatey(-120%)';
    }


    button.onclick = function () {


        if (bars.classList.contains('fa-bars')) {


 

            bars.classList.remove('fa-bars');


            bars.classList.add('fa-xmark');

            menu.style.transform = 'translatey(0%)';



        } else {

            hide_menu();
        }
    }
  
     
    function handleTabletChange(e) {
      if (e.matches ) {
        //console.log('Media Query Matched!');
      
         HelloJohn.prepend(MobileNumber); //переносим мобильный номер в секцию Hello John
          
         MainSection.prepend(AvatarJohn);
           
        bars.classList.remove('fa-bars');


        bars.classList.add('fa-xmark');

        menu.style.transform = 'translatey(0%)';
        hidden_menu.forEach((a) => {
            a.removeEventListener('click', handleClick);
    
        });
        hidden_menu.forEach((a) => {
            a.addEventListener('click', handleClickForDesktop);
    
        });
       
    

      }
     if (!e.matches ) { 
        hide_menu();
         menu.insertBefore(MobileNumber,WideScreenSocial);
         HelloJohn.insertBefore(AvatarJohn,ShortResume);
         hidden_menu.forEach((a) => {
            a.removeEventListener('click', handleClickForDesktop);
    
        });
         hidden_menu.forEach((a) => {
            a.addEventListener('click', handleClick);
    
        });
     }  
    
    }
    
    mediaQuery.addListener(handleTabletChange);
    
    handleTabletChange(mediaQuery );
}

main_button();



