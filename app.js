const btns = document.querySelectorAll(".btn"); 
const modal = document.getElementById('modal');
const close = document.getElementById('close_btn');
const submit = document.querySelector(".submit"); 
//console.log(submit);

btns.forEach(btn => {
   btn.addEventListener('click', function() {
      modal.classList.add('modal_opened')        
   })
})

close.addEventListener('click', function() {
   modal.classList.remove('modal_opened') 
})

submit.addEventListener('click',async evt =>{
   evt.preventDefault()
   //console.log(evt)
   const formData = new FormData() 
   formData.append('name',  document.querySelector('#name').value)
   formData.append('phone', document.querySelector('#phone').value)
    
   let response = await fetch('serv.php', {
      method: 'POST',
      body: formData,
   })
   
   let result = await response.json();
   console.log(result.res)
   if(result.res == 'falid'){
      let h2 = document.querySelector('.modal_content h2');
      h2.textContent = "Не накалывай сервер"
   }

}) 