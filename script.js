
       const toggle = document.getElementById('flexSwitchCheckChecked');
       const body = document.querySelector('body');

       toggle.addEventListener('change', function(){
       if(toggle.checked){
        body.classList.add('active')
       }
       else{
        body.classList.remove('active')
       }
    });


