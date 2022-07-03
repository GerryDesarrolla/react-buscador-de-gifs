import {render, screen} from "@testing-library/react";
import {GiftGrid} from "../../src/components";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en el componente <GifGrid/>', function() {
	const categoria = 'Gerry';
	
	test('Debe mostrar el loadign inicialmente', () => {
		render(<GiftGrid categoria={categoria}/>);
		
		expect(screen.getByLabelText('loading'));
	})
	
	test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
		useFetchGifs.mockReturnValue({
			imagenes: [{
				id: '123',
				title: 'Gerry',
				url: 'Gerry.com',
				image: 'gerry.jpg'
			},{
				id: '456',
				title: 'Gerry 2',
				url: 'Gerry2.com',
				image: 'gerry.jpg'
			}],
			isLoading: false
		});
		
		render(<GiftGrid categoria={categoria}/>);
		expect(screen.getAllByRole('img').length).toBe(2)
	})
});
