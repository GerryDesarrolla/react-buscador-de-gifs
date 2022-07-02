export const GifItem = ({title, image, url}) => {
	return (
		<li className="c-grid__item">
			<a className="c-grid__enlace" href={url} title={title} target="_blank">
				<div className="c-grid__imagen">
					<img className="c-grid__img" src={image} alt={title}/>
				</div>
				<p className="c-grid__titulo">
					{title.length > 0 ? title : 'No tiene título'}
				</p>
			</a>
		</li>
	)
}
