function App() {
	const nome = "Cielio"

	function retornaNome() {
		return nome
	}

	const pessoa = {
		nome: "Cieliocas",
		idade: 25,
	}

	let estaDeNoite = false;

	return(
		<>
			<h1>Olá {retornaNome()}</h1>
			<h1>Olá {pessoa.nome}</h1>
			<h2>Subtítulo</h2>
			{estaDeNoite ? 'Boa noite' : 'Bom dia'}
		</>
	)
}
export default App
