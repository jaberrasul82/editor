var run=document.getElementById("run");

var remove=document.getElementById("remove");

var textarea=document.getElementById("textarea");

var result=document.getElementById("textarea-result");




run.addEventListener("click",()=>{

result.innerHTML=textarea.value;

localStorage.setItem("RESULT",textarea.value);

});


remove.addEventListener("click",()=>{

result.innerHTML="";

});

onload =()=>{
     textarea.value=localStorage.getItem("RESULT");
};
