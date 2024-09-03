// Detect <meter> support
if ("value" in document.createElement("meter")) {
  document.getElementsByTagName("html")[0].className += " meter";
}
