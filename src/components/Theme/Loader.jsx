import './_c-loader.scss';

export const Loader = () => {
	return(
		<div className="c-loader">
			<div className="c-loader__contenedor">
				<div className="c-loader__cara c-loader__cara--uno">
					<div className="c-loader__circulo"></div>
				</div>
				<div className="c-loader__cara c-loader__cara--dos">
					<div className="c-loader__circulo"></div>
				</div>
			</div>
		</div>
	)
}
