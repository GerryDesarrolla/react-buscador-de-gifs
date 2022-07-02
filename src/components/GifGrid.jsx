import {GifItem} from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {Loader} from "./Theme";

export const GiftGrid = ({categoria}) => {
	const {imagenes, isLoading} = useFetchGifs(categoria)
	
	return (
		<>
			{isLoading && <Loader/>}
			
			<h3>{categoria}</h3>
			
			{
				imagenes.length === 0
					? <p>No se encontraron resultado para <i>"{categoria}"</i></p>
					: <ul className="c-grid">
						{imagenes.map((imagen) => (
							<GifItem key={imagen.id} {...imagen}/>
						))}
					</ul>
			}
		</>
	)
}
