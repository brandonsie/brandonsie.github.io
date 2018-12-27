if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
//Listen for unload event. This is triggered when leaving the page.
//Reference: https://developer.mozilla.org/en-US/docs/Web/Events/unload
window.addEventListener('unload', function(e) {
    //set scroll position to the top of the page.
    window.scrollTo(0, 0);
});
