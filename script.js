var input = document.queryselector("input");
var button = document.querySelector("button");
var ol = document.querySelector("ol");

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    ol.append(input.value, document.createElement("br"));
    input.value = "";
  }
});

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 && input.value.length > 0) {
    ol.append(input.value, document.createElement("br"));
    input.value = "";
  }
});
