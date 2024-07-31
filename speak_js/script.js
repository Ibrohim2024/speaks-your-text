function speak() {
     var text = document.getElementById('input').value;
     var uttrance = new SpeechSynthesisUtterance(text);
     speechSynthesis.speak(uttrance)
}

document.getElementById("input").addEventListener("click", function() {
     this.classList.toggle("active");
 });