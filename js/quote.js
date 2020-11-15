const clienttype = document.getElementById("client");
const companydiv=document.getElementById("company-details");
const submit=document.getElementById("submit-req-quote");
const message=document.getElementById("submitted");
const form=document.getElementById("quote").elements;

//disable input
for(var i=1;i<form.length;i++){
    document.getElementById(form[i].id).disabled=true;
}

document.getElementById("tempmsg").style.display="inline";


client.addEventListener("click",()=>{
    const client=clienttype.options[clienttype.selectedIndex].value;
    if(client!="Company"){
        companydiv.style.display="none";
    }
    else{
        companydiv.style.display="inline";
    }
   
});

/*
submit.addEventListener("click",(e)=>{ 
    e.preventDefault();
    
    // for(var i=0;i<form.length;i++){
    //     else msg+=form[i].name;
    // }

    console.log(msg);
    //window.open(`mailto:cgodfreytc@gmail.com?subject=Quotation application&body=${msg}`,"_self");
    
    message.innerHTML="Your application has been received. You will recieve an email with more details. Thank you for getting in touch.";
    message.style.color="green";
});*/