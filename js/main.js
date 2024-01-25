const ROWS = 10
const COLS = 10

function viewBoxes() {
  let result = ``

  for (let x = 0; x < ROWS; x++) {
    result += `<div class="row">`
    for (let y = 0; y < COLS; y++) {
      result += `<div class="col" id="r${x}_c${y}"></div>`
    }
    result += `</div>`
  }
  return result
}

let remove = false
let x = 0
let y = 0
function rotateBox() {
  if (x == 0 && y != COLS - 1) {
    y++
  } else if (y == COLS - 1 && x != ROWS - 1) {
    x++
  } else if (x == ROWS - 1 && y != 0) {
    y--
  } else if (y == 0 && x != 0) {
    x--
  }
  if (y == 0 && x == 0) {
    remove = !remove
  }

  if (remove) {
    document.getElementById(`r${x}_c${y}`).classList.remove('visible')
  } else {
    document.getElementById(`r${x}_c${y}`).classList.add('visible')
  }
}

function view() {
  document.getElementById('app').innerHTML = `
		${viewBoxes()}
	`
  setInterval(rotateBox, 100)
}
