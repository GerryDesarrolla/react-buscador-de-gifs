import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components";

describe('Pruebas en <GifItem/>', () => {
	const imagen = 'https://gerrydesarrolla.com/profile.jpg';
	const titulo = 'Gerry';
	const url = 'https://gerrydesarrolla.com';
	
	test('Debe hacer match con el snapshot', () => {
		const {container} = render(<GifItem image={imagen} title={titulo} url={url}/>);
		
		expect(container).toMatchSnapshot();
	})
	
	test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GifItem image={imagen} title={titulo} url={url}/>);
		
		const {src, alt} = screen.getByRole('img');
		
		expect(src).toBe(imagen);
		expect(alt).toBe(titulo);
	})
	
	test('Debe mostrar el titulo en el componente', () => {
		render(<GifItem image={imagen} title={titulo} url={url}/>);
		
		expect(screen.getByText).toBeTruthy();
	})
})
