
const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){

 tablinks.forEach( tablink,()=>{

     tablink.classList.remove("active-link");

 });

 tabcontents.forEach( tabcontent,()=>{

     tabcontent.classList.remove("active-link");

 });
 
 event.currentTarget.classList.add("active-link");
 
 document.getElementById(tabname).classList.add("active-tab");
}


  var sidemeu=document.getElementById("sidemenu");
  function openmenu(){
   sidemeu.style.right="0";
  }
  function closemenu(){
   sidemeu.style.right="-200px";
  }


// ------------------Google Form----------------->
 const scriptURL = 'https://script.google.com/macros/s/AKfycbxkGXSzDR9Oppmxe5ze-2DLpPOP0OemSyiXNeXeJHZd5rRpv5oWxft7JaGkhUaKxlU9/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg= document.getElementById("msg");
 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
       msg.innerHTML="Message sent successfully";
       setTimeout(function(){
         msg.innerHTML=""
       },5000)
       form.reset();
     })
     .catch(error => console.error('Error!', error.message))
 });