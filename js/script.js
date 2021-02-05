const classArray = [
	{ name: 'Simen' },
	{ name: 'Marthe' },
	{ name: 'Martin' },
	{ name: 'Mariano' },
	{ name: 'Alexander' },
	{ name: 'Ahmed' },
	{ name: 'Heidi' },
	{ name: 'Jessica' },
	{ name: 'Saul' },
	{ name: 'Madeleine' },
	{ name: 'Stian' },
	{ name: 'Silje' },
	{ name: 'Farshad' },
	{ name: 'Markus' },
	{ name: 'Aleksander' },
	{ name: 'Magnus' },
	{ name: 'Erik' },
	{ name: 'Emma' },
	{ name: 'Trond' },
	{ name: 'Nathalie' },
	{ name: 'Danier' },
];

let tempArray = classArray;

function generateRandomNumber(elemLength) {
	return Math.floor(Math.random() * elemLength);
}

const generateRandomFeu1 = () => {
	let randomPerson = generateRandomNumber(tempArray.length);
	let person = tempArray[randomPerson].name;
	tempArray = tempArray.filter((item, index) => {
		return index !== randomPerson;
	});
	console.log(tempArray.length);

	return person;
};

document.querySelector('button').onclick = () => {
	const nameDiv = document.querySelector('.personDiv');
	if (tempArray.length > 0) {
		nameDiv.innerHTML = generateRandomFeu1() + '...';
		let count = 0;
		const anime = setInterval(() => {
			if (count % 2 == 0) {
				nameDiv.classList.add('animate__tada');
			} else {
				nameDiv.classList.remove('animate__tada');
			}
			count++;
		}, 2000);
	} else {
		nameDiv.innerHTML = 'Everyone has been chosen';
	}
};
