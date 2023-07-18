if (navigator.userAgent.indexOf('Firefox') != -1) {
    document.querySelector('body').classList.add('firefox');
    // alert("firefox");

} else {
    document.querySelector('body').classList.add('not-firefox');
    // alert("not firefox");
}