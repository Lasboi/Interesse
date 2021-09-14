window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Viser navigationen når man har scrollet 500px ned af siden
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-150px";
    }

    // Fjerner pilen der hopper når man har scrollet 300px ned af siden
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("arrow").style.display = "none";
    } else {
        document.getElementById("arrow").style.display = "inline";
    }
}