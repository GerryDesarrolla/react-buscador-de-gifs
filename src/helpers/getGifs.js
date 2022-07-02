export const getGifs = async (categoria) => {
	const apiKey = 'H0Kyp2ijwEM26nE0dv421JLD6Qd00USk';
	const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=12&api_key=${apiKey}`
	const respuesta = await fetch(url);
	const {data} = await respuesta.json();
	
	console.log(data);

	return data.map(({id, title, images, url}) => ({
		id: id,
		title: title,
		url: url,
		image: images.downsized_medium.url
	}));
}
