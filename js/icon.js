window.onload = function() {
    var icons = document.querySelectorAll(".local-nav li [class^=icon-local-]");
    console.log(icons);
    for (var i = 0; i < 5; i++) {
        console.log(icons[i]);
        y = i * 40;
        icons[i].style.backgroundPosition = 0 + ' -' + y + 'px';
    }
    var icon = document.querySelectorAll(".subnav-icon");

    for (var i = 0; i < 10; i++) {
        y = i * 28;
        icon[i].style.backgroundPosition = 0 + ' -' + y + 'px';
    }
}