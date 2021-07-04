const table = document.getElementsByTagName('table')[0]
const select = document.getElementsByTagName('select')[0]
const button = document.getElementById('add-row')
const removeRowButton = document.getElementById('remove-row')
const picker = document.getElementById('row-size-picker')
const fillGridButton = document.getElementById('fill-grid')
const fillGreyButton = document.getElementById('fill-grey')
const clearButton = document.getElementById('clear')

picker.value = 10
let rowSize = picker.value
let chosenColor = 'red'

button.addEventListener('click', makeRow)
removeRowButton.addEventListener('click', removeRow)
picker.addEventListener('change', setRowSize)
table.addEventListener('click', colorize)
table.addEventListener('mousedown', addMouseOver)
table.addEventListener('mouseup', removeMouseOver)
select.addEventListener('change', pickColor)
fillGridButton.addEventListener('click', fillGrid)
fillGreyButton.addEventListener('click', fillGrey)
clearButton.addEventListener('click', clear)

// Change the row size to the value that's indicated
function setRowSize (event) {
  rowSize = event.target.value
}

function makeRow () {
  const row = document.createElement('tr')
  for (let i = 0; i < rowSize; i++) {
    const td = document.createElement('td')
    row.appendChild(td)
  }
  table.appendChild(row)
}

// Remove the last child of the table to remove the row
// Good idea to check if the table exists as well
function removeRow () {
  table.removeChild(table.lastChild)
}

function colorize (event) {
  const target = event.target
  if (target.tagName !== 'TD') {
    return
  }
  if (target.className === chosenColor) {
    target.className = ''
  } else {
    target.className = chosenColor
  }
}

function pickColor (event) {
  chosenColor = event.target.value
}

function addMouseOver () {
  table.addEventListener('mouseover', colorize)
}

function removeMouseOver () {
  table.removeEventListener('mouseover', colorize)
}

// Fill the grid with the specified color
function fillGrid () {
  // Grab the table cells and convert them into an array
  const cells = Array.from(document.getElementsByTagName('td'))
  // For each cell, change the class name to the chosen color
  cells.forEach(cell => {
    cell.className = chosenColor
  })
}

// Fill the grey cells
function fillGrey () {
  // Grab the table cells and convert them into an array
  const cells = Array.from(document.getElementsByTagName('td'))
  // Check for grey cells by checking the class list if it has a length
  const greyCells = cells.filter(cell => !cell.classList.length)
  // For each grey cell, change the class name to the chosen color
  greyCells.forEach(cell => {
    cell.className = chosenColor
  })
}

// Clear the table cells
function clear () {
  // Grab the table cells and convert them into an array
  const cells = Array.from(document.getElementsByTagName('td'))
  // For each cell, change the class name to an empty string
  cells.forEach(cell => {
    cell.className = ''
  })
}
