
(()=>{
    var menu = document.querySelector('ul'),
        menulink =document.getElementById('menu'),
        greeting = document.getElementById('greeting'),
        findmorelink =document.getElementById('more');
        
        /***************TOGGLE MENU************/
        menulink.addEventListener('click',(e)=>{
            menu.classList.toggle('active');
            e.preventDefault();
        })
        /***************FIND OUT MORE BUTTON*******/
        findmorelink.addEventListener('click',(e)=>{
            window.open('http://godfreytc.co/services','_self');
            e.preventDefault();
        })

        /***************GREETING DEPENDS ON TIME************/
        var greet =()=>{
            var currentTime = new Date();
            var hourNow = currentTime.getHours();

            if(hourNow > 18){
                greeting.innerText = 'Good Evening';
            }
            else if(hourNow > 12){
                greeting.innerText = 'Good Afternoon';
            }
            else{
                greeting.innerText = 'Good Morning';
            }
        }

        setInterval(greet,1000);

})();

