(function(window){
'use strict';
let preloader,main_wrapper;
preloader=document.querySelector('.preloader');
main_wrapper=document.querySelector('.grid-wrapper');
window.addEventListener('load',function(){
setTimeout(window_loaded(),200)
})

function window_loaded(){
 preloader.classList.add('active');
main_wrapper.classList.add('active');
}


})(window)