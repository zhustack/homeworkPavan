const iconeMexendo = document.getElementById('iconeMexendo');
iconeMexendo.onclick = () => {
	const ate = document.querySelector('.about').offsetTop;
	arrayVazio = [];
	for(i = 0;i<ate;i++){
		arrayVazio.push(i);
	}
	arrayVazio.forEach((numero, i) => {
		setTimeout(() => document.documentElement.scrollTop = numero, i);
	})
}