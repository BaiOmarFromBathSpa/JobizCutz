document.addEventListener('mousemove', e => {
    // sets the css variables to the mouse value everytime the mouse is moved within the site
    document.documentElement.style.setProperty('--CursorTop', e.clientY + "px");
    document.documentElement.style.setProperty('--CursorLeft', e.clientX + "px");
})