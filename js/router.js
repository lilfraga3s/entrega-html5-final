// router.js - simple SPA router with fade
const Router = (function(){
  const routes = { home: Templates.home, projetos: Templates.projetos, cadastro: Templates.cadastro };
  function navigateTo(route){
    const view = document.getElementById('app'); if(!view) return;
    view.classList.remove('fade-in'); view.classList.add('fade-out');
    setTimeout(()=>{ view.innerHTML = routes[route](); view.classList.remove('fade-out'); view.classList.add('fade-in'); initScripts(route); }, 260);
  }
  function initScripts(route){ if(route==='cadastro'){ Validation.attachForm(document.getElementById('form-cadastro')); } document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click', ()=>UI.openModal(b.getAttribute('data-open-modal')))); }
  function handleLinks(e){ const link = e.target.closest('[data-link]'); if(link){ e.preventDefault(); const target = link.getAttribute('data-link'); navigateTo(target); document.querySelectorAll('.nav-list').forEach(n=>n.classList.remove('open')); } }
  function init(){ document.body.addEventListener('click', handleLinks); navigateTo('home'); }
  return { init, navigateTo };
})();