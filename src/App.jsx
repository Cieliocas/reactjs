function App() {
	const nome = "Cielio"

	function retornaNome() {
		return nome
	}

	return(
		<>
			<h1>Olá {retornaNome()}</h1>
			<h2>Subtítulo</h2>
		</>
	)
}
export default App
