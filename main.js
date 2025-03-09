// funzione che genera un numero casuale tra 0 e 255 rappresentando 
// i valori dei componenti colore nello spettro rgb
function randomColorArray() {
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);

	return [r, g, b];
}

// formato colore hex - esadecimale che si presenta con 6 cifre (dalla A alla F + 0 a 9) preceduti da un #
function randomColorHex() {
// chiama la funzione 
	const cArray = randomColorArray();
// assegna alle componenti la conversione del numero in stringa base 16
// si assicura che la stringa abbia sempre due caratteri
	const r = cArray[0].toString(16).padStart(2, '0');
	const g = cArray[1].toString(16).padStart(2, '0');
	const b = cArray[2].toString(16).padStart(2, '0');

	return '#' + r + g + b;
}

// funzione che restituisce una stringa nel formato rgb(r, g, b)
function randomColorRgb() {
	const cArray = randomColorArray();
	return `rgb(${cArray[0]},${cArray[1]},${cArray[2]})`;
}

// funzione che restituisce un oggetto con proprietà r, g, b
function randomColorObj() {
	const cArray = randomColorArray();
	return {r: cArray[0], g:cArray[1], b:cArray[2]};
}