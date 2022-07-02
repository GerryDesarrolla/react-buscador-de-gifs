import {useState} from "react";
import {AnadirCategoria, GiftGrid} from "./components";
import {Theme} from "./components/Theme";

export const BuscadorGifs = () => {
	const [categorias, setCategorias] = useState(['Frontend']);
	const [categoriaRepetida, setCategoriaRepetida] = useState('');
	const [mensajeActivo, setMensajeActivo] = useState(false);
	
	const onAnadirCategoria = (nuevaCategoria) => {
		if(categorias.includes(nuevaCategoria)){
			setCategoriaRepetida(nuevaCategoria);
			setMensajeActivo(true);
			setTimeout(() => setMensajeActivo(false), 3000);
			return;
		}
		setCategorias([nuevaCategoria, ...categorias])
	}
	
	return(
		<>
			<Theme/>
			<div className="o-container">
				<h1>Buscador de Gifs</h1>
				
				<AnadirCategoria onNuevaCategoria={onAnadirCategoria}/>
				
				{categorias.map(categoria => <GiftGrid key={categoria} categoria={categoria}/>)}
				
				<p className={mensajeActivo ? 'o-mensaje is-active' : 'o-mensaje'}>Ya has buscado "{categoriaRepetida}"</p>
			</div>
		</>
	)
}
