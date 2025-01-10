import { useState } from "react";

import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
	const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
	return(
		<>
			<Perfil nomeUsuario="cieliocas" />
			<ReposList />

			{/* {formularioEstaVisivel && <Formulario />} */}

			{/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
		</>
	)
}
export default App;

