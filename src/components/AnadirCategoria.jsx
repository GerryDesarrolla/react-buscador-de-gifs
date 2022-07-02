import {useState} from "react";

export const AnadirCategoria = ({onNuevaCategoria}) => {
	const [valorInput, setValorInput] = useState('');
	
	const cambiarValorInput = ({target}) => {
		setValorInput(target.value);
	}
	
	const enviarFormulario = (evento) => {
		evento.preventDefault();
		
		const valorLimpio = valorInput.trim();
		
		if(valorLimpio.length <= 1) return;
		
		onNuevaCategoria(valorLimpio);
		
		setValorInput('');
	}
	
	return (
		<form onSubmit={enviarFormulario}>
			<fieldset>
				<input
					autoComplete="off"
					required
					type="text"
					id="buscar"
					value={valorInput}
					onChange={cambiarValorInput}
				/>
				<label
					htmlFor="buscar"
				>Buscar Gifs</label>
			</fieldset>
		</form>
	)
}
