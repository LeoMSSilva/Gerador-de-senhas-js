import {
	size,
	number,
	uppercase,
	lowercase,
	symbol,
	button,
	result,
} from './formVariables';
import generateNewPassword from './generators';

const messageSize = 'Marque um tamanho válido para poder gerar senha!';
const messageOptions =
	'Todas as opções estão desmarcadas!\nÉ preciso marcar pelo menos uma opção!';

const print = (message) => {
	result.innerHTML = message;
};

const validation = () => {
	if (size.value === '' || !(size.value > 0)) {
		alert(messageSize);
		return false;
	}
	if (
		!number.checked &&
		!uppercase.checked &&
		!lowercase.checked &&
		!symbol.checked
	) {
		alert(messageOptions);
		return false;
	}
	return true;
};

const generatePassword = () => {
	const generatedPassword = generateNewPassword(
		size.value,
		number.checked,
		uppercase.checked,
		lowercase.checked,
		symbol.checked,
	);

	print(generatedPassword);
};

export default () => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		const valid = validation();
		valid && generatePassword();
	});
};
