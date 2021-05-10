let select = document.getElementById("operation")

console.log(window);
function filterData(select) {
  if (operation.value == 'Subtraction') {
    let r = row.value
    let c = col.value
    textt.innerHTML = 'SUBTRACTION TABLE'
    let output = "<table border='1' min-width = '50%' cellpadding='0' cellspacing='0' id='bgC' >"
    for (i = 0; i < r; i++) {
      output = output + "<tr>"
      for (j = 1; j <= c; j++) {
        output = output + "<td id='expand'>" + `  ${j} - ${eval(i + 1)} =  ${j - eval(i + 1)}` + "</td>"
      }
      output = output + "</tr>"
    }
    output = output + "</table>"
    answer.innerHTML = output
  }
  else if (operation.value == 'Multiplication') {
    let r = row.value
    let c = col.value
    textt.innerHTML = 'MULTIPLICATION TABLE'
    let output = "<table border='1' min-width = '50%' cellpadding='0' cellspacing='0' id='bgC'>"
    for (i = 0; i < r; i++) {
      output = output + "<tr>"
      for (j = 1; j <= c; j++) {
        output = output + "<td id='expand'>" + ` ${j} x ${eval(i + 1)}  =  ${eval(i + 1) * j}` + "</td>"
      }
      output = output + "</tr>"
      // j = 1  
    }
    output = output + "</table>"
    answer.innerHTML = output
  }
  else if (operation.value == 'Addition') {
    let r = row.value
    let c = col.value
    textt.innerHTML = 'ADDITION TABLE'
    let output = "<table border='1' min-width = '50%' cellpadding='0' cellspacing='0' id='bgC'>"
    for (i = 0; i < r; i++) {
      output = output + "<tr>"
      for (j = 1; j <= c; j++) {
        output = output + "<td id='expand'>" + ` ${j} + ${eval(i + 1)}  =  ${eval(i + 1) + j}` + "</td>"
      }
      output = output + "</tr>"
      // j = 1  
    }
    output = output + "</table>"
    answer.innerHTML = output
  }
  else if (operation.value == 'Division') {
    let r = row.value
    let c = col.value
    textt.innerHTML = 'DIVISION TABLE'
    let output = "<table border='1' min-width = '50%' cellpadding='0' cellspacing='0' id='bgC'>"
    for (i = 0; i < r; i++) {
      output = output + "<tr>"
      for (j = 1; j <= c; j++) {
        let result = j / eval(i + 1)
        result = result.toFixed(1)
        output = output + "<td id='expand'>" + ` ${j} / ${eval(i + 1)}  = ` + result + "</td>"
      }
      output = output + "</tr>"

    }
    output = output + "</table>"
    answer.innerHTML = output
  }

}