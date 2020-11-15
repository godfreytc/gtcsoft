const leftbtn=document.getElementById("leftbtn");
const rightbtn=document.getElementById("rightbtn");
const imgmynotes=document.getElementById("imgview");

const leftbtn1=document.getElementById("leftbtn1");
const rightbtn1=document.getElementById("rightbtn1");
const imgsh=document.getElementById("imgview1");

const mynotespiks=["./piks/android/mynotes/mn0.png","./piks/android/mynotes/mn.png","./piks/android/mynotes/mn1.png",
                    "./piks/android/mynotes/mn2.png"];

const shpiks=["./piks/android/sh/sh.png","./piks/android/sh/sh1.png","./piks/android/sh/sh2.png",
            "./piks/android/sh/sh3.png","./piks/android/sh/sh4.png","./piks/android/sh/sh5.png","./piks/android/sh/sh6.png"];

let prev=0, next=1;
 leftbtn.addEventListener("click",()=>{
    imgmynotes.setAttribute("src",mynotespiks[prev])
    if(prev>=1){
        prev--;
        next=prev+2;
    }
    else{
        imgmynotes.setAttribute("src",mynotespiks[0]);
        next=1;
    }
    
 });

 rightbtn.addEventListener("click", ()=>{
    imgmynotes.setAttribute("src",mynotespiks[next]);
    
    if(next<3){
        prev=next-1;
        next++;
    }
    else {
        imgmynotes.setAttribute("src",mynotespiks[mynotespiks.length-1]);
        prev=2;
    }
 });

 leftbtn1.addEventListener("click",()=>{
    imgsh.setAttribute("src",shpiks[prev])
    if(prev>=1){
        prev--;
        next=prev+2;
    }
    else{
        imgsh.setAttribute("src",shpiks[0]);
        next=1;
    }
    
 });

 rightbtn1.addEventListener("click", ()=>{
    imgsh.setAttribute("src",shpiks[next]);
    
    if(next<6){
        prev=next-1;
        next++;
    }
    else {
        imgsh.setAttribute("src",shpiks[mynotespiks.length-1]);
        prev=5;
    }
 });