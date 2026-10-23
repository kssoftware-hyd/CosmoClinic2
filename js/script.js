/* Cosmo International Clinic – site scripts */
(function(){
  // Mobile menu
  var burger=document.getElementById('burger'),nav=document.getElementById('nav');
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var o=nav.classList.toggle('open');
      burger.setAttribute('aria-expanded',o?'true':'false');
    });
  }
  // Dropdowns (click/tap)
  var dds=document.querySelectorAll('.dd');
  dds.forEach(function(dd){
    var b=dd.querySelector('.ddbtn');
    if(!b)return;
    b.addEventListener('click',function(e){
      e.stopPropagation();
      var o=dd.classList.toggle('open');
      b.setAttribute('aria-expanded',o?'true':'false');
      dds.forEach(function(x){if(x!==dd){x.classList.remove('open');var xb=x.querySelector('.ddbtn');if(xb)xb.setAttribute('aria-expanded','false');}});
    });
  });
  document.addEventListener('click',function(){
    dds.forEach(function(x){x.classList.remove('open');var xb=x.querySelector('.ddbtn');if(xb)xb.setAttribute('aria-expanded','false');});
  });
  // Lightbox
  var lb=document.getElementById('lb'),cap=document.getElementById('lbcap'),close=document.getElementById('lbclose');
  if(lb){
    document.querySelectorAll('[data-cap]').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(cap)cap.textContent=btn.getAttribute('data-cap')||'';
        lb.hidden=false;
        if(close)close.focus();
      });
    });
    function hide(){lb.hidden=true;}
    if(close)close.addEventListener('click',hide);
    lb.addEventListener('click',function(e){if(e.target===lb)hide();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)hide();});
  }
})();
