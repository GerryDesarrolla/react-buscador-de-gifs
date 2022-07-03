import {useState} from "react";
import PropTypes from "prop-types";

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
		<form onSubmit={enviarFormulario} aria-label="form">
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

AnadirCategoria.protoType = {
	onNuevaCategoria: PropTypes.func.isRequired
}
