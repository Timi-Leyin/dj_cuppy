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
// follow
const follow_btn=document.querySelector('.follow-btn');


follow_btn.addEventListener('click',function(){
    follow_btn.classList.toggle('active');
 
if(follow_btn.className=='follow-btn btn active'){
    follow_btn.innerText='Following'
}else{
    follow_btn.innerText='Follow'

}
})


const pop_up=document.querySelector('.popup');
const pop_up_bg=document.querySelector('.pop-up-bg');
const close_pop_up=document.querySelector('.popup .close');
const ellipsis=document.querySelector('.--icon-s');

function OpenPopUp(){
pop_up.classList.add('active');
pop_up_bg.classList.toString('active')
}
function ClosePopUp(){
pop_up.classList.remove('active');
}

ellipsis.onclick=()=>{
pop_up.classList.toggle('active');
pop_up_bg.classList.toggle('active')

}
close_pop_up.onclick=()=>{
    pop_up.classList.toggle('active');
pop_up_bg.classList.toggle('active')
}
pop_up_bg.onclick=()=>{
    pop_up.classList.toggle('active');
pop_up_bg.classList.toggle('active')
}

})(window)