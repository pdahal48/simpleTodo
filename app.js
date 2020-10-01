const uList = document.querySelector('#uList');

uList.addEventListener ('click', function (e) {
    if (e.target.tagName == 'BUTTON') {
        e.target.parentElement.classList.toggle("complete");
    } else if (e.target.tagName == 'LI'){
    }
})