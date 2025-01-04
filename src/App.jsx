import { useState } from "react";

import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario";


function App() {
	const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
	return(
		<>
			<Perfil nome="Cielio" endereco="https://github.com/cieliocas.png"/>
			{formularioEstaVisivel && <Formulario />}
			<button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
		</>
	)
}
export default App;

