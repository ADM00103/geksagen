var wrapper = document.querySelector(".qwrapper");
var text = document.querySelector(".qtext");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      // Created textNode to append
      var texts = document.createTextNode(textCont[i])
      var span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("qwave");
      wrapper.appendChild(span);

    }, 75 * i);
  }(i));
}