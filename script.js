let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(event);
    if(!name){
        console.log('Please, Enter Your Name');
    };
     if(!email){
        console.log('Please, Enter Your Email');
    };
  
})