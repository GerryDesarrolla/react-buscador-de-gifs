import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', function() {
	const categoria = 'Gerry';
	
	test('Debe regresar el estado inicial', () => {
		const {result} = renderHook(() => useFetchGifs(categoria));
		const {imagenes, isLoading} = result.current;
		
		expect(imagenes.length).toBe(0);
		expect(isLoading).toBeTruthy();
	})
	
	test('Debe regresar un arreglo de imagenes y isloading en false', async () => {
		const {result} = renderHook(() => useFetchGifs(categoria));
		
		await waitFor(() => expect(result.current.imagenes.length).toBeGreaterThan(0));
		
		const {imagenes, isLoading} = result.current;
		
		expect(imagenes.length).toBeGreaterThan(0)
		expect(isLoading).toBeFalsy();
	})
});
