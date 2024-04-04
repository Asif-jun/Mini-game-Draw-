const board = document.querySelector('#board');
const colors = ['#5199FF', '#4A69FF','#2300B0','#7EB3FF','#1EC9E8','#48CFAF','#00DFC8','#4BB462','#8CBA51','#FF756B','#F59BAF','#FF005C','#E47CCD','#F375CF','#940CFE','#E6E7E8','#F0F6F4','#BBC9DD','#2F3538','gold','pink','black','green','deeppink','brown']; 
const SQUARES_NUMBER = 450; 

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}