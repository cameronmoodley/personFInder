//Given the array above, create a forEach loop and write each properties value out to HTML.
//Create a card for each object.
//If the item is not available, add a red border around the card
//We do not want to show the user a true/false values inside the card.
// If the isItemAvailable is false,
//add red text to the card saying that this product is not available.
//If isItemAvailable is true,
//add green text to the card to say that product is available.

const shoppingArray = [
	{
		name: 'Pineapples',
		quantity: 2,
		isItemAvailable: true,
	},
	{
		name: 'Yoghurt',
		quantity: 12,
		isItemAvailable: true,
	},
	{
		name: 'Bread',
		quantity: 1,
		isItemAvailable: false,
	},
];

shoppingArray.forEach(function (item) {
	let stockClass = '';
	let stockText = '';
	let stockTextClass = '';

	if (item.isItemAvailable === false) {
		stockClass = 'isOutOfStockClass';
		stockText = 'Product is not available';
		stockTextClass = 'notAvailable';
	} else {
		stockText = 'Product is available.';
		stockTextClass = 'available';
	}

	document.querySelector('main').innerHTML += `
        <div class="${stockClass}">
            <h2>${item.name}</h2>
            <p>${item.quantity}</p>
            <p class="${stockTextClass}">${stockText}</p>
        </div>
    `;
});
