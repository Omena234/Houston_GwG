$( document ).ready(function() {
//Main Elements
  const submit = $("#submit");
  const grid = $("#grid");

//Grid Reset
  function clearGrid() {
    $("table").children().remove();
  }

//Grid Create
  submit.click(function() {
    clearGrid()
    const height = $("input:nth-child(1)").val();
    const width = $("input:nth-child(2)").val();
    if (width > 50 || height > 50) {
      alert ("Grid height and width must be less than 50 each");
    } else {
      for (let i = 0; i < height; i++) {
        const row = grid.append("<tr></tr>");
        for (let j = 0; j < width; j++) {
          row.append("<td></td>").css("background-color", "white");
        }
      }
    }
//Grid Color
    $("td").click(function() {
      let color = $("#color").val();
      $(this).css("background-color", color);
    });
  });
});
