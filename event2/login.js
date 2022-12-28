(function () {
    'use strict'
 
 //로그인창 구연
 const $modal_section=document.querySelector('.modal-section')
 const $login=document.querySelector('.login');
 const $close=document.querySelector('#close');
 const $loginDN=document.querySelector('.loginDN');
 const $bodyMain=document.querySelector('.bodyMain')
 
 $login.addEventListener('click',e=>{
     $modal_section.classList.toggle('loginDN')
     $bodyMain.style.opacity="0.3";
     $bodyMain.classList.toggle('stop-scrolling')
     if($modal_section.classList.length==2){
         $bodyMain.style.opacity="1";
     }
 })
 
 $close.addEventListener('click',e=>{
     $modal_section.classList.toggle('loginDN');
     $bodyMain.style.opacity="1";
 })
 
    const $modal-close=document.querySelector('.modal-close')
    $modal - close.addEventListener('click', e => {
        
    })
    
 })();