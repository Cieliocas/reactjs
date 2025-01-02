function App() {
	const nome = "Cielio"

	function retornaNome() {
		return nome
	}

	return(
		<div>
			<h1>Olá {retornaNome()}</h1>
			<h2>Subtítulo</h2>
		</div>
	)
}
export default App
