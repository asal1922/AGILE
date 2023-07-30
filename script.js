let butten1=document.querySelector(".header-icon");
let menu=document.querySelector(".menu");
let X=document.querySelector('.X')
butten1.addEventListener('click',function(){
    menu.style.left='0';
    X.style.display='block'
    
  }
  )
  X.addEventListener('click',function(){
    menu.style.left='-100%';
    X.style.display='none'
  })
