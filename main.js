/* Main function to show progress screen or fake loading screen */
function progress() {
    var progressdiv = document.getElementsByClassName("progress")[0];    
    var containerdiv = document.getElementsByClassName("container")[0];
    
    var maxHeight = containerdiv.clientHeight;
    
    containerdiv.style.display = "none";
    progressdiv.style.display = "block";    
    
    var elem = document.getElementsByClassName("bar"); 
    var height = 1;
    var width = 2;
    var wid;
    
    /* Increase width of progress divs */
    if( window.innerWidth <= 767){
        var hid = setInterval(increaseheightMobile, 20);
    }
    else if( window.innerWidth > 767){
        var hid = setInterval(increaseheightDesktop, 1);
    }
    function increaseheightMobile() {
        if (height >= 100) {
            clearInterval(hid);
            wid = setInterval(increasewidth, 20);
        } else {
            height++; 
            elem[0].style.height = height + '%';
            elem[1].style.height = height + '%';
        }
    }
    
    function increaseheightDesktop() {
        if (height >= maxHeight) {
            clearInterval(hid);
            wid = setInterval(increasewidth, 20);
        } else {
            height++; 
            elem[0].style.height = height + 'px';
            elem[1].style.height = height + 'px';
        }
    }

    /* Increasing width after height is 100% */
    function increasewidth() {
        if (width >= 50) {
            clearInterval(wid);
            decrease();
        } else {
            width++; 
            elem[0].style.width = width + '%';
            elem[1].style.width = width + '%';
        }
    }

    /* Decreasing width/height based on the window size */
    function decrease(){
        if( window.innerWidth <= 767){
            containerdiv.style.display = "block";
            progressdiv.style.backgroundColor = "transparent";
            hid = setInterval(decreaseheight, 10);
        }
        else if( window.innerWidth > 767){
            containerdiv.style.display = "block";
            progressdiv.style.backgroundColor = "transparent";
            elem[0].style.display = "block";
            elem[0].style.float = "left";
            elem[1].style.display = "block";
            elem[1].style.float = "right";
            wid = setInterval(decreasewidth, 20);
        }
    }

    function decreaseheight() {
        if (height <= 0) {
            clearInterval(hid);
            showMainContent();
        } else {
            height--; 
            elem[0].style.height = height + '%';
            elem[1].style.height = height + '%';
        }
    }

    function decreasewidth() {
        if (width <= 0) {
            clearInterval(wid);
            showMainContent();
        } else {
            width--; 
            elem[0].style.width = width + '%';
            elem[1].style.width = width + '%';
        }
    }

    /* Removing progress screen and show main content */
    function showMainContent(){
        progressdiv.style.display = "none";
        var anim = document.getElementsByClassName("animated");
        for(i=0; i<anim.length; i++)
            anim[i].style.animationPlayState = "running";
    }

}
/* Starting fake loading screen */
progress();