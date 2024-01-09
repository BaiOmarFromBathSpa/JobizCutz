// const Cursor = document.getElementById('Cursor');

document.addEventListener('mousemove', e => {
    // let CursorSize = parseInt(getComputedStyle(Cursor).width, 10);
    document.documentElement.style.setProperty('--CursorTop', e.clientY + "px");
    document.documentElement.style.setProperty('--CursorLeft', e.clientX + "px");
})