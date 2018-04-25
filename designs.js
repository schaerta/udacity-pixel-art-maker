var submit = $("input[type=submit]");
var canvas = $("#pixelCanvas");

var eraserSelected = false;

function makeGrid(event) {
  event.preventDefault();
  // Select color input
  var color = $("input[type=color]").val();

  // Select size input
  var height = $("#inputHeight").val();
  var width = $("#inputWidth").val();

  // clear previous canvas, if it exists
  canvas.empty();

  // create columns
  for (var i = 0; i <= height; i++) {
    canvas.append("<tr></tr>");
  }

  // create rows
  var row = $("tr");
  for (var i = 0; i <= width; i++) {
    row.append("<td></td>");
  }

  // add event listener to color
  $("input[type=color]").on("change", function() {
    color = $("input[type=color]").val();
    eraserSelected = false;
    $("#eraser").removeClass("selected");
  });

  // add event listeners to cell
  $("td").on("click", function() {
    if (eraserSelected) {
      $(this).css("background-color", "white");
    } else {
      $(this).css("background-color", color);
    }
  });

}

// When size is submitted by the user, call makeGrid()

// event listener on eraser
$("#eraser").on("click", function() {
  eraserSelected = !eraserSelected;
  if (eraserSelected) {
    $(this).addClass("selected");
  } else {
    $(this).removeClass("selected");
  }
})

submit.on("click", makeGrid);
