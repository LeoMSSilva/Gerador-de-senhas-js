const form = document.querySelector('#form');
const size = document.querySelector('#size');
const number = document.querySelector('#number');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const symbol = document.querySelector('#symbol');
const button = document.querySelector('#generate');
const result = document.querySelector('#result');
const labelSize = document.querySelector('#labelSize');
const labelNumber = document.querySelector('#labelNumber');
const labelUppercase = document.querySelector('#labelUppercase');
const labelLowercase = document.querySelector('#labelLowercase');
const labelSymbol = document.querySelector('#labelSymbol');

form.addEventListener('click', () => {
	size.value > 0
		? labelSize.classList.remove('disable')
		: labelSize.classList.add('disable');
	number.checked
		? labelNumber.classList.remove('disable')
		: labelNumber.classList.add('disable');
	uppercase.checked
		? labelUppercase.classList.remove('disable')
		: labelUppercase.classList.add('disable');
	lowercase.checked
		? labelLowercase.classList.remove('disable')
		: labelLowercase.classList.add('disable');
	symbol.checked
		? labelSymbol.classList.remove('disable')
		: labelSymbol.classList.add('disable');
});

export { size, number, uppercase, lowercase, symbol, button, result };
