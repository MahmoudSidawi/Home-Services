// Mobile sidebar toggle
(function(){
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('mobileSidebar');
    const closeBtn = document.getElementById('sidebarClose');
    const overlay = document.getElementById('sidebarOverlay');

    function openSidebar(){
        sidebar.classList.add('open');
        sidebar.setAttribute('aria-hidden','false');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar(){
        sidebar.classList.remove('open');
        sidebar.setAttribute('aria-hidden','true');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    menuBtn && menuBtn.addEventListener('click', openSidebar);
    closeBtn && closeBtn.addEventListener('click', closeSidebar);
    overlay && overlay.addEventListener('click', closeSidebar);
    // close on ESC
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeSidebar(); });
})();
