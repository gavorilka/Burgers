const btns = document.querySelectorAll(".btn"); 
const modal = document.getElementById('modal');
const close = document.getElementById('close_btn');


btns.forEach(btn => {
   btn.addEventListener('click', function() {
      modal.classList.add('modal_opened')        
   })
})

close.addEventListener('click', function() {
   modal.classList.remove('modal_opened') 
})
