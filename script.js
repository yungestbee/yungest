
       const toggle = document.getElementById('flexSwitchCheckChecked');
       const body = document.querySelector('body');
       const accord = document.querySelector('.accordion-body')
      const link = document.querySelector(".link")

       toggle.addEventListener('change', function(){
       if(toggle.checked){
        body.classList.add('active')
        accord.classList.add('bg-dark')
        accord.classList.add('text-light')
       }
       else{
        body.classList.remove('active')
        accord.classList.remove('bg-dark')
        accord.classList.remove('text-light')
    }});

      const emptName = document.getElementById("name-input")
      const emptMail =  document.getElementById("mail.input")
      const btn = document.getElementById("btn-click")

      btn.addEventListener("click", function(){
         if ((emptName.value == "") || (emptMail.value == "")) {
            alert("Please fill the empty boxes ")
         }
      })

      const dropL = document.getElementById("dropdown")

      btn.addEventListener("click", function(){
         if ((dropL.value == "")) {
            alert("Select a Purpose ")
         }
      })


      btn.addEventListener("click", function(){
         if ((emptName.value != "") && (emptMail.value != "") && (dropL.value != "")) {
            alert("Details sent, await my response")
         }
      })



