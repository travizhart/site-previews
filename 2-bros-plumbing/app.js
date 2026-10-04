(function(){
  var t=document.querySelector('.nav-toggle'),l=document.getElementById('nav-list');
  if(t&&l){
    t.addEventListener('click',function(){var o=l.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
    l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');t.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&l.classList.contains('open')){l.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus();}});
  }
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var f=document.getElementById('estimate-form'),s=document.getElementById('form-status');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var n=f.querySelector('#f-name'),p=f.querySelector('#f-phone');
    if(!n.value.trim()||!p.value.trim()){s.textContent='Please add your name and phone number.';(n.value.trim()?p:n).focus();return;}
    s.textContent='Thanks! (Demo only: this form is not connected yet, so nothing was sent. Please call (305) 910-3817.)';
  });}
})();
