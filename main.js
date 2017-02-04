/* Main function to show progress screen or fake loading screen */
function progress() {
    document.getElementsByClassName("progress")[0].style.display = "block";                
    document.getElementsByClassName("container")[0].style.display = "none";
    var elem = document.getElementsByClassName("bar"); 
    var height = 1;
    var width = 2;
    var wid;
    
    /* Increase width of progress divs */
    var hid = setInterval(increaseheight, 20);
    function increaseheight() {
        if (height >= 100) {
            clearInterval(hid);
        } else {
            height++; 
            elem[0].style.height = height + '%';
            elem[1].style.height = height + '%';
        }
    }

    /* Increasing width after height is 100% */
    setTimeout(function(){
        wid = setInterval(increasewidth, 20);
    }, 2000);
    function increasewidth() {
        if (width >= 50) {
            clearInterval(wid);
        } else {
            width++; 
            elem[0].style.width = width + '%';
            elem[1].style.width = width + '%';
        }
    }
    
    /* Decreasing width/height based on the window size */
    setTimeout(function(){
        if( window.innerWidth <= 767){
            document.getElementsByClassName("container")[0].style.display = "block";
            document.getElementsByClassName("progress")[0].style.backgroundColor = "transparent";
            hid = setInterval(decreaseheight, 10);
        }
        else if( window.innerWidth > 767){
            document.getElementsByClassName("container")[0].style.display = "block";
            document.getElementsByClassName("progress")[0].style.backgroundColor = "transparent";
            elem[0].style.display = "block";
            elem[0].style.float = "left";
            elem[1].style.display = "block";
            elem[1].style.float = "right";
            wid = setInterval(decreasewidth, 20);
        }
    }, 3800);

    function decreaseheight() {
        if (height <= 0) {
            clearInterval(hid);
        } else {
            height--; 
            elem[0].style.height = height + '%';
            elem[1].style.height = height + '%';
        }
    }

    function decreasewidth() {
        if (width <= 0) {
            clearInterval(wid);
        } else {
            width--; 
            elem[0].style.width = width + '%';
            elem[1].style.width = width + '%';
        }
    }

    /* Removing progress screen and show main content */
    setTimeout(function(){
        document.getElementsByClassName("progress")[0].style.display = "none";
        var anim = document.getElementsByClassName("animated");
        for(i=0; i<anim.length; i++)
            anim[i].style.animationPlayState = "running";
    }, 5300);

}
/* Starting fake loading screen */
progress();