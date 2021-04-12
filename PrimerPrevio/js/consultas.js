var myArray;

fetch("http://demo6497253.mockable.io/categoria/deporte")
  .then((response) => response.json())
  .then((data) => (myArray = data));

var foo = myArray.map(function (bar) {
  return "<li>" + bar.marca + " " + bar.modelo + "</li>";
});
document.getElementById("deportes").innerHTML = foo;
