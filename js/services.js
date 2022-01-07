
(()=>{
    var menu = document.querySelector('ul'),
        menulink =document.getElementById('menu'),
        buttons=document.querySelectorAll('button');
        
        /***************TOGGLE MENU************/
        menulink.addEventListener('click',(e)=>{
            menu.classList.toggle('active');
            e.preventDefault();
        })


        buttons.forEach(button =>{
            button.addEventListener('click',()=>{
                window.open("http://godfreytc.co/getquote/",'_self');}
            
            )
        })
    })();
