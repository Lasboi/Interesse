/* Script som tager fat i billedet og derefter sætter en ImageText som bliver
* synlig når man hover - Den tekst som bliver vist er ALT teksten som man sætter
* til billedet*/

var img = document.getElementsByTagName("img");
var text = document.getElementById("imageText");

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", function() {
        var alt = this.alt;
        text.textContent = alt;
    })
    img[i].addEventListener("mouseleave", function() {
        var alt = this.alt;
        text.textContent = "";
    });
}