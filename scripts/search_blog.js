function main_search() {
    const searchButton = document.getElementById('search_blog_button');
    const nameBlog = document.getElementById('blog_name');
    const searchBlogInputText = document.getElementById('input_search_text');

    function hide_search_input(){
        nameBlog.style.display = "flex";
   
        setTimeout(()=> { nameBlog.style.opacity = 1},1);
        searchBlogInputText.style.display = "none";
        setTimeout(()=> { searchBlogInputText.style.opacity = 0},1);  
     }
    searchButton.onclick = function() {
        if ( getComputedStyle(searchBlogInputText).display == 'none' ) {
            nameBlog.style.display = "none";
            setTimeout(()=> { nameBlog.style.opacity = 0},1);
            
            searchBlogInputText.style.display = "flex";
            setTimeout(()=> { searchBlogInputText.style.opacity = 1},1);
           
        }
        else {
      hide_search_input()
        }


    } 

    window.addEventListener('scroll', function() {
       hide_search_input();
      });
       

}
main_search();