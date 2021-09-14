// Vælger den korrekte Modal
var modal = document.getElementById("ModalOne");

// Finder det korrekte billede og indsætter den caption som står under billedet (Alt Teksten)
var img = document.getElementById("sectionImageOne");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Lukke knappen
var span = document.getElementsByClassName("close")[0];

// Funktion til at lukke modal
span.onclick = function() {
    modal.style.display = "none";
}