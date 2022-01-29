function transformFunction(x) {
    x.classList.toggle("animation");
}

function OpenandClose() {
    var y = document.getElementById("navmenufunc");
    if (y.style.width == "250px") {
        y.style.width = "0px";
    } else {
        y.style.width = "250px";
    }
}

window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    if (document.body.scrollTop > 7 || document.documentElement.scrollTop > 7) {
        document.getElementById("headingjs").style.padding= "5px";
        document.getElementById("headingh1").style.fontSize = "25px";
        document.getElementById("headingp").style.fontSize= "15px";
    }
    else{
        document.getElementById("headingjs").style.padding= "15spx";
        document.getElementById("headingh1").style.fontSize= "50px";
        document.getElementById("headingp").style.fontSize= "25px";
    }
}