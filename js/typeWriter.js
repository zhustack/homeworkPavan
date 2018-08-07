function escreverText(texto){
	const arrayTexto = texto.innerHTML.split('');
	texto.innerHTML = '';
	arrayTexto.forEach((letra, i) => {
		setTimeout(() => texto.innerHTML += letra, 100 * i);
	});
}
const textoInterativo = document.querySelector('#textoInterativo');
escreverText(textoInterativo);