const symbols = '\'"!@#$%&*()-_¬¢£+=§`´[]{}ªº^~/?°;:>.<,|\\';
symbols.split;

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateNumber = () => String(random(0, 10));

const generateUppercase = () => String.fromCharCode(random(65, 91));

const generateLowercase = () => String.fromCharCode(random(97, 122));

const generateSymbol = () => symbols[random(0, symbols.length)];

const generatePassword = (size, optionFunction) => {
	const newPassword = [];

	while (size > newPassword.length) {
		let position = random(0, optionFunction.length);
		let createdCharacter = optionFunction[position]();
		newPassword.push(createdCharacter);
	}

	return newPassword.join('');
};

export default (size, number, uppercase, lowercase, symbol) => {
	const optionFunction = [];
	number && optionFunction.push(generateNumber);
	uppercase && optionFunction.push(generateUppercase);
	lowercase && optionFunction.push(generateLowercase);
	symbol && optionFunction.push(generateSymbol);

	const newPassword = generatePassword(size, optionFunction);
	return newPassword;
};
