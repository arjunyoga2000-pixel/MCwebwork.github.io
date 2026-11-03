(function(){
var CONFIG={whatsapp:"918904323462",endpoint:""}; /* optional: paste your Formspree URL in endpoint */
var y=document.getElementById("y");if(y)y.textContent=new Date().getFullYear();
var b=document.querySelector(".menu"),n=document.getElementById("nv");
if(b&&n)b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",String(o))});
document.querySelectorAll("form[data-lead]").forEach(function(f){
 f.addEventListener("submit",function(e){e.preventDefault();
  if(f.querySelector(".hp").value)return;
  var t="New enquiry - Munnade Creative Webwork\n\n";
  f.querySelectorAll("input,select,textarea").forEach(function(el){if(el.classList.contains("hp")||!el.name)return;t+=el.name+": "+(el.value||"-")+"\n"});
  var ok=f.parentNode.querySelector(".ok");
  function done(){f.style.display="none";ok.style.display="block"}
  function wa(){window.open("https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent(t.slice(0,1500)),"_blank","noopener");done()}
  if(!CONFIG.endpoint){wa();return}
  fetch(CONFIG.endpoint,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({message:t})}).then(function(r){if(!r.ok)throw 0;done()}).catch(wa)})});
})();
