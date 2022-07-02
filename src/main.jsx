import React from 'react';
import ReactDOM from 'react-dom/client';
import {BuscadorGifs} from "./BuscadorGifs";
import "normalize.css/normalize.css";
import "./estilos.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BuscadorGifs/>
	</React.StrictMode>
)
