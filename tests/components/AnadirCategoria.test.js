import {fireEvent, render, screen} from "@testing-library/react";
import {AnadirCategoria} from "../../src/components/";

describe('Pruebas en <AnadirCategorias/>', function() {
	const nombre = 'Gerry';
	const onNuevaCategoria = jest.fn();
	
	test('Debe de cambiar el valor del input', () => {
		render(<AnadirCategoria onNuevaCategoria={() => {}}/>);
		
		const input = screen.getByRole('textbox');
		
		fireEvent.input(input, {target: {value: nombre}});
		
		expect(input.value).toBe(nombre);
	})
	
	test('Debe llamar onNuevaCategoria si tiene un valor', () => {
		render(<AnadirCategoria onNuevaCategoria={onNuevaCategoria}/>);
		
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		
		fireEvent.input(input, {target: {value: nombre}});
		fireEvent.submit(form);
		
		expect(input.value).toBe('');
		expect(onNuevaCategoria).toHaveBeenCalled();
		expect(onNuevaCategoria).toHaveBeenCalledTimes(1);
		expect(onNuevaCategoria).toHaveBeenCalledWith(nombre);
	})
	
	test('No debe mandar a llamar a onNuevaCategoria si el input está vació', () => {
		render(<AnadirCategoria onNuevaCategoria={onNuevaCategoria}/>);
		
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		
		fireEvent.input(input, {target: {value: ''}});
		fireEvent.submit(form);
		
		expect(onNuevaCategoria).toHaveBeenCalledTimes(0);
	})
});
