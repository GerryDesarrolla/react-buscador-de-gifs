import './_c-theme.scss';

const tema = (evento) => {
	evento.target.checked
		? Array.from(document.querySelectorAll('html')).forEach((elemento) => elemento.classList.add('light'))
		: Array.from(document.querySelectorAll('html')).forEach((elemento) => elemento.classList.remove('light'))
}

export const Theme = () => {
	return (
		<label className="c-theme" htmlFor="Tema">
			<input onChange={tema} className="c-theme__input" type="checkbox" id="Tema"/>
			<span className="c-theme__span"></span>
		</label>
	)
}
