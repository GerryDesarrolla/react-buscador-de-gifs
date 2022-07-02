import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
	const [imagenes, setImagenes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	const nuevasImagenes = async () => {
		const imagenesNuevas = await getGifs(categoria);
		setImagenes(imagenesNuevas);
		setIsLoading(false);
	}
	
	useEffect(() => {
		nuevasImagenes();
	}, []);
	
	return {
		imagenes,
		isLoading
	}
}
