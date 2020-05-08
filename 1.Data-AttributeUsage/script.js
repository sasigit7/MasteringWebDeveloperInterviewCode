// var highlight = document.querySelectorAll(".tooltip");
var highlight = document.querySelectorAll("[data-highlight-click]");
  highlight.forEach(function(item) {
      item.addEventListener("click", function() {
        // if(item.dataset.highlightClick === "on") {
        //   item.style.backgroundColor ="red";
        // }
        item.style.backgroundColor ="red";
      }, false);
  }, this);

